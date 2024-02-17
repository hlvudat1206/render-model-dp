<script>
  import * as THREE from "../build/three.module";
  import { onMount, tick } from "svelte";

  import { Viewer } from "./lib/scene-config/viewer";
  import queryString from "../js/query-string-main/index.js";
  import WebGL from "../js/WebGL.js";
  import { CSS2DRenderer, CSS2DObject } from "../js/CSS2DRenderer";
  import { statusLoading, percentLoading } from "./lib/scene-config/store.js";
  import { ResizeObserverSingleton } from "svelte/internal";

  let scene;
  // let motoModel = "src/models/motorcycle/honda/motorbike.gltf";
  // let motoModel = "src/models/bedroom/scene.gltf";
  // let motoModel = "src/models/livingRoom/scene.gltf";
  let motoModel = "src/models/rustybike/scene.gltf";
  let modelList = [
    {
      id: 1,
      path: "src/models/motorcycle/honda/motorbike.gltf",
      image: "src/models/motorcycle/honda/motocycle.png",
    },
    {
      id: 2,
      path: "src/models/porsche/scene.gltf",
      image: "src/models/porsche/porsche.png",
    },
    {
      id: 3,
      path: "src/models/bentlyCar/scene.gltf",
      image: "src/models/bentlyCar/bentlyCar.png",
    },
    {
      id: 3,
      path: "src/models/rustyCar/scene.gltf",
      image: "src/models/rustyCar/rustyCar.png",
    },
    {
      id: 4,
      path: "src/models/bedroom/scene.gltf",
      image: "src/models/bedroom/bedroom.png",
    },
    {
      id: 5,
      path: "src/models/rustybike/scene.gltf",
      image: "src/models/rustybike/rustymotobike.png",
    },
    {
      id: 6,
      path: "src/models/livingRoom/scene.gltf",
      image: "src/models/livingRoom/livingRoom.png",
    },
    {
      id: 7,
      path: "src/models/bedroomV2/scene.gltf",
      image: "src/models/bedroomV2/bedroomv2.png",
    },
    {
      id: 8,
      path: "src/models/modernBedroom/scene.gltf",
      image: "src/models/modernBedroom/modernBedroom.png",
    },
  ];

  let infoUrlPng = "src/assets/icons/info-icon.png";
  // let statusLoad;
  // let percentLoad;
  // statusLoading.subscribe((value) => {
  //   statusLoad = value;
  // });
  // percentLoading.subscribe((value) => {
  //   percentLoad = value;
  // });
  statusLoading.subscribe((value) => {
    console.log("statusLoading11:", value);
  });
  $: console.log("status percent: ", $statusLoading, $percentLoading);
  let viewer;
  let canvas;
  let sphere;
  let options;
  let onMenu = true;
  let onMenuChangeColor = true;
  let onMenuLookUp = false;
  let onNote = false;
  let motobike;
  let iconField;
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
    glassMaterial.thickness = 0.6; //zoom 1
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
    let loadField = document.getElementById("load-progress");

    //x: left --> right
    //y: bottom --> top
    //z: behind --> in front of

    // Create a new child element

    const canvasThree = viewer.rendererDom();

    // Get the first child of the parent
    const canvas = mainLayer.firstChild;
    // Insert the new child before the first child

    //Header
    mainLayer.insertBefore(headerField, canvas);

    //Content
    mainLayer.insertBefore(contentField, canvas);
    mainLayer.insertBefore(loadField, canvas);
    //Canvas and Other areas
    mainLayer.insertBefore(canvasThree, canvas);
    const axesLayer = viewer.axesDom();
    mainLayer.insertBefore(axesLayer, canvas);
    const guiLayer = viewer.guiDom();
    mainLayer.insertBefore(guiLayer, canvas);
  };

  function getInteractive() {
    console.log("viewer.interactiveObject(): ", viewer.interactiveObject());
  }

  function loadIcontoObject(icon, pos) {
    return viewer.icon(icon, pos);
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

  const interactObject = () => {
    viewer.getCoordinate();
  };

  const changeObject = (item) => {
    console.log("itemmm: ", item);
    statusLoading.set(false);
    percentLoading.set(0);
    view(item.path);
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
  const mouseEnter = () => {
    console.log("1111111111");
  };
  const mouseEnterObject = (e) => {
    // document
    //   .getElementById("imgElement")
    //   .addEventListener("click", function (e) {
    //     console.log("1212a");
    //   });
    // console.log("mouse enter: ", e);
  };

  const mouseLeaveObject = (e) => {
    // console.log("mouse leave: ", e);
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

<main
  id="main"
  on:click={interactObject}
  on:mousemove={lookUpObject}
  on:mouseenter={mouseEnterObject}
  on:mouseleave={mouseLeaveObject}
>
  <canvas class="full-screen" id="container" bind:this={canvas}> </canvas>

  <div class="header" id="header">
    <div
      class="menu-header {onMenuChangeColor ? 'menu-header-activing' : ''}"
      on:click={onColorArea}
    >
      <img src="src/assets/folder.png" alt="folder" width="40" height="30" />
    </div>
    <div
      class="menu-header {onMenuLookUp ? 'menu-header-activing' : ''}"
      on:click={onDetailObject}
    >
      <img
        src="src/assets/magnifying-glass.png"
        alt="magnifying-glass"
        width="40"
        height="30"
      />
    </div>
  </div>

  <div class="content" id="content">
    <aside class:onMenu>
      <div class="card">
        {#each modelList as items, index}
          <div
            class="setting-card"
            style="background-image: url({items.image})"
            on:click={() => changeObject(items)}
          ></div>
        {/each}
      </div>
    </aside>
  </div>
  <div
    class="load-progress"
    id="load-progress"
    style={$statusLoading ? "display:none" : ""}
  >
    <div class="cover-progress">
      <div class="progress-bar-parent">
        <div
          class="progress-bar"
          style="width: {$percentLoading > 2
            ? $percentLoading - 2
            : 0 && $statusLoading
              ? 100
              : 0}%;"
        >
          <div style="color: #3cf93c;font-weight: 600;padding: 12px;">
            {$percentLoading > 0
              ? $percentLoading
              : 0 && $statusLoading
                ? 100
                : 0} %
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .cover-progress {
    /* filter: blur(2px); */
    border-radius: 5%;
    height: 80%;
    width: 30%;
    /* background-color: #000000; */
    display: flex;
    align-items: center;
    margin-left: 10%;
  }
  .progress-bar-parent {
    border-radius: 10px;
    width: 100%;
    height: 15px;
    background-color: rgb(60 60 60 / 76%);
  }
  .progress-bar {
    margin-top: 5px;
    margin-left: 1%;
    height: 5px;
    background-color: rgb(74 241 105 / 76%);
    transition: width 0.3s ease-in-out;
    border-radius: 5px;
  }
  .load-progress {
    width: 100%;
    position: absolute;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-header {
    padding-right: 25px;
    padding-left: 25px;
    z-index: 9999;
    margin-left: 15px;
    margin-right: 5px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .menu-header:hover {
    cursor: pointer;
    background-color: rgb(119, 199, 199);
    border-radius: 5px;
  }

  .menu-header-activing {
    margin-left: 3px;

    border-bottom: 3.5px solid #5c5586;
  }

  .header {
    width: 30%;
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
    justify-content: center;
    height: 5%;
    left: 35%;
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

    height: 80%;
    width: 20%;
    top: 10%;
    bottom: 10%;
    border: 1px solid #ddd;
    /* background-color: #ffe7e7; */
    border-radius: 12px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: lightblue;
  }

  .onMenu {
    left: 0px;
  }

  .card {
    display: flex;
    /* position: absolute; */
    /* height: 50%; */
    flex-wrap: wrap;
    overflow-y: auto; /* Add vertical scrollbar if needed */
  }

  .card::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
  }

  .card::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background color of the track */
  }

  .card::-webkit-scrollbar-thumb {
    background: #5c5586; /* Background color of the thumb */
    border-radius: 6px; /* Border radius of the thumb */
  }
  .setting-card {
    margin-bottom: 15px;
    width: 300px;
    height: 200px;
    /* background-size: 295px; */
    background-size: 295px 200px;

    /* background-size: cover; */
    background-position: center;
    border-radius: 10px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  }

  .setting-card:hover {
    box-shadow: 0 0 8px black;
    cursor: pointer;
  }

  .icon {
    position: absolute;
  }
</style>
