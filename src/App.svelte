<script>
  const _0x5dcd32 = _0x4d75;
  (function (_0x111542, _0x6a2436) {
    const _0x3c6dd5 = _0x4d75,
      _0x15ddb0 = _0x111542();
    while (!![]) {
      try {
        const _0x3298e6 =
          (parseInt(_0x3c6dd5(0x196)) / 0x1) *
            (parseInt(_0x3c6dd5(0x18d)) / 0x2) +
          -parseInt(_0x3c6dd5(0x1b4)) / 0x3 +
          (-parseInt(_0x3c6dd5(0x1d4)) / 0x4) *
            (-parseInt(_0x3c6dd5(0x192)) / 0x5) +
          -parseInt(_0x3c6dd5(0x1bb)) / 0x6 +
          (parseInt(_0x3c6dd5(0x1c4)) / 0x7) *
            (parseInt(_0x3c6dd5(0x19e)) / 0x8) +
          (-parseInt(_0x3c6dd5(0x1db)) / 0x9) *
            (-parseInt(_0x3c6dd5(0x19f)) / 0xa) +
          (-parseInt(_0x3c6dd5(0x1ce)) / 0xb) *
            (parseInt(_0x3c6dd5(0x1d8)) / 0xc);
        if (_0x3298e6 === _0x6a2436) break;
        else _0x15ddb0["push"](_0x15ddb0["shift"]());
      } catch (_0x5bc235) {
        _0x15ddb0["push"](_0x15ddb0["shift"]());
      }
    }
  })(_0x4e29, 0x2a8c1);
  import * as _0x2ee895 from "../build/three.module";
  import { onMount, tick } from "svelte";
  import { Viewer } from "./lib/scene-config/viewer";
  import _0x209e31 from "../js/query-string-main/index.js";
  import _0x2b2453 from "../js/WebGL.js";
  function _0x4d75(_0x47be92, _0x275816) {
    const _0x4e291f = _0x4e29();
    return (
      (_0x4d75 = function (_0x4d757a, _0x173ff2) {
        _0x4d757a = _0x4d757a - 0x189;
        let _0x2f30df = _0x4e291f[_0x4d757a];
        return _0x2f30df;
      }),
      _0x4d75(_0x47be92, _0x275816)
    );
  }
  import { CSS2DRenderer, CSS2DObject } from "../js/CSS2DRenderer";
  import {
    statusLoading,
    percentLoading,
    onProgressCallBack,
  } from "./lib/scene-config/store.js";
  import { ResizeObserverSingleton } from "svelte/internal";
  let scene,
    motoModel = _0x5dcd32(0x18a),
    modelList = [
      {
        id: 0x1,
        path: _0x5dcd32(0x190),
        image: "src/models/motorcycle/honda/motocycle.png",
      },
      { id: 0x2, path: _0x5dcd32(0x1bc), image: _0x5dcd32(0x1bf) },
      {
        id: 0x3,
        path: _0x5dcd32(0x1dc),
        image: "src/models/bentlyCar/bentlyCar.png",
      },
      {
        id: 0x3,
        path: _0x5dcd32(0x199),
        image: "src/models/rustyCar/rustyCar.png",
      },
      {
        id: 0x4,
        path: "src/models/bedroom/scene.gltf",
        image: _0x5dcd32(0x1b5),
      },
      { id: 0x5, path: _0x5dcd32(0x18a), image: _0x5dcd32(0x1de) },
      { id: 0x6, path: _0x5dcd32(0x1e4), image: _0x5dcd32(0x1b3) },
      { id: 0x7, path: _0x5dcd32(0x1be), image: _0x5dcd32(0x1c3) },
      {
        id: 0x8,
        path: _0x5dcd32(0x19c),
        image: "src/models/modernBedroom/modernBedroom.png",
      },
    ],
    infoUrlPng = _0x5dcd32(0x18c);
  function _0x4e29() {
    const _0x41a646 = [
      "emissiveIntensity",
      "ior",
      "vao\x20load\x201",
      "split",
      "log",
      "alert",
      "load",
      "map",
      "pos",
      "The\x20File\x20APIs\x20are\x20not\x20fully\x20supported\x20in\x20this\x20browser.",
      "Scene",
      "hash",
      "container",
      "#000000",
      "isWebGLAvailable",
      "FileList",
      "src/models/livingRoom/livingRoom.png",
      "278688UtUXtO",
      "src/models/bedroom/bedroom.png",
      "VIEWER",
      "Blue",
      "black",
      "target",
      "toString",
      "933522kAiaYQ",
      "src/models/porsche/scene.gltf",
      "err:\x20",
      "src/models/bedroomV2/scene.gltf",
      "src/models/porsche/porsche.png",
      "MeshPhysicalMaterial",
      "catch",
      "itemmm:\x20",
      "src/models/bedroomV2/bedroomv2.png",
      "1468733ZOEKjx",
      "gltff:\x20",
      "#ffc0cb",
      "statusLoading11:",
      "hasssh:\x20",
      "File",
      "Missing\x20texture:\x20",
      "#0000ff",
      "scale",
      "Mesh",
      "3454zxKeXq",
      "Blob",
      "getElementById",
      "kiosk",
      "error",
      "preset",
      "772QPocTF",
      "#ffff00",
      "mouseMove",
      "position",
      "6756hLcXxv",
      "SphereGeometry",
      "1111111111",
      "1017DjXDhS",
      "src/models/bentlyCar/scene.gltf",
      "copy",
      "src/models/rustybike/rustymotobike.png",
      "transmission",
      "Red",
      "detail\x20Object",
      "insertBefore",
      "Unable\x20to\x20parse\x20file\x20content.\x20Verify\x20that\x20this\x20file\x20is\x20valid.\x20Error:\x20\x22",
      "src/models/livingRoom/scene.gltf",
      "color",
      "Color",
      "icon",
      "axesDom",
      "set",
      "blue\x20&\x20black",
      "content",
      "guiDom",
      "src/models/rustybike/scene.gltf",
      "Default",
      "src/assets/icons/info-icon.png",
      "21174qaawmW",
      "#ff0000",
      "Yellow",
      "src/models/motorcycle/honda/motorbike.gltf",
      "envMapIntensity",
      "1685HZLBDz",
      "rendererDom",
      "message",
      "specularIntensity",
      "25ihwTVi",
      "then",
      "viewer.interactiveObject():\x20",
      "src/models/rustyCar/scene.gltf",
      "#043561",
      "cameraPosition",
      "src/models/modernBedroom/scene.gltf",
      "model",
      "8AZFiOJ",
      "5310cYMLLc",
      "thickness",
      "subscribe",
      "src",
    ];
    _0x4e29 = function () {
      return _0x41a646;
    };
    return _0x4e29();
  }
  statusLoading[_0x5dcd32(0x1a1)]((_0x1aac2a) => {
    const _0x3e3857 = _0x5dcd32;
    console[_0x3e3857(0x1a7)](_0x3e3857(0x1c7), _0x1aac2a);
  });
  _0x253d9d: console[_0x5dcd32(0x1a7)](
    "status\x20percent:\x20",
    $statusLoading,
    $percentLoading,
    $onProgressCallBack
  );
  let viewer,
    canvas,
    sphere,
    options,
    onMenu = !![],
    onMenuChangeColor = !![],
    onMenuLookUp = ![],
    onNote = ![],
    motobike,
    iconField,
    colorArr = [
      { id: 0x1, name: _0x5dcd32(0x18b), color: "#ffffff" },
      { id: 0x2, name: "Pink", color: _0x5dcd32(0x1c6) },
      { id: 0x3, name: _0x5dcd32(0x1e0), color: _0x5dcd32(0x18e) },
      { id: 0x4, name: _0x5dcd32(0x18f), color: _0x5dcd32(0x1d5) },
      { id: 0x5, name: _0x5dcd32(0x1b7), color: _0x5dcd32(0x1cb) },
      { id: 0x6, name: "Green", color: "#008000" },
      { id: 0x7, name: _0x5dcd32(0x1b8), color: _0x5dcd32(0x1b0) },
      { id: 0x7, name: _0x5dcd32(0x1ea), color: _0x5dcd32(0x19a) },
    ];
  window[_0x5dcd32(0x1b6)] = {};
  if (
    !(
      window[_0x5dcd32(0x1c9)] &&
      window["FileReader"] &&
      window[_0x5dcd32(0x1b2)] &&
      window[_0x5dcd32(0x1cf)]
    )
  )
    console[_0x5dcd32(0x1d2)](_0x5dcd32(0x1ac));
  else
    !_0x2b2453[_0x5dcd32(0x1b1)]() &&
      console[_0x5dcd32(0x1d2)](
        "WebGL\x20is\x20not\x20supported\x20in\x20this\x20browser."
      );
  const init = () => {
    const _0x150c33 = _0x5dcd32,
      _0x1c7301 = location[_0x150c33(0x1ae)]
        ? _0x209e31["parse"](location[_0x150c33(0x1ae)])
        : {};
    console[_0x150c33(0x1a7)](_0x150c33(0x1c8), _0x1c7301, location),
      (options = {
        kiosk: Boolean(_0x1c7301[_0x150c33(0x1d1)]),
        model: _0x1c7301[_0x150c33(0x19d)] || "",
        preset: _0x1c7301[_0x150c33(0x1d3)] || "",
        cameraPosition: _0x1c7301[_0x150c33(0x19b)]
          ? _0x1c7301[_0x150c33(0x19b)]["split"](",")[_0x150c33(0x1aa)](Number)
          : null,
      });
    let _0x36c32c = document[_0x150c33(0x1d0)](_0x150c33(0x1af));
    (scene = new _0x2ee895[_0x150c33(0x1ad)]()),
      (viewer = new Viewer(_0x36c32c, options)),
      loadModel(motoModel);
    let _0x2bbb53 = new _0x2ee895[_0x150c33(0x1c0)]();
    (_0x2bbb53[_0x150c33(0x1e5)] = new _0x2ee895[_0x150c33(0x1e6)](
      0x1,
      0x1,
      0x1
    )),
      (_0x2bbb53[_0x150c33(0x1df)] = 0x1),
      (_0x2bbb53["roughness"] = 0x0),
      (_0x2bbb53[_0x150c33(0x1a4)] = 0x2),
      (_0x2bbb53[_0x150c33(0x1a0)] = 0.6),
      (_0x2bbb53[_0x150c33(0x195)] = 0x1),
      (_0x2bbb53[_0x150c33(0x191)] = 0x0),
      (_0x2bbb53[_0x150c33(0x1a3)] = 0x0),
      (sphere = new _0x2ee895[_0x150c33(0x1cd)](
        new _0x2ee895[_0x150c33(0x1d9)](),
        _0x2bbb53
      )),
      sphere[_0x150c33(0x1cc)][_0x150c33(0x1e9)](0.2, 0.2, 0.2),
      sphere["position"][_0x150c33(0x1e9)](0x0, 0x0, 0x0);
    const _0x4054d1 = document[_0x150c33(0x1d0)]("main");
    let _0x49b205 = document["getElementById"]("header"),
      _0x24c6f2 = document["getElementById"](_0x150c33(0x1eb)),
      _0x5eb682 = document[_0x150c33(0x1d0)]("load-progress");
    const _0x5d9931 = viewer[_0x150c33(0x193)](),
      _0x1c8aa5 = _0x4054d1["firstChild"];
    _0x4054d1[_0x150c33(0x1e2)](_0x49b205, _0x1c8aa5),
      _0x4054d1["insertBefore"](_0x24c6f2, _0x1c8aa5),
      _0x4054d1["insertBefore"](_0x5eb682, _0x1c8aa5),
      _0x4054d1["insertBefore"](_0x5d9931, _0x1c8aa5);
    const _0x1efc04 = viewer[_0x150c33(0x1e8)]();
    _0x4054d1[_0x150c33(0x1e2)](_0x1efc04, _0x1c8aa5);
    const _0x4c9c10 = viewer[_0x150c33(0x189)]();
    _0x4054d1[_0x150c33(0x1e2)](_0x4c9c10, _0x1c8aa5);
  };
  function getInteractive() {
    const _0x1917bb = _0x5dcd32;
    console[_0x1917bb(0x1a7)](_0x1917bb(0x198), viewer["interactiveObject"]());
  }
  function loadIcontoObject(_0x1ee314, _0x118e7a) {
    const _0x18e163 = _0x5dcd32;
    return viewer[_0x18e163(0x1e7)](_0x1ee314, _0x118e7a);
  }
  function loadModel(_0x4fd300) {
    const _0x393c08 = _0x5dcd32;
    console[_0x393c08(0x1a7)](_0x393c08(0x1a5)), view(_0x4fd300);
  }
  function onError(_0x3e825b) {
    const _0x28f718 = _0x5dcd32;
    let _0x45a6a4 =
      (_0x3e825b || {})[_0x28f718(0x194)] || _0x3e825b[_0x28f718(0x1ba)]();
    if (_0x45a6a4["match"](/ProgressEvent/))
      _0x45a6a4 =
        "Unable\x20to\x20retrieve\x20this\x20file.\x20Check\x20JS\x20console\x20and\x20browser\x20network\x20tab.";
    else {
      if (_0x45a6a4["match"](/Unexpected token/))
        _0x45a6a4 = _0x28f718(0x1e3) + _0x45a6a4 + "\x22";
      else
        _0x3e825b &&
          _0x3e825b["target"] &&
          _0x3e825b["target"] instanceof Image &&
          (_0x45a6a4 =
            _0x28f718(0x1ca) +
            _0x3e825b[_0x28f718(0x1b9)][_0x28f718(0x1a2)]
              [_0x28f718(0x1a6)]("/")
              ["pop"]());
    }
    window[_0x28f718(0x1a8)](_0x45a6a4), console[_0x28f718(0x1d2)](_0x3e825b);
  }
  function view(_0x1bf443) {
    const _0x18c493 = _0x5dcd32;
    let _0xecafe0 = _0x1bf443;
    viewer[_0x18c493(0x1a9)](_0xecafe0)
      [_0x18c493(0x1c1)]((_0x383c7c) => {
        const _0x2bdc0e = _0x18c493;
        return (
          console[_0x2bdc0e(0x1a7)](_0x2bdc0e(0x1bd), _0x383c7c),
          onError(_0x383c7c)
        );
      })
      [_0x18c493(0x197)]((_0x4076b1) => {
        const _0x5ce693 = _0x18c493;
        if (!options[_0x5ce693(0x1d1)]) {
        }
        console[_0x5ce693(0x1a7)](_0x5ce693(0x1c5), _0x4076b1),
          (motobike = _0x4076b1);
      });
  }
  const onColorArea = () => {
      (onMenu = !onMenu), (onMenuChangeColor = !onMenuChangeColor);
    },
    interactObject = () => {
      viewer["getCoordinate"]();
    },
    changeObject = (_0x35c3bc) => {
      const _0x73f801 = _0x5dcd32;
      console[_0x73f801(0x1a7)](_0x73f801(0x1c2), _0x35c3bc),
        statusLoading[_0x73f801(0x1e9)](![]),
        percentLoading[_0x73f801(0x1e9)](0x0),
        view(_0x35c3bc["path"]);
    },
    onDetailObject = () => {
      const _0x509901 = _0x5dcd32;
      console[_0x509901(0x1a7)](_0x509901(0x1e1)),
        (onMenuLookUp = !onMenuLookUp);
    },
    lookUpObject = (_0x277b30) => {
      const _0x24d05d = _0x5dcd32;
      onMenuLookUp
        ? (viewer["createObject"](sphere),
          sphere[_0x24d05d(0x1d7)][_0x24d05d(0x1dd)](
            viewer[_0x24d05d(0x1d6)](_0x277b30)[_0x24d05d(0x1ab)]
          ))
        : viewer["removeObject"](sphere);
    },
    mouseEnter = () => {
      const _0x620815 = _0x5dcd32;
      console[_0x620815(0x1a7)](_0x620815(0x1da));
    },
    mouseEnterObject = (_0x4c9160) => {},
    mouseLeaveObject = (_0x464b89) => {},
    onNoteObject = (_0x34a62b) => {
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
            : !$onProgressCallBack
              ? 98
              : 0}%;"
        >
          <div style="color: #3cf93c;font-weight: 600;padding: 12px;">
            {$percentLoading > 0
              ? $percentLoading
              : !$onProgressCallBack
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
    border-radius: 5%;
    height: 80%;
    width: 30%;
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
    z-index: 9999;
    margin-left: 15px;
    margin-right: 5px;
    padding: 5px 25px;
  }
  .menu-header:hover {
    cursor: pointer;
    background-color: #77c7c7;
    border-radius: 5px;
  }
  .menu-header-activing {
    margin-left: 3px;
    border-bottom: 3.5px solid #5c5586;
  }
  .header {
    width: 30%;
    background-size: 100%;
    background-attachment: fixed;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: move;
    color: #363636;
    text-align: center;
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
    background-color: #add8e6;
    box-shadow: 0 0 16px #000;
    -webkit-transition: 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    -moz-transition: 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    -o-transition: 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    -ms-transition: all 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
    transition: 0.25s cubic-bezier(0.52, 0.76, 0.52, 0.76);
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
    background: url(src/assets/bluesky.jpg) center/cover no-repeat fixed #add8e6;
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
  .view-button {
    left: 50%;
    position: fixed;
    bottom: 20px;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  aside {
    position: absolute;
    left: -500px;
    transition: 0.5s;
    height: 80%;
    width: 20%;
    top: 10%;
    bottom: 10%;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #add8e6;
  }
  .onMenu {
    left: 0;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
  }
  .card::-webkit-scrollbar {
    width: 12px;
  }
  .card::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .card::-webkit-scrollbar-thumb {
    background: #5c5586;
    border-radius: 6px;
  }
  .setting-card {
    margin-bottom: 15px;
    width: 300px;
    height: 200px;
    background-size: 295px 200px;
    background-position: center;
    border-radius: 10px;
  }
  .setting-card:hover {
    box-shadow: 0 0 8px #000;
    cursor: pointer;
  }
  .icon {
    position: absolute;
  }
</style>
