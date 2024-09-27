# Three.js VRM Streamlit Minimal Component

![Three.js VRM Streamlit Minimal Component](https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/three-vrm-st-minimal.png)

このリポジトリは、Three.jsとVRMを使用してStreamlitで3Dアバターを表示するための最小限のコンポーネントを提供します。

## 機能

- Three.jsを使用した3D描画
- VRMファイルのロードと表示
- Streamlitとの連携

## インストール

```bash
pip install three-vrm-st-minimal
```

## 使用方法

```python
import streamlit as st
from three_vrm_st_minimal import three_vrm_viewer

# VRMファイルのパスを指定
vrm_path = "path/to/your/avatar.vrm"

# コンポーネントを表示
three_vrm_viewer(vrm_path)
```

## 開発

1. リポジトリをクローン:
   ```
   git clone https://github.com/Sunwood-ai-labs/three-vrm-st-minimal.git
   ```

2. 依存関係をインストール:
   ```
   cd three-vrm-st-minimal
   pip install -r requirements.txt
   ```

3. フロントエンド開発:
   ```
   cd frontend
   npm install
   npm start
   ```

4. Streamlitアプリを実行:
   ```
   streamlit run example.py
   ```

## ライセンス

MITライセンス

## 貢献

プルリクエストは歓迎します。大きな変更については、まず問題を開いて議論してください。

## 作者

Sunwood-ai-labs
