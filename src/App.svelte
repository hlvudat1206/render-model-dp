<script>
  import * as THREE from "../build/three.module";
  import { onMount, tick } from "svelte";

  import { Viewer } from "./lib/scene-config/viewer";
  import queryString from "../js/query-string-main/index.js";
  import WebGL from "../js/WebGL.js";
  import { CSS2DRenderer, CSS2DObject } from "../js/CSS2DRenderer";

  let scene;
  let motoModel = "src/models/motorcycle/honda/motorbike.gltf";
  let infoUrlPng = "src/assets/icons/info-icon.png";

  let viewer;
  let canvas;
  let sphere;
  let options;
  let onMenu = false;
  let onMenuChangeColor = false;
  let onMenuLookUp = false;
  let onNote = false;
  let motobike;
  let colorArr = [
    {
      id: 1,
      name: "Default",
      color: "#ffffff",
    },
    {
      id: 2,
      name: "Pink",
      color: "#ffc0cb",
    },
    {
      id: 3,
      name: "Red",
      color: "#ff0000",
    },
    {
      id: 4,
      name: "Yellow",
      color: "#ffff00",
    },
    {
      id: 5,
      name: "Blue",
      color: "#0000ff",
    },
    {
      id: 6,
      name: "Green",
      color: "#008000",
    },
    {
      id: 7,
      name: "black",
      color: "#000000",
    },
    {
      id: 7,
      name: "blue & black",
      color: "#043561",
    },
  ];
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
    loadModel(motoModel);

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
    // visiablePlane.position.set(0, 10, 0);

    // viewer.createObject(visiablePlane);

    //create Glass
    let glassMaterial = new THREE.MeshPhysicalMaterial();
    glassMaterial.color = new THREE.Color(1, 1, 1);
    glassMaterial.transmission = 1;
    glassMaterial.roughness = 0;
    glassMaterial.ior = 2;
    glassMaterial.thickness = 0.8; //zoom 1
    glassMaterial.specularIntensity = 1;
    glassMaterial.envMapIntensity = 0;
    glassMaterial.emissiveIntensity = 0;

    // glassMaterial.reflectivity = 1; // zoom 2
    sphere = new THREE.Mesh(new THREE.SphereGeometry(), glassMaterial);
    sphere.scale.set(0.2, 0.2, 0.2);
    sphere.position.set(0, 0, 0);
    // viewer.createObject(sphere);

    const mainLayer = document.getElementById("main");
    let headerField = document.getElementById("header");
    let contentField = document.getElementById("content");
    let iconField = loadIcontoObject(infoUrlPng);
    // Create a new child element

    const canvasThree = viewer.rendererDom();

    // Get the first child of the parent
    const canvas = mainLayer.firstChild;
    // Insert the new child before the first child
    mainLayer.insertBefore(headerField, canvas);
    mainLayer.insertBefore(contentField, canvas);
    mainLayer.insertBefore(iconField, canvas);

    mainLayer.insertBefore(canvasThree, canvas);

    const axesLayer = viewer.axesDom();
    mainLayer.insertBefore(axesLayer, canvas);
    const guiLayer = viewer.guiDom();
    mainLayer.insertBefore(guiLayer, canvas);
  };

  function getInteractive() {
    console.log("viewer.interactiveObject(): ", viewer.interactiveObject());
  }

  function loadIcontoObject(icon) {
    console.log("icon: ", icon);
    viewer.icon(icon);
    console.log("viewer icon: ", viewer.icon(icon));
    return viewer.icon(icon);
  }
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
        motobike = gltf;
        // cleanup();
      });
    // console.log('in rootPath: ',rootPath)
    // console.log('in fileMap: ',fileMap)
  }

  const onColorArea = () => {
    onMenu = !onMenu;
    onMenuChangeColor = !onMenuChangeColor;
  };

  const interactObject = () => {};

  const changeColorObject = (item) => {
    if (viewer.interactiveMainObject(motobike)) {
      viewer.interactiveMainObject(motobike).material.color.set(item.color);
    }

    //interactive
  };

  const onDetailObject = () => {
    console.log("detail Object");
    onMenuLookUp = !onMenuLookUp;
  };

  const lookUpObject = (e) => {
    if (onMenuLookUp) {
      viewer.createObject(sphere);

      sphere.position.copy(viewer.mouseMove(e).pos);
    } else {
      viewer.removeObject(sphere);
    }
  };

  const onNoteObject = (e) => {
    onNote = !onNote;
  };
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

<main id="main" on:click={interactObject} on:mousemove={lookUpObject}>
  <canvas class="full-screen" id="container" bind:this={canvas}> </canvas>
  <div class="header" id="header">
    <div
      class="menu-header {onMenuChangeColor ? 'menu-header-activing' : ''}"
      on:click={onColorArea}
    >
      Decorate
    </div>
    <div
      class="menu-header {onMenuLookUp ? 'menu-header-activing' : ''}"
      on:click={onDetailObject}
    >
      Look Up
    </div>
    <div
      class="menu-header {onNote ? 'menu-header-activing' : ''}"
      on:click={onNoteObject}
    >
      See Origin/ History
    </div>
    <div class="menu-header">Experiment</div>
    <div class="menu-header">Mini game</div>
    <div class="menu-header">Story</div>
  </div>
  <div class="content" id="content">
    <aside class:onMenu>
      <div class="card">
        {#each colorArr as items, index}
          <div
            class="color-card"
            style="background-color:{items.color}"
            on:click={() => changeColorObject(items)}
          ></div>
        {/each}
      </div>
    </aside>
    <!-- <div class="icon" id="icon-2d">
      <img
        src="src/assets/icons/info-icon.png"
        alt="info object"
        width="100"
        height="100"
      />
    </div> -->
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

  .menu-header-activing {
    margin-left: 3px;
    border-radius: 6px;
    border: 0.25px solid #ef7403;
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

  aside {
    position: absolute;
    left: -500px;
    transition: all 0.5s;

    height: 60%;
    width: 20%;
    top: 20%;
    border: 1px solid #ddd;
    /* background-color: #ffe7e7; */
    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    background-color: lightblue;
  }

  .onMenu {
    left: 0px;
  }

  .card {
    display: flex;
    position: absolute;
    height: 50%;
    flex-wrap: wrap;
  }

  .color-card {
    padding: 30px;
    /* border: 1px solid #000000; */
    margin: 10px;
    background-color: red;
    border-radius: 6px;
  }

  .color-card:hover {
    box-shadow: 0 0 8px black;
    cursor: pointer;
  }

  .icon {
    position: absolute;
  }
</style>
