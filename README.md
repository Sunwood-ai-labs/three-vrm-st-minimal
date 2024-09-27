
<p align="center">
  <img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/three-vrm-st-minimal.png" alt="three-vrm-st-minimal">
</p>

<h1 align="center">three-vrm-st-minimal</h1>

<p align="center">
  <a href="https://github.com/Sunwood-ai-labs/three-vrm-st-minimal"><img src="https://img.shields.io/badge/three--vrm--st--minimal-Sunwood--ai--labs-blue?logo=github" alt="three-vrm-st-minimal - Sunwood-ai-labs"></a>
  <a href="https://github.com/Sunwood-ai-labs/three-vrm-st-minimal"><img src="https://img.shields.io/github/stars/Sunwood-ai-labs/three-vrm-st-minimal?style=social" alt="stars - three-vrm-st-minimal"></a>
  <a href="https://github.com/Sunwood-ai-labs/three-vrm-st-minimal"><img src="https://img.shields.io/github/forks/Sunwood-ai-labs/three-vrm-st-minimal?style=social" alt="forks - three-vrm-st-minimal"></a>
  <a href="https://github.com/Sunwood-ai-labs/three-vrm-st-minimal"><img src="https://img.shields.io/github/last-commit/Sunwood-ai-labs/three-vrm-st-minimal" alt="last commit"></a>
  <a href="https://github.com/Sunwood-ai-labs/three-vrm-st-minimal"><img src="https://img.shields.io/github/languages/top/Sunwood-ai-labs/three-vrm-st-minimal" alt="top language"></a>
</p>

> [!IMPORTANT]
> このリポジトリは[claude-dev](https://github.com/saoudrizwan/claude-dev)と[SourceSage](https://github.com/Sunwood-ai-labs/SourceSage), [GitHub要件定義書](https://github.com/Sunwood-ai-labs/MysticLibrary/blob/main/prompts/meta/GITHUB-REPO-CREATION-REQUIREMENTS.md)を用いて作成されました

## 📋 概要

**three-vrm-st-minimal**は、Three.jsとVRMを使用してStreamlitアプリケーション内で3Dアバターを表示するための最小限のコンポーネントです。WebGLを活用し、ブラウザ上で3Dモデルを簡単に表示できることを目的としています。

## 🚀 特徴

- **Three.jsによる高品質な3D描画**
- **VRMファイルのロードと表示に対応**
- **Streamlitとのシームレスな統合**
- **最小限の設定で簡単に使用可能**

## 🛠️ インストール方法

現時点ではPyPIへの公開がされていないため、以下の手順でローカル環境にインストールしてください。

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/Sunwood-ai-labs/three-vrm-st-minimal.git
   cd three-vrm-st-minimal
   ```

2. Pythonパッケージをインストールします。

   ```bash
   cd template/my_component
   pip install -e .
   ```

3. フロントエンドの依存関係をインストールしてビルドします。

   ```bash
   cd frontend
   npm install
   npm run build
   ```

## 📖 使用方法

以下は、基本的な使用例です。

```python
import streamlit as st
from my_component import vrm_viewer

st.set_page_config(page_title="VRM Viewer Example", layout="wide")

st.title("VRM Viewer Example")

vrm_path = st.text_input(
    "VRMモデルのURLを入力してください",
    "https://raw.githubusercontent.com/pixiv/three-vrm/dev/packages/three-vrm/examples/models/VRM1_Constraint_Twist_Sample.vrm"
)

viewer_state = vrm_viewer(vrm_path=vrm_path)

if viewer_state.get("loaded", False):
    st.success("VRMモデルの読み込みに成功しました！")
elif "error" in viewer_state:
    st.error(f"VRMモデルの読み込みエラー: {viewer_state['error']}")

st.write(viewer_state)
```

## ⚙️ 開発者向け情報

開発環境のセットアップや貢献方法については、[CONTRIBUTING.md](CONTRIBUTING.md)をご覧ください。

### 開発環境のセットアップ

1. **pyenvとvirtualenvのセットアップ**

   ```bash
   curl https://pyenv.run | bash
   pyenv install 3.11.4
   pyenv virtualenv 3.11.4 three-vrm-st-minimal-env
   pyenv activate three-vrm-st-minimal-env
   ```

2. **Pythonパッケージのインストール**

   ```bash
   pip install -r requirements.txt
   ```

3. **フロントエンドのセットアップ**

   ```bash
   cd template/my_component/frontend
   npm install
   npm run start
   ```

4. **Streamlitアプリの起動**

   ```bash
   cd ../../../
   streamlit run my_component/example.py
   ```

## 🤝 貢献方法

1. このリポジトリをフォークします。
2. 新しいブランチを作成します (`git checkout -b feature/YourFeature`)
3. 変更をコミットします (`git commit -m 'Add some feature'`)
4. ブランチにプッシュします (`git push origin feature/YourFeature`)
5. プルリクエストを作成します。

詳細は[CONTRIBUTING.md](CONTRIBUTING.md)をご参照ください。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルをご確認ください。
