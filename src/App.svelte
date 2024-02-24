<script>
  function _0x1c5a() {
    const _0x382740 = [
      "#ffff00",
      "message",
      "92903MPkrva",
      "preset",
      "hash",
      "162ovzldi",
      "position",
      "thickness",
      "itemmm:\x20",
      "VIEWER",
      "axesDom",
      "statusLoading11:",
      "removeObject",
      "930255RnTcmo",
      "./models/bedroom/scene.gltf",
      "pop",
      "./models/rustyCar/scene.gltf",
      "getCoordinate",
      "transmission",
      "1088835euTKSr",
      "main",
      "Scene",
      "hasssh:\x20",
      "#043561",
      "kiosk",
      "Blue",
      "20PhGzbp",
      "#0000ff",
      "set",
      "Pink",
      "MeshPhysicalMaterial",
      "#ff0000",
      "subscribe",
      "toString",
      "198842TKZrqC",
      "./models/porsche/porsche.png",
      "match",
      "ior",
      "#008000",
      "./models/porsche/scene.gltf",
      "log",
      "rendererDom",
      "content",
      "SphereGeometry",
      "./models/bedroomV2/scene.gltf",
      "target",
      "header",
      "./models/bentlyCar/scene.gltf",
      "WebGL\x20is\x20not\x20supported\x20in\x20this\x20browser.",
      "222avlpQd",
      "vao\x20load\x201",
      "copy",
      "Unable\x20to\x20retrieve\x20this\x20file.\x20Check\x20JS\x20console\x20and\x20browser\x20network\x20tab.",
      "721360WjYFGZ",
      "The\x20File\x20APIs\x20are\x20not\x20fully\x20supported\x20in\x20this\x20browser.",
      "120ZkpnFP",
      "blue\x20&\x20black",
      "./models/livingRoom/livingroom.png",
      "File",
      "Color",
      "./models/motorcycle/honda/motorbike.gltf",
      "error",
      "1111111111",
      "parse",
      "./models/rustybike/scene.gltf",
      "./models/rustyCar/rustyCar.png",
      "./models/bedroomV2/bedroomv2.png",
      "src/assets/icons/info-icon.png",
      "14BTTfDK",
      "./models/modernBedroom/modernBedroom.png",
      "./models/modernBedroom/scene.gltf",
      "isWebGLAvailable",
      "Missing\x20texture:\x20",
      "path",
      "#ffc0cb",
      "insertBefore",
      "split",
      "Mesh",
      "cameraPosition",
      "pos",
      "err:\x20",
      "10733930ElKJje",
      "viewer.interactiveObject():\x20",
      "Blob",
      "./models/bedroom/bedroom.png",
      "gltff:\x20",
      "getElementById",
      "Red",
      "./models/livingRoom/scene.gltf",
      "alert",
      "container",
      "load",
      "269392bhqiSC",
      "envMapIntensity",
      "load-progress",
      "./models/rustybike/rustymotobike.png",
      "black",
      "specularIntensity",
      "Default",
    ];
    _0x1c5a = function () {
      return _0x382740;
    };
    return _0x1c5a();
  }
  const _0x22458b = _0x38ce;
  (function (_0x484650, _0x1d080e) {
    const _0x50e6cd = _0x38ce,
      _0x2b3c0d = _0x484650();
    while (!![]) {
      try {
        const _0x2f7447 =
          (parseInt(_0x50e6cd(0x1c6)) / 0x1) *
            (-parseInt(_0x50e6cd(0x1a5)) / 0x2) +
          parseInt(_0x50e6cd(0x16e)) / 0x3 +
          (parseInt(_0x50e6cd(0x17b)) / 0x4) *
            (-parseInt(_0x50e6cd(0x196)) / 0x5) +
          (-parseInt(_0x50e6cd(0x192)) / 0x6) *
            (-parseInt(_0x50e6cd(0x183)) / 0x7) +
          (parseInt(_0x50e6cd(0x1bd)) / 0x8) *
            (parseInt(_0x50e6cd(0x1c9)) / 0x9) +
          parseInt(_0x50e6cd(0x1b2)) / 0xa +
          (parseInt(_0x50e6cd(0x174)) / 0xb) *
            (-parseInt(_0x50e6cd(0x198)) / 0xc);
        if (_0x2f7447 === _0x1d080e) break;
        else _0x2b3c0d["push"](_0x2b3c0d["shift"]());
      } catch (_0x593cb4) {
        _0x2b3c0d["push"](_0x2b3c0d["shift"]());
      }
    }
  })(_0x1c5a, 0xa5cbd);
  import * as _0x35ac71 from "@build/three.module.js";
  import { onMount, tick } from "svelte";
  import { Viewer } from "./lib/scene-config/viewer";
  import _0x4e1240 from "@js/query-string-main/index.js";
  import _0x5f2144 from "@js/WebGL.js";
  import { CSS2DRenderer, CSS2DObject } from "@js/CSS2DRenderer";
  function _0x38ce(_0x143be2, _0x2b00d6) {
    const _0x1c5af0 = _0x1c5a();
    return (
      (_0x38ce = function (_0x38cef5, _0x3e987f) {
        _0x38cef5 = _0x38cef5 - 0x16c;
        let _0x15b38f = _0x1c5af0[_0x38cef5];
        return _0x15b38f;
      }),
      _0x38ce(_0x143be2, _0x2b00d6)
    );
  }
  import {
    statusLoading,
    percentLoading,
    onProgressCallBack,
  } from "./lib/scene-config/store.js";
  import { ResizeObserverSingleton } from "svelte/internal";
  let scene,
    motoModel = _0x22458b(0x19d),
    modelList = [
      {
        id: 0x1,
        path: _0x22458b(0x19d),
        image: "./models/motorcycle/honda/motocycle.png",
      },
      { id: 0x2, path: _0x22458b(0x188), image: _0x22458b(0x184) },
      {
        id: 0x3,
        path: _0x22458b(0x190),
        image: "./models/bentlyCar/bentlyCar.png",
      },
      { id: 0x3, path: _0x22458b(0x171), image: _0x22458b(0x1a2) },
      { id: 0x4, path: _0x22458b(0x16f), image: _0x22458b(0x1b5) },
      { id: 0x5, path: _0x22458b(0x1a1), image: _0x22458b(0x1c0) },
      { id: 0x6, path: _0x22458b(0x1b9), image: _0x22458b(0x19a) },
      { id: 0x7, path: _0x22458b(0x18d), image: _0x22458b(0x1a3) },
      { id: 0x8, path: _0x22458b(0x1a7), image: _0x22458b(0x1a6) },
    ],
    infoUrlPng = _0x22458b(0x1a4);
  statusLoading[_0x22458b(0x181)]((_0x1a8360) => {
    const _0x5be138 = _0x22458b;
    console[_0x5be138(0x189)](_0x5be138(0x16c), _0x1a8360);
  });
  _0x3e7e99: console[_0x22458b(0x189)](
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
      { id: 0x1, name: _0x22458b(0x1c3), color: "#ffffff" },
      { id: 0x2, name: _0x22458b(0x17e), color: _0x22458b(0x1ab) },
      { id: 0x3, name: _0x22458b(0x1b8), color: _0x22458b(0x180) },
      { id: 0x4, name: "Yellow", color: _0x22458b(0x1c4) },
      { id: 0x5, name: _0x22458b(0x17a), color: _0x22458b(0x17c) },
      { id: 0x6, name: "Green", color: _0x22458b(0x187) },
      { id: 0x7, name: _0x22458b(0x1c1), color: "#000000" },
      { id: 0x7, name: _0x22458b(0x199), color: _0x22458b(0x178) },
    ];
  window[_0x22458b(0x1cd)] = {};
  if (
    !(
      window[_0x22458b(0x19b)] &&
      window["FileReader"] &&
      window["FileList"] &&
      window[_0x22458b(0x1b4)]
    )
  )
    console[_0x22458b(0x19e)](_0x22458b(0x197));
  else !_0x5f2144[_0x22458b(0x1a8)]() && console["error"](_0x22458b(0x191));
  const init = () => {
    const _0x110ed7 = _0x22458b,
      _0x4e47b1 = location[_0x110ed7(0x1c8)]
        ? _0x4e1240[_0x110ed7(0x1a0)](location["hash"])
        : {};
    console[_0x110ed7(0x189)](_0x110ed7(0x177), _0x4e47b1, location),
      (options = {
        kiosk: Boolean(_0x4e47b1["kiosk"]),
        model: _0x4e47b1["model"] || "",
        preset: _0x4e47b1[_0x110ed7(0x1c7)] || "",
        cameraPosition: _0x4e47b1["cameraPosition"]
          ? _0x4e47b1[_0x110ed7(0x1af)][_0x110ed7(0x1ad)](",")["map"](Number)
          : null,
      });
    let _0x546395 = document[_0x110ed7(0x1b7)](_0x110ed7(0x1bb));
    (scene = new _0x35ac71[_0x110ed7(0x176)]()),
      (viewer = new Viewer(_0x546395, options)),
      loadModel(motoModel);
    let _0x59052e = new _0x35ac71[_0x110ed7(0x17f)]();
    (_0x59052e["color"] = new _0x35ac71[_0x110ed7(0x19c)](0x1, 0x1, 0x1)),
      (_0x59052e[_0x110ed7(0x173)] = 0x1),
      (_0x59052e["roughness"] = 0x0),
      (_0x59052e[_0x110ed7(0x186)] = 0x2),
      (_0x59052e[_0x110ed7(0x1cb)] = 0.6),
      (_0x59052e[_0x110ed7(0x1c2)] = 0x1),
      (_0x59052e[_0x110ed7(0x1be)] = 0x0),
      (_0x59052e["emissiveIntensity"] = 0x0),
      (sphere = new _0x35ac71[_0x110ed7(0x1ae)](
        new _0x35ac71[_0x110ed7(0x18c)](),
        _0x59052e
      )),
      sphere["scale"][_0x110ed7(0x17d)](0.2, 0.2, 0.2),
      sphere[_0x110ed7(0x1ca)]["set"](0x0, 0x0, 0x0);
    const _0x2f6b74 = document[_0x110ed7(0x1b7)](_0x110ed7(0x175));
    let _0x5e1fa2 = document[_0x110ed7(0x1b7)](_0x110ed7(0x18f)),
      _0x17192b = document[_0x110ed7(0x1b7)](_0x110ed7(0x18b)),
      _0xd7ed36 = document[_0x110ed7(0x1b7)](_0x110ed7(0x1bf));
    const _0x143e0b = viewer[_0x110ed7(0x18a)](),
      _0x3711e4 = _0x2f6b74["firstChild"];
    _0x2f6b74[_0x110ed7(0x1ac)](_0x5e1fa2, _0x3711e4),
      _0x2f6b74["insertBefore"](_0x17192b, _0x3711e4),
      _0x2f6b74["insertBefore"](_0xd7ed36, _0x3711e4),
      _0x2f6b74[_0x110ed7(0x1ac)](_0x143e0b, _0x3711e4);
    const _0x2215af = viewer[_0x110ed7(0x1ce)]();
    _0x2f6b74[_0x110ed7(0x1ac)](_0x2215af, _0x3711e4);
    const _0x3c1377 = viewer["guiDom"]();
    _0x2f6b74[_0x110ed7(0x1ac)](_0x3c1377, _0x3711e4);
  };
  function getInteractive() {
    const _0x9a84b2 = _0x22458b;
    console[_0x9a84b2(0x189)](_0x9a84b2(0x1b3), viewer["interactiveObject"]());
  }
  function loadIcontoObject(_0x28a3a4, _0x736be8) {
    return viewer["icon"](_0x28a3a4, _0x736be8);
  }
  function loadModel(_0x43a395) {
    const _0x1fbc01 = _0x22458b;
    console[_0x1fbc01(0x189)](_0x1fbc01(0x193)), view(_0x43a395);
  }
  function onError(_0x9dc863) {
    const _0x31c10b = _0x22458b;
    let _0x36e312 =
      (_0x9dc863 || {})[_0x31c10b(0x1c5)] || _0x9dc863[_0x31c10b(0x182)]();
    if (_0x36e312[_0x31c10b(0x185)](/ProgressEvent/))
      _0x36e312 = _0x31c10b(0x195);
    else {
      if (_0x36e312["match"](/Unexpected token/))
        _0x36e312 =
          "Unable\x20to\x20parse\x20file\x20content.\x20Verify\x20that\x20this\x20file\x20is\x20valid.\x20Error:\x20\x22" +
          _0x36e312 +
          "\x22";
      else
        _0x9dc863 &&
          _0x9dc863["target"] &&
          _0x9dc863[_0x31c10b(0x18e)] instanceof Image &&
          (_0x36e312 =
            _0x31c10b(0x1a9) +
            _0x9dc863[_0x31c10b(0x18e)]["src"]
              [_0x31c10b(0x1ad)]("/")
              [_0x31c10b(0x170)]());
    }
    window[_0x31c10b(0x1ba)](_0x36e312), console[_0x31c10b(0x19e)](_0x9dc863);
  }
  function view(_0x492e94) {
    const _0x2b3cad = _0x22458b;
    let _0x57a0bf = _0x492e94;
    viewer[_0x2b3cad(0x1bc)](_0x57a0bf)
      ["catch"]((_0x3fe596) => {
        const _0x4f3831 = _0x2b3cad;
        return (
          console[_0x4f3831(0x189)](_0x4f3831(0x1b1), _0x3fe596),
          onError(_0x3fe596)
        );
      })
      ["then"]((_0x2c698e) => {
        const _0x4922aa = _0x2b3cad;
        if (!options[_0x4922aa(0x179)]) {
        }
        console[_0x4922aa(0x189)](_0x4922aa(0x1b6), _0x2c698e),
          (motobike = _0x2c698e);
      });
  }
  const onColorArea = () => {
      (onMenu = !onMenu), (onMenuChangeColor = !onMenuChangeColor);
    },
    interactObject = () => {
      const _0x374408 = _0x22458b;
      viewer[_0x374408(0x172)]();
    },
    changeObject = (_0x203caf) => {
      const _0x12267c = _0x22458b;
      console[_0x12267c(0x189)](_0x12267c(0x1cc), _0x203caf),
        statusLoading["set"](![]),
        percentLoading[_0x12267c(0x17d)](0x0),
        view(_0x203caf[_0x12267c(0x1aa)]);
    },
    onDetailObject = () => {
      const _0x523279 = _0x22458b;
      console[_0x523279(0x189)]("detail\x20Object"),
        (onMenuLookUp = !onMenuLookUp);
    },
    lookUpObject = (_0x85d788) => {
      const _0x3b3654 = _0x22458b;
      onMenuLookUp
        ? (viewer["createObject"](sphere),
          sphere[_0x3b3654(0x1ca)][_0x3b3654(0x194)](
            viewer["mouseMove"](_0x85d788)[_0x3b3654(0x1b0)]
          ))
        : viewer[_0x3b3654(0x16d)](sphere);
    },
    mouseEnter = () => {
      const _0x7ade2d = _0x22458b;
      console[_0x7ade2d(0x189)](_0x7ade2d(0x19f));
    },
    mouseEnterObject = (_0x4d5ec9) => {},
    mouseLeaveObject = (_0x2a6f90) => {},
    onNoteObject = (_0x4778b6) => {
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
      <img src="./assets/folder.png" alt="folder" width="40" height="30" />
    </div>
    <div
      class="menu-header {onMenuLookUp ? 'menu-header-activing' : ''}"
      on:click={onDetailObject}
    >
      <img
        src="./assets/magnifying-glass.png"
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
    background: lightblue url("@public/assets/bluesky.jpg") no-repeat fixed
      center;
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
