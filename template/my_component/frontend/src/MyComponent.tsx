import React, { useEffect, useRef, useState } from "react";
import { Streamlit, ComponentProps, withStreamlitConnection } from "streamlit-component-lib";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VRMLoaderPlugin, VRM } from '@pixiv/three-vrm';

interface Args {
  vrm_path: string;
}

const VRMViewer: React.FC<ComponentProps> = (props: ComponentProps) => {
  const args: Args = props.args;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new THREE.PerspectiveCamera(30.0, canvas.clientWidth / canvas.clientHeight, 0.1, 20.0);
    camera.position.set(0.0, 1.0, 5.0);

    const controls = new OrbitControls(camera, canvas);
    controls.screenSpacePanning = true;
    controls.target.set(0.0, 1.0, 0.0);
    controls.update();

    const scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1.0, 1.0, 1.0).normalize();
    scene.add(light);

    const loader = new GLTFLoader();
    // loader.crossOrigin = 'anonymous';

    loader.register((parser) => {
      return new VRMLoaderPlugin(parser);
    });

    loader.load(
      args.vrm_path,
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM;
        scene.add(vrm.scene);
        setLoading(false);
        Streamlit.setComponentValue({ loaded: true });
      },
      (progress) => console.log('Loading model...', 100.0 * (progress.loaded / progress.total), '%'),
      (error) => {
        console.error('VRMの読み込みエラー:', error);
        setLoading(false);
        Streamlit.setComponentValue({
          loaded: false,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    );

    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      scene.children.forEach((child) => {
        if (child.userData?.vrm) {
          child.userData.vrm.update(delta);
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    const resizeObserver = new ResizeObserver(() => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [args.vrm_path]);

  useEffect(() => {
    Streamlit.setFrameHeight();
  }, []);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      {loading && <p>Loading VRM model...</p>}
    </div>
  );
};

export default withStreamlitConnection(VRMViewer);
