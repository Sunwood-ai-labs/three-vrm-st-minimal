import streamlit as st
from my_component import vrm_viewer

st.set_page_config(page_title="VRM Viewer Example", layout="wide")

st.title("VRM Viewer Example")

vrm_path = st.text_input(
    "Enter VRM model URL",
    "https://raw.githubusercontent.com/pixiv/three-vrm/dev/packages/three-vrm/examples/models/VRM1_Constraint_Twist_Sample.vrm"
)

viewer_state = vrm_viewer(vrm_path=vrm_path)

if viewer_state.get("loaded", False):
    st.success("VRM model loaded successfully!")
elif "error" in viewer_state:
    st.error(f"Error loading VRM model: {viewer_state['error']}")

st.write(viewer_state)
