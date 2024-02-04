<script>
  import * as THREE from "../build/three.module";
  import { onMount, tick } from "svelte";

  import { Viewer } from "./lib/scene-config/viewer";
  import queryString from "../js/query-string-main/index.js";
  import WebGL from "../js/WebGL.js";

  let scene;
  let fittingRoomPath = "src/models/motorcycle/honda/motorbike.gltf";

  let viewer;
  let canvas;

  let options;
  window.VIEWER = {};

  $: console.log("canvas: ", canvas);
  $: console.log("viewer: ", viewer);
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    console.error("The File APIs are not fully supported in this browser.");
  } else if (!WebGL.isWebGLAvailable()) {
    console.error("WebGL is not supported in this browser.");
  }
  const init = () => {
    const hash = location.hash ? queryString.parse(location.hash) : {};
    console.log("hasssh: ", hash, location);
    options = {
      kiosk: Boolean(hash.kiosk),
      model: hash.model || "",
      preset: hash.preset || "",
      cameraPosition: hash.cameraPosition
        ? hash.cameraPosition.split(",").map(Number)
        : null,
    };
    // canvas.width = window.innerWidth; // Set width to full window width
    // canvas.height = window.innerHeight; // Set height to full window height
    let container = document.getElementById("container");

    scene = new THREE.Scene();
    viewer = new Viewer(container, options);
    loadModel(fittingRoomPath);

    // //create planeMesh
    // const visiablePlane = new THREE.Mesh(
    //   new THREE.PlaneGeometry(400, 200),
    //   new THREE.MeshBasicMaterial({
    //     color: 0x6f7a73,
    //     side: THREE.DoubleSide,
    //     visible: true,
    //   })
    // );

    // visiablePlane.rotateX(Math.PI / 2);
    // visiablePlane.name = "ground";
    // visiablePlane.position.set(0, -3.5, 0);

    // viewer.createObject(visiablePlane);

    const mainLayer = document.getElementById("main");
    let headerField = document.getElementById("header");

    // Create a new child element

    const canvasThree = viewer.rendererDom();

    // Get the first child of the parent
    const canvas = mainLayer.firstChild;
    // Insert the new child before the first child
    mainLayer.insertBefore(headerField, canvas);

    mainLayer.insertBefore(canvasThree, canvas);

    const axesLayer = viewer.axesDom();
    mainLayer.insertBefore(axesLayer, canvas);
    const guiLayer = viewer.guiDom();
    mainLayer.insertBefore(guiLayer, canvas);
  };

  function loadModel(path) {
    console.log("vao load 1");
    view(path);
    // sendData()
  }

  /**
   * @param  {Error} error
   */
  function onError(error) {
    let message = (error || {}).message || error.toString();
    if (message.match(/ProgressEvent/)) {
      message =
        "Unable to retrieve this file. Check JS console and browser network tab.";
    } else if (message.match(/Unexpected token/)) {
      message = `Unable to parse file content. Verify that this file is valid. Error: "${message}"`;
    } else if (error && error.target && error.target instanceof Image) {
      message = "Missing texture: " + error.target.src.split("/").pop();
    }
    window.alert(message);
    console.error(error);
  }

  function view(path) {
    let fileURL = path;
    viewer
      .load(fileURL)

      .catch((e) => {
        console.log("err: ", e);
        return onError(e);
      })
      .then((gltf) => {
        if (!options.kiosk) {
          // this.validationCtrl.validate(fileURL, rootPath, fileMap, gltf);
        }
        console.log("gltff: ", gltf);
        // cleanup();
      });
    // console.log('in rootPath: ',rootPath)
    // console.log('in fileMap: ',fileMap)
  }

  onMount(() => {
    init();
  });
</script>

<div class="view-button">
  <!-- <button
    style="--focus-color: {isGoMallMode
      ? '#1d6291'
      : '#1f9bed'}; --focus-border: {isGoMallMode ? '2px solid blue' : 'none'}"
    on:click={onOverViewButton}>{textButtonView}</button
  > -->
</div>

<main id="main">
  <canvas class="full-screen" id="container" bind:this={canvas}> </canvas>
  <div class="header" id="header">
    <div class="menu-header">Đổi màu</div>
    <div class="menu-header">Kính lúp</div>
    <div class="menu-header">Thử nghiệm</div>
    <div class="menu-header">Mini game</div>
    <div class="menu-header">Câu chuyện</div>
  </div>
</main>

<!-- <SimpleModal
  bind:this={simpleModalRef}
  heightSize={"250px"}
  on:clickButton={showInfoModel}
  on:closeButton={closeInfomodel}
  saveButtonName={"Save AA"}
  bind:showModal
>
  <div slot="content">
    <div>
      Áo Thun Trơn Áo Phông Trắng Đen Xám Nam Nữ Form Xuông Vải Dày Mịn Không Xù
      Lông
    </div>
    <div class="detail-product">
      <Split initialPrimarySize="70%">
        <div slot="primary" class="left-content">
          <div>Price</div>
          <div>About Product</div>
          <div>Orgin</div>
          <div>Color</div>
          <div>Size</div>
        </div>
        <div slot="secondary" class="right-content">haha</div>
      </Split>
    </div>
  </div>
</SimpleModal> -->

<style>
  .menu-header {
    padding-right: 15px;
    padding-left: 25px;
    z-index: 9999;
  }
  .menu-header:hover {
    cursor: pointer;
  }

  .header {
    width: 50%;
    height: 72px;
    position: relative;

    background-size: 100%;
    background-attachment: fixed;
    border: 1px solid rgba(255, 255, 255, 0.1);

    cursor: move;
    color: #363636;
    text-align: center;
    font: sans-serif;
    font-weight: 600;
    padding: 4px;

    display: flex;
    align-items: center;
    position: absolute;
    height: 4%;
    left: 0;
    right: 0.5;
    border-radius: 10px;
    background-color: lightblue;
    box-shadow: 0 0 16px black;
    -webkit-transition: all 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    -moz-transition: all 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    -o-transition: all 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    -ms-transition: all 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    transition: all 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
  }
  .header:before {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-filter: blur(20px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: url(#blurLayer);
    filter: blur(15px);
    opacity: 0.9;
    content: " ";
    background: lightblue url("src/assets/bluesky.jpg") no-repeat fixed center;
    background-size: cover;
  }

  #main {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    position: absolute;
    top: 0;
    z-index: 0;
  }
  /* .full-screen {
    margin: 0 !important;
    padding: 0 !important;
  } */

  .view-button {
    left: 50%;
    position: fixed;
    bottom: 20px;
    transform: translate(-50%, -50%);
    z-index: 1000; /* Ensure the button appears on top of the canvas */
  }
</style>
