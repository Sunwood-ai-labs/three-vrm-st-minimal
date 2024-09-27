import os
import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "vrm_viewer",
        url="http://localhost:3006",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("vrm_viewer", path=build_dir)

def vrm_viewer(vrm_path: str, key=None):
    component_value = _component_func(
        vrm_path=vrm_path, key=key, default={"loaded": False, "error": None}
    )
    return component_value
