const _0x11bbe4 = _0x1102;
(function (_0xa55744, _0x2065a2) {
  const _0x45c820 = _0x1102,
    _0x2b3660 = _0xa55744();
  while (!![]) {
    try {
      const _0x45a6b9 =
        (parseInt(_0x45c820(0x16e)) / 0x1) *
          (-parseInt(_0x45c820(0x1d1)) / 0x2) +
        parseInt(_0x45c820(0x1d8)) / 0x3 +
        (-parseInt(_0x45c820(0xe6)) / 0x4) *
          (-parseInt(_0x45c820(0x196)) / 0x5) +
        parseInt(_0x45c820(0x10d)) / 0x6 +
        -parseInt(_0x45c820(0xfe)) / 0x7 +
        (parseInt(_0x45c820(0x154)) / 0x8) *
          (-parseInt(_0x45c820(0x155)) / 0x9) +
        (parseInt(_0x45c820(0x181)) / 0xa) * (parseInt(_0x45c820(0xdc)) / 0xb);
      if (_0x45a6b9 === _0x2065a2) break;
      else _0x2b3660["push"](_0x2b3660["shift"]());
    } catch (_0x431ffa) {
      _0x2b3660["push"](_0x2b3660["shift"]());
    }
  }
})(_0x1382, 0xe7f58);
import {
  AmbientLight,
  AnimationMixer,
  AxesHelper,
  Box3,
  Cache,
  DirectionalLight,
  GridHelper,
  HemisphereLight,
  LinearEncoding,
  LoaderUtils,
  LoadingManager,
  PMREMGenerator,
  PerspectiveCamera,
  REVISION,
  Scene,
  SkeletonHelper,
  Vector3,
  WebGLRenderer,
  sRGBEncoding,
  LinearToneMapping,
  ACESFilmicToneMapping,
} from "@build/three.module";
import _0x328bbe from "@js/stats.module.js";
import { GLTFLoader } from "@js/GLTFLoader.js";
import { KTX2Loader } from "@js/KTX2Loader.js";
import { DRACOLoader } from "@js/DRACOLoader.js";
import { MeshoptDecoder } from "@js/meshopt_decoder.module.js";
import { OrbitControls } from "@js/OrbitControls.js";
import { EXRLoader } from "@js/EXRLoader.js";
import { RoomEnvironment } from "@js/RoomEnvironment.js";
import * as _0x2d9212 from "@build/three.module";
import { CSS2DRenderer, CSS2DObject } from "@js/CSS2DRenderer.js";
import { GUI } from "@build/dat.gui.module.js";
import { TWEEN } from "@js/tween.module.min.js";
import { environments } from "@public/assets/environment/index.js";
function _0x1102(_0x17267d, _0x4b2f57) {
  const _0x13823c = _0x1382();
  return (
    (_0x1102 = function (_0x1102cd, _0x1db435) {
      _0x1102cd = _0x1102cd - 0xca;
      let _0x19de2a = _0x13823c[_0x1102cd];
      return _0x19de2a;
    }),
    _0x1102(_0x17267d, _0x4b2f57)
  );
}
import { statusLoading, percentLoading, onProgressCallBack } from "./store.js";
let strDownloadMime = _0x11bbe4(0x11d),
  img2DObject,
  imgElement,
  iconTotal = [],
  originalDistance = null,
  progress = 0x0;
const DEFAULT_CAMERA = _0x11bbe4(0x11a),
  MANAGER = new LoadingManager(),
  THREE_PATH = _0x11bbe4(0xf5) + REVISION + ".x",
  DRACO_LOADER = new DRACOLoader(MANAGER)[_0x11bbe4(0x1b0)](
    THREE_PATH + _0x11bbe4(0x165)
  ),
  KTX2_LOADER = new KTX2Loader(MANAGER)[_0x11bbe4(0x1b2)](
    THREE_PATH + _0x11bbe4(0x117)
  ),
  IS_IOS = isIOS(),
  Preset = { ASSET_GENERATOR: _0x11bbe4(0x1a0) };
function _0x1382() {
  const _0x32ac77 = [
    "maxDistance",
    "573944GYcwwb",
    "background",
    "toneMapping",
    "cameraFolder",
    "updateLights",
    "group",
    "err\x20load:\x20",
    "renderer",
    "clientY",
    "setClearColor",
    "render",
    "morphFolder",
    "needsUpdate",
    "addFolder",
    "setSize",
    "https://unpkg.com/three@0.",
    "mouse\x20en",
    "state",
    "clips",
    "onChange",
    "detectSupport",
    "add",
    "\x20it\x20may\x20contain\x20individual\x203D\x20resources.",
    "screenSpacePanning",
    "6809537NrVQgM",
    "getRoot",
    "parent",
    "setKTX2Loader",
    "Display",
    "innerWidth",
    "0px",
    "anonymous",
    "lights",
    "clearDepth",
    "mouse",
    "unproject",
    "top",
    "copy",
    "load",
    "10378692BTdEiq",
    "open",
    "grid",
    "change",
    "fromArray",
    "axesScene",
    "style",
    "main_light",
    "VIEWER__camera_",
    "#353535",
    "/examples/js/libs/basis/",
    "json",
    "objjj:\x20",
    "[default]",
    "gridHelper",
    "aspect",
    "image/octet-stream",
    "icon2D",
    "mouseLeave",
    "VIEWER",
    "setContent",
    "updateGUI",
    "Cameras",
    "forEach",
    "dom",
    "ASSET_GENERATOR",
    "traverse",
    "iPod\x20Simulator",
    "removeObject",
    "mixer",
    "name",
    "push",
    "Untitled",
    "setPixelRatio",
    "timeScale",
    "transparent",
    "addEventListener",
    "getCenter",
    "setFromObject",
    "far",
    "createElement",
    "playbackSpeed",
    "color",
    "rendererDom",
    "Morph\x20Targets",
    "iPhone",
    "clientHeight",
    "Performance",
    "skeletonHelpers",
    "find",
    "display",
    "camera",
    "preset",
    "mouseEnter",
    "stop",
    "axesCamera",
    "intensity",
    "0.15",
    "children",
    "setDRACOLoader",
    "isCamera",
    "ambient_light",
    "update",
    "yeeloww2",
    "addAxesHelper",
    "in\x20ra\x20loading2",
    "normalize",
    "enabled",
    "lookAt",
    "addLights",
    "height",
    "16hdKuts",
    "6273324jSJZrO",
    "animFolder",
    "printGraph",
    "clear",
    "48px",
    "parentElement",
    "sRGB",
    "actionStates",
    "listen",
    "setClips",
    "kiosk",
    "near",
    "guiWrap",
    "clientX",
    "log",
    "Raycaster",
    "/examples/js/libs/draco/gltf/",
    "includes",
    "activeCamera",
    "directIntensity",
    "devicePixelRatio",
    "round",
    "total",
    "resize",
    "axesDiv",
    "1rXFkIu",
    "in\x20ra\x20url:\x20",
    "autoRotate",
    "object",
    "point",
    "iPad\x20Simulator",
    "Vector2",
    "gui-stats",
    "setFromCamera",
    "footprint-court",
    "fromEquirectangular",
    "reset",
    "clipAction",
    "interactObject",
    "compileEquirectangularShader",
    "axes",
    "platform",
    "exposure",
    "directColor",
    "2915370SHiHba",
    "geometry",
    "morphTargetInfluences",
    "stats",
    "isMesh",
    "none",
    "morphCtrls",
    "interactMainObject",
    "url:::\x20",
    "setCamera",
    "environment",
    "groupEnd",
    "bgColor1",
    "axesCorner",
    "envMap",
    "icon",
    "className",
    "dispose",
    "then",
    "updateTextureEncoding",
    "domElement",
    "20rTyAiK",
    "defaultCamera",
    "remove",
    "wireframe",
    "renderOrder",
    "updateBackground",
    "getSize",
    "isLight",
    "gui-wrap",
    "updateAnnotationOpacity",
    "assetgenerator",
    "length",
    "renderer2DObject",
    "in\x20ra\x20manager1111:\x20",
    "call",
    "bones",
    "scale",
    "ambientIntensity",
    "animCtrls",
    "addGUI",
    "saveState",
    "play",
    "interactiveMainObject",
    "raycaster",
    "classList",
    "This\x20model\x20contains\x20no\x20scene,\x20and\x20cannot\x20be\x20viewed\x20here.\x20However,",
    "setDecoderPath",
    "pow",
    "setTranscoderPath",
    "Vector3",
    "gui",
    "neutral",
    "flex",
    "bind",
    "getCoordinate",
    "scene",
    "absolute",
    "axesHelper",
    "50px",
    "concat",
    "ontouchend",
    "src",
    "addColor",
    "guiDom",
    "pmremGenerator",
    "map",
    "texture",
    "emissiveMap",
    "createObject",
    "bgColor2",
    "setMeshoptDecoder",
    "error",
    "intersectObject",
    "setCrossOrigin",
    "content",
    "fromScene",
    "clientWidth",
    "in\x20ra\x20url\x202:\x20",
    "loaded",
    "2164558RiffMF",
    "getDistance",
    "material",
    "width",
    "getControlsZoom",
    "type",
    "toneMappingExposure",
    "4537338OHBLYf",
    "resolve",
    "updateDisplay",
    "keys",
    "onWindowResize",
    "animations",
    "isTexture",
    "okok:\x20",
    "Mac",
    "punctualLights",
    "encoding",
    "animate",
    "static",
    "yeeloww",
    "outputEncoding",
    "imgElement",
    "hemi_light",
    "close",
    "skeleton",
    "Lighting",
    "options",
    "setHex",
    "axesRenderer",
    "this\x20el:\x20",
    "getCubeMapTexture",
    "position",
    "progress\x202:\x20",
    "playAllClips",
    "updateProjectionMatrix",
    "cameraPosition",
    "textureEncoding",
    "appendChild",
    "morphTargetDictionary",
    "distanceTo",
    "prevTime",
    "22Ewuumo",
    "cameraCtrl",
    "setEffectiveTimeScale",
    "removeLights",
    "init",
    "extractUrlBase",
    "mouseMove",
    "controls",
    "ambientColor",
  ];
  _0x1382 = function () {
    return _0x32ac77;
  };
  return _0x1382();
}
Cache[_0x11bbe4(0x150)] = !![];
export class Viewer {
  constructor(_0x334225, _0x46b113) {
    const _0x259c20 = _0x11bbe4;
    (this["el"] = _0x334225),
      console[_0x259c20(0x163)](_0x259c20(0xd0), this["el"]),
      (this["options"] = _0x46b113),
      (this["lights"] = []),
      (this["content"] = null),
      (this[_0x259c20(0x12a)] = null),
      (this[_0x259c20(0xf8)] = []),
      (this[_0x259c20(0x1b4)] = null),
      (this["interactObject"] = null),
      (this[_0x259c20(0x188)] = null),
      (this[_0x259c20(0x11e)] = null),
      (this[_0x259c20(0xf7)] = {
        environment:
          _0x46b113[_0x259c20(0x141)] === Preset[_0x259c20(0x126)]
            ? environments[_0x259c20(0x13e)](
                (_0x54abbc) => _0x54abbc["id"] === _0x259c20(0x177)
              )[_0x259c20(0x12b)]
            : environments[0x3]["name"],
        background: ![],
        playbackSpeed: 0x1,
        actionStates: {},
        camera: DEFAULT_CAMERA,
        wireframe: ![],
        skeleton: ![],
        grid: ![],
        punctualLights: !![],
        exposure: 0x0,
        toneMapping: LinearToneMapping,
        textureEncoding: _0x259c20(0x15b),
        ambientIntensity: 0.3,
        ambientColor: 0xffffff,
        directIntensity: 0.8 * Math["PI"],
        directColor: 0xffffff,
        bgColor1: "#ffffff",
        bgColor2: _0x259c20(0x116),
      }),
      (this[_0x259c20(0x1ad)] = new _0x2d9212[_0x259c20(0x164)]()),
      (this[_0x259c20(0x108)] = new _0x2d9212[_0x259c20(0x174)]()),
      (this["moveMouse"] = new _0x2d9212[_0x259c20(0x174)]()),
      (this[_0x259c20(0xdb)] = 0x0),
      (this["stats"] = new _0x328bbe()),
      (this["stats"][_0x259c20(0x125)]["height"] = _0x259c20(0x159)),
      [][_0x259c20(0x124)][_0x259c20(0x1a4)](
        this[_0x259c20(0x184)][_0x259c20(0x125)][_0x259c20(0x147)],
        (_0x564d83) => (_0x564d83[_0x259c20(0x113)][_0x259c20(0x13f)] = "")
      ),
      (this[_0x259c20(0x1b9)] = new Scene()),
      this["init"]();
    const _0x25e4b5 =
      _0x46b113[_0x259c20(0x141)] === Preset["ASSET_GENERATOR"]
        ? (0.8 * 0xb4) / Math["PI"]
        : 0x3c;
    (this[_0x259c20(0x197)] = new PerspectiveCamera(
      _0x25e4b5,
      _0x334225[_0x259c20(0x1ce)] / _0x334225[_0x259c20(0x13b)],
      0.01,
      0x3e8
    )),
      (this["activeCamera"] = this[_0x259c20(0x197)]),
      this[_0x259c20(0x1b9)][_0x259c20(0xfb)](this["defaultCamera"]),
      (this["renderer"] = window[_0x259c20(0xed)] =
        new WebGLRenderer({ antialias: !![] })),
      (this[_0x259c20(0xed)]["physicallyCorrectLights"] = !![]),
      (this[_0x259c20(0xed)][_0x259c20(0x1e6)] = sRGBEncoding),
      this[_0x259c20(0xed)][_0x259c20(0xef)](0xcccccc),
      this[_0x259c20(0xed)][_0x259c20(0x12e)](window[_0x259c20(0x169)]),
      this[_0x259c20(0xed)][_0x259c20(0xf4)](
        _0x334225[_0x259c20(0x1ce)],
        _0x334225[_0x259c20(0x13b)]
      ),
      this["el"][_0x259c20(0xd8)](this["renderer"][_0x259c20(0x195)]),
      (this[_0x259c20(0x1a2)] = new CSS2DRenderer()),
      this["renderer2DObject"][_0x259c20(0xf4)](
        _0x334225[_0x259c20(0x1ce)],
        _0x334225[_0x259c20(0x13b)]
      ),
      (this[_0x259c20(0x1a2)][_0x259c20(0x195)][_0x259c20(0x113)][
        _0x259c20(0xd2)
      ] = _0x259c20(0x1ba)),
      (this["renderer2DObject"][_0x259c20(0x195)][_0x259c20(0x113)][
        _0x259c20(0x10a)
      ] = _0x259c20(0x104)),
      (this[_0x259c20(0x1a2)]["domElement"][_0x259c20(0x113)]["display"] =
        _0x259c20(0x1b6)),
      (this[_0x259c20(0x1a2)][_0x259c20(0x195)][_0x259c20(0x113)][
        "pointerEvents"
      ] = _0x259c20(0x186)),
      this["el"][_0x259c20(0xd8)](this[_0x259c20(0x1a2)]["domElement"]),
      (this[_0x259c20(0x1c2)] = new PMREMGenerator(this[_0x259c20(0xed)])),
      this[_0x259c20(0x1c2)][_0x259c20(0x17c)](),
      (this["neutralEnvironment"] = this[_0x259c20(0x1c2)][_0x259c20(0x1cd)](
        new RoomEnvironment()
      )[_0x259c20(0x1c4)]),
      (this["controls"] = new OrbitControls(
        this["defaultCamera"],
        this[_0x259c20(0xed)][_0x259c20(0x195)]
      )),
      (this[_0x259c20(0xe3)]["screenSpacePanning"] = !![]),
      (this[_0x259c20(0xdd)] = null),
      (this[_0x259c20(0xe9)] = null),
      (this[_0x259c20(0x156)] = null),
      (this[_0x259c20(0x1a8)] = []),
      (this["morphFolder"] = null),
      (this["morphCtrls"] = []),
      (this[_0x259c20(0x13d)] = []),
      (this[_0x259c20(0x11b)] = null),
      (this[_0x259c20(0x1bb)] = null),
      this[_0x259c20(0x14d)](),
      this[_0x259c20(0x1a9)](),
      this[_0x259c20(0x190)](),
      this[_0x259c20(0x19f)]();
    if (_0x46b113[_0x259c20(0x15f)]) this["gui"][_0x259c20(0xca)]();
    (this[_0x259c20(0x1e3)] = this[_0x259c20(0x1e3)][_0x259c20(0x1b7)](this)),
      requestAnimationFrame(this[_0x259c20(0x1e3)]),
      window[_0x259c20(0x131)](
        _0x259c20(0x16c),
        this[_0x259c20(0x16c)]["bind"](this),
        ![]
      ),
      this[_0x259c20(0x1dc)](),
      this[_0x259c20(0xe3)][_0x259c20(0x131)](
        _0x259c20(0x110),
        this[_0x259c20(0x1d5)][_0x259c20(0x1b7)](this)
      );
  }
  [_0x11bbe4(0xe0)]() {}
  [_0x11bbe4(0x138)]() {
    const _0x38c146 = _0x11bbe4;
    return this[_0x38c146(0xed)][_0x38c146(0x195)];
  }
  ["axesDom"]() {
    const _0xf52417 = _0x11bbe4;
    return this[_0xf52417(0x16d)];
  }
  [_0x11bbe4(0x1c1)]() {
    return this["guiWrap"];
  }
  [_0x11bbe4(0x190)](_0x1e44b2, _0xc95308) {
    const _0x4d48b4 = _0x11bbe4;
    if (_0x1e44b2)
      return (
        (imgElement = document[_0x4d48b4(0x135)]("img")),
        (imgElement[_0x4d48b4(0x191)] = _0x4d48b4(0x1e7)),
        imgElement["setAttribute"]("id", _0x4d48b4(0x1e7)),
        (imgElement[_0x4d48b4(0x1bf)] = _0x1e44b2),
        (imgElement["width"] = 0x23),
        (imgElement["height"] = 0x23),
        (img2DObject = new CSS2DObject(imgElement)),
        img2DObject[_0x4d48b4(0xd2)]["set"](
          _0xc95308[0x0],
          _0xc95308[0x1],
          _0xc95308[0x2]
        ),
        this[_0x4d48b4(0x1b9)]["add"](img2DObject),
        iconTotal[_0x4d48b4(0x12c)]([imgElement, img2DObject]),
        this[_0x4d48b4(0x1a2)][_0x4d48b4(0x195)]
      );
  }
  [_0x11bbe4(0x142)]() {
    const _0x3b33be = _0x11bbe4;
    console["log"](_0x3b33be(0xf6)),
      (imgElement[_0x3b33be(0x113)][_0x3b33be(0x1d4)] = "100px"),
      console["log"](_0x3b33be(0x1e5));
  }
  [_0x11bbe4(0x11f)]() {
    const _0x468542 = _0x11bbe4;
    (imgElement[_0x468542(0x113)][_0x468542(0x1d4)] = _0x468542(0x1bc)),
      console[_0x468542(0x163)](_0x468542(0x14c));
  }
  [_0x11bbe4(0x19f)]() {
    const _0xf40745 = _0x11bbe4;
    if (this["defaultCamera"] && img2DObject) {
      const _0x228f77 = new _0x2d9212[_0xf40745(0x1b3)](0x0, 0x0, 0x0);
      let _0x42ce2b, _0x31f69c;
      const _0x2b9d90 =
        this[_0xf40745(0x197)][_0xf40745(0xd2)][_0xf40745(0xda)](_0x228f77);
      iconTotal[_0xf40745(0x1c3)]((_0x30e023) => {
        const _0x4368af = _0xf40745;
        (_0x42ce2b = this[_0x4368af(0x197)][_0x4368af(0xd2)][_0x4368af(0xda)](
          _0x30e023[0x1][_0x4368af(0xd2)]
        )),
          (_0x31f69c = _0x2b9d90 < _0x42ce2b),
          (_0x30e023[0x0][_0x4368af(0x113)]["opacity"] = _0x31f69c
            ? _0x4368af(0x146)
            : "1");
      });
    }
  }
  [_0x11bbe4(0x1d5)]() {
    const _0x48d444 = _0x11bbe4;
    var _0x31bfdc = this[_0x48d444(0xe3)][_0x48d444(0x1d2)]();
    (_0x31bfdc = Math[_0x48d444(0x16a)](_0x31bfdc * 0x2710) / 0x2710),
      _0x31bfdc == 0x0 && (_0x31bfdc = 0x1),
      iconTotal["map"]((_0x2afe56) => {
        const _0x2deb29 = _0x48d444;
        (_0x2afe56[0x0][_0x2deb29(0x1d4)] = 0x46 / _0x31bfdc),
          (_0x2afe56[0x0][_0x2deb29(0x153)] = 0x46 / _0x31bfdc);
      });
  }
  [_0x11bbe4(0x1b8)]() {
    const _0x31b9f6 = _0x11bbe4;
    this[_0x31b9f6(0x1ad)][_0x31b9f6(0x176)](
      this["mouse"],
      this[_0x31b9f6(0x197)]
    );
    const _0x5ef5ab = this["raycaster"][_0x31b9f6(0x1ca)](this["scene"], !![]);
    if (_0x5ef5ab[_0x31b9f6(0x1a1)] > 0x0) {
      const _0x13b254 = _0x5ef5ab[0x0][_0x31b9f6(0x172)];
      console["log"](
        "selectedObject2:",
        _0x13b254,
        this[_0x31b9f6(0x197)][_0x31b9f6(0xd2)]
      );
    }
  }
  ["interactiveObject"]() {
    const _0x175d30 = _0x11bbe4;
    this["raycaster"][_0x175d30(0x176)](
      this[_0x175d30(0x108)],
      this[_0x175d30(0x197)]
    );
    const _0x49f535 = this[_0x175d30(0x1ad)][_0x175d30(0x1ca)](
      this[_0x175d30(0x1b9)],
      !![]
    );
    if (_0x49f535[_0x175d30(0x1a1)] > 0x0) {
      const _0xd2ebbb = _0x49f535[0x0][_0x175d30(0x171)];
      console[_0x175d30(0x163)](_0x175d30(0x1df), _0xd2ebbb),
        (this[_0x175d30(0x17b)] =
          _0xd2ebbb[_0x175d30(0x100)][_0x175d30(0x147)][0x1]);
    }
    return this[_0x175d30(0x17b)];
  }
  [_0x11bbe4(0x1ac)](_0x4335b7) {
    const _0xe90722 = _0x11bbe4;
    this[_0xe90722(0x1ad)][_0xe90722(0x176)](
      this[_0xe90722(0x108)],
      this[_0xe90722(0x197)]
    ),
      console[_0xe90722(0x163)](_0xe90722(0x119), _0x4335b7);
    const _0x5eb604 = this[_0xe90722(0x1ad)]["intersectObject"](
      _0x4335b7,
      !![]
    );
    if (_0x5eb604[_0xe90722(0x1a1)] > 0x0) {
      const _0x352492 = _0x5eb604[0x0][_0xe90722(0x171)];
      this[_0xe90722(0x188)] = _0x352492["parent"]["children"][0x1];
    }
    return this[_0xe90722(0x188)];
  }
  [_0x11bbe4(0xe2)](_0x464b05) {
    const _0x756ca7 = _0x11bbe4;
    (this["mouse"]["x"] =
      (_0x464b05[_0x756ca7(0x162)] / window[_0x756ca7(0x103)]) * 0x2 - 0x1),
      (this["mouse"]["y"] =
        -(_0x464b05[_0x756ca7(0xee)] / window["innerHeight"]) * 0x2 + 0x1);
    var _0x1b456e = 0x1,
      _0x5dad66 = new _0x2d9212["Vector3"](
        this[_0x756ca7(0x108)]["x"],
        this[_0x756ca7(0x108)]["y"],
        0.5
      );
    _0x5dad66[_0x756ca7(0x109)](this["defaultCamera"]);
    var _0x5d3ce5 = _0x5dad66["sub"](this["defaultCamera"][_0x756ca7(0xd2)])[
      _0x756ca7(0x14f)
    ]();
    _0x5d3ce5["multiplyScalar"](_0x1b456e);
    let _0x5a4025 = _0x5d3ce5[_0x756ca7(0xfb)](
        this[_0x756ca7(0x197)][_0x756ca7(0xd2)]
      ),
      _0xc0705a = {
        pos: _0x5a4025,
        posCam: this[_0x756ca7(0x197)][_0x756ca7(0xd2)],
      };
    return _0xc0705a;
  }
  [_0x11bbe4(0x1dc)]() {
    const _0x243566 = _0x11bbe4,
      { clientHeight: _0x5aa5dc, clientWidth: _0x161a27 } =
        this["el"]["parentElement"];
    (this[_0x243566(0x197)][_0x243566(0x11c)] = _0x161a27 / _0x5aa5dc),
      this["defaultCamera"]["updateProjectionMatrix"](),
      this[_0x243566(0xed)]["setSize"](_0x161a27, _0x5aa5dc),
      this[_0x243566(0x1a2)][_0x243566(0xf4)](_0x161a27, _0x5aa5dc);
  }
  [_0x11bbe4(0x1e3)](_0x12c490) {
    const _0x314bb2 = _0x11bbe4;
    requestAnimationFrame(this[_0x314bb2(0x1e3)]);
    const _0x6eb8a0 = (_0x12c490 - this[_0x314bb2(0xdb)]) / 0x3e8;
    this[_0x314bb2(0xe3)][_0x314bb2(0x14b)](),
      this[_0x314bb2(0x184)][_0x314bb2(0x14b)](),
      this[_0x314bb2(0x12a)] &&
        this[_0x314bb2(0x12a)][_0x314bb2(0x14b)](_0x6eb8a0),
      this[_0x314bb2(0xf0)](),
      (this[_0x314bb2(0xdb)] = _0x12c490),
      TWEEN[_0x314bb2(0x14b)]();
  }
  [_0x11bbe4(0xf0)]() {
    const _0x4d0c61 = _0x11bbe4;
    this[_0x4d0c61(0x1a2)][_0x4d0c61(0xf0)](
      this[_0x4d0c61(0x1b9)],
      this[_0x4d0c61(0x167)]
    ),
      this["updateAnnotationOpacity"](),
      this["renderer"][_0x4d0c61(0xf0)](
        this[_0x4d0c61(0x1b9)],
        this[_0x4d0c61(0x167)]
      ),
      this[_0x4d0c61(0xf7)][_0x4d0c61(0x10f)] &&
        (this[_0x4d0c61(0x144)][_0x4d0c61(0xd2)][_0x4d0c61(0x10b)](
          this["defaultCamera"][_0x4d0c61(0xd2)]
        ),
        this[_0x4d0c61(0x144)][_0x4d0c61(0x151)](
          this["axesScene"][_0x4d0c61(0xd2)]
        ),
        this[_0x4d0c61(0xcf)][_0x4d0c61(0xf0)](
          this[_0x4d0c61(0x112)],
          this[_0x4d0c61(0x144)]
        ));
  }
  [_0x11bbe4(0x16c)]() {
    const _0x5bf909 = _0x11bbe4,
      { clientHeight: _0x40a610, clientWidth: _0x5f14a1 } =
        this["el"][_0x5bf909(0x15a)];
    (this["defaultCamera"][_0x5bf909(0x11c)] = _0x5f14a1 / _0x40a610),
      this[_0x5bf909(0x197)][_0x5bf909(0xd5)](),
      this[_0x5bf909(0xed)][_0x5bf909(0xf4)](_0x5f14a1, _0x40a610),
      this[_0x5bf909(0x1a2)][_0x5bf909(0xf4)](_0x5f14a1, _0x40a610),
      (this[_0x5bf909(0x144)][_0x5bf909(0x11c)] =
        this[_0x5bf909(0x16d)][_0x5bf909(0x1ce)] /
        this[_0x5bf909(0x16d)]["clientHeight"]),
      this[_0x5bf909(0x144)]["updateProjectionMatrix"](),
      this[_0x5bf909(0xcf)]["setSize"](
        this[_0x5bf909(0x16d)]["clientWidth"],
        this[_0x5bf909(0x16d)][_0x5bf909(0x13b)]
      );
  }
  [_0x11bbe4(0x1c6)] = (_0x4825dc) => {
    const _0xcc7de3 = _0x11bbe4;
    this[_0xcc7de3(0x1b9)]["add"](_0x4825dc);
  };
  [_0x11bbe4(0x129)] = (_0x45391a) => {
    const _0x5686dc = _0x11bbe4;
    this[_0x5686dc(0x1b9)][_0x5686dc(0x198)](_0x45391a);
  };
  [_0x11bbe4(0x10c)](_0x1699fb) {
    const _0x34c9d7 = _0x11bbe4;
    console[_0x34c9d7(0x163)](_0x34c9d7(0x189), _0x1699fb),
      console[_0x34c9d7(0x163)](_0x34c9d7(0x14e)),
      console[_0x34c9d7(0x163)](_0x34c9d7(0x16f), _0x1699fb);
    const _0x3d3084 = LoaderUtils[_0x34c9d7(0xe1)](_0x1699fb);
    return new Promise((_0x1dc030, _0x22a795) => {
      const _0x4d1b84 = _0x34c9d7;
      MANAGER["setURLModifier"]((_0xa1b9f9, _0x3762da) => {
        const _0x3043d6 = _0x1102;
        return (
          console[_0x3043d6(0x163)](_0x3043d6(0x1a3), MANAGER),
          (_0x3762da || "") + _0xa1b9f9
        );
      });
      const _0x33d137 = new GLTFLoader(MANAGER)
          [_0x4d1b84(0x1cb)](_0x4d1b84(0x105))
          [_0x4d1b84(0x148)](DRACO_LOADER)
          [_0x4d1b84(0x101)](
            KTX2_LOADER[_0x4d1b84(0xfa)](this[_0x4d1b84(0xed)])
          )
          [_0x4d1b84(0x1c8)](MeshoptDecoder),
        _0x4b7e1b = [];
      _0x33d137["load"](
        _0x1699fb,
        (_0x3d326a) => {
          const _0x366bba = _0x4d1b84;
          console["log"](_0x366bba(0x1cf), _0x1699fb),
            console["log"]("window:\x20", window),
            statusLoading[_0x366bba(0x14b)]((_0x6aa32c) => (_0x6aa32c = !![])),
            (window[_0x366bba(0x120)][_0x366bba(0x118)] = _0x3d326a);
          const _0x196bf4 =
              _0x3d326a[_0x366bba(0x1b9)] || _0x3d326a["scenes"][0x0],
            _0x41013f = _0x3d326a[_0x366bba(0x1dd)] || [];
          if (!_0x196bf4) throw new Error(_0x366bba(0x1af) + _0x366bba(0xfc));
          this[_0x366bba(0x121)](_0x196bf4, _0x41013f),
            _0x1dc030(_0x3d326a[_0x366bba(0x1b9)][_0x366bba(0x147)][0x0]);
        },
        (_0x1d562f) => {
          const _0x3875be = _0x4d1b84;
          (progress =
            (_0x1d562f[_0x3875be(0x1d0)] / _0x1d562f[_0x3875be(0x16b)]) * 0x64),
            progress > 0x64 && (progress = 0x64),
            console["log"](_0x3875be(0xd3), progress),
            percentLoading[_0x3875be(0x14b)](
              (_0x1468ed) => (_0x1468ed = progress)
            ),
            onProgressCallBack[_0x3875be(0x14b)](
              (_0x1bfa1b) => (_0x1bfa1b = !_0x1bfa1b)
            );
        },
        function (_0x39474a) {
          const _0x28a1bb = _0x4d1b84;
          console[_0x28a1bb(0x163)](_0x28a1bb(0xec), _0x39474a),
            console[_0x28a1bb(0x1c9)](_0x39474a);
        }
      );
    });
  }
  [_0x11bbe4(0x121)](_0x5b78a1, _0x1e6718) {
    const _0x2a2d7e = _0x11bbe4;
    this[_0x2a2d7e(0x158)]();
    const _0x6ad47b = new Box3()[_0x2a2d7e(0x133)](_0x5b78a1),
      _0x54817f = _0x6ad47b[_0x2a2d7e(0x19c)](new Vector3())[
        _0x2a2d7e(0x1a1)
      ](),
      _0x4708e3 = _0x6ad47b[_0x2a2d7e(0x132)](new Vector3());
    this["controls"]["reset"](),
      (_0x5b78a1["position"]["x"] +=
        _0x5b78a1[_0x2a2d7e(0xd2)]["x"] - _0x4708e3["x"]),
      (_0x5b78a1[_0x2a2d7e(0xd2)]["y"] +=
        _0x5b78a1["position"]["y"] - _0x4708e3["y"]),
      (_0x5b78a1[_0x2a2d7e(0xd2)]["z"] +=
        _0x5b78a1[_0x2a2d7e(0xd2)]["z"] - _0x4708e3["z"]),
      (this[_0x2a2d7e(0xe3)][_0x2a2d7e(0xe5)] = _0x54817f * 0xa),
      (this[_0x2a2d7e(0x197)]["near"] = _0x54817f / 0x64),
      (this[_0x2a2d7e(0x197)][_0x2a2d7e(0x134)] = _0x54817f * 0x64),
      this[_0x2a2d7e(0x197)][_0x2a2d7e(0xd5)](),
      this[_0x2a2d7e(0xcd)][_0x2a2d7e(0xd6)]
        ? (this[_0x2a2d7e(0x197)]["position"][_0x2a2d7e(0x111)](
            this[_0x2a2d7e(0xcd)][_0x2a2d7e(0xd6)]
          ),
          this[_0x2a2d7e(0x197)]["lookAt"](new Vector3()))
        : (this[_0x2a2d7e(0x197)]["position"][_0x2a2d7e(0x10b)](_0x4708e3),
          (this["defaultCamera"][_0x2a2d7e(0xd2)]["x"] += _0x54817f / 0x2),
          (this[_0x2a2d7e(0x197)][_0x2a2d7e(0xd2)]["y"] += _0x54817f / 0x5),
          (this[_0x2a2d7e(0x197)]["position"]["z"] += _0x54817f / 0x2),
          this[_0x2a2d7e(0x197)][_0x2a2d7e(0x151)](_0x4708e3)),
      this[_0x2a2d7e(0x18a)](DEFAULT_CAMERA),
      this[_0x2a2d7e(0x144)][_0x2a2d7e(0xd2)][_0x2a2d7e(0x10b)](
        this[_0x2a2d7e(0x197)]["position"]
      ),
      this[_0x2a2d7e(0x144)][_0x2a2d7e(0x151)](
        this["axesScene"][_0x2a2d7e(0xd2)]
      ),
      (this[_0x2a2d7e(0x144)][_0x2a2d7e(0x160)] = _0x54817f / 0x64),
      (this[_0x2a2d7e(0x144)][_0x2a2d7e(0x134)] = _0x54817f * 0x64),
      this[_0x2a2d7e(0x144)][_0x2a2d7e(0xd5)](),
      this["axesCorner"][_0x2a2d7e(0x1a6)]["set"](
        _0x54817f,
        _0x54817f,
        _0x54817f
      ),
      this["controls"][_0x2a2d7e(0x1aa)](),
      this[_0x2a2d7e(0x1b9)][_0x2a2d7e(0xfb)](_0x5b78a1),
      (this[_0x2a2d7e(0x1cc)] = _0x5b78a1),
      (this["state"]["punctualLights"] = !![]),
      this[_0x2a2d7e(0x1cc)][_0x2a2d7e(0x127)]((_0x55ada5) => {
        const _0x576dd9 = _0x2a2d7e;
        if (_0x55ada5[_0x576dd9(0x19d)])
          this[_0x576dd9(0xf7)]["punctualLights"] = ![];
        else
          _0x55ada5["isMesh"] &&
            (_0x55ada5[_0x576dd9(0x1d3)]["depthWrite"] =
              !_0x55ada5[_0x576dd9(0x1d3)][_0x576dd9(0x130)]);
      }),
      this[_0x2a2d7e(0x15e)](_0x1e6718),
      this[_0x2a2d7e(0xea)](),
      this[_0x2a2d7e(0x122)](),
      this["updateEnvironment"](),
      this[_0x2a2d7e(0x194)](),
      this["updateDisplay"](),
      (window[_0x2a2d7e(0x120)]["scene"] = this[_0x2a2d7e(0x1cc)]),
      this["printGraph"](this[_0x2a2d7e(0x1cc)]);
  }
  [_0x11bbe4(0x157)](_0x357000) {
    const _0x171c04 = _0x11bbe4;
    console[_0x171c04(0xeb)](
      "\x20<" +
        _0x357000[_0x171c04(0x1d6)] +
        ">\x20" +
        _0x357000[_0x171c04(0x12b)]
    ),
      _0x357000[_0x171c04(0x147)]["forEach"]((_0x441dca) =>
        this["printGraph"](_0x441dca)
      ),
      console[_0x171c04(0x18c)]();
  }
  ["setClips"](_0x57750d) {
    const _0x354cf7 = _0x11bbe4;
    this[_0x354cf7(0x12a)] &&
      (this[_0x354cf7(0x12a)]["stopAllAction"](),
      this[_0x354cf7(0x12a)]["uncacheRoot"](
        this[_0x354cf7(0x12a)][_0x354cf7(0xff)]()
      ),
      (this[_0x354cf7(0x12a)] = null));
    this[_0x354cf7(0xf8)] = _0x57750d;
    if (!_0x57750d[_0x354cf7(0x1a1)]) return;
    this[_0x354cf7(0x12a)] = new AnimationMixer(this["content"]);
  }
  [_0x11bbe4(0xd4)]() {
    const _0x28a63d = _0x11bbe4;
    this[_0x28a63d(0xf8)]["forEach"]((_0x1d7e16) => {
      const _0x4931e9 = _0x28a63d;
      this[_0x4931e9(0x12a)]
        [_0x4931e9(0x17a)](_0x1d7e16)
        [_0x4931e9(0x179)]()
        [_0x4931e9(0x1ab)](),
        (this[_0x4931e9(0xf7)]["actionStates"][_0x1d7e16[_0x4931e9(0x12b)]] =
          !![]);
    });
  }
  [_0x11bbe4(0x18a)](_0x5e9d1d) {
    const _0x35732b = _0x11bbe4;
    _0x5e9d1d === DEFAULT_CAMERA
      ? ((this[_0x35732b(0xe3)]["enabled"] = !![]),
        (this[_0x35732b(0x167)] = this[_0x35732b(0x197)]))
      : ((this["controls"]["enabled"] = ![]),
        this[_0x35732b(0x1cc)][_0x35732b(0x127)]((_0x48f3c3) => {
          const _0x1914d9 = _0x35732b;
          _0x48f3c3[_0x1914d9(0x149)] &&
            _0x48f3c3[_0x1914d9(0x12b)] === _0x5e9d1d &&
            (this[_0x1914d9(0x167)] = _0x48f3c3);
        }));
  }
  [_0x11bbe4(0x194)]() {
    const _0x4f714c = _0x11bbe4,
      _0x48994a =
        this[_0x4f714c(0xf7)][_0x4f714c(0xd7)] === _0x4f714c(0x15b)
          ? sRGBEncoding
          : LinearEncoding;
    traverseMaterials(this[_0x4f714c(0x1cc)], (_0x3f4d4f) => {
      const _0x37d94c = _0x4f714c;
      if (_0x3f4d4f[_0x37d94c(0x1c3)])
        _0x3f4d4f[_0x37d94c(0x1c3)]["encoding"] = _0x48994a;
      if (_0x3f4d4f[_0x37d94c(0x1c5)])
        _0x3f4d4f[_0x37d94c(0x1c5)][_0x37d94c(0x1e2)] = _0x48994a;
      if (_0x3f4d4f["map"] || _0x3f4d4f[_0x37d94c(0x1c5)])
        _0x3f4d4f[_0x37d94c(0xf2)] = !![];
    });
  }
  [_0x11bbe4(0xea)]() {
    const _0x3148a4 = _0x11bbe4,
      _0x11be08 = this[_0x3148a4(0xf7)],
      _0x394e53 = this[_0x3148a4(0x106)];
    if (_0x11be08[_0x3148a4(0x1e1)] && !_0x394e53[_0x3148a4(0x1a1)])
      this[_0x3148a4(0x152)]();
    else
      !_0x11be08["punctualLights"] &&
        _0x394e53[_0x3148a4(0x1a1)] &&
        this[_0x3148a4(0xdf)]();
    (this["renderer"][_0x3148a4(0xe8)] = Number(_0x11be08[_0x3148a4(0xe8)])),
      (this["renderer"][_0x3148a4(0x1d7)] = Math[_0x3148a4(0x1b1)](
        0x2,
        _0x11be08[_0x3148a4(0x17f)]
      )),
      _0x394e53[_0x3148a4(0x1a1)] === 0x2 &&
        ((_0x394e53[0x0]["intensity"] = _0x11be08["ambientIntensity"]),
        _0x394e53[0x0][_0x3148a4(0x137)]["setHex"](_0x11be08["ambientColor"]),
        (_0x394e53[0x1][_0x3148a4(0x145)] = _0x11be08[_0x3148a4(0x168)]),
        _0x394e53[0x1][_0x3148a4(0x137)][_0x3148a4(0xce)](
          _0x11be08["directColor"]
        ));
  }
  [_0x11bbe4(0x152)]() {
    const _0x284729 = _0x11bbe4,
      _0x30d30d = this["state"];
    if (this[_0x284729(0xcd)][_0x284729(0x141)] === Preset[_0x284729(0x126)]) {
      const _0x591fc8 = new HemisphereLight();
      (_0x591fc8[_0x284729(0x12b)] = _0x284729(0x1e8)),
        this[_0x284729(0x1b9)][_0x284729(0xfb)](_0x591fc8),
        this[_0x284729(0x106)]["push"](_0x591fc8);
      return;
    }
    const _0x2e6d89 = new AmbientLight(
      _0x30d30d[_0x284729(0xe4)],
      _0x30d30d["ambientIntensity"]
    );
    (_0x2e6d89["name"] = _0x284729(0x14a)),
      this[_0x284729(0x197)]["add"](_0x2e6d89);
    const _0x10e1d2 = new DirectionalLight(
      _0x30d30d[_0x284729(0x180)],
      _0x30d30d["directIntensity"]
    );
    _0x10e1d2[_0x284729(0xd2)]["set"](0.5, 0x0, 0.866),
      (_0x10e1d2["name"] = _0x284729(0x114)),
      this[_0x284729(0x197)][_0x284729(0xfb)](_0x10e1d2),
      this[_0x284729(0x106)][_0x284729(0x12c)](_0x2e6d89, _0x10e1d2);
  }
  [_0x11bbe4(0xdf)]() {
    const _0x5c7c98 = _0x11bbe4;
    this[_0x5c7c98(0x106)][_0x5c7c98(0x124)]((_0x95b91) =>
      _0x95b91[_0x5c7c98(0x100)][_0x5c7c98(0x198)](_0x95b91)
    ),
      (this["lights"][_0x5c7c98(0x1a1)] = 0x0);
  }
  ["updateEnvironment"]() {
    const _0x137904 = _0x11bbe4,
      _0x5cbee2 = environments["filter"](
        (_0x20b8e1) => _0x20b8e1["name"] === this["state"][_0x137904(0x18b)]
      )[0x0];
    this[_0x137904(0xd1)](_0x5cbee2)[_0x137904(0x193)](
      ({ envMap: _0xdb7a31 }) => {
        const _0x209f61 = _0x137904;
        if (
          (!_0xdb7a31 || !this["state"][_0x209f61(0xe7)]) &&
          this["activeCamera"] === this["defaultCamera"]
        ) {
        } else {
        }
        (this[_0x209f61(0x1b9)][_0x209f61(0x18b)] = _0xdb7a31),
          (this["scene"][_0x209f61(0xe7)] = this[_0x209f61(0xf7)]["background"]
            ? _0xdb7a31
            : null);
      }
    );
  }
  ["getCubeMapTexture"](_0x409be7) {
    const _0x5342ff = _0x11bbe4,
      { id: _0x5639ff, path: _0x2ac2ff } = _0x409be7;
    if (_0x5639ff === _0x5342ff(0x1b5))
      return Promise[_0x5342ff(0x1d9)]({ envMap: this["neutralEnvironment"] });
    if (_0x5639ff === "") return Promise[_0x5342ff(0x1d9)]({ envMap: null });
    return new Promise((_0x347f54, _0x2a20af) => {
      const _0x4c81cc = _0x5342ff;
      new EXRLoader()[_0x4c81cc(0x10c)](
        _0x2ac2ff,
        (_0x1e206c) => {
          const _0x51d1f8 = _0x4c81cc,
            _0x177dc1 =
              this[_0x51d1f8(0x1c2)][_0x51d1f8(0x178)](_0x1e206c)["texture"];
          this[_0x51d1f8(0x1c2)]["dispose"](), _0x347f54({ envMap: _0x177dc1 });
        },
        undefined,
        _0x2a20af
      );
    });
  }
  [_0x11bbe4(0x1da)]() {
    const _0x3a1301 = _0x11bbe4;
    this[_0x3a1301(0x13d)]["length"] &&
      this[_0x3a1301(0x13d)][_0x3a1301(0x124)]((_0x55376c) =>
        this["scene"]["remove"](_0x55376c)
      ),
      traverseMaterials(this["content"], (_0x3597c2) => {
        const _0x37725e = _0x3a1301;
        _0x3597c2["wireframe"] = this[_0x37725e(0xf7)][_0x37725e(0x199)];
      }),
      this[_0x3a1301(0x1cc)][_0x3a1301(0x127)]((_0xd6bd35) => {
        const _0x423011 = _0x3a1301;
        if (
          _0xd6bd35[_0x423011(0x185)] &&
          _0xd6bd35[_0x423011(0xcb)] &&
          this[_0x423011(0xf7)][_0x423011(0xcb)]
        ) {
          const _0x2d6af3 = new SkeletonHelper(
            _0xd6bd35[_0x423011(0xcb)][_0x423011(0x1a5)][0x0][_0x423011(0x100)]
          );
          (_0x2d6af3[_0x423011(0x1d3)]["linewidth"] = 0x3),
            this[_0x423011(0x1b9)][_0x423011(0xfb)](_0x2d6af3),
            this[_0x423011(0x13d)][_0x423011(0x12c)](_0x2d6af3);
        }
      }),
      this[_0x3a1301(0xf7)]["grid"] !== Boolean(this[_0x3a1301(0x11b)]) &&
        (this[_0x3a1301(0xf7)][_0x3a1301(0x10f)]
          ? ((this["gridHelper"] = new GridHelper()),
            (this[_0x3a1301(0x1bb)] = new AxesHelper()),
            (this["axesHelper"][_0x3a1301(0x19a)] = 0x3e7),
            (this[_0x3a1301(0x1bb)]["onBeforeRender"] = (_0x22d122) =>
              _0x22d122[_0x3a1301(0x107)]()),
            this[_0x3a1301(0x1b9)][_0x3a1301(0xfb)](this["gridHelper"]),
            this[_0x3a1301(0x1b9)][_0x3a1301(0xfb)](this[_0x3a1301(0x1bb)]))
          : (this[_0x3a1301(0x1b9)][_0x3a1301(0x198)](this[_0x3a1301(0x11b)]),
            this[_0x3a1301(0x1b9)][_0x3a1301(0x198)](this[_0x3a1301(0x1bb)]),
            (this[_0x3a1301(0x11b)] = null),
            (this[_0x3a1301(0x1bb)] = null),
            this["axesRenderer"]["clear"]()));
  }
  ["updateBackground"]() {}
  ["addAxesHelper"]() {
    const _0x26ccc5 = _0x11bbe4;
    (this[_0x26ccc5(0x16d)] = document["createElement"]("div")),
      this["el"]["appendChild"](this[_0x26ccc5(0x16d)]),
      this[_0x26ccc5(0x16d)]["classList"][_0x26ccc5(0xfb)](_0x26ccc5(0x17d));
    const { clientWidth: _0x53209d, clientHeight: _0x249d56 } =
      this[_0x26ccc5(0x16d)];
    (this[_0x26ccc5(0x112)] = new Scene()),
      (this[_0x26ccc5(0x144)] = new PerspectiveCamera(
        0x32,
        _0x53209d / _0x249d56,
        0.1,
        0xa
      )),
      this[_0x26ccc5(0x112)][_0x26ccc5(0xfb)](this[_0x26ccc5(0x144)]),
      (this[_0x26ccc5(0xcf)] = new WebGLRenderer({ alpha: !![] })),
      this[_0x26ccc5(0xcf)][_0x26ccc5(0x12e)](window["devicePixelRatio"]),
      this[_0x26ccc5(0xcf)][_0x26ccc5(0xf4)](
        this["axesDiv"][_0x26ccc5(0x1ce)],
        this[_0x26ccc5(0x16d)]["clientHeight"]
      ),
      (this[_0x26ccc5(0x144)]["up"] = this["defaultCamera"]["up"]),
      (this[_0x26ccc5(0x18e)] = new AxesHelper(0x5)),
      this["axesScene"]["add"](this[_0x26ccc5(0x18e)]),
      this[_0x26ccc5(0x16d)][_0x26ccc5(0xd8)](
        this[_0x26ccc5(0xcf)][_0x26ccc5(0x195)]
      );
  }
  [_0x11bbe4(0x1a9)]() {
    const _0x12959b = _0x11bbe4,
      _0x41ecf1 = (this[_0x12959b(0x1b4)] = new GUI({
        autoPlace: ![],
        width: 0x104,
        hideable: !![],
      })),
      _0x1c7d6c = _0x41ecf1[_0x12959b(0xf3)](_0x12959b(0x102)),
      _0x5e04f4 = _0x1c7d6c[_0x12959b(0xfb)](this["state"], "background");
    _0x5e04f4[_0x12959b(0xf9)](() => this["updateEnvironment"]());
    const _0x4b098a = _0x1c7d6c[_0x12959b(0xfb)](
      this[_0x12959b(0xf7)],
      _0x12959b(0x199)
    );
    _0x4b098a[_0x12959b(0xf9)](() => this[_0x12959b(0x1da)]());
    const _0x3764db = _0x1c7d6c[_0x12959b(0xfb)](
      this["state"],
      _0x12959b(0xcb)
    );
    _0x3764db["onChange"](() => this[_0x12959b(0x1da)]());
    const _0x342215 = _0x1c7d6c[_0x12959b(0xfb)](
      this["state"],
      _0x12959b(0x10f)
    );
    _0x342215[_0x12959b(0xf9)](() => this[_0x12959b(0x1da)]()),
      _0x1c7d6c[_0x12959b(0xfb)](this[_0x12959b(0xe3)], _0x12959b(0x170)),
      _0x1c7d6c[_0x12959b(0xfb)](this[_0x12959b(0xe3)], _0x12959b(0xfd));
    const _0x2914c2 = _0x1c7d6c[_0x12959b(0x1c0)](
        this[_0x12959b(0xf7)],
        _0x12959b(0x18d)
      ),
      _0xe5c396 = _0x1c7d6c[_0x12959b(0x1c0)](
        this[_0x12959b(0xf7)],
        _0x12959b(0x1c7)
      );
    _0x2914c2[_0x12959b(0xf9)](() => this[_0x12959b(0x19b)]()),
      _0xe5c396[_0x12959b(0xf9)](() => this[_0x12959b(0x19b)]());
    const _0x2d41b1 = _0x41ecf1[_0x12959b(0xf3)](_0x12959b(0xcc)),
      _0xa26e2b = _0x2d41b1[_0x12959b(0xfb)](
        this[_0x12959b(0xf7)],
        _0x12959b(0xd7),
        ["sRGB", "Linear"]
      );
    _0xa26e2b[_0x12959b(0xf9)](() => this[_0x12959b(0x194)]()),
      _0x2d41b1[_0x12959b(0xfb)](this[_0x12959b(0xed)], _0x12959b(0x1e6), {
        sRGB: sRGBEncoding,
        Linear: LinearEncoding,
      })[_0x12959b(0xf9)](() => {
        const _0x145f53 = _0x12959b;
        (this[_0x145f53(0xed)][_0x145f53(0x1e6)] = Number(
          this[_0x145f53(0xed)][_0x145f53(0x1e6)]
        )),
          traverseMaterials(this[_0x145f53(0x1cc)], (_0x40f9b3) => {
            _0x40f9b3["needsUpdate"] = !![];
          });
      });
    const _0x1e13b6 = _0x2d41b1[_0x12959b(0xfb)](
      this[_0x12959b(0xf7)],
      _0x12959b(0x18b),
      environments["map"]((_0x996e28) => _0x996e28["name"])
    );
    _0x1e13b6[_0x12959b(0xf9)](() => this["updateEnvironment"]()),
      [
        _0x2d41b1["add"](this[_0x12959b(0xf7)], _0x12959b(0xe8), {
          Linear: LinearToneMapping,
          "ACES\x20Filmic": ACESFilmicToneMapping,
        }),
        _0x2d41b1["add"](
          this[_0x12959b(0xf7)],
          _0x12959b(0x17f),
          -0xa,
          0xa,
          0.01
        ),
        _0x2d41b1[_0x12959b(0xfb)](this[_0x12959b(0xf7)], _0x12959b(0x1e1))[
          _0x12959b(0x15d)
        ](),
        _0x2d41b1[_0x12959b(0xfb)](this["state"], _0x12959b(0x1a7), 0x0, 0x2),
        _0x2d41b1[_0x12959b(0x1c0)](this[_0x12959b(0xf7)], _0x12959b(0xe4)),
        _0x2d41b1[_0x12959b(0xfb)](
          this[_0x12959b(0xf7)],
          _0x12959b(0x168),
          0x0,
          0x4
        ),
        _0x2d41b1["addColor"](this[_0x12959b(0xf7)], "directColor"),
      ][_0x12959b(0x124)]((_0x476b2e) =>
        _0x476b2e["onChange"](() => this[_0x12959b(0xea)]())
      ),
      (this["animFolder"] = _0x41ecf1[_0x12959b(0xf3)]("Animation")),
      (this[_0x12959b(0x156)][_0x12959b(0x195)][_0x12959b(0x113)]["display"] =
        _0x12959b(0x186));
    const _0x132c2a = this["animFolder"]["add"](
      this[_0x12959b(0xf7)],
      _0x12959b(0x136),
      0x0,
      0x1
    );
    _0x132c2a["onChange"]((_0x1fe5c6) => {
      const _0x3ecbad = _0x12959b;
      if (this[_0x3ecbad(0x12a)])
        this[_0x3ecbad(0x12a)][_0x3ecbad(0x12f)] = _0x1fe5c6;
    }),
      this["animFolder"][_0x12959b(0xfb)](
        { playAll: () => this[_0x12959b(0xd4)]() },
        "playAll"
      ),
      (this[_0x12959b(0xf1)] = _0x41ecf1["addFolder"](_0x12959b(0x139))),
      (this["morphFolder"][_0x12959b(0x195)][_0x12959b(0x113)][
        _0x12959b(0x13f)
      ] = "none"),
      (this[_0x12959b(0xe9)] = _0x41ecf1[_0x12959b(0xf3)](_0x12959b(0x123))),
      (this[_0x12959b(0xe9)][_0x12959b(0x195)][_0x12959b(0x113)]["display"] =
        _0x12959b(0x186));
    const _0x39f14f = _0x41ecf1[_0x12959b(0xf3)](_0x12959b(0x13c)),
      _0x5c513e = document[_0x12959b(0x135)]("li");
    (this[_0x12959b(0x184)][_0x12959b(0x125)]["style"][_0x12959b(0xd2)] =
      _0x12959b(0x1e4)),
      _0x5c513e[_0x12959b(0xd8)](this[_0x12959b(0x184)][_0x12959b(0x125)]),
      _0x5c513e[_0x12959b(0x1ae)][_0x12959b(0xfb)](_0x12959b(0x175)),
      (this[_0x12959b(0x161)] = document["createElement"]("div")),
      this["el"][_0x12959b(0xd8)](this[_0x12959b(0x161)]),
      this[_0x12959b(0x161)]["classList"]["add"](_0x12959b(0x19e)),
      this[_0x12959b(0x161)][_0x12959b(0xd8)](_0x41ecf1["domElement"]),
      _0x41ecf1[_0x12959b(0x10e)]();
  }
  ["updateGUI"]() {
    const _0x3f4a71 = _0x11bbe4;
    (this[_0x3f4a71(0xe9)][_0x3f4a71(0x195)]["style"][_0x3f4a71(0x13f)] =
      _0x3f4a71(0x186)),
      this[_0x3f4a71(0x187)]["forEach"]((_0x2a7aab) =>
        _0x2a7aab[_0x3f4a71(0x198)]()
      ),
      (this["morphCtrls"][_0x3f4a71(0x1a1)] = 0x0),
      (this[_0x3f4a71(0xf1)][_0x3f4a71(0x195)][_0x3f4a71(0x113)][
        _0x3f4a71(0x13f)
      ] = _0x3f4a71(0x186)),
      this[_0x3f4a71(0x1a8)][_0x3f4a71(0x124)]((_0x3576ba) =>
        _0x3576ba["remove"]()
      ),
      (this[_0x3f4a71(0x1a8)][_0x3f4a71(0x1a1)] = 0x0),
      (this[_0x3f4a71(0x156)][_0x3f4a71(0x195)]["style"][_0x3f4a71(0x13f)] =
        _0x3f4a71(0x186));
    const _0x3e1b01 = [],
      _0x10fb08 = [];
    this["content"][_0x3f4a71(0x127)]((_0x4a2a96) => {
      const _0x34dc38 = _0x3f4a71;
      _0x4a2a96[_0x34dc38(0x185)] &&
        _0x4a2a96["morphTargetInfluences"] &&
        _0x10fb08[_0x34dc38(0x12c)](_0x4a2a96),
        _0x4a2a96[_0x34dc38(0x149)] &&
          ((_0x4a2a96[_0x34dc38(0x12b)] =
            _0x4a2a96["name"] ||
            _0x34dc38(0x115) + (_0x3e1b01[_0x34dc38(0x1a1)] + 0x1)),
          _0x3e1b01[_0x34dc38(0x12c)](_0x4a2a96["name"]));
    });
    if (_0x3e1b01[_0x3f4a71(0x1a1)]) {
      this[_0x3f4a71(0xe9)]["domElement"][_0x3f4a71(0x113)]["display"] = "";
      if (this[_0x3f4a71(0xdd)]) this[_0x3f4a71(0xdd)][_0x3f4a71(0x198)]();
      const _0x1f8e67 = [DEFAULT_CAMERA][_0x3f4a71(0x1bd)](_0x3e1b01);
      (this["cameraCtrl"] = this[_0x3f4a71(0xe9)][_0x3f4a71(0xfb)](
        this[_0x3f4a71(0xf7)],
        _0x3f4a71(0x140),
        _0x1f8e67
      )),
        this[_0x3f4a71(0xdd)]["onChange"]((_0x467881) =>
          this["setCamera"](_0x467881)
        );
    }
    _0x10fb08[_0x3f4a71(0x1a1)] &&
      ((this["morphFolder"]["domElement"][_0x3f4a71(0x113)][_0x3f4a71(0x13f)] =
        ""),
      _0x10fb08[_0x3f4a71(0x124)]((_0x2a8abc) => {
        const _0x28eb1d = _0x3f4a71;
        if (_0x2a8abc["morphTargetInfluences"]["length"]) {
          const _0x5057b3 = this[_0x28eb1d(0xf1)][_0x28eb1d(0xfb)](
            { name: _0x2a8abc[_0x28eb1d(0x12b)] || _0x28eb1d(0x12d) },
            _0x28eb1d(0x12b)
          );
          this[_0x28eb1d(0x187)][_0x28eb1d(0x12c)](_0x5057b3);
        }
        for (
          let _0xe26a97 = 0x0;
          _0xe26a97 < _0x2a8abc[_0x28eb1d(0x183)][_0x28eb1d(0x1a1)];
          _0xe26a97++
        ) {
          const _0x5ea206 = this["morphFolder"]
            [_0x28eb1d(0xfb)](
              _0x2a8abc["morphTargetInfluences"],
              _0xe26a97,
              0x0,
              0x1,
              0.01
            )
            [_0x28eb1d(0x15d)]();
          Object[_0x28eb1d(0x1db)](_0x2a8abc[_0x28eb1d(0xd9)])[
            _0x28eb1d(0x124)
          ]((_0x537e27) => {
            const _0x4002eb = _0x28eb1d;
            if (
              _0x537e27 &&
              _0x2a8abc[_0x4002eb(0xd9)][_0x537e27] === _0xe26a97
            )
              _0x5ea206["name"](_0x537e27);
          }),
            this["morphCtrls"][_0x28eb1d(0x12c)](_0x5ea206);
        }
      }));
    if (this[_0x3f4a71(0xf8)][_0x3f4a71(0x1a1)]) {
      this["animFolder"]["domElement"][_0x3f4a71(0x113)][_0x3f4a71(0x13f)] = "";
      const _0x142050 = (this[_0x3f4a71(0xf7)][_0x3f4a71(0x15c)] = {});
      this[_0x3f4a71(0xf8)][_0x3f4a71(0x124)]((_0x4f5e07, _0x50f46) => {
        const _0x4cc4e5 = _0x3f4a71;
        _0x4f5e07[_0x4cc4e5(0x12b)] =
          _0x50f46 + 0x1 + ".\x20" + _0x4f5e07[_0x4cc4e5(0x12b)];
        let _0x522dcb;
        _0x50f46 === 0x0
          ? ((_0x142050[_0x4f5e07[_0x4cc4e5(0x12b)]] = !![]),
            (_0x522dcb = this[_0x4cc4e5(0x12a)][_0x4cc4e5(0x17a)](_0x4f5e07)),
            _0x522dcb[_0x4cc4e5(0x1ab)]())
          : (_0x142050[_0x4f5e07["name"]] = ![]);
        const _0xb958a4 = this[_0x4cc4e5(0x156)]
          ["add"](_0x142050, _0x4f5e07[_0x4cc4e5(0x12b)])
          [_0x4cc4e5(0x15d)]();
        _0xb958a4["onChange"]((_0x13100c) => {
          const _0x3a9c24 = _0x4cc4e5;
          (_0x522dcb = _0x522dcb || this["mixer"][_0x3a9c24(0x17a)](_0x4f5e07)),
            _0x522dcb[_0x3a9c24(0xde)](0x1),
            _0x13100c
              ? _0x522dcb[_0x3a9c24(0x1ab)]()
              : _0x522dcb[_0x3a9c24(0x143)]();
        }),
          this[_0x4cc4e5(0x1a8)][_0x4cc4e5(0x12c)](_0xb958a4);
      });
    }
  }
  ["clear"]() {
    const _0x2c93c6 = _0x11bbe4;
    if (!this[_0x2c93c6(0x1cc)]) return;
    this[_0x2c93c6(0x1b9)]["remove"](this["content"]),
      this[_0x2c93c6(0x1cc)][_0x2c93c6(0x127)]((_0x14f308) => {
        const _0x3a9c6d = _0x2c93c6;
        if (!_0x14f308[_0x3a9c6d(0x185)]) return;
        _0x14f308[_0x3a9c6d(0x182)][_0x3a9c6d(0x192)]();
      }),
      traverseMaterials(this["content"], (_0x5191be) => {
        const _0x36eb74 = _0x2c93c6;
        for (const _0x146ae4 in _0x5191be) {
          _0x146ae4 !== _0x36eb74(0x18f) &&
            _0x5191be[_0x146ae4] &&
            _0x5191be[_0x146ae4][_0x36eb74(0x1de)] &&
            _0x5191be[_0x146ae4]["dispose"]();
        }
      });
  }
}
function traverseMaterials(_0x5e6a10, _0x2f7f39) {
  const _0x5e46c5 = _0x11bbe4;
  _0x5e6a10[_0x5e46c5(0x127)]((_0x282503) => {
    const _0x52943b = _0x5e46c5;
    if (!_0x282503[_0x52943b(0x185)]) return;
    const _0x387fb3 = Array["isArray"](_0x282503[_0x52943b(0x1d3)])
      ? _0x282503["material"]
      : [_0x282503["material"]];
    _0x387fb3[_0x52943b(0x124)](_0x2f7f39);
  });
}
function isIOS() {
  const _0x333b04 = _0x11bbe4;
  return (
    [
      _0x333b04(0x173),
      "iPhone\x20Simulator",
      _0x333b04(0x128),
      "iPad",
      _0x333b04(0x13a),
      "iPod",
    ]["includes"](navigator[_0x333b04(0x17e)]) ||
    (navigator["userAgent"][_0x333b04(0x166)](_0x333b04(0x1e0)) &&
      _0x333b04(0x1be) in document)
  );
}
