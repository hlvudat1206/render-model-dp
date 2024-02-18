const _0x11c99f = _0x7ee5;
(function (_0x8cea88, _0x364c1d) {
  const _0x2dab66 = _0x7ee5,
    _0x46e65e = _0x8cea88();
  while (!![]) {
    try {
      const _0x1abbdc =
        -parseInt(_0x2dab66(0x171)) / 0x1 +
        (-parseInt(_0x2dab66(0x183)) / 0x2) *
          (-parseInt(_0x2dab66(0xec)) / 0x3) +
        (parseInt(_0x2dab66(0x15c)) / 0x4) *
          (-parseInt(_0x2dab66(0x7e)) / 0x5) +
        (-parseInt(_0x2dab66(0x128)) / 0x6) *
          (parseInt(_0x2dab66(0x11b)) / 0x7) +
        parseInt(_0x2dab66(0xc4)) / 0x8 +
        parseInt(_0x2dab66(0x8f)) / 0x9 +
        (-parseInt(_0x2dab66(0xac)) / 0xa) *
          (-parseInt(_0x2dab66(0x14a)) / 0xb);
      if (_0x1abbdc === _0x364c1d) break;
      else _0x46e65e["push"](_0x46e65e["shift"]());
    } catch (_0x3f7df9) {
      _0x46e65e["push"](_0x46e65e["shift"]());
    }
  }
})(_0x429f, 0xd71d2);
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
} from "../../../build/three.module";
import _0xb27d02 from "../../../js/stats.module.js";
import { GLTFLoader } from "../../../js/GLTFLoader.js";
import { KTX2Loader } from "../../../js/KTX2Loader.js";
import { DRACOLoader } from "../../../js/DRACOLoader.js";
import { MeshoptDecoder } from "../../../js/meshopt_decoder.module.js";
import { OrbitControls } from "../../../js/OrbitControls.js";
function _0x7ee5(_0x1601ac, _0x430615) {
  const _0x429f75 = _0x429f();
  return (
    (_0x7ee5 = function (_0x7ee559, _0x5bd050) {
      _0x7ee559 = _0x7ee559 - 0x76;
      let _0x298c35 = _0x429f75[_0x7ee559];
      return _0x298c35;
    }),
    _0x7ee5(_0x1601ac, _0x430615)
  );
}
import { EXRLoader } from "../../../js/EXRLoader.js";
import { RoomEnvironment } from "../../../js/RoomEnvironment.js";
import * as _0x419ddc from "../../../build/three.module";
import { CSS2DRenderer, CSS2DObject } from "../../../js/CSS2DRenderer.js";
import { GUI } from "../../../build/dat.gui.module.js";
import { TWEEN } from "../../../js/tween.module.min.js";
import { environments } from "../../assets/environment/index.js";
import { statusLoading, percentLoading, onProgressCallBack } from "./store.js";
let strDownloadMime = _0x11c99f(0x109),
  img2DObject,
  imgElement,
  iconTotal = [],
  originalDistance = null,
  progress = 0x0;
const DEFAULT_CAMERA = _0x11c99f(0x17b),
  MANAGER = new LoadingManager(),
  THREE_PATH = _0x11c99f(0x17c) + REVISION + ".x",
  DRACO_LOADER = new DRACOLoader(MANAGER)["setDecoderPath"](
    THREE_PATH + "/examples/js/libs/draco/gltf/"
  ),
  KTX2_LOADER = new KTX2Loader(MANAGER)[_0x11c99f(0xf4)](
    THREE_PATH + "/examples/js/libs/basis/"
  ),
  IS_IOS = isIOS(),
  Preset = { ASSET_GENERATOR: _0x11c99f(0x9b) };
Cache[_0x11c99f(0x174)] = !![];
export class Viewer {
  constructor(_0x45cec4, _0x810464) {
    const _0x3c308d = _0x11c99f;
    (this["el"] = _0x45cec4),
      console[_0x3c308d(0x158)](_0x3c308d(0x7f), this["el"]),
      (this[_0x3c308d(0xdd)] = _0x810464),
      (this[_0x3c308d(0xaa)] = []),
      (this[_0x3c308d(0x100)] = null),
      (this[_0x3c308d(0x160)] = null),
      (this[_0x3c308d(0x8c)] = []),
      (this["gui"] = null),
      (this[_0x3c308d(0xe1)] = null),
      (this[_0x3c308d(0x127)] = null),
      (this[_0x3c308d(0xdb)] = null),
      (this[_0x3c308d(0x172)] = {
        environment:
          _0x810464[_0x3c308d(0x167)] === Preset[_0x3c308d(0x81)]
            ? environments[_0x3c308d(0x84)](
                (_0x173bb1) => _0x173bb1["id"] === _0x3c308d(0x10a)
              )[_0x3c308d(0xca)]
            : environments[0x3][_0x3c308d(0xca)],
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
        textureEncoding: _0x3c308d(0xf3),
        ambientIntensity: 0.3,
        ambientColor: 0xffffff,
        directIntensity: 0.8 * Math["PI"],
        directColor: 0xffffff,
        bgColor1: _0x3c308d(0x154),
        bgColor2: _0x3c308d(0x111),
      }),
      (this[_0x3c308d(0x17a)] = new _0x419ddc[_0x3c308d(0xb2)]()),
      (this[_0x3c308d(0x16f)] = new _0x419ddc[_0x3c308d(0x16e)]()),
      (this[_0x3c308d(0x15a)] = new _0x419ddc["Vector2"]()),
      (this[_0x3c308d(0xa0)] = 0x0),
      (this[_0x3c308d(0x13a)] = new _0xb27d02()),
      (this["stats"][_0x3c308d(0xe3)][_0x3c308d(0xad)] = _0x3c308d(0xef)),
      [][_0x3c308d(0xb1)][_0x3c308d(0xba)](
        this["stats"][_0x3c308d(0xe3)][_0x3c308d(0x165)],
        (_0x1443e2) => (_0x1443e2[_0x3c308d(0x13e)][_0x3c308d(0x110)] = "")
      ),
      (this[_0x3c308d(0x11d)] = new Scene()),
      this[_0x3c308d(0x82)]();
    const _0x540710 =
      _0x810464["preset"] === Preset["ASSET_GENERATOR"]
        ? (0.8 * 0xb4) / Math["PI"]
        : 0x3c;
    (this[_0x3c308d(0x14c)] = new PerspectiveCamera(
      _0x540710,
      _0x45cec4[_0x3c308d(0xdc)] / _0x45cec4[_0x3c308d(0x78)],
      0.01,
      0x3e8
    )),
      (this[_0x3c308d(0x117)] = this[_0x3c308d(0x14c)]),
      this[_0x3c308d(0x11d)][_0x3c308d(0x10e)](this[_0x3c308d(0x14c)]),
      (this[_0x3c308d(0xed)] = window["renderer"] =
        new WebGLRenderer({ antialias: !![] })),
      (this[_0x3c308d(0xed)][_0x3c308d(0xd6)] = !![]),
      (this[_0x3c308d(0xed)][_0x3c308d(0xe9)] = sRGBEncoding),
      this[_0x3c308d(0xed)][_0x3c308d(0xe8)](0xcccccc),
      this["renderer"][_0x3c308d(0x13f)](window["devicePixelRatio"]),
      this[_0x3c308d(0xed)][_0x3c308d(0xbc)](
        _0x45cec4[_0x3c308d(0xdc)],
        _0x45cec4[_0x3c308d(0x78)]
      ),
      this["el"]["appendChild"](this[_0x3c308d(0xed)][_0x3c308d(0x95)]),
      (this["renderer2DObject"] = new CSS2DRenderer()),
      this["renderer2DObject"][_0x3c308d(0xbc)](
        _0x45cec4[_0x3c308d(0xdc)],
        _0x45cec4["clientHeight"]
      ),
      (this["renderer2DObject"]["domElement"]["style"]["position"] =
        _0x3c308d(0xcc)),
      (this[_0x3c308d(0x17d)][_0x3c308d(0x95)]["style"]["top"] = "0px"),
      (this[_0x3c308d(0x17d)][_0x3c308d(0x95)][_0x3c308d(0x13e)][
        _0x3c308d(0x110)
      ] = _0x3c308d(0x17e)),
      (this[_0x3c308d(0x17d)][_0x3c308d(0x95)]["style"][_0x3c308d(0x14b)] =
        _0x3c308d(0xd9)),
      this["el"][_0x3c308d(0x11e)](this[_0x3c308d(0x17d)][_0x3c308d(0x95)]),
      (this["pmremGenerator"] = new PMREMGenerator(this[_0x3c308d(0xed)])),
      this["pmremGenerator"]["compileEquirectangularShader"](),
      (this["neutralEnvironment"] = this[_0x3c308d(0x76)][_0x3c308d(0xaf)](
        new RoomEnvironment()
      )[_0x3c308d(0x13b)]),
      (this[_0x3c308d(0x12a)] = new OrbitControls(
        this[_0x3c308d(0x14c)],
        this["renderer"][_0x3c308d(0x95)]
      )),
      (this[_0x3c308d(0x12a)][_0x3c308d(0x144)] = !![]),
      (this[_0x3c308d(0x134)] = null),
      (this[_0x3c308d(0xf2)] = null),
      (this[_0x3c308d(0x7a)] = null),
      (this[_0x3c308d(0xeb)] = []),
      (this[_0x3c308d(0xf0)] = null),
      (this["morphCtrls"] = []),
      (this[_0x3c308d(0x108)] = []),
      (this[_0x3c308d(0x12c)] = null),
      (this[_0x3c308d(0x15f)] = null),
      this[_0x3c308d(0xd4)](),
      this[_0x3c308d(0x173)](),
      this[_0x3c308d(0x107)](),
      this[_0x3c308d(0xd7)]();
    if (_0x810464["kiosk"]) this[_0x3c308d(0xea)][_0x3c308d(0x159)]();
    (this[_0x3c308d(0x11f)] = this["animate"]["bind"](this)),
      requestAnimationFrame(this["animate"]),
      window["addEventListener"](
        "resize",
        this[_0x3c308d(0x145)]["bind"](this),
        ![]
      ),
      this[_0x3c308d(0xb9)](),
      this[_0x3c308d(0x12a)][_0x3c308d(0xcd)](
        _0x3c308d(0xc0),
        this["getControlsZoom"]["bind"](this)
      );
  }
  [_0x11c99f(0x82)]() {}
  [_0x11c99f(0xd0)]() {
    const _0x3322ec = _0x11c99f;
    return this[_0x3322ec(0xed)][_0x3322ec(0x95)];
  }
  [_0x11c99f(0xbd)]() {
    const _0x22d24f = _0x11c99f;
    return this[_0x22d24f(0x97)];
  }
  [_0x11c99f(0x90)]() {
    const _0x577526 = _0x11c99f;
    return this[_0x577526(0x163)];
  }
  ["icon"](_0x3fe979, _0x13572f) {
    const _0x23afc3 = _0x11c99f;
    if (_0x3fe979)
      return (
        (imgElement = document[_0x23afc3(0x153)](_0x23afc3(0x162))),
        (imgElement["className"] = _0x23afc3(0x98)),
        imgElement[_0x23afc3(0x17f)]("id", "imgElement"),
        (imgElement["src"] = _0x3fe979),
        (imgElement[_0x23afc3(0x99)] = 0x23),
        (imgElement[_0x23afc3(0xad)] = 0x23),
        (img2DObject = new CSS2DObject(imgElement)),
        img2DObject[_0x23afc3(0x16d)][_0x23afc3(0x142)](
          _0x13572f[0x0],
          _0x13572f[0x1],
          _0x13572f[0x2]
        ),
        this[_0x23afc3(0x11d)]["add"](img2DObject),
        iconTotal["push"]([imgElement, img2DObject]),
        this[_0x23afc3(0x17d)][_0x23afc3(0x95)]
      );
  }
  ["mouseEnter"]() {
    const _0xd87b06 = _0x11c99f;
    console[_0xd87b06(0x158)]("mouse\x20en"),
      (imgElement[_0xd87b06(0x13e)][_0xd87b06(0x99)] = _0xd87b06(0x8a)),
      console[_0xd87b06(0x158)](_0xd87b06(0x119));
  }
  [_0x11c99f(0xf6)]() {
    const _0x31f029 = _0x11c99f;
    (imgElement[_0x31f029(0x13e)][_0x31f029(0x99)] = _0x31f029(0x161)),
      console[_0x31f029(0x158)](_0x31f029(0x184));
  }
  [_0x11c99f(0xd7)]() {
    const _0x4baa47 = _0x11c99f;
    if (this[_0x4baa47(0x14c)] && img2DObject) {
      const _0x2adb09 = new _0x419ddc["Vector3"](0x0, 0x0, 0x0);
      let _0x32bd8f, _0x49abce;
      const _0x311816 =
        this[_0x4baa47(0x14c)][_0x4baa47(0x16d)][_0x4baa47(0xd2)](_0x2adb09);
      iconTotal[_0x4baa47(0x131)]((_0x3129b2) => {
        const _0x54e5ab = _0x4baa47;
        (_0x32bd8f = this["defaultCamera"]["position"]["distanceTo"](
          _0x3129b2[0x1][_0x54e5ab(0x16d)]
        )),
          (_0x49abce = _0x311816 < _0x32bd8f),
          (_0x3129b2[0x0]["style"][_0x54e5ab(0x126)] = _0x49abce
            ? _0x54e5ab(0x116)
            : "1");
      });
    }
  }
  [_0x11c99f(0xda)]() {
    const _0x4761f9 = _0x11c99f;
    var _0x59f59e = this[_0x4761f9(0x12a)][_0x4761f9(0xa3)]();
    (_0x59f59e = Math[_0x4761f9(0xcf)](_0x59f59e * 0x2710) / 0x2710),
      _0x59f59e == 0x0 && (_0x59f59e = 0x1),
      iconTotal["map"]((_0x413976) => {
        const _0x10cfd8 = _0x4761f9;
        (_0x413976[0x0][_0x10cfd8(0x99)] = 0x46 / _0x59f59e),
          (_0x413976[0x0]["height"] = 0x46 / _0x59f59e);
      });
  }
  ["getCoordinate"]() {
    const _0xa81cf3 = _0x11c99f;
    this[_0xa81cf3(0x17a)]["setFromCamera"](
      this[_0xa81cf3(0x16f)],
      this[_0xa81cf3(0x14c)]
    );
    const _0x32a6ec = this["raycaster"]["intersectObject"](
      this[_0xa81cf3(0x11d)],
      !![]
    );
    if (_0x32a6ec[_0xa81cf3(0x149)] > 0x0) {
      const _0x3aa34c = _0x32a6ec[0x0][_0xa81cf3(0xc1)];
      console[_0xa81cf3(0x158)](
        _0xa81cf3(0x155),
        _0x3aa34c,
        this["defaultCamera"][_0xa81cf3(0x16d)]
      );
    }
  }
  [_0x11c99f(0x80)]() {
    const _0x30f4ff = _0x11c99f;
    this[_0x30f4ff(0x17a)]["setFromCamera"](
      this[_0x30f4ff(0x16f)],
      this["defaultCamera"]
    );
    const _0x44e5ba = this[_0x30f4ff(0x17a)][_0x30f4ff(0xa1)](
      this[_0x30f4ff(0x11d)],
      !![]
    );
    if (_0x44e5ba[_0x30f4ff(0x149)] > 0x0) {
      const _0x5e0b22 = _0x44e5ba[0x0][_0x30f4ff(0xd5)];
      console["log"]("okok:\x20", _0x5e0b22),
        (this[_0x30f4ff(0xe1)] = _0x5e0b22["parent"]["children"][0x1]);
    }
    return this[_0x30f4ff(0xe1)];
  }
  ["interactiveMainObject"](_0x3d8ae3) {
    const _0x4672cd = _0x11c99f;
    this[_0x4672cd(0x17a)]["setFromCamera"](
      this[_0x4672cd(0x16f)],
      this[_0x4672cd(0x14c)]
    ),
      console[_0x4672cd(0x158)](_0x4672cd(0x175), _0x3d8ae3);
    const _0x51a2ef = this["raycaster"][_0x4672cd(0xa1)](_0x3d8ae3, !![]);
    if (_0x51a2ef[_0x4672cd(0x149)] > 0x0) {
      const _0x4ce9c3 = _0x51a2ef[0x0]["object"];
      this[_0x4672cd(0x127)] = _0x4ce9c3["parent"][_0x4672cd(0x165)][0x1];
    }
    return this[_0x4672cd(0x127)];
  }
  ["mouseMove"](_0x5e589e) {
    const _0x138444 = _0x11c99f;
    (this[_0x138444(0x16f)]["x"] =
      (_0x5e589e[_0x138444(0x136)] / window[_0x138444(0x106)]) * 0x2 - 0x1),
      (this["mouse"]["y"] =
        -(_0x5e589e[_0x138444(0x10c)] / window[_0x138444(0x96)]) * 0x2 + 0x1);
    var _0x43de8d = 0x1,
      _0x5e5231 = new _0x419ddc["Vector3"](
        this[_0x138444(0x16f)]["x"],
        this[_0x138444(0x16f)]["y"],
        0.5
      );
    _0x5e5231[_0x138444(0xe0)](this[_0x138444(0x14c)]);
    var _0x54f5cb = _0x5e5231["sub"](this["defaultCamera"][_0x138444(0x16d)])[
      _0x138444(0x8e)
    ]();
    _0x54f5cb[_0x138444(0xce)](_0x43de8d);
    let _0x1b6225 = _0x54f5cb[_0x138444(0x10e)](
        this[_0x138444(0x14c)][_0x138444(0x16d)]
      ),
      _0xc327d = {
        pos: _0x1b6225,
        posCam: this["defaultCamera"][_0x138444(0x16d)],
      };
    return _0xc327d;
  }
  ["onWindowResize"]() {
    const _0x187516 = _0x11c99f,
      { clientHeight: _0x38f4b2, clientWidth: _0x355abb } =
        this["el"][_0x187516(0xd1)];
    (this[_0x187516(0x14c)][_0x187516(0xfc)] = _0x355abb / _0x38f4b2),
      this[_0x187516(0x14c)][_0x187516(0x11a)](),
      this[_0x187516(0xed)][_0x187516(0xbc)](_0x355abb, _0x38f4b2),
      this[_0x187516(0x17d)]["setSize"](_0x355abb, _0x38f4b2);
  }
  ["animate"](_0x34c9b0) {
    const _0x3c24ee = _0x11c99f;
    requestAnimationFrame(this["animate"]);
    const _0x4b50f7 = (_0x34c9b0 - this[_0x3c24ee(0xa0)]) / 0x3e8;
    this[_0x3c24ee(0x12a)][_0x3c24ee(0x16a)](),
      this[_0x3c24ee(0x13a)][_0x3c24ee(0x16a)](),
      this["mixer"] && this["mixer"][_0x3c24ee(0x16a)](_0x4b50f7),
      this[_0x3c24ee(0x7b)](),
      (this[_0x3c24ee(0xa0)] = _0x34c9b0),
      TWEEN["update"]();
  }
  [_0x11c99f(0x7b)]() {
    const _0x2a6035 = _0x11c99f;
    this["renderer2DObject"]["render"](
      this[_0x2a6035(0x11d)],
      this[_0x2a6035(0x117)]
    ),
      this[_0x2a6035(0xd7)](),
      this[_0x2a6035(0xed)][_0x2a6035(0x7b)](
        this["scene"],
        this[_0x2a6035(0x117)]
      ),
      this[_0x2a6035(0x172)][_0x2a6035(0xb8)] &&
        (this["axesCamera"][_0x2a6035(0x16d)][_0x2a6035(0x141)](
          this["defaultCamera"]["position"]
        ),
        this[_0x2a6035(0xe5)]["lookAt"](
          this[_0x2a6035(0xae)][_0x2a6035(0x16d)]
        ),
        this[_0x2a6035(0x9f)][_0x2a6035(0x7b)](
          this[_0x2a6035(0xae)],
          this[_0x2a6035(0xe5)]
        ));
  }
  [_0x11c99f(0x145)]() {
    const _0x36b039 = _0x11c99f,
      { clientHeight: _0x52895d, clientWidth: _0x55c2f5 } =
        this["el"][_0x36b039(0xd1)];
    (this["defaultCamera"][_0x36b039(0xfc)] = _0x55c2f5 / _0x52895d),
      this[_0x36b039(0x14c)][_0x36b039(0x11a)](),
      this[_0x36b039(0xed)][_0x36b039(0xbc)](_0x55c2f5, _0x52895d),
      this[_0x36b039(0x17d)][_0x36b039(0xbc)](_0x55c2f5, _0x52895d),
      (this[_0x36b039(0xe5)]["aspect"] =
        this[_0x36b039(0x97)][_0x36b039(0xdc)] /
        this["axesDiv"][_0x36b039(0x78)]),
      this["axesCamera"]["updateProjectionMatrix"](),
      this[_0x36b039(0x9f)][_0x36b039(0xbc)](
        this["axesDiv"]["clientWidth"],
        this["axesDiv"][_0x36b039(0x78)]
      );
  }
  ["createObject"] = (_0x2dcbd5) => {
    const _0x2673a5 = _0x11c99f;
    this[_0x2673a5(0x11d)][_0x2673a5(0x10e)](_0x2dcbd5);
  };
  [_0x11c99f(0xe4)] = (_0xc0261f) => {
    const _0x45e73c = _0x11c99f;
    this[_0x45e73c(0x11d)][_0x45e73c(0x156)](_0xc0261f);
  };
  [_0x11c99f(0x121)](_0x5363ee) {
    const _0x36b951 = _0x11c99f;
    console[_0x36b951(0x158)](_0x36b951(0x137), _0x5363ee),
      console[_0x36b951(0x158)](_0x36b951(0x132)),
      console["log"](_0x36b951(0x94), _0x5363ee);
    const _0xb47e83 = LoaderUtils[_0x36b951(0xc7)](_0x5363ee);
    return new Promise((_0x13a02e, _0xc15395) => {
      const _0x25bfdb = _0x36b951;
      MANAGER[_0x25bfdb(0x16c)]((_0x809590, _0x183e7d) => {
        const _0x4f4a43 = _0x25bfdb;
        return (
          console[_0x4f4a43(0x158)](_0x4f4a43(0x12f), MANAGER),
          (_0x183e7d || "") + _0x809590
        );
      });
      const _0x3c451b = new GLTFLoader(MANAGER)
          [_0x25bfdb(0x15b)](_0x25bfdb(0xa6))
          [_0x25bfdb(0x176)](DRACO_LOADER)
          ["setKTX2Loader"](KTX2_LOADER[_0x25bfdb(0x9e)](this[_0x25bfdb(0xed)]))
          [_0x25bfdb(0x147)](MeshoptDecoder),
        _0x3364a0 = [];
      _0x3c451b[_0x25bfdb(0x121)](
        _0x5363ee,
        (_0x5217e1) => {
          const _0x4ed692 = _0x25bfdb;
          console["log"](_0x4ed692(0xc6), _0x5363ee),
            console[_0x4ed692(0x158)]("window:\x20", window),
            statusLoading[_0x4ed692(0x16a)]((_0x26c819) => (_0x26c819 = !![])),
            (window[_0x4ed692(0x7d)][_0x4ed692(0xc9)] = _0x5217e1);
          const _0x27f7b1 =
              _0x5217e1["scene"] || _0x5217e1[_0x4ed692(0x85)][0x0],
            _0x5c03c7 = _0x5217e1[_0x4ed692(0xc3)] || [];
          if (!_0x27f7b1)
            throw new Error(
              "This\x20model\x20contains\x20no\x20scene,\x20and\x20cannot\x20be\x20viewed\x20here.\x20However," +
                "\x20it\x20may\x20contain\x20individual\x203D\x20resources."
            );
          this[_0x4ed692(0x9a)](_0x27f7b1, _0x5c03c7),
            _0x13a02e(_0x5217e1[_0x4ed692(0x11d)]["children"][0x0]);
        },
        (_0x318b0b) => {
          const _0x1e4986 = _0x25bfdb;
          (progress =
            (_0x318b0b[_0x1e4986(0x102)] / _0x318b0b[_0x1e4986(0x12b)]) * 0x64),
            console[_0x1e4986(0x158)](_0x1e4986(0xe6), progress),
            percentLoading["update"]((_0x1b791a) => (_0x1b791a = progress)),
            onProgressCallBack[_0x1e4986(0x16a)](
              (_0x116624) => (_0x116624 = !_0x116624)
            );
        },
        function (_0x1bf044) {
          const _0x1c07f9 = _0x25bfdb;
          console[_0x1c07f9(0x105)](_0x1bf044);
        }
      );
    });
  }
  ["setContent"](_0x203ebb, _0x391956) {
    const _0x515bf5 = _0x11c99f;
    this[_0x515bf5(0x152)]();
    const _0x442ec3 = new Box3()["setFromObject"](_0x203ebb),
      _0x41a292 = _0x442ec3[_0x515bf5(0xb3)](new Vector3())[_0x515bf5(0x149)](),
      _0x4f32ac = _0x442ec3[_0x515bf5(0xf7)](new Vector3());
    this[_0x515bf5(0x12a)][_0x515bf5(0x104)](),
      (_0x203ebb[_0x515bf5(0x16d)]["x"] +=
        _0x203ebb[_0x515bf5(0x16d)]["x"] - _0x4f32ac["x"]),
      (_0x203ebb[_0x515bf5(0x16d)]["y"] +=
        _0x203ebb["position"]["y"] - _0x4f32ac["y"]),
      (_0x203ebb[_0x515bf5(0x16d)]["z"] +=
        _0x203ebb["position"]["z"] - _0x4f32ac["z"]),
      (this[_0x515bf5(0x12a)][_0x515bf5(0x11c)] = _0x41a292 * 0xa),
      (this[_0x515bf5(0x14c)]["near"] = _0x41a292 / 0x64),
      (this[_0x515bf5(0x14c)][_0x515bf5(0x88)] = _0x41a292 * 0x64),
      this["defaultCamera"][_0x515bf5(0x11a)](),
      this[_0x515bf5(0xdd)][_0x515bf5(0x15e)]
        ? (this[_0x515bf5(0x14c)][_0x515bf5(0x16d)][_0x515bf5(0x169)](
            this[_0x515bf5(0xdd)][_0x515bf5(0x15e)]
          ),
          this[_0x515bf5(0x14c)]["lookAt"](new Vector3()))
        : (this[_0x515bf5(0x14c)]["position"][_0x515bf5(0x141)](_0x4f32ac),
          (this["defaultCamera"][_0x515bf5(0x16d)]["x"] += _0x41a292 / 0x2),
          (this[_0x515bf5(0x14c)][_0x515bf5(0x16d)]["y"] += _0x41a292 / 0x5),
          (this[_0x515bf5(0x14c)]["position"]["z"] += _0x41a292 / 0x2),
          this[_0x515bf5(0x14c)][_0x515bf5(0x10f)](_0x4f32ac)),
      this[_0x515bf5(0x182)](DEFAULT_CAMERA),
      this[_0x515bf5(0xe5)][_0x515bf5(0x16d)][_0x515bf5(0x141)](
        this[_0x515bf5(0x14c)][_0x515bf5(0x16d)]
      ),
      this[_0x515bf5(0xe5)]["lookAt"](this[_0x515bf5(0xae)]["position"]),
      (this[_0x515bf5(0xe5)][_0x515bf5(0xc8)] = _0x41a292 / 0x64),
      (this[_0x515bf5(0xe5)][_0x515bf5(0x88)] = _0x41a292 * 0x64),
      this[_0x515bf5(0xe5)][_0x515bf5(0x11a)](),
      this[_0x515bf5(0x103)]["scale"][_0x515bf5(0x142)](
        _0x41a292,
        _0x41a292,
        _0x41a292
      ),
      this[_0x515bf5(0x12a)][_0x515bf5(0xa4)](),
      this["scene"]["add"](_0x203ebb),
      (this[_0x515bf5(0x100)] = _0x203ebb),
      (this[_0x515bf5(0x172)][_0x515bf5(0xb6)] = !![]),
      this[_0x515bf5(0x100)][_0x515bf5(0x143)]((_0x38c637) => {
        const _0x312773 = _0x515bf5;
        if (_0x38c637[_0x312773(0x77)]) this["state"]["punctualLights"] = ![];
        else
          _0x38c637[_0x312773(0xab)] &&
            (_0x38c637[_0x312773(0x8b)][_0x312773(0x16b)] =
              !_0x38c637[_0x312773(0x8b)]["transparent"]);
      }),
      this["setClips"](_0x391956),
      this["updateLights"](),
      this[_0x515bf5(0x135)](),
      this[_0x515bf5(0xd3)](),
      this[_0x515bf5(0x178)](),
      this[_0x515bf5(0xa7)](),
      (window[_0x515bf5(0x7d)][_0x515bf5(0x11d)] = this[_0x515bf5(0x100)]),
      this[_0x515bf5(0xb0)](this[_0x515bf5(0x100)]);
  }
  ["printGraph"](_0x5a5cbe) {
    const _0xefafc1 = _0x11c99f;
    console[_0xefafc1(0x139)](
      "\x20<" + _0x5a5cbe[_0xefafc1(0x12d)] + ">\x20" + _0x5a5cbe["name"]
    ),
      _0x5a5cbe["children"][_0xefafc1(0xb1)]((_0x3804b5) =>
        this["printGraph"](_0x3804b5)
      ),
      console[_0xefafc1(0x14f)]();
  }
  ["setClips"](_0x47e8a1) {
    const _0x787ab1 = _0x11c99f;
    this[_0x787ab1(0x160)] &&
      (this[_0x787ab1(0x160)][_0x787ab1(0x15d)](),
      this[_0x787ab1(0x160)][_0x787ab1(0x113)](
        this[_0x787ab1(0x160)]["getRoot"]()
      ),
      (this["mixer"] = null));
    this[_0x787ab1(0x8c)] = _0x47e8a1;
    if (!_0x47e8a1[_0x787ab1(0x149)]) return;
    this[_0x787ab1(0x160)] = new AnimationMixer(this[_0x787ab1(0x100)]);
  }
  [_0x11c99f(0xee)]() {
    const _0x4b3105 = _0x11c99f;
    this[_0x4b3105(0x8c)][_0x4b3105(0xb1)]((_0x223b7d) => {
      const _0x30e6a9 = _0x4b3105;
      this["mixer"][_0x30e6a9(0xfb)](_0x223b7d)[_0x30e6a9(0x104)]()["play"](),
        (this["state"]["actionStates"][_0x223b7d["name"]] = !![]);
    });
  }
  [_0x11c99f(0x182)](_0x108d93) {
    const _0x2e581d = _0x11c99f;
    _0x108d93 === DEFAULT_CAMERA
      ? ((this["controls"][_0x2e581d(0x174)] = !![]),
        (this["activeCamera"] = this[_0x2e581d(0x14c)]))
      : ((this["controls"][_0x2e581d(0x174)] = ![]),
        this["content"]["traverse"]((_0x8c61e3) => {
          const _0x2f78f2 = _0x2e581d;
          _0x8c61e3["isCamera"] &&
            _0x8c61e3[_0x2f78f2(0xca)] === _0x108d93 &&
            (this[_0x2f78f2(0x117)] = _0x8c61e3);
        }));
  }
  [_0x11c99f(0x178)]() {
    const _0x3c228b = _0x11c99f,
      _0x412975 =
        this[_0x3c228b(0x172)][_0x3c228b(0x9c)] === _0x3c228b(0xf3)
          ? sRGBEncoding
          : LinearEncoding;
    traverseMaterials(this["content"], (_0x4f29f8) => {
      const _0x1bfc2c = _0x3c228b;
      if (_0x4f29f8["map"])
        _0x4f29f8[_0x1bfc2c(0x131)][_0x1bfc2c(0x125)] = _0x412975;
      if (_0x4f29f8[_0x1bfc2c(0x87)])
        _0x4f29f8[_0x1bfc2c(0x87)][_0x1bfc2c(0x125)] = _0x412975;
      if (_0x4f29f8[_0x1bfc2c(0x131)] || _0x4f29f8[_0x1bfc2c(0x87)])
        _0x4f29f8["needsUpdate"] = !![];
    });
  }
  [_0x11c99f(0xdf)]() {
    const _0x4f8366 = _0x11c99f,
      _0x253d48 = this[_0x4f8366(0x172)],
      _0xc432b5 = this[_0x4f8366(0xaa)];
    if (_0x253d48["punctualLights"] && !_0xc432b5[_0x4f8366(0x149)])
      this[_0x4f8366(0xcb)]();
    else
      !_0x253d48[_0x4f8366(0xb6)] &&
        _0xc432b5[_0x4f8366(0x149)] &&
        this[_0x4f8366(0x181)]();
    (this[_0x4f8366(0xed)][_0x4f8366(0xd8)] = Number(
      _0x253d48[_0x4f8366(0xd8)]
    )),
      (this[_0x4f8366(0xed)][_0x4f8366(0x79)] = Math[_0x4f8366(0xde)](
        0x2,
        _0x253d48[_0x4f8366(0x177)]
      )),
      _0xc432b5[_0x4f8366(0x149)] === 0x2 &&
        ((_0xc432b5[0x0][_0x4f8366(0xe7)] = _0x253d48["ambientIntensity"]),
        _0xc432b5[0x0][_0x4f8366(0x124)][_0x4f8366(0x148)](
          _0x253d48[_0x4f8366(0x91)]
        ),
        (_0xc432b5[0x1][_0x4f8366(0xe7)] = _0x253d48[_0x4f8366(0x86)]),
        _0xc432b5[0x1][_0x4f8366(0x124)][_0x4f8366(0x148)](
          _0x253d48["directColor"]
        ));
  }
  [_0x11c99f(0xcb)]() {
    const _0x20c8bf = _0x11c99f,
      _0x4865f2 = this[_0x20c8bf(0x172)];
    if (this["options"]["preset"] === Preset[_0x20c8bf(0x81)]) {
      const _0x13c2c7 = new HemisphereLight();
      (_0x13c2c7["name"] = _0x20c8bf(0x166)),
        this[_0x20c8bf(0x11d)][_0x20c8bf(0x10e)](_0x13c2c7),
        this[_0x20c8bf(0xaa)]["push"](_0x13c2c7);
      return;
    }
    const _0x120dcd = new AmbientLight(
      _0x4865f2[_0x20c8bf(0x91)],
      _0x4865f2[_0x20c8bf(0xf1)]
    );
    (_0x120dcd[_0x20c8bf(0xca)] = "ambient_light"),
      this["defaultCamera"][_0x20c8bf(0x10e)](_0x120dcd);
    const _0x278c2b = new DirectionalLight(
      _0x4865f2["directColor"],
      _0x4865f2[_0x20c8bf(0x86)]
    );
    _0x278c2b["position"][_0x20c8bf(0x142)](0.5, 0x0, 0.866),
      (_0x278c2b[_0x20c8bf(0xca)] = _0x20c8bf(0x129)),
      this[_0x20c8bf(0x14c)][_0x20c8bf(0x10e)](_0x278c2b),
      this[_0x20c8bf(0xaa)]["push"](_0x120dcd, _0x278c2b);
  }
  [_0x11c99f(0x181)]() {
    const _0xc3c336 = _0x11c99f;
    this[_0xc3c336(0xaa)]["forEach"]((_0x5dd83f) =>
      _0x5dd83f["parent"][_0xc3c336(0x156)](_0x5dd83f)
    ),
      (this[_0xc3c336(0xaa)]["length"] = 0x0);
  }
  [_0x11c99f(0xd3)]() {
    const _0x41b331 = _0x11c99f,
      _0x5b582a = environments["filter"](
        (_0x3de285) =>
          _0x3de285["name"] === this[_0x41b331(0x172)]["environment"]
      )[0x0];
    this[_0x41b331(0x118)](_0x5b582a)[_0x41b331(0x8d)](
      ({ envMap: _0xf97b25 }) => {
        const _0x410757 = _0x41b331;
        if (
          (!_0xf97b25 || !this["state"][_0x410757(0x12e)]) &&
          this["activeCamera"] === this[_0x410757(0x14c)]
        ) {
        } else {
        }
        (this[_0x410757(0x11d)]["environment"] = _0xf97b25),
          (this[_0x410757(0x11d)][_0x410757(0x12e)] = this[_0x410757(0x172)][
            "background"
          ]
            ? _0xf97b25
            : null);
      }
    );
  }
  [_0x11c99f(0x118)](_0x463ccf) {
    const _0x89fb2a = _0x11c99f,
      { id: _0xbaefb5, path: _0x1f37f6 } = _0x463ccf;
    if (_0xbaefb5 === "neutral")
      return Promise[_0x89fb2a(0xb7)]({ envMap: this[_0x89fb2a(0x179)] });
    if (_0xbaefb5 === "") return Promise[_0x89fb2a(0xb7)]({ envMap: null });
    return new Promise((_0x32995f, _0x2c0a33) => {
      const _0x37d860 = _0x89fb2a;
      new EXRLoader()[_0x37d860(0x121)](
        _0x1f37f6,
        (_0x1bdb40) => {
          const _0x558107 = _0x37d860,
            _0xf52431 =
              this[_0x558107(0x76)]["fromEquirectangular"](_0x1bdb40)[
                _0x558107(0x13b)
              ];
          this[_0x558107(0x76)][_0x558107(0xe2)](),
            _0x32995f({ envMap: _0xf52431 });
        },
        undefined,
        _0x2c0a33
      );
    });
  }
  [_0x11c99f(0xa7)]() {
    const _0x3b45db = _0x11c99f;
    this[_0x3b45db(0x108)]["length"] &&
      this[_0x3b45db(0x108)][_0x3b45db(0xb1)]((_0x2a2640) =>
        this["scene"][_0x3b45db(0x156)](_0x2a2640)
      ),
      traverseMaterials(this[_0x3b45db(0x100)], (_0x14b36e) => {
        const _0x482945 = _0x3b45db;
        _0x14b36e[_0x482945(0xb4)] = this[_0x482945(0x172)][_0x482945(0xb4)];
      }),
      this[_0x3b45db(0x100)]["traverse"]((_0x3876fe) => {
        const _0x5ca3d4 = _0x3b45db;
        if (
          _0x3876fe[_0x5ca3d4(0xab)] &&
          _0x3876fe[_0x5ca3d4(0x112)] &&
          this[_0x5ca3d4(0x172)][_0x5ca3d4(0x112)]
        ) {
          const _0x15dd1c = new SkeletonHelper(
            _0x3876fe[_0x5ca3d4(0x112)][_0x5ca3d4(0x14d)][0x0][_0x5ca3d4(0x164)]
          );
          (_0x15dd1c[_0x5ca3d4(0x8b)][_0x5ca3d4(0x14e)] = 0x3),
            this[_0x5ca3d4(0x11d)][_0x5ca3d4(0x10e)](_0x15dd1c),
            this[_0x5ca3d4(0x108)]["push"](_0x15dd1c);
        }
      }),
      this[_0x3b45db(0x172)][_0x3b45db(0xb8)] !==
        Boolean(this[_0x3b45db(0x12c)]) &&
        (this[_0x3b45db(0x172)]["grid"]
          ? ((this["gridHelper"] = new GridHelper()),
            (this[_0x3b45db(0x15f)] = new AxesHelper()),
            (this[_0x3b45db(0x15f)][_0x3b45db(0x9d)] = 0x3e7),
            (this[_0x3b45db(0x15f)]["onBeforeRender"] = (_0x5a3315) =>
              _0x5a3315[_0x3b45db(0x114)]()),
            this[_0x3b45db(0x11d)]["add"](this[_0x3b45db(0x12c)]),
            this["scene"]["add"](this[_0x3b45db(0x15f)]))
          : (this[_0x3b45db(0x11d)][_0x3b45db(0x156)](this[_0x3b45db(0x12c)]),
            this[_0x3b45db(0x11d)][_0x3b45db(0x156)](this[_0x3b45db(0x15f)]),
            (this[_0x3b45db(0x12c)] = null),
            (this[_0x3b45db(0x15f)] = null),
            this[_0x3b45db(0x9f)]["clear"]()));
  }
  [_0x11c99f(0xa5)]() {}
  ["addAxesHelper"]() {
    const _0x2d42c5 = _0x11c99f;
    (this[_0x2d42c5(0x97)] = document[_0x2d42c5(0x153)](_0x2d42c5(0x150))),
      this["el"]["appendChild"](this[_0x2d42c5(0x97)]),
      this[_0x2d42c5(0x97)][_0x2d42c5(0x123)][_0x2d42c5(0x10e)]("axes");
    const { clientWidth: _0x345f93, clientHeight: _0x8ab8b0 } =
      this[_0x2d42c5(0x97)];
    (this[_0x2d42c5(0xae)] = new Scene()),
      (this[_0x2d42c5(0xe5)] = new PerspectiveCamera(
        0x32,
        _0x345f93 / _0x8ab8b0,
        0.1,
        0xa
      )),
      this[_0x2d42c5(0xae)][_0x2d42c5(0x10e)](this[_0x2d42c5(0xe5)]),
      (this[_0x2d42c5(0x9f)] = new WebGLRenderer({ alpha: !![] })),
      this[_0x2d42c5(0x9f)][_0x2d42c5(0x13f)](window[_0x2d42c5(0x168)]),
      this[_0x2d42c5(0x9f)][_0x2d42c5(0xbc)](
        this[_0x2d42c5(0x97)][_0x2d42c5(0xdc)],
        this[_0x2d42c5(0x97)][_0x2d42c5(0x78)]
      ),
      (this["axesCamera"]["up"] = this["defaultCamera"]["up"]),
      (this[_0x2d42c5(0x103)] = new AxesHelper(0x5)),
      this[_0x2d42c5(0xae)][_0x2d42c5(0x10e)](this["axesCorner"]),
      this[_0x2d42c5(0x97)][_0x2d42c5(0x11e)](
        this[_0x2d42c5(0x9f)][_0x2d42c5(0x95)]
      );
  }
  [_0x11c99f(0x173)]() {
    const _0x576d51 = _0x11c99f,
      _0x559579 = (this[_0x576d51(0xea)] = new GUI({
        autoPlace: ![],
        width: 0x104,
        hideable: !![],
      })),
      _0x2edf4d = _0x559579["addFolder"](_0x576d51(0x115)),
      _0x335fb9 = _0x2edf4d[_0x576d51(0x10e)](
        this[_0x576d51(0x172)],
        _0x576d51(0x12e)
      );
    _0x335fb9["onChange"](() => this[_0x576d51(0xd3)]());
    const _0x292c97 = _0x2edf4d[_0x576d51(0x10e)](
      this[_0x576d51(0x172)],
      "wireframe"
    );
    _0x292c97["onChange"](() => this[_0x576d51(0xa7)]());
    const _0x4565d7 = _0x2edf4d[_0x576d51(0x10e)](
      this[_0x576d51(0x172)],
      _0x576d51(0x112)
    );
    _0x4565d7[_0x576d51(0x101)](() => this[_0x576d51(0xa7)]());
    const _0xafab10 = _0x2edf4d[_0x576d51(0x10e)](
      this[_0x576d51(0x172)],
      _0x576d51(0xb8)
    );
    _0xafab10[_0x576d51(0x101)](() => this["updateDisplay"]()),
      _0x2edf4d[_0x576d51(0x10e)](this[_0x576d51(0x12a)], "autoRotate"),
      _0x2edf4d[_0x576d51(0x10e)](this[_0x576d51(0x12a)], "screenSpacePanning");
    const _0x5bdb0d = _0x2edf4d[_0x576d51(0x130)](
        this[_0x576d51(0x172)],
        _0x576d51(0xf5)
      ),
      _0xb1859b = _0x2edf4d[_0x576d51(0x130)](this["state"], _0x576d51(0x146));
    _0x5bdb0d[_0x576d51(0x101)](() => this["updateBackground"]()),
      _0xb1859b[_0x576d51(0x101)](() => this[_0x576d51(0xa5)]());
    const _0x3b062f = _0x559579[_0x576d51(0x120)](_0x576d51(0x140)),
      _0x34475a = _0x3b062f[_0x576d51(0x10e)](
        this["state"],
        "textureEncoding",
        [_0x576d51(0xf3), _0x576d51(0x180)]
      );
    _0x34475a[_0x576d51(0x101)](() => this["updateTextureEncoding"]()),
      _0x3b062f[_0x576d51(0x10e)](this[_0x576d51(0xed)], _0x576d51(0xe9), {
        sRGB: sRGBEncoding,
        Linear: LinearEncoding,
      })[_0x576d51(0x101)](() => {
        const _0xbdcc1c = _0x576d51;
        (this[_0xbdcc1c(0xed)][_0xbdcc1c(0xe9)] = Number(
          this[_0xbdcc1c(0xed)][_0xbdcc1c(0xe9)]
        )),
          traverseMaterials(this[_0xbdcc1c(0x100)], (_0x40a768) => {
            const _0x4dbdc2 = _0xbdcc1c;
            _0x40a768[_0x4dbdc2(0x13c)] = !![];
          });
      });
    const _0x397f67 = _0x3b062f["add"](
      this[_0x576d51(0x172)],
      "environment",
      environments[_0x576d51(0x131)]((_0x21a530) => _0x21a530[_0x576d51(0xca)])
    );
    _0x397f67[_0x576d51(0x101)](() => this[_0x576d51(0xd3)]()),
      [
        _0x3b062f[_0x576d51(0x10e)](this[_0x576d51(0x172)], "toneMapping", {
          Linear: LinearToneMapping,
          "ACES\x20Filmic": ACESFilmicToneMapping,
        }),
        _0x3b062f[_0x576d51(0x10e)](
          this["state"],
          _0x576d51(0x177),
          -0xa,
          0xa,
          0.01
        ),
        _0x3b062f[_0x576d51(0x10e)](this["state"], "punctualLights")[
          "listen"
        ](),
        _0x3b062f[_0x576d51(0x10e)](this["state"], _0x576d51(0xf1), 0x0, 0x2),
        _0x3b062f["addColor"](this[_0x576d51(0x172)], _0x576d51(0x91)),
        _0x3b062f[_0x576d51(0x10e)](
          this[_0x576d51(0x172)],
          _0x576d51(0x86),
          0x0,
          0x4
        ),
        _0x3b062f[_0x576d51(0x130)](this["state"], "directColor"),
      ][_0x576d51(0xb1)]((_0x7e88b9) =>
        _0x7e88b9[_0x576d51(0x101)](() => this["updateLights"]())
      ),
      (this[_0x576d51(0x7a)] = _0x559579[_0x576d51(0x120)](_0x576d51(0x93))),
      (this[_0x576d51(0x7a)][_0x576d51(0x95)][_0x576d51(0x13e)][
        _0x576d51(0x110)
      ] = "none");
    const _0x157e82 = this[_0x576d51(0x7a)][_0x576d51(0x10e)](
      this[_0x576d51(0x172)],
      _0x576d51(0xf9),
      0x0,
      0x1
    );
    _0x157e82["onChange"]((_0x58002a) => {
      const _0xda1fa6 = _0x576d51;
      if (this["mixer"]) this["mixer"][_0xda1fa6(0xbe)] = _0x58002a;
    }),
      this[_0x576d51(0x7a)][_0x576d51(0x10e)](
        { playAll: () => this[_0x576d51(0xee)]() },
        _0x576d51(0x7c)
      ),
      (this["morphFolder"] = _0x559579["addFolder"](_0x576d51(0x122))),
      (this[_0x576d51(0xf0)][_0x576d51(0x95)][_0x576d51(0x13e)][
        _0x576d51(0x110)
      ] = "none"),
      (this[_0x576d51(0xf2)] = _0x559579[_0x576d51(0x120)]("Cameras")),
      (this[_0x576d51(0xf2)][_0x576d51(0x95)][_0x576d51(0x13e)]["display"] =
        _0x576d51(0xd9));
    const _0x2fb2db = _0x559579[_0x576d51(0x120)](_0x576d51(0xfa)),
      _0x78eba4 = document[_0x576d51(0x153)]("li");
    (this["stats"][_0x576d51(0xe3)][_0x576d51(0x13e)][_0x576d51(0x16d)] =
      "static"),
      _0x78eba4["appendChild"](this[_0x576d51(0x13a)][_0x576d51(0xe3)]),
      _0x78eba4[_0x576d51(0x123)][_0x576d51(0x10e)]("gui-stats"),
      (this[_0x576d51(0x163)] = document[_0x576d51(0x153)](_0x576d51(0x150))),
      this["el"]["appendChild"](this["guiWrap"]),
      this["guiWrap"]["classList"]["add"](_0x576d51(0x133)),
      this[_0x576d51(0x163)][_0x576d51(0x11e)](_0x559579[_0x576d51(0x95)]),
      _0x559579["open"]();
  }
  [_0x11c99f(0x135)]() {
    const _0x51ad13 = _0x11c99f;
    (this[_0x51ad13(0xf2)]["domElement"][_0x51ad13(0x13e)][_0x51ad13(0x110)] =
      _0x51ad13(0xd9)),
      this[_0x51ad13(0xc5)][_0x51ad13(0xb1)]((_0x12c59c) =>
        _0x12c59c[_0x51ad13(0x156)]()
      ),
      (this[_0x51ad13(0xc5)]["length"] = 0x0),
      (this[_0x51ad13(0xf0)][_0x51ad13(0x95)]["style"][_0x51ad13(0x110)] =
        _0x51ad13(0xd9)),
      this["animCtrls"][_0x51ad13(0xb1)]((_0x3e6916) => _0x3e6916["remove"]()),
      (this["animCtrls"][_0x51ad13(0x149)] = 0x0),
      (this[_0x51ad13(0x7a)][_0x51ad13(0x95)][_0x51ad13(0x13e)][
        _0x51ad13(0x110)
      ] = _0x51ad13(0xd9));
    const _0x4f6ae9 = [],
      _0x4edaa2 = [];
    this[_0x51ad13(0x100)][_0x51ad13(0x143)]((_0x5416c6) => {
      const _0x2ce7cd = _0x51ad13;
      _0x5416c6["isMesh"] &&
        _0x5416c6[_0x2ce7cd(0xbf)] &&
        _0x4edaa2[_0x2ce7cd(0x138)](_0x5416c6),
        _0x5416c6[_0x2ce7cd(0xa2)] &&
          ((_0x5416c6["name"] =
            _0x5416c6["name"] || _0x2ce7cd(0xf8) + (_0x4f6ae9["length"] + 0x1)),
          _0x4f6ae9["push"](_0x5416c6[_0x2ce7cd(0xca)]));
    });
    if (_0x4f6ae9[_0x51ad13(0x149)]) {
      this[_0x51ad13(0xf2)][_0x51ad13(0x95)][_0x51ad13(0x13e)][
        _0x51ad13(0x110)
      ] = "";
      if (this[_0x51ad13(0x134)]) this[_0x51ad13(0x134)]["remove"]();
      const _0x1a5ec2 = [DEFAULT_CAMERA][_0x51ad13(0x170)](_0x4f6ae9);
      (this[_0x51ad13(0x134)] = this[_0x51ad13(0xf2)]["add"](
        this["state"],
        "camera",
        _0x1a5ec2
      )),
        this[_0x51ad13(0x134)][_0x51ad13(0x101)]((_0x2b7302) =>
          this[_0x51ad13(0x182)](_0x2b7302)
        );
    }
    _0x4edaa2["length"] &&
      ((this[_0x51ad13(0xf0)]["domElement"][_0x51ad13(0x13e)][
        _0x51ad13(0x110)
      ] = ""),
      _0x4edaa2[_0x51ad13(0xb1)]((_0x2a5ad2) => {
        const _0x14cfa2 = _0x51ad13;
        if (_0x2a5ad2["morphTargetInfluences"][_0x14cfa2(0x149)]) {
          const _0x15a103 = this[_0x14cfa2(0xf0)][_0x14cfa2(0x10e)](
            { name: _0x2a5ad2[_0x14cfa2(0xca)] || _0x14cfa2(0xc2) },
            "name"
          );
          this[_0x14cfa2(0xc5)]["push"](_0x15a103);
        }
        for (
          let _0xe5b5be = 0x0;
          _0xe5b5be < _0x2a5ad2[_0x14cfa2(0xbf)][_0x14cfa2(0x149)];
          _0xe5b5be++
        ) {
          const _0x1e02a3 = this[_0x14cfa2(0xf0)]
            [_0x14cfa2(0x10e)](
              _0x2a5ad2["morphTargetInfluences"],
              _0xe5b5be,
              0x0,
              0x1,
              0.01
            )
            [_0x14cfa2(0xfd)]();
          Object[_0x14cfa2(0xfe)](_0x2a5ad2[_0x14cfa2(0xa8)])[_0x14cfa2(0xb1)](
            (_0x175f17) => {
              const _0x1d8926 = _0x14cfa2;
              if (
                _0x175f17 &&
                _0x2a5ad2[_0x1d8926(0xa8)][_0x175f17] === _0xe5b5be
              )
                _0x1e02a3[_0x1d8926(0xca)](_0x175f17);
            }
          ),
            this[_0x14cfa2(0xc5)][_0x14cfa2(0x138)](_0x1e02a3);
        }
      }));
    if (this[_0x51ad13(0x8c)][_0x51ad13(0x149)]) {
      this[_0x51ad13(0x7a)]["domElement"][_0x51ad13(0x13e)][_0x51ad13(0x110)] =
        "";
      const _0x5e7de6 = (this[_0x51ad13(0x172)]["actionStates"] = {});
      this[_0x51ad13(0x8c)][_0x51ad13(0xb1)]((_0x1f2d2e, _0x40a5cd) => {
        const _0x3e8a07 = _0x51ad13;
        _0x1f2d2e[_0x3e8a07(0xca)] =
          _0x40a5cd + 0x1 + ".\x20" + _0x1f2d2e[_0x3e8a07(0xca)];
        let _0x21495d;
        _0x40a5cd === 0x0
          ? ((_0x5e7de6[_0x1f2d2e["name"]] = !![]),
            (_0x21495d = this[_0x3e8a07(0x160)][_0x3e8a07(0xfb)](_0x1f2d2e)),
            _0x21495d[_0x3e8a07(0xb5)]())
          : (_0x5e7de6[_0x1f2d2e["name"]] = ![]);
        const _0x315aed = this["animFolder"]
          [_0x3e8a07(0x10e)](_0x5e7de6, _0x1f2d2e[_0x3e8a07(0xca)])
          [_0x3e8a07(0xfd)]();
        _0x315aed[_0x3e8a07(0x101)]((_0x4756a7) => {
          const _0x115e83 = _0x3e8a07;
          (_0x21495d =
            _0x21495d || this[_0x115e83(0x160)][_0x115e83(0xfb)](_0x1f2d2e)),
            _0x21495d[_0x115e83(0x92)](0x1),
            _0x4756a7
              ? _0x21495d[_0x115e83(0xb5)]()
              : _0x21495d[_0x115e83(0x13d)]();
        }),
          this[_0x3e8a07(0xeb)][_0x3e8a07(0x138)](_0x315aed);
      });
    }
  }
  [_0x11c99f(0x152)]() {
    const _0xd0326f = _0x11c99f;
    if (!this["content"]) return;
    this[_0xd0326f(0x11d)]["remove"](this["content"]),
      this[_0xd0326f(0x100)]["traverse"]((_0x256006) => {
        const _0x264b17 = _0xd0326f;
        if (!_0x256006[_0x264b17(0xab)]) return;
        _0x256006[_0x264b17(0xff)][_0x264b17(0xe2)]();
      }),
      traverseMaterials(this[_0xd0326f(0x100)], (_0x8b10b5) => {
        const _0x1eeeff = _0xd0326f;
        for (const _0x58ed16 in _0x8b10b5) {
          _0x58ed16 !== "envMap" &&
            _0x8b10b5[_0x58ed16] &&
            _0x8b10b5[_0x58ed16]["isTexture"] &&
            _0x8b10b5[_0x58ed16][_0x1eeeff(0xe2)]();
        }
      });
  }
}
function traverseMaterials(_0x567871, _0x5a0c1c) {
  const _0x403a63 = _0x11c99f;
  _0x567871[_0x403a63(0x143)]((_0x4aca6b) => {
    const _0x14e741 = _0x403a63;
    if (!_0x4aca6b["isMesh"]) return;
    const _0x551cd8 = Array["isArray"](_0x4aca6b["material"])
      ? _0x4aca6b[_0x14e741(0x8b)]
      : [_0x4aca6b[_0x14e741(0x8b)]];
    _0x551cd8[_0x14e741(0xb1)](_0x5a0c1c);
  });
}
function _0x429f() {
  const _0x5ec07b = [
    "updateLights",
    "unproject",
    "interactObject",
    "dispose",
    "dom",
    "removeObject",
    "axesCamera",
    "progress\x202:\x20",
    "intensity",
    "setClearColor",
    "outputEncoding",
    "gui",
    "animCtrls",
    "816450BRvKZn",
    "renderer",
    "playAllClips",
    "48px",
    "morphFolder",
    "ambientIntensity",
    "cameraFolder",
    "sRGB",
    "setTranscoderPath",
    "bgColor1",
    "mouseLeave",
    "getCenter",
    "VIEWER__camera_",
    "playbackSpeed",
    "Performance",
    "clipAction",
    "aspect",
    "listen",
    "keys",
    "geometry",
    "content",
    "onChange",
    "loaded",
    "axesCorner",
    "reset",
    "error",
    "innerWidth",
    "icon",
    "skeletonHelpers",
    "image/octet-stream",
    "footprint-court",
    "iPhone",
    "clientY",
    "iPod\x20Simulator",
    "add",
    "lookAt",
    "display",
    "#353535",
    "skeleton",
    "uncacheRoot",
    "clearDepth",
    "Display",
    "0.15",
    "activeCamera",
    "getCubeMapTexture",
    "yeeloww",
    "updateProjectionMatrix",
    "14pjNpIC",
    "maxDistance",
    "scene",
    "appendChild",
    "animate",
    "addFolder",
    "load",
    "Morph\x20Targets",
    "classList",
    "color",
    "encoding",
    "opacity",
    "interactMainObject",
    "3837354kTJJMO",
    "main_light",
    "controls",
    "total",
    "gridHelper",
    "type",
    "background",
    "in\x20ra\x20manager1111:\x20",
    "addColor",
    "map",
    "in\x20ra\x20loading2",
    "gui-wrap",
    "cameraCtrl",
    "updateGUI",
    "clientX",
    "url:::\x20",
    "push",
    "group",
    "stats",
    "texture",
    "needsUpdate",
    "stop",
    "style",
    "setPixelRatio",
    "Lighting",
    "copy",
    "set",
    "traverse",
    "screenSpacePanning",
    "resize",
    "bgColor2",
    "setMeshoptDecoder",
    "setHex",
    "length",
    "11VoxvBa",
    "pointerEvents",
    "defaultCamera",
    "bones",
    "linewidth",
    "groupEnd",
    "div",
    "Mac",
    "clear",
    "createElement",
    "#ffffff",
    "selectedObject2:",
    "remove",
    "iPad",
    "log",
    "close",
    "moveMouse",
    "setCrossOrigin",
    "4OaOQeK",
    "stopAllAction",
    "cameraPosition",
    "axesHelper",
    "mixer",
    "50px",
    "img",
    "guiWrap",
    "parent",
    "children",
    "hemi_light",
    "preset",
    "devicePixelRatio",
    "fromArray",
    "update",
    "depthWrite",
    "setURLModifier",
    "position",
    "Vector2",
    "mouse",
    "concat",
    "1054535vBsGwC",
    "state",
    "addGUI",
    "enabled",
    "objjj:\x20",
    "setDRACOLoader",
    "exposure",
    "updateTextureEncoding",
    "neutralEnvironment",
    "raycaster",
    "[default]",
    "https://unpkg.com/three@0.",
    "renderer2DObject",
    "flex",
    "setAttribute",
    "Linear",
    "removeLights",
    "setCamera",
    "2tgwFor",
    "yeeloww2",
    "pmremGenerator",
    "isLight",
    "clientHeight",
    "toneMappingExposure",
    "animFolder",
    "render",
    "playAll",
    "VIEWER",
    "7244735CoaZKw",
    "this\x20el:\x20",
    "interactiveObject",
    "ASSET_GENERATOR",
    "init",
    "includes",
    "find",
    "scenes",
    "directIntensity",
    "emissiveMap",
    "far",
    "iPod",
    "100px",
    "material",
    "clips",
    "then",
    "normalize",
    "13129362ptQqMO",
    "guiDom",
    "ambientColor",
    "setEffectiveTimeScale",
    "Animation",
    "in\x20ra\x20url:\x20",
    "domElement",
    "innerHeight",
    "axesDiv",
    "imgElement",
    "width",
    "setContent",
    "assetgenerator",
    "textureEncoding",
    "renderOrder",
    "detectSupport",
    "axesRenderer",
    "prevTime",
    "intersectObject",
    "isCamera",
    "getDistance",
    "saveState",
    "updateBackground",
    "anonymous",
    "updateDisplay",
    "morphTargetDictionary",
    "ontouchend",
    "lights",
    "isMesh",
    "17762110ukrMPY",
    "height",
    "axesScene",
    "fromScene",
    "printGraph",
    "forEach",
    "Raycaster",
    "getSize",
    "wireframe",
    "play",
    "punctualLights",
    "resolve",
    "grid",
    "onWindowResize",
    "call",
    "userAgent",
    "setSize",
    "axesDom",
    "timeScale",
    "morphTargetInfluences",
    "change",
    "point",
    "Untitled",
    "animations",
    "9252216NeUbEE",
    "morphCtrls",
    "in\x20ra\x20url\x202:\x20",
    "extractUrlBase",
    "near",
    "json",
    "name",
    "addLights",
    "absolute",
    "addEventListener",
    "multiplyScalar",
    "round",
    "rendererDom",
    "parentElement",
    "distanceTo",
    "updateEnvironment",
    "addAxesHelper",
    "object",
    "physicallyCorrectLights",
    "updateAnnotationOpacity",
    "toneMapping",
    "none",
    "getControlsZoom",
    "icon2D",
    "clientWidth",
    "options",
    "pow",
  ];
  _0x429f = function () {
    return _0x5ec07b;
  };
  return _0x429f();
}
function isIOS() {
  const _0x53ca3c = _0x11c99f;
  return (
    [
      "iPad\x20Simulator",
      "iPhone\x20Simulator",
      _0x53ca3c(0x10d),
      _0x53ca3c(0x157),
      _0x53ca3c(0x10b),
      _0x53ca3c(0x89),
    ][_0x53ca3c(0x83)](navigator["platform"]) ||
    (navigator[_0x53ca3c(0xbb)]["includes"](_0x53ca3c(0x151)) &&
      _0x53ca3c(0xa9) in document)
  );
}
