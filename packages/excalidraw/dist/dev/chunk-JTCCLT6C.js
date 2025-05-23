import {
  define_import_meta_env_default
} from "./chunk-ASQ72VHX.js";
import {
  __publicField
} from "./chunk-XDFCUUT6.js";

// data/image.ts
import tEXt from "png-chunk-text";
import encodePng from "png-chunks-encode";
import decodePng from "png-chunks-extract";

// ../common/src/binary-heap.ts
var BinaryHeap = class {
  constructor(scoreFunction) {
    this.scoreFunction = scoreFunction;
    __publicField(this, "content", []);
  }
  sinkDown(idx) {
    const node = this.content[idx];
    while (idx > 0) {
      const parentN = (idx + 1 >> 1) - 1;
      const parent = this.content[parentN];
      if (this.scoreFunction(node) < this.scoreFunction(parent)) {
        this.content[parentN] = node;
        this.content[idx] = parent;
        idx = parentN;
      } else {
        break;
      }
    }
  }
  bubbleUp(idx) {
    const length = this.content.length;
    const node = this.content[idx];
    const score = this.scoreFunction(node);
    while (true) {
      const child2N = idx + 1 << 1;
      const child1N = child2N - 1;
      let swap = null;
      let child1Score = 0;
      if (child1N < length) {
        const child1 = this.content[child1N];
        child1Score = this.scoreFunction(child1);
        if (child1Score < score) {
          swap = child1N;
        }
      }
      if (child2N < length) {
        const child2 = this.content[child2N];
        const child2Score = this.scoreFunction(child2);
        if (child2Score < (swap === null ? score : child1Score)) {
          swap = child2N;
        }
      }
      if (swap !== null) {
        this.content[idx] = this.content[swap];
        this.content[swap] = node;
        idx = swap;
      } else {
        break;
      }
    }
  }
  push(node) {
    this.content.push(node);
    this.sinkDown(this.content.length - 1);
  }
  pop() {
    if (this.content.length === 0) {
      return null;
    }
    const result = this.content[0];
    const end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleUp(0);
    }
    return result;
  }
  remove(node) {
    if (this.content.length === 0) {
      return;
    }
    const i = this.content.indexOf(node);
    const end = this.content.pop();
    if (i < this.content.length) {
      this.content[i] = end;
      if (this.scoreFunction(end) < this.scoreFunction(node)) {
        this.sinkDown(i);
      } else {
        this.bubbleUp(i);
      }
    }
  }
  size() {
    return this.content.length;
  }
  rescoreElement(node) {
    this.sinkDown(this.content.indexOf(node));
  }
};

// ../common/src/colors.ts
import oc from "open-color";
var pick = (source, keys) => {
  return keys.reduce((acc, key) => {
    if (key in source) {
      acc[key] = source[key];
    }
    return acc;
  }, {});
};
var MAX_CUSTOM_COLORS_USED_IN_CANVAS = 5;
var COLORS_PER_ROW = 5;
var DEFAULT_CHART_COLOR_INDEX = 4;
var DEFAULT_ELEMENT_STROKE_COLOR_INDEX = 4;
var DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX = 1;
var ELEMENTS_PALETTE_SHADE_INDEXES = [0, 2, 4, 6, 8];
var getSpecificColorShades = (color, indexArr) => {
  return indexArr.map((index) => oc[color][index]);
};
var COLOR_PALETTE = {
  transparent: "transparent",
  black: "#1e1e1e",
  white: "#ffffff",
  // open-colors
  gray: getSpecificColorShades("gray", ELEMENTS_PALETTE_SHADE_INDEXES),
  red: getSpecificColorShades("red", ELEMENTS_PALETTE_SHADE_INDEXES),
  pink: getSpecificColorShades("pink", ELEMENTS_PALETTE_SHADE_INDEXES),
  grape: getSpecificColorShades("grape", ELEMENTS_PALETTE_SHADE_INDEXES),
  violet: getSpecificColorShades("violet", ELEMENTS_PALETTE_SHADE_INDEXES),
  blue: getSpecificColorShades("blue", ELEMENTS_PALETTE_SHADE_INDEXES),
  cyan: getSpecificColorShades("cyan", ELEMENTS_PALETTE_SHADE_INDEXES),
  teal: getSpecificColorShades("teal", ELEMENTS_PALETTE_SHADE_INDEXES),
  green: getSpecificColorShades("green", ELEMENTS_PALETTE_SHADE_INDEXES),
  yellow: getSpecificColorShades("yellow", ELEMENTS_PALETTE_SHADE_INDEXES),
  orange: getSpecificColorShades("orange", ELEMENTS_PALETTE_SHADE_INDEXES),
  // radix bronze shades 3,5,7,9,11
  bronze: ["#f8f1ee", "#eaddd7", "#d2bab0", "#a18072", "#846358"]
};
var COMMON_ELEMENT_SHADES = pick(COLOR_PALETTE, [
  "cyan",
  "blue",
  "violet",
  "grape",
  "pink",
  "green",
  "teal",
  "yellow",
  "orange",
  "red"
]);
var DEFAULT_ELEMENT_STROKE_PICKS = [
  COLOR_PALETTE.black,
  COLOR_PALETTE.red[DEFAULT_ELEMENT_STROKE_COLOR_INDEX],
  COLOR_PALETTE.green[DEFAULT_ELEMENT_STROKE_COLOR_INDEX],
  COLOR_PALETTE.blue[DEFAULT_ELEMENT_STROKE_COLOR_INDEX],
  COLOR_PALETTE.yellow[DEFAULT_ELEMENT_STROKE_COLOR_INDEX]
];
var DEFAULT_ELEMENT_BACKGROUND_PICKS = [
  COLOR_PALETTE.transparent,
  COLOR_PALETTE.red[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX],
  COLOR_PALETTE.green[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX],
  COLOR_PALETTE.blue[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX],
  COLOR_PALETTE.yellow[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX]
];
var DEFAULT_CANVAS_BACKGROUND_PICKS = [
  COLOR_PALETTE.white,
  // radix slate2
  "#f8f9fa",
  // radix blue2
  "#f5faff",
  // radix yellow2
  "#fffce8",
  // radix bronze2
  "#fdf8f6"
];
var DEFAULT_ELEMENT_STROKE_COLOR_PALETTE = {
  // 1st row
  transparent: COLOR_PALETTE.transparent,
  white: COLOR_PALETTE.white,
  gray: COLOR_PALETTE.gray,
  black: COLOR_PALETTE.black,
  bronze: COLOR_PALETTE.bronze,
  // rest
  ...COMMON_ELEMENT_SHADES
};
var DEFAULT_ELEMENT_BACKGROUND_COLOR_PALETTE = {
  transparent: COLOR_PALETTE.transparent,
  white: COLOR_PALETTE.white,
  gray: COLOR_PALETTE.gray,
  black: COLOR_PALETTE.black,
  bronze: COLOR_PALETTE.bronze,
  ...COMMON_ELEMENT_SHADES
};
var getAllColorsSpecificShade = (index) => [
  // 2nd row
  COLOR_PALETTE.cyan[index],
  COLOR_PALETTE.blue[index],
  COLOR_PALETTE.violet[index],
  COLOR_PALETTE.grape[index],
  COLOR_PALETTE.pink[index],
  // 3rd row
  COLOR_PALETTE.green[index],
  COLOR_PALETTE.teal[index],
  COLOR_PALETTE.yellow[index],
  COLOR_PALETTE.orange[index],
  COLOR_PALETTE.red[index]
];
var rgbToHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

// ../common/src/constants.ts
var isDarwin = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var isWindows = /^Win/.test(navigator.platform);
var isAndroid = /\b(android)\b/i.test(navigator.userAgent);
var isFirefox = "netscape" in window && navigator.userAgent.indexOf("rv:") > 1 && navigator.userAgent.indexOf("Gecko") > 1;
var isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
var isSafari = !isChrome && navigator.userAgent.indexOf("Safari") !== -1;
var isIOS = /iPad|iPhone/.test(navigator.platform) || // iPadOS 13+
navigator.userAgent.includes("Mac") && "ontouchend" in document;
var isBrave = () => navigator.brave?.isBrave?.name === "isBrave";
var supportsResizeObserver = typeof window !== "undefined" && "ResizeObserver" in window;
var APP_NAME = "Excalidraw";
var TEXT_AUTOWRAP_THRESHOLD = 36;
var DRAGGING_THRESHOLD = 10;
var LINE_CONFIRM_THRESHOLD = 8;
var ELEMENT_SHIFT_TRANSLATE_AMOUNT = 5;
var ELEMENT_TRANSLATE_AMOUNT = 1;
var TEXT_TO_CENTER_SNAP_THRESHOLD = 30;
var SHIFT_LOCKING_ANGLE = Math.PI / 12;
var DEFAULT_LASER_COLOR = "red";
var CURSOR_TYPE = {
  TEXT: "text",
  CROSSHAIR: "crosshair",
  GRABBING: "grabbing",
  GRAB: "grab",
  POINTER: "pointer",
  MOVE: "move",
  AUTO: ""
};
var POINTER_BUTTON = {
  MAIN: 0,
  WHEEL: 1,
  SECONDARY: 2,
  TOUCH: -1,
  ERASER: 5
};
var POINTER_EVENTS = {
  enabled: "all",
  disabled: "none",
  // asserted as any so it can be freely assigned to React Element
  // "pointerEnvets" CSS prop
  inheritFromUI: "var(--ui-pointerEvents)"
};
var YOUTUBE_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var ENV = {
  TEST: "test",
  DEVELOPMENT: "development"
};
var CLASSES = {
  SHAPE_ACTIONS_MENU: "App-menu__left",
  ZOOM_ACTIONS: "zoom-actions",
  SEARCH_MENU_INPUT_WRAPPER: "layer-ui__search-inputWrapper"
};
var CJK_HAND_DRAWN_FALLBACK_FONT = "Xiaolai";
var WINDOWS_EMOJI_FALLBACK_FONT = "Segoe UI Emoji";
var FONT_FAMILY = {
  Virgil: 1,
  Helvetica: 2,
  Cascadia: 3,
  // leave 4 unused as it was historically used for Assistant (which we don't use anymore) or custom font (Obsidian)
  Excalifont: 5,
  Nunito: 6,
  "Lilita One": 7,
  "Comic Shanns": 8,
  "Liberation Sans": 9
};
var FONT_FAMILY_FALLBACKS = {
  [CJK_HAND_DRAWN_FALLBACK_FONT]: 100,
  [WINDOWS_EMOJI_FALLBACK_FONT]: 1e3
};
var getFontFamilyFallbacks = (fontFamily) => {
  switch (fontFamily) {
    case FONT_FAMILY.Excalifont:
      return [CJK_HAND_DRAWN_FALLBACK_FONT, WINDOWS_EMOJI_FALLBACK_FONT];
    default:
      return [WINDOWS_EMOJI_FALLBACK_FONT];
  }
};
var THEME = {
  LIGHT: "light",
  DARK: "dark"
};
var FRAME_STYLE = {
  strokeColor: "#bbb",
  strokeWidth: 2,
  strokeStyle: "solid",
  fillStyle: "solid",
  roughness: 0,
  roundness: null,
  backgroundColor: "transparent",
  radius: 8,
  nameOffsetY: 3,
  nameColorLightTheme: "#999999",
  nameColorDarkTheme: "#7a7a7a",
  nameFontSize: 14,
  nameLineHeight: 1.25
};
var MIN_FONT_SIZE = 1;
var DEFAULT_FONT_SIZE = 20;
var DEFAULT_FONT_FAMILY = FONT_FAMILY.Excalifont;
var DEFAULT_TEXT_ALIGN = "left";
var DEFAULT_VERTICAL_ALIGN = "top";
var DEFAULT_TRANSFORM_HANDLE_SPACING = 2;
var SIDE_RESIZING_THRESHOLD = 2 * DEFAULT_TRANSFORM_HANDLE_SPACING;
var EPSILON = 1e-5;
var DEFAULT_COLLISION_THRESHOLD = 2 * SIDE_RESIZING_THRESHOLD - EPSILON;
var COLOR_WHITE = "#ffffff";
var COLOR_CHARCOAL_BLACK = "#1e1e1e";
var COLOR_VOICE_CALL = "#a2f1a6";
var DEFAULT_GRID_SIZE = 20;
var DEFAULT_GRID_STEP = 5;
var IMAGE_MIME_TYPES = {
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  bmp: "image/bmp",
  ico: "image/x-icon",
  avif: "image/avif",
  jfif: "image/jfif"
};
var MIME_TYPES = {
  text: "text/plain",
  html: "text/html",
  json: "application/json",
  // excalidraw data
  excalidraw: "application/vnd.excalidraw+json",
  excalidrawlib: "application/vnd.excalidrawlib+json",
  // image-encoded excalidraw data
  "excalidraw.svg": "image/svg+xml",
  "excalidraw.png": "image/png",
  // binary
  binary: "application/octet-stream",
  // image
  ...IMAGE_MIME_TYPES
};
var ALLOWED_PASTE_MIME_TYPES = [
  MIME_TYPES.text,
  MIME_TYPES.html,
  ...Object.values(IMAGE_MIME_TYPES)
];
var EXPORT_IMAGE_TYPES = {
  png: "png",
  svg: "svg",
  clipboard: "clipboard"
};
var EXPORT_DATA_TYPES = {
  excalidraw: "excalidraw",
  excalidrawClipboard: "excalidraw/clipboard",
  excalidrawLibrary: "excalidrawlib",
  excalidrawClipboardWithAPI: "excalidraw-api/clipboard"
};
var EXPORT_SOURCE = window.EXCALIDRAW_EXPORT_SOURCE || window.location.origin;
var IMAGE_RENDER_TIMEOUT = 500;
var TAP_TWICE_TIMEOUT = 300;
var TOUCH_CTX_MENU_TIMEOUT = 500;
var SCROLL_TIMEOUT = 100;
var ZOOM_STEP = 0.1;
var MIN_ZOOM = 0.1;
var MAX_ZOOM = 30;
var HYPERLINK_TOOLTIP_DELAY = 300;
var THEME_FILTER = "invert(93%) hue-rotate(180deg)";
var URL_QUERY_KEYS = {
  addLibrary: "addLibrary"
};
var URL_HASH_KEYS = {
  addLibrary: "addLibrary"
};
var DEFAULT_UI_OPTIONS = {
  canvasActions: {
    changeViewBackgroundColor: true,
    clearCanvas: true,
    export: { saveFileToDisk: true },
    loadScene: true,
    saveToActiveFile: true,
    toggleTheme: null,
    saveAsImage: true
  },
  tools: {
    image: true
  }
};
var MQ_MAX_WIDTH_PORTRAIT = 730;
var MQ_MAX_WIDTH_LANDSCAPE = 1e3;
var MQ_MAX_HEIGHT_LANDSCAPE = 500;
var MQ_RIGHT_SIDEBAR_MIN_WIDTH = 1229;
var MAX_DECIMALS_FOR_SVG_EXPORT = 2;
var EXPORT_SCALES = [1, 2, 3];
var DEFAULT_EXPORT_PADDING = 10;
var DEFAULT_MAX_IMAGE_WIDTH_OR_HEIGHT = 1440;
var MAX_ALLOWED_FILE_BYTES = 4 * 1024 * 1024;
var SVG_NS = "http://www.w3.org/2000/svg";
var VERSIONS = {
  excalidraw: 2,
  excalidrawLibrary: 2
};
var BOUND_TEXT_PADDING = 5;
var ARROW_LABEL_WIDTH_FRACTION = 0.7;
var ARROW_LABEL_FONT_SIZE_TO_MIN_WIDTH_RATIO = 11;
var VERTICAL_ALIGN = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom"
};
var TEXT_ALIGN = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
};
var ELEMENT_READY_TO_ERASE_OPACITY = 20;
var DEFAULT_PROPORTIONAL_RADIUS = 0.25;
var DEFAULT_ADAPTIVE_RADIUS = 32;
var ROUNDNESS = {
  // Used for legacy rounding (rectangles), which currently works the same
  // as PROPORTIONAL_RADIUS, but we need to differentiate for UI purposes and
  // forwards-compat.
  LEGACY: 1,
  // Used for linear elements & diamonds
  PROPORTIONAL_RADIUS: 2,
  // Current default algorithm for rectangles, using fixed pixel radius.
  // It's working similarly to a regular border-radius, but attemps to make
  // radius visually similar across differnt element sizes, especially
  // very large and very small elements.
  //
  // NOTE right now we don't allow configuration and use a constant radius
  // (see DEFAULT_ADAPTIVE_RADIUS constant)
  ADAPTIVE_RADIUS: 3
};
var ROUGHNESS = {
  architect: 0,
  artist: 1,
  cartoonist: 2
};
var STROKE_WIDTH = {
  thin: 1,
  bold: 2,
  extraBold: 4
};
var DEFAULT_ELEMENT_PROPS = {
  strokeColor: COLOR_PALETTE.black,
  backgroundColor: COLOR_PALETTE.transparent,
  fillStyle: "solid",
  strokeWidth: 2,
  strokeStyle: "solid",
  roughness: ROUGHNESS.artist,
  opacity: 100,
  locked: false
};
var LIBRARY_SIDEBAR_TAB = "library";
var CANVAS_SEARCH_TAB = "search";
var DEFAULT_SIDEBAR = {
  name: "default",
  defaultTab: LIBRARY_SIDEBAR_TAB
};
var LIBRARY_DISABLED_TYPES = /* @__PURE__ */ new Set([
  "iframe",
  "embeddable",
  "image"
]);
var TOOL_TYPE = {
  selection: "selection",
  rectangle: "rectangle",
  diamond: "diamond",
  ellipse: "ellipse",
  arrow: "arrow",
  line: "line",
  freedraw: "freedraw",
  text: "text",
  image: "image",
  eraser: "eraser",
  hand: "hand",
  frame: "frame",
  magicframe: "magicframe",
  embeddable: "embeddable",
  laser: "laser"
};
var EDITOR_LS_KEYS = {
  OAI_API_KEY: "excalidraw-oai-api-key",
  // legacy naming (non)scheme
  MERMAID_TO_EXCALIDRAW: "mermaid-to-excalidraw",
  PUBLISH_LIBRARY: "publish-library-data"
};
var DEFAULT_FILENAME = "Untitled";
var STATS_PANELS = { generalStats: 1, elementProperties: 2 };
var MIN_WIDTH_OR_HEIGHT = 1;
var ARROW_TYPE = {
  sharp: "sharp",
  round: "round",
  elbow: "elbow"
};
var DEFAULT_REDUCED_GLOBAL_ALPHA = 0.3;
var ELEMENT_LINK_KEY = "element";
var ORIG_ID = Symbol.for("__test__originalId__");
var UserIdleState = /* @__PURE__ */ ((UserIdleState2) => {
  UserIdleState2["ACTIVE"] = "active";
  UserIdleState2["AWAY"] = "away";
  UserIdleState2["IDLE"] = "idle";
  return UserIdleState2;
})(UserIdleState || {});

// ../common/src/font-metadata.ts
var FONT_METADATA = {
  [FONT_FAMILY.Excalifont]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 886,
      descender: -374,
      lineHeight: 1.25
    }
  },
  [FONT_FAMILY.Nunito]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 1011,
      descender: -353,
      lineHeight: 1.35
    }
  },
  [FONT_FAMILY["Lilita One"]]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 923,
      descender: -220,
      lineHeight: 1.15
    }
  },
  [FONT_FAMILY["Comic Shanns"]]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 750,
      descender: -250,
      lineHeight: 1.25
    }
  },
  [FONT_FAMILY.Virgil]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 886,
      descender: -374,
      lineHeight: 1.25
    },
    deprecated: true
  },
  [FONT_FAMILY.Helvetica]: {
    metrics: {
      unitsPerEm: 2048,
      ascender: 1577,
      descender: -471,
      lineHeight: 1.15
    },
    deprecated: true,
    local: true
  },
  [FONT_FAMILY.Cascadia]: {
    metrics: {
      unitsPerEm: 2048,
      ascender: 1900,
      descender: -480,
      lineHeight: 1.2
    },
    deprecated: true
  },
  [FONT_FAMILY["Liberation Sans"]]: {
    metrics: {
      unitsPerEm: 2048,
      ascender: 1854,
      descender: -434,
      lineHeight: 1.15
    },
    serverSide: true
  },
  [FONT_FAMILY_FALLBACKS.Xiaolai]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 880,
      descender: -144,
      lineHeight: 1.15
    },
    fallback: true
  },
  [FONT_FAMILY_FALLBACKS["Segoe UI Emoji"]]: {
    metrics: {
      // reusing Excalifont metrics
      unitsPerEm: 1e3,
      ascender: 886,
      descender: -374,
      lineHeight: 1.25
    },
    local: true,
    fallback: true
  }
};
var GOOGLE_FONTS_RANGES = {
  LATIN: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  LATIN_EXT: "U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
  CYRILIC_EXT: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
  CYRILIC: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
  VIETNAMESE: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB"
};
var LOCAL_FONT_PROTOCOL = "local:";
var getVerticalOffset = (fontFamily, fontSize, lineHeightPx) => {
  const { unitsPerEm, ascender, descender } = FONT_METADATA[fontFamily]?.metrics || FONT_METADATA[FONT_FAMILY.Excalifont].metrics;
  const fontSizeEm = fontSize / unitsPerEm;
  const lineGap = (lineHeightPx - fontSizeEm * ascender + fontSizeEm * descender) / 2;
  const verticalOffset = fontSizeEm * ascender + lineGap;
  return verticalOffset;
};
var getLineHeight = (fontFamily) => {
  const { lineHeight } = FONT_METADATA[fontFamily]?.metrics || FONT_METADATA[FONT_FAMILY.Excalifont].metrics;
  return lineHeight;
};

// ../common/src/queue.ts
var Queue = class {
  constructor() {
    __publicField(this, "jobs", []);
    __publicField(this, "running", false);
  }
  tick() {
    if (this.running) {
      return;
    }
    const job = this.jobs.shift();
    if (job) {
      this.running = true;
      job.promise.resolve(
        promiseTry(job.jobFactory, ...job.args).finally(() => {
          this.running = false;
          this.tick();
        })
      );
    } else {
      this.running = false;
    }
  }
  push(jobFactory, ...args) {
    const promise = resolvablePromise();
    this.jobs.push({ jobFactory, promise, args });
    this.tick();
    return promise;
  }
};

// ../common/src/keys.ts
var CODES = {
  EQUAL: "Equal",
  MINUS: "Minus",
  NUM_ADD: "NumpadAdd",
  NUM_SUBTRACT: "NumpadSubtract",
  NUM_ZERO: "Numpad0",
  BRACKET_RIGHT: "BracketRight",
  BRACKET_LEFT: "BracketLeft",
  ONE: "Digit1",
  TWO: "Digit2",
  THREE: "Digit3",
  NINE: "Digit9",
  QUOTE: "Quote",
  ZERO: "Digit0",
  SLASH: "Slash",
  C: "KeyC",
  D: "KeyD",
  H: "KeyH",
  V: "KeyV",
  Z: "KeyZ",
  Y: "KeyY",
  R: "KeyR",
  S: "KeyS"
};
var KEYS = {
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  BACKSPACE: "Backspace",
  ALT: "Alt",
  CTRL_OR_CMD: isDarwin ? "metaKey" : "ctrlKey",
  DELETE: "Delete",
  ENTER: "Enter",
  ESCAPE: "Escape",
  QUESTION_MARK: "?",
  SPACE: " ",
  TAB: "Tab",
  CHEVRON_LEFT: "<",
  CHEVRON_RIGHT: ">",
  PERIOD: ".",
  COMMA: ",",
  SUBTRACT: "-",
  SLASH: "/",
  A: "a",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  L: "l",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  V: "v",
  X: "x",
  Y: "y",
  Z: "z",
  K: "k",
  W: "w",
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
};
var KeyCodeMap = /* @__PURE__ */ new Map([
  [KEYS.Z, CODES.Z],
  [KEYS.Y, CODES.Y]
]);
var isLatinChar = (key) => /^[a-z]$/.test(key.toLowerCase());
var matchKey = (event, key) => {
  if (key === event.key.toLowerCase()) {
    return true;
  }
  const code = KeyCodeMap.get(key);
  return Boolean(code && !isLatinChar(event.key) && event.code === code);
};
var isArrowKey = (key) => key === KEYS.ARROW_LEFT || key === KEYS.ARROW_RIGHT || key === KEYS.ARROW_DOWN || key === KEYS.ARROW_UP;
var shouldResizeFromCenter = (event) => event.altKey;
var shouldMaintainAspectRatio = (event) => event.shiftKey;
var shouldRotateWithDiscreteAngle = (event) => event.shiftKey;

// ../math/src/utils.ts
var PRECISION = 1e-4;
var clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
var round = (value, precision, func = "round") => {
  const multiplier = Math.pow(10, precision);
  return Math[func]((value + Number.EPSILON) * multiplier) / multiplier;
};
var roundToStep = (value, step, func = "round") => {
  const factor = 1 / step;
  return Math[func](value * factor) / factor;
};
var average = (a, b) => (a + b) / 2;
var isFiniteNumber = (value) => {
  return typeof value === "number" && Number.isFinite(value);
};
var isCloseTo = (a, b, precision = PRECISION) => Math.abs(a - b) < precision;

// ../math/src/angle.ts
var normalizeRadians = (angle) => {
  if (angle < 0) {
    return angle + 2 * Math.PI;
  }
  if (angle >= 2 * Math.PI) {
    return angle - 2 * Math.PI;
  }
  return angle;
};
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}
function radiansToDegrees(degrees) {
  return degrees * 180 / Math.PI;
}
function isRightAngleRads(rads) {
  return Math.abs(Math.sin(2 * rads)) < PRECISION;
}

// ../math/src/vector.ts
function vector(x, y, originX = 0, originY = 0) {
  return [x - originX, y - originY];
}
function vectorFromPoint(p, origin = [0, 0]) {
  return vector(p[0] - origin[0], p[1] - origin[1]);
}
function vectorCross(a, b) {
  return a[0] * b[1] - b[0] * a[1];
}
function vectorDot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function vectorAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}
function vectorSubtract(start, end) {
  return [start[0] - end[0], start[1] - end[1]];
}
function vectorScale(v, scalar) {
  return vector(v[0] * scalar, v[1] * scalar);
}
function vectorMagnitudeSq(v) {
  return v[0] * v[0] + v[1] * v[1];
}
function vectorMagnitude(v) {
  return Math.sqrt(vectorMagnitudeSq(v));
}
var vectorNormalize = (v) => {
  const m = vectorMagnitude(v);
  if (m === 0) {
    return vector(0, 0);
  }
  return vector(v[0] / m, v[1] / m);
};

// ../math/src/point.ts
function pointFrom(x, y) {
  return [x, y];
}
function pointFromArray(numberArray) {
  return numberArray.length === 2 ? pointFrom(numberArray[0], numberArray[1]) : void 0;
}
function pointFromPair(pair) {
  return pair;
}
function pointFromVector(v, offset = pointFrom(0, 0)) {
  return pointFrom(offset[0] + v[0], offset[1] + v[1]);
}
function isPoint(p) {
  return Array.isArray(p) && p.length === 2 && typeof p[0] === "number" && !isNaN(p[0]) && typeof p[1] === "number" && !isNaN(p[1]);
}
function pointsEqual(a, b) {
  const abs = Math.abs;
  return abs(a[0] - b[0]) < PRECISION && abs(a[1] - b[1]) < PRECISION;
}
function pointRotateRads([x, y], [cx, cy], angle) {
  return pointFrom(
    (x - cx) * Math.cos(angle) - (y - cy) * Math.sin(angle) + cx,
    (x - cx) * Math.sin(angle) + (y - cy) * Math.cos(angle) + cy
  );
}
function pointTranslate(p, v = [0, 0]) {
  return pointFrom(p[0] + v[0], p[1] + v[1]);
}
function pointCenter(a, b) {
  return pointFrom((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
}
function pointDistance(a, b) {
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}
function pointDistanceSq(a, b) {
  const xDiff = b[0] - a[0];
  const yDiff = b[1] - a[1];
  return xDiff * xDiff + yDiff * yDiff;
}
var pointScaleFromOrigin = (p, mid, multiplier) => pointTranslate(mid, vectorScale(vectorFromPoint(p, mid), multiplier));
var isPointWithinBounds = (p, q, r) => {
  return q[0] <= Math.max(p[0], r[0]) && q[0] >= Math.min(p[0], r[0]) && q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1]);
};

// ../math/src/line.ts
function line(a, b) {
  return [a, b];
}
function linesIntersectAt(a, b) {
  const A1 = a[1][1] - a[0][1];
  const B1 = a[0][0] - a[1][0];
  const A2 = b[1][1] - b[0][1];
  const B2 = b[0][0] - b[1][0];
  const D = A1 * B2 - A2 * B1;
  if (D !== 0) {
    const C1 = A1 * a[0][0] + B1 * a[0][1];
    const C2 = A2 * b[0][0] + B2 * b[0][1];
    return pointFrom((C1 * B2 - C2 * B1) / D, (A1 * C2 - A2 * C1) / D);
  }
  return null;
}

// ../math/src/segment.ts
function lineSegment(a, b) {
  return [a, b];
}
var pointOnLineSegment = (point, line2, threshold = PRECISION) => {
  const distance2 = distanceToLineSegment(point, line2);
  if (distance2 === 0) {
    return true;
  }
  return distance2 < threshold;
};
var distanceToLineSegment = (point, line2) => {
  const [x, y] = point;
  const [[x1, y1], [x2, y2]] = line2;
  const A = x - x1;
  const B = y - y1;
  const C = x2 - x1;
  const D = y2 - y1;
  const dot = A * C + B * D;
  const len_sq = C * C + D * D;
  let param = -1;
  if (len_sq !== 0) {
    param = dot / len_sq;
  }
  let xx;
  let yy;
  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }
  const dx = x - xx;
  const dy = y - yy;
  return Math.sqrt(dx * dx + dy * dy);
};
function lineSegmentIntersectionPoints(l, s) {
  const candidate = linesIntersectAt(line(l[0], l[1]), line(s[0], s[1]));
  if (!candidate || !pointOnLineSegment(candidate, s) || !pointOnLineSegment(candidate, l)) {
    return null;
  }
  return candidate;
}

// ../math/src/rectangle.ts
function rectangle(topLeft, bottomRight) {
  return [topLeft, bottomRight];
}
function rectangleIntersectLineSegment(r, l) {
  return [
    lineSegment(r[0], pointFrom(r[1][0], r[0][1])),
    lineSegment(pointFrom(r[1][0], r[0][1]), r[1]),
    lineSegment(r[1], pointFrom(r[0][0], r[1][1])),
    lineSegment(pointFrom(r[0][0], r[1][1]), r[0])
  ].map((s) => lineSegmentIntersectionPoints(l, s)).filter((i) => !!i);
}

// ../math/src/curve.ts
function curve(a, b, c, d) {
  return [a, b, c, d];
}
function gradient(f, t0, s0, delta = 1e-6) {
  return [
    (f(t0 + delta, s0) - f(t0 - delta, s0)) / (2 * delta),
    (f(t0, s0 + delta) - f(t0, s0 - delta)) / (2 * delta)
  ];
}
function solve(f, t0, s0, tolerance = 1e-3, iterLimit = 10) {
  let error = Infinity;
  let iter = 0;
  while (error >= tolerance) {
    if (iter >= iterLimit) {
      return null;
    }
    const y0 = f(t0, s0);
    const jacobian = [
      gradient((t, s) => f(t, s)[0], t0, s0),
      gradient((t, s) => f(t, s)[1], t0, s0)
    ];
    const b = [[-y0[0]], [-y0[1]]];
    const det = jacobian[0][0] * jacobian[1][1] - jacobian[0][1] * jacobian[1][0];
    if (det === 0) {
      return null;
    }
    const iJ = [
      [jacobian[1][1] / det, -jacobian[0][1] / det],
      [-jacobian[1][0] / det, jacobian[0][0] / det]
    ];
    const h = [
      [iJ[0][0] * b[0][0] + iJ[0][1] * b[1][0]],
      [iJ[1][0] * b[0][0] + iJ[1][1] * b[1][0]]
    ];
    t0 = t0 + h[0][0];
    s0 = s0 + h[1][0];
    const [tErr, sErr] = f(t0, s0);
    error = Math.max(Math.abs(tErr), Math.abs(sErr));
    iter += 1;
  }
  return [t0, s0];
}
var bezierEquation = (c, t) => pointFrom(
  (1 - t) ** 3 * c[0][0] + 3 * (1 - t) ** 2 * t * c[1][0] + 3 * (1 - t) * t ** 2 * c[2][0] + t ** 3 * c[3][0],
  (1 - t) ** 3 * c[0][1] + 3 * (1 - t) ** 2 * t * c[1][1] + 3 * (1 - t) * t ** 2 * c[2][1] + t ** 3 * c[3][1]
);
function curveIntersectLineSegment(c, l) {
  const bounds = curveBounds(c);
  if (rectangleIntersectLineSegment(
    rectangle(
      pointFrom(bounds[0], bounds[1]),
      pointFrom(bounds[2], bounds[3])
    ),
    l
  ).length === 0) {
    return [];
  }
  const line2 = (s) => pointFrom(
    l[0][0] + s * (l[1][0] - l[0][0]),
    l[0][1] + s * (l[1][1] - l[0][1])
  );
  const initial_guesses = [
    [0.5, 0],
    [0.2, 0],
    [0.8, 0]
  ];
  const calculate = ([t0, s0]) => {
    const solution2 = solve(
      (t2, s2) => {
        const bezier_point = bezierEquation(c, t2);
        const line_point = line2(s2);
        return [
          bezier_point[0] - line_point[0],
          bezier_point[1] - line_point[1]
        ];
      },
      t0,
      s0
    );
    if (!solution2) {
      return null;
    }
    const [t, s] = solution2;
    if (t < 0 || t > 1 || s < 0 || s > 1) {
      return null;
    }
    return bezierEquation(c, t);
  };
  let solution = calculate(initial_guesses[0]);
  if (solution) {
    return [solution];
  }
  solution = calculate(initial_guesses[1]);
  if (solution) {
    return [solution];
  }
  solution = calculate(initial_guesses[2]);
  if (solution) {
    return [solution];
  }
  return [];
}
function curveClosestPoint(c, p, tolerance = 1e-3) {
  const localMinimum = (min, max, f, e = tolerance) => {
    let m = min;
    let n = max;
    let k;
    while (n - m > e) {
      k = (n + m) / 2;
      if (f(k - e) < f(k + e)) {
        n = k;
      } else {
        m = k;
      }
    }
    return k;
  };
  const maxSteps = 30;
  let closestStep = 0;
  for (let min = Infinity, step = 0; step < maxSteps; step++) {
    const d = pointDistance(p, bezierEquation(c, step / maxSteps));
    if (d < min) {
      min = d;
      closestStep = step;
    }
  }
  const t0 = Math.max((closestStep - 1) / maxSteps, 0);
  const t1 = Math.min((closestStep + 1) / maxSteps, 1);
  const solution = localMinimum(
    t0,
    t1,
    (t) => pointDistance(p, bezierEquation(c, t))
  );
  if (!solution) {
    return null;
  }
  return bezierEquation(c, solution);
}
function curvePointDistance(c, p) {
  const closest = curveClosestPoint(c, p);
  if (!closest) {
    return 0;
  }
  return pointDistance(p, closest);
}
function curveBounds(c) {
  const [P0, P1, P2, P3] = c;
  const x = [P0[0], P1[0], P2[0], P3[0]];
  const y = [P0[1], P1[1], P2[1], P3[1]];
  return [Math.min(...x), Math.min(...y), Math.max(...x), Math.max(...y)];
}

// ../math/src/polygon.ts
function polygon(...points) {
  return polygonClose(points);
}
function polygonFromPoints(points) {
  return polygonClose(points);
}
var polygonIncludesPoint = (point, polygon2) => {
  const x = point[0];
  const y = point[1];
  let inside = false;
  for (let i = 0, j = polygon2.length - 1; i < polygon2.length; j = i++) {
    const xi = polygon2[i][0];
    const yi = polygon2[i][1];
    const xj = polygon2[j][0];
    const yj = polygon2[j][1];
    if ((yi > y && yj <= y || yi <= y && yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
};
var pointOnPolygon = (p, poly, threshold = PRECISION) => {
  let on = false;
  for (let i = 0, l = poly.length - 1; i < l; i++) {
    if (pointOnLineSegment(p, lineSegment(poly[i], poly[i + 1]), threshold)) {
      on = true;
      break;
    }
  }
  return on;
};
function polygonClose(polygon2) {
  return polygonIsClosed(polygon2) ? polygon2 : [...polygon2, polygon2[0]];
}
function polygonIsClosed(polygon2) {
  return pointsEqual(polygon2[0], polygon2[polygon2.length - 1]);
}

// ../math/src/range.ts
function rangeInclusive(start, end) {
  return toBrandedType([start, end]);
}
var rangesOverlap = ([a0, a1], [b0, b1]) => {
  if (a0 <= b0) {
    return a1 >= b0;
  }
  if (a0 >= b0) {
    return b1 >= a0;
  }
  return false;
};
var rangeIntersection = ([a0, a1], [b0, b1]) => {
  const rangeStart = Math.max(a0, b0);
  const rangeEnd = Math.min(a1, b1);
  if (rangeStart <= rangeEnd) {
    return toBrandedType([rangeStart, rangeEnd]);
  }
  return null;
};
var rangeIncludesValue = (value, [min, max]) => {
  return value >= min && value <= max;
};

// ../math/src/triangle.ts
function triangleIncludesPoint([a, b, c], p) {
  const triangleSign = (p1, p2, p3) => (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
  const d1 = triangleSign(p, a, b);
  const d2 = triangleSign(p, b, c);
  const d3 = triangleSign(p, c, a);
  const has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  const has_pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(has_neg && has_pos);
}

// ../common/src/points.ts
var getSizeFromPoints = (points) => {
  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  return {
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys)
  };
};
var rescalePoints = (dimension, newSize, points, normalize) => {
  const coordinates = points.map((point) => point[dimension]);
  const maxCoordinate = Math.max(...coordinates);
  const minCoordinate = Math.min(...coordinates);
  const size = maxCoordinate - minCoordinate;
  const scale = size === 0 ? 1 : newSize / size;
  let nextMinCoordinate = Infinity;
  const scaledPoints = points.map((point) => {
    const newCoordinate = point[dimension] * scale;
    const newPoint = [...point];
    newPoint[dimension] = newCoordinate;
    if (newCoordinate < nextMinCoordinate) {
      nextMinCoordinate = newCoordinate;
    }
    return newPoint;
  });
  if (!normalize) {
    return scaledPoints;
  }
  if (scaledPoints.length === 2) {
    return scaledPoints;
  }
  const translation = minCoordinate - nextMinCoordinate;
  const nextPoints = scaledPoints.map(
    (scaledPoint) => pointFromPair(
      scaledPoint.map((value, currentDimension) => {
        return currentDimension === dimension ? value + translation : value;
      })
    )
  );
  return nextPoints;
};
var getGridPoint = (x, y, gridSize) => {
  if (gridSize) {
    return [
      Math.round(x / gridSize) * gridSize,
      Math.round(y / gridSize) * gridSize
    ];
  }
  return [x, y];
};

// ../common/src/promise-pool.ts
import Pool from "es6-promise-pool";
var PromisePool = class {
  constructor(source, concurrency) {
    __publicField(this, "pool");
    __publicField(this, "entries", {});
    this.pool = new Pool(
      source,
      concurrency
    );
  }
  all() {
    const listener = (event) => {
      if (event.data.result) {
        const [index, value] = event.data.result;
        this.entries[index] = value;
      }
    };
    this.pool.addEventListener("fulfilled", listener);
    return this.pool.start().then(() => {
      setTimeout(() => {
        this.pool.removeEventListener("fulfilled", listener);
      });
      return Object.values(this.entries);
    });
  }
};

// ../common/src/random.ts
import { nanoid } from "nanoid";
import { Random } from "roughjs/bin/math";

// ../common/src/utils.ts
var mockDateTime = null;
var getDateTime = () => {
  if (mockDateTime) {
    return mockDateTime;
  }
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hr = `${date.getHours()}`.padStart(2, "0");
  const min = `${date.getMinutes()}`.padStart(2, "0");
  return `${year}-${month}-${day}-${hr}${min}`;
};
var capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
var isToolIcon = (target) => target instanceof HTMLElement && target.className.includes("ToolIcon");
var isInputLike = (target) => target instanceof HTMLElement && target.dataset.type === "wysiwyg" || target instanceof HTMLBRElement || // newline in wysiwyg
target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
var isInteractive = (target) => {
  return isInputLike(target) || target instanceof Element && !!target.closest("label, button");
};
var isWritableElement = (target) => target instanceof HTMLElement && target.dataset.type === "wysiwyg" || target instanceof HTMLBRElement || // newline in wysiwyg
target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement && (target.type === "text" || target.type === "number" || target.type === "password");
var getFontFamilyString = ({
  fontFamily
}) => {
  for (const [fontFamilyString, id] of Object.entries(FONT_FAMILY)) {
    if (id === fontFamily) {
      return `${fontFamilyString}${getFontFamilyFallbacks(id).map((x) => `, ${x}`).join("")}`;
    }
  }
  return WINDOWS_EMOJI_FALLBACK_FONT;
};
var getFontString = ({
  fontSize,
  fontFamily
}) => {
  return `${fontSize}px ${getFontFamilyString({ fontFamily })}`;
};
var debounce = (fn, timeout) => {
  let handle = 0;
  let lastArgs = null;
  const ret = (...args) => {
    lastArgs = args;
    clearTimeout(handle);
    handle = window.setTimeout(() => {
      lastArgs = null;
      fn(...args);
    }, timeout);
  };
  ret.flush = () => {
    clearTimeout(handle);
    if (lastArgs) {
      const _lastArgs = lastArgs;
      lastArgs = null;
      fn(..._lastArgs);
    }
  };
  ret.cancel = () => {
    lastArgs = null;
    clearTimeout(handle);
  };
  return ret;
};
var throttleRAF = (fn, opts) => {
  let timerId = null;
  let lastArgs = null;
  let lastArgsTrailing = null;
  const scheduleFunc = (args) => {
    timerId = window.requestAnimationFrame(() => {
      timerId = null;
      fn(...args);
      lastArgs = null;
      if (lastArgsTrailing) {
        lastArgs = lastArgsTrailing;
        lastArgsTrailing = null;
        scheduleFunc(lastArgs);
      }
    });
  };
  const ret = (...args) => {
    if (isTestEnv()) {
      fn(...args);
      return;
    }
    lastArgs = args;
    if (timerId === null) {
      scheduleFunc(lastArgs);
    } else if (opts?.trailing) {
      lastArgsTrailing = args;
    }
  };
  ret.flush = () => {
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
    if (lastArgs) {
      fn(...lastArgsTrailing || lastArgs);
      lastArgs = lastArgsTrailing = null;
    }
  };
  ret.cancel = () => {
    lastArgs = lastArgsTrailing = null;
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
  };
  return ret;
};
var easeOut = (k) => {
  return 1 - Math.pow(1 - k, 4);
};
var easeOutInterpolate = (from, to, progress) => {
  return (to - from) * easeOut(progress) + from;
};
var easeToValuesRAF = ({
  fromValues,
  toValues,
  onStep,
  duration = 250,
  interpolateValue,
  onStart,
  onEnd,
  onCancel
}) => {
  let canceled = false;
  let frameId = 0;
  let startTime;
  function step(timestamp) {
    if (canceled) {
      return;
    }
    if (startTime === void 0) {
      startTime = timestamp;
      onStart?.();
    }
    const elapsed = Math.min(timestamp - startTime, duration);
    const factor = easeOut(elapsed / duration);
    const newValues = {};
    Object.keys(fromValues).forEach((key) => {
      const _key = key;
      const result = (toValues[_key] - fromValues[_key]) * factor + fromValues[_key];
      newValues[_key] = result;
    });
    onStep(newValues);
    if (elapsed < duration) {
      const progress = elapsed / duration;
      const newValues2 = {};
      Object.keys(fromValues).forEach((key) => {
        const _key = key;
        const startValue = fromValues[_key];
        const endValue = toValues[_key];
        let result;
        result = interpolateValue ? interpolateValue(startValue, endValue, progress, _key) : easeOutInterpolate(startValue, endValue, progress);
        if (result == null) {
          result = easeOutInterpolate(startValue, endValue, progress);
        }
        newValues2[_key] = result;
      });
      onStep(newValues2);
      frameId = window.requestAnimationFrame(step);
    } else {
      onStep(toValues);
      onEnd?.();
    }
  }
  frameId = window.requestAnimationFrame(step);
  return () => {
    onCancel?.();
    canceled = true;
    window.cancelAnimationFrame(frameId);
  };
};
var chunk = (array, size) => {
  if (!array.length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = Array(Math.ceil(array.length / size));
  while (index < array.length) {
    result[resIndex++] = array.slice(index, index += size);
  }
  return result;
};
var distance = (x, y) => Math.abs(x - y);
var updateActiveTool = (appState, data) => {
  if (data.type === "custom") {
    return {
      ...appState.activeTool,
      type: "custom",
      customType: data.customType,
      locked: data.locked ?? appState.activeTool.locked
    };
  }
  return {
    ...appState.activeTool,
    lastActiveTool: data.lastActiveToolBeforeEraser === void 0 ? appState.activeTool.lastActiveTool : data.lastActiveToolBeforeEraser,
    type: data.type,
    customType: null,
    locked: data.locked ?? appState.activeTool.locked
  };
};
var getShortcutKey = (shortcut) => {
  shortcut = shortcut.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter");
  if (isDarwin) {
    return shortcut.replace(/\bCtrlOrCmd\b/gi, "Cmd").replace(/\bAlt\b/i, "Option");
  }
  return shortcut.replace(/\bCtrlOrCmd\b/gi, "Ctrl");
};
var viewportCoordsToSceneCoords = ({ clientX, clientY }, {
  zoom,
  offsetLeft,
  offsetTop,
  scrollX,
  scrollY
}) => {
  const x = (clientX - offsetLeft) / zoom.value - scrollX;
  const y = (clientY - offsetTop) / zoom.value - scrollY;
  return { x, y };
};
var sceneCoordsToViewportCoords = ({ sceneX, sceneY }, {
  zoom,
  offsetLeft,
  offsetTop,
  scrollX,
  scrollY
}) => {
  const x = (sceneX + scrollX) * zoom.value + offsetLeft;
  const y = (sceneY + scrollY) * zoom.value + offsetTop;
  return { x, y };
};
var getGlobalCSSVariable = (name) => getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
var RS_LTR_CHARS = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
var RS_RTL_CHARS = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
var RE_RTL_CHECK = new RegExp(`^[^${RS_LTR_CHARS}]*[${RS_RTL_CHARS}]`);
var isRTL = (text) => RE_RTL_CHECK.test(text);
var tupleToCoors = (xyTuple) => {
  const [x, y] = xyTuple;
  return { x, y };
};
var muteFSAbortError = (error) => {
  if (error?.name === "AbortError") {
    console.warn(error);
    return;
  }
  throw error;
};
var findIndex = (array, cb, fromIndex = 0) => {
  if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
  }
  fromIndex = Math.min(array.length, Math.max(fromIndex, 0));
  let index = fromIndex - 1;
  while (++index < array.length) {
    if (cb(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};
var findLastIndex = (array, cb, fromIndex = array.length - 1) => {
  if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
  }
  fromIndex = Math.min(array.length - 1, Math.max(fromIndex, 0));
  let index = fromIndex + 1;
  while (--index > -1) {
    if (cb(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};
var isTransparent = (color) => {
  const isRGBTransparent = color.length === 5 && color.substr(4, 1) === "0";
  const isRRGGBBTransparent = color.length === 9 && color.substr(7, 2) === "00";
  return isRGBTransparent || isRRGGBBTransparent || color === COLOR_PALETTE.transparent;
};
var isBindingFallthroughEnabled = (el) => el.fillStyle !== "solid" || isTransparent(el.backgroundColor);
var resolvablePromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
};
var getNearestScrollableContainer = (element) => {
  let parent = element.parentElement;
  while (parent) {
    if (parent === document.body) {
      return document;
    }
    const { overflowY } = window.getComputedStyle(parent);
    const hasScrollableContent = parent.scrollHeight > parent.clientHeight;
    if (hasScrollableContent && (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay")) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document;
};
var focusNearestParent = (element) => {
  let parent = element.parentElement;
  while (parent) {
    if (parent.tabIndex > -1) {
      parent.focus();
      return;
    }
    parent = parent.parentElement;
  }
};
var preventUnload = (event) => {
  event.preventDefault();
  event.returnValue = "";
};
var bytesToHexString = (bytes) => {
  return Array.from(bytes).map((byte) => `0${byte.toString(16)}`.slice(-2)).join("");
};
var getUpdatedTimestamp = () => isTestEnv() ? 1 : Date.now();
var arrayToMap = (items) => {
  if (items instanceof Map) {
    return items;
  }
  return items.reduce((acc, element) => {
    acc.set(typeof element === "string" ? element : element.id, element);
    return acc;
  }, /* @__PURE__ */ new Map());
};
var arrayToMapWithIndex = (elements) => elements.reduce((acc, element, idx) => {
  acc.set(element.id, [element, idx]);
  return acc;
}, /* @__PURE__ */ new Map());
var arrayToObject = (array, groupBy) => array.reduce((acc, value) => {
  acc[groupBy ? groupBy(value) : String(value)] = value;
  return acc;
}, {});
var arrayToList = (array) => array.reduce((acc, curr, index) => {
  const node = { ...curr, prev: null, next: null };
  if (index !== 0) {
    const prevNode = acc[index - 1];
    node.prev = prevNode;
    prevNode.next = node;
    if (index === array.length - 1) {
      const firstNode = acc[0];
      node.next = firstNode;
      firstNode.prev = node;
    }
  }
  acc.push(node);
  return acc;
}, []);
var isTestEnv = () => define_import_meta_env_default.MODE === ENV.TEST;
var isDevEnv = () => define_import_meta_env_default.MODE === ENV.DEVELOPMENT;
var isServerEnv = () => typeof process !== "undefined" && true;
var wrapEvent = (name, nativeEvent) => {
  return new CustomEvent(name, {
    detail: {
      nativeEvent
    },
    cancelable: true
  });
};
var updateObject = (obj, updates) => {
  let didChange = false;
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      if (obj[key] === value && // if object, always update because its attrs could have changed
      (typeof value !== "object" || value === null)) {
        continue;
      }
      didChange = true;
    }
  }
  if (!didChange) {
    return obj;
  }
  return {
    ...obj,
    ...updates
  };
};
var getFrame = () => {
  try {
    return window.self === window.top ? "top" : "iframe";
  } catch (error) {
    return "iframe";
  }
};
var isPromiseLike = (value) => {
  return !!value && typeof value === "object" && "then" in value && "catch" in value && "finally" in value;
};
var queryFocusableElements = (container) => {
  const focusableElements = container?.querySelectorAll(
    "button, a, input, select, textarea, div[tabindex], label[tabindex]"
  );
  return focusableElements ? Array.from(focusableElements).filter(
    (element) => element.tabIndex > -1 && !element.disabled
  ) : [];
};
var _defaultIsShallowComparatorFallback = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b) && a.length === 0 && b.length === 0) {
    return true;
  }
  return a === b;
};
var isShallowEqual = (objA, objB, comparators, debug = false) => {
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  if (aKeys.length !== bKeys.length) {
    if (debug) {
      console.warn(
        `%cisShallowEqual: objects don't have same properties ->`,
        "color: #8B4000",
        objA,
        objB
      );
    }
    return false;
  }
  if (comparators && Array.isArray(comparators)) {
    for (const key of comparators) {
      const ret = objA[key] === objB[key] || _defaultIsShallowComparatorFallback(objA[key], objB[key]);
      if (!ret) {
        if (debug) {
          console.warn(
            `%cisShallowEqual: ${key} not equal ->`,
            "color: #8B4000",
            objA[key],
            objB[key]
          );
        }
        return false;
      }
    }
    return true;
  }
  return aKeys.every((key) => {
    const comparator = comparators?.[key];
    const ret = comparator ? comparator(objA[key], objB[key]) : objA[key] === objB[key] || _defaultIsShallowComparatorFallback(objA[key], objB[key]);
    if (!ret && debug) {
      console.warn(
        `%cisShallowEqual: ${key} not equal ->`,
        "color: #8B4000",
        objA[key],
        objB[key]
      );
    }
    return ret;
  });
};
var composeEventHandlers = (originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) => {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (!checkForDefaultPrevented || !event?.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
};
var assertNever = (value, message, softAssert) => {
  if (!message) {
    return value;
  }
  if (softAssert) {
    console.error(message);
    return value;
  }
  throw new Error(message);
};
function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
var memoize = (func) => {
  let lastArgs;
  let lastResult;
  const ret = function(opts) {
    const currentArgs = Object.entries(opts);
    if (lastArgs) {
      let argsAreEqual = true;
      for (const [key, value] of currentArgs) {
        if (lastArgs.get(key) !== value) {
          argsAreEqual = false;
          break;
        }
      }
      if (argsAreEqual) {
        return lastResult;
      }
    }
    const result = func(opts);
    lastArgs = new Map(currentArgs);
    lastResult = result;
    return result;
  };
  ret.clear = () => {
    lastArgs = void 0;
    lastResult = void 0;
  };
  return ret;
};
var isMemberOf = (collection, value) => {
  return collection instanceof Set || collection instanceof Map ? collection.has(value) : "includes" in collection ? collection.includes(value) : collection.hasOwnProperty(value);
};
var cloneJSON = (obj) => JSON.parse(JSON.stringify(obj));
var updateStable = (prevValue, nextValue) => {
  if (isShallowEqual(prevValue, nextValue)) {
    return prevValue;
  }
  return nextValue;
};
function addEventListener(target, type, listener, options) {
  if (!target) {
    return () => {
    };
  }
  target?.addEventListener?.(type, listener, options);
  return () => {
    target?.removeEventListener?.(type, listener, options);
  };
}
function getSvgPathFromStroke(points, closed = true) {
  const len = points.length;
  if (len < 4) {
    return ``;
  }
  let a = points[0];
  let b = points[1];
  const c = points[2];
  let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(
    2
  )},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
    b[1],
    c[1]
  ).toFixed(2)} T`;
  for (let i = 2, max = len - 1; i < max; i++) {
    a = points[i];
    b = points[i + 1];
    result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(
      2
    )} `;
  }
  if (closed) {
    result += "Z";
  }
  return result;
}
var normalizeEOL = (str) => {
  return str.replace(/\r?\n|\r/g, "\n");
};
var toBrandedType = (value) => {
  return value;
};
var promiseTry = async (fn, ...args) => {
  return new Promise((resolve) => {
    resolve(fn(...args));
  });
};
var isAnyTrue = (...args) => Math.max(...args.map((arg) => arg ? 1 : 0)) > 0;
var escapeDoubleQuotes = (str) => {
  return str.replace(/"/g, "&quot;");
};
var castArray = (value) => Array.isArray(value) ? value : [value];

// ../common/src/random.ts
var random = new Random(Date.now());
var testIdBase = 0;
var randomInteger = () => Math.floor(random.next() * 2 ** 31);
var randomId = () => isTestEnv() ? `id${testIdBase++}` : nanoid();

// ../common/src/url.ts
import { sanitizeUrl } from "@braintree/sanitize-url";
var normalizeLink = (link) => {
  link = link.trim();
  if (!link) {
    return link;
  }
  return sanitizeUrl(escapeDoubleQuotes(link));
};
var isLocalLink = (link) => {
  return !!(link?.includes(location.origin) || link?.startsWith("/"));
};
var toValidURL = (link) => {
  link = normalizeLink(link);
  if (link.startsWith("/")) {
    return `${location.origin}${link}`;
  }
  try {
    new URL(link);
  } catch {
    return "about:blank";
  }
  return link;
};

// data/blob.ts
import { nanoid as nanoid2 } from "nanoid";

// ../element/src/bounds.ts
import rough2 from "roughjs/bin/rough";

// ../utils/src/shape.ts
import { pointsOnBezierCurves } from "points-on-curve";
var getPolygonShape = (element) => {
  const { angle, width, height, x, y } = element;
  const cx = x + width / 2;
  const cy = y + height / 2;
  const center = pointFrom(cx, cy);
  let data;
  if (element.type === "diamond") {
    data = polygon(
      pointRotateRads(pointFrom(cx, y), center, angle),
      pointRotateRads(pointFrom(x + width, cy), center, angle),
      pointRotateRads(pointFrom(cx, y + height), center, angle),
      pointRotateRads(pointFrom(x, cy), center, angle)
    );
  } else {
    data = polygon(
      pointRotateRads(pointFrom(x, y), center, angle),
      pointRotateRads(pointFrom(x + width, y), center, angle),
      pointRotateRads(pointFrom(x + width, y + height), center, angle),
      pointRotateRads(pointFrom(x, y + height), center, angle)
    );
  }
  return {
    type: "polygon",
    data
  };
};
var getSelectionBoxShape = (element, elementsMap, padding = 10) => {
  let [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
    element,
    elementsMap,
    true
  );
  x1 -= padding;
  x2 += padding;
  y1 -= padding;
  y2 += padding;
  const center = pointFrom(cx, cy);
  const topLeft = pointRotateRads(pointFrom(x1, y1), center, element.angle);
  const topRight = pointRotateRads(pointFrom(x2, y1), center, element.angle);
  const bottomLeft = pointRotateRads(pointFrom(x1, y2), center, element.angle);
  const bottomRight = pointRotateRads(pointFrom(x2, y2), center, element.angle);
  return {
    type: "polygon",
    data: [topLeft, topRight, bottomRight, bottomLeft]
  };
};
var getEllipseShape = (element) => {
  const { width, height, angle, x, y } = element;
  return {
    type: "ellipse",
    data: {
      center: pointFrom(x + width / 2, y + height / 2),
      angle,
      halfWidth: width / 2,
      halfHeight: height / 2
    }
  };
};
var getCurvePathOps = (shape) => {
  if (!shape) {
    return [];
  }
  for (const set of shape.sets) {
    if (set.type === "path") {
      return set.ops;
    }
  }
  return shape.sets[0].ops;
};
var getCurveShape = (roughShape, startingPoint = pointFrom(0, 0), angleInRadian, center) => {
  const transform = (p) => pointRotateRads(
    pointFrom(p[0] + startingPoint[0], p[1] + startingPoint[1]),
    center,
    angleInRadian
  );
  const ops = getCurvePathOps(roughShape);
  const polycurve = [];
  let p0 = pointFrom(0, 0);
  for (const op of ops) {
    if (op.op === "move") {
      const p = pointFromArray(op.data);
      invariant(p != null, "Ops data is not a point");
      p0 = transform(p);
    }
    if (op.op === "bcurveTo") {
      const p1 = transform(pointFrom(op.data[0], op.data[1]));
      const p2 = transform(pointFrom(op.data[2], op.data[3]));
      const p3 = transform(pointFrom(op.data[4], op.data[5]));
      polycurve.push(curve(p0, p1, p2, p3));
      p0 = p3;
    }
  }
  return {
    type: "polycurve",
    data: polycurve
  };
};
var polylineFromPoints = (points) => {
  let previousPoint = points[0];
  const polyline = [];
  for (let i = 1; i < points.length; i++) {
    const nextPoint = points[i];
    polyline.push(lineSegment(previousPoint, nextPoint));
    previousPoint = nextPoint;
  }
  return polyline;
};
var getFreedrawShape = (element, center, isClosed = false) => {
  const transform = (p) => pointRotateRads(
    pointFromVector(
      vectorAdd(vectorFromPoint(p), vector(element.x, element.y))
    ),
    center,
    element.angle
  );
  const polyline = polylineFromPoints(
    element.points.map((p) => transform(p))
  );
  return isClosed ? {
    type: "polygon",
    data: polygonFromPoints(polyline.flat())
  } : {
    type: "polyline",
    data: polyline
  };
};
var getClosedCurveShape = (element, roughShape, startingPoint = pointFrom(0, 0), angleInRadian, center) => {
  const transform = (p) => pointRotateRads(
    pointFrom(p[0] + startingPoint[0], p[1] + startingPoint[1]),
    center,
    angleInRadian
  );
  if (element.roundness === null) {
    return {
      type: "polygon",
      data: polygonFromPoints(
        element.points.map((p) => transform(p))
      )
    };
  }
  const ops = getCurvePathOps(roughShape);
  const points = [];
  let odd = false;
  for (const operation of ops) {
    if (operation.op === "move") {
      odd = !odd;
      if (odd) {
        points.push(pointFrom(operation.data[0], operation.data[1]));
      }
    } else if (operation.op === "bcurveTo") {
      if (odd) {
        points.push(pointFrom(operation.data[0], operation.data[1]));
        points.push(pointFrom(operation.data[2], operation.data[3]));
        points.push(pointFrom(operation.data[4], operation.data[5]));
      }
    } else if (operation.op === "lineTo") {
      if (odd) {
        points.push(pointFrom(operation.data[0], operation.data[1]));
      }
    }
  }
  const polygonPoints = pointsOnBezierCurves(points, 10, 5).map(
    (p) => transform(p)
  );
  return {
    type: "polygon",
    data: polygonFromPoints(polygonPoints)
  };
};
var distanceToEllipse = (p, ellipse2) => {
  const { angle, halfWidth, halfHeight, center } = ellipse2;
  const a = halfWidth;
  const b = halfHeight;
  const translatedPoint = vectorAdd(
    vectorFromPoint(p),
    vectorScale(vectorFromPoint(center), -1)
  );
  const [rotatedPointX, rotatedPointY] = pointRotateRads(
    pointFromVector(translatedPoint),
    pointFrom(0, 0),
    -angle
  );
  const px = Math.abs(rotatedPointX);
  const py = Math.abs(rotatedPointY);
  let tx = 0.707;
  let ty = 0.707;
  for (let i = 0; i < 3; i++) {
    const x = a * tx;
    const y = b * ty;
    const ex = (a * a - b * b) * tx ** 3 / a;
    const ey = (b * b - a * a) * ty ** 3 / b;
    const rx = x - ex;
    const ry = y - ey;
    const qx = px - ex;
    const qy = py - ey;
    const r = Math.hypot(ry, rx);
    const q = Math.hypot(qy, qx);
    tx = Math.min(1, Math.max(0, (qx * r / q + ex) / a));
    ty = Math.min(1, Math.max(0, (qy * r / q + ey) / b));
    const t = Math.hypot(ty, tx);
    tx /= t;
    ty /= t;
  }
  const [minX, minY] = [
    a * tx * Math.sign(rotatedPointX),
    b * ty * Math.sign(rotatedPointY)
  ];
  return pointDistance(
    pointFrom(rotatedPointX, rotatedPointY),
    pointFrom(minX, minY)
  );
};
var pointOnEllipse = (point, ellipse2, threshold = PRECISION) => {
  return distanceToEllipse(point, ellipse2) <= threshold;
};
var pointInEllipse = (p, ellipse2) => {
  const { center, angle, halfWidth, halfHeight } = ellipse2;
  const translatedPoint = vectorAdd(
    vectorFromPoint(p),
    vectorScale(vectorFromPoint(center), -1)
  );
  const [rotatedPointX, rotatedPointY] = pointRotateRads(
    pointFromVector(translatedPoint),
    pointFrom(0, 0),
    -angle
  );
  return rotatedPointX / halfWidth * (rotatedPointX / halfWidth) + rotatedPointY / halfHeight * (rotatedPointY / halfHeight) <= 1;
};

// ../element/src/ShapeCache.ts
import { RoughGenerator } from "roughjs/bin/generator";

// ../element/src/Shape.ts
import { simplify } from "points-on-curve";

// ../element/src/typeChecks.ts
var isInitializedImageElement = (element) => {
  return !!element && element.type === "image" && !!element.fileId;
};
var isImageElement = (element) => {
  return !!element && element.type === "image";
};
var isEmbeddableElement = (element) => {
  return !!element && element.type === "embeddable";
};
var isIframeElement = (element) => {
  return !!element && element.type === "iframe";
};
var isIframeLikeElement = (element) => {
  return !!element && (element.type === "iframe" || element.type === "embeddable");
};
var isTextElement = (element) => {
  return element != null && element.type === "text";
};
var isFrameElement = (element) => {
  return element != null && element.type === "frame";
};
var isMagicFrameElement = (element) => {
  return element != null && element.type === "magicframe";
};
var isFrameLikeElement = (element) => {
  return element != null && (element.type === "frame" || element.type === "magicframe");
};
var isFreeDrawElement = (element) => {
  return element != null && isFreeDrawElementType(element.type);
};
var isFreeDrawElementType = (elementType) => {
  return elementType === "freedraw";
};
var isLinearElement = (element) => {
  return element != null && isLinearElementType(element.type);
};
var isArrowElement = (element) => {
  return element != null && element.type === "arrow";
};
var isElbowArrow = (element) => {
  return isArrowElement(element) && element.elbowed;
};
var isLinearElementType = (elementType) => {
  return elementType === "arrow" || elementType === "line";
};
var isBindingElement = (element, includeLocked = true) => {
  return element != null && (!element.locked || includeLocked === true) && isBindingElementType(element.type);
};
var isBindingElementType = (elementType) => {
  return elementType === "arrow";
};
var isBindableElement = (element, includeLocked = true) => {
  return element != null && (!element.locked || includeLocked === true) && (element.type === "rectangle" || element.type === "diamond" || element.type === "ellipse" || element.type === "image" || element.type === "iframe" || element.type === "embeddable" || element.type === "frame" || element.type === "magicframe" || element.type === "text" && !element.containerId);
};
var isRectanguloidElement = (element) => {
  return element != null && (element.type === "rectangle" || element.type === "diamond" || element.type === "image" || element.type === "iframe" || element.type === "embeddable" || element.type === "frame" || element.type === "magicframe" || element.type === "text" && !element.containerId);
};
var isTextBindableContainer = (element, includeLocked = true) => {
  return element != null && (!element.locked || includeLocked === true) && (element.type === "rectangle" || element.type === "diamond" || element.type === "ellipse" || isArrowElement(element));
};
var isExcalidrawElement = (element) => {
  const type = element?.type;
  if (!type) {
    return false;
  }
  switch (type) {
    case "text":
    case "diamond":
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "ellipse":
    case "arrow":
    case "freedraw":
    case "line":
    case "frame":
    case "magicframe":
    case "image":
    case "selection": {
      return true;
    }
    default: {
      assertNever(type, null);
      return false;
    }
  }
};
var isFlowchartNodeElement = (element) => {
  return element.type === "rectangle" || element.type === "ellipse" || element.type === "diamond";
};
var hasBoundTextElement = (element) => {
  return isTextBindableContainer(element) && !!element.boundElements?.some(({ type }) => type === "text");
};
var isBoundToContainer = (element) => {
  return element !== null && "containerId" in element && element.containerId !== null && isTextElement(element);
};
var isUsingAdaptiveRadius = (type) => type === "rectangle" || type === "embeddable" || type === "iframe" || type === "image";
var isUsingProportionalRadius = (type) => type === "line" || type === "arrow" || type === "diamond";
var canApplyRoundnessTypeToElement = (roundnessType, element) => {
  if ((roundnessType === ROUNDNESS.ADAPTIVE_RADIUS || // if legacy roundness, it can be applied to elements that currently
  // use adaptive radius
  roundnessType === ROUNDNESS.LEGACY) && isUsingAdaptiveRadius(element.type)) {
    return true;
  }
  if (roundnessType === ROUNDNESS.PROPORTIONAL_RADIUS && isUsingProportionalRadius(element.type)) {
    return true;
  }
  return false;
};
var getDefaultRoundnessTypeForElement = (element) => {
  if (isUsingProportionalRadius(element.type)) {
    return {
      type: ROUNDNESS.PROPORTIONAL_RADIUS
    };
  }
  if (isUsingAdaptiveRadius(element.type)) {
    return {
      type: ROUNDNESS.ADAPTIVE_RADIUS
    };
  }
  return null;
};
var isFixedPointBinding = (binding) => {
  return Object.hasOwn(binding, "fixedPoint") && binding.fixedPoint != null;
};

// ../math/src/ellipse.ts
function ellipse(center, halfWidth, halfHeight) {
  return {
    center,
    halfWidth,
    halfHeight
  };
}
var ellipseDistanceFromPoint = (p, ellipse2) => {
  const { halfWidth, halfHeight, center } = ellipse2;
  const a = halfWidth;
  const b = halfHeight;
  const translatedPoint = vectorAdd(
    vectorFromPoint(p),
    vectorScale(vectorFromPoint(center), -1)
  );
  const px = Math.abs(translatedPoint[0]);
  const py = Math.abs(translatedPoint[1]);
  let tx = 0.707;
  let ty = 0.707;
  for (let i = 0; i < 3; i++) {
    const x = a * tx;
    const y = b * ty;
    const ex = (a * a - b * b) * tx ** 3 / a;
    const ey = (b * b - a * a) * ty ** 3 / b;
    const rx = x - ex;
    const ry = y - ey;
    const qx = px - ex;
    const qy = py - ey;
    const r = Math.hypot(ry, rx);
    const q = Math.hypot(qy, qx);
    tx = Math.min(1, Math.max(0, (qx * r / q + ex) / a));
    ty = Math.min(1, Math.max(0, (qy * r / q + ey) / b));
    const t = Math.hypot(ty, tx);
    tx /= t;
    ty /= t;
  }
  const [minX, minY] = [
    a * tx * Math.sign(translatedPoint[0]),
    b * ty * Math.sign(translatedPoint[1])
  ];
  return pointDistance(pointFromVector(translatedPoint), pointFrom(minX, minY));
};
function ellipseLineIntersectionPoints({ center, halfWidth, halfHeight }, [g, h]) {
  const [cx, cy] = center;
  const x1 = g[0] - cx;
  const y1 = g[1] - cy;
  const x2 = h[0] - cx;
  const y2 = h[1] - cy;
  const a = Math.pow(x2 - x1, 2) / Math.pow(halfWidth, 2) + Math.pow(y2 - y1, 2) / Math.pow(halfHeight, 2);
  const b = 2 * (x1 * (x2 - x1) / Math.pow(halfWidth, 2) + y1 * (y2 - y1) / Math.pow(halfHeight, 2));
  const c = Math.pow(x1, 2) / Math.pow(halfWidth, 2) + Math.pow(y1, 2) / Math.pow(halfHeight, 2) - 1;
  const t1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const t2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const candidates = [
    pointFrom(x1 + t1 * (x2 - x1) + cx, y1 + t1 * (y2 - y1) + cy),
    pointFrom(x1 + t2 * (x2 - x1) + cx, y1 + t2 * (y2 - y1) + cy)
  ].filter((p) => !isNaN(p[0]) && !isNaN(p[1]));
  if (candidates.length === 2 && pointsEqual(candidates[0], candidates[1])) {
    return [candidates[0]];
  }
  return candidates;
}

// ../utils/src/collision.ts
var isPointOnShape = (point, shape, tolerance = 0) => {
  switch (shape.type) {
    case "polygon":
      return pointOnPolygon(point, shape.data, tolerance);
    case "ellipse":
      return pointOnEllipse(point, shape.data, tolerance);
    case "line":
      return pointOnLineSegment(point, shape.data, tolerance);
    case "polyline":
      return pointOnPolyline(point, shape.data, tolerance);
    case "curve":
      return pointOnCurve(point, shape.data, tolerance);
    case "polycurve":
      return pointOnPolycurve(point, shape.data, tolerance);
    default:
      throw Error(`shape ${shape} is not implemented`);
  }
};
var isPointInShape = (point, shape) => {
  switch (shape.type) {
    case "polygon":
      return polygonIncludesPoint(point, shape.data);
    case "line":
      return false;
    case "curve":
      return false;
    case "ellipse":
      return pointInEllipse(point, shape.data);
    case "polyline": {
      const polygon2 = polygonFromPoints(shape.data.flat());
      return polygonIncludesPoint(point, polygon2);
    }
    case "polycurve": {
      return false;
    }
    default:
      throw Error(`shape ${shape} is not implemented`);
  }
};
var pointOnPolycurve = (point, polycurve, tolerance) => {
  return polycurve.some((curve2) => pointOnCurve(point, curve2, tolerance));
};
var cubicBezierEquation = (curve2) => {
  const [p0, p1, p2, p3] = curve2;
  return (t, idx) => Math.pow(1 - t, 3) * p3[idx] + 3 * t * Math.pow(1 - t, 2) * p2[idx] + 3 * Math.pow(t, 2) * (1 - t) * p1[idx] + p0[idx] * Math.pow(t, 3);
};
var polyLineFromCurve = (curve2, segments = 10) => {
  const equation = cubicBezierEquation(curve2);
  let startingPoint = [equation(0, 0), equation(0, 1)];
  const lineSegments = [];
  let t = 0;
  const increment = 1 / segments;
  for (let i = 0; i < segments; i++) {
    t += increment;
    if (t <= 1) {
      const nextPoint = pointFrom(equation(t, 0), equation(t, 1));
      lineSegments.push(lineSegment(startingPoint, nextPoint));
      startingPoint = nextPoint;
    }
  }
  return lineSegments;
};
var pointOnCurve = (point, curve2, threshold) => {
  return pointOnPolyline(point, polyLineFromCurve(curve2), threshold);
};
var pointOnPolyline = (point, polyline, threshold = 1e-4) => {
  return polyline.some((line2) => pointOnLineSegment(point, line2, threshold));
};

// ../element/src/utils.ts
function deconstructRectanguloidElement(element, offset = 0) {
  const roundness = getCornerRadius(
    Math.min(element.width, element.height),
    element
  );
  if (roundness <= 0) {
    const r2 = rectangle(
      pointFrom(element.x - offset, element.y - offset),
      pointFrom(
        element.x + element.width + offset,
        element.y + element.height + offset
      )
    );
    const top2 = lineSegment(
      pointFrom(r2[0][0] + roundness, r2[0][1]),
      pointFrom(r2[1][0] - roundness, r2[0][1])
    );
    const right2 = lineSegment(
      pointFrom(r2[1][0], r2[0][1] + roundness),
      pointFrom(r2[1][0], r2[1][1] - roundness)
    );
    const bottom2 = lineSegment(
      pointFrom(r2[0][0] + roundness, r2[1][1]),
      pointFrom(r2[1][0] - roundness, r2[1][1])
    );
    const left2 = lineSegment(
      pointFrom(r2[0][0], r2[1][1] - roundness),
      pointFrom(r2[0][0], r2[0][1] + roundness)
    );
    const sides2 = [top2, right2, bottom2, left2];
    return [sides2, []];
  }
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const r = rectangle(
    pointFrom(element.x, element.y),
    pointFrom(element.x + element.width, element.y + element.height)
  );
  const top = lineSegment(
    pointFrom(r[0][0] + roundness, r[0][1]),
    pointFrom(r[1][0] - roundness, r[0][1])
  );
  const right = lineSegment(
    pointFrom(r[1][0], r[0][1] + roundness),
    pointFrom(r[1][0], r[1][1] - roundness)
  );
  const bottom = lineSegment(
    pointFrom(r[0][0] + roundness, r[1][1]),
    pointFrom(r[1][0] - roundness, r[1][1])
  );
  const left = lineSegment(
    pointFrom(r[0][0], r[1][1] - roundness),
    pointFrom(r[0][0], r[0][1] + roundness)
  );
  const offsets = [
    vectorScale(
      vectorNormalize(
        vectorFromPoint(pointFrom(r[0][0] - offset, r[0][1] - offset), center)
      ),
      offset
    ),
    // TOP LEFT
    vectorScale(
      vectorNormalize(
        vectorFromPoint(pointFrom(r[1][0] + offset, r[0][1] - offset), center)
      ),
      offset
    ),
    //TOP RIGHT
    vectorScale(
      vectorNormalize(
        vectorFromPoint(pointFrom(r[1][0] + offset, r[1][1] + offset), center)
      ),
      offset
    ),
    // BOTTOM RIGHT
    vectorScale(
      vectorNormalize(
        vectorFromPoint(pointFrom(r[0][0] - offset, r[1][1] + offset), center)
      ),
      offset
    )
    // BOTTOM LEFT
  ];
  const corners = [
    curve(
      pointFromVector(offsets[0], left[1]),
      pointFromVector(
        offsets[0],
        pointFrom(
          left[1][0] + 2 / 3 * (r[0][0] - left[1][0]),
          left[1][1] + 2 / 3 * (r[0][1] - left[1][1])
        )
      ),
      pointFromVector(
        offsets[0],
        pointFrom(
          top[0][0] + 2 / 3 * (r[0][0] - top[0][0]),
          top[0][1] + 2 / 3 * (r[0][1] - top[0][1])
        )
      ),
      pointFromVector(offsets[0], top[0])
    ),
    // TOP LEFT
    curve(
      pointFromVector(offsets[1], top[1]),
      pointFromVector(
        offsets[1],
        pointFrom(
          top[1][0] + 2 / 3 * (r[1][0] - top[1][0]),
          top[1][1] + 2 / 3 * (r[0][1] - top[1][1])
        )
      ),
      pointFromVector(
        offsets[1],
        pointFrom(
          right[0][0] + 2 / 3 * (r[1][0] - right[0][0]),
          right[0][1] + 2 / 3 * (r[0][1] - right[0][1])
        )
      ),
      pointFromVector(offsets[1], right[0])
    ),
    // TOP RIGHT
    curve(
      pointFromVector(offsets[2], right[1]),
      pointFromVector(
        offsets[2],
        pointFrom(
          right[1][0] + 2 / 3 * (r[1][0] - right[1][0]),
          right[1][1] + 2 / 3 * (r[1][1] - right[1][1])
        )
      ),
      pointFromVector(
        offsets[2],
        pointFrom(
          bottom[1][0] + 2 / 3 * (r[1][0] - bottom[1][0]),
          bottom[1][1] + 2 / 3 * (r[1][1] - bottom[1][1])
        )
      ),
      pointFromVector(offsets[2], bottom[1])
    ),
    // BOTTOM RIGHT
    curve(
      pointFromVector(offsets[3], bottom[0]),
      pointFromVector(
        offsets[3],
        pointFrom(
          bottom[0][0] + 2 / 3 * (r[0][0] - bottom[0][0]),
          bottom[0][1] + 2 / 3 * (r[1][1] - bottom[0][1])
        )
      ),
      pointFromVector(
        offsets[3],
        pointFrom(
          left[0][0] + 2 / 3 * (r[0][0] - left[0][0]),
          left[0][1] + 2 / 3 * (r[1][1] - left[0][1])
        )
      ),
      pointFromVector(offsets[3], left[0])
    )
    // BOTTOM LEFT
  ];
  const sides = [
    lineSegment(corners[0][3], corners[1][0]),
    lineSegment(corners[1][3], corners[2][0]),
    lineSegment(corners[2][3], corners[3][0]),
    lineSegment(corners[3][3], corners[0][0])
  ];
  return [sides, corners];
}
function deconstructDiamondElement(element, offset = 0) {
  const [topX, topY, rightX, rightY, bottomX, bottomY, leftX, leftY] = getDiamondPoints(element);
  const verticalRadius = getCornerRadius(Math.abs(topX - leftX), element);
  const horizontalRadius = getCornerRadius(Math.abs(rightY - topY), element);
  if (element.roundness?.type == null) {
    const [top2, right2, bottom2, left2] = [
      pointFrom(element.x + topX, element.y + topY - offset),
      pointFrom(element.x + rightX + offset, element.y + rightY),
      pointFrom(element.x + bottomX, element.y + bottomY + offset),
      pointFrom(element.x + leftX - offset, element.y + leftY)
    ];
    const topRight = lineSegment(
      pointFrom(top2[0] + verticalRadius, top2[1] + horizontalRadius),
      pointFrom(right2[0] - verticalRadius, right2[1] - horizontalRadius)
    );
    const bottomRight = lineSegment(
      pointFrom(right2[0] - verticalRadius, right2[1] + horizontalRadius),
      pointFrom(bottom2[0] + verticalRadius, bottom2[1] - horizontalRadius)
    );
    const bottomLeft = lineSegment(
      pointFrom(bottom2[0] - verticalRadius, bottom2[1] - horizontalRadius),
      pointFrom(left2[0] + verticalRadius, left2[1] + horizontalRadius)
    );
    const topLeft = lineSegment(
      pointFrom(left2[0] + verticalRadius, left2[1] - horizontalRadius),
      pointFrom(top2[0] - verticalRadius, top2[1] + horizontalRadius)
    );
    return [[topRight, bottomRight, bottomLeft, topLeft], []];
  }
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const [top, right, bottom, left] = [
    pointFrom(element.x + topX, element.y + topY),
    pointFrom(element.x + rightX, element.y + rightY),
    pointFrom(element.x + bottomX, element.y + bottomY),
    pointFrom(element.x + leftX, element.y + leftY)
  ];
  const offsets = [
    vectorScale(vectorNormalize(vectorFromPoint(right, center)), offset),
    // RIGHT
    vectorScale(vectorNormalize(vectorFromPoint(bottom, center)), offset),
    // BOTTOM
    vectorScale(vectorNormalize(vectorFromPoint(left, center)), offset),
    // LEFT
    vectorScale(vectorNormalize(vectorFromPoint(top, center)), offset)
    // TOP
  ];
  const corners = [
    curve(
      pointFromVector(
        offsets[0],
        pointFrom(
          right[0] - verticalRadius,
          right[1] - horizontalRadius
        )
      ),
      pointFromVector(offsets[0], right),
      pointFromVector(offsets[0], right),
      pointFromVector(
        offsets[0],
        pointFrom(
          right[0] - verticalRadius,
          right[1] + horizontalRadius
        )
      )
    ),
    // RIGHT
    curve(
      pointFromVector(
        offsets[1],
        pointFrom(
          bottom[0] + verticalRadius,
          bottom[1] - horizontalRadius
        )
      ),
      pointFromVector(offsets[1], bottom),
      pointFromVector(offsets[1], bottom),
      pointFromVector(
        offsets[1],
        pointFrom(
          bottom[0] - verticalRadius,
          bottom[1] - horizontalRadius
        )
      )
    ),
    // BOTTOM
    curve(
      pointFromVector(
        offsets[2],
        pointFrom(
          left[0] + verticalRadius,
          left[1] + horizontalRadius
        )
      ),
      pointFromVector(offsets[2], left),
      pointFromVector(offsets[2], left),
      pointFromVector(
        offsets[2],
        pointFrom(
          left[0] + verticalRadius,
          left[1] - horizontalRadius
        )
      )
    ),
    // LEFT
    curve(
      pointFromVector(
        offsets[3],
        pointFrom(
          top[0] - verticalRadius,
          top[1] + horizontalRadius
        )
      ),
      pointFromVector(offsets[3], top),
      pointFromVector(offsets[3], top),
      pointFromVector(
        offsets[3],
        pointFrom(
          top[0] + verticalRadius,
          top[1] + horizontalRadius
        )
      )
    )
    // TOP
  ];
  const sides = [
    lineSegment(corners[0][3], corners[1][0]),
    lineSegment(corners[1][3], corners[2][0]),
    lineSegment(corners[2][3], corners[3][0]),
    lineSegment(corners[3][3], corners[0][0])
  ];
  return [sides, corners];
}

// ../element/src/collision.ts
var shouldTestInside = (element) => {
  if (element.type === "arrow") {
    return false;
  }
  const isDraggableFromInside = !isTransparent(element.backgroundColor) || hasBoundTextElement(element) || isIframeLikeElement(element) || isTextElement(element);
  if (element.type === "line") {
    return isDraggableFromInside && isPathALoop(element.points);
  }
  if (element.type === "freedraw") {
    return isDraggableFromInside && isPathALoop(element.points);
  }
  return isDraggableFromInside || isImageElement(element);
};
var hitElementItself = ({
  x,
  y,
  element,
  shape,
  threshold = 10,
  frameNameBound = null
}) => {
  let hit = shouldTestInside(element) ? (
    // Since `inShape` tests STRICTLY againt the insides of a shape
    // we would need `onShape` as well to include the "borders"
    isPointInShape(pointFrom(x, y), shape) || isPointOnShape(pointFrom(x, y), shape, threshold)
  ) : isPointOnShape(pointFrom(x, y), shape, threshold);
  if (!hit && frameNameBound) {
    hit = isPointInShape(pointFrom(x, y), {
      type: "polygon",
      data: getPolygonShape(frameNameBound).data
    });
  }
  return hit;
};
var hitElementBoundingBox = (x, y, element, elementsMap, tolerance = 0) => {
  let [x1, y1, x2, y2] = getElementBounds(element, elementsMap);
  x1 -= tolerance;
  y1 -= tolerance;
  x2 += tolerance;
  y2 += tolerance;
  return isPointWithinBounds(
    pointFrom(x1, y1),
    pointFrom(x, y),
    pointFrom(x2, y2)
  );
};
var hitElementBoundingBoxOnly = (hitArgs, elementsMap) => {
  return !hitElementItself(hitArgs) && // bound text is considered part of the element (even if it's outside the bounding box)
  !hitElementBoundText(
    hitArgs.x,
    hitArgs.y,
    getBoundTextShape(hitArgs.element, elementsMap)
  ) && hitElementBoundingBox(hitArgs.x, hitArgs.y, hitArgs.element, elementsMap);
};
var hitElementBoundText = (x, y, textShape) => {
  return !!textShape && isPointInShape(pointFrom(x, y), textShape);
};
var intersectElementWithLineSegment = (element, line2, offset = 0) => {
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      return intersectRectanguloidWithLineSegment(element, line2, offset);
    case "diamond":
      return intersectDiamondWithLineSegment(element, line2, offset);
    case "ellipse":
      return intersectEllipseWithLineSegment(element, line2, offset);
    default:
      throw new Error(`Unimplemented element type '${element.type}'`);
  }
};
var intersectRectanguloidWithLineSegment = (element, l, offset = 0) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const rotatedA = pointRotateRads(
    l[0],
    center,
    -element.angle
  );
  const rotatedB = pointRotateRads(
    l[1],
    center,
    -element.angle
  );
  const [sides, corners] = deconstructRectanguloidElement(element, offset);
  return (
    // Test intersection against the sides, keep only the valid
    // intersection points and rotate them back to scene space
    sides.map(
      (s) => lineSegmentIntersectionPoints(
        lineSegment(rotatedA, rotatedB),
        s
      )
    ).filter((x) => x != null).map((j) => pointRotateRads(j, center, element.angle)).concat(
      corners.flatMap(
        (t) => curveIntersectLineSegment(t, lineSegment(rotatedA, rotatedB))
      ).filter((i) => i != null).map((j) => pointRotateRads(j, center, element.angle))
    ).filter(
      (p, idx, points) => points.findIndex((d) => pointsEqual(p, d)) === idx
    )
  );
};
var intersectDiamondWithLineSegment = (element, l, offset = 0) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const rotatedA = pointRotateRads(l[0], center, -element.angle);
  const rotatedB = pointRotateRads(l[1], center, -element.angle);
  const [sides, curves] = deconstructDiamondElement(element, offset);
  return sides.map(
    (s) => lineSegmentIntersectionPoints(
      lineSegment(rotatedA, rotatedB),
      s
    )
  ).filter((p) => p != null).map((p) => pointRotateRads(p, center, element.angle)).concat(
    curves.flatMap(
      (p) => curveIntersectLineSegment(p, lineSegment(rotatedA, rotatedB))
    ).filter((p) => p != null).map((p) => pointRotateRads(p, center, element.angle))
  ).filter(
    (p, idx, points) => points.findIndex((d) => pointsEqual(p, d)) === idx
  );
};
var intersectEllipseWithLineSegment = (element, l, offset = 0) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const rotatedA = pointRotateRads(l[0], center, -element.angle);
  const rotatedB = pointRotateRads(l[1], center, -element.angle);
  return ellipseLineIntersectionPoints(
    ellipse(center, element.width / 2 + offset, element.height / 2 + offset),
    line(rotatedA, rotatedB)
  ).map((p) => pointRotateRads(p, center, element.angle));
};

// scene/Scene.ts
import throttle from "lodash.throttle";

// ../element/src/containerCache.ts
var originalContainerCache = {};
var updateOriginalContainerCache = (id, height) => {
  const data = originalContainerCache[id] || (originalContainerCache[id] = { height });
  data.height = height;
  return data;
};
var resetOriginalContainerCache = (id) => {
  if (originalContainerCache[id]) {
    delete originalContainerCache[id];
  }
};
var getOriginalContainerHeightFromCache = (id) => {
  return originalContainerCache[id]?.height ?? null;
};

// ../element/src/distance.ts
var distanceToBindableElement = (element, p) => {
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      return distanceToRectanguloidElement(element, p);
    case "diamond":
      return distanceToDiamondElement(element, p);
    case "ellipse":
      return distanceToEllipseElement(element, p);
  }
};
var distanceToRectanguloidElement = (element, p) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const rotatedPoint = pointRotateRads(p, center, -element.angle);
  const [sides, corners] = deconstructRectanguloidElement(element);
  return Math.min(
    ...sides.map((s) => distanceToLineSegment(rotatedPoint, s)),
    ...corners.map((a) => curvePointDistance(a, rotatedPoint)).filter((d) => d !== null)
  );
};
var distanceToDiamondElement = (element, p) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const rotatedPoint = pointRotateRads(p, center, -element.angle);
  const [sides, curves] = deconstructDiamondElement(element);
  return Math.min(
    ...sides.map((s) => distanceToLineSegment(rotatedPoint, s)),
    ...curves.map((a) => curvePointDistance(a, rotatedPoint)).filter((d) => d !== null)
  );
};
var distanceToEllipseElement = (element, p) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  return ellipseDistanceFromPoint(
    // Instead of rotating the ellipse, rotate the point to the inverse angle
    pointRotateRads(p, center, -element.angle),
    ellipse(center, element.width / 2, element.height / 2)
  );
};

// ../element/src/heading.ts
var HEADING_RIGHT = [1, 0];
var HEADING_DOWN = [0, 1];
var HEADING_LEFT = [-1, 0];
var HEADING_UP = [0, -1];
var headingForDiamond = (a, b) => {
  const angle = radiansToDegrees(
    normalizeRadians(Math.atan2(b[1] - a[1], b[0] - a[0]))
  );
  if (angle >= 315 || angle < 45) {
    return HEADING_UP;
  } else if (angle >= 45 && angle < 135) {
    return HEADING_RIGHT;
  } else if (angle >= 135 && angle < 225) {
    return HEADING_DOWN;
  }
  return HEADING_LEFT;
};
var vectorToHeading = (vec) => {
  const [x, y] = vec;
  const absX = Math.abs(x);
  const absY = Math.abs(y);
  if (x > absY) {
    return HEADING_RIGHT;
  } else if (x <= -absY) {
    return HEADING_LEFT;
  } else if (y > absX) {
    return HEADING_DOWN;
  }
  return HEADING_UP;
};
var headingForPoint = (p, o) => vectorToHeading(vectorFromPoint(p, o));
var headingForPointIsHorizontal = (p, o) => headingIsHorizontal(headingForPoint(p, o));
var compareHeading = (a, b) => a[0] === b[0] && a[1] === b[1];
var headingIsHorizontal = (a) => compareHeading(a, HEADING_RIGHT) || compareHeading(a, HEADING_LEFT);
var headingForPointFromElement = (element, aabb, p) => {
  const SEARCH_CONE_MULTIPLIER = 2;
  const midPoint = getCenterForBounds(aabb);
  if (element.type === "diamond") {
    if (p[0] < element.x) {
      return HEADING_LEFT;
    } else if (p[1] < element.y) {
      return HEADING_UP;
    } else if (p[0] > element.x + element.width) {
      return HEADING_RIGHT;
    } else if (p[1] > element.y + element.height) {
      return HEADING_DOWN;
    }
    const top = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x + element.width / 2, element.y),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    const right = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x + element.width, element.y + element.height / 2),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    const bottom = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x + element.width / 2, element.y + element.height),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    const left = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x, element.y + element.height / 2),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    if (triangleIncludesPoint([top, right, midPoint], p)) {
      return headingForDiamond(top, right);
    } else if (triangleIncludesPoint(
      [right, bottom, midPoint],
      p
    )) {
      return headingForDiamond(right, bottom);
    } else if (triangleIncludesPoint(
      [bottom, left, midPoint],
      p
    )) {
      return headingForDiamond(bottom, left);
    }
    return headingForDiamond(left, top);
  }
  const topLeft = pointScaleFromOrigin(
    pointFrom(aabb[0], aabb[1]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  const topRight = pointScaleFromOrigin(
    pointFrom(aabb[2], aabb[1]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  const bottomLeft = pointScaleFromOrigin(
    pointFrom(aabb[0], aabb[3]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  const bottomRight = pointScaleFromOrigin(
    pointFrom(aabb[2], aabb[3]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  return triangleIncludesPoint(
    [topLeft, topRight, midPoint],
    p
  ) ? HEADING_UP : triangleIncludesPoint(
    [topRight, bottomRight, midPoint],
    p
  ) ? HEADING_RIGHT : triangleIncludesPoint(
    [bottomRight, bottomLeft, midPoint],
    p
  ) ? HEADING_DOWN : HEADING_LEFT;
};
var flipHeading = (h) => [
  h[0] === 0 ? 0 : h[0] > 0 ? -1 : 1,
  h[1] === 0 ? 0 : h[1] > 0 ? -1 : 1
];

// ../element/src/binding.ts
var shouldEnableBindingForPointerEvent = (event) => {
  return !event[KEYS.CTRL_OR_CMD];
};
var isBindingEnabled = (appState) => {
  return appState.isBindingEnabled;
};
var FIXED_BINDING_DISTANCE = 5;
var BINDING_HIGHLIGHT_THICKNESS = 10;
var BINDING_HIGHLIGHT_OFFSET = 4;
var getNonDeletedElements = (scene, ids) => {
  const result = [];
  ids.forEach((id) => {
    const element = scene.getNonDeletedElement(id);
    if (element != null) {
      result.push(element);
    }
  });
  return result;
};
var bindOrUnbindLinearElement = (linearElement, startBindingElement, endBindingElement, elementsMap, scene) => {
  const boundToElementIds = /* @__PURE__ */ new Set();
  const unboundFromElementIds = /* @__PURE__ */ new Set();
  bindOrUnbindLinearElementEdge(
    linearElement,
    startBindingElement,
    endBindingElement,
    "start",
    boundToElementIds,
    unboundFromElementIds,
    elementsMap
  );
  bindOrUnbindLinearElementEdge(
    linearElement,
    endBindingElement,
    startBindingElement,
    "end",
    boundToElementIds,
    unboundFromElementIds,
    elementsMap
  );
  const onlyUnbound = Array.from(unboundFromElementIds).filter(
    (id) => !boundToElementIds.has(id)
  );
  getNonDeletedElements(scene, onlyUnbound).forEach((element) => {
    mutateElement(element, {
      boundElements: element.boundElements?.filter(
        (element2) => element2.type !== "arrow" || element2.id !== linearElement.id
      )
    });
  });
};
var bindOrUnbindLinearElementEdge = (linearElement, bindableElement, otherEdgeBindableElement, startOrEnd, boundToElementIds, unboundFromElementIds, elementsMap) => {
  if (bindableElement === "keep") {
    return;
  }
  if (bindableElement === null) {
    const unbound = unbindLinearElement(linearElement, startOrEnd);
    if (unbound != null) {
      unboundFromElementIds.add(unbound);
    }
    return;
  }
  if (isLinearElementSimple(linearElement)) {
    if (otherEdgeBindableElement == null || (otherEdgeBindableElement === "keep" ? (
      // TODO: Refactor - Needlessly complex
      !isLinearElementSimpleAndAlreadyBoundOnOppositeEdge(
        linearElement,
        bindableElement,
        startOrEnd
      )
    ) : startOrEnd === "start" || otherEdgeBindableElement.id !== bindableElement.id)) {
      bindLinearElement(
        linearElement,
        bindableElement,
        startOrEnd,
        elementsMap
      );
      boundToElementIds.add(bindableElement.id);
    }
  } else {
    bindLinearElement(linearElement, bindableElement, startOrEnd, elementsMap);
    boundToElementIds.add(bindableElement.id);
  }
};
var getOriginalBindingIfStillCloseOfLinearElementEdge = (linearElement, edge, elementsMap, zoom) => {
  const coors = getLinearElementEdgeCoors(linearElement, edge, elementsMap);
  const elementId = edge === "start" ? linearElement.startBinding?.elementId : linearElement.endBinding?.elementId;
  if (elementId) {
    const element = elementsMap.get(elementId);
    if (isBindableElement(element) && bindingBorderTest(element, coors, elementsMap, zoom)) {
      return element;
    }
  }
  return null;
};
var getOriginalBindingsIfStillCloseToArrowEnds = (linearElement, elementsMap, zoom) => ["start", "end"].map(
  (edge) => getOriginalBindingIfStillCloseOfLinearElementEdge(
    linearElement,
    edge,
    elementsMap,
    zoom
  )
);
var getBindingStrategyForDraggingArrowEndpoints = (selectedElement, isBindingEnabled2, draggingPoints, elementsMap, elements, zoom) => {
  const startIdx = 0;
  const endIdx = selectedElement.points.length - 1;
  const startDragged = draggingPoints.findIndex((i) => i === startIdx) > -1;
  const endDragged = draggingPoints.findIndex((i) => i === endIdx) > -1;
  const start = startDragged ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "start",
    elementsMap,
    elements,
    zoom
  ) : null : !isElbowArrow(selectedElement) ? (
    // We have to update the focus and gap of the binding, so let's rebind
    getElligibleElementForBindingElement(
      selectedElement,
      "start",
      elementsMap,
      elements,
      zoom
    )
  ) : "keep";
  const end = endDragged ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "end",
    elementsMap,
    elements,
    zoom
  ) : null : !isElbowArrow(selectedElement) ? (
    // We have to update the focus and gap of the binding, so let's rebind
    getElligibleElementForBindingElement(
      selectedElement,
      "end",
      elementsMap,
      elements,
      zoom
    )
  ) : "keep";
  return [start, end];
};
var getBindingStrategyForDraggingArrowOrJoints = (selectedElement, elementsMap, elements, isBindingEnabled2, zoom) => {
  if (isElbowArrow(selectedElement)) {
    return ["keep", "keep"];
  }
  const [startIsClose, endIsClose] = getOriginalBindingsIfStillCloseToArrowEnds(
    selectedElement,
    elementsMap,
    zoom
  );
  const start = startIsClose ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "start",
    elementsMap,
    elements,
    zoom
  ) : null : null;
  const end = endIsClose ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "end",
    elementsMap,
    elements,
    zoom
  ) : null : null;
  return [start, end];
};
var bindOrUnbindLinearElements = (selectedElements, elementsMap, elements, scene, isBindingEnabled2, draggingPoints, zoom) => {
  selectedElements.forEach((selectedElement) => {
    const [start, end] = draggingPoints?.length ? (
      // The arrow edge points are dragged (i.e. start, end)
      getBindingStrategyForDraggingArrowEndpoints(
        selectedElement,
        isBindingEnabled2,
        draggingPoints ?? [],
        elementsMap,
        elements,
        zoom
      )
    ) : (
      // The arrow itself (the shaft) or the inner joins are dragged
      getBindingStrategyForDraggingArrowOrJoints(
        selectedElement,
        elementsMap,
        elements,
        isBindingEnabled2,
        zoom
      )
    );
    bindOrUnbindLinearElement(selectedElement, start, end, elementsMap, scene);
  });
};
var getSuggestedBindingsForArrows = (selectedElements, elementsMap, zoom) => {
  if (selectedElements.length > 50) {
    return [];
  }
  return selectedElements.filter(isLinearElement).flatMap(
    (element) => getOriginalBindingsIfStillCloseToArrowEnds(element, elementsMap, zoom)
  ).filter(
    (element) => element !== null
  ).filter(
    (element) => selectedElements.filter((selected) => selected.id === element?.id).length === 0
  );
};
var maybeBindLinearElement = (linearElement, appState, pointerCoords, elementsMap, elements) => {
  if (appState.startBoundElement != null) {
    bindLinearElement(
      linearElement,
      appState.startBoundElement,
      "start",
      elementsMap
    );
  }
  const hoveredElement = getHoveredElementForBinding(
    pointerCoords,
    elements,
    elementsMap,
    appState.zoom,
    isElbowArrow(linearElement),
    isElbowArrow(linearElement)
  );
  if (hoveredElement !== null) {
    if (!isLinearElementSimpleAndAlreadyBoundOnOppositeEdge(
      linearElement,
      hoveredElement,
      "end"
    )) {
      bindLinearElement(linearElement, hoveredElement, "end", elementsMap);
    }
  }
};
var normalizePointBinding = (binding, hoveredElement) => {
  let gap = binding.gap;
  const maxGap = maxBindingGap(
    hoveredElement,
    hoveredElement.width,
    hoveredElement.height
  );
  if (gap > maxGap) {
    gap = BINDING_HIGHLIGHT_THICKNESS + BINDING_HIGHLIGHT_OFFSET;
  }
  return {
    ...binding,
    gap
  };
};
var bindLinearElement = (linearElement, hoveredElement, startOrEnd, elementsMap) => {
  if (!isArrowElement(linearElement)) {
    return;
  }
  let binding = {
    elementId: hoveredElement.id,
    ...normalizePointBinding(
      calculateFocusAndGap(
        linearElement,
        hoveredElement,
        startOrEnd,
        elementsMap
      ),
      hoveredElement
    )
  };
  if (isElbowArrow(linearElement)) {
    binding = {
      ...binding,
      ...calculateFixedPointForElbowArrowBinding(
        linearElement,
        hoveredElement,
        startOrEnd,
        elementsMap
      )
    };
  }
  mutateElement(linearElement, {
    [startOrEnd === "start" ? "startBinding" : "endBinding"]: binding
  });
  const boundElementsMap = arrayToMap(hoveredElement.boundElements || []);
  if (!boundElementsMap.has(linearElement.id)) {
    mutateElement(hoveredElement, {
      boundElements: (hoveredElement.boundElements || []).concat({
        id: linearElement.id,
        type: "arrow"
      })
    });
  }
};
var isLinearElementSimpleAndAlreadyBoundOnOppositeEdge = (linearElement, bindableElement, startOrEnd) => {
  const otherBinding = linearElement[startOrEnd === "start" ? "endBinding" : "startBinding"];
  return isLinearElementSimpleAndAlreadyBound(
    linearElement,
    otherBinding?.elementId,
    bindableElement
  );
};
var isLinearElementSimpleAndAlreadyBound = (linearElement, alreadyBoundToId, bindableElement) => {
  return alreadyBoundToId === bindableElement.id && isLinearElementSimple(linearElement);
};
var isLinearElementSimple = (linearElement) => linearElement.points.length < 3;
var unbindLinearElement = (linearElement, startOrEnd) => {
  const field = startOrEnd === "start" ? "startBinding" : "endBinding";
  const binding = linearElement[field];
  if (binding == null) {
    return null;
  }
  mutateElement(linearElement, { [field]: null });
  return binding.elementId;
};
var getHoveredElementForBinding = (pointerCoords, elements, elementsMap, zoom, fullShape, considerAllElements) => {
  if (considerAllElements) {
    let cullRest = false;
    const candidateElements = getAllElementsAtPositionForBinding(
      elements,
      (element) => isBindableElement(element, false) && bindingBorderTest(
        element,
        pointerCoords,
        elementsMap,
        zoom,
        (fullShape || !isBindingFallthroughEnabled(
          element
        )) && // disable fullshape snapping for frame elements so we
        // can bind to frame children
        !isFrameLikeElement(element)
      )
    ).filter((element) => {
      if (cullRest) {
        return false;
      }
      if (!isBindingFallthroughEnabled(element)) {
        cullRest = true;
      }
      return true;
    });
    if (!candidateElements || candidateElements.length === 0) {
      return null;
    }
    if (candidateElements.length === 1) {
      return candidateElements[0];
    }
    const borderTestElements = candidateElements.filter(
      (element) => bindingBorderTest(element, pointerCoords, elementsMap, zoom, false)
    );
    if (borderTestElements.length === 1) {
      return borderTestElements[0];
    }
    return candidateElements.sort(
      (a, b) => b.width ** 2 + b.height ** 2 - (a.width ** 2 + a.height ** 2)
    ).pop();
  }
  const hoveredElement = getElementAtPositionForBinding(
    elements,
    (element) => isBindableElement(element, false) && bindingBorderTest(
      element,
      pointerCoords,
      elementsMap,
      zoom,
      // disable fullshape snapping for frame elements so we
      // can bind to frame children
      (fullShape || !isBindingFallthroughEnabled(element)) && !isFrameLikeElement(element)
    )
  );
  return hoveredElement;
};
var getElementAtPositionForBinding = (elements, isAtPositionFn) => {
  let hitElement = null;
  for (let index = elements.length - 1; index >= 0; --index) {
    const element = elements[index];
    if (element.isDeleted) {
      continue;
    }
    if (isAtPositionFn(element)) {
      hitElement = element;
      break;
    }
  }
  return hitElement;
};
var getAllElementsAtPositionForBinding = (elements, isAtPositionFn) => {
  const elementsAtPosition = [];
  for (let index = elements.length - 1; index >= 0; --index) {
    const element = elements[index];
    if (element.isDeleted) {
      continue;
    }
    if (isAtPositionFn(element)) {
      elementsAtPosition.push(element);
    }
  }
  return elementsAtPosition;
};
var calculateFocusAndGap = (linearElement, hoveredElement, startOrEnd, elementsMap) => {
  const direction = startOrEnd === "start" ? -1 : 1;
  const edgePointIndex = direction === -1 ? 0 : linearElement.points.length - 1;
  const adjacentPointIndex = edgePointIndex - direction;
  const edgePoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    edgePointIndex,
    elementsMap
  );
  const adjacentPoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    adjacentPointIndex,
    elementsMap
  );
  return {
    focus: determineFocusDistance(hoveredElement, adjacentPoint, edgePoint),
    gap: Math.max(1, distanceToBindableElement(hoveredElement, edgePoint))
  };
};
var updateBoundElements = (changedElement, elementsMap, options) => {
  const { newSize, simultaneouslyUpdated } = options ?? {};
  const simultaneouslyUpdatedElementIds = getSimultaneouslyUpdatedElementIds(
    simultaneouslyUpdated
  );
  if (!isBindableElement(changedElement)) {
    return;
  }
  boundElementsVisitor(elementsMap, changedElement, (element) => {
    if (!isLinearElement(element) || element.isDeleted) {
      return;
    }
    if (!doesNeedUpdate(element, changedElement)) {
      return;
    }
    const startBindingElement = element.startBinding ? elementsMap.get(element.startBinding.elementId) : null;
    const endBindingElement = element.endBinding ? elementsMap.get(element.endBinding.elementId) : null;
    let startBounds = null;
    let endBounds = null;
    if (startBindingElement && endBindingElement) {
      startBounds = getElementBounds(startBindingElement, elementsMap);
      endBounds = getElementBounds(endBindingElement, elementsMap);
    }
    const bindings = {
      startBinding: maybeCalculateNewGapWhenScaling(
        changedElement,
        element.startBinding,
        newSize
      ),
      endBinding: maybeCalculateNewGapWhenScaling(
        changedElement,
        element.endBinding,
        newSize
      )
    };
    if (simultaneouslyUpdatedElementIds.has(element.id)) {
      mutateElement(element, bindings, true);
      return;
    }
    const updates = bindableElementsVisitor(
      elementsMap,
      element,
      (bindableElement, bindingProp) => {
        if (bindableElement && isBindableElement(bindableElement) && (bindingProp === "startBinding" || bindingProp === "endBinding") && (changedElement.id === element[bindingProp]?.elementId || changedElement.id === element[bindingProp === "startBinding" ? "endBinding" : "startBinding"]?.elementId && !doBoundsIntersect(startBounds, endBounds))) {
          const point = updateBoundPoint(
            element,
            bindingProp,
            bindings[bindingProp],
            bindableElement,
            elementsMap
          );
          if (point) {
            return {
              index: bindingProp === "startBinding" ? 0 : element.points.length - 1,
              point
            };
          }
        }
        return null;
      }
    ).filter(
      (update) => update !== null
    );
    LinearElementEditor.movePoints(
      element,
      updates,
      {
        ...changedElement.id === element.startBinding?.elementId ? { startBinding: bindings.startBinding } : {},
        ...changedElement.id === element.endBinding?.elementId ? { endBinding: bindings.endBinding } : {}
      },
      elementsMap
    );
    const boundText = getBoundTextElement(element, elementsMap);
    if (boundText && !boundText.isDeleted) {
      handleBindTextResize(element, elementsMap, false);
    }
  });
};
var doesNeedUpdate = (boundElement, changedElement) => {
  return boundElement.startBinding?.elementId === changedElement.id || boundElement.endBinding?.elementId === changedElement.id;
};
var getSimultaneouslyUpdatedElementIds = (simultaneouslyUpdated) => {
  return new Set((simultaneouslyUpdated || []).map((element) => element.id));
};
var getHeadingForElbowArrowSnap = (p, otherPoint, bindableElement, aabb, elementsMap, origPoint, zoom) => {
  const otherPointHeading = vectorToHeading(vectorFromPoint(otherPoint, p));
  if (!bindableElement || !aabb) {
    return otherPointHeading;
  }
  const distance2 = getDistanceForBinding(
    origPoint,
    bindableElement,
    elementsMap,
    zoom
  );
  if (!distance2) {
    return vectorToHeading(
      vectorFromPoint(
        p,
        pointFrom(
          bindableElement.x + bindableElement.width / 2,
          bindableElement.y + bindableElement.height / 2
        )
      )
    );
  }
  return headingForPointFromElement(bindableElement, aabb, p);
};
var getDistanceForBinding = (point, bindableElement, elementsMap, zoom) => {
  const distance2 = distanceToBindableElement(bindableElement, point);
  const bindDistance = maxBindingGap(
    bindableElement,
    bindableElement.width,
    bindableElement.height,
    zoom
  );
  return distance2 > bindDistance ? null : distance2;
};
var bindPointToSnapToElementOutline = (arrow, bindableElement, startOrEnd) => {
  if (isDevEnv() || isTestEnv()) {
    invariant(arrow.points.length > 1, "Arrow should have at least 2 points");
  }
  const aabb = aabbForElement(bindableElement);
  const localP = arrow.points[startOrEnd === "start" ? 0 : arrow.points.length - 1];
  const globalP = pointFrom(
    arrow.x + localP[0],
    arrow.y + localP[1]
  );
  const edgePoint = isRectanguloidElement(bindableElement) ? avoidRectangularCorner(bindableElement, globalP) : globalP;
  const elbowed = isElbowArrow(arrow);
  const center = getCenterForBounds(aabb);
  const adjacentPointIdx = startOrEnd === "start" ? 1 : arrow.points.length - 2;
  const adjacentPoint = pointRotateRads(
    pointFrom(
      arrow.x + arrow.points[adjacentPointIdx][0],
      arrow.y + arrow.points[adjacentPointIdx][1]
    ),
    center,
    arrow.angle ?? 0
  );
  let intersection = null;
  if (elbowed) {
    const isHorizontal = headingIsHorizontal(
      headingForPointFromElement(bindableElement, aabb, globalP)
    );
    const otherPoint = pointFrom(
      isHorizontal ? center[0] : edgePoint[0],
      !isHorizontal ? center[1] : edgePoint[1]
    );
    intersection = intersectElementWithLineSegment(
      bindableElement,
      lineSegment(
        otherPoint,
        pointFromVector(
          vectorScale(
            vectorNormalize(vectorFromPoint(edgePoint, otherPoint)),
            Math.max(bindableElement.width, bindableElement.height) * 2
          ),
          otherPoint
        )
      )
    )[0];
  } else {
    intersection = intersectElementWithLineSegment(
      bindableElement,
      lineSegment(
        adjacentPoint,
        pointFromVector(
          vectorScale(
            vectorNormalize(vectorFromPoint(edgePoint, adjacentPoint)),
            pointDistance(edgePoint, adjacentPoint) + Math.max(bindableElement.width, bindableElement.height) * 2
          ),
          adjacentPoint
        )
      ),
      FIXED_BINDING_DISTANCE
    ).sort(
      (g, h) => pointDistanceSq(g, adjacentPoint) - pointDistanceSq(h, adjacentPoint)
    )[0];
  }
  if (!intersection || // Too close to determine vector from intersection to edgePoint
  pointDistanceSq(edgePoint, intersection) < PRECISION) {
    return edgePoint;
  }
  if (elbowed) {
    const scalar = pointDistanceSq(edgePoint, center) - pointDistanceSq(intersection, center) > 0 ? FIXED_BINDING_DISTANCE : -FIXED_BINDING_DISTANCE;
    return pointFromVector(
      vectorScale(
        vectorNormalize(vectorFromPoint(edgePoint, intersection)),
        scalar
      ),
      intersection
    );
  }
  return edgePoint;
};
var avoidRectangularCorner = (element, p) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const nonRotatedPoint = pointRotateRads(p, center, -element.angle);
  if (nonRotatedPoint[0] < element.x && nonRotatedPoint[1] < element.y) {
    if (nonRotatedPoint[1] - element.y > -FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(element.x - FIXED_BINDING_DISTANCE, element.y),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(element.x, element.y - FIXED_BINDING_DISTANCE),
      center,
      element.angle
    );
  } else if (nonRotatedPoint[0] < element.x && nonRotatedPoint[1] > element.y + element.height) {
    if (nonRotatedPoint[0] - element.x > -FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(
          element.x,
          element.y + element.height + FIXED_BINDING_DISTANCE
        ),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(element.x - FIXED_BINDING_DISTANCE, element.y + element.height),
      center,
      element.angle
    );
  } else if (nonRotatedPoint[0] > element.x + element.width && nonRotatedPoint[1] > element.y + element.height) {
    if (nonRotatedPoint[0] - element.x < element.width + FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(
          element.x + element.width,
          element.y + element.height + FIXED_BINDING_DISTANCE
        ),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(
        element.x + element.width + FIXED_BINDING_DISTANCE,
        element.y + element.height
      ),
      center,
      element.angle
    );
  } else if (nonRotatedPoint[0] > element.x + element.width && nonRotatedPoint[1] < element.y) {
    if (nonRotatedPoint[0] - element.x < element.width + FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(
          element.x + element.width,
          element.y - FIXED_BINDING_DISTANCE
        ),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(element.x + element.width + FIXED_BINDING_DISTANCE, element.y),
      center,
      element.angle
    );
  }
  return p;
};
var snapToMid = (element, p, tolerance = 0.05) => {
  const { x, y, width, height, angle } = element;
  const center = pointFrom(
    x + width / 2 - 0.1,
    y + height / 2 - 0.1
  );
  const nonRotated = pointRotateRads(p, center, -angle);
  const verticalThrehsold = clamp(tolerance * height, 5, 80);
  const horizontalThrehsold = clamp(tolerance * width, 5, 80);
  if (nonRotated[0] <= x + width / 2 && nonRotated[1] > center[1] - verticalThrehsold && nonRotated[1] < center[1] + verticalThrehsold) {
    return pointRotateRads(
      pointFrom(x - FIXED_BINDING_DISTANCE, center[1]),
      center,
      angle
    );
  } else if (nonRotated[1] <= y + height / 2 && nonRotated[0] > center[0] - horizontalThrehsold && nonRotated[0] < center[0] + horizontalThrehsold) {
    return pointRotateRads(
      pointFrom(center[0], y - FIXED_BINDING_DISTANCE),
      center,
      angle
    );
  } else if (nonRotated[0] >= x + width / 2 && nonRotated[1] > center[1] - verticalThrehsold && nonRotated[1] < center[1] + verticalThrehsold) {
    return pointRotateRads(
      pointFrom(x + width + FIXED_BINDING_DISTANCE, center[1]),
      center,
      angle
    );
  } else if (nonRotated[1] >= y + height / 2 && nonRotated[0] > center[0] - horizontalThrehsold && nonRotated[0] < center[0] + horizontalThrehsold) {
    return pointRotateRads(
      pointFrom(center[0], y + height + FIXED_BINDING_DISTANCE),
      center,
      angle
    );
  }
  return p;
};
var updateBoundPoint = (linearElement, startOrEnd, binding, bindableElement, elementsMap) => {
  if (binding == null || // We only need to update the other end if this is a 2 point line element
  binding.elementId !== bindableElement.id && linearElement.points.length > 2) {
    return null;
  }
  const direction = startOrEnd === "startBinding" ? -1 : 1;
  const edgePointIndex = direction === -1 ? 0 : linearElement.points.length - 1;
  if (isElbowArrow(linearElement) && isFixedPointBinding(binding)) {
    const fixedPoint = normalizeFixedPoint(binding.fixedPoint) ?? calculateFixedPointForElbowArrowBinding(
      linearElement,
      bindableElement,
      startOrEnd === "startBinding" ? "start" : "end",
      elementsMap
    ).fixedPoint;
    const globalMidPoint = pointFrom(
      bindableElement.x + bindableElement.width / 2,
      bindableElement.y + bindableElement.height / 2
    );
    const global = pointFrom(
      bindableElement.x + fixedPoint[0] * bindableElement.width,
      bindableElement.y + fixedPoint[1] * bindableElement.height
    );
    const rotatedGlobal = pointRotateRads(
      global,
      globalMidPoint,
      bindableElement.angle
    );
    return LinearElementEditor.pointFromAbsoluteCoords(
      linearElement,
      rotatedGlobal,
      elementsMap
    );
  }
  const adjacentPointIndex = edgePointIndex - direction;
  const adjacentPoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    adjacentPointIndex,
    elementsMap
  );
  const focusPointAbsolute = determineFocusPoint(
    bindableElement,
    binding.focus,
    adjacentPoint
  );
  let newEdgePoint;
  if (binding.gap === 0) {
    newEdgePoint = focusPointAbsolute;
  } else {
    const edgePointAbsolute = LinearElementEditor.getPointAtIndexGlobalCoordinates(
      linearElement,
      edgePointIndex,
      elementsMap
    );
    const center = pointFrom(
      bindableElement.x + bindableElement.width / 2,
      bindableElement.y + bindableElement.height / 2
    );
    const interceptorLength = pointDistance(adjacentPoint, edgePointAbsolute) + pointDistance(adjacentPoint, center) + Math.max(bindableElement.width, bindableElement.height) * 2;
    const intersections = [
      ...intersectElementWithLineSegment(
        bindableElement,
        lineSegment(
          adjacentPoint,
          pointFromVector(
            vectorScale(
              vectorNormalize(
                vectorFromPoint(focusPointAbsolute, adjacentPoint)
              ),
              interceptorLength
            ),
            adjacentPoint
          )
        ),
        binding.gap
      ).sort(
        (g, h) => pointDistanceSq(g, adjacentPoint) - pointDistanceSq(h, adjacentPoint)
      ),
      // Fallback when arrow doesn't point to the shape
      pointFromVector(
        vectorScale(
          vectorNormalize(vectorFromPoint(focusPointAbsolute, adjacentPoint)),
          pointDistance(adjacentPoint, edgePointAbsolute)
        ),
        adjacentPoint
      )
    ];
    if (intersections.length > 1) {
      newEdgePoint = intersections[0];
    } else if (intersections.length === 1) {
      newEdgePoint = focusPointAbsolute;
    } else {
      newEdgePoint = edgePointAbsolute;
    }
  }
  return LinearElementEditor.pointFromAbsoluteCoords(
    linearElement,
    newEdgePoint,
    elementsMap
  );
};
var calculateFixedPointForElbowArrowBinding = (linearElement, hoveredElement, startOrEnd, elementsMap) => {
  const bounds = [
    hoveredElement.x,
    hoveredElement.y,
    hoveredElement.x + hoveredElement.width,
    hoveredElement.y + hoveredElement.height
  ];
  const snappedPoint = bindPointToSnapToElementOutline(
    linearElement,
    hoveredElement,
    startOrEnd
  );
  const globalMidPoint = pointFrom(
    bounds[0] + (bounds[2] - bounds[0]) / 2,
    bounds[1] + (bounds[3] - bounds[1]) / 2
  );
  const nonRotatedSnappedGlobalPoint = pointRotateRads(
    snappedPoint,
    globalMidPoint,
    -hoveredElement.angle
  );
  return {
    fixedPoint: normalizeFixedPoint([
      (nonRotatedSnappedGlobalPoint[0] - hoveredElement.x) / hoveredElement.width,
      (nonRotatedSnappedGlobalPoint[1] - hoveredElement.y) / hoveredElement.height
    ])
  };
};
var maybeCalculateNewGapWhenScaling = (changedElement, currentBinding, newSize) => {
  if (currentBinding == null || newSize == null) {
    return currentBinding;
  }
  const { width: newWidth, height: newHeight } = newSize;
  const { width, height } = changedElement;
  const newGap = Math.max(
    1,
    Math.min(
      maxBindingGap(changedElement, newWidth, newHeight),
      currentBinding.gap * (newWidth < newHeight ? newWidth / width : newHeight / height)
    )
  );
  return { ...currentBinding, gap: newGap };
};
var getElligibleElementForBindingElement = (linearElement, startOrEnd, elementsMap, elements, zoom) => {
  return getHoveredElementForBinding(
    getLinearElementEdgeCoors(linearElement, startOrEnd, elementsMap),
    elements,
    elementsMap,
    zoom,
    isElbowArrow(linearElement),
    isElbowArrow(linearElement)
  );
};
var getLinearElementEdgeCoors = (linearElement, startOrEnd, elementsMap) => {
  const index = startOrEnd === "start" ? 0 : -1;
  return tupleToCoors(
    LinearElementEditor.getPointAtIndexGlobalCoordinates(
      linearElement,
      index,
      elementsMap
    )
  );
};
var fixBindingsAfterDuplication = (newElements, oldIdToDuplicatedId, duplicatedElementsMap) => {
  for (const element of newElements) {
    if ("boundElements" in element && element.boundElements) {
      Object.assign(element, {
        boundElements: element.boundElements.reduce(
          (acc, binding) => {
            const newBindingId = oldIdToDuplicatedId.get(binding.id);
            if (newBindingId) {
              acc.push({ ...binding, id: newBindingId });
            }
            return acc;
          },
          []
        )
      });
    }
    if ("containerId" in element && element.containerId) {
      Object.assign(element, {
        containerId: oldIdToDuplicatedId.get(element.containerId) ?? null
      });
    }
    if ("endBinding" in element && element.endBinding) {
      const newEndBindingId = oldIdToDuplicatedId.get(
        element.endBinding.elementId
      );
      Object.assign(element, {
        endBinding: newEndBindingId ? {
          ...element.endBinding,
          elementId: newEndBindingId
        } : null
      });
    }
    if ("startBinding" in element && element.startBinding) {
      const newEndBindingId = oldIdToDuplicatedId.get(
        element.startBinding.elementId
      );
      Object.assign(element, {
        startBinding: newEndBindingId ? {
          ...element.startBinding,
          elementId: newEndBindingId
        } : null
      });
    }
    if (isElbowArrow(element)) {
      Object.assign(
        element,
        updateElbowArrowPoints(element, duplicatedElementsMap, {
          points: [
            element.points[0],
            element.points[element.points.length - 1]
          ]
        })
      );
    }
  }
};
var fixBindingsAfterDeletion = (sceneElements, deletedElements) => {
  const elements = arrayToMap(sceneElements);
  for (const element of deletedElements) {
    BoundElement.unbindAffected(elements, element, mutateElement);
    BindableElement.unbindAffected(elements, element, mutateElement);
  }
};
var newBoundElements = (boundElements, idsToRemove, elementsToAdd = []) => {
  if (!boundElements) {
    return null;
  }
  const nextBoundElements = boundElements.filter(
    (boundElement) => !idsToRemove.has(boundElement.id)
  );
  nextBoundElements.push(
    ...elementsToAdd.map(
      (x) => ({ id: x.id, type: x.type })
    )
  );
  return nextBoundElements;
};
var bindingBorderTest = (element, { x, y }, elementsMap, zoom, fullShape) => {
  const threshold = maxBindingGap(element, element.width, element.height, zoom);
  const shape = getElementShape(element, elementsMap);
  return isPointOnShape(pointFrom(x, y), shape, threshold) || fullShape === true && pointInsideBounds(pointFrom(x, y), aabbForElement(element));
};
var maxBindingGap = (element, elementWidth, elementHeight, zoom) => {
  const zoomValue = zoom?.value && zoom.value < 1 ? zoom.value : 1;
  const shapeRatio = element.type === "diamond" ? 1 / Math.sqrt(2) : 1;
  const smallerDimension = shapeRatio * Math.min(elementWidth, elementHeight);
  return Math.max(
    16,
    // bigger bindable boundary for bigger elements
    Math.min(0.25 * smallerDimension, 32),
    // keep in sync with the zoomed highlight
    BINDING_HIGHLIGHT_THICKNESS / zoomValue + BINDING_HIGHLIGHT_OFFSET
  );
};
var determineFocusDistance = (element, a, b) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  if (pointsEqual(a, b)) {
    return 0;
  }
  const rotatedA = pointRotateRads(a, center, -element.angle);
  const rotatedB = pointRotateRads(b, center, -element.angle);
  const sign = Math.sign(
    vectorCross(
      vectorFromPoint(rotatedB, a),
      vectorFromPoint(rotatedB, center)
    )
  ) * -1;
  const rotatedInterceptor = lineSegment(
    rotatedB,
    pointFromVector(
      vectorScale(
        vectorNormalize(vectorFromPoint(rotatedB, rotatedA)),
        Math.max(element.width * 2, element.height * 2)
      ),
      rotatedB
    )
  );
  const axes = element.type === "diamond" ? [
    lineSegment(
      pointFrom(element.x + element.width / 2, element.y),
      pointFrom(
        element.x + element.width / 2,
        element.y + element.height
      )
    ),
    lineSegment(
      pointFrom(element.x, element.y + element.height / 2),
      pointFrom(
        element.x + element.width,
        element.y + element.height / 2
      )
    )
  ] : [
    lineSegment(
      pointFrom(element.x, element.y),
      pointFrom(
        element.x + element.width,
        element.y + element.height
      )
    ),
    lineSegment(
      pointFrom(element.x + element.width, element.y),
      pointFrom(element.x, element.y + element.height)
    )
  ];
  const interceptees = element.type === "diamond" ? [
    lineSegment(
      pointFrom(
        element.x + element.width / 2,
        element.y - element.height
      ),
      pointFrom(
        element.x + element.width / 2,
        element.y + element.height * 2
      )
    ),
    lineSegment(
      pointFrom(
        element.x - element.width,
        element.y + element.height / 2
      ),
      pointFrom(
        element.x + element.width * 2,
        element.y + element.height / 2
      )
    )
  ] : [
    lineSegment(
      pointFrom(
        element.x - element.width,
        element.y - element.height
      ),
      pointFrom(
        element.x + element.width * 2,
        element.y + element.height * 2
      )
    ),
    lineSegment(
      pointFrom(
        element.x + element.width * 2,
        element.y - element.height
      ),
      pointFrom(
        element.x - element.width,
        element.y + element.height * 2
      )
    )
  ];
  const ordered = [
    lineSegmentIntersectionPoints(rotatedInterceptor, interceptees[0]),
    lineSegmentIntersectionPoints(rotatedInterceptor, interceptees[1])
  ].filter((p) => p !== null).sort((g, h) => pointDistanceSq(g, b) - pointDistanceSq(h, b)).map(
    (p, idx) => sign * pointDistance(center, p) / (element.type === "diamond" ? pointDistance(axes[idx][0], axes[idx][1]) / 2 : Math.sqrt(element.width ** 2 + element.height ** 2) / 2)
  ).sort((g, h) => Math.abs(g) - Math.abs(h));
  const signedDistanceRatio = ordered[0] ?? 0;
  return signedDistanceRatio;
};
var determineFocusPoint = (element, focus, adjacentPoint) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  if (focus === 0) {
    return center;
  }
  const candidates = (element.type === "diamond" ? [
    pointFrom(element.x, element.y + element.height / 2),
    pointFrom(element.x + element.width / 2, element.y),
    pointFrom(
      element.x + element.width,
      element.y + element.height / 2
    ),
    pointFrom(
      element.x + element.width / 2,
      element.y + element.height
    )
  ] : [
    pointFrom(element.x, element.y),
    pointFrom(element.x + element.width, element.y),
    pointFrom(
      element.x + element.width,
      element.y + element.height
    ),
    pointFrom(element.x, element.y + element.height)
  ]).map(
    (p) => pointFromVector(
      vectorScale(vectorFromPoint(p, center), Math.abs(focus)),
      center
    )
  ).map((p) => pointRotateRads(p, center, element.angle));
  const selected = [
    vectorCross(
      vectorFromPoint(adjacentPoint, candidates[0]),
      vectorFromPoint(candidates[1], candidates[0])
    ) > 0 && // TOP
    (focus > 0 ? vectorCross(
      vectorFromPoint(adjacentPoint, candidates[1]),
      vectorFromPoint(candidates[2], candidates[1])
    ) < 0 : vectorCross(
      vectorFromPoint(adjacentPoint, candidates[3]),
      vectorFromPoint(candidates[0], candidates[3])
    ) < 0),
    vectorCross(
      vectorFromPoint(adjacentPoint, candidates[1]),
      vectorFromPoint(candidates[2], candidates[1])
    ) > 0 && // RIGHT
    (focus > 0 ? vectorCross(
      vectorFromPoint(adjacentPoint, candidates[2]),
      vectorFromPoint(candidates[3], candidates[2])
    ) < 0 : vectorCross(
      vectorFromPoint(adjacentPoint, candidates[0]),
      vectorFromPoint(candidates[1], candidates[0])
    ) < 0),
    vectorCross(
      vectorFromPoint(adjacentPoint, candidates[2]),
      vectorFromPoint(candidates[3], candidates[2])
    ) > 0 && // BOTTOM
    (focus > 0 ? vectorCross(
      vectorFromPoint(adjacentPoint, candidates[3]),
      vectorFromPoint(candidates[0], candidates[3])
    ) < 0 : vectorCross(
      vectorFromPoint(adjacentPoint, candidates[1]),
      vectorFromPoint(candidates[2], candidates[1])
    ) < 0),
    vectorCross(
      vectorFromPoint(adjacentPoint, candidates[3]),
      vectorFromPoint(candidates[0], candidates[3])
    ) > 0 && // LEFT
    (focus > 0 ? vectorCross(
      vectorFromPoint(adjacentPoint, candidates[0]),
      vectorFromPoint(candidates[1], candidates[0])
    ) < 0 : vectorCross(
      vectorFromPoint(adjacentPoint, candidates[2]),
      vectorFromPoint(candidates[3], candidates[2])
    ) < 0)
  ];
  const focusPoint = selected[0] ? focus > 0 ? candidates[1] : candidates[0] : selected[1] ? focus > 0 ? candidates[2] : candidates[1] : selected[2] ? focus > 0 ? candidates[3] : candidates[2] : focus > 0 ? candidates[0] : candidates[3];
  return focusPoint;
};
var bindingProperties = /* @__PURE__ */ new Set([
  "boundElements",
  "frameId",
  "containerId",
  "startBinding",
  "endBinding"
]);
var boundElementsVisitor = (elements, element, visit) => {
  if (isBindableElement(element)) {
    const boundElements = element.boundElements?.slice() ?? [];
    boundElements.forEach(({ id }) => {
      visit(elements.get(id), "boundElements", id);
    });
  }
};
var bindableElementsVisitor = (elements, element, visit) => {
  const result = [];
  if (element.frameId) {
    const id = element.frameId;
    result.push(visit(elements.get(id), "frameId", id));
  }
  if (isBoundToContainer(element)) {
    const id = element.containerId;
    result.push(visit(elements.get(id), "containerId", id));
  }
  if (isArrowElement(element)) {
    if (element.startBinding) {
      const id = element.startBinding.elementId;
      result.push(visit(elements.get(id), "startBinding", id));
    }
    if (element.endBinding) {
      const id = element.endBinding.elementId;
      result.push(visit(elements.get(id), "endBinding", id));
    }
  }
  return result;
};
var BoundElement = class {
  /**
   * Unbind the affected non deleted bindable elements (removing element from `boundElements`).
   * - iterates non deleted bindable elements (`containerId` | `startBinding.elementId` | `endBinding.elementId`) of the current element
   * - prepares updates to unbind each bindable element's `boundElements` from the current element
   */
  static unbindAffected(elements, boundElement, updateElementWith) {
    if (!boundElement) {
      return;
    }
    bindableElementsVisitor(elements, boundElement, (bindableElement) => {
      if (!bindableElement || bindableElement.isDeleted) {
        return;
      }
      boundElementsVisitor(
        elements,
        bindableElement,
        (_, __, boundElementId) => {
          if (boundElementId === boundElement.id) {
            updateElementWith(bindableElement, {
              boundElements: newBoundElements(
                bindableElement.boundElements,
                /* @__PURE__ */ new Set([boundElementId])
              )
            });
          }
        }
      );
    });
  }
};
/**
 * Rebind the next affected non deleted bindable elements (adding element to `boundElements`).
 * - iterates non deleted bindable elements (`containerId` | `startBinding.elementId` | `endBinding.elementId`) of the current element
 * - prepares updates to rebind each bindable element's `boundElements` to the current element
 *
 * NOTE: rebind expects that affected elements were previously unbound with `BoundElement.unbindAffected`
 */
__publicField(BoundElement, "rebindAffected", (elements, boundElement, updateElementWith) => {
  if (!boundElement || boundElement.isDeleted) {
    return;
  }
  bindableElementsVisitor(
    elements,
    boundElement,
    (bindableElement, bindingProp) => {
      if (!bindableElement || bindableElement.isDeleted) {
        updateElementWith(boundElement, { [bindingProp]: null });
        return;
      }
      if (bindingProp === "frameId") {
        return;
      }
      if (bindableElement.boundElements?.find((x) => x.id === boundElement.id)) {
        return;
      }
      if (isArrowElement(boundElement)) {
        updateElementWith(bindableElement, {
          boundElements: newBoundElements(
            bindableElement.boundElements,
            /* @__PURE__ */ new Set(),
            new Array(boundElement)
          )
        });
      }
      if (isTextElement(boundElement)) {
        if (!bindableElement.boundElements?.find((x) => x.type === "text")) {
          updateElementWith(bindableElement, {
            boundElements: newBoundElements(
              bindableElement.boundElements,
              /* @__PURE__ */ new Set(),
              new Array(boundElement)
            )
          });
        } else {
          updateElementWith(boundElement, { [bindingProp]: null });
        }
      }
    }
  );
});
var BindableElement = class {
  /**
   * Unbind the affected non deleted bound elements (resetting `containerId`, `startBinding`, `endBinding` to `null`).
   * - iterates through non deleted `boundElements` of the current element
   * - prepares updates to unbind each bound element from the current element
   */
  static unbindAffected(elements, bindableElement, updateElementWith) {
    if (!bindableElement) {
      return;
    }
    boundElementsVisitor(elements, bindableElement, (boundElement) => {
      if (!boundElement || boundElement.isDeleted) {
        return;
      }
      bindableElementsVisitor(
        elements,
        boundElement,
        (_, bindingProp, bindableElementId) => {
          if (bindableElementId === bindableElement.id) {
            updateElementWith(boundElement, { [bindingProp]: null });
          }
        }
      );
    });
  }
};
/**
 * Rebind the affected non deleted bound elements (for now setting only `containerId`, as we cannot rebind arrows atm).
 * - iterates through non deleted `boundElements` of the current element
 * - prepares updates to rebind each bound element to the current element or unbind it from `boundElements` in case of conflicts
 *
 * NOTE: rebind expects that affected elements were previously unbound with `BindaleElement.unbindAffected`
 */
__publicField(BindableElement, "rebindAffected", (elements, bindableElement, updateElementWith) => {
  if (!bindableElement || bindableElement.isDeleted) {
    return;
  }
  boundElementsVisitor(
    elements,
    bindableElement,
    (boundElement, _, boundElementId) => {
      if (!boundElement || boundElement.isDeleted) {
        updateElementWith(bindableElement, {
          boundElements: newBoundElements(
            bindableElement.boundElements,
            /* @__PURE__ */ new Set([boundElementId])
          )
        });
        return;
      }
      if (isTextElement(boundElement)) {
        const boundElements = bindableElement.boundElements?.slice() ?? [];
        if (boundElements.reverse().find((x) => x.type === "text")?.id === boundElement.id) {
          if (boundElement.containerId !== bindableElement.id) {
            updateElementWith(boundElement, {
              containerId: bindableElement.id
            });
          }
        } else {
          if (boundElement.containerId !== null) {
            updateElementWith(boundElement, {
              containerId: null
            });
          }
          updateElementWith(bindableElement, {
            boundElements: newBoundElements(
              bindableElement.boundElements,
              /* @__PURE__ */ new Set([boundElement.id])
            )
          });
        }
      }
    }
  );
});
var getGlobalFixedPointForBindableElement = (fixedPointRatio, element) => {
  const [fixedX, fixedY] = normalizeFixedPoint(fixedPointRatio);
  return pointRotateRads(
    pointFrom(
      element.x + element.width * fixedX,
      element.y + element.height * fixedY
    ),
    pointFrom(
      element.x + element.width / 2,
      element.y + element.height / 2
    ),
    element.angle
  );
};
var getGlobalFixedPoints = (arrow, elementsMap) => {
  const startElement = arrow.startBinding && elementsMap.get(arrow.startBinding.elementId);
  const endElement = arrow.endBinding && elementsMap.get(arrow.endBinding.elementId);
  const startPoint = startElement && arrow.startBinding ? getGlobalFixedPointForBindableElement(
    arrow.startBinding.fixedPoint,
    startElement
  ) : pointFrom(
    arrow.x + arrow.points[0][0],
    arrow.y + arrow.points[0][1]
  );
  const endPoint = endElement && arrow.endBinding ? getGlobalFixedPointForBindableElement(
    arrow.endBinding.fixedPoint,
    endElement
  ) : pointFrom(
    arrow.x + arrow.points[arrow.points.length - 1][0],
    arrow.y + arrow.points[arrow.points.length - 1][1]
  );
  return [startPoint, endPoint];
};
var getArrowLocalFixedPoints = (arrow, elementsMap) => {
  const [startPoint, endPoint] = getGlobalFixedPoints(arrow, elementsMap);
  return [
    LinearElementEditor.pointFromAbsoluteCoords(arrow, startPoint, elementsMap),
    LinearElementEditor.pointFromAbsoluteCoords(arrow, endPoint, elementsMap)
  ];
};
var normalizeFixedPoint = (fixedPoint) => {
  if (fixedPoint && (Math.abs(fixedPoint[0] - 0.5) < 1e-4 || Math.abs(fixedPoint[1] - 0.5) < 1e-4)) {
    return fixedPoint.map(
      (ratio) => Math.abs(ratio - 0.5) < 1e-4 ? 0.5001 : ratio
    );
  }
  return fixedPoint;
};

// ../element/src/elbowArrow.ts
var DEDUP_TRESHOLD = 1;
var BASE_PADDING = 40;
var handleSegmentRenormalization = (arrow, elementsMap) => {
  const nextFixedSegments = arrow.fixedSegments ? arrow.fixedSegments.slice() : null;
  if (nextFixedSegments) {
    const _nextPoints = [];
    arrow.points.map((p) => pointFrom(arrow.x + p[0], arrow.y + p[1])).forEach((p, i, points) => {
      if (i < 2) {
        return _nextPoints.push(p);
      }
      const currentSegmentIsHorizontal = headingForPoint(p, points[i - 1]);
      const prevSegmentIsHorizontal = headingForPoint(
        points[i - 1],
        points[i - 2]
      );
      if (
        // Check if previous two points are on the same line
        compareHeading(currentSegmentIsHorizontal, prevSegmentIsHorizontal)
      ) {
        const prevSegmentIdx = nextFixedSegments?.findIndex(
          (segment) => segment.index === i - 1
        ) ?? -1;
        const segmentIdx = nextFixedSegments?.findIndex((segment) => segment.index === i) ?? -1;
        if (segmentIdx !== -1) {
          nextFixedSegments[segmentIdx].start = pointFrom(
            points[i - 2][0] - arrow.x,
            points[i - 2][1] - arrow.y
          );
        }
        if (prevSegmentIdx !== -1) {
          nextFixedSegments.splice(prevSegmentIdx, 1);
        }
        _nextPoints.splice(-1, 1);
        nextFixedSegments.forEach((segment) => {
          if (segment.index > i - 1) {
            segment.index -= 1;
          }
        });
      }
      return _nextPoints.push(p);
    });
    const nextPoints = [];
    _nextPoints.forEach((p, i, points) => {
      if (i < 3) {
        return nextPoints.push(p);
      }
      if (
        // Remove segments that are too short
        pointDistance(points[i - 2], points[i - 1]) < DEDUP_TRESHOLD
      ) {
        const prevPrevSegmentIdx = nextFixedSegments?.findIndex((segment) => segment.index === i - 2) ?? -1;
        const prevSegmentIdx = nextFixedSegments?.findIndex((segment) => segment.index === i - 1) ?? -1;
        if (prevSegmentIdx !== -1) {
          nextFixedSegments.splice(prevSegmentIdx, 1);
        }
        if (prevPrevSegmentIdx !== -1) {
          nextFixedSegments.splice(prevPrevSegmentIdx, 1);
        }
        nextPoints.splice(-2, 2);
        nextFixedSegments.forEach((segment) => {
          if (segment.index > i - 2) {
            segment.index -= 2;
          }
        });
        const isHorizontal = headingForPointIsHorizontal(p, points[i - 1]);
        return nextPoints.push(
          pointFrom(
            !isHorizontal ? points[i - 2][0] : p[0],
            isHorizontal ? points[i - 2][1] : p[1]
          )
        );
      }
      nextPoints.push(p);
    });
    const filteredNextFixedSegments = nextFixedSegments.filter(
      (segment) => segment.index !== 1 && segment.index !== nextPoints.length - 1
    );
    if (filteredNextFixedSegments.length === 0) {
      return normalizeArrowElementUpdate(
        getElbowArrowCornerPoints(
          removeElbowArrowShortSegments(
            routeElbowArrow(
              arrow,
              getElbowArrowData(
                arrow,
                elementsMap,
                nextPoints.map(
                  (p) => pointFrom(p[0] - arrow.x, p[1] - arrow.y)
                )
              )
            ) ?? []
          )
        ),
        filteredNextFixedSegments,
        null,
        null
      );
    }
    isDevEnv() && invariant(
      validateElbowPoints(nextPoints),
      "Invalid elbow points with fixed segments"
    );
    return normalizeArrowElementUpdate(
      nextPoints,
      filteredNextFixedSegments,
      arrow.startIsSpecial,
      arrow.endIsSpecial
    );
  }
  return {
    x: arrow.x,
    y: arrow.y,
    points: arrow.points,
    fixedSegments: arrow.fixedSegments,
    startIsSpecial: arrow.startIsSpecial,
    endIsSpecial: arrow.endIsSpecial
  };
};
var handleSegmentRelease = (arrow, fixedSegments, elementsMap) => {
  const newFixedSegmentIndices = fixedSegments.map((segment) => segment.index);
  const oldFixedSegmentIndices = arrow.fixedSegments?.map((segment) => segment.index) ?? [];
  const deletedSegmentIdx = oldFixedSegmentIndices.findIndex(
    (idx) => !newFixedSegmentIndices.includes(idx)
  );
  if (deletedSegmentIdx === -1 || !arrow.fixedSegments?.[deletedSegmentIdx]) {
    return {
      points: arrow.points
    };
  }
  const deletedIdx = arrow.fixedSegments[deletedSegmentIdx].index;
  const prevSegment = arrow.fixedSegments[deletedSegmentIdx - 1];
  const nextSegment = arrow.fixedSegments[deletedSegmentIdx + 1];
  const x = arrow.x + (prevSegment ? prevSegment.end[0] : 0);
  const y = arrow.y + (prevSegment ? prevSegment.end[1] : 0);
  const startBinding = prevSegment ? null : arrow.startBinding;
  const endBinding = nextSegment ? null : arrow.endBinding;
  const {
    startHeading,
    endHeading,
    startGlobalPoint,
    endGlobalPoint,
    hoveredStartElement,
    hoveredEndElement,
    ...rest
  } = getElbowArrowData(
    {
      x,
      y,
      startBinding,
      endBinding,
      startArrowhead: null,
      endArrowhead: null,
      points: arrow.points
    },
    elementsMap,
    [
      pointFrom(0, 0),
      pointFrom(
        arrow.x + (nextSegment?.start[0] ?? arrow.points[arrow.points.length - 1][0]) - x,
        arrow.y + (nextSegment?.start[1] ?? arrow.points[arrow.points.length - 1][1]) - y
      )
    ],
    { isDragging: false }
  );
  const { points: restoredPoints } = normalizeArrowElementUpdate(
    getElbowArrowCornerPoints(
      removeElbowArrowShortSegments(
        routeElbowArrow(arrow, {
          startHeading,
          endHeading,
          startGlobalPoint,
          endGlobalPoint,
          hoveredStartElement,
          hoveredEndElement,
          ...rest
        }) ?? []
      )
    ),
    fixedSegments,
    null,
    null
  );
  const nextPoints = [];
  if (prevSegment) {
    for (let i = 0; i < prevSegment.index; i++) {
      nextPoints.push(
        pointFrom(
          arrow.x + arrow.points[i][0],
          arrow.y + arrow.points[i][1]
        )
      );
    }
  }
  restoredPoints.forEach((p) => {
    nextPoints.push(
      pointFrom(
        arrow.x + (prevSegment ? prevSegment.end[0] : 0) + p[0],
        arrow.y + (prevSegment ? prevSegment.end[1] : 0) + p[1]
      )
    );
  });
  if (nextSegment) {
    for (let i = nextSegment.index; i < arrow.points.length; i++) {
      nextPoints.push(
        pointFrom(
          arrow.x + arrow.points[i][0],
          arrow.y + arrow.points[i][1]
        )
      );
    }
  }
  const originalSegmentCountDiff = (nextSegment?.index ?? arrow.points.length) - (prevSegment?.index ?? 0) - 1;
  const nextFixedSegments = fixedSegments.map((segment) => {
    if (segment.index > deletedIdx) {
      return {
        ...segment,
        index: segment.index - originalSegmentCountDiff + (restoredPoints.length - 1)
      };
    }
    return segment;
  });
  const simplifiedPoints = nextPoints.flatMap((p, i) => {
    const prev = nextPoints[i - 1];
    const next = nextPoints[i + 1];
    if (prev && next) {
      const prevHeading = headingForPoint(p, prev);
      const nextHeading = headingForPoint(next, p);
      if (compareHeading(prevHeading, nextHeading)) {
        nextFixedSegments.forEach((segment) => {
          if (segment.index > i) {
            segment.index -= 1;
          }
        });
        return [];
      } else if (compareHeading(prevHeading, flipHeading(nextHeading))) {
        nextFixedSegments.forEach((segment) => {
          if (segment.index > i) {
            segment.index += 1;
          }
        });
        return [p, p];
      }
    }
    return [p];
  });
  return normalizeArrowElementUpdate(
    simplifiedPoints,
    nextFixedSegments,
    false,
    false
  );
};
var handleSegmentMove = (arrow, fixedSegments, startHeading, endHeading, hoveredStartElement, hoveredEndElement) => {
  const activelyModifiedSegmentIdx = fixedSegments.map((segment, i) => {
    if (arrow.fixedSegments == null || arrow.fixedSegments[i] === void 0 || arrow.fixedSegments[i].index !== segment.index) {
      return i;
    }
    return (segment.start[0] !== arrow.fixedSegments[i].start[0] && segment.end[0] !== arrow.fixedSegments[i].end[0]) !== (segment.start[1] !== arrow.fixedSegments[i].start[1] && segment.end[1] !== arrow.fixedSegments[i].end[1]) ? i : null;
  }).filter((idx) => idx !== null).shift();
  if (activelyModifiedSegmentIdx == null) {
    return { points: arrow.points };
  }
  const firstSegmentIdx = arrow.fixedSegments?.findIndex((segment) => segment.index === 1) ?? -1;
  const lastSegmentIdx = arrow.fixedSegments?.findIndex(
    (segment) => segment.index === arrow.points.length - 1
  ) ?? -1;
  const segmentLength = pointDistance(
    fixedSegments[activelyModifiedSegmentIdx].start,
    fixedSegments[activelyModifiedSegmentIdx].end
  );
  const segmentIsTooShort = segmentLength < BASE_PADDING + 5;
  if (firstSegmentIdx === -1 && fixedSegments[activelyModifiedSegmentIdx].index === 1 && hoveredStartElement) {
    const startIsHorizontal = headingIsHorizontal(startHeading);
    const startIsPositive = startIsHorizontal ? compareHeading(startHeading, HEADING_RIGHT) : compareHeading(startHeading, HEADING_DOWN);
    const padding = startIsPositive ? segmentIsTooShort ? segmentLength / 2 : BASE_PADDING : segmentIsTooShort ? -segmentLength / 2 : -BASE_PADDING;
    fixedSegments[activelyModifiedSegmentIdx].start = pointFrom(
      fixedSegments[activelyModifiedSegmentIdx].start[0] + (startIsHorizontal ? padding : 0),
      fixedSegments[activelyModifiedSegmentIdx].start[1] + (!startIsHorizontal ? padding : 0)
    );
  }
  if (lastSegmentIdx === -1 && fixedSegments[activelyModifiedSegmentIdx].index === arrow.points.length - 1 && hoveredEndElement) {
    const endIsHorizontal = headingIsHorizontal(endHeading);
    const endIsPositive = endIsHorizontal ? compareHeading(endHeading, HEADING_RIGHT) : compareHeading(endHeading, HEADING_DOWN);
    const padding = endIsPositive ? segmentIsTooShort ? segmentLength / 2 : BASE_PADDING : segmentIsTooShort ? -segmentLength / 2 : -BASE_PADDING;
    fixedSegments[activelyModifiedSegmentIdx].end = pointFrom(
      fixedSegments[activelyModifiedSegmentIdx].end[0] + (endIsHorizontal ? padding : 0),
      fixedSegments[activelyModifiedSegmentIdx].end[1] + (!endIsHorizontal ? padding : 0)
    );
  }
  const nextFixedSegments = fixedSegments.map((segment) => ({
    ...segment,
    start: pointFrom(
      arrow.x + segment.start[0],
      arrow.y + segment.start[1]
    ),
    end: pointFrom(
      arrow.x + segment.end[0],
      arrow.y + segment.end[1]
    )
  }));
  const newPoints = arrow.points.map(
    (p, i) => pointFrom(arrow.x + p[0], arrow.y + p[1])
  );
  const startIdx = nextFixedSegments[activelyModifiedSegmentIdx].index - 1;
  const endIdx = nextFixedSegments[activelyModifiedSegmentIdx].index;
  const start = nextFixedSegments[activelyModifiedSegmentIdx].start;
  const end = nextFixedSegments[activelyModifiedSegmentIdx].end;
  const prevSegmentIsHorizontal = newPoints[startIdx - 1] && !pointsEqual(newPoints[startIdx], newPoints[startIdx - 1]) ? headingForPointIsHorizontal(
    newPoints[startIdx - 1],
    newPoints[startIdx]
  ) : void 0;
  const nextSegmentIsHorizontal = newPoints[endIdx + 1] && !pointsEqual(newPoints[endIdx], newPoints[endIdx + 1]) ? headingForPointIsHorizontal(newPoints[endIdx + 1], newPoints[endIdx]) : void 0;
  if (prevSegmentIsHorizontal !== void 0) {
    const dir = prevSegmentIsHorizontal ? 1 : 0;
    newPoints[startIdx - 1][dir] = start[dir];
  }
  newPoints[startIdx] = start;
  newPoints[endIdx] = end;
  if (nextSegmentIsHorizontal !== void 0) {
    const dir = nextSegmentIsHorizontal ? 1 : 0;
    newPoints[endIdx + 1][dir] = end[dir];
  }
  const prevSegmentIdx = nextFixedSegments.findIndex(
    (segment) => segment.index === startIdx
  );
  if (prevSegmentIdx !== -1) {
    const dir = headingForPointIsHorizontal(
      nextFixedSegments[prevSegmentIdx].end,
      nextFixedSegments[prevSegmentIdx].start
    ) ? 1 : 0;
    nextFixedSegments[prevSegmentIdx].start[dir] = start[dir];
    nextFixedSegments[prevSegmentIdx].end = start;
  }
  const nextSegmentIdx = nextFixedSegments.findIndex(
    (segment) => segment.index === endIdx + 1
  );
  if (nextSegmentIdx !== -1) {
    const dir = headingForPointIsHorizontal(
      nextFixedSegments[nextSegmentIdx].end,
      nextFixedSegments[nextSegmentIdx].start
    ) ? 1 : 0;
    nextFixedSegments[nextSegmentIdx].end[dir] = end[dir];
    nextFixedSegments[nextSegmentIdx].start = end;
  }
  if (firstSegmentIdx === -1 && startIdx === 0) {
    const startIsHorizontal = hoveredStartElement ? headingIsHorizontal(startHeading) : headingForPointIsHorizontal(newPoints[1], newPoints[0]);
    newPoints.unshift(
      pointFrom(
        startIsHorizontal ? start[0] : arrow.x + arrow.points[0][0],
        !startIsHorizontal ? start[1] : arrow.y + arrow.points[0][1]
      )
    );
    if (hoveredStartElement) {
      newPoints.unshift(
        pointFrom(
          arrow.x + arrow.points[0][0],
          arrow.y + arrow.points[0][1]
        )
      );
    }
    for (const segment of nextFixedSegments) {
      segment.index += hoveredStartElement ? 2 : 1;
    }
  }
  if (lastSegmentIdx === -1 && endIdx === arrow.points.length - 1) {
    const endIsHorizontal = headingIsHorizontal(endHeading);
    newPoints.push(
      pointFrom(
        endIsHorizontal ? end[0] : arrow.x + arrow.points[arrow.points.length - 1][0],
        !endIsHorizontal ? end[1] : arrow.y + arrow.points[arrow.points.length - 1][1]
      )
    );
    if (hoveredEndElement) {
      newPoints.push(
        pointFrom(
          arrow.x + arrow.points[arrow.points.length - 1][0],
          arrow.y + arrow.points[arrow.points.length - 1][1]
        )
      );
    }
  }
  return normalizeArrowElementUpdate(
    newPoints,
    nextFixedSegments.map((segment) => ({
      ...segment,
      start: pointFrom(
        segment.start[0] - arrow.x,
        segment.start[1] - arrow.y
      ),
      end: pointFrom(
        segment.end[0] - arrow.x,
        segment.end[1] - arrow.y
      )
    })),
    false,
    // If you move a segment, there is no special point anymore
    false
    // If you move a segment, there is no special point anymore
  );
};
var handleEndpointDrag = (arrow, updatedPoints, fixedSegments, startHeading, endHeading, startGlobalPoint, endGlobalPoint, hoveredStartElement, hoveredEndElement) => {
  let startIsSpecial = arrow.startIsSpecial ?? null;
  let endIsSpecial = arrow.endIsSpecial ?? null;
  const globalUpdatedPoints = updatedPoints.map(
    (p, i) => i === 0 ? pointFrom(arrow.x + p[0], arrow.y + p[1]) : i === updatedPoints.length - 1 ? pointFrom(arrow.x + p[0], arrow.y + p[1]) : pointFrom(
      arrow.x + arrow.points[i][0],
      arrow.y + arrow.points[i][1]
    )
  );
  const nextFixedSegments = fixedSegments.map((segment) => ({
    ...segment,
    start: pointFrom(
      arrow.x + (segment.start[0] - updatedPoints[0][0]),
      arrow.y + (segment.start[1] - updatedPoints[0][1])
    ),
    end: pointFrom(
      arrow.x + (segment.end[0] - updatedPoints[0][0]),
      arrow.y + (segment.end[1] - updatedPoints[0][1])
    )
  }));
  const newPoints = [];
  const offset = 2 + (startIsSpecial ? 1 : 0);
  const endOffset = 2 + (endIsSpecial ? 1 : 0);
  while (newPoints.length + offset < globalUpdatedPoints.length - endOffset) {
    newPoints.push(globalUpdatedPoints[newPoints.length + offset]);
  }
  {
    const secondPoint = globalUpdatedPoints[startIsSpecial ? 2 : 1];
    const thirdPoint = globalUpdatedPoints[startIsSpecial ? 3 : 2];
    const startIsHorizontal = headingIsHorizontal(startHeading);
    const secondIsHorizontal = headingIsHorizontal(
      vectorToHeading(vectorFromPoint(secondPoint, thirdPoint))
    );
    if (hoveredStartElement && startIsHorizontal === secondIsHorizontal) {
      const positive = startIsHorizontal ? compareHeading(startHeading, HEADING_RIGHT) : compareHeading(startHeading, HEADING_DOWN);
      newPoints.unshift(
        pointFrom(
          !secondIsHorizontal ? thirdPoint[0] : startGlobalPoint[0] + (positive ? BASE_PADDING : -BASE_PADDING),
          secondIsHorizontal ? thirdPoint[1] : startGlobalPoint[1] + (positive ? BASE_PADDING : -BASE_PADDING)
        )
      );
      newPoints.unshift(
        pointFrom(
          startIsHorizontal ? startGlobalPoint[0] + (positive ? BASE_PADDING : -BASE_PADDING) : startGlobalPoint[0],
          !startIsHorizontal ? startGlobalPoint[1] + (positive ? BASE_PADDING : -BASE_PADDING) : startGlobalPoint[1]
        )
      );
      if (!startIsSpecial) {
        startIsSpecial = true;
        for (const segment of nextFixedSegments) {
          if (segment.index > 1) {
            segment.index += 1;
          }
        }
      }
    } else {
      newPoints.unshift(
        pointFrom(
          !secondIsHorizontal ? secondPoint[0] : startGlobalPoint[0],
          secondIsHorizontal ? secondPoint[1] : startGlobalPoint[1]
        )
      );
      if (startIsSpecial) {
        startIsSpecial = false;
        for (const segment of nextFixedSegments) {
          if (segment.index > 1) {
            segment.index -= 1;
          }
        }
      }
    }
    newPoints.unshift(startGlobalPoint);
  }
  {
    const secondToLastPoint = globalUpdatedPoints[globalUpdatedPoints.length - (endIsSpecial ? 3 : 2)];
    const thirdToLastPoint = globalUpdatedPoints[globalUpdatedPoints.length - (endIsSpecial ? 4 : 3)];
    const endIsHorizontal = headingIsHorizontal(endHeading);
    const secondIsHorizontal = headingForPointIsHorizontal(
      thirdToLastPoint,
      secondToLastPoint
    );
    if (hoveredEndElement && endIsHorizontal === secondIsHorizontal) {
      const positive = endIsHorizontal ? compareHeading(endHeading, HEADING_RIGHT) : compareHeading(endHeading, HEADING_DOWN);
      newPoints.push(
        pointFrom(
          !secondIsHorizontal ? thirdToLastPoint[0] : endGlobalPoint[0] + (positive ? BASE_PADDING : -BASE_PADDING),
          secondIsHorizontal ? thirdToLastPoint[1] : endGlobalPoint[1] + (positive ? BASE_PADDING : -BASE_PADDING)
        )
      );
      newPoints.push(
        pointFrom(
          endIsHorizontal ? endGlobalPoint[0] + (positive ? BASE_PADDING : -BASE_PADDING) : endGlobalPoint[0],
          !endIsHorizontal ? endGlobalPoint[1] + (positive ? BASE_PADDING : -BASE_PADDING) : endGlobalPoint[1]
        )
      );
      if (!endIsSpecial) {
        endIsSpecial = true;
      }
    } else {
      newPoints.push(
        pointFrom(
          !secondIsHorizontal ? secondToLastPoint[0] : endGlobalPoint[0],
          secondIsHorizontal ? secondToLastPoint[1] : endGlobalPoint[1]
        )
      );
      if (endIsSpecial) {
        endIsSpecial = false;
      }
    }
  }
  newPoints.push(endGlobalPoint);
  return normalizeArrowElementUpdate(
    newPoints,
    nextFixedSegments.map(({ index }) => ({
      index,
      start: newPoints[index - 1],
      end: newPoints[index]
    })).map((segment) => ({
      ...segment,
      start: pointFrom(
        segment.start[0] - startGlobalPoint[0],
        segment.start[1] - startGlobalPoint[1]
      ),
      end: pointFrom(
        segment.end[0] - startGlobalPoint[0],
        segment.end[1] - startGlobalPoint[1]
      )
    })),
    startIsSpecial,
    endIsSpecial
  );
};
var MAX_POS = 1e6;
var updateElbowArrowPoints = (arrow, elementsMap, updates, options) => {
  if (arrow.points.length < 2) {
    return { points: updates.points ?? arrow.points };
  }
  if (arrow.x < -MAX_POS || arrow.x > MAX_POS || arrow.y < -MAX_POS || arrow.y > MAX_POS || arrow.x + (updates?.points?.[updates?.points?.length - 1]?.[0] ?? 0) < -MAX_POS || arrow.x + (updates?.points?.[updates?.points?.length - 1]?.[0] ?? 0) > MAX_POS || arrow.y + (updates?.points?.[updates?.points?.length - 1]?.[1] ?? 0) < -MAX_POS || arrow.y + (updates?.points?.[updates?.points?.length - 1]?.[1] ?? 0) > MAX_POS || arrow.x + (arrow?.points?.[arrow?.points?.length - 1]?.[0] ?? 0) < -MAX_POS || arrow.x + (arrow?.points?.[arrow?.points?.length - 1]?.[0] ?? 0) > MAX_POS || arrow.y + (arrow?.points?.[arrow?.points?.length - 1]?.[1] ?? 0) < -MAX_POS || arrow.y + (arrow?.points?.[arrow?.points?.length - 1]?.[1] ?? 0) > MAX_POS) {
    console.error(
      "Elbow arrow (or update) is outside reasonable bounds (> 1e6)",
      {
        arrow,
        updates
      }
    );
  }
  arrow.x = clamp(arrow.x, -MAX_POS, MAX_POS);
  arrow.y = clamp(arrow.y, -MAX_POS, MAX_POS);
  if (updates.points) {
    updates.points = updates.points.map(
      ([x, y]) => pointFrom(
        clamp(x, -MAX_POS, MAX_POS),
        clamp(y, -MAX_POS, MAX_POS)
      )
    );
  }
  if (!define_import_meta_env_default.PROD) {
    invariant(
      !updates.points || updates.points.length >= 2,
      "Updated point array length must match the arrow point length, contain exactly the new start and end points or not be specified at all (i.e. you can't add new points between start and end manually to elbow arrows)"
    );
    invariant(
      !arrow.fixedSegments || arrow.fixedSegments.map((s) => s.start[0] === s.end[0] || s.start[1] === s.end[1]).every(Boolean),
      "Fixed segments must be either horizontal or vertical"
    );
    invariant(
      !updates.fixedSegments || updates.fixedSegments.map((s) => s.start[0] === s.end[0] || s.start[1] === s.end[1]).every(Boolean),
      "Updates to fixed segments must be either horizontal or vertical"
    );
    invariant(
      arrow.points.slice(1).map(
        (p, i) => p[0] === arrow.points[i][0] || p[1] === arrow.points[i][1]
      ),
      "Elbow arrow segments must be either horizontal or vertical"
    );
  }
  const fixedSegments = updates.fixedSegments ?? arrow.fixedSegments ?? [];
  const updatedPoints = updates.points ? updates.points && updates.points.length === 2 ? arrow.points.map(
    (p, idx) => idx === 0 ? updates.points[0] : idx === arrow.points.length - 1 ? updates.points[1] : p
  ) : updates.points.slice() : arrow.points.slice();
  const {
    startBinding: updatedStartBinding,
    endBinding: updatedEndBinding,
    ...restOfTheUpdates
  } = updates;
  const startBinding = typeof updatedStartBinding !== "undefined" ? updatedStartBinding : arrow.startBinding;
  const endBinding = typeof updatedEndBinding !== "undefined" ? updatedEndBinding : arrow.endBinding;
  const startElement = startBinding && getBindableElementForId(startBinding.elementId, elementsMap);
  const endElement = endBinding && getBindableElementForId(endBinding.elementId, elementsMap);
  const areUpdatedPointsValid = validateElbowPoints(updatedPoints);
  if (startBinding && !startElement && areUpdatedPointsValid || endBinding && !endElement && areUpdatedPointsValid || elementsMap.size === 0 && areUpdatedPointsValid || Object.keys(restOfTheUpdates).length === 0 && (startElement?.id !== startBinding?.elementId || endElement?.id !== endBinding?.elementId)) {
    return normalizeArrowElementUpdate(
      updatedPoints.map(
        (p) => pointFrom(arrow.x + p[0], arrow.y + p[1])
      ),
      arrow.fixedSegments,
      arrow.startIsSpecial,
      arrow.endIsSpecial
    );
  }
  const {
    startHeading,
    endHeading,
    startGlobalPoint,
    endGlobalPoint,
    hoveredStartElement,
    hoveredEndElement,
    ...rest
  } = getElbowArrowData(
    {
      x: arrow.x,
      y: arrow.y,
      startBinding,
      endBinding,
      startArrowhead: arrow.startArrowhead,
      endArrowhead: arrow.endArrowhead,
      points: arrow.points
    },
    elementsMap,
    updatedPoints,
    options
  );
  if (elementsMap.size === 0 && areUpdatedPointsValid) {
    return normalizeArrowElementUpdate(
      updatedPoints.map(
        (p) => pointFrom(arrow.x + p[0], arrow.y + p[1])
      ),
      arrow.fixedSegments,
      arrow.startIsSpecial,
      arrow.endIsSpecial
    );
  }
  if (!updates.points && !updates.fixedSegments && !updates.startBinding && !updates.endBinding) {
    return handleSegmentRenormalization(arrow, elementsMap);
  }
  if (updates.startBinding === arrow.startBinding && updates.endBinding === arrow.endBinding && (updates.points ?? []).every(
    (p, i) => pointsEqual(
      p,
      arrow.points[i] ?? pointFrom(Infinity, Infinity)
    )
  ) && areUpdatedPointsValid) {
    return {};
  }
  if (fixedSegments.length === 0) {
    return normalizeArrowElementUpdate(
      getElbowArrowCornerPoints(
        removeElbowArrowShortSegments(
          routeElbowArrow(arrow, {
            startHeading,
            endHeading,
            startGlobalPoint,
            endGlobalPoint,
            hoveredStartElement,
            hoveredEndElement,
            ...rest
          }) ?? []
        )
      ),
      fixedSegments,
      null,
      null
    );
  }
  if ((arrow.fixedSegments?.length ?? 0) > fixedSegments.length) {
    return handleSegmentRelease(arrow, fixedSegments, elementsMap);
  }
  if (!updates.points) {
    return handleSegmentMove(
      arrow,
      fixedSegments,
      startHeading,
      endHeading,
      hoveredStartElement,
      hoveredEndElement
    );
  }
  if (updates.points && updates.fixedSegments) {
    return updates;
  }
  return handleEndpointDrag(
    arrow,
    updatedPoints,
    fixedSegments,
    startHeading,
    endHeading,
    startGlobalPoint,
    endGlobalPoint,
    hoveredStartElement,
    hoveredEndElement
  );
};
var getElbowArrowData = (arrow, elementsMap, nextPoints, options) => {
  const origStartGlobalPoint = pointTranslate(nextPoints[0], vector(arrow.x, arrow.y));
  const origEndGlobalPoint = pointTranslate(nextPoints[nextPoints.length - 1], vector(arrow.x, arrow.y));
  let hoveredStartElement = null;
  let hoveredEndElement = null;
  if (options?.isDragging) {
    const elements = Array.from(elementsMap.values());
    hoveredStartElement = getHoveredElement(
      origStartGlobalPoint,
      elementsMap,
      elements,
      options?.zoom
    ) || null;
    hoveredEndElement = getHoveredElement(
      origEndGlobalPoint,
      elementsMap,
      elements,
      options?.zoom
    ) || null;
  } else {
    hoveredStartElement = arrow.startBinding ? getBindableElementForId(arrow.startBinding.elementId, elementsMap) || null : null;
    hoveredEndElement = arrow.endBinding ? getBindableElementForId(arrow.endBinding.elementId, elementsMap) || null : null;
  }
  const startGlobalPoint = getGlobalPoint(
    {
      ...arrow,
      type: "arrow",
      elbowed: true,
      points: nextPoints
    },
    "start",
    arrow.startBinding?.fixedPoint,
    origStartGlobalPoint,
    hoveredStartElement,
    options?.isDragging
  );
  const endGlobalPoint = getGlobalPoint(
    {
      ...arrow,
      type: "arrow",
      elbowed: true,
      points: nextPoints
    },
    "end",
    arrow.endBinding?.fixedPoint,
    origEndGlobalPoint,
    hoveredEndElement,
    options?.isDragging
  );
  const startHeading = getBindPointHeading(
    startGlobalPoint,
    endGlobalPoint,
    elementsMap,
    hoveredStartElement,
    origStartGlobalPoint
  );
  const endHeading = getBindPointHeading(
    endGlobalPoint,
    startGlobalPoint,
    elementsMap,
    hoveredEndElement,
    origEndGlobalPoint
  );
  const startPointBounds = [
    startGlobalPoint[0] - 2,
    startGlobalPoint[1] - 2,
    startGlobalPoint[0] + 2,
    startGlobalPoint[1] + 2
  ];
  const endPointBounds = [
    endGlobalPoint[0] - 2,
    endGlobalPoint[1] - 2,
    endGlobalPoint[0] + 2,
    endGlobalPoint[1] + 2
  ];
  const startElementBounds = hoveredStartElement ? aabbForElement(
    hoveredStartElement,
    offsetFromHeading(
      startHeading,
      arrow.startArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2,
      1
    )
  ) : startPointBounds;
  const endElementBounds = hoveredEndElement ? aabbForElement(
    hoveredEndElement,
    offsetFromHeading(
      endHeading,
      arrow.endArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2,
      1
    )
  ) : endPointBounds;
  const boundsOverlap = pointInsideBounds(
    startGlobalPoint,
    hoveredEndElement ? aabbForElement(
      hoveredEndElement,
      offsetFromHeading(endHeading, BASE_PADDING, BASE_PADDING)
    ) : endPointBounds
  ) || pointInsideBounds(
    endGlobalPoint,
    hoveredStartElement ? aabbForElement(
      hoveredStartElement,
      offsetFromHeading(startHeading, BASE_PADDING, BASE_PADDING)
    ) : startPointBounds
  );
  const commonBounds = commonAABB(
    boundsOverlap ? [startPointBounds, endPointBounds] : [startElementBounds, endElementBounds]
  );
  const dynamicAABBs = generateDynamicAABBs(
    boundsOverlap ? startPointBounds : startElementBounds,
    boundsOverlap ? endPointBounds : endElementBounds,
    commonBounds,
    boundsOverlap ? offsetFromHeading(
      startHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING,
      0
    ) : offsetFromHeading(
      startHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING - (arrow.startArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2),
      BASE_PADDING
    ),
    boundsOverlap ? offsetFromHeading(
      endHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING,
      0
    ) : offsetFromHeading(
      endHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING - (arrow.endArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2),
      BASE_PADDING
    ),
    boundsOverlap,
    hoveredStartElement && aabbForElement(hoveredStartElement),
    hoveredEndElement && aabbForElement(hoveredEndElement)
  );
  const startDonglePosition = getDonglePosition(
    dynamicAABBs[0],
    startHeading,
    startGlobalPoint
  );
  const endDonglePosition = getDonglePosition(
    dynamicAABBs[1],
    endHeading,
    endGlobalPoint
  );
  return {
    dynamicAABBs,
    startDonglePosition,
    startGlobalPoint,
    startHeading,
    endDonglePosition,
    endGlobalPoint,
    endHeading,
    commonBounds,
    hoveredStartElement,
    hoveredEndElement,
    boundsOverlap,
    startElementBounds,
    endElementBounds
  };
};
var routeElbowArrow = (arrow, elbowArrowData) => {
  const {
    dynamicAABBs,
    startDonglePosition,
    startGlobalPoint,
    startHeading,
    endDonglePosition,
    endGlobalPoint,
    endHeading,
    commonBounds,
    hoveredEndElement
  } = elbowArrowData;
  const grid = calculateGrid(
    dynamicAABBs,
    startDonglePosition ? startDonglePosition : startGlobalPoint,
    startHeading,
    endDonglePosition ? endDonglePosition : endGlobalPoint,
    endHeading,
    commonBounds
  );
  const startDongle = startDonglePosition && pointToGridNode(startDonglePosition, grid);
  const endDongle = endDonglePosition && pointToGridNode(endDonglePosition, grid);
  const endNode = pointToGridNode(endGlobalPoint, grid);
  if (endNode && hoveredEndElement) {
    endNode.closed = true;
  }
  const startNode = pointToGridNode(startGlobalPoint, grid);
  if (startNode && arrow.startBinding) {
    startNode.closed = true;
  }
  const dongleOverlap = startDongle && endDongle && (pointInsideBounds(startDongle.pos, dynamicAABBs[1]) || pointInsideBounds(endDongle.pos, dynamicAABBs[0]));
  const path = astar(
    startDongle ? startDongle : startNode,
    endDongle ? endDongle : endNode,
    grid,
    startHeading ? startHeading : HEADING_RIGHT,
    endHeading ? endHeading : HEADING_RIGHT,
    dongleOverlap ? [] : dynamicAABBs
  );
  if (path) {
    const points = path.map((node) => [
      node.pos[0],
      node.pos[1]
    ]);
    startDongle && points.unshift(startGlobalPoint);
    endDongle && points.push(endGlobalPoint);
    return points;
  }
  return null;
};
var offsetFromHeading = (heading, head, side) => {
  switch (heading) {
    case HEADING_UP:
      return [head, side, side, side];
    case HEADING_RIGHT:
      return [side, head, side, side];
    case HEADING_DOWN:
      return [side, side, head, side];
  }
  return [side, side, side, head];
};
var astar = (start, end, grid, startHeading, endHeading, aabbs) => {
  const bendMultiplier = m_dist(start.pos, end.pos);
  const open = new BinaryHeap((node) => node.f);
  open.push(start);
  while (open.size() > 0) {
    const current = open.pop();
    if (!current || current.closed) {
      continue;
    }
    if (current === end) {
      return pathTo(start, current);
    }
    current.closed = true;
    const neighbors = getNeighbors(current.addr, grid);
    for (let i = 0; i < 4; i++) {
      const neighbor = neighbors[i];
      if (!neighbor || neighbor.closed) {
        continue;
      }
      const neighborHalfPoint = pointScaleFromOrigin(
        neighbor.pos,
        current.pos,
        0.5
      );
      if (isAnyTrue(
        ...aabbs.map((aabb) => pointInsideBounds(neighborHalfPoint, aabb))
      )) {
        continue;
      }
      const neighborHeading = neighborIndexToHeading(i);
      const previousDirection = current.parent ? vectorToHeading(vectorFromPoint(current.pos, current.parent.pos)) : startHeading;
      const reverseHeading = flipHeading(previousDirection);
      const neighborIsReverseRoute = compareHeading(reverseHeading, neighborHeading) || gridAddressesEqual(start.addr, neighbor.addr) && compareHeading(neighborHeading, startHeading) || gridAddressesEqual(end.addr, neighbor.addr) && compareHeading(neighborHeading, endHeading);
      if (neighborIsReverseRoute) {
        continue;
      }
      const directionChange = previousDirection !== neighborHeading;
      const gScore = current.g + m_dist(neighbor.pos, current.pos) + (directionChange ? Math.pow(bendMultiplier, 3) : 0);
      const beenVisited = neighbor.visited;
      if (!beenVisited || gScore < neighbor.g) {
        const estBendCount = estimateSegmentCount(
          neighbor,
          end,
          neighborHeading,
          endHeading
        );
        neighbor.visited = true;
        neighbor.parent = current;
        neighbor.h = m_dist(end.pos, neighbor.pos) + estBendCount * Math.pow(bendMultiplier, 2);
        neighbor.g = gScore;
        neighbor.f = neighbor.g + neighbor.h;
        if (!beenVisited) {
          open.push(neighbor);
        } else {
          open.rescoreElement(neighbor);
        }
      }
    }
  }
  return null;
};
var pathTo = (start, node) => {
  let curr = node;
  const path = [];
  while (curr.parent) {
    path.unshift(curr);
    curr = curr.parent;
  }
  path.unshift(start);
  return path;
};
var m_dist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
var generateDynamicAABBs = (a, b, common, startDifference, endDifference, disableSideHack, startElementBounds, endElementBounds) => {
  const startEl = startElementBounds ?? a;
  const endEl = endElementBounds ?? b;
  const [startUp, startRight, startDown, startLeft] = startDifference ?? [
    0,
    0,
    0,
    0
  ];
  const [endUp, endRight, endDown, endLeft] = endDifference ?? [0, 0, 0, 0];
  const first = [
    a[0] > b[2] ? a[1] > b[3] || a[3] < b[1] ? Math.min((startEl[0] + endEl[2]) / 2, a[0] - startLeft) : (startEl[0] + endEl[2]) / 2 : a[0] > b[0] ? a[0] - startLeft : common[0] - startLeft,
    a[1] > b[3] ? a[0] > b[2] || a[2] < b[0] ? Math.min((startEl[1] + endEl[3]) / 2, a[1] - startUp) : (startEl[1] + endEl[3]) / 2 : a[1] > b[1] ? a[1] - startUp : common[1] - startUp,
    a[2] < b[0] ? a[1] > b[3] || a[3] < b[1] ? Math.max((startEl[2] + endEl[0]) / 2, a[2] + startRight) : (startEl[2] + endEl[0]) / 2 : a[2] < b[2] ? a[2] + startRight : common[2] + startRight,
    a[3] < b[1] ? a[0] > b[2] || a[2] < b[0] ? Math.max((startEl[3] + endEl[1]) / 2, a[3] + startDown) : (startEl[3] + endEl[1]) / 2 : a[3] < b[3] ? a[3] + startDown : common[3] + startDown
  ];
  const second = [
    b[0] > a[2] ? b[1] > a[3] || b[3] < a[1] ? Math.min((endEl[0] + startEl[2]) / 2, b[0] - endLeft) : (endEl[0] + startEl[2]) / 2 : b[0] > a[0] ? b[0] - endLeft : common[0] - endLeft,
    b[1] > a[3] ? b[0] > a[2] || b[2] < a[0] ? Math.min((endEl[1] + startEl[3]) / 2, b[1] - endUp) : (endEl[1] + startEl[3]) / 2 : b[1] > a[1] ? b[1] - endUp : common[1] - endUp,
    b[2] < a[0] ? b[1] > a[3] || b[3] < a[1] ? Math.max((endEl[2] + startEl[0]) / 2, b[2] + endRight) : (endEl[2] + startEl[0]) / 2 : b[2] < a[2] ? b[2] + endRight : common[2] + endRight,
    b[3] < a[1] ? b[0] > a[2] || b[2] < a[0] ? Math.max((endEl[3] + startEl[1]) / 2, b[3] + endDown) : (endEl[3] + startEl[1]) / 2 : b[3] < a[3] ? b[3] + endDown : common[3] + endDown
  ];
  const c = commonAABB([first, second]);
  if (!disableSideHack && first[2] - first[0] + second[2] - second[0] > c[2] - c[0] + 1e-11 && first[3] - first[1] + second[3] - second[1] > c[3] - c[1] + 1e-11) {
    const [endCenterX, endCenterY] = [
      (second[0] + second[2]) / 2,
      (second[1] + second[3]) / 2
    ];
    if (b[0] > a[2] && a[1] > b[3]) {
      const cX = first[2] + (second[0] - first[2]) / 2;
      const cY = second[3] + (first[1] - second[3]) / 2;
      if (vectorCross(
        vector(a[2] - endCenterX, a[1] - endCenterY),
        vector(a[0] - endCenterX, a[3] - endCenterY)
      ) > 0) {
        return [
          [first[0], first[1], cX, first[3]],
          [cX, second[1], second[2], second[3]]
        ];
      }
      return [
        [first[0], cY, first[2], first[3]],
        [second[0], second[1], second[2], cY]
      ];
    } else if (a[2] < b[0] && a[3] < b[1]) {
      const cX = first[2] + (second[0] - first[2]) / 2;
      const cY = first[3] + (second[1] - first[3]) / 2;
      if (vectorCross(
        vector(a[0] - endCenterX, a[1] - endCenterY),
        vector(a[2] - endCenterX, a[3] - endCenterY)
      ) > 0) {
        return [
          [first[0], first[1], first[2], cY],
          [second[0], cY, second[2], second[3]]
        ];
      }
      return [
        [first[0], first[1], cX, first[3]],
        [cX, second[1], second[2], second[3]]
      ];
    } else if (a[0] > b[2] && a[3] < b[1]) {
      const cX = second[2] + (first[0] - second[2]) / 2;
      const cY = first[3] + (second[1] - first[3]) / 2;
      if (vectorCross(
        vector(a[2] - endCenterX, a[1] - endCenterY),
        vector(a[0] - endCenterX, a[3] - endCenterY)
      ) > 0) {
        return [
          [cX, first[1], first[2], first[3]],
          [second[0], second[1], cX, second[3]]
        ];
      }
      return [
        [first[0], first[1], first[2], cY],
        [second[0], cY, second[2], second[3]]
      ];
    } else if (a[0] > b[2] && a[1] > b[3]) {
      const cX = second[2] + (first[0] - second[2]) / 2;
      const cY = second[3] + (first[1] - second[3]) / 2;
      if (vectorCross(
        vector(a[0] - endCenterX, a[1] - endCenterY),
        vector(a[2] - endCenterX, a[3] - endCenterY)
      ) > 0) {
        return [
          [cX, first[1], first[2], first[3]],
          [second[0], second[1], cX, second[3]]
        ];
      }
      return [
        [first[0], cY, first[2], first[3]],
        [second[0], second[1], second[2], cY]
      ];
    }
  }
  return [first, second];
};
var calculateGrid = (aabbs, start, startHeading, end, endHeading, common) => {
  const horizontal = /* @__PURE__ */ new Set();
  const vertical = /* @__PURE__ */ new Set();
  if (startHeading === HEADING_LEFT || startHeading === HEADING_RIGHT) {
    vertical.add(start[1]);
  } else {
    horizontal.add(start[0]);
  }
  if (endHeading === HEADING_LEFT || endHeading === HEADING_RIGHT) {
    vertical.add(end[1]);
  } else {
    horizontal.add(end[0]);
  }
  aabbs.forEach((aabb) => {
    horizontal.add(aabb[0]);
    horizontal.add(aabb[2]);
    vertical.add(aabb[1]);
    vertical.add(aabb[3]);
  });
  horizontal.add(common[0]);
  horizontal.add(common[2]);
  vertical.add(common[1]);
  vertical.add(common[3]);
  const _vertical = Array.from(vertical).sort((a, b) => a - b);
  const _horizontal = Array.from(horizontal).sort((a, b) => a - b);
  return {
    row: _vertical.length,
    col: _horizontal.length,
    data: _vertical.flatMap(
      (y, row) => _horizontal.map(
        (x, col) => ({
          f: 0,
          g: 0,
          h: 0,
          closed: false,
          visited: false,
          parent: null,
          addr: [col, row],
          pos: [x, y]
        })
      )
    )
  };
};
var getDonglePosition = (bounds, heading, p) => {
  switch (heading) {
    case HEADING_UP:
      return pointFrom(p[0], bounds[1]);
    case HEADING_RIGHT:
      return pointFrom(bounds[2], p[1]);
    case HEADING_DOWN:
      return pointFrom(p[0], bounds[3]);
  }
  return pointFrom(bounds[0], p[1]);
};
var estimateSegmentCount = (start, end, startHeading, endHeading) => {
  if (endHeading === HEADING_RIGHT) {
    switch (startHeading) {
      case HEADING_RIGHT: {
        if (start.pos[0] >= end.pos[0]) {
          return 4;
        }
        if (start.pos[1] === end.pos[1]) {
          return 0;
        }
        return 2;
      }
      case HEADING_UP:
        if (start.pos[1] > end.pos[1] && start.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_DOWN:
        if (start.pos[1] < end.pos[1] && start.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_LEFT:
        if (start.pos[1] === end.pos[1]) {
          return 4;
        }
        return 2;
    }
  } else if (endHeading === HEADING_LEFT) {
    switch (startHeading) {
      case HEADING_RIGHT:
        if (start.pos[1] === end.pos[1]) {
          return 4;
        }
        return 2;
      case HEADING_UP:
        if (start.pos[1] > end.pos[1] && start.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_DOWN:
        if (start.pos[1] < end.pos[1] && start.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_LEFT:
        if (start.pos[0] <= end.pos[0]) {
          return 4;
        }
        if (start.pos[1] === end.pos[1]) {
          return 0;
        }
        return 2;
    }
  } else if (endHeading === HEADING_UP) {
    switch (startHeading) {
      case HEADING_RIGHT:
        if (start.pos[1] > end.pos[1] && start.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_UP:
        if (start.pos[1] >= end.pos[1]) {
          return 4;
        }
        if (start.pos[0] === end.pos[0]) {
          return 0;
        }
        return 2;
      case HEADING_DOWN:
        if (start.pos[0] === end.pos[0]) {
          return 4;
        }
        return 2;
      case HEADING_LEFT:
        if (start.pos[1] > end.pos[1] && start.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
    }
  } else if (endHeading === HEADING_DOWN) {
    switch (startHeading) {
      case HEADING_RIGHT:
        if (start.pos[1] < end.pos[1] && start.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_UP:
        if (start.pos[0] === end.pos[0]) {
          return 4;
        }
        return 2;
      case HEADING_DOWN:
        if (start.pos[1] <= end.pos[1]) {
          return 4;
        }
        if (start.pos[0] === end.pos[0]) {
          return 0;
        }
        return 2;
      case HEADING_LEFT:
        if (start.pos[1] < end.pos[1] && start.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
    }
  }
  return 0;
};
var getNeighbors = ([col, row], grid) => [
  gridNodeFromAddr([col, row - 1], grid),
  gridNodeFromAddr([col + 1, row], grid),
  gridNodeFromAddr([col, row + 1], grid),
  gridNodeFromAddr([col - 1, row], grid)
];
var gridNodeFromAddr = ([col, row], grid) => {
  if (col < 0 || col >= grid.col || row < 0 || row >= grid.row) {
    return null;
  }
  return grid.data[row * grid.col + col] ?? null;
};
var pointToGridNode = (point, grid) => {
  for (let col = 0; col < grid.col; col++) {
    for (let row = 0; row < grid.row; row++) {
      const candidate = gridNodeFromAddr([col, row], grid);
      if (candidate && point[0] === candidate.pos[0] && point[1] === candidate.pos[1]) {
        return candidate;
      }
    }
  }
  return null;
};
var commonAABB = (aabbs) => [
  Math.min(...aabbs.map((aabb) => aabb[0])),
  Math.min(...aabbs.map((aabb) => aabb[1])),
  Math.max(...aabbs.map((aabb) => aabb[2])),
  Math.max(...aabbs.map((aabb) => aabb[3]))
];
var getBindableElementForId = (id, elementsMap) => {
  const element = elementsMap.get(id);
  if (element && isBindableElement(element)) {
    return element;
  }
  return null;
};
var normalizeArrowElementUpdate = (global, nextFixedSegments, startIsSpecial, endIsSpecial) => {
  const offsetX = global[0][0];
  const offsetY = global[0][1];
  let points = global.map(
    (p) => pointTranslate(
      p,
      vectorScale(vectorFromPoint(global[0]), -1)
    )
  );
  if (offsetX < -MAX_POS || offsetX > MAX_POS || offsetY < -MAX_POS || offsetY > MAX_POS || offsetX + points[points.length - 1][0] < -MAX_POS || offsetY + points[points.length - 1][0] > MAX_POS || offsetX + points[points.length - 1][1] < -MAX_POS || offsetY + points[points.length - 1][1] > MAX_POS) {
    console.error(
      "Elbow arrow normalization is outside reasonable bounds (> 1e6)",
      {
        x: offsetX,
        y: offsetY,
        points,
        ...getSizeFromPoints(points)
      }
    );
  }
  points = points.map(
    ([x, y]) => pointFrom(clamp(x, -1e6, 1e6), clamp(y, -1e6, 1e6))
  );
  return {
    points,
    x: clamp(offsetX, -1e6, 1e6),
    y: clamp(offsetY, -1e6, 1e6),
    fixedSegments: (nextFixedSegments?.length ?? 0) > 0 ? nextFixedSegments : null,
    ...getSizeFromPoints(points),
    startIsSpecial,
    endIsSpecial
  };
};
var getElbowArrowCornerPoints = (points) => {
  if (points.length > 1) {
    let previousHorizontal = Math.abs(points[0][1] - points[1][1]) < Math.abs(points[0][0] - points[1][0]);
    return points.filter((p, idx) => {
      if (idx === 0 || idx === points.length - 1) {
        return true;
      }
      const next = points[idx + 1];
      const nextHorizontal = Math.abs(p[1] - next[1]) < Math.abs(p[0] - next[0]);
      if (previousHorizontal === nextHorizontal) {
        previousHorizontal = nextHorizontal;
        return false;
      }
      previousHorizontal = nextHorizontal;
      return true;
    });
  }
  return points;
};
var removeElbowArrowShortSegments = (points) => {
  if (points.length >= 4) {
    return points.filter((p, idx) => {
      if (idx === 0 || idx === points.length - 1) {
        return true;
      }
      const prev = points[idx - 1];
      const prevDist = pointDistance(prev, p);
      return prevDist > DEDUP_TRESHOLD;
    });
  }
  return points;
};
var neighborIndexToHeading = (idx) => {
  switch (idx) {
    case 0:
      return HEADING_UP;
    case 1:
      return HEADING_RIGHT;
    case 2:
      return HEADING_DOWN;
  }
  return HEADING_LEFT;
};
var getGlobalPoint = (arrow, startOrEnd, fixedPointRatio, initialPoint, element, isDragging) => {
  if (isDragging) {
    if (element) {
      const snapPoint = bindPointToSnapToElementOutline(
        arrow,
        element,
        startOrEnd
      );
      return snapToMid(element, snapPoint);
    }
    return initialPoint;
  }
  if (element) {
    const fixedGlobalPoint = getGlobalFixedPointForBindableElement(
      fixedPointRatio || [0, 0],
      element
    );
    return Math.abs(
      distanceToBindableElement(element, fixedGlobalPoint) - FIXED_BINDING_DISTANCE
    ) > 0.01 ? bindPointToSnapToElementOutline(arrow, element, startOrEnd) : fixedGlobalPoint;
  }
  return initialPoint;
};
var getBindPointHeading = (p, otherPoint, elementsMap, hoveredElement, origPoint) => getHeadingForElbowArrowSnap(
  p,
  otherPoint,
  hoveredElement,
  hoveredElement && aabbForElement(
    hoveredElement,
    Array(4).fill(distanceToBindableElement(hoveredElement, p))
  ),
  elementsMap,
  origPoint
);
var getHoveredElement = (origPoint, elementsMap, elements, zoom) => {
  return getHoveredElementForBinding(
    tupleToCoors(origPoint),
    elements,
    elementsMap,
    zoom,
    true,
    true
  );
};
var gridAddressesEqual = (a, b) => a[0] === b[0] && a[1] === b[1];
var validateElbowPoints = (points, tolerance = DEDUP_TRESHOLD) => points.slice(1).map(
  (p, i) => Math.abs(p[0] - points[i][0]) < tolerance || Math.abs(p[1] - points[i][1]) < tolerance
).every(Boolean);

// ../element/src/mutateElement.ts
var mutateElement = (element, updates, informMutation = true, options) => {
  let didChange = false;
  const { points, fixedSegments, fileId, startBinding, endBinding } = updates;
  if (isElbowArrow(element) && (Object.keys(updates).length === 0 || // normalization case
  typeof points !== "undefined" || // repositioning
  typeof fixedSegments !== "undefined" || // segment fixing
  typeof startBinding !== "undefined" || typeof endBinding !== "undefined")) {
    const elementsMap = toBrandedType(
      Scene_default.getScene(element)?.getNonDeletedElementsMap() ?? /* @__PURE__ */ new Map()
    );
    updates = {
      ...updates,
      angle: 0,
      ...updateElbowArrowPoints(
        {
          ...element,
          x: updates.x || element.x,
          y: updates.y || element.y
        },
        elementsMap,
        {
          fixedSegments,
          points,
          startBinding,
          endBinding
        },
        {
          isDragging: options?.isDragging
        }
      )
    };
  } else if (typeof points !== "undefined") {
    updates = { ...getSizeFromPoints(points), ...updates };
  }
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      if (element[key] === value && // if object, always update because its attrs could have changed
      // (except for specific keys we handle below)
      (typeof value !== "object" || value === null || key === "groupIds" || key === "scale")) {
        continue;
      }
      if (key === "scale") {
        const prevScale = element[key];
        const nextScale = value;
        if (prevScale[0] === nextScale[0] && prevScale[1] === nextScale[1]) {
          continue;
        }
      } else if (key === "points") {
        const prevPoints = element[key];
        const nextPoints = value;
        if (prevPoints.length === nextPoints.length) {
          let didChangePoints = false;
          let index = prevPoints.length;
          while (--index) {
            const prevPoint = prevPoints[index];
            const nextPoint = nextPoints[index];
            if (prevPoint[0] !== nextPoint[0] || prevPoint[1] !== nextPoint[1]) {
              didChangePoints = true;
              break;
            }
          }
          if (!didChangePoints) {
            continue;
          }
        }
      }
      element[key] = value;
      didChange = true;
    }
  }
  if (!didChange) {
    return element;
  }
  if (typeof updates.height !== "undefined" || typeof updates.width !== "undefined" || typeof fileId != "undefined" || typeof points !== "undefined") {
    ShapeCache.delete(element);
  }
  element.version++;
  element.versionNonce = randomInteger();
  element.updated = getUpdatedTimestamp();
  if (informMutation) {
    Scene_default.getScene(element)?.triggerUpdate();
  }
  return element;
};
var newElementWith = (element, updates, force = false) => {
  let didChange = false;
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      if (element[key] === value && // if object, always update because its attrs could have changed
      (typeof value !== "object" || value === null)) {
        continue;
      }
      didChange = true;
    }
  }
  if (!didChange && !force) {
    return element;
  }
  return {
    ...element,
    ...updates,
    updated: getUpdatedTimestamp(),
    version: element.version + 1,
    versionNonce: randomInteger()
  };
};
var bumpVersion = (element, version) => {
  element.version = (version ?? element.version) + 1;
  element.versionNonce = randomInteger();
  element.updated = getUpdatedTimestamp();
  return element;
};

// ../element/src/textMeasurements.ts
var measureText = (text, font, lineHeight) => {
  const _text = text.split("\n").map((x) => x || " ").join("\n");
  const fontSize = parseFloat(font);
  const height = getTextHeight(_text, fontSize, lineHeight);
  const width = getTextWidth(_text, font);
  return { width, height };
};
var DUMMY_TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toLocaleUpperCase();
var getApproxMinLineWidth = (font, lineHeight) => {
  const maxCharWidth = getMaxCharWidth(font);
  if (maxCharWidth === 0) {
    return measureText(DUMMY_TEXT.split("").join("\n"), font, lineHeight).width + BOUND_TEXT_PADDING * 2;
  }
  return maxCharWidth + BOUND_TEXT_PADDING * 2;
};
var getMinTextElementWidth = (font, lineHeight) => {
  return measureText("", font, lineHeight).width + BOUND_TEXT_PADDING * 2;
};
var isMeasureTextSupported = () => {
  const width = getTextWidth(
    DUMMY_TEXT,
    getFontString({
      fontSize: DEFAULT_FONT_SIZE,
      fontFamily: DEFAULT_FONT_FAMILY
    })
  );
  return width > 0;
};
var normalizeText = (text) => {
  return normalizeEOL(text).replace(/\t/g, "        ");
};
var splitIntoLines = (text) => {
  return normalizeText(text).split("\n");
};
var detectLineHeight = (textElement) => {
  const lineCount = splitIntoLines(textElement.text).length;
  return textElement.height / lineCount / textElement.fontSize;
};
var getLineHeightInPx = (fontSize, lineHeight) => {
  return fontSize * lineHeight;
};
var getApproxMinLineHeight = (fontSize, lineHeight) => {
  return getLineHeightInPx(fontSize, lineHeight) + BOUND_TEXT_PADDING * 2;
};
var textMetricsProvider;
var setCustomTextMetricsProvider = (provider) => {
  textMetricsProvider = provider;
};
var CanvasTextMetricsProvider = class {
  constructor() {
    __publicField(this, "canvas");
    this.canvas = document.createElement("canvas");
  }
  /**
   * We need to use the advance width as that's the closest thing to the browser wrapping algo, hence using it for:
   * - text wrapping
   * - wysiwyg editor (+padding)
   *
   * > The advance width is the distance between the glyph's initial pen position and the next glyph's initial pen position.
   */
  getLineWidth(text, fontString) {
    const context = this.canvas.getContext("2d");
    context.font = fontString;
    const metrics = context.measureText(text);
    const advanceWidth = metrics.width;
    if (isTestEnv()) {
      return advanceWidth * 10;
    }
    return advanceWidth;
  }
};
var getLineWidth = (text, font) => {
  if (!textMetricsProvider) {
    textMetricsProvider = new CanvasTextMetricsProvider();
  }
  return textMetricsProvider.getLineWidth(text, font);
};
var getTextWidth = (text, font) => {
  const lines = splitIntoLines(text);
  let width = 0;
  lines.forEach((line2) => {
    width = Math.max(width, getLineWidth(line2, font));
  });
  return width;
};
var getTextHeight = (text, fontSize, lineHeight) => {
  const lineCount = splitIntoLines(text).length;
  return getLineHeightInPx(fontSize, lineHeight) * lineCount;
};
var charWidth = /* @__PURE__ */ (() => {
  const cachedCharWidth = {};
  const calculate = (char, font) => {
    const unicode = char.charCodeAt(0);
    if (!cachedCharWidth[font]) {
      cachedCharWidth[font] = [];
    }
    if (!cachedCharWidth[font][unicode]) {
      const width = getLineWidth(char, font);
      cachedCharWidth[font][unicode] = width;
    }
    return cachedCharWidth[font][unicode];
  };
  const getCache = (font) => {
    return cachedCharWidth[font];
  };
  const clearCache = (font) => {
    cachedCharWidth[font] = [];
  };
  return {
    calculate,
    getCache,
    clearCache
  };
})();
var getMaxCharWidth = (font) => {
  const cache = charWidth.getCache(font);
  if (!cache) {
    return 0;
  }
  const cacheWithOutEmpty = cache.filter((val) => val !== void 0);
  return Math.max(...cacheWithOutEmpty);
};

// ../element/src/textWrapping.ts
var cachedCjkRegex;
var cachedLineBreakRegex;
var cachedEmojiRegex;
var containsCJK = (text) => {
  if (!cachedCjkRegex) {
    cachedCjkRegex = Regex.class(...Object.values(CJK));
  }
  return cachedCjkRegex.test(text);
};
var getLineBreakRegex = () => {
  if (!cachedLineBreakRegex) {
    try {
      cachedLineBreakRegex = getLineBreakRegexAdvanced();
    } catch {
      cachedLineBreakRegex = getLineBreakRegexSimple();
    }
  }
  return cachedLineBreakRegex;
};
var getEmojiRegex = () => {
  if (!cachedEmojiRegex) {
    cachedEmojiRegex = getEmojiRegexUnicode();
  }
  return cachedEmojiRegex;
};
var COMMON = {
  /**
   * Natural breaking points for any grammars.
   *
   * Hello world
   *      ↑ BREAK ALWAYS " " → ["Hello", " ", "world"]
   * Hello-world
   *       ↑ BREAK AFTER "-" → ["Hello-", "world"]
   */
  WHITESPACE: /\s/u,
  HYPHEN: /-/u,
  /**
   * Generally do not break, unless closed symbol is followed by an opening symbol.
   *
   * Also, western punctation is often used in modern Korean and expects to be treated
   * similarly to the CJK opening and closing symbols.
   *
   * Hello(한글)→ ["Hello", "(한", "글)"]
   *      ↑ BREAK BEFORE "("
   *          ↑ BREAK AFTER ")"
   */
  OPENING: /<\(\[\{/u,
  CLOSING: />\)\]\}.,:;!\?…\//u
};
var CJK = {
  /**
   * Every CJK breaks before and after, unless it's paired with an opening or closing symbol.
   *
   * Does not include every possible char used in CJK texts, such as currency, parentheses or punctuation.
   */
  CHAR: /\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}｀＇＾〃〰〆＃＆＊＋－ー／＼＝｜￤〒￢￣/u,
  /**
   * Opening and closing CJK punctuation breaks before and after all such characters (in case of many),
   * and creates pairs with neighboring characters.
   *
   * Hello た。→ ["Hello", "た。"]
   *        ↑ DON'T BREAK "た。"
   * * Hello「た」 World → ["Hello", "「た」", "World"]
   *       ↑ DON'T BREAK "「た"
   *        ↑ DON'T BREAK "た"
   *      ↑ BREAK BEFORE "「"
   *         ↑ BREAK AFTER "」"
   */
  // eslint-disable-next-line prettier/prettier
  OPENING: /（［｛〈《｟｢「『【〖〔〘〚＜〝/u,
  CLOSING: /）］｝〉》｠｣」』】〗〕〙〛＞。．，、〟‥？！：；・〜〞/u,
  /**
   * Currency symbols break before, not after
   *
   * Price￥100 → ["Price", "￥100"]
   *      ↑ BREAK BEFORE "￥"
   */
  CURRENCY: /￥￦￡￠＄/u
};
var EMOJI = {
  FLAG: /\p{RI}\p{RI}/u,
  JOINER: /(?:\p{Emoji_Modifier}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?/u,
  ZWJ: /\u200D/u,
  ANY: /[\p{Emoji}]/u,
  MOST: /[\p{Extended_Pictographic}\p{Emoji_Presentation}]/u
};
var getLineBreakRegexSimple = () => Regex.or(
  getEmojiRegex(),
  Break.On(COMMON.HYPHEN, COMMON.WHITESPACE, CJK.CHAR)
);
var getLineBreakRegexAdvanced = () => Regex.or(
  // Unicode-defined regex for (multi-codepoint) Emojis
  getEmojiRegex(),
  // Rules for whitespace and hyphen
  Break.Before(COMMON.WHITESPACE).Build(),
  Break.After(COMMON.WHITESPACE, COMMON.HYPHEN).Build(),
  // Rules for CJK (chars, symbols, currency)
  Break.Before(CJK.CHAR, CJK.CURRENCY).NotPrecededBy(COMMON.OPENING, CJK.OPENING).Build(),
  Break.After(CJK.CHAR).NotFollowedBy(COMMON.HYPHEN, COMMON.CLOSING, CJK.CLOSING).Build(),
  // Rules for opening and closing punctuation
  Break.BeforeMany(CJK.OPENING).NotPrecededBy(COMMON.OPENING).Build(),
  Break.AfterMany(CJK.CLOSING).NotFollowedBy(COMMON.CLOSING).Build(),
  Break.AfterMany(COMMON.CLOSING).FollowedBy(COMMON.OPENING).Build()
);
var getEmojiRegexUnicode = () => Regex.group(
  Regex.or(
    EMOJI.FLAG,
    Regex.and(
      EMOJI.MOST,
      EMOJI.JOINER,
      Regex.build(
        `(?:${EMOJI.ZWJ.source}(?:${EMOJI.FLAG.source}|${EMOJI.ANY.source}${EMOJI.JOINER.source}))*`
      )
    )
  )
);
var Regex = {
  /**
   * Builds a regex from a string.
   */
  build: (regex) => new RegExp(regex, "u"),
  /**
   * Joins regexes into a single string.
   */
  join: (...regexes) => regexes.map((x) => x.source).join(""),
  /**
   * Joins regexes into a single regex as with "and" operator.
   */
  and: (...regexes) => Regex.build(Regex.join(...regexes)),
  /**
   * Joins regexes into a single regex with "or" operator.
   */
  or: (...regexes) => Regex.build(regexes.map((x) => x.source).join("|")),
  /**
   * Puts regexes into a matching group.
   */
  group: (...regexes) => Regex.build(`(${Regex.join(...regexes)})`),
  /**
   * Puts regexes into a character class.
   */
  class: (...regexes) => Regex.build(`[${Regex.join(...regexes)}]`)
};
var Break = {
  /**
   * Break on the given class of characters.
   */
  On: (...regexes) => {
    const joined = Regex.join(...regexes);
    return Regex.build(`([${joined}])`);
  },
  /**
   * Break before the given class of characters.
   */
  Before: (...regexes) => {
    const joined = Regex.join(...regexes);
    const builder = () => Regex.build(`(?=[${joined}])`);
    return Break.Chain(builder);
  },
  /**
   * Break after the given class of characters.
   */
  After: (...regexes) => {
    const joined = Regex.join(...regexes);
    const builder = () => Regex.build(`(?<=[${joined}])`);
    return Break.Chain(builder);
  },
  /**
   * Break before one or multiple characters of the same class.
   */
  BeforeMany: (...regexes) => {
    const joined = Regex.join(...regexes);
    const builder = () => Regex.build(`(?<![${joined}])(?=[${joined}])`);
    return Break.Chain(builder);
  },
  /**
   * Break after one or multiple character from the same class.
   */
  AfterMany: (...regexes) => {
    const joined = Regex.join(...regexes);
    const builder = () => Regex.build(`(?<=[${joined}])(?![${joined}])`);
    return Break.Chain(builder);
  },
  /**
   * Do not break before the given class of characters.
   */
  NotBefore: (...regexes) => {
    const joined = Regex.join(...regexes);
    const builder = () => Regex.build(`(?![${joined}])`);
    return Break.Chain(builder);
  },
  /**
   * Do not break after the given class of characters.
   */
  NotAfter: (...regexes) => {
    const joined = Regex.join(...regexes);
    const builder = () => Regex.build(`(?<![${joined}])`);
    return Break.Chain(builder);
  },
  Chain: (rootBuilder) => ({
    /**
     * Build the root regex.
     */
    Build: rootBuilder,
    /**
     * Specify additional class of characters that should precede the root regex.
     */
    PreceededBy: (...regexes) => {
      const root = rootBuilder();
      const preceeded = Break.After(...regexes).Build();
      const builder = () => Regex.and(preceeded, root);
      return Break.Chain(builder);
    },
    /**
     * Specify additional class of characters that should follow the root regex.
     */
    FollowedBy: (...regexes) => {
      const root = rootBuilder();
      const followed = Break.Before(...regexes).Build();
      const builder = () => Regex.and(root, followed);
      return Break.Chain(builder);
    },
    /**
     * Specify additional class of characters that should not precede the root regex.
     */
    NotPrecededBy: (...regexes) => {
      const root = rootBuilder();
      const notPreceeded = Break.NotAfter(...regexes).Build();
      const builder = () => Regex.and(notPreceeded, root);
      return Break.Chain(builder);
    },
    /**
     * Specify additional class of characters that should not follow the root regex.
     */
    NotFollowedBy: (...regexes) => {
      const root = rootBuilder();
      const notFollowed = Break.NotBefore(...regexes).Build();
      const builder = () => Regex.and(root, notFollowed);
      return Break.Chain(builder);
    }
  })
};
var parseTokens = (line2) => {
  const breakLineRegex = getLineBreakRegex();
  return line2.normalize("NFC").split(breakLineRegex).filter(Boolean);
};
var wrapText = (text, font, maxWidth) => {
  if (!Number.isFinite(maxWidth) || maxWidth < 0) {
    return text;
  }
  const lines = [];
  const originalLines = text.split("\n");
  for (const originalLine of originalLines) {
    const currentLineWidth = getLineWidth(originalLine, font);
    if (currentLineWidth <= maxWidth) {
      lines.push(originalLine);
      continue;
    }
    const wrappedLine = wrapLine(originalLine, font, maxWidth);
    lines.push(...wrappedLine);
  }
  return lines.join("\n");
};
var wrapLine = (line2, font, maxWidth) => {
  const lines = [];
  const tokens = parseTokens(line2);
  const tokenIterator = tokens[Symbol.iterator]();
  let currentLine = "";
  let currentLineWidth = 0;
  let iterator = tokenIterator.next();
  while (!iterator.done) {
    const token = iterator.value;
    const testLine = currentLine + token;
    const testLineWidth = isSingleCharacter(token) ? currentLineWidth + charWidth.calculate(token, font) : getLineWidth(testLine, font);
    if (/\s/.test(token) || testLineWidth <= maxWidth) {
      currentLine = testLine;
      currentLineWidth = testLineWidth;
      iterator = tokenIterator.next();
      continue;
    }
    if (!currentLine) {
      const wrappedWord = wrapWord(token, font, maxWidth);
      const trailingLine = wrappedWord[wrappedWord.length - 1] ?? "";
      const precedingLines = wrappedWord.slice(0, -1);
      lines.push(...precedingLines);
      currentLine = trailingLine;
      currentLineWidth = getLineWidth(trailingLine, font);
      iterator = tokenIterator.next();
    } else {
      lines.push(currentLine.trimEnd());
      currentLine = "";
      currentLineWidth = 0;
    }
  }
  if (currentLine) {
    const trailingLine = trimLine(currentLine, font, maxWidth);
    lines.push(trailingLine);
  }
  return lines;
};
var wrapWord = (word, font, maxWidth) => {
  if (getEmojiRegex().test(word)) {
    return [word];
  }
  satisfiesWordInvariant(word);
  const lines = [];
  const chars = Array.from(word);
  let currentLine = "";
  let currentLineWidth = 0;
  for (const char of chars) {
    const _charWidth = charWidth.calculate(char, font);
    const testLineWidth = currentLineWidth + _charWidth;
    if (testLineWidth <= maxWidth) {
      currentLine = currentLine + char;
      currentLineWidth = testLineWidth;
      continue;
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    currentLine = char;
    currentLineWidth = _charWidth;
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
};
var trimLine = (line2, font, maxWidth) => {
  const shouldTrimWhitespaces = getLineWidth(line2, font) > maxWidth;
  if (!shouldTrimWhitespaces) {
    return line2;
  }
  let [, trimmedLine, whitespaces] = line2.match(/^(.+?)(\s+)$/) ?? [
    line2,
    line2.trimEnd(),
    ""
  ];
  let trimmedLineWidth = getLineWidth(trimmedLine, font);
  for (const whitespace of Array.from(whitespaces)) {
    const _charWidth = charWidth.calculate(whitespace, font);
    const testLineWidth = trimmedLineWidth + _charWidth;
    if (testLineWidth > maxWidth) {
      break;
    }
    trimmedLine = trimmedLine + whitespace;
    trimmedLineWidth = testLineWidth;
  }
  return trimmedLine;
};
var isSingleCharacter = (maybeSingleCharacter) => {
  return maybeSingleCharacter.codePointAt(0) !== void 0 && maybeSingleCharacter.codePointAt(1) === void 0;
};
var satisfiesWordInvariant = (word) => {
  if (isTestEnv() || isDevEnv()) {
    if (/\s/.test(word)) {
      throw new Error("Word should not contain any whitespaces!");
    }
  }
};

// ../element/src/textElement.ts
var redrawTextBoundingBox = (textElement, container, elementsMap, informMutation = true) => {
  let maxWidth = void 0;
  const boundTextUpdates = {
    x: textElement.x,
    y: textElement.y,
    text: textElement.text,
    width: textElement.width,
    height: textElement.height,
    angle: container?.angle ?? textElement.angle
  };
  boundTextUpdates.text = textElement.text;
  if (container || !textElement.autoResize) {
    maxWidth = container ? getBoundTextMaxWidth(container, textElement) : textElement.width;
    boundTextUpdates.text = wrapText(
      textElement.originalText,
      getFontString(textElement),
      maxWidth
    );
  }
  const metrics = measureText(
    boundTextUpdates.text,
    getFontString(textElement),
    textElement.lineHeight
  );
  if (textElement.autoResize) {
    boundTextUpdates.width = metrics.width;
  }
  boundTextUpdates.height = metrics.height;
  if (container) {
    const maxContainerHeight = getBoundTextMaxHeight(
      container,
      textElement
    );
    const maxContainerWidth = getBoundTextMaxWidth(container, textElement);
    if (!isArrowElement(container) && metrics.height > maxContainerHeight) {
      const nextHeight = computeContainerDimensionForBoundText(
        metrics.height,
        container.type
      );
      mutateElement(container, { height: nextHeight }, informMutation);
      updateOriginalContainerCache(container.id, nextHeight);
    }
    if (metrics.width > maxContainerWidth) {
      const nextWidth = computeContainerDimensionForBoundText(
        metrics.width,
        container.type
      );
      mutateElement(container, { width: nextWidth }, informMutation);
    }
    const updatedTextElement = {
      ...textElement,
      ...boundTextUpdates
    };
    const { x, y } = computeBoundTextPosition(
      container,
      updatedTextElement,
      elementsMap
    );
    boundTextUpdates.x = x;
    boundTextUpdates.y = y;
  }
  mutateElement(textElement, boundTextUpdates, informMutation);
};
var handleBindTextResize = (container, elementsMap, transformHandleType, shouldMaintainAspectRatio2 = false) => {
  const boundTextElementId = getBoundTextElementId(container);
  if (!boundTextElementId) {
    return;
  }
  resetOriginalContainerCache(container.id);
  const textElement = getBoundTextElement(container, elementsMap);
  if (textElement && textElement.text) {
    if (!container) {
      return;
    }
    let text = textElement.text;
    let nextHeight = textElement.height;
    let nextWidth = textElement.width;
    const maxWidth = getBoundTextMaxWidth(container, textElement);
    const maxHeight = getBoundTextMaxHeight(container, textElement);
    let containerHeight = container.height;
    if (shouldMaintainAspectRatio2 || transformHandleType !== "n" && transformHandleType !== "s") {
      if (text) {
        text = wrapText(
          textElement.originalText,
          getFontString(textElement),
          maxWidth
        );
      }
      const metrics = measureText(
        text,
        getFontString(textElement),
        textElement.lineHeight
      );
      nextHeight = metrics.height;
      nextWidth = metrics.width;
    }
    if (nextHeight > maxHeight) {
      containerHeight = computeContainerDimensionForBoundText(
        nextHeight,
        container.type
      );
      const diff = containerHeight - container.height;
      const updatedY = !isArrowElement(container) && (transformHandleType === "ne" || transformHandleType === "nw" || transformHandleType === "n") ? container.y - diff : container.y;
      mutateElement(container, {
        height: containerHeight,
        y: updatedY
      });
    }
    mutateElement(textElement, {
      text,
      width: nextWidth,
      height: nextHeight
    });
    if (!isArrowElement(container)) {
      mutateElement(
        textElement,
        computeBoundTextPosition(container, textElement, elementsMap)
      );
    }
  }
};
var computeBoundTextPosition = (container, boundTextElement, elementsMap) => {
  if (isArrowElement(container)) {
    return LinearElementEditor.getBoundTextElementPosition(
      container,
      boundTextElement,
      elementsMap
    );
  }
  const containerCoords = getContainerCoords(container);
  const maxContainerHeight = getBoundTextMaxHeight(container, boundTextElement);
  const maxContainerWidth = getBoundTextMaxWidth(container, boundTextElement);
  let x;
  let y;
  if (boundTextElement.verticalAlign === VERTICAL_ALIGN.TOP) {
    y = containerCoords.y;
  } else if (boundTextElement.verticalAlign === VERTICAL_ALIGN.BOTTOM) {
    y = containerCoords.y + (maxContainerHeight - boundTextElement.height);
  } else {
    y = containerCoords.y + (maxContainerHeight / 2 - boundTextElement.height / 2);
  }
  if (boundTextElement.textAlign === TEXT_ALIGN.LEFT) {
    x = containerCoords.x;
  } else if (boundTextElement.textAlign === TEXT_ALIGN.RIGHT) {
    x = containerCoords.x + (maxContainerWidth - boundTextElement.width);
  } else {
    x = containerCoords.x + (maxContainerWidth / 2 - boundTextElement.width / 2);
  }
  return { x, y };
};
var getBoundTextElementId = (container) => {
  return container?.boundElements?.length ? container?.boundElements?.find((ele) => ele.type === "text")?.id || null : null;
};
var getBoundTextElement = (element, elementsMap) => {
  if (!element) {
    return null;
  }
  const boundTextElementId = getBoundTextElementId(element);
  if (boundTextElementId) {
    return elementsMap.get(boundTextElementId) || null;
  }
  return null;
};
var getContainerElement = (element, elementsMap) => {
  if (!element) {
    return null;
  }
  if (element.containerId) {
    return elementsMap.get(element.containerId) || null;
  }
  return null;
};
var getContainerCenter = (container, appState, elementsMap) => {
  if (!isArrowElement(container)) {
    return {
      x: container.x + container.width / 2,
      y: container.y + container.height / 2
    };
  }
  const points = LinearElementEditor.getPointsGlobalCoordinates(
    container,
    elementsMap
  );
  if (points.length % 2 === 1) {
    const index2 = Math.floor(container.points.length / 2);
    const midPoint = LinearElementEditor.getPointGlobalCoordinates(
      container,
      container.points[index2],
      elementsMap
    );
    return { x: midPoint[0], y: midPoint[1] };
  }
  const index = container.points.length / 2 - 1;
  let midSegmentMidpoint = LinearElementEditor.getEditorMidPoints(
    container,
    elementsMap,
    appState
  )[index];
  if (!midSegmentMidpoint) {
    midSegmentMidpoint = LinearElementEditor.getSegmentMidPoint(
      container,
      points[index],
      points[index + 1],
      index + 1,
      elementsMap
    );
  }
  return { x: midSegmentMidpoint[0], y: midSegmentMidpoint[1] };
};
var getContainerCoords = (container) => {
  let offsetX = BOUND_TEXT_PADDING;
  let offsetY = BOUND_TEXT_PADDING;
  if (container.type === "ellipse") {
    offsetX += container.width / 2 * (1 - Math.sqrt(2) / 2);
    offsetY += container.height / 2 * (1 - Math.sqrt(2) / 2);
  }
  if (container.type === "diamond") {
    offsetX += container.width / 4;
    offsetY += container.height / 4;
  }
  return {
    x: container.x + offsetX,
    y: container.y + offsetY
  };
};
var getTextElementAngle = (textElement, container) => {
  if (!container || isArrowElement(container)) {
    return textElement.angle;
  }
  return container.angle;
};
var shouldAllowVerticalAlign = (selectedElements, elementsMap) => {
  return selectedElements.some((element) => {
    if (isBoundToContainer(element)) {
      const container = getContainerElement(element, elementsMap);
      if (isArrowElement(container)) {
        return false;
      }
      return true;
    }
    return false;
  });
};
var suppportsHorizontalAlign = (selectedElements, elementsMap) => {
  return selectedElements.some((element) => {
    if (isBoundToContainer(element)) {
      const container = getContainerElement(element, elementsMap);
      if (isArrowElement(container)) {
        return false;
      }
      return true;
    }
    return isTextElement(element);
  });
};
var VALID_CONTAINER_TYPES = /* @__PURE__ */ new Set([
  "rectangle",
  "ellipse",
  "diamond",
  "arrow"
]);
var isValidTextContainer = (element) => VALID_CONTAINER_TYPES.has(element.type);
var computeContainerDimensionForBoundText = (dimension, containerType) => {
  dimension = Math.ceil(dimension);
  const padding = BOUND_TEXT_PADDING * 2;
  if (containerType === "ellipse") {
    return Math.round((dimension + padding) / Math.sqrt(2) * 2);
  }
  if (containerType === "arrow") {
    return dimension + padding * 8;
  }
  if (containerType === "diamond") {
    return 2 * (dimension + padding);
  }
  return dimension + padding;
};
var getBoundTextMaxWidth = (container, boundTextElement) => {
  const { width } = container;
  if (isArrowElement(container)) {
    const minWidth = (boundTextElement?.fontSize ?? DEFAULT_FONT_SIZE) * ARROW_LABEL_FONT_SIZE_TO_MIN_WIDTH_RATIO;
    return Math.max(ARROW_LABEL_WIDTH_FRACTION * width, minWidth);
  }
  if (container.type === "ellipse") {
    return Math.round(width / 2 * Math.sqrt(2)) - BOUND_TEXT_PADDING * 2;
  }
  if (container.type === "diamond") {
    return Math.round(width / 2) - BOUND_TEXT_PADDING * 2;
  }
  return width - BOUND_TEXT_PADDING * 2;
};
var getBoundTextMaxHeight = (container, boundTextElement) => {
  const { height } = container;
  if (isArrowElement(container)) {
    const containerHeight = height - BOUND_TEXT_PADDING * 8 * 2;
    if (containerHeight <= 0) {
      return boundTextElement.height;
    }
    return height;
  }
  if (container.type === "ellipse") {
    return Math.round(height / 2 * Math.sqrt(2)) - BOUND_TEXT_PADDING * 2;
  }
  if (container.type === "diamond") {
    return Math.round(height / 2) - BOUND_TEXT_PADDING * 2;
  }
  return height - BOUND_TEXT_PADDING * 2;
};
var getTextFromElements = (elements, separator = "\n\n") => {
  const text = elements.reduce((acc, element) => {
    if (isTextElement(element)) {
      acc.push(element.text);
    }
    return acc;
  }, []).join(separator);
  return text;
};

// ../utils/src/bbox.ts
function getBBox(line2) {
  return [
    Math.min(line2[0][0], line2[1][0]),
    Math.min(line2[0][1], line2[1][1]),
    Math.max(line2[0][0], line2[1][0]),
    Math.max(line2[0][1], line2[1][1])
  ];
}
function doBBoxesIntersect(a, b) {
  return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
}
var EPSILON2 = 1e-6;
function isPointOnLine(l, p) {
  const p1 = vectorFromPoint(l[1], l[0]);
  const p2 = vectorFromPoint(p, l[0]);
  const r = vectorCross(p1, p2);
  return Math.abs(r) < EPSILON2;
}
function isPointRightOfLine(l, p) {
  const p1 = vectorFromPoint(l[1], l[0]);
  const p2 = vectorFromPoint(p, l[0]);
  return vectorCross(p1, p2) < 0;
}
function isLineSegmentTouchingOrCrossingLine(a, b) {
  return isPointOnLine(a, b[0]) || isPointOnLine(a, b[1]) || (isPointRightOfLine(a, b[0]) ? !isPointRightOfLine(a, b[1]) : isPointRightOfLine(a, b[1]));
}
function doLineSegmentsIntersect(a, b) {
  return doBBoxesIntersect(getBBox(a), getBBox(b)) && isLineSegmentTouchingOrCrossingLine(a, b) && isLineSegmentTouchingOrCrossingLine(b, a);
}

// ../utils/src/withinBounds.ts
var getNonLinearElementRelativePoints = (element) => {
  if (element.type === "diamond") {
    return [
      pointFrom(element.width / 2, 0),
      pointFrom(element.width, element.height / 2),
      pointFrom(element.width / 2, element.height),
      pointFrom(0, element.height / 2)
    ];
  }
  return [
    pointFrom(0, 0),
    pointFrom(0 + element.width, 0),
    pointFrom(0 + element.width, element.height),
    pointFrom(0, element.height)
  ];
};
var getElementRelativePoints = (element) => {
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    return element.points;
  }
  return getNonLinearElementRelativePoints(element);
};
var getMinMaxPoints = (points) => {
  const ret = points.reduce(
    (limits, [x, y]) => {
      limits.minY = Math.min(limits.minY, y);
      limits.minX = Math.min(limits.minX, x);
      limits.maxX = Math.max(limits.maxX, x);
      limits.maxY = Math.max(limits.maxY, y);
      return limits;
    },
    {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
      cx: 0,
      cy: 0
    }
  );
  ret.cx = (ret.maxX + ret.minX) / 2;
  ret.cy = (ret.maxY + ret.minY) / 2;
  return ret;
};
var getRotatedBBox = (element) => {
  const points = getElementRelativePoints(element);
  const { cx, cy } = getMinMaxPoints(points);
  const centerPoint = pointFrom(cx, cy);
  const rotatedPoints = points.map(
    (p) => pointRotateRads(p, centerPoint, element.angle)
  );
  const { minX, minY, maxX, maxY } = getMinMaxPoints(rotatedPoints);
  return [
    minX + element.x,
    minY + element.y,
    maxX + element.x,
    maxY + element.y
  ];
};
var isElementInsideBBox = (element, bbox, eitherDirection = false) => {
  const elementBBox = getRotatedBBox(element);
  const elementInsideBbox = bbox[0] <= elementBBox[0] && bbox[2] >= elementBBox[2] && bbox[1] <= elementBBox[1] && bbox[3] >= elementBBox[3];
  if (!eitherDirection) {
    return elementInsideBbox;
  }
  if (elementInsideBbox) {
    return true;
  }
  return elementBBox[0] <= bbox[0] && elementBBox[2] >= bbox[2] && elementBBox[1] <= bbox[1] && elementBBox[3] >= bbox[3];
};
var elementPartiallyOverlapsWithOrContainsBBox = (element, bbox) => {
  const elementBBox = getRotatedBBox(element);
  return (rangeIncludesValue(elementBBox[0], rangeInclusive(bbox[0], bbox[2])) || rangeIncludesValue(
    bbox[0],
    rangeInclusive(elementBBox[0], elementBBox[2])
  )) && (rangeIncludesValue(elementBBox[1], rangeInclusive(bbox[1], bbox[3])) || rangeIncludesValue(
    bbox[1],
    rangeInclusive(elementBBox[1], elementBBox[3])
  ));
};
var elementsOverlappingBBox = ({
  elements,
  bounds,
  type,
  errorMargin = 0
}) => {
  if (isExcalidrawElement(bounds)) {
    bounds = getElementBounds(bounds, arrayToMap(elements));
  }
  const adjustedBBox = [
    bounds[0] - errorMargin,
    bounds[1] - errorMargin,
    bounds[2] + errorMargin,
    bounds[3] + errorMargin
  ];
  const includedElementSet = /* @__PURE__ */ new Set();
  for (const element of elements) {
    if (includedElementSet.has(element.id)) {
      continue;
    }
    const isOverlaping = type === "overlap" ? elementPartiallyOverlapsWithOrContainsBBox(element, adjustedBBox) : type === "inside" ? isElementInsideBBox(element, adjustedBBox) : isElementInsideBBox(element, adjustedBBox, true);
    if (isOverlaping) {
      includedElementSet.add(element.id);
      if (element.boundElements) {
        for (const boundElement of element.boundElements) {
          includedElementSet.add(boundElement.id);
        }
      }
      if (isTextElement(element) && element.containerId) {
        includedElementSet.add(element.containerId);
      }
      if (isArrowElement(element)) {
        if (element.startBinding) {
          includedElementSet.add(element.startBinding.elementId);
        }
        if (element.endBinding) {
          includedElementSet.add(element.endBinding?.elementId);
        }
      }
    }
  }
  return elements.filter((element) => includedElementSet.has(element.id));
};

// ../element/src/frame.ts
var bindElementsToFramesAfterDuplication = (nextElements, oldElements, oldIdToDuplicatedId) => {
  const nextElementMap = arrayToMap(nextElements);
  for (const element of oldElements) {
    if (element.frameId) {
      const nextElementId = oldIdToDuplicatedId.get(element.id);
      const nextFrameId = oldIdToDuplicatedId.get(element.frameId);
      if (nextElementId) {
        const nextElement = nextElementMap.get(nextElementId);
        if (nextElement) {
          mutateElement(
            nextElement,
            {
              frameId: nextFrameId ?? element.frameId
            },
            false
          );
        }
      }
    }
  }
};
function isElementIntersectingFrame(element, frame, elementsMap) {
  const frameLineSegments = getElementLineSegments(frame, elementsMap);
  const elementLineSegments = getElementLineSegments(element, elementsMap);
  const intersecting = frameLineSegments.some(
    (frameLineSegment) => elementLineSegments.some(
      (elementLineSegment) => doLineSegmentsIntersect(frameLineSegment, elementLineSegment)
    )
  );
  return intersecting;
}
var getElementsCompletelyInFrame = (elements, frame, elementsMap) => omitGroupsContainingFrameLikes(
  getElementsWithinSelection(elements, frame, elementsMap, false)
).filter(
  (element) => !isFrameLikeElement(element) && !element.frameId || element.frameId === frame.id
);
var isElementContainingFrame = (element, frame, elementsMap) => {
  return getElementsWithinSelection([frame], element, elementsMap).some(
    (e) => e.id === frame.id
  );
};
var elementsAreInFrameBounds = (elements, frame, elementsMap) => {
  const [frameX1, frameY1, frameX2, frameY2] = getElementAbsoluteCoords(
    frame,
    elementsMap
  );
  const [elementX1, elementY1, elementX2, elementY2] = getCommonBounds(elements);
  return frameX1 <= elementX1 && frameY1 <= elementY1 && frameX2 >= elementX2 && frameY2 >= elementY2;
};
var elementOverlapsWithFrame = (element, frame, elementsMap) => {
  return elementsAreInFrameBounds([element], frame, elementsMap) || isElementIntersectingFrame(element, frame, elementsMap) || isElementContainingFrame(element, frame, elementsMap);
};
var isCursorInFrame = (cursorCoords, frame, elementsMap) => {
  const [fx1, fy1, fx2, fy2] = getElementAbsoluteCoords(frame, elementsMap);
  return isPointWithinBounds(
    pointFrom(fx1, fy1),
    pointFrom(cursorCoords.x, cursorCoords.y),
    pointFrom(fx2, fy2)
  );
};
var groupByFrameLikes = (elements) => {
  const frameElementsMap = /* @__PURE__ */ new Map();
  for (const element of elements) {
    const frameId = isFrameLikeElement(element) ? element.id : element.frameId;
    if (frameId && !frameElementsMap.has(frameId)) {
      frameElementsMap.set(frameId, getFrameChildren(elements, frameId));
    }
  }
  return frameElementsMap;
};
var getFrameChildren = (allElements, frameId) => {
  const frameChildren = [];
  for (const element of allElements.values()) {
    if (element.frameId === frameId) {
      frameChildren.push(element);
    }
  }
  return frameChildren;
};
var getFrameLikeElements = (allElements) => {
  return allElements.filter(
    (element) => isFrameLikeElement(element)
  );
};
var getRootElements = (allElements) => {
  const frameElements = arrayToMap(getFrameLikeElements(allElements));
  return allElements.filter(
    (element) => frameElements.has(element.id) || !element.frameId || !frameElements.has(element.frameId)
  );
};
var getElementsInResizingFrame = (allElements, frame, appState, elementsMap) => {
  const prevElementsInFrame = getFrameChildren(allElements, frame.id);
  const nextElementsInFrame = new Set(prevElementsInFrame);
  const elementsCompletelyInFrame = /* @__PURE__ */ new Set([
    ...getElementsCompletelyInFrame(allElements, frame, elementsMap),
    ...prevElementsInFrame.filter(
      (element) => isElementContainingFrame(element, frame, elementsMap)
    )
  ]);
  const elementsNotCompletelyInFrame = prevElementsInFrame.filter(
    (element) => !elementsCompletelyInFrame.has(element)
  );
  const groupsToKeep = new Set(
    Array.from(elementsCompletelyInFrame).flatMap(
      (element) => element.groupIds
    )
  );
  for (const element of elementsNotCompletelyInFrame) {
    if (!isElementIntersectingFrame(element, frame, elementsMap)) {
      if (element.groupIds.length === 0) {
        nextElementsInFrame.delete(element);
      }
    } else if (element.groupIds.length > 0) {
      for (const id of element.groupIds) {
        groupsToKeep.add(id);
      }
    }
  }
  for (const element of elementsNotCompletelyInFrame) {
    if (element.groupIds.length > 0) {
      let shouldRemoveElement = true;
      for (const id of element.groupIds) {
        if (groupsToKeep.has(id)) {
          shouldRemoveElement = false;
        }
      }
      if (shouldRemoveElement) {
        nextElementsInFrame.delete(element);
      }
    }
  }
  const individualElementsCompletelyInFrame = Array.from(
    elementsCompletelyInFrame
  ).filter((element) => element.groupIds.length === 0);
  for (const element of individualElementsCompletelyInFrame) {
    nextElementsInFrame.add(element);
  }
  const newGroupElementsCompletelyInFrame = Array.from(
    elementsCompletelyInFrame
  ).filter((element) => element.groupIds.length > 0);
  const groupIds = selectGroupsFromGivenElements(
    newGroupElementsCompletelyInFrame,
    appState
  );
  for (const [id, isSelected] of Object.entries(groupIds)) {
    if (isSelected) {
      const elementsInGroup = getElementsInGroup(allElements, id);
      if (elementsAreInFrameBounds(elementsInGroup, frame, elementsMap)) {
        for (const element of elementsInGroup) {
          nextElementsInFrame.add(element);
        }
      }
    }
  }
  return [...nextElementsInFrame].filter((element) => {
    return !(isTextElement(element) && element.containerId);
  });
};
var getElementsInNewFrame = (elements, frame, elementsMap) => {
  return omitPartialGroups(
    omitGroupsContainingFrameLikes(
      elements,
      getElementsCompletelyInFrame(elements, frame, elementsMap)
    ),
    frame,
    elementsMap
  );
};
var omitPartialGroups = (elements, frame, allElementsMap) => {
  const elementsToReturn = [];
  const checkedGroups = /* @__PURE__ */ new Map();
  for (const element of elements) {
    let shouldOmit = false;
    if (element.groupIds.length > 0) {
      if (element.groupIds.some((gid) => checkedGroups.get(gid))) {
        shouldOmit = true;
      } else {
        const allElementsInGroup = new Set(
          element.groupIds.flatMap(
            (gid) => getElementsInGroup(allElementsMap, gid)
          )
        );
        shouldOmit = !elementsAreInFrameBounds(
          Array.from(allElementsInGroup),
          frame,
          allElementsMap
        );
      }
      element.groupIds.forEach((gid) => {
        checkedGroups.set(gid, shouldOmit);
      });
    }
    if (!shouldOmit) {
      elementsToReturn.push(element);
    }
  }
  return elementsToReturn;
};
var getContainingFrame = (element, elementsMap) => {
  if (!element.frameId) {
    return null;
  }
  return elementsMap.get(element.frameId) || null;
};
var filterElementsEligibleAsFrameChildren = (elements, frame) => {
  const otherFrames = /* @__PURE__ */ new Set();
  const elementsMap = arrayToMap(elements);
  elements = omitGroupsContainingFrameLikes(elements);
  for (const element of elements) {
    if (isFrameLikeElement(element) && element.id !== frame.id) {
      otherFrames.add(element.id);
    }
  }
  const processedGroups = /* @__PURE__ */ new Set();
  const eligibleElements = [];
  for (const element of elements) {
    if (isFrameLikeElement(element) || element.frameId && otherFrames.has(element.frameId)) {
      continue;
    }
    if (element.groupIds.length) {
      const shallowestGroupId = element.groupIds.at(-1);
      if (!processedGroups.has(shallowestGroupId)) {
        processedGroups.add(shallowestGroupId);
        const groupElements = getElementsInGroup(elements, shallowestGroupId);
        if (groupElements.some(
          (el) => elementOverlapsWithFrame(el, frame, elementsMap)
        )) {
          for (const child of groupElements) {
            eligibleElements.push(child);
          }
        }
      }
    } else {
      const overlaps = elementOverlapsWithFrame(element, frame, elementsMap);
      if (overlaps) {
        eligibleElements.push(element);
      }
    }
  }
  return eligibleElements;
};
var addElementsToFrame = (allElements, elementsToAdd, frame, appState) => {
  const elementsMap = arrayToMap(allElements);
  const currTargetFrameChildrenMap = /* @__PURE__ */ new Map();
  for (const element of allElements.values()) {
    if (element.frameId === frame.id) {
      currTargetFrameChildrenMap.set(element.id, true);
    }
  }
  const suppliedElementsToAddSet = new Set(elementsToAdd.map((el) => el.id));
  const finalElementsToAdd = [];
  const otherFrames = /* @__PURE__ */ new Set();
  for (const element of elementsToAdd) {
    if (isFrameLikeElement(element) && element.id !== frame.id) {
      otherFrames.add(element.id);
    }
  }
  for (const element of omitGroupsContainingFrameLikes(
    allElements,
    elementsToAdd
  )) {
    if (isFrameLikeElement(element) || element.frameId && otherFrames.has(element.frameId)) {
      continue;
    }
    if (element.frameId && appState.selectedElementIds[element.id] && appState.selectedElementIds[element.frameId]) {
      continue;
    }
    if (!currTargetFrameChildrenMap.has(element.id)) {
      finalElementsToAdd.push(element);
    }
    const boundTextElement = getBoundTextElement(element, elementsMap);
    if (boundTextElement && !suppliedElementsToAddSet.has(boundTextElement.id) && !currTargetFrameChildrenMap.has(boundTextElement.id)) {
      finalElementsToAdd.push(boundTextElement);
    }
  }
  for (const element of finalElementsToAdd) {
    mutateElement(
      element,
      {
        frameId: frame.id
      },
      false
    );
  }
  return allElements;
};
var removeElementsFromFrame = (elementsToRemove, elementsMap) => {
  const _elementsToRemove = /* @__PURE__ */ new Map();
  const toRemoveElementsByFrame = /* @__PURE__ */ new Map();
  for (const element of elementsToRemove) {
    if (element.frameId) {
      _elementsToRemove.set(element.id, element);
      const arr = toRemoveElementsByFrame.get(element.frameId) || [];
      arr.push(element);
      const boundTextElement = getBoundTextElement(element, elementsMap);
      if (boundTextElement) {
        _elementsToRemove.set(boundTextElement.id, boundTextElement);
        arr.push(boundTextElement);
      }
      toRemoveElementsByFrame.set(element.frameId, arr);
    }
  }
  for (const [, element] of _elementsToRemove) {
    mutateElement(
      element,
      {
        frameId: null
      },
      false
    );
  }
};
var removeAllElementsFromFrame = (allElements, frame) => {
  const elementsInFrame = getFrameChildren(allElements, frame.id);
  removeElementsFromFrame(elementsInFrame, arrayToMap(allElements));
  return allElements;
};
var replaceAllElementsInFrame = (allElements, nextElementsInFrame, frame, app) => {
  return addElementsToFrame(
    removeAllElementsFromFrame(allElements, frame),
    nextElementsInFrame,
    frame,
    app.state
  ).slice();
};
var updateFrameMembershipOfSelectedElements = (allElements, appState, app) => {
  const selectedElements = app.scene.getSelectedElements({
    selectedElementIds: appState.selectedElementIds,
    // supplying elements explicitly in case we're passed non-state elements
    elements: allElements
  });
  const elementsToFilter = new Set(selectedElements);
  if (appState.editingGroupId) {
    for (const element of selectedElements) {
      if (element.groupIds.length === 0) {
        elementsToFilter.add(element);
      } else {
        element.groupIds.flatMap((gid) => getElementsInGroup(allElements, gid)).forEach((element2) => elementsToFilter.add(element2));
      }
    }
  }
  const elementsToRemove = /* @__PURE__ */ new Set();
  const elementsMap = arrayToMap(allElements);
  elementsToFilter.forEach((element) => {
    if (element.frameId && !isFrameLikeElement(element) && !isElementInFrame(element, elementsMap, appState)) {
      elementsToRemove.add(element);
    }
  });
  if (elementsToRemove.size > 0) {
    removeElementsFromFrame(elementsToRemove, elementsMap);
  }
  return allElements;
};
var omitGroupsContainingFrameLikes = (allElements, selectedElements) => {
  const uniqueGroupIds = /* @__PURE__ */ new Set();
  const elements = selectedElements || allElements;
  for (const el of elements.values()) {
    const topMostGroupId = el.groupIds[el.groupIds.length - 1];
    if (topMostGroupId) {
      uniqueGroupIds.add(topMostGroupId);
    }
  }
  const rejectedGroupIds = /* @__PURE__ */ new Set();
  for (const groupId of uniqueGroupIds) {
    if (getElementsInGroup(allElements, groupId).some(
      (el) => isFrameLikeElement(el)
    )) {
      rejectedGroupIds.add(groupId);
    }
  }
  const ret = [];
  for (const element of elements.values()) {
    if (!rejectedGroupIds.has(element.groupIds[element.groupIds.length - 1])) {
      ret.push(element);
    }
  }
  return ret;
};
var getTargetFrame = (element, elementsMap, appState) => {
  const _element = isTextElement(element) ? getContainerElement(element, elementsMap) || element : element;
  if (_element.frameId && appState.selectedElementIds[_element.id] && appState.selectedElementIds[_element.frameId]) {
    return getContainingFrame(_element, elementsMap);
  }
  return appState.selectedElementIds[_element.id] && appState.selectedElementsAreBeingDragged ? appState.frameToHighlight : getContainingFrame(_element, elementsMap);
};
var isElementInFrame = (element, allElementsMap, appState, opts) => {
  const frame = opts?.targetFrame ?? getTargetFrame(element, allElementsMap, appState);
  if (!frame) {
    return false;
  }
  const _element = isTextElement(element) ? getContainerElement(element, allElementsMap) || element : element;
  const setGroupsInFrame = (isInFrame) => {
    if (opts?.checkedGroups) {
      _element.groupIds.forEach((groupId) => {
        opts.checkedGroups?.set(groupId, isInFrame);
      });
    }
  };
  if (
    // if the element is not selected, or it is selected but not being dragged,
    // frame membership won't update, so return true
    !appState.selectedElementIds[_element.id] || !appState.selectedElementsAreBeingDragged || // if both frame and element are selected, won't update membership, so return true
    appState.selectedElementIds[_element.id] && appState.selectedElementIds[frame.id]
  ) {
    return true;
  }
  if (_element.groupIds.length === 0) {
    return elementOverlapsWithFrame(_element, frame, allElementsMap);
  }
  for (const gid of _element.groupIds) {
    if (opts?.checkedGroups?.has(gid)) {
      return opts.checkedGroups.get(gid);
    }
  }
  const allElementsInGroup = new Set(
    _element.groupIds.filter((gid) => {
      if (opts?.checkedGroups) {
        return !opts.checkedGroups.has(gid);
      }
      return true;
    }).flatMap((gid) => getElementsInGroup(allElementsMap, gid))
  );
  if (appState.editingGroupId && appState.selectedElementsAreBeingDragged) {
    const selectedElements = new Set(
      getSelectedElements(allElementsMap, appState)
    );
    const editingGroupOverlapsFrame = appState.frameToHighlight !== null;
    if (editingGroupOverlapsFrame) {
      return true;
    }
    selectedElements.forEach((selectedElement) => {
      allElementsInGroup.delete(selectedElement);
    });
  }
  for (const elementInGroup of allElementsInGroup) {
    if (isFrameLikeElement(elementInGroup)) {
      setGroupsInFrame(false);
      return false;
    }
  }
  for (const elementInGroup of allElementsInGroup) {
    if (elementOverlapsWithFrame(elementInGroup, frame, allElementsMap)) {
      setGroupsInFrame(true);
      return true;
    }
  }
  return false;
};
var shouldApplyFrameClip = (element, frame, appState, elementsMap, checkedGroups) => {
  if (!appState.frameRendering || !appState.frameRendering.clip) {
    return false;
  }
  const shouldClipElementItself = isElementIntersectingFrame(element, frame, elementsMap) || isElementContainingFrame(element, frame, elementsMap);
  if (shouldClipElementItself) {
    for (const groupId of element.groupIds) {
      checkedGroups?.set(groupId, true);
    }
    return true;
  }
  if (!shouldClipElementItself && element.groupIds.length > 0 && !elementsAreInFrameBounds([element], frame, elementsMap)) {
    let shouldClip = false;
    if (!appState.selectedElementsAreBeingDragged) {
      shouldClip = element.frameId === frame.id;
      for (const groupId of element.groupIds) {
        checkedGroups?.set(groupId, shouldClip);
      }
    } else {
      shouldClip = isElementInFrame(element, elementsMap, appState, {
        targetFrame: frame,
        checkedGroups
      });
    }
    for (const groupId of element.groupIds) {
      checkedGroups?.set(groupId, shouldClip);
    }
    return shouldClip;
  }
  return false;
};
var getFrameLikeTitle = (element) => {
  return element.name === null ? isFrameElement(element) ? "Frame" : "AI Frame" : element.name;
};
var getElementsOverlappingFrame = (elements, frame) => {
  return elementsOverlappingBBox({
    elements,
    bounds: frame,
    type: "overlap"
  }).filter((el) => !el.frameId || el.frameId === frame.id);
};
var frameAndChildrenSelectedTogether = (selectedElements) => {
  const selectedElementsMap = arrayToMap(selectedElements);
  return selectedElements.length > 1 && selectedElements.some(
    (element) => element.frameId && selectedElementsMap.has(element.frameId)
  );
};

// ../element/src/selection.ts
var excludeElementsInFramesFromSelection = (selectedElements) => {
  const framesInSelection = /* @__PURE__ */ new Set();
  selectedElements.forEach((element) => {
    if (isFrameLikeElement(element)) {
      framesInSelection.add(element.id);
    }
  });
  return selectedElements.filter((element) => {
    if (element.frameId && framesInSelection.has(element.frameId)) {
      return false;
    }
    return true;
  });
};
var getElementsWithinSelection = (elements, selection, elementsMap, excludeElementsInFrames = true) => {
  const [selectionX1, selectionY1, selectionX2, selectionY2] = getElementAbsoluteCoords(selection, elementsMap);
  let elementsInSelection = elements.filter((element) => {
    let [elementX1, elementY1, elementX2, elementY2] = getElementBounds(
      element,
      elementsMap
    );
    const containingFrame = getContainingFrame(element, elementsMap);
    if (containingFrame) {
      const [fx1, fy1, fx2, fy2] = getElementBounds(
        containingFrame,
        elementsMap
      );
      elementX1 = Math.max(fx1, elementX1);
      elementY1 = Math.max(fy1, elementY1);
      elementX2 = Math.min(fx2, elementX2);
      elementY2 = Math.min(fy2, elementY2);
    }
    return element.locked === false && element.type !== "selection" && !isBoundToContainer(element) && selectionX1 <= elementX1 && selectionY1 <= elementY1 && selectionX2 >= elementX2 && selectionY2 >= elementY2;
  });
  elementsInSelection = excludeElementsInFrames ? excludeElementsInFramesFromSelection(elementsInSelection) : elementsInSelection;
  elementsInSelection = elementsInSelection.filter((element) => {
    const containingFrame = getContainingFrame(element, elementsMap);
    if (containingFrame) {
      return elementOverlapsWithFrame(element, containingFrame, elementsMap);
    }
    return true;
  });
  return elementsInSelection;
};
var getVisibleAndNonSelectedElements = (elements, selectedElements, appState, elementsMap) => {
  const selectedElementsSet = new Set(
    selectedElements.map((element) => element.id)
  );
  return elements.filter((element) => {
    const isVisible = isElementInViewport(
      element,
      appState.width,
      appState.height,
      appState,
      elementsMap
    );
    return !selectedElementsSet.has(element.id) && isVisible;
  });
};
var isSomeElementSelected = function() {
  let lastElements = null;
  let lastSelectedElementIds = null;
  let isSelected = null;
  const ret = (elements, appState) => {
    if (isSelected != null && elements === lastElements && appState.selectedElementIds === lastSelectedElementIds) {
      return isSelected;
    }
    isSelected = elements.some(
      (element) => appState.selectedElementIds[element.id]
    );
    lastElements = elements;
    lastSelectedElementIds = appState.selectedElementIds;
    return isSelected;
  };
  ret.clearCache = () => {
    lastElements = null;
    lastSelectedElementIds = null;
    isSelected = null;
  };
  return ret;
}();
var getCommonAttributeOfSelectedElements = (elements, appState, getAttribute) => {
  const attributes = Array.from(
    new Set(
      getSelectedElements(elements, appState).map(
        (element) => getAttribute(element)
      )
    )
  );
  return attributes.length === 1 ? attributes[0] : null;
};
var getSelectedElements = (elements, appState, opts) => {
  const addedElements = /* @__PURE__ */ new Set();
  const selectedElements = [];
  for (const element of elements.values()) {
    if (appState.selectedElementIds[element.id]) {
      selectedElements.push(element);
      addedElements.add(element.id);
      continue;
    }
    if (opts?.includeBoundTextElement && isBoundToContainer(element) && appState.selectedElementIds[element?.containerId]) {
      selectedElements.push(element);
      addedElements.add(element.id);
      continue;
    }
  }
  if (opts?.includeElementsInFrames) {
    const elementsToInclude = [];
    selectedElements.forEach((element) => {
      if (isFrameLikeElement(element)) {
        getFrameChildren(elements, element.id).forEach(
          (e) => !addedElements.has(e.id) && elementsToInclude.push(e)
        );
      }
      elementsToInclude.push(element);
    });
    return elementsToInclude;
  }
  return selectedElements;
};
var getTargetElements = (elements, appState) => appState.editingTextElement ? [appState.editingTextElement] : appState.newElement ? [appState.newElement] : getSelectedElements(elements, appState, {
  includeBoundTextElement: true
});
var makeNextSelectedElementIds = (nextSelectedElementIds, prevState) => {
  if (isShallowEqual(prevState.selectedElementIds, nextSelectedElementIds)) {
    return prevState.selectedElementIds;
  }
  return nextSelectedElementIds;
};

// ../element/src/groups.ts
var selectGroup = (groupId, appState, elements) => {
  const elementsInGroup = elements.reduce(
    (acc, element) => {
      if (element.groupIds.includes(groupId)) {
        acc[element.id] = true;
      }
      return acc;
    },
    {}
  );
  if (Object.keys(elementsInGroup).length < 2) {
    if (appState.selectedGroupIds[groupId] || appState.editingGroupId === groupId) {
      return {
        selectedElementIds: appState.selectedElementIds,
        selectedGroupIds: { ...appState.selectedGroupIds, [groupId]: false },
        editingGroupId: null
      };
    }
    return appState;
  }
  return {
    editingGroupId: appState.editingGroupId,
    selectedGroupIds: { ...appState.selectedGroupIds, [groupId]: true },
    selectedElementIds: {
      ...appState.selectedElementIds,
      ...elementsInGroup
    }
  };
};
var selectGroupsForSelectedElements = function() {
  let lastSelectedElements = null;
  let lastElements = null;
  let lastReturnValue = null;
  const _selectGroups = (selectedElements, elements, appState, prevAppState) => {
    if (lastReturnValue !== void 0 && elements === lastElements && selectedElements === lastSelectedElements && appState.editingGroupId === lastReturnValue?.editingGroupId) {
      return lastReturnValue;
    }
    const selectedGroupIds = {};
    for (const selectedElement of selectedElements) {
      let groupIds = selectedElement.groupIds;
      if (appState.editingGroupId) {
        const indexOfEditingGroup = groupIds.indexOf(appState.editingGroupId);
        if (indexOfEditingGroup > -1) {
          groupIds = groupIds.slice(0, indexOfEditingGroup);
        }
      }
      if (groupIds.length > 0) {
        const lastSelectedGroup = groupIds[groupIds.length - 1];
        selectedGroupIds[lastSelectedGroup] = true;
      }
    }
    const groupElementsIndex = {};
    const selectedElementIdsInGroups = elements.reduce(
      (acc, element) => {
        if (element.isDeleted) {
          return acc;
        }
        const groupId = element.groupIds.find((id) => selectedGroupIds[id]);
        if (groupId) {
          acc[element.id] = true;
          if (!Array.isArray(groupElementsIndex[groupId])) {
            groupElementsIndex[groupId] = [element.id];
          } else {
            groupElementsIndex[groupId].push(element.id);
          }
        }
        return acc;
      },
      {}
    );
    for (const groupId of Object.keys(groupElementsIndex)) {
      if (groupElementsIndex[groupId].length < 2) {
        if (selectedGroupIds[groupId]) {
          selectedGroupIds[groupId] = false;
        }
      }
    }
    lastElements = elements;
    lastSelectedElements = selectedElements;
    lastReturnValue = {
      editingGroupId: appState.editingGroupId,
      selectedGroupIds,
      selectedElementIds: makeNextSelectedElementIds(
        {
          ...appState.selectedElementIds,
          ...selectedElementIdsInGroups
        },
        prevAppState
      )
    };
    return lastReturnValue;
  };
  const selectGroupsForSelectedElements2 = (appState, elements, prevAppState, app) => {
    const selectedElements = app ? app.scene.getSelectedElements({
      selectedElementIds: appState.selectedElementIds,
      // supplying elements explicitly in case we're passed non-state elements
      elements
    }) : getSelectedElements(elements, appState);
    if (!selectedElements.length) {
      return {
        selectedGroupIds: {},
        editingGroupId: null,
        selectedElementIds: makeNextSelectedElementIds(
          appState.selectedElementIds,
          prevAppState
        )
      };
    }
    return _selectGroups(selectedElements, elements, appState, prevAppState);
  };
  selectGroupsForSelectedElements2.clearCache = () => {
    lastElements = null;
    lastSelectedElements = null;
    lastReturnValue = null;
  };
  return selectGroupsForSelectedElements2;
}();
var isSelectedViaGroup = (appState, element) => getSelectedGroupForElement(appState, element) != null;
var getSelectedGroupForElement = (appState, element) => element.groupIds.filter((groupId) => groupId !== appState.editingGroupId).find((groupId) => appState.selectedGroupIds[groupId]);
var getSelectedGroupIds = (appState) => Object.entries(appState.selectedGroupIds).filter(([groupId, isSelected]) => isSelected).map(([groupId, isSelected]) => groupId);
var selectGroupsFromGivenElements = (elements, appState) => {
  let nextAppState = {
    ...appState,
    selectedGroupIds: {}
  };
  for (const element of elements) {
    let groupIds = element.groupIds;
    if (appState.editingGroupId) {
      const indexOfEditingGroup = groupIds.indexOf(appState.editingGroupId);
      if (indexOfEditingGroup > -1) {
        groupIds = groupIds.slice(0, indexOfEditingGroup);
      }
    }
    if (groupIds.length > 0) {
      const groupId = groupIds[groupIds.length - 1];
      nextAppState = {
        ...nextAppState,
        ...selectGroup(groupId, nextAppState, elements)
      };
    }
  }
  return nextAppState.selectedGroupIds;
};
var editGroupForSelectedElement = (appState, element) => {
  return {
    ...appState,
    editingGroupId: element.groupIds.length ? element.groupIds[0] : null,
    selectedGroupIds: {},
    selectedElementIds: {
      [element.id]: true
    }
  };
};
var isElementInGroup = (element, groupId) => element.groupIds.includes(groupId);
var getElementsInGroup = (elements, groupId) => {
  const elementsInGroup = [];
  for (const element of elements.values()) {
    if (isElementInGroup(element, groupId)) {
      elementsInGroup.push(element);
    }
  }
  return elementsInGroup;
};
var getSelectedGroupIdForElement = (element, selectedGroupIds) => element.groupIds.find((groupId) => selectedGroupIds[groupId]);
var addToGroup = (prevGroupIds, newGroupId, editingGroupId) => {
  const groupIds = [...prevGroupIds];
  const positionOfEditingGroupId = editingGroupId ? groupIds.indexOf(editingGroupId) : -1;
  const positionToInsert = positionOfEditingGroupId > -1 ? positionOfEditingGroupId : groupIds.length;
  groupIds.splice(positionToInsert, 0, newGroupId);
  return groupIds;
};
var removeFromSelectedGroups = (groupIds, selectedGroupIds) => groupIds.filter((groupId) => !selectedGroupIds[groupId]);
var getMaximumGroups = (elements, elementsMap) => {
  const groups = /* @__PURE__ */ new Map();
  elements.forEach((element) => {
    const groupId = element.groupIds.length === 0 ? element.id : element.groupIds[element.groupIds.length - 1];
    const currentGroupMembers = groups.get(groupId) || [];
    const boundTextElement = getBoundTextElement(element, elementsMap);
    if (boundTextElement) {
      currentGroupMembers.push(boundTextElement);
    }
    groups.set(groupId, [...currentGroupMembers, element]);
  });
  return Array.from(groups.values());
};
var getNonDeletedGroupIds = (elements) => {
  const nonDeletedGroupIds = /* @__PURE__ */ new Set();
  for (const [, element] of elements) {
    if (element.isDeleted) {
      continue;
    }
    for (const groupId of element.groupIds ?? []) {
      nonDeletedGroupIds.add(groupId);
    }
  }
  return nonDeletedGroupIds;
};
var elementsAreInSameGroup = (elements) => {
  const allGroups = elements.flatMap((element) => element.groupIds);
  const groupCount = /* @__PURE__ */ new Map();
  let maxGroup = 0;
  for (const group of allGroups) {
    groupCount.set(group, (groupCount.get(group) ?? 0) + 1);
    if (groupCount.get(group) > maxGroup) {
      maxGroup = groupCount.get(group);
    }
  }
  return maxGroup === elements.length;
};
var isInGroup = (element) => {
  return element.groupIds.length > 0;
};
var getNewGroupIdsForDuplication = (groupIds, editingGroupId, mapper) => {
  const copy = [...groupIds];
  const positionOfEditingGroupId = editingGroupId ? groupIds.indexOf(editingGroupId) : -1;
  const endIndex = positionOfEditingGroupId > -1 ? positionOfEditingGroupId : groupIds.length;
  for (let index = 0; index < endIndex; index++) {
    copy[index] = mapper(copy[index]);
  }
  return copy;
};

// ../element/src/fractionalIndex.ts
import { generateNKeysBetween } from "fractional-indexing";
var InvalidFractionalIndexError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "code", "ELEMENT_HAS_INVALID_INDEX");
  }
};
var validateFractionalIndices = (elements, {
  shouldThrow = false,
  includeBoundTextValidation = false,
  ignoreLogs,
  reconciliationContext
}) => {
  const errorMessages = [];
  const stringifyElement = (element) => `${element?.index}:${element?.id}:${element?.type}:${element?.isDeleted}:${element?.version}:${element?.versionNonce}`;
  const indices = elements.map((x) => x.index);
  for (const [i, index] of indices.entries()) {
    const predecessorIndex = indices[i - 1];
    const successorIndex = indices[i + 1];
    if (!isValidFractionalIndex(index, predecessorIndex, successorIndex)) {
      errorMessages.push(
        `Fractional indices invariant has been compromised: "${stringifyElement(
          elements[i - 1]
        )}", "${stringifyElement(elements[i])}", "${stringifyElement(
          elements[i + 1]
        )}"`
      );
    }
    if (includeBoundTextValidation && hasBoundTextElement(elements[i])) {
      const container = elements[i];
      const text = getBoundTextElement(container, arrayToMap(elements));
      if (text && text.index <= container.index) {
        errorMessages.push(
          `Fractional indices invariant for bound elements has been compromised: "${stringifyElement(
            text
          )}", "${stringifyElement(container)}"`
        );
      }
    }
  }
  if (errorMessages.length) {
    const error = new InvalidFractionalIndexError();
    const additionalContext = [];
    if (reconciliationContext) {
      additionalContext.push("Additional reconciliation context:");
      additionalContext.push(
        reconciliationContext.localElements.map((x) => stringifyElement(x))
      );
      additionalContext.push(
        reconciliationContext.remoteElements.map((x) => stringifyElement(x))
      );
    }
    if (!ignoreLogs) {
      console.error(
        errorMessages.join("\n\n"),
        error.stack,
        elements.map((x) => stringifyElement(x)),
        ...additionalContext
      );
    }
    if (shouldThrow) {
      throw error;
    }
  }
};
var orderByFractionalIndex = (elements) => {
  return elements.sort((a, b) => {
    if (isOrderedElement(a) && isOrderedElement(b)) {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return a.id < b.id ? -1 : 1;
    }
    return 1;
  });
};
var syncMovedIndices = (elements, movedElements) => {
  try {
    const indicesGroups = getMovedIndicesGroups(elements, movedElements);
    const elementsUpdates = generateIndices(elements, indicesGroups);
    const elementsCandidates = elements.map(
      (x) => elementsUpdates.has(x) ? { ...x, ...elementsUpdates.get(x) } : x
    );
    validateFractionalIndices(
      elementsCandidates,
      // we don't autofix invalid bound text indices, hence don't include it in the validation
      {
        includeBoundTextValidation: false,
        shouldThrow: true,
        ignoreLogs: true
      }
    );
    for (const [element, update] of elementsUpdates) {
      mutateElement(element, update, false);
    }
  } catch (e) {
    syncInvalidIndices(elements);
  }
  return elements;
};
var syncInvalidIndices = (elements) => {
  const indicesGroups = getInvalidIndicesGroups(elements);
  const elementsUpdates = generateIndices(elements, indicesGroups);
  for (const [element, update] of elementsUpdates) {
    mutateElement(element, update, false);
  }
  return elements;
};
var getMovedIndicesGroups = (elements, movedElements) => {
  const indicesGroups = [];
  let i = 0;
  while (i < elements.length) {
    if (movedElements.has(elements[i].id)) {
      const indicesGroup = [i - 1, i];
      while (++i < elements.length) {
        if (!movedElements.has(elements[i].id)) {
          break;
        }
        indicesGroup.push(i);
      }
      indicesGroup.push(i);
      indicesGroups.push(indicesGroup);
    } else {
      i++;
    }
  }
  return indicesGroups;
};
var getInvalidIndicesGroups = (elements) => {
  const indicesGroups = [];
  let lowerBound = void 0;
  let upperBound = void 0;
  let lowerBoundIndex = -1;
  let upperBoundIndex = 0;
  const getLowerBound = (index) => {
    const lowerBound2 = elements[lowerBoundIndex] ? elements[lowerBoundIndex].index : void 0;
    const candidate = elements[index - 1]?.index;
    if (!lowerBound2 && candidate || // first lowerBound
    lowerBound2 && candidate && candidate > lowerBound2) {
      return [candidate, index - 1];
    }
    return [lowerBound2, lowerBoundIndex];
  };
  const getUpperBound = (index) => {
    const upperBound2 = elements[upperBoundIndex] ? elements[upperBoundIndex].index : void 0;
    if (upperBound2 && index < upperBoundIndex) {
      return [upperBound2, upperBoundIndex];
    }
    let i2 = upperBoundIndex;
    while (++i2 < elements.length) {
      const candidate = elements[i2]?.index;
      if (!upperBound2 && candidate || // first upperBound
      upperBound2 && candidate && candidate > upperBound2) {
        return [candidate, i2];
      }
    }
    return [void 0, i2];
  };
  let i = 0;
  while (i < elements.length) {
    const current = elements[i].index;
    [lowerBound, lowerBoundIndex] = getLowerBound(i);
    [upperBound, upperBoundIndex] = getUpperBound(i);
    if (!isValidFractionalIndex(current, lowerBound, upperBound)) {
      const indicesGroup = [lowerBoundIndex, i];
      while (++i < elements.length) {
        const current2 = elements[i].index;
        const [nextLowerBound, nextLowerBoundIndex] = getLowerBound(i);
        const [nextUpperBound, nextUpperBoundIndex] = getUpperBound(i);
        if (isValidFractionalIndex(current2, nextLowerBound, nextUpperBound)) {
          break;
        }
        [lowerBound, lowerBoundIndex] = [nextLowerBound, nextLowerBoundIndex];
        [upperBound, upperBoundIndex] = [nextUpperBound, nextUpperBoundIndex];
        indicesGroup.push(i);
      }
      indicesGroup.push(upperBoundIndex);
      indicesGroups.push(indicesGroup);
    } else {
      i++;
    }
  }
  return indicesGroups;
};
var isValidFractionalIndex = (index, predecessor, successor) => {
  if (!index) {
    return false;
  }
  if (predecessor && successor) {
    return predecessor < index && index < successor;
  }
  if (!predecessor && successor) {
    return index < successor;
  }
  if (predecessor && !successor) {
    return predecessor < index;
  }
  return !!index;
};
var generateIndices = (elements, indicesGroups) => {
  const elementsUpdates = /* @__PURE__ */ new Map();
  for (const indices of indicesGroups) {
    const lowerBoundIndex = indices.shift();
    const upperBoundIndex = indices.pop();
    const fractionalIndices = generateNKeysBetween(
      elements[lowerBoundIndex]?.index,
      elements[upperBoundIndex]?.index,
      indices.length
    );
    for (let i = 0; i < indices.length; i++) {
      const element = elements[indices[i]];
      elementsUpdates.set(element, {
        index: fractionalIndices[i]
      });
    }
  }
  return elementsUpdates;
};
var isOrderedElement = (element) => {
  if (element.index) {
    return true;
  }
  return false;
};

// scene/Scene.ts
var getNonDeletedElements2 = (allElements) => {
  const elementsMap = /* @__PURE__ */ new Map();
  const elements = [];
  for (const element of allElements) {
    if (!element.isDeleted) {
      elements.push(element);
      elementsMap.set(
        element.id,
        element
      );
    }
  }
  return { elementsMap, elements };
};
var validateIndicesThrottled = throttle(
  (elements) => {
    if (isDevEnv() || isTestEnv() || window?.DEBUG_FRACTIONAL_INDICES) {
      validateFractionalIndices(elements, {
        // throw only in dev & test, to remain functional on `DEBUG_FRACTIONAL_INDICES`
        shouldThrow: isDevEnv() || isTestEnv(),
        includeBoundTextValidation: true
      });
    }
  },
  1e3 * 60,
  { leading: true, trailing: false }
);
var hashSelectionOpts = (opts) => {
  const keys = ["includeBoundTextElement", "includeElementsInFrames"];
  let hash = "";
  for (const key of keys) {
    hash += `${key}:${opts[key] ? "1" : "0"}`;
  }
  return hash;
};
var isIdKey = (elementKey) => {
  if (typeof elementKey === "string") {
    return true;
  }
  return false;
};
var _Scene = class _Scene {
  constructor() {
    // ---------------------------------------------------------------------------
    // instance methods/props
    // ---------------------------------------------------------------------------
    __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    __publicField(this, "nonDeletedElements", []);
    __publicField(this, "nonDeletedElementsMap", toBrandedType(
      /* @__PURE__ */ new Map()
    ));
    // ideally all elements within the scene should be wrapped around with `Ordered` type, but right now there is no real benefit doing so
    __publicField(this, "elements", []);
    __publicField(this, "nonDeletedFramesLikes", []);
    __publicField(this, "frames", []);
    __publicField(this, "elementsMap", toBrandedType(/* @__PURE__ */ new Map()));
    __publicField(this, "selectedElementsCache", {
      selectedElementIds: null,
      elements: null,
      cache: /* @__PURE__ */ new Map()
    });
    /**
     * Random integer regenerated each scene update.
     *
     * Does not relate to elements versions, it's only a renderer
     * cache-invalidation nonce at the moment.
     */
    __publicField(this, "sceneNonce");
    __publicField(this, "insertElement", (element) => {
      const index = element.frameId ? this.getElementIndex(element.frameId) : this.elements.length;
      this.insertElementAtIndex(element, index);
    });
    __publicField(this, "insertElements", (elements) => {
      if (!elements.length) {
        return;
      }
      const index = elements[0]?.frameId ? this.getElementIndex(elements[0].frameId) : this.elements.length;
      this.insertElementsAtIndex(elements, index);
    });
    __publicField(this, "getContainerElement", (element) => {
      if (!element) {
        return null;
      }
      if (element.containerId) {
        return this.getElement(element.containerId) || null;
      }
      return null;
    });
    __publicField(this, "getElementsFromId", (id) => {
      const elementsMap = this.getNonDeletedElementsMap();
      const el = elementsMap.get(id);
      if (el) {
        return [el];
      }
      return getElementsInGroup(elementsMap, id);
    });
  }
  static mapElementToScene(elementKey, scene) {
    if (isIdKey(elementKey)) {
      this.sceneMapById.set(elementKey, scene);
    } else {
      this.sceneMapByElement.set(elementKey, scene);
      this.sceneMapById.set(elementKey.id, scene);
    }
  }
  /**
   * @deprecated pass down `app.scene` and use it directly
   */
  static getScene(elementKey) {
    if (isIdKey(elementKey)) {
      return this.sceneMapById.get(elementKey) || null;
    }
    return this.sceneMapByElement.get(elementKey) || null;
  }
  getSceneNonce() {
    return this.sceneNonce;
  }
  getNonDeletedElementsMap() {
    return this.nonDeletedElementsMap;
  }
  getElementsIncludingDeleted() {
    return this.elements;
  }
  getElementsMapIncludingDeleted() {
    return this.elementsMap;
  }
  getNonDeletedElements() {
    return this.nonDeletedElements;
  }
  getFramesIncludingDeleted() {
    return this.frames;
  }
  getSelectedElements(opts) {
    const hash = hashSelectionOpts(opts);
    const elements = opts?.elements || this.nonDeletedElements;
    if (this.selectedElementsCache.elements === elements && this.selectedElementsCache.selectedElementIds === opts.selectedElementIds) {
      const cached = this.selectedElementsCache.cache.get(hash);
      if (cached) {
        return cached;
      }
    } else if (opts?.elements == null) {
      this.selectedElementsCache.cache.clear();
    }
    const selectedElements = getSelectedElements(
      elements,
      { selectedElementIds: opts.selectedElementIds },
      opts
    );
    if (opts?.elements == null) {
      this.selectedElementsCache.selectedElementIds = opts.selectedElementIds;
      this.selectedElementsCache.elements = this.nonDeletedElements;
      this.selectedElementsCache.cache.set(hash, selectedElements);
    }
    return selectedElements;
  }
  getNonDeletedFramesLikes() {
    return this.nonDeletedFramesLikes;
  }
  getElement(id) {
    return this.elementsMap.get(id) || null;
  }
  getNonDeletedElement(id) {
    const element = this.getElement(id);
    if (element && isNonDeletedElement(element)) {
      return element;
    }
    return null;
  }
  /**
   * A utility method to help with updating all scene elements, with the added
   * performance optimization of not renewing the array if no change is made.
   *
   * Maps all current excalidraw elements, invoking the callback for each
   * element. The callback should either return a new mapped element, or the
   * original element if no changes are made. If no changes are made to any
   * element, this results in a no-op. Otherwise, the newly mapped elements
   * are set as the next scene's elements.
   *
   * @returns whether a change was made
   */
  mapElements(iteratee) {
    let didChange = false;
    const newElements = this.elements.map((element) => {
      const nextElement = iteratee(element);
      if (nextElement !== element) {
        didChange = true;
      }
      return nextElement;
    });
    if (didChange) {
      this.replaceAllElements(newElements);
    }
    return didChange;
  }
  replaceAllElements(nextElements) {
    const _nextElements = (
      // ts doesn't like `Array.isArray` of `instanceof Map`
      nextElements instanceof Array ? nextElements : Array.from(nextElements.values())
    );
    const nextFrameLikes = [];
    validateIndicesThrottled(_nextElements);
    this.elements = syncInvalidIndices(_nextElements);
    this.elementsMap.clear();
    this.elements.forEach((element) => {
      if (isFrameLikeElement(element)) {
        nextFrameLikes.push(element);
      }
      this.elementsMap.set(element.id, element);
      _Scene.mapElementToScene(element, this);
    });
    const nonDeletedElements = getNonDeletedElements2(this.elements);
    this.nonDeletedElements = nonDeletedElements.elements;
    this.nonDeletedElementsMap = nonDeletedElements.elementsMap;
    this.frames = nextFrameLikes;
    this.nonDeletedFramesLikes = getNonDeletedElements2(this.frames).elements;
    this.triggerUpdate();
  }
  triggerUpdate() {
    this.sceneNonce = randomInteger();
    for (const callback of Array.from(this.callbacks)) {
      callback();
    }
  }
  onUpdate(cb) {
    if (this.callbacks.has(cb)) {
      throw new Error();
    }
    this.callbacks.add(cb);
    return () => {
      if (!this.callbacks.has(cb)) {
        throw new Error();
      }
      this.callbacks.delete(cb);
    };
  }
  destroy() {
    this.elements = [];
    this.nonDeletedElements = [];
    this.nonDeletedFramesLikes = [];
    this.frames = [];
    this.elementsMap.clear();
    this.selectedElementsCache.selectedElementIds = null;
    this.selectedElementsCache.elements = null;
    this.selectedElementsCache.cache.clear();
    _Scene.sceneMapById.forEach((scene, elementKey) => {
      if (scene === this) {
        _Scene.sceneMapById.delete(elementKey);
      }
    });
    this.callbacks.clear();
  }
  insertElementAtIndex(element, index) {
    if (!Number.isFinite(index) || index < 0) {
      throw new Error(
        "insertElementAtIndex can only be called with index >= 0"
      );
    }
    const nextElements = [
      ...this.elements.slice(0, index),
      element,
      ...this.elements.slice(index)
    ];
    syncMovedIndices(nextElements, arrayToMap([element]));
    this.replaceAllElements(nextElements);
  }
  insertElementsAtIndex(elements, index) {
    if (!elements.length) {
      return;
    }
    if (!Number.isFinite(index) || index < 0) {
      throw new Error(
        "insertElementAtIndex can only be called with index >= 0"
      );
    }
    const nextElements = [
      ...this.elements.slice(0, index),
      ...elements,
      ...this.elements.slice(index)
    ];
    syncMovedIndices(nextElements, arrayToMap(elements));
    this.replaceAllElements(nextElements);
  }
  getElementIndex(elementId) {
    return this.elements.findIndex((element) => element.id === elementId);
  }
};
// ---------------------------------------------------------------------------
// static methods/props
// ---------------------------------------------------------------------------
__publicField(_Scene, "sceneMapByElement", /* @__PURE__ */ new WeakMap());
__publicField(_Scene, "sceneMapById", /* @__PURE__ */ new Map());
var Scene = _Scene;
var Scene_default = Scene;

// ../element/src/linearElementEditor.ts
var editorMidPointsCache = { version: null, points: [], zoom: null };
var _LinearElementEditor = class _LinearElementEditor {
  constructor(element) {
    __publicField(this, "elementId");
    /** indices */
    __publicField(this, "selectedPointsIndices");
    __publicField(this, "pointerDownState");
    /** whether you're dragging a point */
    __publicField(this, "isDragging");
    __publicField(this, "lastUncommittedPoint");
    __publicField(this, "pointerOffset");
    __publicField(this, "startBindingElement");
    __publicField(this, "endBindingElement");
    __publicField(this, "hoverPointIndex");
    __publicField(this, "segmentMidPointHoveredCoords");
    __publicField(this, "elbowed");
    this.elementId = element.id;
    if (!pointsEqual(element.points[0], pointFrom(0, 0))) {
      console.error("Linear element is not normalized", Error().stack);
    }
    this.selectedPointsIndices = null;
    this.lastUncommittedPoint = null;
    this.isDragging = false;
    this.pointerOffset = { x: 0, y: 0 };
    this.startBindingElement = "keep";
    this.endBindingElement = "keep";
    this.pointerDownState = {
      prevSelectedPointsIndices: null,
      lastClickedPoint: -1,
      lastClickedIsEndPoint: false,
      origin: null,
      segmentMidpoint: {
        value: null,
        index: null,
        added: false
      }
    };
    this.hoverPointIndex = -1;
    this.segmentMidPointHoveredCoords = null;
    this.elbowed = isElbowArrow(element) && element.elbowed;
  }
  /**
   * @param id the `elementId` from the instance of this class (so that we can
   *  statically guarantee this method returns an ExcalidrawLinearElement)
   */
  static getElement(id, elementsMap) {
    const element = elementsMap.get(id);
    if (element) {
      return element;
    }
    return null;
  }
  static handleBoxSelection(event, appState, setState, elementsMap) {
    if (!appState.editingLinearElement || !appState.selectionElement) {
      return false;
    }
    const { editingLinearElement } = appState;
    const { selectedPointsIndices, elementId } = editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return false;
    }
    const [selectionX1, selectionY1, selectionX2, selectionY2] = getElementAbsoluteCoords(appState.selectionElement, elementsMap);
    const pointsSceneCoords = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    const nextSelectedPoints = pointsSceneCoords.reduce((acc, point, index) => {
      if (point[0] >= selectionX1 && point[0] <= selectionX2 && point[1] >= selectionY1 && point[1] <= selectionY2 || event.shiftKey && selectedPointsIndices?.includes(index)) {
        acc.push(index);
      }
      return acc;
    }, []).filter((index) => {
      if (isElbowArrow(element) && index !== 0 && index !== element.points.length - 1) {
        return false;
      }
      return true;
    });
    setState({
      editingLinearElement: {
        ...editingLinearElement,
        selectedPointsIndices: nextSelectedPoints.length ? nextSelectedPoints : null
      }
    });
  }
  /**
   * @returns whether point was dragged
   */
  static handlePointDragging(event, app, scenePointerX, scenePointerY, maybeSuggestBinding, linearElementEditor, scene) {
    if (!linearElementEditor) {
      return null;
    }
    const { elementId } = linearElementEditor;
    const elementsMap = scene.getNonDeletedElementsMap();
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return null;
    }
    if (isElbowArrow(element) && !linearElementEditor.pointerDownState.lastClickedIsEndPoint && linearElementEditor.pointerDownState.lastClickedPoint !== 0) {
      return null;
    }
    const selectedPointsIndices = isElbowArrow(element) ? [
      !!linearElementEditor.selectedPointsIndices?.includes(0) ? 0 : void 0,
      !!linearElementEditor.selectedPointsIndices?.find((idx) => idx > 0) ? element.points.length - 1 : void 0
    ].filter((idx) => idx !== void 0) : linearElementEditor.selectedPointsIndices;
    const lastClickedPoint = isElbowArrow(element) ? linearElementEditor.pointerDownState.lastClickedPoint > 0 ? element.points.length - 1 : 0 : linearElementEditor.pointerDownState.lastClickedPoint;
    const draggingPoint = element.points[lastClickedPoint];
    if (selectedPointsIndices && draggingPoint) {
      if (shouldRotateWithDiscreteAngle(event) && selectedPointsIndices.length === 1 && element.points.length > 1) {
        const selectedIndex = selectedPointsIndices[0];
        const referencePoint = element.points[selectedIndex === 0 ? 1 : selectedIndex - 1];
        const [width, height] = _LinearElementEditor._getShiftLockedDelta(
          element,
          elementsMap,
          referencePoint,
          pointFrom(scenePointerX, scenePointerY),
          event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
        );
        _LinearElementEditor.movePoints(element, [
          {
            index: selectedIndex,
            point: pointFrom(
              width + referencePoint[0],
              height + referencePoint[1]
            ),
            isDragging: selectedIndex === lastClickedPoint
          }
        ]);
      } else {
        const newDraggingPointPosition = _LinearElementEditor.createPointAt(
          element,
          elementsMap,
          scenePointerX - linearElementEditor.pointerOffset.x,
          scenePointerY - linearElementEditor.pointerOffset.y,
          event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
        );
        const deltaX = newDraggingPointPosition[0] - draggingPoint[0];
        const deltaY = newDraggingPointPosition[1] - draggingPoint[1];
        _LinearElementEditor.movePoints(
          element,
          selectedPointsIndices.map((pointIndex) => {
            const newPointPosition = pointIndex === lastClickedPoint ? _LinearElementEditor.createPointAt(
              element,
              elementsMap,
              scenePointerX - linearElementEditor.pointerOffset.x,
              scenePointerY - linearElementEditor.pointerOffset.y,
              event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
            ) : pointFrom(
              element.points[pointIndex][0] + deltaX,
              element.points[pointIndex][1] + deltaY
            );
            return {
              index: pointIndex,
              point: newPointPosition,
              isDragging: pointIndex === lastClickedPoint
            };
          })
        );
      }
      const boundTextElement = getBoundTextElement(element, elementsMap);
      if (boundTextElement) {
        handleBindTextResize(element, elementsMap, false);
      }
      if (isBindingElement(element, false)) {
        const coords = [];
        const firstSelectedIndex = selectedPointsIndices[0];
        if (firstSelectedIndex === 0) {
          coords.push(
            tupleToCoors(
              _LinearElementEditor.getPointGlobalCoordinates(
                element,
                element.points[0],
                elementsMap
              )
            )
          );
        }
        const lastSelectedIndex = selectedPointsIndices[selectedPointsIndices.length - 1];
        if (lastSelectedIndex === element.points.length - 1) {
          coords.push(
            tupleToCoors(
              _LinearElementEditor.getPointGlobalCoordinates(
                element,
                element.points[lastSelectedIndex],
                elementsMap
              )
            )
          );
        }
        if (coords.length) {
          maybeSuggestBinding(element, coords);
        }
      }
      return {
        ...linearElementEditor,
        selectedPointsIndices,
        segmentMidPointHoveredCoords: lastClickedPoint !== 0 && lastClickedPoint !== element.points.length - 1 ? this.getPointGlobalCoordinates(
          element,
          draggingPoint,
          elementsMap
        ) : null,
        hoverPointIndex: lastClickedPoint === 0 || lastClickedPoint === element.points.length - 1 ? lastClickedPoint : -1,
        isDragging: true
      };
    }
    return null;
  }
  static handlePointerUp(event, editingLinearElement, appState, scene) {
    const elementsMap = scene.getNonDeletedElementsMap();
    const elements = scene.getNonDeletedElements();
    const { elementId, selectedPointsIndices, isDragging, pointerDownState } = editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return editingLinearElement;
    }
    const bindings = {};
    if (isDragging && selectedPointsIndices) {
      for (const selectedPoint of selectedPointsIndices) {
        if (selectedPoint === 0 || selectedPoint === element.points.length - 1) {
          if (isPathALoop(element.points, appState.zoom.value)) {
            _LinearElementEditor.movePoints(element, [
              {
                index: selectedPoint,
                point: selectedPoint === 0 ? element.points[element.points.length - 1] : element.points[0]
              }
            ]);
          }
          const bindingElement = isBindingEnabled(appState) ? getHoveredElementForBinding(
            tupleToCoors(
              _LinearElementEditor.getPointAtIndexGlobalCoordinates(
                element,
                selectedPoint,
                elementsMap
              )
            ),
            elements,
            elementsMap,
            appState.zoom,
            isElbowArrow(element),
            isElbowArrow(element)
          ) : null;
          bindings[selectedPoint === 0 ? "startBindingElement" : "endBindingElement"] = bindingElement;
        }
      }
    }
    return {
      ...editingLinearElement,
      ...bindings,
      // if clicking without previously dragging a point(s), and not holding
      // shift, deselect all points except the one clicked. If holding shift,
      // toggle the point.
      selectedPointsIndices: isDragging || event.shiftKey ? !isDragging && event.shiftKey && pointerDownState.prevSelectedPointsIndices?.includes(
        pointerDownState.lastClickedPoint
      ) ? selectedPointsIndices && selectedPointsIndices.filter(
        (pointIndex) => pointIndex !== pointerDownState.lastClickedPoint
      ) : selectedPointsIndices : selectedPointsIndices?.includes(pointerDownState.lastClickedPoint) ? [pointerDownState.lastClickedPoint] : selectedPointsIndices,
      isDragging: false,
      pointerOffset: { x: 0, y: 0 }
    };
  }
  static isSegmentTooShort(element, startPoint, endPoint, index, zoom) {
    if (isElbowArrow(element)) {
      if (index >= 0 && index < element.points.length) {
        return pointDistance(startPoint, endPoint) * zoom.value < _LinearElementEditor.POINT_HANDLE_SIZE / 2;
      }
      return false;
    }
    let distance2 = pointDistance(startPoint, endPoint);
    if (element.points.length > 2 && element.roundness) {
      distance2 = getBezierCurveLength(element, endPoint);
    }
    return distance2 * zoom.value < _LinearElementEditor.POINT_HANDLE_SIZE * 4;
  }
  static getSegmentMidPoint(element, startPoint, endPoint, endPointIndex, elementsMap) {
    let segmentMidPoint = pointCenter(startPoint, endPoint);
    if (element.points.length > 2 && element.roundness) {
      const controlPoints = getControlPointsForBezierCurve(
        element,
        element.points[endPointIndex]
      );
      if (controlPoints) {
        const t = mapIntervalToBezierT(
          element,
          element.points[endPointIndex],
          0.5
        );
        segmentMidPoint = _LinearElementEditor.getPointGlobalCoordinates(
          element,
          getBezierXY(
            controlPoints[0],
            controlPoints[1],
            controlPoints[2],
            controlPoints[3],
            t
          ),
          elementsMap
        );
      }
    }
    return segmentMidPoint;
  }
  static getSegmentMidPointIndex(linearElementEditor, appState, midPoint, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElementEditor.elementId,
      elementsMap
    );
    if (!element) {
      return -1;
    }
    const midPoints = _LinearElementEditor.getEditorMidPoints(
      element,
      elementsMap,
      appState
    );
    let index = 0;
    while (index < midPoints.length) {
      if (_LinearElementEditor.arePointsEqual(midPoint, midPoints[index])) {
        return index + 1;
      }
      index++;
    }
    return -1;
  }
  static handlePointerDown(event, app, store, scenePointer, linearElementEditor, scene) {
    const appState = app.state;
    const elementsMap = scene.getNonDeletedElementsMap();
    const elements = scene.getNonDeletedElements();
    const ret = {
      didAddPoint: false,
      hitElement: null,
      linearElementEditor: null
    };
    if (!linearElementEditor) {
      return ret;
    }
    const { elementId } = linearElementEditor;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return ret;
    }
    const segmentMidpoint = _LinearElementEditor.getSegmentMidpointHitCoords(
      linearElementEditor,
      scenePointer,
      appState,
      elementsMap
    );
    let segmentMidpointIndex = null;
    if (segmentMidpoint) {
      segmentMidpointIndex = _LinearElementEditor.getSegmentMidPointIndex(
        linearElementEditor,
        appState,
        segmentMidpoint,
        elementsMap
      );
    } else if (event.altKey && appState.editingLinearElement) {
      if (linearElementEditor.lastUncommittedPoint == null) {
        mutateElement(element, {
          points: [
            ...element.points,
            _LinearElementEditor.createPointAt(
              element,
              elementsMap,
              scenePointer.x,
              scenePointer.y,
              event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
            )
          ]
        });
        ret.didAddPoint = true;
      }
      store.shouldCaptureIncrement();
      ret.linearElementEditor = {
        ...linearElementEditor,
        pointerDownState: {
          prevSelectedPointsIndices: linearElementEditor.selectedPointsIndices,
          lastClickedPoint: -1,
          lastClickedIsEndPoint: false,
          origin: { x: scenePointer.x, y: scenePointer.y },
          segmentMidpoint: {
            value: segmentMidpoint,
            index: segmentMidpointIndex,
            added: false
          }
        },
        selectedPointsIndices: [element.points.length - 1],
        lastUncommittedPoint: null,
        endBindingElement: getHoveredElementForBinding(
          scenePointer,
          elements,
          elementsMap,
          app.state.zoom,
          linearElementEditor.elbowed
        )
      };
      ret.didAddPoint = true;
      return ret;
    }
    const clickedPointIndex = _LinearElementEditor.getPointIndexUnderCursor(
      element,
      elementsMap,
      appState.zoom,
      scenePointer.x,
      scenePointer.y
    );
    if (clickedPointIndex >= 0 || segmentMidpoint) {
      ret.hitElement = element;
    } else {
      const { startBindingElement, endBindingElement } = linearElementEditor;
      if (isBindingEnabled(appState) && isBindingElement(element)) {
        bindOrUnbindLinearElement(
          element,
          startBindingElement,
          endBindingElement,
          elementsMap,
          scene
        );
      }
    }
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const targetPoint = clickedPointIndex > -1 && pointRotateRads(
      pointFrom(
        element.x + element.points[clickedPointIndex][0],
        element.y + element.points[clickedPointIndex][1]
      ),
      pointFrom(cx, cy),
      element.angle
    );
    const nextSelectedPointsIndices = clickedPointIndex > -1 || event.shiftKey ? event.shiftKey || linearElementEditor.selectedPointsIndices?.includes(clickedPointIndex) ? normalizeSelectedPoints([
      ...linearElementEditor.selectedPointsIndices || [],
      clickedPointIndex
    ]) : [clickedPointIndex] : null;
    ret.linearElementEditor = {
      ...linearElementEditor,
      pointerDownState: {
        prevSelectedPointsIndices: linearElementEditor.selectedPointsIndices,
        lastClickedPoint: clickedPointIndex,
        lastClickedIsEndPoint: clickedPointIndex === element.points.length - 1,
        origin: { x: scenePointer.x, y: scenePointer.y },
        segmentMidpoint: {
          value: segmentMidpoint,
          index: segmentMidpointIndex,
          added: false
        }
      },
      selectedPointsIndices: nextSelectedPointsIndices,
      pointerOffset: targetPoint ? {
        x: scenePointer.x - targetPoint[0],
        y: scenePointer.y - targetPoint[1]
      } : { x: 0, y: 0 }
    };
    return ret;
  }
  static arePointsEqual(point1, point2) {
    if (!point1 && !point2) {
      return true;
    }
    if (!point1 || !point2) {
      return false;
    }
    return pointsEqual(point1, point2);
  }
  static handlePointerMove(event, scenePointerX, scenePointerY, app, elementsMap) {
    const appState = app.state;
    if (!appState.editingLinearElement) {
      return null;
    }
    const { elementId, lastUncommittedPoint } = appState.editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return appState.editingLinearElement;
    }
    const { points } = element;
    const lastPoint = points[points.length - 1];
    if (!event.altKey) {
      if (lastPoint === lastUncommittedPoint) {
        _LinearElementEditor.deletePoints(element, [points.length - 1]);
      }
      return {
        ...appState.editingLinearElement,
        lastUncommittedPoint: null
      };
    }
    let newPoint;
    if (shouldRotateWithDiscreteAngle(event) && points.length >= 2) {
      const lastCommittedPoint = points[points.length - 2];
      const [width, height] = _LinearElementEditor._getShiftLockedDelta(
        element,
        elementsMap,
        lastCommittedPoint,
        pointFrom(scenePointerX, scenePointerY),
        event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
      );
      newPoint = pointFrom(
        width + lastCommittedPoint[0],
        height + lastCommittedPoint[1]
      );
    } else {
      newPoint = _LinearElementEditor.createPointAt(
        element,
        elementsMap,
        scenePointerX - appState.editingLinearElement.pointerOffset.x,
        scenePointerY - appState.editingLinearElement.pointerOffset.y,
        event[KEYS.CTRL_OR_CMD] || isElbowArrow(element) ? null : app.getEffectiveGridSize()
      );
    }
    if (lastPoint === lastUncommittedPoint) {
      _LinearElementEditor.movePoints(element, [
        {
          index: element.points.length - 1,
          point: newPoint
        }
      ]);
    } else {
      _LinearElementEditor.addPoints(element, [{ point: newPoint }]);
    }
    return {
      ...appState.editingLinearElement,
      lastUncommittedPoint: element.points[element.points.length - 1]
    };
  }
  /** scene coords */
  static getPointGlobalCoordinates(element, p, elementsMap) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const { x, y } = element;
    return pointRotateRads(
      pointFrom(x + p[0], y + p[1]),
      pointFrom(cx, cy),
      element.angle
    );
  }
  /** scene coords */
  static getPointsGlobalCoordinates(element, elementsMap) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    return element.points.map((p) => {
      const { x, y } = element;
      return pointRotateRads(
        pointFrom(x + p[0], y + p[1]),
        pointFrom(cx, cy),
        element.angle
      );
    });
  }
  static getPointAtIndexGlobalCoordinates(element, indexMaybeFromEnd, elementsMap) {
    const index = indexMaybeFromEnd < 0 ? element.points.length + indexMaybeFromEnd : indexMaybeFromEnd;
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const p = element.points[index];
    const { x, y } = element;
    return p ? pointRotateRads(
      pointFrom(x + p[0], y + p[1]),
      pointFrom(cx, cy),
      element.angle
    ) : pointRotateRads(pointFrom(x, y), pointFrom(cx, cy), element.angle);
  }
  static pointFromAbsoluteCoords(element, absoluteCoords, elementsMap) {
    if (isElbowArrow(element)) {
      return pointFrom(
        absoluteCoords[0] - element.x,
        absoluteCoords[1] - element.y
      );
    }
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const [x, y] = pointRotateRads(
      pointFrom(absoluteCoords[0], absoluteCoords[1]),
      pointFrom(cx, cy),
      -element.angle
    );
    return pointFrom(x - element.x, y - element.y);
  }
  static getPointIndexUnderCursor(element, elementsMap, zoom, x, y) {
    const pointHandles = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    let idx = pointHandles.length;
    while (--idx > -1) {
      const p = pointHandles[idx];
      if (pointDistance(pointFrom(x, y), pointFrom(p[0], p[1])) * zoom.value < // +1px to account for outline stroke
      _LinearElementEditor.POINT_HANDLE_SIZE + 1) {
        return idx;
      }
    }
    return -1;
  }
  static createPointAt(element, elementsMap, scenePointerX, scenePointerY, gridSize) {
    const pointerOnGrid = getGridPoint(scenePointerX, scenePointerY, gridSize);
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const [rotatedX, rotatedY] = pointRotateRads(
      pointFrom(pointerOnGrid[0], pointerOnGrid[1]),
      pointFrom(cx, cy),
      -element.angle
    );
    return pointFrom(rotatedX - element.x, rotatedY - element.y);
  }
  /**
   * Normalizes line points so that the start point is at [0,0]. This is
   * expected in various parts of the codebase. Also returns new x/y to account
   * for the potential normalization.
   */
  static getNormalizedPoints(element) {
    const { points } = element;
    const offsetX = points[0][0];
    const offsetY = points[0][1];
    return {
      points: points.map((p) => {
        return pointFrom(p[0] - offsetX, p[1] - offsetY);
      }),
      x: element.x + offsetX,
      y: element.y + offsetY
    };
  }
  // element-mutating methods
  // ---------------------------------------------------------------------------
  static normalizePoints(element) {
    mutateElement(element, _LinearElementEditor.getNormalizedPoints(element));
  }
  static duplicateSelectedPoints(appState, elementsMap) {
    invariant(
      appState.editingLinearElement,
      "Not currently editing a linear element"
    );
    const { selectedPointsIndices, elementId } = appState.editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    invariant(
      element,
      "The linear element does not exist in the provided Scene"
    );
    invariant(
      selectedPointsIndices != null,
      "There are no selected points to duplicate"
    );
    const { points } = element;
    const nextSelectedIndices = [];
    let pointAddedToEnd = false;
    let indexCursor = -1;
    const nextPoints = points.reduce((acc, p, index) => {
      ++indexCursor;
      acc.push(p);
      const isSelected = selectedPointsIndices.includes(index);
      if (isSelected) {
        const nextPoint = points[index + 1];
        if (!nextPoint) {
          pointAddedToEnd = true;
        }
        acc.push(
          nextPoint ? pointFrom((p[0] + nextPoint[0]) / 2, (p[1] + nextPoint[1]) / 2) : pointFrom(p[0], p[1])
        );
        nextSelectedIndices.push(indexCursor + 1);
        ++indexCursor;
      }
      return acc;
    }, []);
    mutateElement(element, { points: nextPoints });
    if (pointAddedToEnd) {
      const lastPoint = element.points[element.points.length - 1];
      _LinearElementEditor.movePoints(element, [
        {
          index: element.points.length - 1,
          point: pointFrom(lastPoint[0] + 30, lastPoint[1] + 30)
        }
      ]);
    }
    return {
      ...appState,
      editingLinearElement: {
        ...appState.editingLinearElement,
        selectedPointsIndices: nextSelectedIndices
      }
    };
  }
  static deletePoints(element, pointIndices) {
    let offsetX = 0;
    let offsetY = 0;
    const isDeletingOriginPoint = pointIndices.includes(0);
    if (isDeletingOriginPoint) {
      const firstNonDeletedPoint = element.points.find((point, idx) => {
        return !pointIndices.includes(idx);
      });
      if (firstNonDeletedPoint) {
        offsetX = firstNonDeletedPoint[0];
        offsetY = firstNonDeletedPoint[1];
      }
    }
    const nextPoints = element.points.reduce((acc, p, idx) => {
      if (!pointIndices.includes(idx)) {
        acc.push(
          !acc.length ? pointFrom(0, 0) : pointFrom(p[0] - offsetX, p[1] - offsetY)
        );
      }
      return acc;
    }, []);
    _LinearElementEditor._updatePoints(element, nextPoints, offsetX, offsetY);
  }
  static addPoints(element, targetPoints) {
    const offsetX = 0;
    const offsetY = 0;
    const nextPoints = [...element.points, ...targetPoints.map((x) => x.point)];
    _LinearElementEditor._updatePoints(element, nextPoints, offsetX, offsetY);
  }
  static movePoints(element, targetPoints, otherUpdates, sceneElementsMap) {
    const { points } = element;
    const [deltaX, deltaY] = targetPoints.find(({ index }) => index === 0)?.point ?? pointFrom(0, 0);
    const [offsetX, offsetY] = pointFrom(
      deltaX - points[0][0],
      deltaY - points[0][1]
    );
    const nextPoints = isElbowArrow(element) ? [
      targetPoints.find((t) => t.index === 0)?.point ?? points[0],
      targetPoints.find((t) => t.index === points.length - 1)?.point ?? points[points.length - 1]
    ] : points.map((p, idx) => {
      const current = targetPoints.find((t) => t.index === idx)?.point ?? p;
      return pointFrom(
        current[0] - offsetX,
        current[1] - offsetY
      );
    });
    _LinearElementEditor._updatePoints(
      element,
      nextPoints,
      offsetX,
      offsetY,
      otherUpdates,
      {
        isDragging: targetPoints.reduce(
          (dragging, targetPoint) => dragging || targetPoint.isDragging === true,
          false
        ),
        sceneElementsMap
      }
    );
  }
  static shouldAddMidpoint(linearElementEditor, pointerCoords, appState, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElementEditor.elementId,
      elementsMap
    );
    if (element && isElbowArrow(element)) {
      return false;
    }
    if (!element) {
      return false;
    }
    const { segmentMidpoint } = linearElementEditor.pointerDownState;
    if (segmentMidpoint.added || segmentMidpoint.value === null || segmentMidpoint.index === null || linearElementEditor.pointerDownState.origin === null) {
      return false;
    }
    const origin = linearElementEditor.pointerDownState.origin;
    const dist = pointDistance(
      pointFrom(origin.x, origin.y),
      pointFrom(pointerCoords.x, pointerCoords.y)
    );
    if (!appState.editingLinearElement && dist < DRAGGING_THRESHOLD / appState.zoom.value) {
      return false;
    }
    return true;
  }
  static addMidpoint(linearElementEditor, pointerCoords, app, snapToGrid, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElementEditor.elementId,
      elementsMap
    );
    if (!element) {
      return;
    }
    const { segmentMidpoint } = linearElementEditor.pointerDownState;
    const ret = {
      pointerDownState: linearElementEditor.pointerDownState,
      selectedPointsIndices: linearElementEditor.selectedPointsIndices
    };
    const midpoint = _LinearElementEditor.createPointAt(
      element,
      elementsMap,
      pointerCoords.x,
      pointerCoords.y,
      snapToGrid && !isElbowArrow(element) ? app.getEffectiveGridSize() : null
    );
    const points = [
      ...element.points.slice(0, segmentMidpoint.index),
      midpoint,
      ...element.points.slice(segmentMidpoint.index)
    ];
    mutateElement(element, {
      points
    });
    ret.pointerDownState = {
      ...linearElementEditor.pointerDownState,
      segmentMidpoint: {
        ...linearElementEditor.pointerDownState.segmentMidpoint,
        added: true
      },
      lastClickedPoint: segmentMidpoint.index
    };
    ret.selectedPointsIndices = [segmentMidpoint.index];
    return ret;
  }
  static _updatePoints(element, nextPoints, offsetX, offsetY, otherUpdates, options) {
    if (isElbowArrow(element)) {
      const updates = {};
      if (otherUpdates?.startBinding !== void 0) {
        updates.startBinding = otherUpdates.startBinding !== null && isFixedPointBinding(otherUpdates.startBinding) ? otherUpdates.startBinding : null;
      }
      if (otherUpdates?.endBinding !== void 0) {
        updates.endBinding = otherUpdates.endBinding !== null && isFixedPointBinding(otherUpdates.endBinding) ? otherUpdates.endBinding : null;
      }
      updates.points = Array.from(nextPoints);
      if (!options?.sceneElementsMap || Scene_default.getScene(element)) {
        mutateElement(element, updates, true, {
          isDragging: options?.isDragging
        });
      } else {
        Object.assign(element, {
          ...updates,
          angle: 0,
          ...updateElbowArrowPoints(
            element,
            options.sceneElementsMap,
            updates,
            {
              isDragging: options?.isDragging
            }
          )
        });
      }
      bumpVersion(element);
    } else {
      const nextCoords = getElementPointsCoords(element, nextPoints);
      const prevCoords = getElementPointsCoords(element, element.points);
      const nextCenterX = (nextCoords[0] + nextCoords[2]) / 2;
      const nextCenterY = (nextCoords[1] + nextCoords[3]) / 2;
      const prevCenterX = (prevCoords[0] + prevCoords[2]) / 2;
      const prevCenterY = (prevCoords[1] + prevCoords[3]) / 2;
      const dX = prevCenterX - nextCenterX;
      const dY = prevCenterY - nextCenterY;
      const rotated = pointRotateRads(
        pointFrom(offsetX, offsetY),
        pointFrom(dX, dY),
        element.angle
      );
      mutateElement(element, {
        ...otherUpdates,
        points: nextPoints,
        x: element.x + rotated[0],
        y: element.y + rotated[1]
      });
    }
  }
  static _getShiftLockedDelta(element, elementsMap, referencePoint, scenePointer, gridSize) {
    const referencePointCoords = _LinearElementEditor.getPointGlobalCoordinates(
      element,
      referencePoint,
      elementsMap
    );
    if (isElbowArrow(element)) {
      return [
        scenePointer[0] - referencePointCoords[0],
        scenePointer[1] - referencePointCoords[1]
      ];
    }
    const [gridX, gridY] = getGridPoint(
      scenePointer[0],
      scenePointer[1],
      gridSize
    );
    const { width, height } = getLockedLinearCursorAlignSize(
      referencePointCoords[0],
      referencePointCoords[1],
      gridX,
      gridY
    );
    return pointRotateRads(
      pointFrom(width, height),
      pointFrom(0, 0),
      -element.angle
    );
  }
  static moveFixedSegment(linearElement, index, x, y, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElement.elementId,
      elementsMap
    );
    if (!element || !isElbowArrow(element)) {
      return linearElement;
    }
    if (index && index > 0 && index < element.points.length) {
      const isHorizontal = headingIsHorizontal(
        vectorToHeading(
          vectorFromPoint(element.points[index], element.points[index - 1])
        )
      );
      const fixedSegments = (element.fixedSegments ?? []).reduce(
        (segments, s) => {
          segments[s.index] = s;
          return segments;
        },
        {}
      );
      fixedSegments[index] = {
        index,
        start: pointFrom(
          !isHorizontal ? x - element.x : element.points[index - 1][0],
          isHorizontal ? y - element.y : element.points[index - 1][1]
        ),
        end: pointFrom(
          !isHorizontal ? x - element.x : element.points[index][0],
          isHorizontal ? y - element.y : element.points[index][1]
        )
      };
      const nextFixedSegments = Object.values(fixedSegments).sort(
        (a, b) => a.index - b.index
      );
      const offset = nextFixedSegments.map((segment) => segment.index).reduce((count, idx) => idx < index ? count + 1 : count, 0);
      mutateElement(element, {
        fixedSegments: nextFixedSegments
      });
      const point = pointFrom(
        element.x + (element.fixedSegments[offset].start[0] + element.fixedSegments[offset].end[0]) / 2,
        element.y + (element.fixedSegments[offset].start[1] + element.fixedSegments[offset].end[1]) / 2
      );
      return {
        ...linearElement,
        segmentMidPointHoveredCoords: point,
        pointerDownState: {
          ...linearElement.pointerDownState,
          segmentMidpoint: {
            added: false,
            index: element.fixedSegments[offset].index,
            value: point
          }
        }
      };
    }
    return linearElement;
  }
  static deleteFixedSegment(element, index) {
    mutateElement(element, {
      fixedSegments: element.fixedSegments?.filter(
        (segment) => segment.index !== index
      )
    });
    mutateElement(element, {}, true);
  }
};
// ---------------------------------------------------------------------------
// static methods
// ---------------------------------------------------------------------------
__publicField(_LinearElementEditor, "POINT_HANDLE_SIZE", 10);
__publicField(_LinearElementEditor, "getEditorMidPoints", (element, elementsMap, appState) => {
  const boundText = getBoundTextElement(element, elementsMap);
  if (!isElbowArrow(element) && !appState.editingLinearElement && element.points.length > 2 && !boundText) {
    return [];
  }
  if (editorMidPointsCache.version === element.version && editorMidPointsCache.zoom === appState.zoom.value) {
    return editorMidPointsCache.points;
  }
  _LinearElementEditor.updateEditorMidPointsCache(
    element,
    elementsMap,
    appState
  );
  return editorMidPointsCache.points;
});
__publicField(_LinearElementEditor, "updateEditorMidPointsCache", (element, elementsMap, appState) => {
  const points = _LinearElementEditor.getPointsGlobalCoordinates(
    element,
    elementsMap
  );
  let index = 0;
  const midpoints = [];
  while (index < points.length - 1) {
    if (_LinearElementEditor.isSegmentTooShort(
      element,
      element.points[index],
      element.points[index + 1],
      index,
      appState.zoom
    )) {
      midpoints.push(null);
      index++;
      continue;
    }
    const segmentMidPoint = _LinearElementEditor.getSegmentMidPoint(
      element,
      points[index],
      points[index + 1],
      index + 1,
      elementsMap
    );
    midpoints.push(segmentMidPoint);
    index++;
  }
  editorMidPointsCache.points = midpoints;
  editorMidPointsCache.version = element.version;
  editorMidPointsCache.zoom = appState.zoom.value;
});
__publicField(_LinearElementEditor, "getSegmentMidpointHitCoords", (linearElementEditor, scenePointer, appState, elementsMap) => {
  const { elementId } = linearElementEditor;
  const element = _LinearElementEditor.getElement(elementId, elementsMap);
  if (!element) {
    return null;
  }
  const clickedPointIndex = _LinearElementEditor.getPointIndexUnderCursor(
    element,
    elementsMap,
    appState.zoom,
    scenePointer.x,
    scenePointer.y
  );
  if (!isElbowArrow(element) && clickedPointIndex >= 0) {
    return null;
  }
  const points = _LinearElementEditor.getPointsGlobalCoordinates(
    element,
    elementsMap
  );
  if (points.length >= 3 && !appState.editingLinearElement && !isElbowArrow(element)) {
    return null;
  }
  const threshold = (_LinearElementEditor.POINT_HANDLE_SIZE + 1) / appState.zoom.value;
  const existingSegmentMidpointHitCoords = linearElementEditor.segmentMidPointHoveredCoords;
  if (existingSegmentMidpointHitCoords) {
    const distance2 = pointDistance(
      pointFrom(
        existingSegmentMidpointHitCoords[0],
        existingSegmentMidpointHitCoords[1]
      ),
      pointFrom(scenePointer.x, scenePointer.y)
    );
    if (distance2 <= threshold) {
      return existingSegmentMidpointHitCoords;
    }
  }
  let index = 0;
  const midPoints = _LinearElementEditor.getEditorMidPoints(element, elementsMap, appState);
  while (index < midPoints.length) {
    if (midPoints[index] !== null) {
      const distance2 = pointDistance(
        midPoints[index],
        pointFrom(scenePointer.x, scenePointer.y)
      );
      if (distance2 <= threshold) {
        return midPoints[index];
      }
    }
    index++;
  }
  return null;
});
__publicField(_LinearElementEditor, "getBoundTextElementPosition", (element, boundTextElement, elementsMap) => {
  const points = _LinearElementEditor.getPointsGlobalCoordinates(
    element,
    elementsMap
  );
  if (points.length < 2) {
    mutateElement(boundTextElement, { isDeleted: true });
  }
  let x = 0;
  let y = 0;
  if (element.points.length % 2 === 1) {
    const index = Math.floor(element.points.length / 2);
    const midPoint = _LinearElementEditor.getPointGlobalCoordinates(
      element,
      element.points[index],
      elementsMap
    );
    x = midPoint[0] - boundTextElement.width / 2;
    y = midPoint[1] - boundTextElement.height / 2;
  } else {
    const index = element.points.length / 2 - 1;
    let midSegmentMidpoint = editorMidPointsCache.points[index];
    if (element.points.length === 2) {
      midSegmentMidpoint = pointCenter(points[0], points[1]);
    }
    if (!midSegmentMidpoint || editorMidPointsCache.version !== element.version) {
      midSegmentMidpoint = _LinearElementEditor.getSegmentMidPoint(
        element,
        points[index],
        points[index + 1],
        index + 1,
        elementsMap
      );
    }
    x = midSegmentMidpoint[0] - boundTextElement.width / 2;
    y = midSegmentMidpoint[1] - boundTextElement.height / 2;
  }
  return { x, y };
});
__publicField(_LinearElementEditor, "getMinMaxXYWithBoundText", (element, elementsMap, elementBounds, boundTextElement) => {
  let [x1, y1, x2, y2] = elementBounds;
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  const { x: boundTextX1, y: boundTextY1 } = _LinearElementEditor.getBoundTextElementPosition(
    element,
    boundTextElement,
    elementsMap
  );
  const boundTextX2 = boundTextX1 + boundTextElement.width;
  const boundTextY2 = boundTextY1 + boundTextElement.height;
  const centerPoint = pointFrom(cx, cy);
  const topLeftRotatedPoint = pointRotateRads(
    pointFrom(x1, y1),
    centerPoint,
    element.angle
  );
  const topRightRotatedPoint = pointRotateRads(
    pointFrom(x2, y1),
    centerPoint,
    element.angle
  );
  const counterRotateBoundTextTopLeft = pointRotateRads(
    pointFrom(boundTextX1, boundTextY1),
    centerPoint,
    -element.angle
  );
  const counterRotateBoundTextTopRight = pointRotateRads(
    pointFrom(boundTextX2, boundTextY1),
    centerPoint,
    -element.angle
  );
  const counterRotateBoundTextBottomLeft = pointRotateRads(
    pointFrom(boundTextX1, boundTextY2),
    centerPoint,
    -element.angle
  );
  const counterRotateBoundTextBottomRight = pointRotateRads(
    pointFrom(boundTextX2, boundTextY2),
    centerPoint,
    -element.angle
  );
  if (topLeftRotatedPoint[0] < topRightRotatedPoint[0] && topLeftRotatedPoint[1] >= topRightRotatedPoint[1]) {
    x1 = Math.min(x1, counterRotateBoundTextBottomLeft[0]);
    x2 = Math.max(
      x2,
      Math.max(
        counterRotateBoundTextTopRight[0],
        counterRotateBoundTextBottomRight[0]
      )
    );
    y1 = Math.min(y1, counterRotateBoundTextTopLeft[1]);
    y2 = Math.max(y2, counterRotateBoundTextBottomRight[1]);
  } else if (topLeftRotatedPoint[0] >= topRightRotatedPoint[0] && topLeftRotatedPoint[1] > topRightRotatedPoint[1]) {
    x1 = Math.min(x1, counterRotateBoundTextBottomRight[0]);
    x2 = Math.max(
      x2,
      Math.max(
        counterRotateBoundTextTopLeft[0],
        counterRotateBoundTextTopRight[0]
      )
    );
    y1 = Math.min(y1, counterRotateBoundTextBottomLeft[1]);
    y2 = Math.max(y2, counterRotateBoundTextTopRight[1]);
  } else if (topLeftRotatedPoint[0] >= topRightRotatedPoint[0]) {
    x1 = Math.min(x1, counterRotateBoundTextTopRight[0]);
    x2 = Math.max(x2, counterRotateBoundTextBottomLeft[0]);
    y1 = Math.min(y1, counterRotateBoundTextBottomRight[1]);
    y2 = Math.max(y2, counterRotateBoundTextTopLeft[1]);
  } else if (topLeftRotatedPoint[1] <= topRightRotatedPoint[1]) {
    x1 = Math.min(
      x1,
      Math.min(
        counterRotateBoundTextTopRight[0],
        counterRotateBoundTextTopLeft[0]
      )
    );
    x2 = Math.max(x2, counterRotateBoundTextBottomRight[0]);
    y1 = Math.min(y1, counterRotateBoundTextTopRight[1]);
    y2 = Math.max(y2, counterRotateBoundTextBottomLeft[1]);
  }
  return [x1, y1, x2, y2, cx, cy];
});
__publicField(_LinearElementEditor, "getElementAbsoluteCoords", (element, elementsMap, includeBoundText = false) => {
  let coords;
  let x1;
  let y1;
  let x2;
  let y2;
  if (element.points.length < 2 || !ShapeCache.get(element)) {
    const { minX, minY, maxX, maxY } = element.points.reduce(
      (limits, [x, y]) => {
        limits.minY = Math.min(limits.minY, y);
        limits.minX = Math.min(limits.minX, x);
        limits.maxX = Math.max(limits.maxX, x);
        limits.maxY = Math.max(limits.maxY, y);
        return limits;
      },
      { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
    );
    x1 = minX + element.x;
    y1 = minY + element.y;
    x2 = maxX + element.x;
    y2 = maxY + element.y;
  } else {
    const shape = ShapeCache.generateElementShape(element, null);
    const ops = getCurvePathOps(shape[0]);
    const [minX, minY, maxX, maxY] = getMinMaxXYFromCurvePathOps(ops);
    x1 = minX + element.x;
    y1 = minY + element.y;
    x2 = maxX + element.x;
    y2 = maxY + element.y;
  }
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  coords = [x1, y1, x2, y2, cx, cy];
  if (!includeBoundText) {
    return coords;
  }
  const boundTextElement = getBoundTextElement(element, elementsMap);
  if (boundTextElement) {
    coords = _LinearElementEditor.getMinMaxXYWithBoundText(
      element,
      elementsMap,
      [x1, y1, x2, y2],
      boundTextElement
    );
  }
  return coords;
});
var LinearElementEditor = _LinearElementEditor;
var normalizeSelectedPoints = (points) => {
  let nextPoints = [
    ...new Set(points.filter((p) => p !== null && p !== -1))
  ];
  nextPoints = nextPoints.sort((a, b) => a - b);
  return nextPoints.length ? nextPoints : null;
};

// ../element/src/shapes.ts
var getElementShape = (element, elementsMap) => {
  switch (element.type) {
    case "rectangle":
    case "diamond":
    case "frame":
    case "magicframe":
    case "embeddable":
    case "image":
    case "iframe":
    case "text":
    case "selection":
      return getPolygonShape(element);
    case "arrow":
    case "line": {
      const roughShape = ShapeCache.get(element)?.[0] ?? ShapeCache.generateElementShape(element, null)[0];
      const [, , , , cx, cy] = getElementAbsoluteCoords(element, elementsMap);
      return shouldTestInside(element) ? getClosedCurveShape(
        element,
        roughShape,
        pointFrom(element.x, element.y),
        element.angle,
        pointFrom(cx, cy)
      ) : getCurveShape(
        roughShape,
        pointFrom(element.x, element.y),
        element.angle,
        pointFrom(cx, cy)
      );
    }
    case "ellipse":
      return getEllipseShape(element);
    case "freedraw": {
      const [, , , , cx, cy] = getElementAbsoluteCoords(element, elementsMap);
      return getFreedrawShape(
        element,
        pointFrom(cx, cy),
        shouldTestInside(element)
      );
    }
  }
};
var getBoundTextShape = (element, elementsMap) => {
  const boundTextElement = getBoundTextElement(element, elementsMap);
  if (boundTextElement) {
    if (element.type === "arrow") {
      return getElementShape(
        {
          ...boundTextElement,
          // arrow's bound text accurate position is not stored in the element's property
          // but rather calculated and returned from the following static method
          ...LinearElementEditor.getBoundTextElementPosition(
            element,
            boundTextElement,
            elementsMap
          )
        },
        elementsMap
      );
    }
    return getElementShape(boundTextElement, elementsMap);
  }
  return null;
};
var getControlPointsForBezierCurve = (element, endPoint) => {
  const shape = ShapeCache.generateElementShape(element, null);
  if (!shape) {
    return null;
  }
  const ops = getCurvePathOps(shape[0]);
  let currentP = pointFrom(0, 0);
  let index = 0;
  let minDistance = Infinity;
  let controlPoints = null;
  while (index < ops.length) {
    const { op, data } = ops[index];
    if (op === "move") {
      invariant(
        isPoint(data),
        "The returned ops is not compatible with a point"
      );
      currentP = pointFromPair(data);
    }
    if (op === "bcurveTo") {
      const p0 = currentP;
      const p1 = pointFrom(data[0], data[1]);
      const p2 = pointFrom(data[2], data[3]);
      const p3 = pointFrom(data[4], data[5]);
      const distance2 = pointDistance(p3, endPoint);
      if (distance2 < minDistance) {
        minDistance = distance2;
        controlPoints = [p0, p1, p2, p3];
      }
      currentP = p3;
    }
    index++;
  }
  return controlPoints;
};
var getBezierXY = (p0, p1, p2, p3, t) => {
  const equation = (t2, idx) => Math.pow(1 - t2, 3) * p3[idx] + 3 * t2 * Math.pow(1 - t2, 2) * p2[idx] + 3 * Math.pow(t2, 2) * (1 - t2) * p1[idx] + p0[idx] * Math.pow(t2, 3);
  const tx = equation(t, 0);
  const ty = equation(t, 1);
  return pointFrom(tx, ty);
};
var getPointsInBezierCurve = (element, endPoint) => {
  const controlPoints = getControlPointsForBezierCurve(element, endPoint);
  if (!controlPoints) {
    return [];
  }
  const pointsOnCurve = [];
  let t = 1;
  while (t > 0) {
    const p = getBezierXY(
      controlPoints[0],
      controlPoints[1],
      controlPoints[2],
      controlPoints[3],
      t
    );
    pointsOnCurve.push(pointFrom(p[0], p[1]));
    t -= 0.05;
  }
  if (pointsOnCurve.length) {
    if (pointsEqual(pointsOnCurve.at(-1), endPoint)) {
      pointsOnCurve.push(pointFrom(endPoint[0], endPoint[1]));
    }
  }
  return pointsOnCurve;
};
var getBezierCurveArcLengths = (element, endPoint) => {
  const arcLengths = [];
  arcLengths[0] = 0;
  const points = getPointsInBezierCurve(element, endPoint);
  let index = 0;
  let distance2 = 0;
  while (index < points.length - 1) {
    const segmentDistance = pointDistance(points[index], points[index + 1]);
    distance2 += segmentDistance;
    arcLengths.push(distance2);
    index++;
  }
  return arcLengths;
};
var getBezierCurveLength = (element, endPoint) => {
  const arcLengths = getBezierCurveArcLengths(element, endPoint);
  return arcLengths.at(-1);
};
var mapIntervalToBezierT = (element, endPoint, interval) => {
  const arcLengths = getBezierCurveArcLengths(element, endPoint);
  const pointsCount = arcLengths.length - 1;
  const curveLength = arcLengths.at(-1);
  const targetLength = interval * curveLength;
  let low = 0;
  let high = pointsCount;
  let index = 0;
  while (low < high) {
    index = Math.floor(low + (high - low) / 2);
    if (arcLengths[index] < targetLength) {
      low = index + 1;
    } else {
      high = index;
    }
  }
  if (arcLengths[index] > targetLength) {
    index--;
  }
  if (arcLengths[index] === targetLength) {
    return index / pointsCount;
  }
  return 1 - (index + (targetLength - arcLengths[index]) / (arcLengths[index + 1] - arcLengths[index])) / pointsCount;
};
var aabbForElement = (element, offset) => {
  const bbox = {
    minX: element.x,
    minY: element.y,
    maxX: element.x + element.width,
    maxY: element.y + element.height,
    midX: element.x + element.width / 2,
    midY: element.y + element.height / 2
  };
  const center = pointFrom(bbox.midX, bbox.midY);
  const [topLeftX, topLeftY] = pointRotateRads(
    pointFrom(bbox.minX, bbox.minY),
    center,
    element.angle
  );
  const [topRightX, topRightY] = pointRotateRads(
    pointFrom(bbox.maxX, bbox.minY),
    center,
    element.angle
  );
  const [bottomRightX, bottomRightY] = pointRotateRads(
    pointFrom(bbox.maxX, bbox.maxY),
    center,
    element.angle
  );
  const [bottomLeftX, bottomLeftY] = pointRotateRads(
    pointFrom(bbox.minX, bbox.maxY),
    center,
    element.angle
  );
  const bounds = [
    Math.min(topLeftX, topRightX, bottomRightX, bottomLeftX),
    Math.min(topLeftY, topRightY, bottomRightY, bottomLeftY),
    Math.max(topLeftX, topRightX, bottomRightX, bottomLeftX),
    Math.max(topLeftY, topRightY, bottomRightY, bottomLeftY)
  ];
  if (offset) {
    const [topOffset, rightOffset, downOffset, leftOffset] = offset;
    return [
      bounds[0] - leftOffset,
      bounds[1] - topOffset,
      bounds[2] + rightOffset,
      bounds[3] + downOffset
    ];
  }
  return bounds;
};
var pointInsideBounds = (p, bounds) => p[0] > bounds[0] && p[0] < bounds[2] && p[1] > bounds[1] && p[1] < bounds[3];
var getCornerRadius = (x, element) => {
  if (element.roundness?.type === ROUNDNESS.PROPORTIONAL_RADIUS || element.roundness?.type === ROUNDNESS.LEGACY) {
    return x * DEFAULT_PROPORTIONAL_RADIUS;
  }
  if (element.roundness?.type === ROUNDNESS.ADAPTIVE_RADIUS) {
    const fixedRadiusSize = element.roundness?.value ?? DEFAULT_ADAPTIVE_RADIUS;
    const CUTOFF_SIZE = fixedRadiusSize / DEFAULT_PROPORTIONAL_RADIUS;
    if (x <= CUTOFF_SIZE) {
      return x * DEFAULT_PROPORTIONAL_RADIUS;
    }
    return fixedRadiusSize;
  }
  return 0;
};
var isPathALoop = (points, zoomValue = 1) => {
  if (points.length >= 3) {
    const [first, last] = [points[0], points[points.length - 1]];
    const distance2 = pointDistance(first, last);
    return distance2 <= LINE_CONFIRM_THRESHOLD / zoomValue;
  }
  return false;
};

// ../element/src/comparisons.ts
var hasBackground = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "ellipse" || type === "diamond" || type === "line" || type === "freedraw";
var hasStrokeColor = (type) => type !== "image" && type !== "frame" && type !== "magicframe";
var hasStrokeWidth = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "ellipse" || type === "diamond" || type === "freedraw" || type === "arrow" || type === "line";
var hasStrokeStyle = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "ellipse" || type === "diamond" || type === "arrow" || type === "line";
var canChangeRoundness = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "line" || type === "diamond" || type === "image";
var toolIsArrow = (type) => type === "arrow";
var canHaveArrowheads = (type) => type === "arrow";

// ../element/src/renderElement.ts
import rough from "roughjs/bin/rough";
import { getStroke } from "perfect-freehand";

// ../element/src/cropElement.ts
var MINIMAL_CROP_SIZE = 10;
var cropElement = (element, transformHandle, naturalWidth, naturalHeight, pointerX, pointerY, widthAspectRatio) => {
  const { width: uncroppedWidth, height: uncroppedHeight } = getUncroppedWidthAndHeight(element);
  const naturalWidthToUncropped = naturalWidth / uncroppedWidth;
  const naturalHeightToUncropped = naturalHeight / uncroppedHeight;
  const croppedLeft = (element.crop?.x ?? 0) / naturalWidthToUncropped;
  const croppedTop = (element.crop?.y ?? 0) / naturalHeightToUncropped;
  const rotatedPointer = pointRotateRads(
    pointFrom(pointerX, pointerY),
    pointFrom(element.x + element.width / 2, element.y + element.height / 2),
    -element.angle
  );
  pointerX = rotatedPointer[0];
  pointerY = rotatedPointer[1];
  let nextWidth = element.width;
  let nextHeight = element.height;
  let crop = element.crop ?? {
    x: 0,
    y: 0,
    width: naturalWidth,
    height: naturalHeight,
    naturalWidth,
    naturalHeight
  };
  const previousCropHeight = crop.height;
  const previousCropWidth = crop.width;
  const isFlippedByX = element.scale[0] === -1;
  const isFlippedByY = element.scale[1] === -1;
  let changeInHeight = pointerY - element.y;
  let changeInWidth = pointerX - element.x;
  if (transformHandle.includes("n")) {
    nextHeight = clamp(
      element.height - changeInHeight,
      MINIMAL_CROP_SIZE,
      isFlippedByY ? uncroppedHeight - croppedTop : element.height + croppedTop
    );
  }
  if (transformHandle.includes("s")) {
    changeInHeight = pointerY - element.y - element.height;
    nextHeight = clamp(
      element.height + changeInHeight,
      MINIMAL_CROP_SIZE,
      isFlippedByY ? element.height + croppedTop : uncroppedHeight - croppedTop
    );
  }
  if (transformHandle.includes("e")) {
    changeInWidth = pointerX - element.x - element.width;
    nextWidth = clamp(
      element.width + changeInWidth,
      MINIMAL_CROP_SIZE,
      isFlippedByX ? element.width + croppedLeft : uncroppedWidth - croppedLeft
    );
  }
  if (transformHandle.includes("w")) {
    nextWidth = clamp(
      element.width - changeInWidth,
      MINIMAL_CROP_SIZE,
      isFlippedByX ? uncroppedWidth - croppedLeft : element.width + croppedLeft
    );
  }
  const updateCropWidthAndHeight = (crop2) => {
    crop2.height = nextHeight * naturalHeightToUncropped;
    crop2.width = nextWidth * naturalWidthToUncropped;
  };
  updateCropWidthAndHeight(crop);
  const adjustFlipForHandle = (handle, crop2) => {
    updateCropWidthAndHeight(crop2);
    if (handle.includes("n")) {
      if (!isFlippedByY) {
        crop2.y += previousCropHeight - crop2.height;
      }
    }
    if (handle.includes("s")) {
      if (isFlippedByY) {
        crop2.y += previousCropHeight - crop2.height;
      }
    }
    if (handle.includes("e")) {
      if (isFlippedByX) {
        crop2.x += previousCropWidth - crop2.width;
      }
    }
    if (handle.includes("w")) {
      if (!isFlippedByX) {
        crop2.x += previousCropWidth - crop2.width;
      }
    }
  };
  switch (transformHandle) {
    case "n": {
      if (widthAspectRatio) {
        const distanceToLeft = croppedLeft + element.width / 2;
        const distanceToRight = uncroppedWidth - croppedLeft - element.width / 2;
        const MAX_WIDTH = Math.min(distanceToLeft, distanceToRight) * 2;
        nextWidth = clamp(
          nextHeight * widthAspectRatio,
          MINIMAL_CROP_SIZE,
          MAX_WIDTH
        );
        nextHeight = nextWidth / widthAspectRatio;
      }
      adjustFlipForHandle(transformHandle, crop);
      if (widthAspectRatio) {
        crop.x += (previousCropWidth - crop.width) / 2;
      }
      break;
    }
    case "s": {
      if (widthAspectRatio) {
        const distanceToLeft = croppedLeft + element.width / 2;
        const distanceToRight = uncroppedWidth - croppedLeft - element.width / 2;
        const MAX_WIDTH = Math.min(distanceToLeft, distanceToRight) * 2;
        nextWidth = clamp(
          nextHeight * widthAspectRatio,
          MINIMAL_CROP_SIZE,
          MAX_WIDTH
        );
        nextHeight = nextWidth / widthAspectRatio;
      }
      adjustFlipForHandle(transformHandle, crop);
      if (widthAspectRatio) {
        crop.x += (previousCropWidth - crop.width) / 2;
      }
      break;
    }
    case "w": {
      if (widthAspectRatio) {
        const distanceToTop = croppedTop + element.height / 2;
        const distanceToBottom = uncroppedHeight - croppedTop - element.height / 2;
        const MAX_HEIGHT = Math.min(distanceToTop, distanceToBottom) * 2;
        nextHeight = clamp(
          nextWidth / widthAspectRatio,
          MINIMAL_CROP_SIZE,
          MAX_HEIGHT
        );
        nextWidth = nextHeight * widthAspectRatio;
      }
      adjustFlipForHandle(transformHandle, crop);
      if (widthAspectRatio) {
        crop.y += (previousCropHeight - crop.height) / 2;
      }
      break;
    }
    case "e": {
      if (widthAspectRatio) {
        const distanceToTop = croppedTop + element.height / 2;
        const distanceToBottom = uncroppedHeight - croppedTop - element.height / 2;
        const MAX_HEIGHT = Math.min(distanceToTop, distanceToBottom) * 2;
        nextHeight = clamp(
          nextWidth / widthAspectRatio,
          MINIMAL_CROP_SIZE,
          MAX_HEIGHT
        );
        nextWidth = nextHeight * widthAspectRatio;
      }
      adjustFlipForHandle(transformHandle, crop);
      if (widthAspectRatio) {
        crop.y += (previousCropHeight - crop.height) / 2;
      }
      break;
    }
    case "ne": {
      if (widthAspectRatio) {
        if (changeInWidth > -changeInHeight) {
          const MAX_HEIGHT = isFlippedByY ? uncroppedHeight - croppedTop : croppedTop + element.height;
          nextHeight = clamp(
            nextWidth / widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_HEIGHT
          );
          nextWidth = nextHeight * widthAspectRatio;
        } else {
          const MAX_WIDTH = isFlippedByX ? croppedLeft + element.width : uncroppedWidth - croppedLeft;
          nextWidth = clamp(
            nextHeight * widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_WIDTH
          );
          nextHeight = nextWidth / widthAspectRatio;
        }
      }
      adjustFlipForHandle(transformHandle, crop);
      break;
    }
    case "nw": {
      if (widthAspectRatio) {
        if (changeInWidth < changeInHeight) {
          const MAX_HEIGHT = isFlippedByY ? uncroppedHeight - croppedTop : croppedTop + element.height;
          nextHeight = clamp(
            nextWidth / widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_HEIGHT
          );
          nextWidth = nextHeight * widthAspectRatio;
        } else {
          const MAX_WIDTH = isFlippedByX ? uncroppedWidth - croppedLeft : croppedLeft + element.width;
          nextWidth = clamp(
            nextHeight * widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_WIDTH
          );
          nextHeight = nextWidth / widthAspectRatio;
        }
      }
      adjustFlipForHandle(transformHandle, crop);
      break;
    }
    case "se": {
      if (widthAspectRatio) {
        if (changeInWidth > changeInHeight) {
          const MAX_HEIGHT = isFlippedByY ? croppedTop + element.height : uncroppedHeight - croppedTop;
          nextHeight = clamp(
            nextWidth / widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_HEIGHT
          );
          nextWidth = nextHeight * widthAspectRatio;
        } else {
          const MAX_WIDTH = isFlippedByX ? croppedLeft + element.width : uncroppedWidth - croppedLeft;
          nextWidth = clamp(
            nextHeight * widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_WIDTH
          );
          nextHeight = nextWidth / widthAspectRatio;
        }
      }
      adjustFlipForHandle(transformHandle, crop);
      break;
    }
    case "sw": {
      if (widthAspectRatio) {
        if (-changeInWidth > changeInHeight) {
          const MAX_HEIGHT = isFlippedByY ? croppedTop + element.height : uncroppedHeight - croppedTop;
          nextHeight = clamp(
            nextWidth / widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_HEIGHT
          );
          nextWidth = nextHeight * widthAspectRatio;
        } else {
          const MAX_WIDTH = isFlippedByX ? uncroppedWidth - croppedLeft : croppedLeft + element.width;
          nextWidth = clamp(
            nextHeight * widthAspectRatio,
            MINIMAL_CROP_SIZE,
            MAX_WIDTH
          );
          nextHeight = nextWidth / widthAspectRatio;
        }
      }
      adjustFlipForHandle(transformHandle, crop);
      break;
    }
    default:
      break;
  }
  const newOrigin = recomputeOrigin(
    element,
    transformHandle,
    nextWidth,
    nextHeight,
    !!widthAspectRatio
  );
  if (isCloseTo(crop.width, crop.naturalWidth) && isCloseTo(crop.height, crop.naturalHeight)) {
    crop = null;
  }
  return {
    x: newOrigin[0],
    y: newOrigin[1],
    width: nextWidth,
    height: nextHeight,
    crop
  };
};
var recomputeOrigin = (stateAtCropStart, transformHandle, width, height, shouldMaintainAspectRatio2) => {
  const [x1, y1, x2, y2] = getResizedElementAbsoluteCoords(
    stateAtCropStart,
    stateAtCropStart.width,
    stateAtCropStart.height,
    true
  );
  const startTopLeft = pointFrom(x1, y1);
  const startBottomRight = pointFrom(x2, y2);
  const startCenter = pointCenter(startTopLeft, startBottomRight);
  const [newBoundsX1, newBoundsY1, newBoundsX2, newBoundsY2] = getResizedElementAbsoluteCoords(stateAtCropStart, width, height, true);
  const newBoundsWidth = newBoundsX2 - newBoundsX1;
  const newBoundsHeight = newBoundsY2 - newBoundsY1;
  let newTopLeft = [...startTopLeft];
  if (["n", "w", "nw"].includes(transformHandle)) {
    newTopLeft = [
      startBottomRight[0] - Math.abs(newBoundsWidth),
      startBottomRight[1] - Math.abs(newBoundsHeight)
    ];
  }
  if (transformHandle === "ne") {
    const bottomLeft = [startTopLeft[0], startBottomRight[1]];
    newTopLeft = [bottomLeft[0], bottomLeft[1] - Math.abs(newBoundsHeight)];
  }
  if (transformHandle === "sw") {
    const topRight = [startBottomRight[0], startTopLeft[1]];
    newTopLeft = [topRight[0] - Math.abs(newBoundsWidth), topRight[1]];
  }
  if (shouldMaintainAspectRatio2) {
    if (["s", "n"].includes(transformHandle)) {
      newTopLeft[0] = startCenter[0] - newBoundsWidth / 2;
    }
    if (["e", "w"].includes(transformHandle)) {
      newTopLeft[1] = startCenter[1] - newBoundsHeight / 2;
    }
  }
  const angle = stateAtCropStart.angle;
  const rotatedTopLeft = pointRotateRads(newTopLeft, startCenter, angle);
  const newCenter = [
    newTopLeft[0] + Math.abs(newBoundsWidth) / 2,
    newTopLeft[1] + Math.abs(newBoundsHeight) / 2
  ];
  const rotatedNewCenter = pointRotateRads(newCenter, startCenter, angle);
  newTopLeft = pointRotateRads(
    rotatedTopLeft,
    rotatedNewCenter,
    -angle
  );
  const newOrigin = [...newTopLeft];
  newOrigin[0] += stateAtCropStart.x - newBoundsX1;
  newOrigin[1] += stateAtCropStart.y - newBoundsY1;
  return newOrigin;
};
var getUncroppedImageElement = (element, elementsMap) => {
  if (element.crop) {
    const { width, height } = getUncroppedWidthAndHeight(element);
    const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
      element,
      elementsMap
    );
    const topLeftVector = vectorFromPoint(
      pointRotateRads(pointFrom(x1, y1), pointFrom(cx, cy), element.angle)
    );
    const topRightVector = vectorFromPoint(
      pointRotateRads(pointFrom(x2, y1), pointFrom(cx, cy), element.angle)
    );
    const topEdgeNormalized = vectorNormalize(
      vectorSubtract(topRightVector, topLeftVector)
    );
    const bottomLeftVector = vectorFromPoint(
      pointRotateRads(pointFrom(x1, y2), pointFrom(cx, cy), element.angle)
    );
    const leftEdgeVector = vectorSubtract(bottomLeftVector, topLeftVector);
    const leftEdgeNormalized = vectorNormalize(leftEdgeVector);
    const { cropX, cropY } = adjustCropPosition(element.crop, element.scale);
    const rotatedTopLeft = vectorAdd(
      vectorAdd(
        topLeftVector,
        vectorScale(
          topEdgeNormalized,
          -cropX * width / element.crop.naturalWidth
        )
      ),
      vectorScale(
        leftEdgeNormalized,
        -cropY * height / element.crop.naturalHeight
      )
    );
    const center = pointFromVector(
      vectorAdd(
        vectorAdd(rotatedTopLeft, vectorScale(topEdgeNormalized, width / 2)),
        vectorScale(leftEdgeNormalized, height / 2)
      )
    );
    const unrotatedTopLeft = pointRotateRads(
      pointFromVector(rotatedTopLeft),
      center,
      -element.angle
    );
    const uncroppedElement = {
      ...element,
      x: unrotatedTopLeft[0],
      y: unrotatedTopLeft[1],
      width,
      height,
      crop: null
    };
    return uncroppedElement;
  }
  return element;
};
var getUncroppedWidthAndHeight = (element) => {
  if (element.crop) {
    const width = element.width / (element.crop.width / element.crop.naturalWidth);
    const height = element.height / (element.crop.height / element.crop.naturalHeight);
    return {
      width,
      height
    };
  }
  return {
    width: element.width,
    height: element.height
  };
};
var adjustCropPosition = (crop, scale) => {
  let cropX = crop.x;
  let cropY = crop.y;
  const flipX = scale[0] === -1;
  const flipY = scale[1] === -1;
  if (flipX) {
    cropX = crop.naturalWidth - Math.abs(cropX) - crop.width;
  }
  if (flipY) {
    cropY = crop.naturalHeight - Math.abs(cropY) - crop.height;
  }
  return {
    cropX,
    cropY
  };
};
var getFlipAdjustedCropPosition = (element, natural = false) => {
  const crop = element.crop;
  if (!crop) {
    return null;
  }
  const isFlippedByX = element.scale[0] === -1;
  const isFlippedByY = element.scale[1] === -1;
  let cropX = crop.x;
  let cropY = crop.y;
  if (isFlippedByX) {
    cropX = crop.naturalWidth - crop.width - crop.x;
  }
  if (isFlippedByY) {
    cropY = crop.naturalHeight - crop.height - crop.y;
  }
  if (natural) {
    return {
      x: cropX,
      y: cropY
    };
  }
  const { width, height } = getUncroppedWidthAndHeight(element);
  return {
    x: cropX / (crop.naturalWidth / width),
    y: cropY / (crop.naturalHeight / height)
  };
};

// ../element/src/renderElement.ts
var IMAGE_INVERT_FILTER = "invert(100%) hue-rotate(180deg) saturate(1.25)";
var isPendingImageElement = (element, renderConfig) => isInitializedImageElement(element) && !renderConfig.imageCache.has(element.fileId);
var shouldResetImageFilter = (element, renderConfig, appState) => {
  return appState.theme === THEME.DARK && isInitializedImageElement(element) && !isPendingImageElement(element, renderConfig) && renderConfig.imageCache.get(element.fileId)?.mimeType !== MIME_TYPES.svg;
};
var getCanvasPadding = (element) => {
  switch (element.type) {
    case "freedraw":
      return element.strokeWidth * 12;
    case "text":
      return element.fontSize / 2;
    default:
      return 20;
  }
};
var getRenderOpacity = (element, containingFrame, elementsPendingErasure, pendingNodes, globalAlpha = 1) => {
  let opacity = (containingFrame?.opacity ?? 100) * element.opacity / 1e4 * globalAlpha;
  if (elementsPendingErasure.has(element.id) || pendingNodes && pendingNodes.some((node) => node.id === element.id) || containingFrame && elementsPendingErasure.has(containingFrame.id)) {
    opacity *= ELEMENT_READY_TO_ERASE_OPACITY / 100;
  }
  return opacity;
};
var cappedElementCanvasSize = (element, elementsMap, zoom) => {
  const AREA_LIMIT = 16777216;
  const WIDTH_HEIGHT_LIMIT = 32767;
  const padding = getCanvasPadding(element);
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const elementWidth = isLinearElement(element) || isFreeDrawElement(element) ? distance(x1, x2) : element.width;
  const elementHeight = isLinearElement(element) || isFreeDrawElement(element) ? distance(y1, y2) : element.height;
  let width = elementWidth * window.devicePixelRatio + padding * 2;
  let height = elementHeight * window.devicePixelRatio + padding * 2;
  let scale = zoom.value;
  if (width * scale > WIDTH_HEIGHT_LIMIT || height * scale > WIDTH_HEIGHT_LIMIT) {
    scale = Math.min(WIDTH_HEIGHT_LIMIT / width, WIDTH_HEIGHT_LIMIT / height);
  }
  if (width * height * scale * scale > AREA_LIMIT) {
    scale = Math.sqrt(AREA_LIMIT / (width * height));
  }
  width = Math.floor(width * scale);
  height = Math.floor(height * scale);
  return { width, height, scale };
};
var generateElementCanvas = (element, elementsMap, zoom, renderConfig, appState) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const padding = getCanvasPadding(element);
  const { width, height, scale } = cappedElementCanvasSize(
    element,
    elementsMap,
    zoom
  );
  if (!width || !height) {
    return null;
  }
  canvas.width = width;
  canvas.height = height;
  let canvasOffsetX = -100;
  let canvasOffsetY = 0;
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    const [x1, y1] = getElementAbsoluteCoords(element, elementsMap);
    canvasOffsetX = element.x > x1 ? distance(element.x, x1) * window.devicePixelRatio * scale : 0;
    canvasOffsetY = element.y > y1 ? distance(element.y, y1) * window.devicePixelRatio * scale : 0;
    context.translate(canvasOffsetX, canvasOffsetY);
  }
  context.save();
  context.translate(padding * scale, padding * scale);
  context.scale(
    window.devicePixelRatio * scale,
    window.devicePixelRatio * scale
  );
  const rc = rough.canvas(canvas);
  if (shouldResetImageFilter(element, renderConfig, appState)) {
    context.filter = IMAGE_INVERT_FILTER;
  }
  drawElementOnCanvas(element, rc, context, renderConfig, appState);
  context.restore();
  const boundTextElement = getBoundTextElement(element, elementsMap);
  const boundTextCanvas = document.createElement("canvas");
  const boundTextCanvasContext = boundTextCanvas.getContext("2d");
  if (isArrowElement(element) && boundTextElement) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const maxDim = Math.max(distance(x1, x2), distance(y1, y2));
    boundTextCanvas.width = maxDim * window.devicePixelRatio * scale + padding * scale * 10;
    boundTextCanvas.height = maxDim * window.devicePixelRatio * scale + padding * scale * 10;
    boundTextCanvasContext.translate(
      boundTextCanvas.width / 2,
      boundTextCanvas.height / 2
    );
    boundTextCanvasContext.rotate(element.angle);
    boundTextCanvasContext.drawImage(
      canvas,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const [, , , , boundTextCx, boundTextCy] = getElementAbsoluteCoords(
      boundTextElement,
      elementsMap
    );
    boundTextCanvasContext.rotate(-element.angle);
    const offsetX = (boundTextCanvas.width - canvas.width) / 2;
    const offsetY = (boundTextCanvas.height - canvas.height) / 2;
    const shiftX = boundTextCanvas.width / 2 - (boundTextCx - x1) * window.devicePixelRatio * scale - offsetX - padding * scale;
    const shiftY = boundTextCanvas.height / 2 - (boundTextCy - y1) * window.devicePixelRatio * scale - offsetY - padding * scale;
    boundTextCanvasContext.translate(-shiftX, -shiftY);
    boundTextCanvasContext.clearRect(
      -(boundTextElement.width / 2 + BOUND_TEXT_PADDING) * window.devicePixelRatio * scale,
      -(boundTextElement.height / 2 + BOUND_TEXT_PADDING) * window.devicePixelRatio * scale,
      (boundTextElement.width + BOUND_TEXT_PADDING * 2) * window.devicePixelRatio * scale,
      (boundTextElement.height + BOUND_TEXT_PADDING * 2) * window.devicePixelRatio * scale
    );
  }
  return {
    element,
    canvas,
    theme: appState.theme,
    scale,
    zoomValue: zoom.value,
    canvasOffsetX,
    canvasOffsetY,
    boundTextElementVersion: getBoundTextElement(element, elementsMap)?.version || null,
    containingFrameOpacity: getContainingFrame(element, elementsMap)?.opacity || 100,
    boundTextCanvas,
    angle: element.angle,
    imageCrop: isImageElement(element) ? element.crop : null
  };
};
var DEFAULT_LINK_SIZE = 14;
var IMAGE_PLACEHOLDER_IMG = document.createElement("img");
IMAGE_PLACEHOLDER_IMG.src = `data:${MIME_TYPES.svg},${encodeURIComponent(
  `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#888" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>`
)}`;
var IMAGE_ERROR_PLACEHOLDER_IMG = document.createElement("img");
IMAGE_ERROR_PLACEHOLDER_IMG.src = `data:${MIME_TYPES.svg},${encodeURIComponent(
  `<svg viewBox="0 0 668 668" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48ZM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56ZM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48Z" style="fill:#888;fill-rule:nonzero" transform="matrix(.81709 0 0 .81709 124.825 145.825)"/><path d="M256 8C119.034 8 8 119.033 8 256c0 136.967 111.034 248 248 248s248-111.034 248-248S392.967 8 256 8Zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676ZM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676Z" style="fill:#888;fill-rule:nonzero" transform="matrix(.30366 0 0 .30366 506.822 60.065)"/></svg>`
)}`;
var drawImagePlaceholder = (element, context) => {
  context.fillStyle = "#E7E7E7";
  context.fillRect(0, 0, element.width, element.height);
  const imageMinWidthOrHeight = Math.min(element.width, element.height);
  const size = Math.min(
    imageMinWidthOrHeight,
    Math.min(imageMinWidthOrHeight * 0.4, 100)
  );
  context.drawImage(
    element.status === "error" ? IMAGE_ERROR_PLACEHOLDER_IMG : IMAGE_PLACEHOLDER_IMG,
    element.width / 2 - size / 2,
    element.height / 2 - size / 2,
    size,
    size
  );
};
var drawElementOnCanvas = (element, rc, context, renderConfig, appState) => {
  switch (element.type) {
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "diamond":
    case "ellipse": {
      context.lineJoin = "round";
      context.lineCap = "round";
      rc.draw(ShapeCache.get(element));
      break;
    }
    case "arrow":
    case "line": {
      context.lineJoin = "round";
      context.lineCap = "round";
      ShapeCache.get(element).forEach((shape) => {
        rc.draw(shape);
      });
      break;
    }
    case "freedraw": {
      context.save();
      context.fillStyle = element.strokeColor;
      const path = getFreeDrawPath2D(element);
      const fillShape = ShapeCache.get(element);
      if (fillShape) {
        rc.draw(fillShape);
      }
      context.fillStyle = element.strokeColor;
      context.fill(path);
      context.restore();
      break;
    }
    case "image": {
      const img = isInitializedImageElement(element) ? renderConfig.imageCache.get(element.fileId)?.image : void 0;
      if (img != null && !(img instanceof Promise)) {
        if (element.roundness && context.roundRect) {
          context.beginPath();
          context.roundRect(
            0,
            0,
            element.width,
            element.height,
            getCornerRadius(Math.min(element.width, element.height), element)
          );
          context.clip();
        }
        const { x, y, width, height } = element.crop ? element.crop : {
          x: 0,
          y: 0,
          width: img.naturalWidth,
          height: img.naturalHeight
        };
        context.drawImage(
          img,
          x,
          y,
          width,
          height,
          0,
          0,
          element.width,
          element.height
        );
      } else {
        drawImagePlaceholder(element, context);
      }
      break;
    }
    default: {
      if (isTextElement(element)) {
        const rtl = isRTL(element.text);
        const shouldTemporarilyAttach = rtl && !context.canvas.isConnected;
        if (shouldTemporarilyAttach) {
          document.body.appendChild(context.canvas);
        }
        context.canvas.setAttribute("dir", rtl ? "rtl" : "ltr");
        context.save();
        context.font = getFontString(element);
        context.fillStyle = element.strokeColor;
        context.textAlign = element.textAlign;
        const lines = element.text.replace(/\r\n?/g, "\n").split("\n");
        const horizontalOffset = element.textAlign === "center" ? element.width / 2 : element.textAlign === "right" ? element.width : 0;
        const lineHeightPx = getLineHeightInPx(
          element.fontSize,
          element.lineHeight
        );
        const verticalOffset = getVerticalOffset(
          element.fontFamily,
          element.fontSize,
          lineHeightPx
        );
        for (let index = 0; index < lines.length; index++) {
          context.fillText(
            lines[index],
            horizontalOffset,
            index * lineHeightPx + verticalOffset
          );
        }
        context.restore();
        if (shouldTemporarilyAttach) {
          context.canvas.remove();
        }
      } else {
        throw new Error(`Unimplemented type ${element.type}`);
      }
    }
  }
};
var elementWithCanvasCache = /* @__PURE__ */ new WeakMap();
var generateElementWithCanvas = (element, elementsMap, renderConfig, appState) => {
  const zoom = renderConfig ? appState.zoom : {
    value: 1
  };
  const prevElementWithCanvas = elementWithCanvasCache.get(element);
  const shouldRegenerateBecauseZoom = prevElementWithCanvas && prevElementWithCanvas.zoomValue !== zoom.value && !appState?.shouldCacheIgnoreZoom;
  const boundTextElement = getBoundTextElement(element, elementsMap);
  const boundTextElementVersion = boundTextElement?.version || null;
  const imageCrop = isImageElement(element) ? element.crop : null;
  const containingFrameOpacity = getContainingFrame(element, elementsMap)?.opacity || 100;
  if (!prevElementWithCanvas || shouldRegenerateBecauseZoom || prevElementWithCanvas.theme !== appState.theme || prevElementWithCanvas.boundTextElementVersion !== boundTextElementVersion || prevElementWithCanvas.imageCrop !== imageCrop || prevElementWithCanvas.containingFrameOpacity !== containingFrameOpacity || // since we rotate the canvas when copying from cached canvas, we don't
  // regenerate the cached canvas. But we need to in case of labels which are
  // cached alongside the arrow, and we want the labels to remain unrotated
  // with respect to the arrow.
  isArrowElement(element) && boundTextElement && element.angle !== prevElementWithCanvas.angle) {
    const elementWithCanvas = generateElementCanvas(
      element,
      elementsMap,
      zoom,
      renderConfig,
      appState
    );
    if (!elementWithCanvas) {
      return null;
    }
    elementWithCanvasCache.set(element, elementWithCanvas);
    return elementWithCanvas;
  }
  return prevElementWithCanvas;
};
var drawElementFromCanvas = (elementWithCanvas, context, renderConfig, appState, allElementsMap) => {
  const element = elementWithCanvas.element;
  const padding = getCanvasPadding(element);
  const zoom = elementWithCanvas.scale;
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, allElementsMap);
  const cx = ((x1 + x2) / 2 + appState.scrollX) * window.devicePixelRatio;
  const cy = ((y1 + y2) / 2 + appState.scrollY) * window.devicePixelRatio;
  context.save();
  context.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
  const boundTextElement = getBoundTextElement(element, allElementsMap);
  if (isArrowElement(element) && boundTextElement) {
    const offsetX = (elementWithCanvas.boundTextCanvas.width - elementWithCanvas.canvas.width) / 2;
    const offsetY = (elementWithCanvas.boundTextCanvas.height - elementWithCanvas.canvas.height) / 2;
    context.translate(cx, cy);
    context.drawImage(
      elementWithCanvas.boundTextCanvas,
      -(x2 - x1) / 2 * window.devicePixelRatio - offsetX / zoom - padding,
      -(y2 - y1) / 2 * window.devicePixelRatio - offsetY / zoom - padding,
      elementWithCanvas.boundTextCanvas.width / zoom,
      elementWithCanvas.boundTextCanvas.height / zoom
    );
  } else {
    context.translate(cx, cy);
    context.rotate(element.angle);
    if ("scale" in elementWithCanvas.element && !isPendingImageElement(element, renderConfig)) {
      context.scale(
        elementWithCanvas.element.scale[0],
        elementWithCanvas.element.scale[1]
      );
    }
    context.translate(-cx, -cy);
    context.drawImage(
      elementWithCanvas.canvas,
      (x1 + appState.scrollX) * window.devicePixelRatio - padding * elementWithCanvas.scale / elementWithCanvas.scale,
      (y1 + appState.scrollY) * window.devicePixelRatio - padding * elementWithCanvas.scale / elementWithCanvas.scale,
      elementWithCanvas.canvas.width / elementWithCanvas.scale,
      elementWithCanvas.canvas.height / elementWithCanvas.scale
    );
    if (define_import_meta_env_default.VITE_APP_DEBUG_ENABLE_TEXT_CONTAINER_BOUNDING_BOX === "true" && hasBoundTextElement(element)) {
      const textElement = getBoundTextElement(
        element,
        allElementsMap
      );
      const coords = getContainerCoords(element);
      context.strokeStyle = "#c92a2a";
      context.lineWidth = 3;
      context.strokeRect(
        (coords.x + appState.scrollX) * window.devicePixelRatio,
        (coords.y + appState.scrollY) * window.devicePixelRatio,
        getBoundTextMaxWidth(element, textElement) * window.devicePixelRatio,
        getBoundTextMaxHeight(element, textElement) * window.devicePixelRatio
      );
    }
  }
  context.restore();
};
var renderSelectionElement = (element, context, appState, selectionColor) => {
  context.save();
  context.translate(element.x + appState.scrollX, element.y + appState.scrollY);
  context.fillStyle = "rgba(0, 0, 200, 0.04)";
  const offset = 0.5 / appState.zoom.value;
  context.fillRect(offset, offset, element.width, element.height);
  context.lineWidth = 1 / appState.zoom.value;
  context.strokeStyle = selectionColor;
  context.strokeRect(offset, offset, element.width, element.height);
  context.restore();
};
var renderElement = (element, elementsMap, allElementsMap, rc, context, renderConfig, appState) => {
  const reduceAlphaForSelection = appState.openDialog?.name === "elementLinkSelector" && !appState.selectedElementIds[element.id] && !appState.hoveredElementIds[element.id];
  context.globalAlpha = getRenderOpacity(
    element,
    getContainingFrame(element, elementsMap),
    renderConfig.elementsPendingErasure,
    renderConfig.pendingFlowchartNodes,
    reduceAlphaForSelection ? DEFAULT_REDUCED_GLOBAL_ALPHA : 1
  );
  switch (element.type) {
    case "magicframe":
    case "frame": {
      if (appState.frameRendering.enabled && appState.frameRendering.outline) {
        context.save();
        context.translate(
          element.x + appState.scrollX,
          element.y + appState.scrollY
        );
        context.fillStyle = "rgba(0, 0, 200, 0.04)";
        context.lineWidth = FRAME_STYLE.strokeWidth / appState.zoom.value;
        context.strokeStyle = FRAME_STYLE.strokeColor;
        if (isMagicFrameElement(element)) {
          context.strokeStyle = appState.theme === THEME.LIGHT ? "#7affd7" : "#1d8264";
        }
        if (FRAME_STYLE.radius && context.roundRect) {
          context.beginPath();
          context.roundRect(
            0,
            0,
            element.width,
            element.height,
            FRAME_STYLE.radius / appState.zoom.value
          );
          context.stroke();
          context.closePath();
        } else {
          context.strokeRect(0, 0, element.width, element.height);
        }
        context.restore();
      }
      break;
    }
    case "freedraw": {
      ShapeCache.generateElementShape(element, null);
      if (renderConfig.isExporting) {
        const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
        const cx = (x1 + x2) / 2 + appState.scrollX;
        const cy = (y1 + y2) / 2 + appState.scrollY;
        const shiftX = (x2 - x1) / 2 - (element.x - x1);
        const shiftY = (y2 - y1) / 2 - (element.y - y1);
        context.save();
        context.translate(cx, cy);
        context.rotate(element.angle);
        context.translate(-shiftX, -shiftY);
        drawElementOnCanvas(element, rc, context, renderConfig, appState);
        context.restore();
      } else {
        const elementWithCanvas = generateElementWithCanvas(
          element,
          allElementsMap,
          renderConfig,
          appState
        );
        if (!elementWithCanvas) {
          return;
        }
        drawElementFromCanvas(
          elementWithCanvas,
          context,
          renderConfig,
          appState,
          allElementsMap
        );
      }
      break;
    }
    case "rectangle":
    case "diamond":
    case "ellipse":
    case "line":
    case "arrow":
    case "image":
    case "text":
    case "iframe":
    case "embeddable": {
      ShapeCache.generateElementShape(element, renderConfig);
      if (renderConfig.isExporting) {
        const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
        const cx = (x1 + x2) / 2 + appState.scrollX;
        const cy = (y1 + y2) / 2 + appState.scrollY;
        let shiftX = (x2 - x1) / 2 - (element.x - x1);
        let shiftY = (y2 - y1) / 2 - (element.y - y1);
        if (isTextElement(element)) {
          const container = getContainerElement(element, elementsMap);
          if (isArrowElement(container)) {
            const boundTextCoords = LinearElementEditor.getBoundTextElementPosition(
              container,
              element,
              elementsMap
            );
            shiftX = (x2 - x1) / 2 - (boundTextCoords.x - x1);
            shiftY = (y2 - y1) / 2 - (boundTextCoords.y - y1);
          }
        }
        context.save();
        context.translate(cx, cy);
        if (shouldResetImageFilter(element, renderConfig, appState)) {
          context.filter = "none";
        }
        const boundTextElement = getBoundTextElement(element, elementsMap);
        if (isArrowElement(element) && boundTextElement) {
          const tempCanvas = document.createElement("canvas");
          const tempCanvasContext = tempCanvas.getContext("2d");
          const maxDim = Math.max(distance(x1, x2), distance(y1, y2));
          const padding = getCanvasPadding(element);
          tempCanvas.width = maxDim * appState.exportScale + padding * 10 * appState.exportScale;
          tempCanvas.height = maxDim * appState.exportScale + padding * 10 * appState.exportScale;
          tempCanvasContext.translate(
            tempCanvas.width / 2,
            tempCanvas.height / 2
          );
          tempCanvasContext.scale(appState.exportScale, appState.exportScale);
          shiftX = element.width / 2 - (element.x - x1);
          shiftY = element.height / 2 - (element.y - y1);
          tempCanvasContext.rotate(element.angle);
          const tempRc = rough.canvas(tempCanvas);
          tempCanvasContext.translate(-shiftX, -shiftY);
          drawElementOnCanvas(
            element,
            tempRc,
            tempCanvasContext,
            renderConfig,
            appState
          );
          tempCanvasContext.translate(shiftX, shiftY);
          tempCanvasContext.rotate(-element.angle);
          const [, , , , boundTextCx, boundTextCy] = getElementAbsoluteCoords(
            boundTextElement,
            elementsMap
          );
          const boundTextShiftX = (x1 + x2) / 2 - boundTextCx;
          const boundTextShiftY = (y1 + y2) / 2 - boundTextCy;
          tempCanvasContext.translate(-boundTextShiftX, -boundTextShiftY);
          tempCanvasContext.clearRect(
            -boundTextElement.width / 2,
            -boundTextElement.height / 2,
            boundTextElement.width,
            boundTextElement.height
          );
          context.scale(1 / appState.exportScale, 1 / appState.exportScale);
          context.drawImage(
            tempCanvas,
            -tempCanvas.width / 2,
            -tempCanvas.height / 2,
            tempCanvas.width,
            tempCanvas.height
          );
        } else {
          context.rotate(element.angle);
          if (element.type === "image") {
            context.scale(element.scale[0], element.scale[1]);
          }
          context.translate(-shiftX, -shiftY);
          drawElementOnCanvas(element, rc, context, renderConfig, appState);
        }
        context.restore();
      } else {
        const elementWithCanvas = generateElementWithCanvas(
          element,
          allElementsMap,
          renderConfig,
          appState
        );
        if (!elementWithCanvas) {
          return;
        }
        const currentImageSmoothingStatus = context.imageSmoothingEnabled;
        if (
          // do not disable smoothing during zoom as blurry shapes look better
          // on low resolution (while still zooming in) than sharp ones
          !appState?.shouldCacheIgnoreZoom && // angle is 0 -> always disable smoothing
          (!element.angle || // or check if angle is a right angle in which case we can still
          // disable smoothing without adversely affecting the result
          // We need less-than comparison because of FP artihmetic
          isRightAngleRads(element.angle))
        ) {
          context.imageSmoothingEnabled = false;
        }
        if (element.id === appState.croppingElementId && isImageElement(elementWithCanvas.element) && elementWithCanvas.element.crop !== null) {
          context.save();
          context.globalAlpha = 0.1;
          const uncroppedElementCanvas = generateElementCanvas(
            getUncroppedImageElement(elementWithCanvas.element, elementsMap),
            allElementsMap,
            appState.zoom,
            renderConfig,
            appState
          );
          if (uncroppedElementCanvas) {
            drawElementFromCanvas(
              uncroppedElementCanvas,
              context,
              renderConfig,
              appState,
              allElementsMap
            );
          }
          context.restore();
        }
        drawElementFromCanvas(
          elementWithCanvas,
          context,
          renderConfig,
          appState,
          allElementsMap
        );
        context.imageSmoothingEnabled = currentImageSmoothingStatus;
      }
      break;
    }
    default: {
      throw new Error(`Unimplemented type ${element.type}`);
    }
  }
  context.globalAlpha = 1;
};
var pathsCache = /* @__PURE__ */ new WeakMap([]);
function generateFreeDrawShape(element) {
  const svgPathData = getFreeDrawSvgPath(element);
  const path = new Path2D(svgPathData);
  pathsCache.set(element, path);
  return path;
}
function getFreeDrawPath2D(element) {
  return pathsCache.get(element);
}
function getFreeDrawSvgPath(element) {
  const inputPoints = element.simulatePressure ? element.points : element.points.length ? element.points.map(([x, y], i) => [x, y, element.pressures[i]]) : [[0, 0, 0.5]];
  const options = {
    simulatePressure: element.simulatePressure,
    size: element.strokeWidth * 4.25,
    thinning: 0.6,
    smoothing: 0.5,
    streamline: 0.5,
    easing: (t) => Math.sin(t * Math.PI / 2),
    // https://easings.net/#easeOutSine
    last: !!element.lastCommittedPoint
    // LastCommittedPoint is added on pointerup
  };
  return getSvgPathFromStroke2(getStroke(inputPoints, options));
}
function med(A, B) {
  return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
}
var TO_FIXED_PRECISION = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;
function getSvgPathFromStroke2(points) {
  if (!points.length) {
    return "";
  }
  const max = points.length - 1;
  return points.reduce(
    (acc, point, i, arr) => {
      if (i === max) {
        acc.push(point, med(point, arr[0]), "L", arr[0], "Z");
      } else {
        acc.push(point, med(point, arr[i + 1]));
      }
      return acc;
    },
    ["M", points[0], "Q"]
  ).join(" ").replace(TO_FIXED_PRECISION, "$1");
}

// ../element/src/Shape.ts
var getDashArrayDashed = (strokeWidth) => [8, 8 + strokeWidth];
var getDashArrayDotted = (strokeWidth) => [1.5, 6 + strokeWidth];
function adjustRoughness(element) {
  const roughness = element.roughness;
  const maxSize = Math.max(element.width, element.height);
  const minSize = Math.min(element.width, element.height);
  if (
    // both sides relatively big
    minSize >= 20 && maxSize >= 50 || // is round & both sides above 15px
    minSize >= 15 && !!element.roundness && canChangeRoundness(element.type) || // relatively long linear element
    isLinearElement(element) && maxSize >= 50
  ) {
    return roughness;
  }
  return Math.min(roughness / (maxSize < 10 ? 3 : 2), 2.5);
}
var generateRoughOptions = (element, continuousPath = false) => {
  const options = {
    seed: element.seed,
    strokeLineDash: element.strokeStyle === "dashed" ? getDashArrayDashed(element.strokeWidth) : element.strokeStyle === "dotted" ? getDashArrayDotted(element.strokeWidth) : void 0,
    // for non-solid strokes, disable multiStroke because it tends to make
    // dashes/dots overlay each other
    disableMultiStroke: element.strokeStyle !== "solid",
    // for non-solid strokes, increase the width a bit to make it visually
    // similar to solid strokes, because we're also disabling multiStroke
    strokeWidth: element.strokeStyle !== "solid" ? element.strokeWidth + 0.5 : element.strokeWidth,
    // when increasing strokeWidth, we must explicitly set fillWeight and
    // hachureGap because if not specified, roughjs uses strokeWidth to
    // calculate them (and we don't want the fills to be modified)
    fillWeight: element.strokeWidth / 2,
    hachureGap: element.strokeWidth * 4,
    roughness: adjustRoughness(element),
    stroke: element.strokeColor,
    preserveVertices: continuousPath || element.roughness < ROUGHNESS.cartoonist
  };
  switch (element.type) {
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "diamond":
    case "ellipse": {
      options.fillStyle = element.fillStyle;
      options.fill = isTransparent(element.backgroundColor) ? void 0 : element.backgroundColor;
      if (element.type === "ellipse") {
        options.curveFitting = 1;
      }
      return options;
    }
    case "line":
    case "freedraw": {
      if (isPathALoop(element.points)) {
        options.fillStyle = element.fillStyle;
        options.fill = element.backgroundColor === "transparent" ? void 0 : element.backgroundColor;
      }
      return options;
    }
    case "arrow":
      return options;
    default: {
      throw new Error(`Unimplemented type ${element.type}`);
    }
  }
};
var modifyIframeLikeForRoughOptions = (element, isExporting, embedsValidationStatus) => {
  if (isIframeLikeElement(element) && (isExporting || isEmbeddableElement(element) && embedsValidationStatus?.get(element.id) !== true) && isTransparent(element.backgroundColor) && isTransparent(element.strokeColor)) {
    return {
      ...element,
      roughness: 0,
      backgroundColor: "#d3d3d3",
      fillStyle: "solid"
    };
  } else if (isIframeElement(element)) {
    return {
      ...element,
      strokeColor: isTransparent(element.strokeColor) ? "#000000" : element.strokeColor,
      backgroundColor: isTransparent(element.backgroundColor) ? "#f4f4f6" : element.backgroundColor
    };
  }
  return element;
};
var getArrowheadShapes = (element, shape, position, arrowhead, generator, options, canvasBackgroundColor) => {
  const arrowheadPoints = getArrowheadPoints(
    element,
    shape,
    position,
    arrowhead
  );
  if (arrowheadPoints === null) {
    return [];
  }
  const generateCrowfootOne = (arrowheadPoints2, options2) => {
    if (arrowheadPoints2 === null) {
      return [];
    }
    const [, , x3, y3, x4, y4] = arrowheadPoints2;
    return [generator.line(x3, y3, x4, y4, options2)];
  };
  switch (arrowhead) {
    case "dot":
    case "circle":
    case "circle_outline": {
      const [x, y, diameter] = arrowheadPoints;
      delete options.strokeLineDash;
      return [
        generator.circle(x, y, diameter, {
          ...options,
          fill: arrowhead === "circle_outline" ? canvasBackgroundColor : element.strokeColor,
          fillStyle: "solid",
          stroke: element.strokeColor,
          roughness: Math.min(0.5, options.roughness || 0)
        })
      ];
    }
    case "triangle":
    case "triangle_outline": {
      const [x, y, x2, y2, x3, y3] = arrowheadPoints;
      delete options.strokeLineDash;
      return [
        generator.polygon(
          [
            [x, y],
            [x2, y2],
            [x3, y3],
            [x, y]
          ],
          {
            ...options,
            fill: arrowhead === "triangle_outline" ? canvasBackgroundColor : element.strokeColor,
            fillStyle: "solid",
            roughness: Math.min(1, options.roughness || 0)
          }
        )
      ];
    }
    case "diamond":
    case "diamond_outline": {
      const [x, y, x2, y2, x3, y3, x4, y4] = arrowheadPoints;
      delete options.strokeLineDash;
      return [
        generator.polygon(
          [
            [x, y],
            [x2, y2],
            [x3, y3],
            [x4, y4],
            [x, y]
          ],
          {
            ...options,
            fill: arrowhead === "diamond_outline" ? canvasBackgroundColor : element.strokeColor,
            fillStyle: "solid",
            roughness: Math.min(1, options.roughness || 0)
          }
        )
      ];
    }
    case "crowfoot_one":
      return generateCrowfootOne(arrowheadPoints, options);
    case "bar":
    case "arrow":
    case "crowfoot_many":
    case "crowfoot_one_or_many":
    default: {
      const [x2, y2, x3, y3, x4, y4] = arrowheadPoints;
      if (element.strokeStyle === "dotted") {
        const dash = getDashArrayDotted(element.strokeWidth - 1);
        options.strokeLineDash = [dash[0], dash[1] - 1];
      } else {
        delete options.strokeLineDash;
      }
      options.roughness = Math.min(1, options.roughness || 0);
      return [
        generator.line(x3, y3, x2, y2, options),
        generator.line(x4, y4, x2, y2, options),
        ...arrowhead === "crowfoot_one_or_many" ? generateCrowfootOne(
          getArrowheadPoints(element, shape, position, "crowfoot_one"),
          options
        ) : []
      ];
    }
  }
};
var _generateElementShape = (element, generator, {
  isExporting,
  canvasBackgroundColor,
  embedsValidationStatus
}) => {
  switch (element.type) {
    case "rectangle":
    case "iframe":
    case "embeddable": {
      let shape;
      if (element.roundness) {
        const w = element.width;
        const h = element.height;
        const r = getCornerRadius(Math.min(w, h), element);
        shape = generator.path(
          `M ${r} 0 L ${w - r} 0 Q ${w} 0, ${w} ${r} L ${w} ${h - r} Q ${w} ${h}, ${w - r} ${h} L ${r} ${h} Q 0 ${h}, 0 ${h - r} L 0 ${r} Q 0 0, ${r} 0`,
          generateRoughOptions(
            modifyIframeLikeForRoughOptions(
              element,
              isExporting,
              embedsValidationStatus
            ),
            true
          )
        );
      } else {
        shape = generator.rectangle(
          0,
          0,
          element.width,
          element.height,
          generateRoughOptions(
            modifyIframeLikeForRoughOptions(
              element,
              isExporting,
              embedsValidationStatus
            ),
            false
          )
        );
      }
      return shape;
    }
    case "diamond": {
      let shape;
      const [topX, topY, rightX, rightY, bottomX, bottomY, leftX, leftY] = getDiamondPoints(element);
      if (element.roundness) {
        const verticalRadius = getCornerRadius(Math.abs(topX - leftX), element);
        const horizontalRadius = getCornerRadius(
          Math.abs(rightY - topY),
          element
        );
        shape = generator.path(
          `M ${topX + verticalRadius} ${topY + horizontalRadius} L ${rightX - verticalRadius} ${rightY - horizontalRadius}
            C ${rightX} ${rightY}, ${rightX} ${rightY}, ${rightX - verticalRadius} ${rightY + horizontalRadius}
            L ${bottomX + verticalRadius} ${bottomY - horizontalRadius}
            C ${bottomX} ${bottomY}, ${bottomX} ${bottomY}, ${bottomX - verticalRadius} ${bottomY - horizontalRadius}
            L ${leftX + verticalRadius} ${leftY + horizontalRadius}
            C ${leftX} ${leftY}, ${leftX} ${leftY}, ${leftX + verticalRadius} ${leftY - horizontalRadius}
            L ${topX - verticalRadius} ${topY + horizontalRadius}
            C ${topX} ${topY}, ${topX} ${topY}, ${topX + verticalRadius} ${topY + horizontalRadius}`,
          generateRoughOptions(element, true)
        );
      } else {
        shape = generator.polygon(
          [
            [topX, topY],
            [rightX, rightY],
            [bottomX, bottomY],
            [leftX, leftY]
          ],
          generateRoughOptions(element)
        );
      }
      return shape;
    }
    case "ellipse": {
      const shape = generator.ellipse(
        element.width / 2,
        element.height / 2,
        element.width,
        element.height,
        generateRoughOptions(element)
      );
      return shape;
    }
    case "line":
    case "arrow": {
      let shape;
      const options = generateRoughOptions(element);
      const points = element.points.length ? element.points : [pointFrom(0, 0)];
      if (isElbowArrow(element)) {
        if (!points.every(
          (point) => Math.abs(point[0]) <= 1e6 && Math.abs(point[1]) <= 1e6
        )) {
          console.error(
            `Elbow arrow with extreme point positions detected. Arrow not rendered.`,
            element.id,
            JSON.stringify(points)
          );
          shape = [];
        } else {
          shape = [
            generator.path(
              generateElbowArrowShape(points, 16),
              generateRoughOptions(element, true)
            )
          ];
        }
      } else if (!element.roundness) {
        if (options.fill) {
          shape = [
            generator.polygon(points, options)
          ];
        } else {
          shape = [
            generator.linearPath(points, options)
          ];
        }
      } else {
        shape = [generator.curve(points, options)];
      }
      if (element.type === "arrow") {
        const { startArrowhead = null, endArrowhead = "arrow" } = element;
        if (startArrowhead !== null) {
          const shapes = getArrowheadShapes(
            element,
            shape,
            "start",
            startArrowhead,
            generator,
            options,
            canvasBackgroundColor
          );
          shape.push(...shapes);
        }
        if (endArrowhead !== null) {
          if (endArrowhead === void 0) {
          }
          const shapes = getArrowheadShapes(
            element,
            shape,
            "end",
            endArrowhead,
            generator,
            options,
            canvasBackgroundColor
          );
          shape.push(...shapes);
        }
      }
      return shape;
    }
    case "freedraw": {
      let shape;
      generateFreeDrawShape(element);
      if (isPathALoop(element.points)) {
        const simplifiedPoints = simplify(
          element.points,
          0.75
        );
        shape = generator.curve(simplifiedPoints, {
          ...generateRoughOptions(element),
          stroke: "none"
        });
      } else {
        shape = null;
      }
      return shape;
    }
    case "frame":
    case "magicframe":
    case "text":
    case "image": {
      const shape = null;
      return shape;
    }
    default: {
      assertNever(
        element,
        `generateElementShape(): Unimplemented type ${element?.type}`
      );
      return null;
    }
  }
};
var generateElbowArrowShape = (points, radius) => {
  const subpoints = [];
  for (let i = 1; i < points.length - 1; i += 1) {
    const prev = points[i - 1];
    const next = points[i + 1];
    const point = points[i];
    const prevIsHorizontal = headingForPointIsHorizontal(point, prev);
    const nextIsHorizontal = headingForPointIsHorizontal(next, point);
    const corner = Math.min(
      radius,
      pointDistance(points[i], next) / 2,
      pointDistance(points[i], prev) / 2
    );
    if (prevIsHorizontal) {
      if (prev[0] < point[0]) {
        subpoints.push([points[i][0] - corner, points[i][1]]);
      } else {
        subpoints.push([points[i][0] + corner, points[i][1]]);
      }
    } else if (prev[1] < point[1]) {
      subpoints.push([points[i][0], points[i][1] - corner]);
    } else {
      subpoints.push([points[i][0], points[i][1] + corner]);
    }
    subpoints.push(points[i]);
    if (nextIsHorizontal) {
      if (next[0] < point[0]) {
        subpoints.push([points[i][0] - corner, points[i][1]]);
      } else {
        subpoints.push([points[i][0] + corner, points[i][1]]);
      }
    } else if (next[1] < point[1]) {
      subpoints.push([points[i][0], points[i][1] - corner]);
    } else {
      subpoints.push([points[i][0], points[i][1] + corner]);
    }
  }
  const d = [`M ${points[0][0]} ${points[0][1]}`];
  for (let i = 0; i < subpoints.length; i += 3) {
    d.push(`L ${subpoints[i][0]} ${subpoints[i][1]}`);
    d.push(
      `Q ${subpoints[i + 1][0]} ${subpoints[i + 1][1]}, ${subpoints[i + 2][0]} ${subpoints[i + 2][1]}`
    );
  }
  d.push(`L ${points[points.length - 1][0]} ${points[points.length - 1][1]}`);
  return d.join(" ");
};

// ../element/src/ShapeCache.ts
var _ShapeCache = class _ShapeCache {
};
__publicField(_ShapeCache, "rg", new RoughGenerator());
__publicField(_ShapeCache, "cache", /* @__PURE__ */ new WeakMap());
/**
 * Retrieves shape from cache if available. Use this only if shape
 * is optional and you have a fallback in case it's not cached.
 */
__publicField(_ShapeCache, "get", (element) => {
  return _ShapeCache.cache.get(
    element
  );
});
__publicField(_ShapeCache, "set", (element, shape) => _ShapeCache.cache.set(element, shape));
__publicField(_ShapeCache, "delete", (element) => _ShapeCache.cache.delete(element));
__publicField(_ShapeCache, "destroy", () => {
  _ShapeCache.cache = /* @__PURE__ */ new WeakMap();
});
/**
 * Generates & caches shape for element if not already cached, otherwise
 * returns cached shape.
 */
__publicField(_ShapeCache, "generateElementShape", (element, renderConfig) => {
  const cachedShape = renderConfig?.isExporting ? void 0 : _ShapeCache.get(element);
  if (cachedShape !== void 0) {
    return cachedShape;
  }
  elementWithCanvasCache.delete(element);
  const shape = _generateElementShape(
    element,
    _ShapeCache.rg,
    renderConfig || {
      isExporting: false,
      canvasBackgroundColor: COLOR_PALETTE.white,
      embedsValidationStatus: null
    }
  );
  _ShapeCache.cache.set(element, shape);
  return shape;
});
var ShapeCache = _ShapeCache;

// ../element/src/bounds.ts
var _ElementBounds = class _ElementBounds {
  static getBounds(element, elementsMap) {
    const cachedBounds = _ElementBounds.boundsCache.get(element);
    if (cachedBounds?.version && cachedBounds.version === element.version && // we don't invalidate cache when we update containers and not labels,
    // which is causing problems down the line. Fix TBA.
    !isBoundToContainer(element)) {
      return cachedBounds.bounds;
    }
    const bounds = _ElementBounds.calculateBounds(element, elementsMap);
    _ElementBounds.boundsCache.set(element, {
      version: element.version,
      bounds
    });
    return bounds;
  }
  static calculateBounds(element, elementsMap) {
    let bounds;
    const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
      element,
      elementsMap
    );
    if (isFreeDrawElement(element)) {
      const [minX, minY, maxX, maxY] = getBoundsFromPoints(
        element.points.map(
          ([x, y]) => pointRotateRads(
            pointFrom(x, y),
            pointFrom(cx - element.x, cy - element.y),
            element.angle
          )
        )
      );
      return [
        minX + element.x,
        minY + element.y,
        maxX + element.x,
        maxY + element.y
      ];
    } else if (isLinearElement(element)) {
      bounds = getLinearElementRotatedBounds(element, cx, cy, elementsMap);
    } else if (element.type === "diamond") {
      const [x11, y11] = pointRotateRads(
        pointFrom(cx, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const [x12, y12] = pointRotateRads(
        pointFrom(cx, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const [x22, y22] = pointRotateRads(
        pointFrom(x1, cy),
        pointFrom(cx, cy),
        element.angle
      );
      const [x21, y21] = pointRotateRads(
        pointFrom(x2, cy),
        pointFrom(cx, cy),
        element.angle
      );
      const minX = Math.min(x11, x12, x22, x21);
      const minY = Math.min(y11, y12, y22, y21);
      const maxX = Math.max(x11, x12, x22, x21);
      const maxY = Math.max(y11, y12, y22, y21);
      bounds = [minX, minY, maxX, maxY];
    } else if (element.type === "ellipse") {
      const w = (x2 - x1) / 2;
      const h = (y2 - y1) / 2;
      const cos = Math.cos(element.angle);
      const sin = Math.sin(element.angle);
      const ww = Math.hypot(w * cos, h * sin);
      const hh = Math.hypot(h * cos, w * sin);
      bounds = [cx - ww, cy - hh, cx + ww, cy + hh];
    } else {
      const [x11, y11] = pointRotateRads(
        pointFrom(x1, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const [x12, y12] = pointRotateRads(
        pointFrom(x1, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const [x22, y22] = pointRotateRads(
        pointFrom(x2, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const [x21, y21] = pointRotateRads(
        pointFrom(x2, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const minX = Math.min(x11, x12, x22, x21);
      const minY = Math.min(y11, y12, y22, y21);
      const maxX = Math.max(x11, x12, x22, x21);
      const maxY = Math.max(y11, y12, y22, y21);
      bounds = [minX, minY, maxX, maxY];
    }
    return bounds;
  }
};
__publicField(_ElementBounds, "boundsCache", /* @__PURE__ */ new WeakMap());
var ElementBounds = _ElementBounds;
var getElementAbsoluteCoords = (element, elementsMap, includeBoundText = false) => {
  if (isFreeDrawElement(element)) {
    return getFreeDrawElementAbsoluteCoords(element);
  } else if (isLinearElement(element)) {
    return LinearElementEditor.getElementAbsoluteCoords(
      element,
      elementsMap,
      includeBoundText
    );
  } else if (isTextElement(element)) {
    const container = elementsMap ? getContainerElement(element, elementsMap) : null;
    if (isArrowElement(container)) {
      const { x, y } = LinearElementEditor.getBoundTextElementPosition(
        container,
        element,
        elementsMap
      );
      return [
        x,
        y,
        x + element.width,
        y + element.height,
        x + element.width / 2,
        y + element.height / 2
      ];
    }
  }
  return [
    element.x,
    element.y,
    element.x + element.width,
    element.y + element.height,
    element.x + element.width / 2,
    element.y + element.height / 2
  ];
};
var getElementLineSegments = (element, elementsMap) => {
  const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
    element,
    elementsMap
  );
  const center = pointFrom(cx, cy);
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    const segments = [];
    let i = 0;
    while (i < element.points.length - 1) {
      segments.push(
        lineSegment(
          pointRotateRads(
            pointFrom(
              element.points[i][0] + element.x,
              element.points[i][1] + element.y
            ),
            center,
            element.angle
          ),
          pointRotateRads(
            pointFrom(
              element.points[i + 1][0] + element.x,
              element.points[i + 1][1] + element.y
            ),
            center,
            element.angle
          )
        )
      );
      i++;
    }
    return segments;
  }
  const [nw, ne, sw, se, n, s, w, e] = [
    [x1, y1],
    [x2, y1],
    [x1, y2],
    [x2, y2],
    [cx, y1],
    [cx, y2],
    [x1, cy],
    [x2, cy]
  ].map((point) => pointRotateRads(point, center, element.angle));
  if (element.type === "diamond") {
    return [
      lineSegment(n, w),
      lineSegment(n, e),
      lineSegment(s, w),
      lineSegment(s, e)
    ];
  }
  if (element.type === "ellipse") {
    return [
      lineSegment(n, w),
      lineSegment(n, e),
      lineSegment(s, w),
      lineSegment(s, e),
      lineSegment(n, w),
      lineSegment(n, e),
      lineSegment(s, w),
      lineSegment(s, e)
    ];
  }
  return [
    lineSegment(nw, ne),
    lineSegment(sw, se),
    lineSegment(nw, sw),
    lineSegment(ne, se),
    lineSegment(nw, e),
    lineSegment(sw, e),
    lineSegment(ne, w),
    lineSegment(se, w)
  ];
};
var getDiamondPoints = (element) => {
  const topX = Math.floor(element.width / 2) + 1;
  const topY = 0;
  const rightX = element.width;
  const rightY = Math.floor(element.height / 2) + 1;
  const bottomX = topX;
  const bottomY = element.height;
  const leftX = 0;
  const leftY = rightY;
  return [topX, topY, rightX, rightY, bottomX, bottomY, leftX, leftY];
};
var getBezierValueForT = (t, p0, p1, p2, p3) => {
  const oneMinusT = 1 - t;
  return Math.pow(oneMinusT, 3) * p0 + 3 * Math.pow(oneMinusT, 2) * t * p1 + 3 * oneMinusT * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
};
var solveQuadratic = (p0, p1, p2, p3) => {
  const i = p1 - p0;
  const j = p2 - p1;
  const k = p3 - p2;
  const a = 3 * i - 6 * j + 3 * k;
  const b = 6 * j - 6 * i;
  const c = 3 * i;
  const sqrtPart = b * b - 4 * a * c;
  const hasSolution = sqrtPart >= 0;
  if (!hasSolution) {
    return false;
  }
  let s1 = null;
  let s2 = null;
  let t1 = Infinity;
  let t2 = Infinity;
  if (a === 0) {
    t1 = t2 = -c / b;
  } else {
    t1 = (-b + Math.sqrt(sqrtPart)) / (2 * a);
    t2 = (-b - Math.sqrt(sqrtPart)) / (2 * a);
  }
  if (t1 >= 0 && t1 <= 1) {
    s1 = getBezierValueForT(t1, p0, p1, p2, p3);
  }
  if (t2 >= 0 && t2 <= 1) {
    s2 = getBezierValueForT(t2, p0, p1, p2, p3);
  }
  return [s1, s2];
};
var getCubicBezierCurveBound = (p0, p1, p2, p3) => {
  const solX = solveQuadratic(p0[0], p1[0], p2[0], p3[0]);
  const solY = solveQuadratic(p0[1], p1[1], p2[1], p3[1]);
  let minX = Math.min(p0[0], p3[0]);
  let maxX = Math.max(p0[0], p3[0]);
  if (solX) {
    const xs = solX.filter((x) => x !== null);
    minX = Math.min(minX, ...xs);
    maxX = Math.max(maxX, ...xs);
  }
  let minY = Math.min(p0[1], p3[1]);
  let maxY = Math.max(p0[1], p3[1]);
  if (solY) {
    const ys = solY.filter((y) => y !== null);
    minY = Math.min(minY, ...ys);
    maxY = Math.max(maxY, ...ys);
  }
  return [minX, minY, maxX, maxY];
};
var getMinMaxXYFromCurvePathOps = (ops, transformXY) => {
  let currentP = pointFrom(0, 0);
  const { minX, minY, maxX, maxY } = ops.reduce(
    (limits, { op, data }) => {
      if (op === "move") {
        const p = pointFromArray(data);
        invariant(p != null, "Op data is not a point");
        currentP = p;
      } else if (op === "bcurveTo") {
        const _p1 = pointFrom(data[0], data[1]);
        const _p2 = pointFrom(data[2], data[3]);
        const _p3 = pointFrom(data[4], data[5]);
        const p1 = transformXY ? transformXY(_p1) : _p1;
        const p2 = transformXY ? transformXY(_p2) : _p2;
        const p3 = transformXY ? transformXY(_p3) : _p3;
        const p0 = transformXY ? transformXY(currentP) : currentP;
        currentP = _p3;
        const [minX2, minY2, maxX2, maxY2] = getCubicBezierCurveBound(
          p0,
          p1,
          p2,
          p3
        );
        limits.minX = Math.min(limits.minX, minX2);
        limits.minY = Math.min(limits.minY, minY2);
        limits.maxX = Math.max(limits.maxX, maxX2);
        limits.maxY = Math.max(limits.maxY, maxY2);
      } else if (op === "lineTo") {
      } else if (op === "qcurveTo") {
      }
      return limits;
    },
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
  );
  return [minX, minY, maxX, maxY];
};
var getBoundsFromPoints = (points) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  return [minX, minY, maxX, maxY];
};
var getFreeDrawElementAbsoluteCoords = (element) => {
  const [minX, minY, maxX, maxY] = getBoundsFromPoints(element.points);
  const x1 = minX + element.x;
  const y1 = minY + element.y;
  const x2 = maxX + element.x;
  const y2 = maxY + element.y;
  return [x1, y1, x2, y2, (x1 + x2) / 2, (y1 + y2) / 2];
};
var getArrowheadSize = (arrowhead) => {
  switch (arrowhead) {
    case "arrow":
      return 25;
    case "diamond":
    case "diamond_outline":
      return 12;
    case "crowfoot_many":
    case "crowfoot_one":
    case "crowfoot_one_or_many":
      return 20;
    default:
      return 15;
  }
};
var getArrowheadAngle = (arrowhead) => {
  switch (arrowhead) {
    case "bar":
      return 90;
    case "arrow":
      return 20;
    default:
      return 25;
  }
};
var getArrowheadPoints = (element, shape, position, arrowhead) => {
  if (shape.length < 1) {
    return null;
  }
  const ops = getCurvePathOps(shape[0]);
  if (ops.length < 1) {
    return null;
  }
  const index = position === "start" ? 1 : ops.length - 1;
  const data = ops[index].data;
  invariant(data.length === 6, "Op data length is not 6");
  const p3 = pointFrom(data[4], data[5]);
  const p2 = pointFrom(data[2], data[3]);
  const p1 = pointFrom(data[0], data[1]);
  const prevOp = ops[index - 1];
  let p0 = pointFrom(0, 0);
  if (prevOp.op === "move") {
    const p = pointFromArray(prevOp.data);
    invariant(p != null, "Op data is not a point");
    p0 = p;
  } else if (prevOp.op === "bcurveTo") {
    p0 = pointFrom(prevOp.data[4], prevOp.data[5]);
  }
  const equation = (t, idx) => Math.pow(1 - t, 3) * p3[idx] + 3 * t * Math.pow(1 - t, 2) * p2[idx] + 3 * Math.pow(t, 2) * (1 - t) * p1[idx] + p0[idx] * Math.pow(t, 3);
  const [x2, y2] = position === "start" ? p0 : p3;
  const [x1, y1] = [equation(0.3, 0), equation(0.3, 1)];
  const distance2 = Math.hypot(x2 - x1, y2 - y1);
  const nx = (x2 - x1) / distance2;
  const ny = (y2 - y1) / distance2;
  const size = getArrowheadSize(arrowhead);
  let length = 0;
  {
    const [cx, cy] = position === "end" ? element.points[element.points.length - 1] : element.points[0];
    const [px, py] = element.points.length > 1 ? position === "end" ? element.points[element.points.length - 2] : element.points[1] : [0, 0];
    length = Math.hypot(cx - px, cy - py);
  }
  const lengthMultiplier = arrowhead === "diamond" || arrowhead === "diamond_outline" ? 0.25 : 0.5;
  const minSize = Math.min(size, length * lengthMultiplier);
  const xs = x2 - nx * minSize;
  const ys = y2 - ny * minSize;
  if (arrowhead === "dot" || arrowhead === "circle" || arrowhead === "circle_outline") {
    const diameter = Math.hypot(ys - y2, xs - x2) + element.strokeWidth - 2;
    return [x2, y2, diameter];
  }
  const angle = getArrowheadAngle(arrowhead);
  if (arrowhead === "crowfoot_many" || arrowhead === "crowfoot_one_or_many") {
    const [x32, y32] = pointRotateRads(
      pointFrom(x2, y2),
      pointFrom(xs, ys),
      degreesToRadians(-angle)
    );
    const [x42, y42] = pointRotateRads(
      pointFrom(x2, y2),
      pointFrom(xs, ys),
      degreesToRadians(angle)
    );
    return [xs, ys, x32, y32, x42, y42];
  }
  const [x3, y3] = pointRotateRads(
    pointFrom(xs, ys),
    pointFrom(x2, y2),
    -angle * Math.PI / 180
  );
  const [x4, y4] = pointRotateRads(
    pointFrom(xs, ys),
    pointFrom(x2, y2),
    degreesToRadians(angle)
  );
  if (arrowhead === "diamond" || arrowhead === "diamond_outline") {
    let ox;
    let oy;
    if (position === "start") {
      const [px, py] = element.points.length > 1 ? element.points[1] : [0, 0];
      [ox, oy] = pointRotateRads(
        pointFrom(x2 + minSize * 2, y2),
        pointFrom(x2, y2),
        Math.atan2(py - y2, px - x2)
      );
    } else {
      const [px, py] = element.points.length > 1 ? element.points[element.points.length - 2] : [0, 0];
      [ox, oy] = pointRotateRads(
        pointFrom(x2 - minSize * 2, y2),
        pointFrom(x2, y2),
        Math.atan2(y2 - py, x2 - px)
      );
    }
    return [x2, y2, x3, y3, ox, oy, x4, y4];
  }
  return [x2, y2, x3, y3, x4, y4];
};
var generateLinearElementShape = (element) => {
  const generator = rough2.generator();
  const options = generateRoughOptions(element);
  const method = (() => {
    if (element.roundness) {
      return "curve";
    }
    if (options.fill) {
      return "polygon";
    }
    return "linearPath";
  })();
  return generator[method](
    element.points,
    options
  );
};
var getLinearElementRotatedBounds = (element, cx, cy, elementsMap) => {
  const boundTextElement = getBoundTextElement(element, elementsMap);
  if (element.points.length < 2) {
    const [pointX, pointY] = element.points[0];
    const [x, y] = pointRotateRads(
      pointFrom(element.x + pointX, element.y + pointY),
      pointFrom(cx, cy),
      element.angle
    );
    let coords2 = [x, y, x, y];
    if (boundTextElement) {
      const coordsWithBoundText = LinearElementEditor.getMinMaxXYWithBoundText(
        element,
        elementsMap,
        [x, y, x, y],
        boundTextElement
      );
      coords2 = [
        coordsWithBoundText[0],
        coordsWithBoundText[1],
        coordsWithBoundText[2],
        coordsWithBoundText[3]
      ];
    }
    return coords2;
  }
  const cachedShape = ShapeCache.get(element)?.[0];
  const shape = cachedShape ?? generateLinearElementShape(element);
  const ops = getCurvePathOps(shape);
  const transformXY = ([x, y]) => pointRotateRads(
    pointFrom(element.x + x, element.y + y),
    pointFrom(cx, cy),
    element.angle
  );
  const res = getMinMaxXYFromCurvePathOps(ops, transformXY);
  let coords = [res[0], res[1], res[2], res[3]];
  if (boundTextElement) {
    const coordsWithBoundText = LinearElementEditor.getMinMaxXYWithBoundText(
      element,
      elementsMap,
      coords,
      boundTextElement
    );
    coords = [
      coordsWithBoundText[0],
      coordsWithBoundText[1],
      coordsWithBoundText[2],
      coordsWithBoundText[3]
    ];
  }
  return coords;
};
var getElementBounds = (element, elementsMap) => {
  return ElementBounds.getBounds(element, elementsMap);
};
var getCommonBounds = (elements, elementsMap) => {
  if (!elements.length) {
    return [0, 0, 0, 0];
  }
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  const _elementsMap = elementsMap || arrayToMap(elements);
  elements.forEach((element) => {
    const [x1, y1, x2, y2] = getElementBounds(element, _elementsMap);
    minX = Math.min(minX, x1);
    minY = Math.min(minY, y1);
    maxX = Math.max(maxX, x2);
    maxY = Math.max(maxY, y2);
  });
  return [minX, minY, maxX, maxY];
};
var getDraggedElementsBounds = (elements, dragOffset) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  return [
    minX + dragOffset.x,
    minY + dragOffset.y,
    maxX + dragOffset.x,
    maxY + dragOffset.y
  ];
};
var getResizedElementAbsoluteCoords = (element, nextWidth, nextHeight, normalizePoints) => {
  if (!(isLinearElement(element) || isFreeDrawElement(element))) {
    return [
      element.x,
      element.y,
      element.x + nextWidth,
      element.y + nextHeight
    ];
  }
  const points = rescalePoints(
    0,
    nextWidth,
    rescalePoints(1, nextHeight, element.points, normalizePoints),
    normalizePoints
  );
  let bounds;
  if (isFreeDrawElement(element)) {
    bounds = getBoundsFromPoints(points);
  } else {
    const gen = rough2.generator();
    const curve2 = !element.roundness ? gen.linearPath(
      points,
      generateRoughOptions(element)
    ) : gen.curve(points, generateRoughOptions(element));
    const ops = getCurvePathOps(curve2);
    bounds = getMinMaxXYFromCurvePathOps(ops);
  }
  const [minX, minY, maxX, maxY] = bounds;
  return [
    minX + element.x,
    minY + element.y,
    maxX + element.x,
    maxY + element.y
  ];
};
var getElementPointsCoords = (element, points) => {
  const gen = rough2.generator();
  const curve2 = element.roundness == null ? gen.linearPath(
    points,
    generateRoughOptions(element)
  ) : gen.curve(points, generateRoughOptions(element));
  const ops = getCurvePathOps(curve2);
  const [minX, minY, maxX, maxY] = getMinMaxXYFromCurvePathOps(ops);
  return [
    minX + element.x,
    minY + element.y,
    maxX + element.x,
    maxY + element.y
  ];
};
var getClosestElementBounds = (elements, from) => {
  if (!elements.length) {
    return [0, 0, 0, 0];
  }
  let minDistance = Infinity;
  let closestElement = elements[0];
  const elementsMap = arrayToMap(elements);
  elements.forEach((element) => {
    const [x1, y1, x2, y2] = getElementBounds(element, elementsMap);
    const distance2 = pointDistance(
      pointFrom((x1 + x2) / 2, (y1 + y2) / 2),
      pointFrom(from.x, from.y)
    );
    if (distance2 < minDistance) {
      minDistance = distance2;
      closestElement = element;
    }
  });
  return getElementBounds(closestElement, elementsMap);
};
var getCommonBoundingBox = (elements) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
    midX: (minX + maxX) / 2,
    midY: (minY + maxY) / 2
  };
};
var getVisibleSceneBounds = ({
  scrollX,
  scrollY,
  width,
  height,
  zoom
}) => {
  return [
    -scrollX,
    -scrollY,
    -scrollX + width / zoom.value,
    -scrollY + height / zoom.value
  ];
};
var getCenterForBounds = (bounds) => pointFrom(
  bounds[0] + (bounds[2] - bounds[0]) / 2,
  bounds[1] + (bounds[3] - bounds[1]) / 2
);
var doBoundsIntersect = (bounds1, bounds2) => {
  if (bounds1 == null || bounds2 == null) {
    return false;
  }
  const [minX1, minY1, maxX1, maxY1] = bounds1;
  const [minX2, minY2, maxX2, maxY2] = bounds2;
  return minX1 < maxX2 && maxX1 > minX2 && minY1 < maxY2 && maxY1 > minY2;
};

// ../element/src/sizeHelpers.ts
var isInvisiblySmallElement = (element) => {
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    return element.points.length < 2;
  }
  return element.width === 0 && element.height === 0;
};
var isElementInViewport = (element, width, height, viewTransformations, elementsMap) => {
  const [x1, y1, x2, y2] = getElementBounds(element, elementsMap);
  const topLeftSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft,
      clientY: viewTransformations.offsetTop
    },
    viewTransformations
  );
  const bottomRightSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + width,
      clientY: viewTransformations.offsetTop + height
    },
    viewTransformations
  );
  return topLeftSceneCoords.x <= x2 && topLeftSceneCoords.y <= y2 && bottomRightSceneCoords.x >= x1 && bottomRightSceneCoords.y >= y1;
};
var isElementCompletelyInViewport = (elements, width, height, viewTransformations, elementsMap, padding) => {
  const [x1, y1, x2, y2] = getCommonBounds(elements, elementsMap);
  const topLeftSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + (padding?.left || 0),
      clientY: viewTransformations.offsetTop + (padding?.top || 0)
    },
    viewTransformations
  );
  const bottomRightSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + width - (padding?.right || 0),
      clientY: viewTransformations.offsetTop + height - (padding?.bottom || 0)
    },
    viewTransformations
  );
  return x1 >= topLeftSceneCoords.x && y1 >= topLeftSceneCoords.y && x2 <= bottomRightSceneCoords.x && y2 <= bottomRightSceneCoords.y;
};
var getPerfectElementSize = (elementType, width, height) => {
  const absWidth = Math.abs(width);
  const absHeight = Math.abs(height);
  if (elementType === "line" || elementType === "arrow" || elementType === "freedraw") {
    const lockedAngle = Math.round(Math.atan(absHeight / absWidth) / SHIFT_LOCKING_ANGLE) * SHIFT_LOCKING_ANGLE;
    if (lockedAngle === 0) {
      height = 0;
    } else if (lockedAngle === Math.PI / 2) {
      width = 0;
    } else {
      height = absWidth * Math.tan(lockedAngle) * Math.sign(height) || height;
    }
  } else if (elementType !== "selection") {
    height = absWidth * Math.sign(height);
  }
  return { width, height };
};
var getLockedLinearCursorAlignSize = (originX, originY, x, y) => {
  let width = x - originX;
  let height = y - originY;
  const lockedAngle = Math.round(Math.atan(height / width) / SHIFT_LOCKING_ANGLE) * SHIFT_LOCKING_ANGLE;
  if (lockedAngle === 0) {
    height = 0;
  } else if (lockedAngle === Math.PI / 2) {
    width = 0;
  } else {
    const a1 = Math.tan(lockedAngle);
    const b1 = -1;
    const c1 = originY - a1 * originX;
    const a2 = -1 / a1;
    const b2 = -1;
    const c2 = y - a2 * x;
    const intersectX = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
    const intersectY = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);
    width = intersectX - originX;
    height = intersectY - originY;
  }
  return { width, height };
};
var getNormalizedDimensions = (element) => {
  const ret = {
    width: element.width,
    height: element.height,
    x: element.x,
    y: element.y
  };
  if (element.width < 0) {
    const nextWidth = Math.abs(element.width);
    ret.width = nextWidth;
    ret.x = element.x - nextWidth;
  }
  if (element.height < 0) {
    const nextHeight = Math.abs(element.height);
    ret.height = nextHeight;
    ret.y = element.y - nextHeight;
  }
  return ret;
};

// ../element/src/index.ts
var getSceneVersion = (elements) => elements.reduce((acc, el) => acc + el.version, 0);
var hashElementsVersion = (elements) => {
  let hash = 5381;
  for (let i = 0; i < elements.length; i++) {
    hash = (hash << 5) + hash + elements[i].versionNonce;
  }
  return hash >>> 0;
};
var hashString = (s) => {
  let hash = 5381;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) + hash + char;
  }
  return hash >>> 0;
};
var getVisibleElements = (elements) => elements.filter(
  (el) => !el.isDeleted && !isInvisiblySmallElement(el)
);
var getNonDeletedElements3 = (elements) => elements.filter((element) => !element.isDeleted);
var isNonDeletedElement = (element) => !element.isDeleted;
var _clearElements = (elements) => getNonDeletedElements3(elements).map(
  (element) => isLinearElementType(element.type) ? { ...element, lastCommittedPoint: null } : element
);
var clearElementsForDatabase = (elements) => _clearElements(elements);
var clearElementsForExport = (elements) => _clearElements(elements);

// appState.ts
var defaultExportScale = EXPORT_SCALES.includes(devicePixelRatio) ? devicePixelRatio : 1;
var getDefaultAppState = () => {
  return {
    showWelcomeScreen: false,
    theme: THEME.LIGHT,
    collaborators: /* @__PURE__ */ new Map(),
    currentChartType: "bar",
    currentItemBackgroundColor: DEFAULT_ELEMENT_PROPS.backgroundColor,
    currentItemEndArrowhead: "arrow",
    currentItemFillStyle: DEFAULT_ELEMENT_PROPS.fillStyle,
    currentItemFontFamily: DEFAULT_FONT_FAMILY,
    currentItemFontSize: DEFAULT_FONT_SIZE,
    currentItemOpacity: DEFAULT_ELEMENT_PROPS.opacity,
    currentItemRoughness: DEFAULT_ELEMENT_PROPS.roughness,
    currentItemStartArrowhead: null,
    currentItemStrokeColor: DEFAULT_ELEMENT_PROPS.strokeColor,
    currentItemRoundness: "round",
    currentItemArrowType: ARROW_TYPE.round,
    currentItemStrokeStyle: DEFAULT_ELEMENT_PROPS.strokeStyle,
    currentItemStrokeWidth: DEFAULT_ELEMENT_PROPS.strokeWidth,
    currentItemTextAlign: DEFAULT_TEXT_ALIGN,
    currentHoveredFontFamily: null,
    cursorButton: "up",
    activeEmbeddable: null,
    newElement: null,
    editingTextElement: null,
    editingGroupId: null,
    editingLinearElement: null,
    activeTool: {
      type: "selection",
      customType: null,
      locked: DEFAULT_ELEMENT_PROPS.locked,
      lastActiveTool: null
    },
    penMode: false,
    penDetected: false,
    errorMessage: null,
    exportBackground: true,
    exportScale: defaultExportScale,
    exportEmbedScene: false,
    exportWithDarkMode: false,
    fileHandle: null,
    gridSize: DEFAULT_GRID_SIZE,
    gridStep: DEFAULT_GRID_STEP,
    gridModeEnabled: false,
    isBindingEnabled: true,
    defaultSidebarDockedPreference: false,
    isLoading: false,
    isResizing: false,
    isRotating: false,
    lastPointerDownWith: "mouse",
    multiElement: null,
    name: null,
    contextMenu: null,
    openMenu: null,
    openPopup: null,
    openSidebar: null,
    openDialog: null,
    pasteDialog: { shown: false, data: null },
    previousSelectedElementIds: {},
    resizingElement: null,
    scrolledOutside: false,
    scrollX: 0,
    scrollY: 0,
    selectedElementIds: {},
    hoveredElementIds: {},
    selectedGroupIds: {},
    selectedElementsAreBeingDragged: false,
    selectionElement: null,
    shouldCacheIgnoreZoom: false,
    stats: {
      open: false,
      panels: STATS_PANELS.generalStats | STATS_PANELS.elementProperties
    },
    startBoundElement: null,
    suggestedBindings: [],
    frameRendering: { enabled: true, clip: true, name: true, outline: true },
    frameToHighlight: null,
    editingFrame: null,
    elementsToHighlight: null,
    toast: null,
    viewBackgroundColor: COLOR_PALETTE.white,
    zenModeEnabled: false,
    zoom: {
      value: 1
    },
    viewModeEnabled: false,
    pendingImageElementId: null,
    showHyperlinkPopup: false,
    selectedLinearElement: null,
    snapLines: [],
    originSnapOffset: {
      x: 0,
      y: 0
    },
    objectsSnapModeEnabled: false,
    userToFollow: null,
    followedBy: /* @__PURE__ */ new Set(),
    isCropping: false,
    croppingElementId: null,
    searchMatches: []
  };
};
var APP_STATE_STORAGE_CONF = /* @__PURE__ */ ((config) => config)({
  showWelcomeScreen: { browser: true, export: false, server: false },
  theme: { browser: true, export: false, server: false },
  collaborators: { browser: false, export: false, server: false },
  currentChartType: { browser: true, export: false, server: false },
  currentItemBackgroundColor: { browser: true, export: false, server: false },
  currentItemEndArrowhead: { browser: true, export: false, server: false },
  currentItemFillStyle: { browser: true, export: false, server: false },
  currentItemFontFamily: { browser: true, export: false, server: false },
  currentItemFontSize: { browser: true, export: false, server: false },
  currentItemRoundness: {
    browser: true,
    export: false,
    server: false
  },
  currentItemArrowType: {
    browser: true,
    export: false,
    server: false
  },
  currentItemOpacity: { browser: true, export: false, server: false },
  currentItemRoughness: { browser: true, export: false, server: false },
  currentItemStartArrowhead: { browser: true, export: false, server: false },
  currentItemStrokeColor: { browser: true, export: false, server: false },
  currentItemStrokeStyle: { browser: true, export: false, server: false },
  currentItemStrokeWidth: { browser: true, export: false, server: false },
  currentItemTextAlign: { browser: true, export: false, server: false },
  currentHoveredFontFamily: { browser: false, export: false, server: false },
  cursorButton: { browser: true, export: false, server: false },
  activeEmbeddable: { browser: false, export: false, server: false },
  newElement: { browser: false, export: false, server: false },
  editingTextElement: { browser: false, export: false, server: false },
  editingGroupId: { browser: true, export: false, server: false },
  editingLinearElement: { browser: false, export: false, server: false },
  activeTool: { browser: true, export: false, server: false },
  penMode: { browser: true, export: false, server: false },
  penDetected: { browser: true, export: false, server: false },
  errorMessage: { browser: false, export: false, server: false },
  exportBackground: { browser: true, export: false, server: false },
  exportEmbedScene: { browser: true, export: false, server: false },
  exportScale: { browser: true, export: false, server: false },
  exportWithDarkMode: { browser: true, export: false, server: false },
  fileHandle: { browser: false, export: false, server: false },
  gridSize: { browser: true, export: true, server: true },
  gridStep: { browser: true, export: true, server: true },
  gridModeEnabled: { browser: true, export: true, server: true },
  height: { browser: false, export: false, server: false },
  isBindingEnabled: { browser: false, export: false, server: false },
  defaultSidebarDockedPreference: {
    browser: true,
    export: false,
    server: false
  },
  isLoading: { browser: false, export: false, server: false },
  isResizing: { browser: false, export: false, server: false },
  isRotating: { browser: false, export: false, server: false },
  lastPointerDownWith: { browser: true, export: false, server: false },
  multiElement: { browser: false, export: false, server: false },
  name: { browser: true, export: false, server: false },
  offsetLeft: { browser: false, export: false, server: false },
  offsetTop: { browser: false, export: false, server: false },
  contextMenu: { browser: false, export: false, server: false },
  openMenu: { browser: true, export: false, server: false },
  openPopup: { browser: false, export: false, server: false },
  openSidebar: { browser: true, export: false, server: false },
  openDialog: { browser: false, export: false, server: false },
  pasteDialog: { browser: false, export: false, server: false },
  previousSelectedElementIds: { browser: true, export: false, server: false },
  resizingElement: { browser: false, export: false, server: false },
  scrolledOutside: { browser: true, export: false, server: false },
  scrollX: { browser: true, export: false, server: false },
  scrollY: { browser: true, export: false, server: false },
  selectedElementIds: { browser: true, export: false, server: false },
  hoveredElementIds: { browser: false, export: false, server: false },
  selectedGroupIds: { browser: true, export: false, server: false },
  selectedElementsAreBeingDragged: {
    browser: false,
    export: false,
    server: false
  },
  selectionElement: { browser: false, export: false, server: false },
  shouldCacheIgnoreZoom: { browser: true, export: false, server: false },
  stats: { browser: true, export: false, server: false },
  startBoundElement: { browser: false, export: false, server: false },
  suggestedBindings: { browser: false, export: false, server: false },
  frameRendering: { browser: false, export: false, server: false },
  frameToHighlight: { browser: false, export: false, server: false },
  editingFrame: { browser: false, export: false, server: false },
  elementsToHighlight: { browser: false, export: false, server: false },
  toast: { browser: false, export: false, server: false },
  viewBackgroundColor: { browser: true, export: true, server: true },
  width: { browser: false, export: false, server: false },
  zenModeEnabled: { browser: true, export: false, server: false },
  zoom: { browser: true, export: false, server: false },
  viewModeEnabled: { browser: false, export: false, server: false },
  pendingImageElementId: { browser: false, export: false, server: false },
  showHyperlinkPopup: { browser: false, export: false, server: false },
  selectedLinearElement: { browser: true, export: false, server: false },
  snapLines: { browser: false, export: false, server: false },
  originSnapOffset: { browser: false, export: false, server: false },
  objectsSnapModeEnabled: { browser: true, export: false, server: false },
  userToFollow: { browser: false, export: false, server: false },
  followedBy: { browser: false, export: false, server: false },
  isCropping: { browser: false, export: false, server: false },
  croppingElementId: { browser: false, export: false, server: false },
  searchMatches: { browser: false, export: false, server: false }
});
var _clearAppStateForStorage = (appState, exportType) => {
  const stateForExport = {};
  for (const key of Object.keys(appState)) {
    const propConfig = APP_STATE_STORAGE_CONF[key];
    if (propConfig?.[exportType]) {
      const nextValue = appState[key];
      stateForExport[key] = nextValue;
    }
  }
  return stateForExport;
};
var cleanAppStateForExport = (appState) => {
  return _clearAppStateForStorage(appState, "export");
};
var clearAppStateForDatabase = (appState) => {
  return _clearAppStateForStorage(appState, "server");
};
var isEraserActive = ({
  activeTool
}) => activeTool.type === "eraser";
var isHandToolActive = ({
  activeTool
}) => {
  return activeTool.type === "hand";
};

// errors.ts
var CanvasError = class extends Error {
  constructor(message = "Couldn't export canvas.", name = "CANVAS_ERROR") {
    super();
    this.name = name;
    this.message = message;
  }
};
var AbortError = class extends DOMException {
  constructor(message = "Request Aborted") {
    super(message, "AbortError");
  }
};
var ImageSceneDataError = class extends Error {
  constructor(message = "Image Scene Data Error", code = "IMAGE_SCENE_DATA_ERROR") {
    super(message);
    __publicField(this, "code");
    this.name = "EncodingError";
    this.code = code;
  }
};
var WorkerUrlNotDefinedError = class extends Error {
  constructor(message = "Worker URL is not defined!", code = "WORKER_URL_NOT_DEFINED") {
    super(message);
    __publicField(this, "code");
    this.name = "WorkerUrlNotDefinedError";
    this.code = code;
  }
};
var WorkerInTheMainChunkError = class extends Error {
  constructor(message = "Worker has to be in a separate chunk!", code = "WORKER_IN_THE_MAIN_CHUNK") {
    super(message);
    __publicField(this, "code");
    this.name = "WorkerInTheMainChunkError";
    this.code = code;
  }
};
var ExcalidrawError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ExcalidrawError";
  }
};

// scene/scroll.ts
var isOutsideViewPort = (appState, cords) => {
  const [x1, y1, x2, y2] = cords;
  const { x: viewportX1, y: viewportY1 } = sceneCoordsToViewportCoords(
    { sceneX: x1, sceneY: y1 },
    appState
  );
  const { x: viewportX2, y: viewportY2 } = sceneCoordsToViewportCoords(
    { sceneX: x2, sceneY: y2 },
    appState
  );
  return viewportX2 - viewportX1 > appState.width || viewportY2 - viewportY1 > appState.height;
};
var centerScrollOn = ({
  scenePoint,
  viewportDimensions,
  zoom,
  offsets
}) => {
  let scrollX = (viewportDimensions.width - (offsets?.right ?? 0)) / 2 / zoom.value - scenePoint.x;
  scrollX += (offsets?.left ?? 0) / 2 / zoom.value;
  let scrollY = (viewportDimensions.height - (offsets?.bottom ?? 0)) / 2 / zoom.value - scenePoint.y;
  scrollY += (offsets?.top ?? 0) / 2 / zoom.value;
  return {
    scrollX,
    scrollY
  };
};
var calculateScrollCenter = (elements, appState) => {
  elements = getVisibleElements(elements);
  if (!elements.length) {
    return {
      scrollX: 0,
      scrollY: 0
    };
  }
  let [x1, y1, x2, y2] = getCommonBounds(elements);
  if (isOutsideViewPort(appState, [x1, y1, x2, y2])) {
    [x1, y1, x2, y2] = getClosestElementBounds(
      elements,
      viewportCoordsToSceneCoords(
        { clientX: appState.scrollX, clientY: appState.scrollY },
        appState
      )
    );
  }
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;
  return centerScrollOn({
    scenePoint: { x: centerX, y: centerY },
    viewportDimensions: { width: appState.width, height: appState.height },
    zoom: appState.zoom
  });
};

// scene/normalize.ts
var getNormalizedZoom = (zoom) => {
  return clamp(round(zoom, 6), MIN_ZOOM, MAX_ZOOM);
};
var getNormalizedGridSize = (gridStep) => {
  return clamp(Math.round(gridStep), 1, 100);
};
var getNormalizedGridStep = (gridStep) => {
  return clamp(Math.round(gridStep), 1, 100);
};

// scene/export.ts
import rough3 from "roughjs/bin/rough";

// ../element/src/image.ts
var loadHTMLImageElement = (dataURL) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = (error) => {
      reject(error);
    };
    image.src = dataURL;
  });
};
var updateImageCache = async ({
  fileIds,
  files,
  imageCache
}) => {
  const updatedFiles = /* @__PURE__ */ new Map();
  const erroredFiles = /* @__PURE__ */ new Map();
  await Promise.all(
    fileIds.reduce((promises, fileId) => {
      const fileData = files[fileId];
      if (fileData && !updatedFiles.has(fileId)) {
        updatedFiles.set(fileId, true);
        return promises.concat(
          (async () => {
            try {
              if (fileData.mimeType === MIME_TYPES.binary) {
                throw new Error("Only images can be added to ImageCache");
              }
              const imagePromise = loadHTMLImageElement(fileData.dataURL);
              const data = {
                image: imagePromise,
                mimeType: fileData.mimeType
              };
              imageCache.set(fileId, data);
              const image = await imagePromise;
              imageCache.set(fileId, { ...data, image });
            } catch (error) {
              erroredFiles.set(fileId, true);
            }
          })()
        );
      }
      return promises;
    }, [])
  );
  return {
    imageCache,
    /** includes errored files because they cache was updated nonetheless */
    updatedFiles,
    /** files that failed when creating HTMLImageElement */
    erroredFiles
  };
};
var getInitializedImageElements = (elements) => elements.filter(
  (element) => isInitializedImageElement(element)
);
var isHTMLSVGElement = (node) => {
  return node?.nodeName.toLowerCase() === "svg";
};
var normalizeSVG = (SVGString) => {
  const doc = new DOMParser().parseFromString(SVGString, MIME_TYPES.svg);
  const svg = doc.querySelector("svg");
  const errorNode = doc.querySelector("parsererror");
  if (errorNode || !isHTMLSVGElement(svg)) {
    throw new Error("Invalid SVG");
  } else {
    if (!svg.hasAttribute("xmlns")) {
      svg.setAttribute("xmlns", SVG_NS);
    }
    let width = svg.getAttribute("width");
    let height = svg.getAttribute("height");
    if (width?.includes("%") || width === "auto") {
      width = null;
    }
    if (height?.includes("%") || height === "auto") {
      height = null;
    }
    const viewBox = svg.getAttribute("viewBox");
    if (!width || !height) {
      width = width || "50";
      height = height || "50";
      if (viewBox) {
        const match = viewBox.match(
          /\d+ +\d+ +(\d+(?:\.\d+)?) +(\d+(?:\.\d+)?)/
        );
        if (match) {
          [, width, height] = match;
        }
      }
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
    }
    if (!viewBox) {
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
    return svg.outerHTML;
  }
};

// ../element/src/newElement.ts
var _newElementBase = (type, {
  x,
  y,
  strokeColor = DEFAULT_ELEMENT_PROPS.strokeColor,
  backgroundColor = DEFAULT_ELEMENT_PROPS.backgroundColor,
  fillStyle = DEFAULT_ELEMENT_PROPS.fillStyle,
  strokeWidth = DEFAULT_ELEMENT_PROPS.strokeWidth,
  strokeStyle = DEFAULT_ELEMENT_PROPS.strokeStyle,
  roughness = DEFAULT_ELEMENT_PROPS.roughness,
  opacity = DEFAULT_ELEMENT_PROPS.opacity,
  width = 0,
  height = 0,
  angle = 0,
  groupIds = [],
  frameId = null,
  index = null,
  roundness = null,
  boundElements = null,
  link = null,
  locked = DEFAULT_ELEMENT_PROPS.locked,
  ...rest
}) => {
  if (x < -1e6 || x > 1e6 || y < -1e6 || y > 1e6 || width < -1e6 || width > 1e6 || height < -1e6 || height > 1e6) {
    console.error("New element size or position is too large", {
      x,
      y,
      width,
      height,
      // @ts-ignore
      points: rest.points
    });
  }
  const element = {
    id: rest.id || randomId(),
    type,
    x,
    y,
    width,
    height,
    angle,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    strokeStyle,
    roughness,
    opacity,
    groupIds,
    frameId,
    index,
    roundness,
    seed: rest.seed ?? randomInteger(),
    version: rest.version || 1,
    versionNonce: rest.versionNonce ?? 0,
    isDeleted: false,
    boundElements,
    updated: getUpdatedTimestamp(),
    link,
    locked,
    customData: rest.customData
  };
  return element;
};
var newElement = (opts) => _newElementBase(opts.type, opts);
var newEmbeddableElement = (opts) => {
  return _newElementBase("embeddable", opts);
};
var newIframeElement = (opts) => {
  return {
    ..._newElementBase("iframe", opts)
  };
};
var newFrameElement = (opts) => {
  const frameElement = newElementWith(
    {
      ..._newElementBase("frame", opts),
      type: "frame",
      name: opts?.name || null
    },
    {}
  );
  return frameElement;
};
var newMagicFrameElement = (opts) => {
  const frameElement = newElementWith(
    {
      ..._newElementBase("magicframe", opts),
      type: "magicframe",
      name: opts?.name || null
    },
    {}
  );
  return frameElement;
};
var getTextElementPositionOffsets = (opts, metrics) => {
  return {
    x: opts.textAlign === "center" ? metrics.width / 2 : opts.textAlign === "right" ? metrics.width : 0,
    y: opts.verticalAlign === "middle" ? metrics.height / 2 : 0
  };
};
var newTextElement = (opts) => {
  const fontFamily = opts.fontFamily || DEFAULT_FONT_FAMILY;
  const fontSize = opts.fontSize || DEFAULT_FONT_SIZE;
  const lineHeight = opts.lineHeight || getLineHeight(fontFamily);
  const text = normalizeText(opts.text);
  const metrics = measureText(
    text,
    getFontString({ fontFamily, fontSize }),
    lineHeight
  );
  const textAlign = opts.textAlign || DEFAULT_TEXT_ALIGN;
  const verticalAlign = opts.verticalAlign || DEFAULT_VERTICAL_ALIGN;
  const offsets = getTextElementPositionOffsets(
    { textAlign, verticalAlign },
    metrics
  );
  const textElementProps = {
    ..._newElementBase("text", opts),
    text,
    fontSize,
    fontFamily,
    textAlign,
    verticalAlign,
    x: opts.x - offsets.x,
    y: opts.y - offsets.y,
    width: metrics.width,
    height: metrics.height,
    containerId: opts.containerId || null,
    originalText: opts.originalText ?? text,
    autoResize: opts.autoResize ?? true,
    lineHeight
  };
  const textElement = newElementWith(
    textElementProps,
    {}
  );
  return textElement;
};
var getAdjustedDimensions = (element, elementsMap, nextText) => {
  let { width: nextWidth, height: nextHeight } = measureText(
    nextText,
    getFontString(element),
    element.lineHeight
  );
  if (!element.autoResize) {
    nextWidth = element.width;
  }
  const { textAlign, verticalAlign } = element;
  let x;
  let y;
  if (textAlign === "center" && verticalAlign === VERTICAL_ALIGN.MIDDLE && !element.containerId && element.autoResize) {
    const prevMetrics = measureText(
      element.text,
      getFontString(element),
      element.lineHeight
    );
    const offsets = getTextElementPositionOffsets(element, {
      width: nextWidth - prevMetrics.width,
      height: nextHeight - prevMetrics.height
    });
    x = element.x - offsets.x;
    y = element.y - offsets.y;
  } else {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const [nextX1, nextY1, nextX2, nextY2] = getResizedElementAbsoluteCoords(
      element,
      nextWidth,
      nextHeight,
      false
    );
    const deltaX1 = (x1 - nextX1) / 2;
    const deltaY1 = (y1 - nextY1) / 2;
    const deltaX2 = (x2 - nextX2) / 2;
    const deltaY2 = (y2 - nextY2) / 2;
    [x, y] = adjustXYWithRotation(
      {
        s: true,
        e: textAlign === "center" || textAlign === "left",
        w: textAlign === "center" || textAlign === "right"
      },
      element.x,
      element.y,
      element.angle,
      deltaX1,
      deltaY1,
      deltaX2,
      deltaY2
    );
  }
  return {
    width: nextWidth,
    height: nextHeight,
    x: Number.isFinite(x) ? x : element.x,
    y: Number.isFinite(y) ? y : element.y
  };
};
var adjustXYWithRotation = (sides, x, y, angle, deltaX1, deltaY1, deltaX2, deltaY2) => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  if (sides.e && sides.w) {
    x += deltaX1 + deltaX2;
  } else if (sides.e) {
    x += deltaX1 * (1 + cos);
    y += deltaX1 * sin;
    x += deltaX2 * (1 - cos);
    y += deltaX2 * -sin;
  } else if (sides.w) {
    x += deltaX1 * (1 - cos);
    y += deltaX1 * -sin;
    x += deltaX2 * (1 + cos);
    y += deltaX2 * sin;
  }
  if (sides.n && sides.s) {
    y += deltaY1 + deltaY2;
  } else if (sides.n) {
    x += deltaY1 * sin;
    y += deltaY1 * (1 - cos);
    x += deltaY2 * -sin;
    y += deltaY2 * (1 + cos);
  } else if (sides.s) {
    x += deltaY1 * -sin;
    y += deltaY1 * (1 + cos);
    x += deltaY2 * sin;
    y += deltaY2 * (1 - cos);
  }
  return [x, y];
};
var refreshTextDimensions = (textElement, container, elementsMap, text = textElement.text) => {
  if (textElement.isDeleted) {
    return;
  }
  if (container || !textElement.autoResize) {
    text = wrapText(
      text,
      getFontString(textElement),
      container ? getBoundTextMaxWidth(container, textElement) : textElement.width
    );
  }
  const dimensions = getAdjustedDimensions(textElement, elementsMap, text);
  return { text, ...dimensions };
};
var newFreeDrawElement = (opts) => {
  return {
    ..._newElementBase(opts.type, opts),
    points: opts.points || [],
    pressures: opts.pressures || [],
    simulatePressure: opts.simulatePressure,
    lastCommittedPoint: null
  };
};
var newLinearElement = (opts) => {
  return {
    ..._newElementBase(opts.type, opts),
    points: opts.points || [],
    lastCommittedPoint: null,
    startBinding: null,
    endBinding: null,
    startArrowhead: null,
    endArrowhead: null
  };
};
var newArrowElement = (opts) => {
  if (opts.elbowed) {
    return {
      ..._newElementBase(opts.type, opts),
      points: opts.points || [],
      lastCommittedPoint: null,
      startBinding: null,
      endBinding: null,
      startArrowhead: opts.startArrowhead || null,
      endArrowhead: opts.endArrowhead || null,
      elbowed: true,
      fixedSegments: opts.fixedSegments || [],
      startIsSpecial: false,
      endIsSpecial: false
    };
  }
  return {
    ..._newElementBase(opts.type, opts),
    points: opts.points || [],
    lastCommittedPoint: null,
    startBinding: null,
    endBinding: null,
    startArrowhead: opts.startArrowhead || null,
    endArrowhead: opts.endArrowhead || null,
    elbowed: false
  };
};
var newImageElement = (opts) => {
  return {
    ..._newElementBase("image", opts),
    // in the future we'll support changing stroke color for some SVG elements,
    // and `transparent` will likely mean "use original colors of the image"
    strokeColor: "transparent",
    status: opts.status ?? "pending",
    fileId: opts.fileId ?? null,
    scale: opts.scale ?? [1, 1],
    crop: opts.crop ?? null
  };
};

// data/encode.ts
import { deflate, inflate } from "pako";
var toByteString = (data) => {
  const bytes = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
  let bstring = "";
  for (const byte of bytes) {
    bstring += String.fromCharCode(byte);
  }
  return bstring;
};
var byteStringToArrayBuffer = (byteString) => {
  const buffer = new ArrayBuffer(byteString.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0, len = byteString.length; i < len; i++) {
    bufferView[i] = byteString.charCodeAt(i);
  }
  return buffer;
};
var byteStringToString = (byteString) => {
  return new TextDecoder("utf-8").decode(byteStringToArrayBuffer(byteString));
};
var stringToBase64 = (str, isByteString = false) => {
  return isByteString ? window.btoa(str) : window.btoa(toByteString(str));
};
var base64ToString = (base64, isByteString = false) => {
  return isByteString ? window.atob(base64) : byteStringToString(window.atob(base64));
};
var encode = ({
  text,
  compress
}) => {
  let deflated;
  if (compress !== false) {
    try {
      deflated = toByteString(deflate(text));
    } catch (error) {
      console.error("encode: cannot deflate", error);
    }
  }
  return {
    version: "1",
    encoding: "bstring",
    compressed: !!deflated,
    encoded: deflated || toByteString(text)
  };
};
var decode = (data) => {
  let decoded;
  switch (data.encoding) {
    case "bstring":
      decoded = data.compressed ? data.encoded : byteStringToString(data.encoded);
      break;
    default:
      throw new Error(`decode: unknown encoding "${data.encoding}"`);
  }
  if (data.compressed) {
    return inflate(new Uint8Array(byteStringToArrayBuffer(decoded)), {
      to: "string"
    });
  }
  return decoded;
};

// data/filesystem.ts
import {
  fileOpen as _fileOpen,
  fileSave as _fileSave,
  supported as nativeFileSystemSupported
} from "browser-fs-access";
var INPUT_CHANGE_INTERVAL_MS = 500;
var fileOpen = (opts) => {
  const mimeTypes = opts.extensions?.reduce((mimeTypes2, type) => {
    mimeTypes2.push(MIME_TYPES[type]);
    return mimeTypes2;
  }, []);
  const extensions = opts.extensions?.reduce((acc, ext) => {
    if (ext === "jpg") {
      return acc.concat(".jpg", ".jpeg");
    }
    return acc.concat(`.${ext}`);
  }, []);
  return _fileOpen({
    description: opts.description,
    extensions,
    mimeTypes,
    multiple: opts.multiple ?? false,
    legacySetup: (resolve, reject, input) => {
      const scheduleRejection = debounce(reject, INPUT_CHANGE_INTERVAL_MS);
      const focusHandler = () => {
        checkForFile();
        document.addEventListener("keyup" /* KEYUP */, scheduleRejection);
        document.addEventListener("pointerup" /* POINTER_UP */, scheduleRejection);
        scheduleRejection();
      };
      const checkForFile = () => {
        if (input.files?.length) {
          const ret = opts.multiple ? [...input.files] : input.files[0];
          resolve(ret);
        }
      };
      requestAnimationFrame(() => {
        window.addEventListener("focus" /* FOCUS */, focusHandler);
      });
      const interval = window.setInterval(() => {
        checkForFile();
      }, INPUT_CHANGE_INTERVAL_MS);
      return (rejectPromise) => {
        clearInterval(interval);
        scheduleRejection.cancel();
        window.removeEventListener("focus" /* FOCUS */, focusHandler);
        document.removeEventListener("keyup" /* KEYUP */, scheduleRejection);
        document.removeEventListener("pointerup" /* POINTER_UP */, scheduleRejection);
        if (rejectPromise) {
          console.warn("Opening the file was canceled (legacy-fs).");
          rejectPromise(new AbortError());
        }
      };
    }
  });
};
var fileSave = (blob, opts) => {
  return _fileSave(
    blob,
    {
      fileName: `${opts.name}.${opts.extension}`,
      description: opts.description,
      extensions: [`.${opts.extension}`],
      mimeTypes: opts.mimeTypes
    },
    opts.fileHandle
  );
};

// data/json.ts
var filterOutDeletedFiles = (elements, files) => {
  const nextFiles = {};
  for (const element of elements) {
    if (!element.isDeleted && "fileId" in element && element.fileId && files[element.fileId]) {
      nextFiles[element.fileId] = files[element.fileId];
    }
  }
  return nextFiles;
};
var serializeAsJSON = (elements, appState, files, type) => {
  const data = {
    type: EXPORT_DATA_TYPES.excalidraw,
    version: VERSIONS.excalidraw,
    source: EXPORT_SOURCE,
    elements: type === "local" ? clearElementsForExport(elements) : clearElementsForDatabase(elements),
    appState: type === "local" ? cleanAppStateForExport(appState) : clearAppStateForDatabase(appState),
    files: type === "local" ? filterOutDeletedFiles(elements, files) : (
      // will be stripped from JSON
      void 0
    )
  };
  return JSON.stringify(data, null, 2);
};
var saveAsJSON = async (elements, appState, files, name = appState.name || DEFAULT_FILENAME) => {
  const serialized = serializeAsJSON(elements, appState, files, "local");
  const blob = new Blob([serialized], {
    type: MIME_TYPES.excalidraw
  });
  const fileHandle = await fileSave(blob, {
    name,
    extension: "excalidraw",
    description: "Excalidraw file",
    fileHandle: isImageFileHandle(appState.fileHandle) ? null : appState.fileHandle
  });
  return { fileHandle };
};
var loadFromJSON = async (localAppState, localElements) => {
  const file = await fileOpen({
    description: "Excalidraw files"
    // ToDo: Be over-permissive until https://bugs.webkit.org/show_bug.cgi?id=34442
    // gets resolved. Else, iOS users cannot open `.excalidraw` files.
    // extensions: ["json", "excalidraw", "png", "svg"],
  });
  return loadFromBlob(
    await normalizeFile(file),
    localAppState,
    localElements,
    file.handle
  );
};
var isValidExcalidrawData = (data) => {
  return data?.type === EXPORT_DATA_TYPES.excalidraw && (!data.elements || Array.isArray(data.elements) && (!data.appState || typeof data.appState === "object"));
};
var isValidLibrary = (json) => {
  return typeof json === "object" && json && json.type === EXPORT_DATA_TYPES.excalidrawLibrary && (json.version === 1 || json.version === 2);
};
var serializeLibraryAsJSON = (libraryItems) => {
  const data = {
    type: EXPORT_DATA_TYPES.excalidrawLibrary,
    version: VERSIONS.excalidrawLibrary,
    source: EXPORT_SOURCE,
    libraryItems
  };
  return JSON.stringify(data, null, 2);
};
var saveLibraryAsJSON = async (libraryItems) => {
  const serialized = serializeLibraryAsJSON(libraryItems);
  await fileSave(
    new Blob([serialized], {
      type: MIME_TYPES.excalidrawlib
    }),
    {
      name: "library",
      extension: "excalidrawlib",
      description: "Excalidraw library file"
    }
  );
};

// fonts/Cascadia/CascadiaCode-Regular.woff2
var CascadiaCode_Regular_default = "./fonts/Cascadia/CascadiaCode-Regular.woff2";

// fonts/Cascadia/index.ts
var CascadiaFontFaces = [
  {
    uri: CascadiaCode_Regular_default
  }
];

// fonts/ComicShanns/ComicShanns-Regular-279a7b317d12eb88de06167bd672b4b4.woff2
var ComicShanns_Regular_279a7b317d12eb88de06167bd672b4b4_default = "./fonts/ComicShanns/ComicShanns-Regular-279a7b317d12eb88de06167bd672b4b4.woff2";

// fonts/ComicShanns/ComicShanns-Regular-6e066e8de2ac57ea9283adb9c24d7f0c.woff2
var ComicShanns_Regular_6e066e8de2ac57ea9283adb9c24d7f0c_default = "./fonts/ComicShanns/ComicShanns-Regular-6e066e8de2ac57ea9283adb9c24d7f0c.woff2";

// fonts/ComicShanns/ComicShanns-Regular-dc6a8806fa96795d7b3be5026f989a17.woff2
var ComicShanns_Regular_dc6a8806fa96795d7b3be5026f989a17_default = "./fonts/ComicShanns/ComicShanns-Regular-dc6a8806fa96795d7b3be5026f989a17.woff2";

// fonts/ComicShanns/ComicShanns-Regular-fcb0fc02dcbee4c9846b3e2508668039.woff2
var ComicShanns_Regular_fcb0fc02dcbee4c9846b3e2508668039_default = "./fonts/ComicShanns/ComicShanns-Regular-fcb0fc02dcbee4c9846b3e2508668039.woff2";

// fonts/ComicShanns/index.ts
var ComicShannsFontFaces = [
  {
    uri: ComicShanns_Regular_279a7b317d12eb88de06167bd672b4b4_default,
    descriptors: {
      unicodeRange: "U+20-7e,U+a1-a6,U+a8,U+ab-ac,U+af-b1,U+b4,U+b8,U+bb-bc,U+bf-cf,U+d1-d7,U+d9-de,U+e0-ef,U+f1-f7,U+f9-ff,U+131,U+152-153,U+2c6,U+2da,U+2dc,U+2013-2014,U+2018-201a,U+201c-201d,U+2020-2022,U+2026,U+2039-203a,U+2044,U+20ac,U+2191,U+2193,U+2212"
    }
  },
  {
    uri: ComicShanns_Regular_fcb0fc02dcbee4c9846b3e2508668039_default,
    descriptors: {
      unicodeRange: "U+100-10f,U+112-125,U+128-130,U+134-137,U+139-13c,U+141-148,U+14c-151,U+154-161,U+164-165,U+168-17f,U+1bf,U+1f7,U+218-21b,U+237,U+1e80-1e85,U+1ef2-1ef3,U+a75b"
    }
  },
  {
    uri: ComicShanns_Regular_dc6a8806fa96795d7b3be5026f989a17_default,
    descriptors: {
      unicodeRange: "U+2c7,U+2d8-2d9,U+2db,U+2dd,U+315,U+2190,U+2192,U+2200,U+2203-2204,U+2264-2265,U+f6c3"
    }
  },
  {
    uri: ComicShanns_Regular_6e066e8de2ac57ea9283adb9c24d7f0c_default,
    descriptors: { unicodeRange: "U+3bb" }
  }
];

// fonts/Emoji/index.ts
var EmojiFontFaces = [
  {
    uri: LOCAL_FONT_PROTOCOL
  }
];

// workers.ts
var IdleWorker = class {
  constructor(workerUrl) {
    __publicField(this, "instance");
    /**
     * Use to prolong the worker's life by `workerTTL` or terminate it with a flush immediately.
     */
    __publicField(this, "debounceTerminate");
    this.instance = new Worker(workerUrl, { type: "module" });
  }
};
var WorkerPool = class _WorkerPool {
  constructor(workerUrl, options) {
    __publicField(this, "idleWorkers", /* @__PURE__ */ new Set());
    __publicField(this, "workerUrl");
    __publicField(this, "workerTTL");
    this.workerUrl = workerUrl;
    this.workerTTL = options.ttl || 1e3;
  }
  /**
   * Create a new worker pool.
   *
   * @param workerUrl - The URL of the worker file.
   * @param options - The options for the worker pool.
   * @throws If the worker is bundled into the main chunk.
   * @returns A new worker pool instance.
   */
  static create(workerUrl, options = {}) {
    if (!workerUrl) {
      throw new WorkerUrlNotDefinedError();
    }
    if (!import.meta.url || workerUrl.toString() === import.meta.url) {
      throw new WorkerInTheMainChunkError();
    }
    return new _WorkerPool(workerUrl, options);
  }
  /**
   * Take idle worker from the pool or create a new one and post a message to it.
   */
  async postMessage(data, options) {
    let worker;
    const idleWorker = Array.from(this.idleWorkers).shift();
    if (idleWorker) {
      this.idleWorkers.delete(idleWorker);
      worker = idleWorker;
    } else {
      worker = await this.createWorker();
    }
    return new Promise((resolve, reject) => {
      worker.instance.onmessage = this.onMessageHandler(worker, resolve);
      worker.instance.onerror = this.onErrorHandler(worker, reject);
      worker.instance.postMessage(data, options);
      worker.debounceTerminate(
        () => reject(
          new Error(`Active worker did not respond for ${this.workerTTL}ms!`)
        )
      );
    });
  }
  /**
   * Terminate the idle workers in the pool.
   */
  async clear() {
    for (const worker of this.idleWorkers) {
      worker.debounceTerminate.cancel();
      worker.instance.terminate();
    }
    this.idleWorkers.clear();
  }
  /**
   * Used to get a worker from the pool or create a new one if there is no idle available.
   */
  async createWorker() {
    const worker = new IdleWorker(this.workerUrl);
    worker.debounceTerminate = debounce((reject) => {
      worker.instance.terminate();
      if (this.idleWorkers.has(worker)) {
        this.idleWorkers.delete(worker);
        console.debug(
          "Job finished! Idle worker has been released from the pool."
        );
      } else if (reject) {
        reject();
      } else {
        console.error("Worker has been terminated!");
      }
    }, this.workerTTL);
    return worker;
  }
  onMessageHandler(worker, resolve) {
    return (e) => {
      worker.debounceTerminate();
      this.idleWorkers.add(worker);
      resolve(e.data);
    };
  }
  onErrorHandler(worker, reject) {
    return (e) => {
      worker.debounceTerminate(() => reject(e));
      worker.debounceTerminate.flush();
      this.clear();
    };
  }
};

// subset/subset-main.ts
var shouldUseWorkers = typeof Worker !== "undefined";
var subsetWoff2GlyphsByCodepoints = async (arrayBuffer, codePoints) => {
  const { Commands, subsetToBase64, toBase64 } = await lazyLoadSharedSubsetChunk();
  if (!shouldUseWorkers) {
    return subsetToBase64(arrayBuffer, codePoints);
  }
  return promiseTry(async () => {
    try {
      const workerPool2 = await getOrCreateWorkerPool();
      const arrayBufferCopy = arrayBuffer.slice(0);
      const result = await workerPool2.postMessage(
        {
          command: Commands.Subset,
          arrayBuffer: arrayBufferCopy,
          codePoints
        },
        { transfer: [arrayBufferCopy] }
      );
      return toBase64(result);
    } catch (e) {
      shouldUseWorkers = false;
      if (
        // don't log the expected errors server-side
        !(isServerEnv() && (e instanceof WorkerUrlNotDefinedError || e instanceof WorkerInTheMainChunkError))
      ) {
        console.error(
          "Failed to use workers for subsetting, falling back to the main thread.",
          e
        );
      }
      return subsetToBase64(arrayBuffer, codePoints);
    }
  });
};
var subsetWorker = null;
var subsetShared = null;
var lazyLoadWorkerSubsetChunk = async () => {
  if (!subsetWorker) {
    subsetWorker = import("./subset-worker.chunk.js");
  }
  return subsetWorker;
};
var lazyLoadSharedSubsetChunk = async () => {
  if (!subsetShared) {
    subsetShared = import("./subset-shared.chunk.js");
  }
  return subsetShared;
};
var workerPool = null;
var getOrCreateWorkerPool = () => {
  if (!workerPool) {
    workerPool = promiseTry(async () => {
      const { WorkerUrl } = await lazyLoadWorkerSubsetChunk();
      const pool = WorkerPool.create(WorkerUrl);
      return pool;
    });
  }
  return workerPool;
};

// fonts/ExcalidrawFontFace.ts
var _ExcalidrawFontFace = class _ExcalidrawFontFace {
  constructor(family, uri, descriptors) {
    __publicField(this, "urls");
    __publicField(this, "fontFace");
    this.urls = _ExcalidrawFontFace.createUrls(uri);
    const sources = this.urls.map((url) => `url(${url}) ${_ExcalidrawFontFace.getFormat(url)}`).join(", ");
    this.fontFace = new FontFace(family, sources, {
      display: "swap",
      style: "normal",
      weight: "400",
      ...descriptors
    });
  }
  /**
   * Generates CSS `@font-face` definition with the (subsetted) font source as a data url for the characters within the unicode range.
   *
   * Retrieves `undefined` otherwise.
   */
  toCSS(characters) {
    if (!this.getUnicodeRangeRegex().test(characters)) {
      return;
    }
    const codepoints = Array.from(characters).map(
      (char) => char.codePointAt(0)
    );
    return this.getContent(codepoints).then(
      (content) => `@font-face { font-family: ${this.fontFace.family}; src: url(${content}); }`
    );
  }
  /**
   * Tries to fetch woff2 content, based on the registered urls (from first to last, treated as fallbacks).
   *
   * @returns base64 with subsetted glyphs based on the passed codepoint, last defined url otherwise
   */
  async getContent(codePoints) {
    let i = 0;
    const errorMessages = [];
    while (i < this.urls.length) {
      const url = this.urls[i];
      try {
        const arrayBuffer = await this.fetchFont(url);
        const base64 = await subsetWoff2GlyphsByCodepoints(
          arrayBuffer,
          codePoints
        );
        return base64;
      } catch (e) {
        errorMessages.push(`"${url.toString()}" returned error "${e}"`);
      }
      i++;
    }
    console.error(
      `Failed to fetch font family "${this.fontFace.family}"`,
      JSON.stringify(errorMessages, void 0, 2)
    );
    return this.urls.length ? this.urls[this.urls.length - 1].toString() : "";
  }
  fetchFont(url) {
    return promiseTry(async () => {
      const response = await fetch(url, {
        // always prefer cache (even stale), otherwise it always triggers an unnecessary validation request
        // which we don't need as we are controlling freshness of the fonts with the stable hash suffix in the url
        // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
        cache: "force-cache",
        headers: {
          Accept: "font/woff2"
        }
      });
      if (!response.ok) {
        const urlString = url instanceof URL ? url.toString() : "dataurl";
        throw new Error(
          `Failed to fetch "${urlString}": ${response.statusText}`
        );
      }
      const arrayBuffer = await response.arrayBuffer();
      return arrayBuffer;
    });
  }
  getUnicodeRangeRegex() {
    const unicodeRangeRegex = this.fontFace.unicodeRange.split(/,\s*/).map((range) => {
      const [start, end] = range.replace("U+", "").split("-");
      if (end) {
        return `\\u{${start}}-\\u{${end}}`;
      }
      return `\\u{${start}}`;
    }).join("");
    return new RegExp(`[${unicodeRangeRegex}]`, "u");
  }
  static createUrls(uri) {
    if (uri.startsWith("data")) {
      return [uri];
    }
    if (uri.startsWith(LOCAL_FONT_PROTOCOL)) {
      return [];
    }
    if (uri.startsWith("http")) {
      return [new URL(uri)];
    }
    const assetUrl = uri.replace(/^\/+/, "");
    const urls = [];
    if (typeof window.EXCALIDRAW_ASSET_PATH === "string") {
      const normalizedBaseUrl = this.normalizeBaseUrl(
        window.EXCALIDRAW_ASSET_PATH
      );
      urls.push(new URL(assetUrl, normalizedBaseUrl));
    } else if (Array.isArray(window.EXCALIDRAW_ASSET_PATH)) {
      window.EXCALIDRAW_ASSET_PATH.forEach((path) => {
        const normalizedBaseUrl = this.normalizeBaseUrl(path);
        urls.push(new URL(assetUrl, normalizedBaseUrl));
      });
    }
    urls.push(new URL(assetUrl, _ExcalidrawFontFace.ASSETS_FALLBACK_URL));
    return urls;
  }
  static getFormat(url) {
    if (!(url instanceof URL)) {
      return "";
    }
    try {
      const parts = new URL(url).pathname.split(".");
      if (parts.length === 1) {
        return "";
      }
      return `format('${parts.pop()}')`;
    } catch (error) {
      return "";
    }
  }
  static normalizeBaseUrl(baseUrl) {
    let result = baseUrl;
    if (/^\.?\//.test(result)) {
      result = new URL(
        result.replace(/^\.?\/+/, ""),
        window?.location?.origin
      ).toString();
    }
    result = `${result.replace(/\/+$/, "")}/`;
    return result;
  }
};
__publicField(_ExcalidrawFontFace, "ASSETS_FALLBACK_URL", `https://esm.sh/${define_import_meta_env_default.PKG_NAME ? `${define_import_meta_env_default.PKG_NAME}@${define_import_meta_env_default.PKG_VERSION}` : "@excalidraw/excalidraw"}/dist/prod/`);
var ExcalidrawFontFace = _ExcalidrawFontFace;

// fonts/Excalifont/Excalifont-Regular-349fac6ca4700ffec595a7150a0d1e1d.woff2
var Excalifont_Regular_349fac6ca4700ffec595a7150a0d1e1d_default = "./fonts/Excalifont/Excalifont-Regular-349fac6ca4700ffec595a7150a0d1e1d.woff2";

// fonts/Excalifont/Excalifont-Regular-3f2c5db56cc93c5a6873b1361d730c16.woff2
var Excalifont_Regular_3f2c5db56cc93c5a6873b1361d730c16_default = "./fonts/Excalifont/Excalifont-Regular-3f2c5db56cc93c5a6873b1361d730c16.woff2";

// fonts/Excalifont/Excalifont-Regular-41b173a47b57366892116a575a43e2b6.woff2
var Excalifont_Regular_41b173a47b57366892116a575a43e2b6_default = "./fonts/Excalifont/Excalifont-Regular-41b173a47b57366892116a575a43e2b6.woff2";

// fonts/Excalifont/Excalifont-Regular-623ccf21b21ef6b3a0d87738f77eb071.woff2
var Excalifont_Regular_623ccf21b21ef6b3a0d87738f77eb071_default = "./fonts/Excalifont/Excalifont-Regular-623ccf21b21ef6b3a0d87738f77eb071.woff2";

// fonts/Excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2
var Excalifont_Regular_a88b72a24fb54c9f94e3b5fdaa7481c9_default = "./fonts/Excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2";

// fonts/Excalifont/Excalifont-Regular-b9dcf9d2e50a1eaf42fc664b50a3fd0d.woff2
var Excalifont_Regular_b9dcf9d2e50a1eaf42fc664b50a3fd0d_default = "./fonts/Excalifont/Excalifont-Regular-b9dcf9d2e50a1eaf42fc664b50a3fd0d.woff2";

// fonts/Excalifont/Excalifont-Regular-be310b9bcd4f1a43f571c46df7809174.woff2
var Excalifont_Regular_be310b9bcd4f1a43f571c46df7809174_default = "./fonts/Excalifont/Excalifont-Regular-be310b9bcd4f1a43f571c46df7809174.woff2";

// fonts/Excalifont/index.ts
var ExcalifontFontFaces = [
  {
    uri: Excalifont_Regular_a88b72a24fb54c9f94e3b5fdaa7481c9_default,
    descriptors: {
      unicodeRange: "U+20-7e,U+a0-a3,U+a5-a6,U+a8-ab,U+ad-b1,U+b4,U+b6-b8,U+ba-ff,U+131,U+152-153,U+2bc,U+2c6,U+2da,U+2dc,U+304,U+308,U+2013-2014,U+2018-201a,U+201c-201e,U+2020,U+2022,U+2024-2026,U+2030,U+2039-203a,U+20ac,U+2122,U+2212"
    }
  },
  {
    uri: Excalifont_Regular_be310b9bcd4f1a43f571c46df7809174_default,
    descriptors: {
      unicodeRange: "U+100-130,U+132-137,U+139-149,U+14c-151,U+154-17e,U+192,U+1fc-1ff,U+218-21b,U+237,U+1e80-1e85,U+1ef2-1ef3,U+2113"
    }
  },
  { uri: Excalifont_Regular_b9dcf9d2e50a1eaf42fc664b50a3fd0d_default, descriptors: { unicodeRange: "U+400-45f,U+490-491,U+2116" } },
  {
    uri: Excalifont_Regular_41b173a47b57366892116a575a43e2b6_default,
    descriptors: {
      unicodeRange: "U+37e,U+384-38a,U+38c,U+38e-393,U+395-3a1,U+3a3-3a8,U+3aa-3cf,U+3d7"
    }
  },
  {
    uri: Excalifont_Regular_3f2c5db56cc93c5a6873b1361d730c16_default,
    descriptors: {
      unicodeRange: "U+2c7,U+2d8-2d9,U+2db,U+2dd,U+302,U+306-307,U+30a-30c,U+326-328,U+212e,U+2211,U+fb01-fb02"
    }
  },
  {
    uri: Excalifont_Regular_349fac6ca4700ffec595a7150a0d1e1d_default,
    descriptors: {
      unicodeRange: "U+462-463,U+472-475,U+4d8-4d9,U+4e2-4e3,U+4e6-4e9,U+4ee-4ef"
    }
  },
  { uri: Excalifont_Regular_623ccf21b21ef6b3a0d87738f77eb071_default, descriptors: { unicodeRange: "U+300-301,U+303" } }
];

// fonts/Helvetica/index.ts
var HelveticaFontFaces = [
  {
    uri: LOCAL_FONT_PROTOCOL
  }
];

// fonts/Liberation/LiberationSans-Regular.woff2
var LiberationSans_Regular_default = "./fonts/Liberation/LiberationSans-Regular.woff2";

// fonts/Liberation/index.ts
var LiberationFontFaces = [
  {
    uri: LiberationSans_Regular_default
  }
];

// fonts/Lilita/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYE98RXi4EwSsbg.woff2
var Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYE98RXi4EwSsbg_default = "./fonts/Lilita/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYE98RXi4EwSsbg.woff2";

// fonts/Lilita/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYEF8RXi4EwQ.woff2
var Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYEF8RXi4EwQ_default = "./fonts/Lilita/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYEF8RXi4EwQ.woff2";

// fonts/Lilita/index.ts
var LilitaFontFaces = [
  {
    uri: Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYE98RXi4EwSsbg_default,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN_EXT }
  },
  {
    uri: Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYEF8RXi4EwQ_default,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN }
  }
];

// fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5_default = "./fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5.woff2";

// fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg_default = "./fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2";

// fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5_default = "./fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5.woff2";

// fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5_default = "./fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5.woff2";

// fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5_default = "./fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5.woff2";

// fonts/Nunito/index.ts
var NunitoFontFaces = [
  {
    uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5_default,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.CYRILIC_EXT,
      weight: "500"
    }
  },
  {
    uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5_default,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.CYRILIC, weight: "500" }
  },
  {
    uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5_default,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.VIETNAMESE,
      weight: "500"
    }
  },
  {
    uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5_default,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN_EXT, weight: "500" }
  },
  {
    uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg_default,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN, weight: "500" }
  }
];

// fonts/Virgil/Virgil-Regular.woff2
var Virgil_Regular_default = "./fonts/Virgil/Virgil-Regular.woff2";

// fonts/Virgil/index.ts
var VirgilFontFaces = [
  {
    uri: Virgil_Regular_default
  }
];

// fonts/Xiaolai/Xiaolai-Regular-019d66dcad46dc156b162d267f981c20.woff2
var Xiaolai_Regular_019d66dcad46dc156b162d267f981c20_default = "./fonts/Xiaolai/Xiaolai-Regular-019d66dcad46dc156b162d267f981c20.woff2";

// fonts/Xiaolai/Xiaolai-Regular-04b718e5623574919c8b0dea5f301444.woff2
var Xiaolai_Regular_04b718e5623574919c8b0dea5f301444_default = "./fonts/Xiaolai/Xiaolai-Regular-04b718e5623574919c8b0dea5f301444.woff2";

// fonts/Xiaolai/Xiaolai-Regular-069e77aac84590e2e991d0a0176d34f2.woff2
var Xiaolai_Regular_069e77aac84590e2e991d0a0176d34f2_default = "./fonts/Xiaolai/Xiaolai-Regular-069e77aac84590e2e991d0a0176d34f2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-06c77b8c66e51ed6c63ccb502dd8b8af.woff2
var Xiaolai_Regular_06c77b8c66e51ed6c63ccb502dd8b8af_default = "./fonts/Xiaolai/Xiaolai-Regular-06c77b8c66e51ed6c63ccb502dd8b8af.woff2";

// fonts/Xiaolai/Xiaolai-Regular-08e0dc436ad0ad61ba5558db0674d762.woff2
var Xiaolai_Regular_08e0dc436ad0ad61ba5558db0674d762_default = "./fonts/Xiaolai/Xiaolai-Regular-08e0dc436ad0ad61ba5558db0674d762.woff2";

// fonts/Xiaolai/Xiaolai-Regular-093b9ef39a46ceae95a1df18a0a3a326.woff2
var Xiaolai_Regular_093b9ef39a46ceae95a1df18a0a3a326_default = "./fonts/Xiaolai/Xiaolai-Regular-093b9ef39a46ceae95a1df18a0a3a326.woff2";

// fonts/Xiaolai/Xiaolai-Regular-095c169f3314805276f603a362766abd.woff2
var Xiaolai_Regular_095c169f3314805276f603a362766abd_default = "./fonts/Xiaolai/Xiaolai-Regular-095c169f3314805276f603a362766abd.woff2";

// fonts/Xiaolai/Xiaolai-Regular-09850c4077f3fffe707905872e0e2460.woff2
var Xiaolai_Regular_09850c4077f3fffe707905872e0e2460_default = "./fonts/Xiaolai/Xiaolai-Regular-09850c4077f3fffe707905872e0e2460.woff2";

// fonts/Xiaolai/Xiaolai-Regular-41521fade99856108931b4768b1b2648.woff2
var Xiaolai_Regular_41521fade99856108931b4768b1b2648_default = "./fonts/Xiaolai/Xiaolai-Regular-41521fade99856108931b4768b1b2648.woff2";

// fonts/Xiaolai/Xiaolai-Regular-544fc28abe2c5c30e62383fd4dac255f.woff2
var Xiaolai_Regular_544fc28abe2c5c30e62383fd4dac255f_default = "./fonts/Xiaolai/Xiaolai-Regular-544fc28abe2c5c30e62383fd4dac255f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-60a3089806700d379f11827ee9843b6b.woff2
var Xiaolai_Regular_60a3089806700d379f11827ee9843b6b_default = "./fonts/Xiaolai/Xiaolai-Regular-60a3089806700d379f11827ee9843b6b.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7eb9fffd1aa890d07d0f88cc82e6cfe4.woff2
var Xiaolai_Regular_7eb9fffd1aa890d07d0f88cc82e6cfe4_default = "./fonts/Xiaolai/Xiaolai-Regular-7eb9fffd1aa890d07d0f88cc82e6cfe4.woff2";

// fonts/Xiaolai/Xiaolai-Regular-6fe5c5973cc06f74b2387a631ea36b88.woff2
var Xiaolai_Regular_6fe5c5973cc06f74b2387a631ea36b88_default = "./fonts/Xiaolai/Xiaolai-Regular-6fe5c5973cc06f74b2387a631ea36b88.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a4c34be6d42152e64b0df90bc4607f64.woff2
var Xiaolai_Regular_a4c34be6d42152e64b0df90bc4607f64_default = "./fonts/Xiaolai/Xiaolai-Regular-a4c34be6d42152e64b0df90bc4607f64.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b96d9226ce77ec94ceca043d712182e6.woff2
var Xiaolai_Regular_b96d9226ce77ec94ceca043d712182e6_default = "./fonts/Xiaolai/Xiaolai-Regular-b96d9226ce77ec94ceca043d712182e6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-6ae5b42180ad70b971c91e7eefb8eba2.woff2
var Xiaolai_Regular_6ae5b42180ad70b971c91e7eefb8eba2_default = "./fonts/Xiaolai/Xiaolai-Regular-6ae5b42180ad70b971c91e7eefb8eba2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c69f61a4ab18d0488c8d1fc12e7028e8.woff2
var Xiaolai_Regular_c69f61a4ab18d0488c8d1fc12e7028e8_default = "./fonts/Xiaolai/Xiaolai-Regular-c69f61a4ab18d0488c8d1fc12e7028e8.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cb17fc3db95f6d139afc9d31a8e93293.woff2
var Xiaolai_Regular_cb17fc3db95f6d139afc9d31a8e93293_default = "./fonts/Xiaolai/Xiaolai-Regular-cb17fc3db95f6d139afc9d31a8e93293.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e3fcf5180fd466c8915c4e8069491054.woff2
var Xiaolai_Regular_e3fcf5180fd466c8915c4e8069491054_default = "./fonts/Xiaolai/Xiaolai-Regular-e3fcf5180fd466c8915c4e8069491054.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c1f94158256bb1f3bf665b053d895af9.woff2
var Xiaolai_Regular_c1f94158256bb1f3bf665b053d895af9_default = "./fonts/Xiaolai/Xiaolai-Regular-c1f94158256bb1f3bf665b053d895af9.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7197d6fda6cba7c3874c53d6381ca239.woff2
var Xiaolai_Regular_7197d6fda6cba7c3874c53d6381ca239_default = "./fonts/Xiaolai/Xiaolai-Regular-7197d6fda6cba7c3874c53d6381ca239.woff2";

// fonts/Xiaolai/Xiaolai-Regular-70c2eb8d64e71a42a834eb857ea9df51.woff2
var Xiaolai_Regular_70c2eb8d64e71a42a834eb857ea9df51_default = "./fonts/Xiaolai/Xiaolai-Regular-70c2eb8d64e71a42a834eb857ea9df51.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a004ddfcb26e67bd6e678c8ed19e25ce.woff2
var Xiaolai_Regular_a004ddfcb26e67bd6e678c8ed19e25ce_default = "./fonts/Xiaolai/Xiaolai-Regular-a004ddfcb26e67bd6e678c8ed19e25ce.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7e4bde7e9c7f84cd34d8a845e384c746.woff2
var Xiaolai_Regular_7e4bde7e9c7f84cd34d8a845e384c746_default = "./fonts/Xiaolai/Xiaolai-Regular-7e4bde7e9c7f84cd34d8a845e384c746.woff2";

// fonts/Xiaolai/Xiaolai-Regular-23686f7f29da6e8008c36dd3a80c83d6.woff2
var Xiaolai_Regular_23686f7f29da6e8008c36dd3a80c83d6_default = "./fonts/Xiaolai/Xiaolai-Regular-23686f7f29da6e8008c36dd3a80c83d6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-69c09cc5fa3e55c74fc4821f76909cc3.woff2
var Xiaolai_Regular_69c09cc5fa3e55c74fc4821f76909cc3_default = "./fonts/Xiaolai/Xiaolai-Regular-69c09cc5fa3e55c74fc4821f76909cc3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-25b7f38e18f035f96cb5e547bd2bd08c.woff2
var Xiaolai_Regular_25b7f38e18f035f96cb5e547bd2bd08c_default = "./fonts/Xiaolai/Xiaolai-Regular-25b7f38e18f035f96cb5e547bd2bd08c.woff2";

// fonts/Xiaolai/Xiaolai-Regular-ba3de316d63c7e339987b16f41a0b879.woff2
var Xiaolai_Regular_ba3de316d63c7e339987b16f41a0b879_default = "./fonts/Xiaolai/Xiaolai-Regular-ba3de316d63c7e339987b16f41a0b879.woff2";

// fonts/Xiaolai/Xiaolai-Regular-12b52b58eb3df36804b9a654ec9ee194.woff2
var Xiaolai_Regular_12b52b58eb3df36804b9a654ec9ee194_default = "./fonts/Xiaolai/Xiaolai-Regular-12b52b58eb3df36804b9a654ec9ee194.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b1220a3c61f85cc0408deedb4c5f57a2.woff2
var Xiaolai_Regular_b1220a3c61f85cc0408deedb4c5f57a2_default = "./fonts/Xiaolai/Xiaolai-Regular-b1220a3c61f85cc0408deedb4c5f57a2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4535823663ad81405188a528d8f2b1a2.woff2
var Xiaolai_Regular_4535823663ad81405188a528d8f2b1a2_default = "./fonts/Xiaolai/Xiaolai-Regular-4535823663ad81405188a528d8f2b1a2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3eaa538115d76932653c21d8dc28f207.woff2
var Xiaolai_Regular_3eaa538115d76932653c21d8dc28f207_default = "./fonts/Xiaolai/Xiaolai-Regular-3eaa538115d76932653c21d8dc28f207.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7e929f262f30c8ee78bf398150b1a7cd.woff2
var Xiaolai_Regular_7e929f262f30c8ee78bf398150b1a7cd_default = "./fonts/Xiaolai/Xiaolai-Regular-7e929f262f30c8ee78bf398150b1a7cd.woff2";

// fonts/Xiaolai/Xiaolai-Regular-73e309718fd16cea44b4d54a33581811.woff2
var Xiaolai_Regular_73e309718fd16cea44b4d54a33581811_default = "./fonts/Xiaolai/Xiaolai-Regular-73e309718fd16cea44b4d54a33581811.woff2";

// fonts/Xiaolai/Xiaolai-Regular-9eb5a99df4e76ac3363453ac9ca288b1.woff2
var Xiaolai_Regular_9eb5a99df4e76ac3363453ac9ca288b1_default = "./fonts/Xiaolai/Xiaolai-Regular-9eb5a99df4e76ac3363453ac9ca288b1.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3e63ed8162808a9e425ed80a8bc79114.woff2
var Xiaolai_Regular_3e63ed8162808a9e425ed80a8bc79114_default = "./fonts/Xiaolai/Xiaolai-Regular-3e63ed8162808a9e425ed80a8bc79114.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c8b71798409ccc126ee264a00aadcf21.woff2
var Xiaolai_Regular_c8b71798409ccc126ee264a00aadcf21_default = "./fonts/Xiaolai/Xiaolai-Regular-c8b71798409ccc126ee264a00aadcf21.woff2";

// fonts/Xiaolai/Xiaolai-Regular-11c345711937f0ba4b8f7b6b919c8440.woff2
var Xiaolai_Regular_11c345711937f0ba4b8f7b6b919c8440_default = "./fonts/Xiaolai/Xiaolai-Regular-11c345711937f0ba4b8f7b6b919c8440.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e480d9c614742d05f0e78f274f1e69e6.woff2
var Xiaolai_Regular_e480d9c614742d05f0e78f274f1e69e6_default = "./fonts/Xiaolai/Xiaolai-Regular-e480d9c614742d05f0e78f274f1e69e6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-95429962233afd82db1c27df1500a28c.woff2
var Xiaolai_Regular_95429962233afd82db1c27df1500a28c_default = "./fonts/Xiaolai/Xiaolai-Regular-95429962233afd82db1c27df1500a28c.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2cf96d082d35ea3d8106851223ad0d16.woff2
var Xiaolai_Regular_2cf96d082d35ea3d8106851223ad0d16_default = "./fonts/Xiaolai/Xiaolai-Regular-2cf96d082d35ea3d8106851223ad0d16.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2d43040e86ff03ba677f6f9c04cd0805.woff2
var Xiaolai_Regular_2d43040e86ff03ba677f6f9c04cd0805_default = "./fonts/Xiaolai/Xiaolai-Regular-2d43040e86ff03ba677f6f9c04cd0805.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2a26d20a23b00898ce82f09d2ee47c3f.woff2
var Xiaolai_Regular_2a26d20a23b00898ce82f09d2ee47c3f_default = "./fonts/Xiaolai/Xiaolai-Regular-2a26d20a23b00898ce82f09d2ee47c3f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a365e82ed54697a52f27adcea1315fe8.woff2
var Xiaolai_Regular_a365e82ed54697a52f27adcea1315fe8_default = "./fonts/Xiaolai/Xiaolai-Regular-a365e82ed54697a52f27adcea1315fe8.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e4bca6cfa53e499cae0a6be4894a90e9.woff2
var Xiaolai_Regular_e4bca6cfa53e499cae0a6be4894a90e9_default = "./fonts/Xiaolai/Xiaolai-Regular-e4bca6cfa53e499cae0a6be4894a90e9.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e51ef413167c6e14e0c0fdcc585f2fc9.woff2
var Xiaolai_Regular_e51ef413167c6e14e0c0fdcc585f2fc9_default = "./fonts/Xiaolai/Xiaolai-Regular-e51ef413167c6e14e0c0fdcc585f2fc9.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e5f453bb04da18eed01675eeebd88bf8.woff2
var Xiaolai_Regular_e5f453bb04da18eed01675eeebd88bf8_default = "./fonts/Xiaolai/Xiaolai-Regular-e5f453bb04da18eed01675eeebd88bf8.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e656f091b9dc4709722c9f4b84d3c797.woff2
var Xiaolai_Regular_e656f091b9dc4709722c9f4b84d3c797_default = "./fonts/Xiaolai/Xiaolai-Regular-e656f091b9dc4709722c9f4b84d3c797.woff2";

// fonts/Xiaolai/Xiaolai-Regular-f0f13b5c60e0af5553bd359f5513be1b.woff2
var Xiaolai_Regular_f0f13b5c60e0af5553bd359f5513be1b_default = "./fonts/Xiaolai/Xiaolai-Regular-f0f13b5c60e0af5553bd359f5513be1b.woff2";

// fonts/Xiaolai/Xiaolai-Regular-f5d079153c99a25b9be5b8583c4cc8a7.woff2
var Xiaolai_Regular_f5d079153c99a25b9be5b8583c4cc8a7_default = "./fonts/Xiaolai/Xiaolai-Regular-f5d079153c99a25b9be5b8583c4cc8a7.woff2";

// fonts/Xiaolai/Xiaolai-Regular-10a7ae9a371830a80c3d844acf1c02d7.woff2
var Xiaolai_Regular_10a7ae9a371830a80c3d844acf1c02d7_default = "./fonts/Xiaolai/Xiaolai-Regular-10a7ae9a371830a80c3d844acf1c02d7.woff2";

// fonts/Xiaolai/Xiaolai-Regular-60a41c7e1c68f22424e6d22df544bc82.woff2
var Xiaolai_Regular_60a41c7e1c68f22424e6d22df544bc82_default = "./fonts/Xiaolai/Xiaolai-Regular-60a41c7e1c68f22424e6d22df544bc82.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7ab2bed91166a9dca83a5ebfbe2a7f38.woff2
var Xiaolai_Regular_7ab2bed91166a9dca83a5ebfbe2a7f38_default = "./fonts/Xiaolai/Xiaolai-Regular-7ab2bed91166a9dca83a5ebfbe2a7f38.woff2";

// fonts/Xiaolai/Xiaolai-Regular-670ba603758d94268e8606f240a42e12.woff2
var Xiaolai_Regular_670ba603758d94268e8606f240a42e12_default = "./fonts/Xiaolai/Xiaolai-Regular-670ba603758d94268e8606f240a42e12.woff2";

// fonts/Xiaolai/Xiaolai-Regular-15dc6d811c9cd078f9086a740d5a1038.woff2
var Xiaolai_Regular_15dc6d811c9cd078f9086a740d5a1038_default = "./fonts/Xiaolai/Xiaolai-Regular-15dc6d811c9cd078f9086a740d5a1038.woff2";

// fonts/Xiaolai/Xiaolai-Regular-8c2f33cee3993174f7e87c28e4bf42ee.woff2
var Xiaolai_Regular_8c2f33cee3993174f7e87c28e4bf42ee_default = "./fonts/Xiaolai/Xiaolai-Regular-8c2f33cee3993174f7e87c28e4bf42ee.woff2";

// fonts/Xiaolai/Xiaolai-Regular-761d05e3cd968cf574166867998ef06a.woff2
var Xiaolai_Regular_761d05e3cd968cf574166867998ef06a_default = "./fonts/Xiaolai/Xiaolai-Regular-761d05e3cd968cf574166867998ef06a.woff2";

// fonts/Xiaolai/Xiaolai-Regular-642b26e2e5f5fb780b51b593dbc8c851.woff2
var Xiaolai_Regular_642b26e2e5f5fb780b51b593dbc8c851_default = "./fonts/Xiaolai/Xiaolai-Regular-642b26e2e5f5fb780b51b593dbc8c851.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5572b3513ba8df57a3d5d7303ee6b11b.woff2
var Xiaolai_Regular_5572b3513ba8df57a3d5d7303ee6b11b_default = "./fonts/Xiaolai/Xiaolai-Regular-5572b3513ba8df57a3d5d7303ee6b11b.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3c9de2ae0ea4bc91a510942dfa4be8d2.woff2
var Xiaolai_Regular_3c9de2ae0ea4bc91a510942dfa4be8d2_default = "./fonts/Xiaolai/Xiaolai-Regular-3c9de2ae0ea4bc91a510942dfa4be8d2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-671a2c20b1eb9e4ef8a192833940e319.woff2
var Xiaolai_Regular_671a2c20b1eb9e4ef8a192833940e319_default = "./fonts/Xiaolai/Xiaolai-Regular-671a2c20b1eb9e4ef8a192833940e319.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4dc6d5f188d5c96d44815cd1e81aa885.woff2
var Xiaolai_Regular_4dc6d5f188d5c96d44815cd1e81aa885_default = "./fonts/Xiaolai/Xiaolai-Regular-4dc6d5f188d5c96d44815cd1e81aa885.woff2";

// fonts/Xiaolai/Xiaolai-Regular-ce4884f96f11589608b76b726a755803.woff2
var Xiaolai_Regular_ce4884f96f11589608b76b726a755803_default = "./fonts/Xiaolai/Xiaolai-Regular-ce4884f96f11589608b76b726a755803.woff2";

// fonts/Xiaolai/Xiaolai-Regular-8f476c4c99813d57cbe6eca4727388ad.woff2
var Xiaolai_Regular_8f476c4c99813d57cbe6eca4727388ad_default = "./fonts/Xiaolai/Xiaolai-Regular-8f476c4c99813d57cbe6eca4727388ad.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5935a5775af3d5c6307ac667bd9ae74e.woff2
var Xiaolai_Regular_5935a5775af3d5c6307ac667bd9ae74e_default = "./fonts/Xiaolai/Xiaolai-Regular-5935a5775af3d5c6307ac667bd9ae74e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-79f007c1c6d07557120982951ea67998.woff2
var Xiaolai_Regular_79f007c1c6d07557120982951ea67998_default = "./fonts/Xiaolai/Xiaolai-Regular-79f007c1c6d07557120982951ea67998.woff2";

// fonts/Xiaolai/Xiaolai-Regular-bafff7a14c27403dcc6cf1432e8ea836.woff2
var Xiaolai_Regular_bafff7a14c27403dcc6cf1432e8ea836_default = "./fonts/Xiaolai/Xiaolai-Regular-bafff7a14c27403dcc6cf1432e8ea836.woff2";

// fonts/Xiaolai/Xiaolai-Regular-543fa46ace099a7099dad69123399400.woff2
var Xiaolai_Regular_543fa46ace099a7099dad69123399400_default = "./fonts/Xiaolai/Xiaolai-Regular-543fa46ace099a7099dad69123399400.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4ddc14ed3eb0c3e46364317dfc0144a3.woff2
var Xiaolai_Regular_4ddc14ed3eb0c3e46364317dfc0144a3_default = "./fonts/Xiaolai/Xiaolai-Regular-4ddc14ed3eb0c3e46364317dfc0144a3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-0fa55a080fcd0f9dc2e0b0058b793df8.woff2
var Xiaolai_Regular_0fa55a080fcd0f9dc2e0b0058b793df8_default = "./fonts/Xiaolai/Xiaolai-Regular-0fa55a080fcd0f9dc2e0b0058b793df8.woff2";

// fonts/Xiaolai/Xiaolai-Regular-66493ba5a8367f2928812f446f47b56a.woff2
var Xiaolai_Regular_66493ba5a8367f2928812f446f47b56a_default = "./fonts/Xiaolai/Xiaolai-Regular-66493ba5a8367f2928812f446f47b56a.woff2";

// fonts/Xiaolai/Xiaolai-Regular-57862b464a55b18c7bf234ce22907d73.woff2
var Xiaolai_Regular_57862b464a55b18c7bf234ce22907d73_default = "./fonts/Xiaolai/Xiaolai-Regular-57862b464a55b18c7bf234ce22907d73.woff2";

// fonts/Xiaolai/Xiaolai-Regular-8d3bcabb847b56243b16afe62adaaf21.woff2
var Xiaolai_Regular_8d3bcabb847b56243b16afe62adaaf21_default = "./fonts/Xiaolai/Xiaolai-Regular-8d3bcabb847b56243b16afe62adaaf21.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2b77e8ebfb2367ab2662396a60e7d320.woff2
var Xiaolai_Regular_2b77e8ebfb2367ab2662396a60e7d320_default = "./fonts/Xiaolai/Xiaolai-Regular-2b77e8ebfb2367ab2662396a60e7d320.woff2";

// fonts/Xiaolai/Xiaolai-Regular-0b5d723fdc4e249c140f0909e87d03b4.woff2
var Xiaolai_Regular_0b5d723fdc4e249c140f0909e87d03b4_default = "./fonts/Xiaolai/Xiaolai-Regular-0b5d723fdc4e249c140f0909e87d03b4.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cdbce89e82cc1ab53a2decbf5819278f.woff2
var Xiaolai_Regular_cdbce89e82cc1ab53a2decbf5819278f_default = "./fonts/Xiaolai/Xiaolai-Regular-cdbce89e82cc1ab53a2decbf5819278f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-739bc1a567439c7cffcd1614644593d2.woff2
var Xiaolai_Regular_739bc1a567439c7cffcd1614644593d2_default = "./fonts/Xiaolai/Xiaolai-Regular-739bc1a567439c7cffcd1614644593d2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-72252d73220fa3cd856677888cee1635.woff2
var Xiaolai_Regular_72252d73220fa3cd856677888cee1635_default = "./fonts/Xiaolai/Xiaolai-Regular-72252d73220fa3cd856677888cee1635.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cf6ff4e0f491ca0cf3038187a997b9b4.woff2
var Xiaolai_Regular_cf6ff4e0f491ca0cf3038187a997b9b4_default = "./fonts/Xiaolai/Xiaolai-Regular-cf6ff4e0f491ca0cf3038187a997b9b4.woff2";

// fonts/Xiaolai/Xiaolai-Regular-9cfb2a77a4e45025105ad29a1748b90d.woff2
var Xiaolai_Regular_9cfb2a77a4e45025105ad29a1748b90d_default = "./fonts/Xiaolai/Xiaolai-Regular-9cfb2a77a4e45025105ad29a1748b90d.woff2";

// fonts/Xiaolai/Xiaolai-Regular-450da755d5bcb70906e1295e559b9602.woff2
var Xiaolai_Regular_450da755d5bcb70906e1295e559b9602_default = "./fonts/Xiaolai/Xiaolai-Regular-450da755d5bcb70906e1295e559b9602.woff2";

// fonts/Xiaolai/Xiaolai-Regular-0986d134c05864f5025962eef9f994a0.woff2
var Xiaolai_Regular_0986d134c05864f5025962eef9f994a0_default = "./fonts/Xiaolai/Xiaolai-Regular-0986d134c05864f5025962eef9f994a0.woff2";

// fonts/Xiaolai/Xiaolai-Regular-1ee544f0f1dac422545c505baa788992.woff2
var Xiaolai_Regular_1ee544f0f1dac422545c505baa788992_default = "./fonts/Xiaolai/Xiaolai-Regular-1ee544f0f1dac422545c505baa788992.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4806e761d750087c2d734fc64596eaff.woff2
var Xiaolai_Regular_4806e761d750087c2d734fc64596eaff_default = "./fonts/Xiaolai/Xiaolai-Regular-4806e761d750087c2d734fc64596eaff.woff2";

// fonts/Xiaolai/Xiaolai-Regular-33432927cd87d40cfe393c7482bf221f.woff2
var Xiaolai_Regular_33432927cd87d40cfe393c7482bf221f_default = "./fonts/Xiaolai/Xiaolai-Regular-33432927cd87d40cfe393c7482bf221f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-be549ab72f0719d606a5c01e2c0219b6.woff2
var Xiaolai_Regular_be549ab72f0719d606a5c01e2c0219b6_default = "./fonts/Xiaolai/Xiaolai-Regular-be549ab72f0719d606a5c01e2c0219b6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b5c1596551c256e0e9cf02028595b092.woff2
var Xiaolai_Regular_b5c1596551c256e0e9cf02028595b092_default = "./fonts/Xiaolai/Xiaolai-Regular-b5c1596551c256e0e9cf02028595b092.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cf2cc71752631e579e35b0e423bf2638.woff2
var Xiaolai_Regular_cf2cc71752631e579e35b0e423bf2638_default = "./fonts/Xiaolai/Xiaolai-Regular-cf2cc71752631e579e35b0e423bf2638.woff2";

// fonts/Xiaolai/Xiaolai-Regular-6f3256af8454371776bc46670d33cc65.woff2
var Xiaolai_Regular_6f3256af8454371776bc46670d33cc65_default = "./fonts/Xiaolai/Xiaolai-Regular-6f3256af8454371776bc46670d33cc65.woff2";

// fonts/Xiaolai/Xiaolai-Regular-23f228f3999c01983860012330e4be08.woff2
var Xiaolai_Regular_23f228f3999c01983860012330e4be08_default = "./fonts/Xiaolai/Xiaolai-Regular-23f228f3999c01983860012330e4be08.woff2";

// fonts/Xiaolai/Xiaolai-Regular-21430ee05a1248901da8d0de08744d47.woff2
var Xiaolai_Regular_21430ee05a1248901da8d0de08744d47_default = "./fonts/Xiaolai/Xiaolai-Regular-21430ee05a1248901da8d0de08744d47.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5330a2119a716e4e7224ed108b085dac.woff2
var Xiaolai_Regular_5330a2119a716e4e7224ed108b085dac_default = "./fonts/Xiaolai/Xiaolai-Regular-5330a2119a716e4e7224ed108b085dac.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cd145ce4a0ea18469358df53c207bc1b.woff2
var Xiaolai_Regular_cd145ce4a0ea18469358df53c207bc1b_default = "./fonts/Xiaolai/Xiaolai-Regular-cd145ce4a0ea18469358df53c207bc1b.woff2";

// fonts/Xiaolai/Xiaolai-Regular-36925dfe329a45086cbb7fc5c20d45ac.woff2
var Xiaolai_Regular_36925dfe329a45086cbb7fc5c20d45ac_default = "./fonts/Xiaolai/Xiaolai-Regular-36925dfe329a45086cbb7fc5c20d45ac.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4bfaa8ffa64c5ee560aa2daba7c9cbd3.woff2
var Xiaolai_Regular_4bfaa8ffa64c5ee560aa2daba7c9cbd3_default = "./fonts/Xiaolai/Xiaolai-Regular-4bfaa8ffa64c5ee560aa2daba7c9cbd3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-112c051027b2d766c19a519f6ee1f4f7.woff2
var Xiaolai_Regular_112c051027b2d766c19a519f6ee1f4f7_default = "./fonts/Xiaolai/Xiaolai-Regular-112c051027b2d766c19a519f6ee1f4f7.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5b0ed6971aaab9c8ad563230bd5471a7.woff2
var Xiaolai_Regular_5b0ed6971aaab9c8ad563230bd5471a7_default = "./fonts/Xiaolai/Xiaolai-Regular-5b0ed6971aaab9c8ad563230bd5471a7.woff2";

// fonts/Xiaolai/Xiaolai-Regular-98f2ad84457de7f3740d9920b8fa8667.woff2
var Xiaolai_Regular_98f2ad84457de7f3740d9920b8fa8667_default = "./fonts/Xiaolai/Xiaolai-Regular-98f2ad84457de7f3740d9920b8fa8667.woff2";

// fonts/Xiaolai/Xiaolai-Regular-733171b4ffcd17ea1fe1c0ba627173bf.woff2
var Xiaolai_Regular_733171b4ffcd17ea1fe1c0ba627173bf_default = "./fonts/Xiaolai/Xiaolai-Regular-733171b4ffcd17ea1fe1c0ba627173bf.woff2";

// fonts/Xiaolai/Xiaolai-Regular-684d65f1793cac449dde5d59cb3c47fb.woff2
var Xiaolai_Regular_684d65f1793cac449dde5d59cb3c47fb_default = "./fonts/Xiaolai/Xiaolai-Regular-684d65f1793cac449dde5d59cb3c47fb.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cbaaefaaf326668277aa24dfa93c4d28.woff2
var Xiaolai_Regular_cbaaefaaf326668277aa24dfa93c4d28_default = "./fonts/Xiaolai/Xiaolai-Regular-cbaaefaaf326668277aa24dfa93c4d28.woff2";

// fonts/Xiaolai/Xiaolai-Regular-58fd02350d0bc52cf1ca3bb32ce9766e.woff2
var Xiaolai_Regular_58fd02350d0bc52cf1ca3bb32ce9766e_default = "./fonts/Xiaolai/Xiaolai-Regular-58fd02350d0bc52cf1ca3bb32ce9766e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7ccce86603f80a099ddb0cb21d4ae3e3.woff2
var Xiaolai_Regular_7ccce86603f80a099ddb0cb21d4ae3e3_default = "./fonts/Xiaolai/Xiaolai-Regular-7ccce86603f80a099ddb0cb21d4ae3e3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3717077e38f98d89eae729b6c14e56dc.woff2
var Xiaolai_Regular_3717077e38f98d89eae729b6c14e56dc_default = "./fonts/Xiaolai/Xiaolai-Regular-3717077e38f98d89eae729b6c14e56dc.woff2";

// fonts/Xiaolai/Xiaolai-Regular-dbea1af6dcd9860be40c3d18254338f5.woff2
var Xiaolai_Regular_dbea1af6dcd9860be40c3d18254338f5_default = "./fonts/Xiaolai/Xiaolai-Regular-dbea1af6dcd9860be40c3d18254338f5.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4a0fdb40036e87b40aa08dd30584cb85.woff2
var Xiaolai_Regular_4a0fdb40036e87b40aa08dd30584cb85_default = "./fonts/Xiaolai/Xiaolai-Regular-4a0fdb40036e87b40aa08dd30584cb85.woff2";

// fonts/Xiaolai/Xiaolai-Regular-0f626226ba1272e832aea87bafd9720e.woff2
var Xiaolai_Regular_0f626226ba1272e832aea87bafd9720e_default = "./fonts/Xiaolai/Xiaolai-Regular-0f626226ba1272e832aea87bafd9720e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-938d90c10ff8c20386af7f242c05d6b0.woff2
var Xiaolai_Regular_938d90c10ff8c20386af7f242c05d6b0_default = "./fonts/Xiaolai/Xiaolai-Regular-938d90c10ff8c20386af7f242c05d6b0.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b6d128682ee29e471486354d486a1b90.woff2
var Xiaolai_Regular_b6d128682ee29e471486354d486a1b90_default = "./fonts/Xiaolai/Xiaolai-Regular-b6d128682ee29e471486354d486a1b90.woff2";

// fonts/Xiaolai/Xiaolai-Regular-9d81066dd2b337c938df6e90380a00dc.woff2
var Xiaolai_Regular_9d81066dd2b337c938df6e90380a00dc_default = "./fonts/Xiaolai/Xiaolai-Regular-9d81066dd2b337c938df6e90380a00dc.woff2";

// fonts/Xiaolai/Xiaolai-Regular-20e7bf72fa05de9adf7dbcc7bf51dde6.woff2
var Xiaolai_Regular_20e7bf72fa05de9adf7dbcc7bf51dde6_default = "./fonts/Xiaolai/Xiaolai-Regular-20e7bf72fa05de9adf7dbcc7bf51dde6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4095eb84ef3874e2600247bee0b04026.woff2
var Xiaolai_Regular_4095eb84ef3874e2600247bee0b04026_default = "./fonts/Xiaolai/Xiaolai-Regular-4095eb84ef3874e2600247bee0b04026.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4ee10ae43505e2e0bc62656ced49c0fa.woff2
var Xiaolai_Regular_4ee10ae43505e2e0bc62656ced49c0fa_default = "./fonts/Xiaolai/Xiaolai-Regular-4ee10ae43505e2e0bc62656ced49c0fa.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7494dc504ae00ee9cd0505f990f88c5d.woff2
var Xiaolai_Regular_7494dc504ae00ee9cd0505f990f88c5d_default = "./fonts/Xiaolai/Xiaolai-Regular-7494dc504ae00ee9cd0505f990f88c5d.woff2";

// fonts/Xiaolai/Xiaolai-Regular-8de5b863cb50dfefdd07cb11c774d579.woff2
var Xiaolai_Regular_8de5b863cb50dfefdd07cb11c774d579_default = "./fonts/Xiaolai/Xiaolai-Regular-8de5b863cb50dfefdd07cb11c774d579.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3e1f8f654357353bf0e04ba5c34b5f7f.woff2
var Xiaolai_Regular_3e1f8f654357353bf0e04ba5c34b5f7f_default = "./fonts/Xiaolai/Xiaolai-Regular-3e1f8f654357353bf0e04ba5c34b5f7f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2e33e8dc771ef5e1d9127d60a6b73679.woff2
var Xiaolai_Regular_2e33e8dc771ef5e1d9127d60a6b73679_default = "./fonts/Xiaolai/Xiaolai-Regular-2e33e8dc771ef5e1d9127d60a6b73679.woff2";

// fonts/Xiaolai/Xiaolai-Regular-173945821411c09f70c95f98d590e697.woff2
var Xiaolai_Regular_173945821411c09f70c95f98d590e697_default = "./fonts/Xiaolai/Xiaolai-Regular-173945821411c09f70c95f98d590e697.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b358f7a51ece39a3247942b1feabdb29.woff2
var Xiaolai_Regular_b358f7a51ece39a3247942b1feabdb29_default = "./fonts/Xiaolai/Xiaolai-Regular-b358f7a51ece39a3247942b1feabdb29.woff2";

// fonts/Xiaolai/Xiaolai-Regular-23ad2d71b280f00b1363b95b7bea94eb.woff2
var Xiaolai_Regular_23ad2d71b280f00b1363b95b7bea94eb_default = "./fonts/Xiaolai/Xiaolai-Regular-23ad2d71b280f00b1363b95b7bea94eb.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5882ffa04f32584d26109137e2da4352.woff2
var Xiaolai_Regular_5882ffa04f32584d26109137e2da4352_default = "./fonts/Xiaolai/Xiaolai-Regular-5882ffa04f32584d26109137e2da4352.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a203b91dad570bf05a58c3c3ddb529bf.woff2
var Xiaolai_Regular_a203b91dad570bf05a58c3c3ddb529bf_default = "./fonts/Xiaolai/Xiaolai-Regular-a203b91dad570bf05a58c3c3ddb529bf.woff2";

// fonts/Xiaolai/Xiaolai-Regular-bd77e3c7f9e0b072d96af37f73d1aa32.woff2
var Xiaolai_Regular_bd77e3c7f9e0b072d96af37f73d1aa32_default = "./fonts/Xiaolai/Xiaolai-Regular-bd77e3c7f9e0b072d96af37f73d1aa32.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5a45d991244d4c7140217e1e5f5ca4f4.woff2
var Xiaolai_Regular_5a45d991244d4c7140217e1e5f5ca4f4_default = "./fonts/Xiaolai/Xiaolai-Regular-5a45d991244d4c7140217e1e5f5ca4f4.woff2";

// fonts/Xiaolai/Xiaolai-Regular-f56414bf9bced67990def8660e306759.woff2
var Xiaolai_Regular_f56414bf9bced67990def8660e306759_default = "./fonts/Xiaolai/Xiaolai-Regular-f56414bf9bced67990def8660e306759.woff2";

// fonts/Xiaolai/Xiaolai-Regular-583d166e56ba0de4b77eabb47ef67839.woff2
var Xiaolai_Regular_583d166e56ba0de4b77eabb47ef67839_default = "./fonts/Xiaolai/Xiaolai-Regular-583d166e56ba0de4b77eabb47ef67839.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7f855356ab893b0d2b9c1c83b8116f0e.woff2
var Xiaolai_Regular_7f855356ab893b0d2b9c1c83b8116f0e_default = "./fonts/Xiaolai/Xiaolai-Regular-7f855356ab893b0d2b9c1c83b8116f0e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b57aaedfd8ebdf3931f25119dc6a5eb2.woff2
var Xiaolai_Regular_b57aaedfd8ebdf3931f25119dc6a5eb2_default = "./fonts/Xiaolai/Xiaolai-Regular-b57aaedfd8ebdf3931f25119dc6a5eb2.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b6fd38ca30869792244804b04bc058da.woff2
var Xiaolai_Regular_b6fd38ca30869792244804b04bc058da_default = "./fonts/Xiaolai/Xiaolai-Regular-b6fd38ca30869792244804b04bc058da.woff2";

// fonts/Xiaolai/Xiaolai-Regular-452225341522a7942f0f6aab1a5c91a3.woff2
var Xiaolai_Regular_452225341522a7942f0f6aab1a5c91a3_default = "./fonts/Xiaolai/Xiaolai-Regular-452225341522a7942f0f6aab1a5c91a3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-866fa7613df6b3fd272bcfd4530c0bb9.woff2
var Xiaolai_Regular_866fa7613df6b3fd272bcfd4530c0bb9_default = "./fonts/Xiaolai/Xiaolai-Regular-866fa7613df6b3fd272bcfd4530c0bb9.woff2";

// fonts/Xiaolai/Xiaolai-Regular-52a84a22fd1369bffeaf21da2d6158dc.woff2
var Xiaolai_Regular_52a84a22fd1369bffeaf21da2d6158dc_default = "./fonts/Xiaolai/Xiaolai-Regular-52a84a22fd1369bffeaf21da2d6158dc.woff2";

// fonts/Xiaolai/Xiaolai-Regular-829615148e6357d826b9242eb7fbbd1e.woff2
var Xiaolai_Regular_829615148e6357d826b9242eb7fbbd1e_default = "./fonts/Xiaolai/Xiaolai-Regular-829615148e6357d826b9242eb7fbbd1e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c99eda15fc26a2941579560f76c3a5cf.woff2
var Xiaolai_Regular_c99eda15fc26a2941579560f76c3a5cf_default = "./fonts/Xiaolai/Xiaolai-Regular-c99eda15fc26a2941579560f76c3a5cf.woff2";

// fonts/Xiaolai/Xiaolai-Regular-395c35dd584b56b0789f58a0559beaf1.woff2
var Xiaolai_Regular_395c35dd584b56b0789f58a0559beaf1_default = "./fonts/Xiaolai/Xiaolai-Regular-395c35dd584b56b0789f58a0559beaf1.woff2";

// fonts/Xiaolai/Xiaolai-Regular-203b0e569e3b14aac86a003dc3fa523e.woff2
var Xiaolai_Regular_203b0e569e3b14aac86a003dc3fa523e_default = "./fonts/Xiaolai/Xiaolai-Regular-203b0e569e3b14aac86a003dc3fa523e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-51a0e808bbc8361236ac521a119758a3.woff2
var Xiaolai_Regular_51a0e808bbc8361236ac521a119758a3_default = "./fonts/Xiaolai/Xiaolai-Regular-51a0e808bbc8361236ac521a119758a3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-6e092f71c1e634059ada0e52abadce67.woff2
var Xiaolai_Regular_6e092f71c1e634059ada0e52abadce67_default = "./fonts/Xiaolai/Xiaolai-Regular-6e092f71c1e634059ada0e52abadce67.woff2";

// fonts/Xiaolai/Xiaolai-Regular-0f7fb1e0d5015bb1371343153ecf7ce3.woff2
var Xiaolai_Regular_0f7fb1e0d5015bb1371343153ecf7ce3_default = "./fonts/Xiaolai/Xiaolai-Regular-0f7fb1e0d5015bb1371343153ecf7ce3.woff2";

// fonts/Xiaolai/Xiaolai-Regular-d0cf73942fea1c74edbdf0b3011f4656.woff2
var Xiaolai_Regular_d0cf73942fea1c74edbdf0b3011f4656_default = "./fonts/Xiaolai/Xiaolai-Regular-d0cf73942fea1c74edbdf0b3011f4656.woff2";

// fonts/Xiaolai/Xiaolai-Regular-968cffdc8ee679da094e77ebf50f58ef.woff2
var Xiaolai_Regular_968cffdc8ee679da094e77ebf50f58ef_default = "./fonts/Xiaolai/Xiaolai-Regular-968cffdc8ee679da094e77ebf50f58ef.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7a07ddc0f0c0f5f4a9bad6ee3dda66b5.woff2
var Xiaolai_Regular_7a07ddc0f0c0f5f4a9bad6ee3dda66b5_default = "./fonts/Xiaolai/Xiaolai-Regular-7a07ddc0f0c0f5f4a9bad6ee3dda66b5.woff2";

// fonts/Xiaolai/Xiaolai-Regular-ec181b795ac1fb5a50d700b6e996d745.woff2
var Xiaolai_Regular_ec181b795ac1fb5a50d700b6e996d745_default = "./fonts/Xiaolai/Xiaolai-Regular-ec181b795ac1fb5a50d700b6e996d745.woff2";

// fonts/Xiaolai/Xiaolai-Regular-cfb211578629b7e8153b37240de6a9d5.woff2
var Xiaolai_Regular_cfb211578629b7e8153b37240de6a9d5_default = "./fonts/Xiaolai/Xiaolai-Regular-cfb211578629b7e8153b37240de6a9d5.woff2";

// fonts/Xiaolai/Xiaolai-Regular-59e9ff77b0efaf684bc09274fb6908c9.woff2
var Xiaolai_Regular_59e9ff77b0efaf684bc09274fb6908c9_default = "./fonts/Xiaolai/Xiaolai-Regular-59e9ff77b0efaf684bc09274fb6908c9.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2adbc89c11e65905393d3dfc468b9d5b.woff2
var Xiaolai_Regular_2adbc89c11e65905393d3dfc468b9d5b_default = "./fonts/Xiaolai/Xiaolai-Regular-2adbc89c11e65905393d3dfc468b9d5b.woff2";

// fonts/Xiaolai/Xiaolai-Regular-70e811fd7994e61f408c923de6ddd078.woff2
var Xiaolai_Regular_70e811fd7994e61f408c923de6ddd078_default = "./fonts/Xiaolai/Xiaolai-Regular-70e811fd7994e61f408c923de6ddd078.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c4a687ac4f0c2766eefc9f77ed99cddf.woff2
var Xiaolai_Regular_c4a687ac4f0c2766eefc9f77ed99cddf_default = "./fonts/Xiaolai/Xiaolai-Regular-c4a687ac4f0c2766eefc9f77ed99cddf.woff2";

// fonts/Xiaolai/Xiaolai-Regular-51502f1206be09c565f1547c406e9558.woff2
var Xiaolai_Regular_51502f1206be09c565f1547c406e9558_default = "./fonts/Xiaolai/Xiaolai-Regular-51502f1206be09c565f1547c406e9558.woff2";

// fonts/Xiaolai/Xiaolai-Regular-1fdc0c67ed57263a80fd108c1f6ccf24.woff2
var Xiaolai_Regular_1fdc0c67ed57263a80fd108c1f6ccf24_default = "./fonts/Xiaolai/Xiaolai-Regular-1fdc0c67ed57263a80fd108c1f6ccf24.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e11567fd2accf9957cd0d3c2be937d87.woff2
var Xiaolai_Regular_e11567fd2accf9957cd0d3c2be937d87_default = "./fonts/Xiaolai/Xiaolai-Regular-e11567fd2accf9957cd0d3c2be937d87.woff2";

// fonts/Xiaolai/Xiaolai-Regular-20cc1bbf50e7efb442756cb605672c1f.woff2
var Xiaolai_Regular_20cc1bbf50e7efb442756cb605672c1f_default = "./fonts/Xiaolai/Xiaolai-Regular-20cc1bbf50e7efb442756cb605672c1f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5d2898fbc097a7e24c6f38d80587621e.woff2
var Xiaolai_Regular_5d2898fbc097a7e24c6f38d80587621e_default = "./fonts/Xiaolai/Xiaolai-Regular-5d2898fbc097a7e24c6f38d80587621e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-ac9ceb44437becc3e9c4dbfebab7fc2d.woff2
var Xiaolai_Regular_ac9ceb44437becc3e9c4dbfebab7fc2d_default = "./fonts/Xiaolai/Xiaolai-Regular-ac9ceb44437becc3e9c4dbfebab7fc2d.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c16ed9740b85badf16e86ea782a3062f.woff2
var Xiaolai_Regular_c16ed9740b85badf16e86ea782a3062f_default = "./fonts/Xiaolai/Xiaolai-Regular-c16ed9740b85badf16e86ea782a3062f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-aa0d470430e6391eca720c7cfa44446f.woff2
var Xiaolai_Regular_aa0d470430e6391eca720c7cfa44446f_default = "./fonts/Xiaolai/Xiaolai-Regular-aa0d470430e6391eca720c7cfa44446f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-f2b54d4e7be0eaefe1c2c56836fa5368.woff2
var Xiaolai_Regular_f2b54d4e7be0eaefe1c2c56836fa5368_default = "./fonts/Xiaolai/Xiaolai-Regular-f2b54d4e7be0eaefe1c2c56836fa5368.woff2";

// fonts/Xiaolai/Xiaolai-Regular-99a16ef6a64934d5781933dbd9c46b2e.woff2
var Xiaolai_Regular_99a16ef6a64934d5781933dbd9c46b2e_default = "./fonts/Xiaolai/Xiaolai-Regular-99a16ef6a64934d5781933dbd9c46b2e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-c40533fdf4cc57177b12803598af7e59.woff2
var Xiaolai_Regular_c40533fdf4cc57177b12803598af7e59_default = "./fonts/Xiaolai/Xiaolai-Regular-c40533fdf4cc57177b12803598af7e59.woff2";

// fonts/Xiaolai/Xiaolai-Regular-91ddb2969bf2d31ba02ad82998d1314c.woff2
var Xiaolai_Regular_91ddb2969bf2d31ba02ad82998d1314c_default = "./fonts/Xiaolai/Xiaolai-Regular-91ddb2969bf2d31ba02ad82998d1314c.woff2";

// fonts/Xiaolai/Xiaolai-Regular-774d4f764a1299da5d28ec2f2ffe0d69.woff2
var Xiaolai_Regular_774d4f764a1299da5d28ec2f2ffe0d69_default = "./fonts/Xiaolai/Xiaolai-Regular-774d4f764a1299da5d28ec2f2ffe0d69.woff2";

// fonts/Xiaolai/Xiaolai-Regular-7718fe60986d8b42b1be9c5ace5ccf25.woff2
var Xiaolai_Regular_7718fe60986d8b42b1be9c5ace5ccf25_default = "./fonts/Xiaolai/Xiaolai-Regular-7718fe60986d8b42b1be9c5ace5ccf25.woff2";

// fonts/Xiaolai/Xiaolai-Regular-aa5c9ca6cf4fba00433b7aa3fa10671a.woff2
var Xiaolai_Regular_aa5c9ca6cf4fba00433b7aa3fa10671a_default = "./fonts/Xiaolai/Xiaolai-Regular-aa5c9ca6cf4fba00433b7aa3fa10671a.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4f50e5136e136527280bc902c5817561.woff2
var Xiaolai_Regular_4f50e5136e136527280bc902c5817561_default = "./fonts/Xiaolai/Xiaolai-Regular-4f50e5136e136527280bc902c5817561.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a0ca5df4258213d7fc9fce80f65ce760.woff2
var Xiaolai_Regular_a0ca5df4258213d7fc9fce80f65ce760_default = "./fonts/Xiaolai/Xiaolai-Regular-a0ca5df4258213d7fc9fce80f65ce760.woff2";

// fonts/Xiaolai/Xiaolai-Regular-d2666cbed13462c5dc36fa2f15c202ca.woff2
var Xiaolai_Regular_d2666cbed13462c5dc36fa2f15c202ca_default = "./fonts/Xiaolai/Xiaolai-Regular-d2666cbed13462c5dc36fa2f15c202ca.woff2";

// fonts/Xiaolai/Xiaolai-Regular-1e6fd68f1f3902ce48ce8c69df385622.woff2
var Xiaolai_Regular_1e6fd68f1f3902ce48ce8c69df385622_default = "./fonts/Xiaolai/Xiaolai-Regular-1e6fd68f1f3902ce48ce8c69df385622.woff2";

// fonts/Xiaolai/Xiaolai-Regular-87599f94b6cc129d505b375798d0d751.woff2
var Xiaolai_Regular_87599f94b6cc129d505b375798d0d751_default = "./fonts/Xiaolai/Xiaolai-Regular-87599f94b6cc129d505b375798d0d751.woff2";

// fonts/Xiaolai/Xiaolai-Regular-13ae07ed2e272d26d59bc0691cd7117a.woff2
var Xiaolai_Regular_13ae07ed2e272d26d59bc0691cd7117a_default = "./fonts/Xiaolai/Xiaolai-Regular-13ae07ed2e272d26d59bc0691cd7117a.woff2";

// fonts/Xiaolai/Xiaolai-Regular-353f33792a8f60dc69323ddf635a269e.woff2
var Xiaolai_Regular_353f33792a8f60dc69323ddf635a269e_default = "./fonts/Xiaolai/Xiaolai-Regular-353f33792a8f60dc69323ddf635a269e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-0facdf1ea213ba40261022f5d5ed4493.woff2
var Xiaolai_Regular_0facdf1ea213ba40261022f5d5ed4493_default = "./fonts/Xiaolai/Xiaolai-Regular-0facdf1ea213ba40261022f5d5ed4493.woff2";

// fonts/Xiaolai/Xiaolai-Regular-f6032fc06eb20480f096199713f70885.woff2
var Xiaolai_Regular_f6032fc06eb20480f096199713f70885_default = "./fonts/Xiaolai/Xiaolai-Regular-f6032fc06eb20480f096199713f70885.woff2";

// fonts/Xiaolai/Xiaolai-Regular-f8ee5d36068a42b51d0e4a1116cfcec1.woff2
var Xiaolai_Regular_f8ee5d36068a42b51d0e4a1116cfcec1_default = "./fonts/Xiaolai/Xiaolai-Regular-f8ee5d36068a42b51d0e4a1116cfcec1.woff2";

// fonts/Xiaolai/Xiaolai-Regular-79d494361ae093b69e74ee9dbe65bfd4.woff2
var Xiaolai_Regular_79d494361ae093b69e74ee9dbe65bfd4_default = "./fonts/Xiaolai/Xiaolai-Regular-79d494361ae093b69e74ee9dbe65bfd4.woff2";

// fonts/Xiaolai/Xiaolai-Regular-74e2263a91439c25b91d5132ce9f4d62.woff2
var Xiaolai_Regular_74e2263a91439c25b91d5132ce9f4d62_default = "./fonts/Xiaolai/Xiaolai-Regular-74e2263a91439c25b91d5132ce9f4d62.woff2";

// fonts/Xiaolai/Xiaolai-Regular-ee8bae97908d5147b423f77ad0d3c1bb.woff2
var Xiaolai_Regular_ee8bae97908d5147b423f77ad0d3c1bb_default = "./fonts/Xiaolai/Xiaolai-Regular-ee8bae97908d5147b423f77ad0d3c1bb.woff2";

// fonts/Xiaolai/Xiaolai-Regular-56467a5c8840c4d23a60b2f935114848.woff2
var Xiaolai_Regular_56467a5c8840c4d23a60b2f935114848_default = "./fonts/Xiaolai/Xiaolai-Regular-56467a5c8840c4d23a60b2f935114848.woff2";

// fonts/Xiaolai/Xiaolai-Regular-145aa02cdd91946e67dc934e1acffe75.woff2
var Xiaolai_Regular_145aa02cdd91946e67dc934e1acffe75_default = "./fonts/Xiaolai/Xiaolai-Regular-145aa02cdd91946e67dc934e1acffe75.woff2";

// fonts/Xiaolai/Xiaolai-Regular-54acdfc2166ad7fcbd074f75fd4a56ba.woff2
var Xiaolai_Regular_54acdfc2166ad7fcbd074f75fd4a56ba_default = "./fonts/Xiaolai/Xiaolai-Regular-54acdfc2166ad7fcbd074f75fd4a56ba.woff2";

// fonts/Xiaolai/Xiaolai-Regular-29cec36cd205b211da97acabaa62f055.woff2
var Xiaolai_Regular_29cec36cd205b211da97acabaa62f055_default = "./fonts/Xiaolai/Xiaolai-Regular-29cec36cd205b211da97acabaa62f055.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3756e81d3e149cf6099163ee79944fec.woff2
var Xiaolai_Regular_3756e81d3e149cf6099163ee79944fec_default = "./fonts/Xiaolai/Xiaolai-Regular-3756e81d3e149cf6099163ee79944fec.woff2";

// fonts/Xiaolai/Xiaolai-Regular-8e9f97f01034820170065b2921b4fb5e.woff2
var Xiaolai_Regular_8e9f97f01034820170065b2921b4fb5e_default = "./fonts/Xiaolai/Xiaolai-Regular-8e9f97f01034820170065b2921b4fb5e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-13d2887ec8ee73c43acdabc52a05af7b.woff2
var Xiaolai_Regular_13d2887ec8ee73c43acdabc52a05af7b_default = "./fonts/Xiaolai/Xiaolai-Regular-13d2887ec8ee73c43acdabc52a05af7b.woff2";

// fonts/Xiaolai/Xiaolai-Regular-72536a3d71b694a0d53dd90ddceae41e.woff2
var Xiaolai_Regular_72536a3d71b694a0d53dd90ddceae41e_default = "./fonts/Xiaolai/Xiaolai-Regular-72536a3d71b694a0d53dd90ddceae41e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-603aefd23e350ba7eb124273e3c9bcf1.woff2
var Xiaolai_Regular_603aefd23e350ba7eb124273e3c9bcf1_default = "./fonts/Xiaolai/Xiaolai-Regular-603aefd23e350ba7eb124273e3c9bcf1.woff2";

// fonts/Xiaolai/Xiaolai-Regular-9544732d2e62d1a429674f8ee41b5d3a.woff2
var Xiaolai_Regular_9544732d2e62d1a429674f8ee41b5d3a_default = "./fonts/Xiaolai/Xiaolai-Regular-9544732d2e62d1a429674f8ee41b5d3a.woff2";

// fonts/Xiaolai/Xiaolai-Regular-d3716376641d615e2995605b29bca7b6.woff2
var Xiaolai_Regular_d3716376641d615e2995605b29bca7b6_default = "./fonts/Xiaolai/Xiaolai-Regular-d3716376641d615e2995605b29bca7b6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5a1ce3117cfe90c48e8fb4a9a00f694d.woff2
var Xiaolai_Regular_5a1ce3117cfe90c48e8fb4a9a00f694d_default = "./fonts/Xiaolai/Xiaolai-Regular-5a1ce3117cfe90c48e8fb4a9a00f694d.woff2";

// fonts/Xiaolai/Xiaolai-Regular-b7d203b051eff504ff59ddca7576b6a9.woff2
var Xiaolai_Regular_b7d203b051eff504ff59ddca7576b6a9_default = "./fonts/Xiaolai/Xiaolai-Regular-b7d203b051eff504ff59ddca7576b6a9.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4a38cc3e9cf104e69ba246d37f8cf135.woff2
var Xiaolai_Regular_4a38cc3e9cf104e69ba246d37f8cf135_default = "./fonts/Xiaolai/Xiaolai-Regular-4a38cc3e9cf104e69ba246d37f8cf135.woff2";

// fonts/Xiaolai/Xiaolai-Regular-982b630266d87db93d2539affb1275c6.woff2
var Xiaolai_Regular_982b630266d87db93d2539affb1275c6_default = "./fonts/Xiaolai/Xiaolai-Regular-982b630266d87db93d2539affb1275c6.woff2";

// fonts/Xiaolai/Xiaolai-Regular-9592bfc861f07bcb8d75c196b370e548.woff2
var Xiaolai_Regular_9592bfc861f07bcb8d75c196b370e548_default = "./fonts/Xiaolai/Xiaolai-Regular-9592bfc861f07bcb8d75c196b370e548.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a7accba310e821da5505f71c03b76bdb.woff2
var Xiaolai_Regular_a7accba310e821da5505f71c03b76bdb_default = "./fonts/Xiaolai/Xiaolai-Regular-a7accba310e821da5505f71c03b76bdb.woff2";

// fonts/Xiaolai/Xiaolai-Regular-dac48066b5883d8b4551fc584f0c2a3e.woff2
var Xiaolai_Regular_dac48066b5883d8b4551fc584f0c2a3e_default = "./fonts/Xiaolai/Xiaolai-Regular-dac48066b5883d8b4551fc584f0c2a3e.woff2";

// fonts/Xiaolai/Xiaolai-Regular-a1f916d6039285c4ffb900cd654e418f.woff2
var Xiaolai_Regular_a1f916d6039285c4ffb900cd654e418f_default = "./fonts/Xiaolai/Xiaolai-Regular-a1f916d6039285c4ffb900cd654e418f.woff2";

// fonts/Xiaolai/Xiaolai-Regular-95bfd249da4902577b4b7d76ebdd0b44.woff2
var Xiaolai_Regular_95bfd249da4902577b4b7d76ebdd0b44_default = "./fonts/Xiaolai/Xiaolai-Regular-95bfd249da4902577b4b7d76ebdd0b44.woff2";

// fonts/Xiaolai/Xiaolai-Regular-93fc8f28a33234bcadf1527cafabd502.woff2
var Xiaolai_Regular_93fc8f28a33234bcadf1527cafabd502_default = "./fonts/Xiaolai/Xiaolai-Regular-93fc8f28a33234bcadf1527cafabd502.woff2";

// fonts/Xiaolai/Xiaolai-Regular-903bb6865f3452e2fda42e3a25547bc5.woff2
var Xiaolai_Regular_903bb6865f3452e2fda42e3a25547bc5_default = "./fonts/Xiaolai/Xiaolai-Regular-903bb6865f3452e2fda42e3a25547bc5.woff2";

// fonts/Xiaolai/Xiaolai-Regular-4aca6a43e59aceee2166b0c7e4e85ef1.woff2
var Xiaolai_Regular_4aca6a43e59aceee2166b0c7e4e85ef1_default = "./fonts/Xiaolai/Xiaolai-Regular-4aca6a43e59aceee2166b0c7e4e85ef1.woff2";

// fonts/Xiaolai/Xiaolai-Regular-24476a126f129212beb33f66853ea151.woff2
var Xiaolai_Regular_24476a126f129212beb33f66853ea151_default = "./fonts/Xiaolai/Xiaolai-Regular-24476a126f129212beb33f66853ea151.woff2";

// fonts/Xiaolai/Xiaolai-Regular-1b611157cd46bb184d4fa4dae2d6a2b8.woff2
var Xiaolai_Regular_1b611157cd46bb184d4fa4dae2d6a2b8_default = "./fonts/Xiaolai/Xiaolai-Regular-1b611157cd46bb184d4fa4dae2d6a2b8.woff2";

// fonts/Xiaolai/Xiaolai-Regular-56a32a7689abd0326e57c10c6c069bb4.woff2
var Xiaolai_Regular_56a32a7689abd0326e57c10c6c069bb4_default = "./fonts/Xiaolai/Xiaolai-Regular-56a32a7689abd0326e57c10c6c069bb4.woff2";

// fonts/Xiaolai/Xiaolai-Regular-3cc70dbb64df5b21f1326cc24dee2195.woff2
var Xiaolai_Regular_3cc70dbb64df5b21f1326cc24dee2195_default = "./fonts/Xiaolai/Xiaolai-Regular-3cc70dbb64df5b21f1326cc24dee2195.woff2";

// fonts/Xiaolai/Xiaolai-Regular-e2ead7ea7da0437f085f42ffc05f8d13.woff2
var Xiaolai_Regular_e2ead7ea7da0437f085f42ffc05f8d13_default = "./fonts/Xiaolai/Xiaolai-Regular-e2ead7ea7da0437f085f42ffc05f8d13.woff2";

// fonts/Xiaolai/Xiaolai-Regular-97f7f48ce90c9429bf32ae51469db74d.woff2
var Xiaolai_Regular_97f7f48ce90c9429bf32ae51469db74d_default = "./fonts/Xiaolai/Xiaolai-Regular-97f7f48ce90c9429bf32ae51469db74d.woff2";

// fonts/Xiaolai/Xiaolai-Regular-24a21c1e4449222e8d1898d69ff3a404.woff2
var Xiaolai_Regular_24a21c1e4449222e8d1898d69ff3a404_default = "./fonts/Xiaolai/Xiaolai-Regular-24a21c1e4449222e8d1898d69ff3a404.woff2";

// fonts/Xiaolai/Xiaolai-Regular-726303e0774b4e678bff8c2deb6ca603.woff2
var Xiaolai_Regular_726303e0774b4e678bff8c2deb6ca603_default = "./fonts/Xiaolai/Xiaolai-Regular-726303e0774b4e678bff8c2deb6ca603.woff2";

// fonts/Xiaolai/Xiaolai-Regular-5a7fac4b8b23a6e4e5ba0c9bf1756c91.woff2
var Xiaolai_Regular_5a7fac4b8b23a6e4e5ba0c9bf1756c91_default = "./fonts/Xiaolai/Xiaolai-Regular-5a7fac4b8b23a6e4e5ba0c9bf1756c91.woff2";

// fonts/Xiaolai/Xiaolai-Regular-2b7441d46298788ac94e610ffcc709b6.woff2
var Xiaolai_Regular_2b7441d46298788ac94e610ffcc709b6_default = "./fonts/Xiaolai/Xiaolai-Regular-2b7441d46298788ac94e610ffcc709b6.woff2";

// fonts/Xiaolai/index.ts
var XiaolaiFontFaces = [
  {
    uri: Xiaolai_Regular_09850c4077f3fffe707905872e0e2460_default,
    descriptors: {
      unicodeRange: "U+f9b8-fa6d,U+fe32,U+fe45-fe4f,U+ff02-ff0b,U+ff0d-ff1e,U+ff20-ff2a"
    }
  },
  {
    uri: Xiaolai_Regular_7eb9fffd1aa890d07d0f88cc82e6cfe4_default,
    descriptors: {
      unicodeRange: "U+20dd-20de,U+25ef,U+ff2b-ffbe,U+ffc2-ffc7,U+ffca-ffcf,U+ffd2-ffd7,U+ffda-ffdc,U+ffe0-ffe6,U+ffe8-ffee"
    }
  },
  { uri: Xiaolai_Regular_60a3089806700d379f11827ee9843b6b_default, descriptors: { unicodeRange: "U+d7eb-d7fb,U+f900-f9b7" } },
  {
    uri: Xiaolai_Regular_6fe5c5973cc06f74b2387a631ea36b88_default,
    descriptors: { unicodeRange: "U+d6f2-d7a3,U+d7b0-d7c6,U+d7cb-d7ea" }
  },
  { uri: Xiaolai_Regular_b96d9226ce77ec94ceca043d712182e6_default, descriptors: { unicodeRange: "U+d609-d6f1" } },
  { uri: Xiaolai_Regular_6ae5b42180ad70b971c91e7eefb8eba2_default, descriptors: { unicodeRange: "U+d520-d608" } },
  { uri: Xiaolai_Regular_a4c34be6d42152e64b0df90bc4607f64_default, descriptors: { unicodeRange: "U+d437-d51f" } },
  { uri: Xiaolai_Regular_c69f61a4ab18d0488c8d1fc12e7028e8_default, descriptors: { unicodeRange: "U+d34e-d436" } },
  { uri: Xiaolai_Regular_e3fcf5180fd466c8915c4e8069491054_default, descriptors: { unicodeRange: "U+d265-d34d" } },
  { uri: Xiaolai_Regular_c1f94158256bb1f3bf665b053d895af9_default, descriptors: { unicodeRange: "U+d17c-d264" } },
  { uri: Xiaolai_Regular_544fc28abe2c5c30e62383fd4dac255f_default, descriptors: { unicodeRange: "U+d093-d17b" } },
  { uri: Xiaolai_Regular_7197d6fda6cba7c3874c53d6381ca239_default, descriptors: { unicodeRange: "U+cfaa-d092" } },
  { uri: Xiaolai_Regular_70c2eb8d64e71a42a834eb857ea9df51_default, descriptors: { unicodeRange: "U+cec1-cfa9" } },
  { uri: Xiaolai_Regular_069e77aac84590e2e991d0a0176d34f2_default, descriptors: { unicodeRange: "U+cdd8-cec0" } },
  { uri: Xiaolai_Regular_41521fade99856108931b4768b1b2648_default, descriptors: { unicodeRange: "U+ccf1-cdd7" } },
  { uri: Xiaolai_Regular_a004ddfcb26e67bd6e678c8ed19e25ce_default, descriptors: { unicodeRange: "U+cc08-ccf0" } },
  { uri: Xiaolai_Regular_04b718e5623574919c8b0dea5f301444_default, descriptors: { unicodeRange: "U+cb43-cc07" } },
  { uri: Xiaolai_Regular_7e4bde7e9c7f84cd34d8a845e384c746_default, descriptors: { unicodeRange: "U+ca83-cb42" } },
  { uri: Xiaolai_Regular_23686f7f29da6e8008c36dd3a80c83d6_default, descriptors: { unicodeRange: "U+c9a1-ca82" } },
  { uri: Xiaolai_Regular_69c09cc5fa3e55c74fc4821f76909cc3_default, descriptors: { unicodeRange: "U+c8b8-c9a0" } },
  { uri: Xiaolai_Regular_25b7f38e18f035f96cb5e547bd2bd08c_default, descriptors: { unicodeRange: "U+c7cf-c8b7" } },
  { uri: Xiaolai_Regular_ba3de316d63c7e339987b16f41a0b879_default, descriptors: { unicodeRange: "U+c6e6-c7ce" } },
  { uri: Xiaolai_Regular_12b52b58eb3df36804b9a654ec9ee194_default, descriptors: { unicodeRange: "U+c5fd-c6e5" } },
  { uri: Xiaolai_Regular_b1220a3c61f85cc0408deedb4c5f57a2_default, descriptors: { unicodeRange: "U+c514-c5fc" } },
  { uri: Xiaolai_Regular_4535823663ad81405188a528d8f2b1a2_default, descriptors: { unicodeRange: "U+c42b-c513" } },
  { uri: Xiaolai_Regular_3eaa538115d76932653c21d8dc28f207_default, descriptors: { unicodeRange: "U+c341-c34e,U+c350-c42a" } },
  { uri: Xiaolai_Regular_7e929f262f30c8ee78bf398150b1a7cd_default, descriptors: { unicodeRange: "U+c258-c340" } },
  { uri: Xiaolai_Regular_73e309718fd16cea44b4d54a33581811_default, descriptors: { unicodeRange: "U+c16f-c257" } },
  { uri: Xiaolai_Regular_9eb5a99df4e76ac3363453ac9ca288b1_default, descriptors: { unicodeRange: "U+c086-c16e" } },
  { uri: Xiaolai_Regular_3e63ed8162808a9e425ed80a8bc79114_default, descriptors: { unicodeRange: "U+bf9d-c085" } },
  { uri: Xiaolai_Regular_cb17fc3db95f6d139afc9d31a8e93293_default, descriptors: { unicodeRange: "U+beb4-bf9c" } },
  { uri: Xiaolai_Regular_c8b71798409ccc126ee264a00aadcf21_default, descriptors: { unicodeRange: "U+bdcb-beb3" } },
  { uri: Xiaolai_Regular_11c345711937f0ba4b8f7b6b919c8440_default, descriptors: { unicodeRange: "U+bce2-bdca" } },
  { uri: Xiaolai_Regular_e480d9c614742d05f0e78f274f1e69e6_default, descriptors: { unicodeRange: "U+bbf9-bce1" } },
  { uri: Xiaolai_Regular_95429962233afd82db1c27df1500a28c_default, descriptors: { unicodeRange: "U+bb10-bbf8" } },
  { uri: Xiaolai_Regular_2cf96d082d35ea3d8106851223ad0d16_default, descriptors: { unicodeRange: "U+ba27-bb0f" } },
  { uri: Xiaolai_Regular_2d43040e86ff03ba677f6f9c04cd0805_default, descriptors: { unicodeRange: "U+b93e-ba26" } },
  { uri: Xiaolai_Regular_2a26d20a23b00898ce82f09d2ee47c3f_default, descriptors: { unicodeRange: "U+b855-b93d" } },
  { uri: Xiaolai_Regular_a365e82ed54697a52f27adcea1315fe8_default, descriptors: { unicodeRange: "U+b76c-b854" } },
  { uri: Xiaolai_Regular_f5d079153c99a25b9be5b8583c4cc8a7_default, descriptors: { unicodeRange: "U+b683-b76b" } },
  { uri: Xiaolai_Regular_10a7ae9a371830a80c3d844acf1c02d7_default, descriptors: { unicodeRange: "U+b59a-b682" } },
  { uri: Xiaolai_Regular_e4bca6cfa53e499cae0a6be4894a90e9_default, descriptors: { unicodeRange: "U+b4b1-b599" } },
  { uri: Xiaolai_Regular_60a41c7e1c68f22424e6d22df544bc82_default, descriptors: { unicodeRange: "U+11fb-11ff,U+b3cd-b4b0" } },
  { uri: Xiaolai_Regular_7ab2bed91166a9dca83a5ebfbe2a7f38_default, descriptors: { unicodeRange: "U+11e6-11fa,U+b2f9-b3cc" } },
  { uri: Xiaolai_Regular_670ba603758d94268e8606f240a42e12_default, descriptors: { unicodeRange: "U+11d1-11e5,U+b225-b2f8" } },
  { uri: Xiaolai_Regular_e656f091b9dc4709722c9f4b84d3c797_default, descriptors: { unicodeRange: "U+11bc-11d0,U+b151-b224" } },
  { uri: Xiaolai_Regular_15dc6d811c9cd078f9086a740d5a1038_default, descriptors: { unicodeRange: "U+11a7-11bb,U+b07d-b150" } },
  { uri: Xiaolai_Regular_f0f13b5c60e0af5553bd359f5513be1b_default, descriptors: { unicodeRange: "U+1191-11a6,U+afaa-b07c" } },
  { uri: Xiaolai_Regular_8c2f33cee3993174f7e87c28e4bf42ee_default, descriptors: { unicodeRange: "U+117c-1190,U+aed6-afa9" } },
  { uri: Xiaolai_Regular_761d05e3cd968cf574166867998ef06a_default, descriptors: { unicodeRange: "U+1167-117b,U+ae02-aed5" } },
  {
    uri: Xiaolai_Regular_642b26e2e5f5fb780b51b593dbc8c851_default,
    descriptors: { unicodeRange: "U+1152-115e,U+1160-1166,U+ad2d-ae01" }
  },
  { uri: Xiaolai_Regular_5572b3513ba8df57a3d5d7303ee6b11b_default, descriptors: { unicodeRange: "U+113d-1151,U+ac59-ad2c" } },
  {
    uri: Xiaolai_Regular_3c9de2ae0ea4bc91a510942dfa4be8d2_default,
    descriptors: {
      unicodeRange: "U+1100-113c,U+9f95-9f98,U+9f9c-9f9e,U+9fa1-9fce,U+9fd0,U+a960-a97c,U+ac00-ac58"
    }
  },
  {
    uri: Xiaolai_Regular_671a2c20b1eb9e4ef8a192833940e319_default,
    descriptors: {
      unicodeRange: "U+9771-9772,U+9775,U+9777-977b,U+977d-9784,U+9786-978a,U+978c,U+978e-9790,U+9793,U+9795-9797,U+9799-979f,U+97a1-97a2,U+97a4-97aa,U+97ac,U+97ae,U+97b0-97b1,U+97b3,U+97b5-97e5,U+97e8,U+97ee-97f2,U+97f4,U+97f7-982d"
    }
  },
  {
    uri: Xiaolai_Regular_4dc6d5f188d5c96d44815cd1e81aa885_default,
    descriptors: {
      unicodeRange: "U+9491,U+9496,U+9498,U+94c7,U+94cf,U+94d3-94d4,U+94da,U+94e6,U+94fb,U+951c,U+9520,U+9527,U+9533,U+953d,U+9543,U+9548,U+954b,U+9555,U+955a,U+9560,U+956e,U+9574-9575,U+9577-957e,U+9580-95e7,U+95ec,U+95ff,U+9607,U+9613,U+9618,U+961b,U+961e,U+9620,U+9623-9629,U+962b-962d,U+962f-9630,U+9637-963a,U+963e,U+9641,U+9643,U+964a,U+964e-964f,U+9651-9653,U+9656-965a,U+965c-965e,U+9660,U+9663,U+9665-9666,U+966b,U+966d-9671,U+9673,U+9678-9684,U+9687,U+9689-968a,U+968c,U+968e,U+9691-9693"
    }
  },
  {
    uri: Xiaolai_Regular_ce4884f96f11589608b76b726a755803_default,
    descriptors: {
      unicodeRange: "U+923c-9273,U+9275-928d,U+928f-92ad,U+92af-92c7,U+92c9-92ee"
    }
  },
  {
    uri: Xiaolai_Regular_8f476c4c99813d57cbe6eca4727388ad_default,
    descriptors: {
      unicodeRange: "U+9159,U+915b-915c,U+915f-9160,U+9166-9168,U+916b,U+916d,U+9173,U+917a-917c,U+9180-9184,U+9186,U+9188,U+918a,U+918e-918f,U+9193-9199,U+919c-91a1,U+91a4-91a9,U+91ab-91ac,U+91b0-91b3,U+91b6-91b9,U+91bb-91c6,U+91c8,U+91cb,U+91d0,U+91d2-91db,U+91dd-923b"
    }
  },
  {
    uri: Xiaolai_Regular_5935a5775af3d5c6307ac667bd9ae74e_default,
    descriptors: {
      unicodeRange: "U+902b-902c,U+9030-9034,U+9037,U+9039-903a,U+903d,U+903f-9040,U+9043,U+9045-9046,U+9048-904c,U+904e,U+9054-9056,U+9059-905a,U+905c-9061,U+9064,U+9066-9067,U+9069-906c,U+906f-9073,U+9076-907c,U+907e,U+9081,U+9084-9087,U+9089-908a,U+908c-9090,U+9092,U+9094,U+9096,U+9098,U+909a,U+909c,U+909e-90a0,U+90a4-90a5,U+90a7-90a9,U+90ab,U+90ad,U+90b2,U+90b7,U+90bc-90bd,U+90bf-90c0,U+90c2-90c3,U+90c6,U+90c8-90c9,U+90cb-90cd,U+90d2,U+90d4-90d6,U+90d8-90da,U+90de-90e0,U+90e3-90e5,U+90e9-90ea,U+90ec,U+90ee,U+90f0-90f3,U+90f5-90f7,U+90f9-90fc,U+90ff-9101,U+9103,U+9105-9118,U+911a-911d,U+911f-9121,U+9124-912e,U+9130,U+9132-9138,U+913a-9142,U+9144-9145,U+9147-9148,U+9151,U+9153-9156,U+9158"
    }
  },
  {
    uri: Xiaolai_Regular_79f007c1c6d07557120982951ea67998_default,
    descriptors: {
      unicodeRange: "U+8f03-8f65,U+8f6a,U+8f80,U+8f8c,U+8f92,U+8f9d,U+8fa0-8fa2,U+8fa4-8fa7,U+8faa,U+8fac-8faf,U+8fb2-8fb5,U+8fb7-8fb8,U+8fba-8fbc,U+8fbf-8fc0,U+8fc3,U+8fc6,U+8fc9-8fcd,U+8fcf,U+8fd2,U+8fd6-8fd7,U+8fda,U+8fe0-8fe1,U+8fe3,U+8fe7,U+8fec,U+8fef,U+8ff1-8ff2,U+8ff4-8ff6,U+8ffa-8ffc,U+8ffe-8fff,U+9007-9008,U+900c,U+900e,U+9013,U+9015,U+9018-9019,U+901c,U+9023-9025,U+9027-902a"
    }
  },
  {
    uri: Xiaolai_Regular_bafff7a14c27403dcc6cf1432e8ea836_default,
    descriptors: {
      unicodeRange: "U+8d03-8d1c,U+8d20,U+8d51-8d52,U+8d57,U+8d5f,U+8d65,U+8d68-8d6a,U+8d6c,U+8d6e-8d6f,U+8d71-8d72,U+8d78-8d80,U+8d82-8d83,U+8d86-8d89,U+8d8c-8d90,U+8d92-8d93,U+8d95-8d9e,U+8da0-8da2,U+8da4-8db0,U+8db2,U+8db6-8db7,U+8db9,U+8dbb,U+8dbd,U+8dc0-8dc2,U+8dc5,U+8dc7-8dca,U+8dcd,U+8dd0,U+8dd2-8dd5,U+8dd8-8dd9,U+8ddc,U+8de0-8de2,U+8de5-8de7,U+8de9,U+8ded-8dee,U+8df0-8df2,U+8df4,U+8df6,U+8dfc,U+8dfe-8e04,U+8e06-8e08,U+8e0b,U+8e0d-8e0e,U+8e10-8e13,U+8e15-8e1c,U+8e20-8e21,U+8e24-8e28,U+8e2b,U+8e2d,U+8e30,U+8e32-8e34,U+8e36-8e38,U+8e3b-8e3c,U+8e3e-8e3f,U+8e43,U+8e45-8e46"
    }
  },
  {
    uri: Xiaolai_Regular_543fa46ace099a7099dad69123399400_default,
    descriptors: {
      unicodeRange: "U+8bea,U+8c09,U+8c1e,U+8c38-8c40,U+8c42-8c45,U+8c48,U+8c4a-8c4b,U+8c4d-8c54,U+8c56-8c59,U+8c5b-8c60,U+8c63-8c69,U+8c6c-8c72,U+8c74-8c77,U+8c7b-8c81,U+8c83-8c84,U+8c86-8c88,U+8c8b,U+8c8d-8c93,U+8c95-8c97,U+8c99-8d02"
    }
  },
  {
    uri: Xiaolai_Regular_4ddc14ed3eb0c3e46364317dfc0144a3_default,
    descriptors: {
      unicodeRange: "U+8a64-8a78,U+8a7a-8a88,U+8a8b-8a92,U+8a94-8b06,U+8b08-8b1b"
    }
  },
  {
    uri: Xiaolai_Regular_0fa55a080fcd0f9dc2e0b0058b793df8_default,
    descriptors: {
      unicodeRange: "U+8987-89c0,U+89c3,U+89cd,U+89d3-89d5,U+89d7-89d9,U+89db,U+89dd,U+89df-89e2,U+89e4,U+89e7-89ea,U+89ec-89ee,U+89f0-89f2,U+89f4-89ff,U+8a01-8a06,U+8a08-8a3d,U+8a3f-8a47,U+8a49-8a63"
    }
  },
  {
    uri: Xiaolai_Regular_66493ba5a8367f2928812f446f47b56a_default,
    descriptors: {
      unicodeRange: "U+87e3-87e4,U+87e6-87e9,U+87eb-87ed,U+87ef-87f8,U+87fa-87fd,U+87ff-8802,U+8804-8809,U+880b-8812,U+8814,U+8817-881a,U+881c-8820,U+8823-8831,U+8833-8838,U+883a-883b,U+883d-883f,U+8841-8843,U+8846-884b,U+884e-8853,U+8855-8856,U+8858,U+885a-8860,U+8866-8867,U+886a,U+886d,U+886f,U+8871,U+8873-8876,U+8878-887c,U+8880,U+8883,U+8886-8887,U+8889-888a,U+888c,U+888e-8891,U+8893-8895,U+8897-889b,U+889d-88a1,U+88a3,U+88a5-88aa,U+88ac,U+88ae-88b0,U+88b2-88b6,U+88b8-88bb"
    }
  },
  {
    uri: Xiaolai_Regular_57862b464a55b18c7bf234ce22907d73_default,
    descriptors: {
      unicodeRange: "U+86e7-86e8,U+86ea-86ec,U+86ef,U+86f5-86f7,U+86fa-86fd,U+86ff,U+8701,U+8704-8706,U+870b-870c,U+870e-8711,U+8714,U+8716,U+8719,U+871b,U+871d,U+871f-8720,U+8724,U+8726-8728,U+872a-872d,U+872f-8730,U+8732-8733,U+8735-8736,U+8738-873a,U+873c-873d,U+8740-8746,U+874a-874b,U+874d,U+874f-8752,U+8754-8756,U+8758,U+875a-875f,U+8761-8762,U+8766-876d,U+876f,U+8771-8773,U+8775,U+8777-877a,U+877f-8781,U+8784,U+8786-8787,U+8789-878a,U+878c,U+878e-8792,U+8794-8796,U+8798-879e,U+87a0-87a7,U+87a9-87aa,U+87ae,U+87b0-87b2,U+87b4,U+87b6-87b9,U+87bb-87bc,U+87be-87bf,U+87c1-87c5,U+87c7-87c9,U+87cc-87d0,U+87d4-87da,U+87dc-87df,U+87e1-87e2"
    }
  },
  {
    uri: Xiaolai_Regular_8d3bcabb847b56243b16afe62adaaf21_default,
    descriptors: {
      unicodeRange: "U+8604,U+8606-8610,U+8612-8615,U+8617-8626,U+8628,U+862a-8637,U+8639-863b,U+863d-864c,U+8652-8653,U+8655-8659,U+865b-865d,U+865f-8661,U+8663-866a,U+866d,U+866f-8670,U+8672-8678,U+8683-8689,U+868e-8692,U+8694,U+8696-869b,U+869e-86a2,U+86a5-86a6,U+86ab,U+86ad-86ae,U+86b2-86b3,U+86b7-86b9,U+86bb-86bf,U+86c1-86c3,U+86c5,U+86c8,U+86cc-86cd,U+86d2-86d3,U+86d5-86d7,U+86da,U+86dc-86dd,U+86e0-86e3,U+86e5-86e6"
    }
  },
  {
    uri: Xiaolai_Regular_2b77e8ebfb2367ab2662396a60e7d320_default,
    descriptors: {
      unicodeRange: "U+8456,U+8458,U+845d-8460,U+8462,U+8464-8468,U+846a,U+846e-8470,U+8472,U+8474,U+8477,U+8479,U+847b-8481,U+8483-8486,U+848a,U+848d,U+848f-8496,U+8498,U+849a-849b,U+849d-84a0,U+84a2-84ae,U+84b0-84b1,U+84b3,U+84b5-84b7,U+84bb-84bc,U+84be,U+84c0,U+84c2-84c3,U+84c5-84c8,U+84cb-84cc,U+84ce-84cf,U+84d2,U+84d4-84d5,U+84d7-84dc,U+84de,U+84e1-84e2,U+84e4,U+84e7-84eb,U+84ed-84ef,U+84f1-84fb,U+84fd-84fe,U+8500-850b,U+850d-8510,U+8512,U+8514-8516,U+8518-8519,U+851b-851e,U+8520,U+8522-852a,U+852d-8536,U+853e-8542,U+8544-8547,U+854b-854f"
    }
  },
  {
    uri: Xiaolai_Regular_0b5d723fdc4e249c140f0909e87d03b4_default,
    descriptors: {
      unicodeRange: "U+82c2-82c3,U+82c5-82c6,U+82c9,U+82d0,U+82d6,U+82d9-82da,U+82dd,U+82e2,U+82e7-82ea,U+82ec-82ee,U+82f0,U+82f2-82f3,U+82f5-82f6,U+82f8,U+82fa,U+82fc-8300,U+830a-830b,U+830d,U+8310,U+8312-8313,U+8316,U+8318-8319,U+831d-8326,U+8329-832a,U+832e,U+8330,U+8332,U+8337,U+833b,U+833d-833f,U+8341-8342,U+8344-8345,U+8348,U+834a-834e,U+8353,U+8355-8359,U+835d,U+8362,U+8370-8376,U+8379-837a,U+837e-8384,U+8387-8388,U+838a-838d,U+838f-8391,U+8394-8397,U+8399-839a,U+839d,U+839f,U+83a1-83a7,U+83ac-83af,U+83b5,U+83bb,U+83be-83bf,U+83c2-83c4,U+83c6,U+83c8-83c9,U+83cb,U+83cd-83ce,U+83d0-83d3,U+83d5,U+83d7,U+83d9-83db,U+83de,U+83e2-83e4,U+83e6-83e8,U+83eb-83ef,U+83f3-83f7,U+83fa-83fc,U+83fe-8400,U+8402,U+8405,U+8407-840a,U+8410,U+8412-8417,U+8419-841b,U+841e-8423,U+8429-8430,U+8432-8437,U+8439-843b,U+843e-8445,U+8447-8450,U+8452-8455"
    }
  },
  {
    uri: Xiaolai_Regular_cdbce89e82cc1ab53a2decbf5819278f_default,
    descriptors: {
      unicodeRange: "U+81a4-81a5,U+81a7,U+81a9,U+81ab-81b2,U+81b4-81b9,U+81bc-81bf,U+81c4-81c5,U+81c7-81c9,U+81cb,U+81cd-81e2,U+81e4-81e6,U+81e8-81e9,U+81eb,U+81ee-81f2,U+81f5-81fa,U+81fd,U+81ff,U+8203,U+8207-820b,U+820e-820f,U+8211,U+8213,U+8215-821a,U+821d,U+8220,U+8224-8227,U+8229,U+822e,U+8232,U+823a,U+823c-823d,U+823f-8243,U+8245-8246,U+8248,U+824a,U+824c-824e,U+8250-8257,U+8259,U+825b-825e,U+8260-8267,U+8269-826d,U+8271,U+8275-8278,U+827b-827c,U+8280-8281,U+8283,U+8285-8287,U+8289,U+828c,U+8290,U+8293-8296,U+829a-829b,U+829e,U+82a0,U+82a2-82a3,U+82a7,U+82b2,U+82b5-82b6,U+82ba-82bc,U+82bf-82c0"
    }
  },
  {
    uri: Xiaolai_Regular_739bc1a567439c7cffcd1614644593d2_default,
    descriptors: {
      unicodeRange: "U+8059,U+805b-8068,U+806b-8070,U+8072-807e,U+8081-8082,U+8085,U+8088,U+808a,U+808d-8092,U+8094-8095,U+8097,U+8099,U+809e,U+80a3,U+80a6-80a8,U+80ac,U+80b0,U+80b3,U+80b5-80b6,U+80b8-80b9,U+80bb,U+80c5,U+80c7-80cb,U+80cf-80d5,U+80d8,U+80df-80e0,U+80e2-80e3,U+80e6,U+80ee,U+80f5,U+80f7,U+80f9,U+80fb,U+80fe-8101,U+8103-8105,U+8107-8108,U+810b-810c,U+8115,U+8117,U+8119,U+811b-811d,U+811f-812b,U+812d-812e,U+8130,U+8133-8135,U+8137,U+8139-813d,U+813f-8145,U+8147,U+8149,U+814d-814f,U+8152,U+8156-8158,U+815b-815f,U+8161-8164,U+8166,U+8168,U+816a-816c,U+816f,U+8172-8173,U+8175-8178,U+8181,U+8183-8187,U+8189,U+818b-818e,U+8190,U+8192-8197,U+8199-819a,U+819e-81a2"
    }
  },
  {
    uri: Xiaolai_Regular_72252d73220fa3cd856677888cee1635_default,
    descriptors: {
      unicodeRange: "U+7f3c-7f41,U+7f43,U+7f46-7f4f,U+7f52-7f53,U+7f56,U+7f59,U+7f5b-7f5e,U+7f60,U+7f63-7f67,U+7f6b-7f6d,U+7f6f-7f70,U+7f73,U+7f75-7f78,U+7f7a-7f7d,U+7f7f-7f80,U+7f82-7f89,U+7f8b,U+7f8d,U+7f8f-7f93,U+7f95-7f99,U+7f9b-7f9c,U+7fa0,U+7fa2-7fa3,U+7fa5-7fa6,U+7fa8-7fae,U+7fb1,U+7fb3-7fb7,U+7fba-7fbb,U+7fbe,U+7fc0,U+7fc2-7fc4,U+7fc6-7fc9,U+7fcb,U+7fcd,U+7fcf-7fd3,U+7fd6-7fd7,U+7fd9-7fde,U+7fe2-7fe4,U+7fe7-7fe8,U+7fea-7fed,U+7fef,U+7ff2,U+7ff4-7ffa,U+7ffd-7fff,U+8002,U+8007-800a,U+800e-800f,U+8011,U+8013,U+801a-801b,U+801d-801f,U+8021,U+8023-8024,U+802b-8030,U+8032,U+8034,U+8039-803a,U+803c,U+803e,U+8040-8041,U+8044-8045,U+8047-8049,U+804e-8051,U+8053,U+8055-8057"
    }
  },
  {
    uri: Xiaolai_Regular_08e0dc436ad0ad61ba5558db0674d762_default,
    descriptors: {
      unicodeRange: "U+7cd8,U+7cda-7cdb,U+7cdd-7cde,U+7ce1-7ce7,U+7ce9-7cee,U+7cf0-7cf7,U+7cf9-7cfa,U+7cfc-7d09,U+7d0b-7d1f,U+7d21,U+7d23-7d26,U+7d28-7d2a,U+7d2c-7d2e,U+7d30-7d6d,U+7d6f-7d76,U+7d78-7d94"
    }
  },
  {
    uri: Xiaolai_Regular_cf6ff4e0f491ca0cf3038187a997b9b4_default,
    descriptors: {
      unicodeRange: "U+7afe,U+7b00-7b02,U+7b05,U+7b07,U+7b09,U+7b0c-7b0e,U+7b10,U+7b12-7b13,U+7b16-7b18,U+7b1a,U+7b1c-7b1d,U+7b1f,U+7b21-7b23,U+7b27,U+7b29,U+7b2d,U+7b2f-7b30,U+7b32,U+7b34-7b37,U+7b39,U+7b3b,U+7b3d,U+7b3f-7b44,U+7b46,U+7b48,U+7b4a,U+7b4d-7b4e,U+7b53,U+7b55,U+7b57,U+7b59,U+7b5c,U+7b5e-7b5f,U+7b61,U+7b63-7b6d,U+7b6f-7b70,U+7b73-7b74,U+7b76,U+7b78,U+7b7a,U+7b7c-7b7d,U+7b7f,U+7b81-7b84,U+7b86-7b8c,U+7b8e-7b8f,U+7b91-7b93,U+7b96,U+7b98-7b9b,U+7b9e-7ba0,U+7ba3-7ba5,U+7bae-7bb0,U+7bb2-7bb3,U+7bb5-7bb7,U+7bb9-7bc0,U+7bc2-7bc5,U+7bc8-7bcb,U+7bcd-7bd0,U+7bd2,U+7bd4-7bd8,U+7bdb-7bdc,U+7bde-7be0,U+7be2-7be4,U+7be7-7be9,U+7beb-7bed,U+7bef-7bf0,U+7bf2-7bf6,U+7bf8-7bfb,U+7bfd,U+7bff-7c06,U+7c08-7c0a,U+7c0d-7c0e,U+7c10-7c13"
    }
  },
  {
    uri: Xiaolai_Regular_9cfb2a77a4e45025105ad29a1748b90d_default,
    descriptors: {
      unicodeRange: "U+7a10-7a13,U+7a15-7a16,U+7a18-7a19,U+7a1b-7a1d,U+7a1f,U+7a21-7a22,U+7a24-7a32,U+7a34-7a36,U+7a38,U+7a3a,U+7a3e,U+7a40-7a45,U+7a47-7a50,U+7a52-7a56,U+7a58-7a6f,U+7a71-7a73,U+7a75,U+7a7b-7a7e,U+7a82,U+7a85,U+7a87,U+7a89-7a8c,U+7a8e-7a90,U+7a93-7a94,U+7a99-7a9b,U+7a9e,U+7aa1-7aa4,U+7aa7,U+7aa9-7aab,U+7aae-7ab2,U+7ab4-7abe,U+7ac0-7aca,U+7acc-7ad5,U+7ad7-7ad8,U+7ada-7add,U+7ae1-7ae2,U+7ae4,U+7ae7-7aec,U+7aee,U+7af0-7af8,U+7afb-7afc"
    }
  },
  {
    uri: Xiaolai_Regular_450da755d5bcb70906e1295e559b9602_default,
    descriptors: {
      unicodeRange: "U+790d-7912,U+7914-791d,U+791f-7923,U+7925-7933,U+7935-7939,U+793d,U+793f,U+7942-7945,U+7947,U+794a-7952,U+7954-7955,U+7958-7959,U+7961,U+7963-7964,U+7966,U+7969-796c,U+796e,U+7970-7976,U+7979,U+797b-797f,U+7982-7983,U+7986-7989,U+798b-798e,U+7990-7999,U+799b-79a6,U+79a8-79b2,U+79b4-79b8,U+79bc,U+79bf,U+79c2,U+79c4-79c5,U+79c7-79c8,U+79ca,U+79cc,U+79ce-79d0,U+79d3-79d4,U+79d6-79d7,U+79d9-79de,U+79e0-79e2,U+79e5,U+79e8,U+79ea,U+79ec,U+79ee,U+79f1-79f7,U+79f9-79fa,U+79fc,U+79fe-79ff,U+7a01,U+7a04-7a05,U+7a07-7a0a,U+7a0c,U+7a0f"
    }
  },
  {
    uri: Xiaolai_Regular_0986d134c05864f5025962eef9f994a0_default,
    descriptors: {
      unicodeRange: "U+77d8-77da,U+77dd-77e1,U+77e4,U+77e6,U+77e8,U+77ea,U+77ef-77f2,U+77f4-77f5,U+77f7,U+77f9-77fc,U+7803-7808,U+780a-780b,U+780e-7810,U+7813,U+7815,U+7819,U+781b,U+781e,U+7820-7822,U+7824,U+7828,U+782a-782b,U+782e-782f,U+7831-7833,U+7835-7836,U+783d,U+783f,U+7841-7844,U+7846,U+7848-784b,U+784d,U+784f,U+7851,U+7853-7854,U+7858-785c,U+785e-7869,U+786f-7876,U+7878-787b,U+787d-7886,U+7888,U+788a-788b,U+788f-7890,U+7892,U+7894-7896,U+7899,U+789d-789e,U+78a0,U+78a2,U+78a4,U+78a6,U+78a8-78af,U+78b5-78b8,U+78ba-78bd,U+78bf-78c0,U+78c2-78c4,U+78c6-78c8,U+78cc-78cf,U+78d1-78d3,U+78d6-78d8,U+78da-78e7,U+78e9-78eb,U+78ed-78f1,U+78f3,U+78f5-78f6,U+78f8-78f9,U+78fb-7900,U+7902-7904,U+7906-790c"
    }
  },
  {
    uri: Xiaolai_Regular_1ee544f0f1dac422545c505baa788992_default,
    descriptors: {
      unicodeRange: "U+76af-76b0,U+76b3,U+76b5-76be,U+76c0-76c1,U+76c3-76c4,U+76c7,U+76c9,U+76cb-76cc,U+76d3,U+76d5,U+76d9-76da,U+76dc-76de,U+76e0-76e4,U+76e6-76ed,U+76f0,U+76f3,U+76f5-76f7,U+76fa-76fb,U+76fd,U+76ff-7703,U+7705-7706,U+770a,U+770c,U+770e-7718,U+771b-771e,U+7721,U+7723-7725,U+7727,U+772a-772c,U+772e,U+7730-7734,U+7739,U+773b,U+773d-773f,U+7742,U+7744-7746,U+7748-774f,U+7752-7759,U+775c-7760,U+7764,U+7767,U+7769-776a,U+776d-7778,U+777a-777c,U+7781-7783,U+7786-778b,U+778f-7790,U+7793-779e,U+77a1,U+77a3-77a4,U+77a6,U+77a8,U+77ab,U+77ad-77af,U+77b1-77b2,U+77b4,U+77b6-77ba,U+77bc,U+77be,U+77c0-77cc,U+77ce-77d6"
    }
  },
  {
    uri: Xiaolai_Regular_4806e761d750087c2d734fc64596eaff_default,
    descriptors: {
      unicodeRange: "U+7589-758a,U+758c-758e,U+7590,U+7593,U+7595,U+7598,U+759b-759c,U+759e,U+75a2,U+75a6-75aa,U+75ad,U+75b6-75b7,U+75ba-75bb,U+75bf-75c1,U+75c6,U+75cb-75cc,U+75ce-75d1,U+75d3,U+75d7,U+75d9-75da,U+75dc-75dd,U+75df-75e1,U+75e5,U+75e9,U+75ec-75ef,U+75f2-75f3,U+75f5-75f8,U+75fa-75fb,U+75fd-75fe,U+7602,U+7604,U+7606-7609,U+760b,U+760d-760f,U+7611-7614,U+7616,U+761a,U+761c-761e,U+7621,U+7623,U+7627-7628,U+762c,U+762e-762f,U+7631-7632,U+7636-7637,U+7639-763b,U+763d,U+7641-7642,U+7644-764b,U+764e-7653,U+7655,U+7657-765b,U+765d,U+765f-7662,U+7664-766a,U+766c-766e,U+7670-7677,U+7679-767a,U+767c,U+767f-7681,U+7683,U+7685,U+7689-768a,U+768c-768d,U+768f-7690,U+7692,U+7694-7695,U+7697-7698,U+769a-76a3,U+76a5-76ad"
    }
  },
  {
    uri: Xiaolai_Regular_33432927cd87d40cfe393c7482bf221f_default,
    descriptors: {
      unicodeRange: "U+7492-749b,U+749d,U+749f-74a6,U+74aa-74b9,U+74bb-74d1,U+74d3-74db,U+74dd,U+74df,U+74e1,U+74e5,U+74e7-74ed,U+74f0-74f3,U+74f5,U+74f8-74fe,U+7500-7503,U+7505-750c,U+750e,U+7510,U+7512,U+7514-7517,U+751b,U+751d-751e,U+7520-7524,U+7526-7527,U+752a,U+752e,U+7534,U+7536,U+7539,U+753c-753d,U+753f,U+7541-7544,U+7546-7547,U+7549-754a,U+754d,U+7550-7553,U+7555-7558,U+755d-7564,U+7567-7569,U+756b-7571,U+7573,U+7575-7577,U+757a-757e,U+7580-7582,U+7584-7585,U+7587-7588"
    }
  },
  {
    uri: Xiaolai_Regular_be549ab72f0719d606a5c01e2c0219b6_default,
    descriptors: {
      unicodeRange: "U+7372-737d,U+737f-7383,U+7385-7386,U+7388,U+738a,U+738c-738d,U+738f-7390,U+7392-7395,U+7397-739a,U+739c-739e,U+73a0-73a1,U+73a3-73a8,U+73aa,U+73ac-73ad,U+73b1,U+73b4-73b6,U+73b8-73b9,U+73bc-73bf,U+73c1,U+73c3-73c7,U+73cb-73cc,U+73ce,U+73d2-73d8,U+73da-73dd,U+73df,U+73e1-73e4,U+73e6,U+73e8,U+73ea-73ec,U+73ee-73f1,U+73f3-7402,U+7404,U+7407-7408,U+740b-740e,U+7411-7419,U+741c-7421,U+7423-7424,U+7427,U+7429,U+742b,U+742d,U+742f,U+7431-7432,U+7437-743b,U+743d-7440,U+7442-7454,U+7456,U+7458,U+745d,U+7460-746c,U+746e-746f,U+7471-7475,U+7478-747d,U+747f,U+7482,U+7484-7486,U+7488-748a,U+748c-748d,U+748f,U+7491"
    }
  },
  {
    uri: Xiaolai_Regular_019d66dcad46dc156b162d267f981c20_default,
    descriptors: {
      unicodeRange: "U+7054-705d,U+705f-706a,U+706e,U+7071-7074,U+7077,U+7079-707b,U+707d,U+7081-7084,U+7086-7088,U+708b-708d,U+708f-7091,U+7093,U+7097-7098,U+709a-709b,U+709e-70aa,U+70b0,U+70b2,U+70b4-70b6,U+70ba,U+70be-70bf,U+70c4-70c7,U+70c9,U+70cb-70d7,U+70da,U+70dc-70de,U+70e0-70e3,U+70e5,U+70ea,U+70ee,U+70f0-70f6,U+70f8,U+70fa-70fc,U+70fe-7108,U+710b-710f,U+7111-7112,U+7114,U+7117,U+711b-7125,U+7127-712e,U+7132-7135,U+7137-7144,U+7146-7149,U+714b,U+714d,U+714f-715b,U+715d,U+715f-7163,U+7165,U+7169-716d,U+716f-7171,U+7174-7177"
    }
  },
  {
    uri: Xiaolai_Regular_b5c1596551c256e0e9cf02028595b092_default,
    descriptors: {
      unicodeRange: "U+722e-722f,U+7232-7234,U+723a,U+723c,U+723e,U+7240-7246,U+7249-724b,U+724e-7251,U+7253-7255,U+7257-7258,U+725a,U+725c,U+725e,U+7260,U+7263-7265,U+7268,U+726a-726d,U+7270-7271,U+7273-7274,U+7276-7278,U+727b-727d,U+7282-7283,U+7285-7289,U+728c,U+728e,U+7290-7291,U+7293-729e,U+72a0-72ab,U+72ae,U+72b1-72b3,U+72b5,U+72ba-72c0,U+72c5-72c7,U+72c9-72cc,U+72cf,U+72d1,U+72d3-72d6,U+72d8,U+72da-72dd,U+72df,U+72e2-72e7,U+72ea-72eb,U+72f5-72f6,U+72f9,U+72fd-7300,U+7302,U+7304-7309,U+730b-730d,U+730f-7312,U+7314,U+7318-731a,U+731f-7320,U+7323-7324,U+7326-7328,U+732d,U+732f-7330,U+7332-7333,U+7335-7336,U+733a-733d,U+7340-734c,U+734e-734f,U+7351,U+7353-7356,U+7358-735f,U+7361-736b,U+736e,U+7370-7371"
    }
  },
  {
    uri: Xiaolai_Regular_e5f453bb04da18eed01675eeebd88bf8_default,
    descriptors: {
      unicodeRange: "U+6ec5-6ec6,U+6ec8-6eca,U+6ecc-6ece,U+6ed0,U+6ed2,U+6ed6,U+6ed8-6ed9,U+6edb-6edd,U+6ee3,U+6ee7,U+6eea-6ef3,U+6ef5-6ef8,U+6efa-6f01,U+6f03-6f05,U+6f07-6f08,U+6f0a-6f0e,U+6f10-6f12,U+6f16-6f1f,U+6f21-6f23,U+6f25-6f28,U+6f2c,U+6f2e,U+6f30,U+6f32,U+6f34-6f35,U+6f37-6f3d,U+6f3f-6f45,U+6f48-6f4a,U+6f4c,U+6f4e-6f57,U+6f59-6f5b,U+6f5d,U+6f5f-6f61,U+6f63-6f65,U+6f67-6f6c,U+6f6f-6f71,U+6f73,U+6f75-6f77,U+6f79,U+6f7b,U+6f7d-6f83,U+6f85-6f87,U+6f8a-6f8b,U+6f8f-6f9b,U+6f9d-6fa0,U+6fa2-6fa6,U+6fa8-6fb1"
    }
  },
  {
    uri: Xiaolai_Regular_cf2cc71752631e579e35b0e423bf2638_default,
    descriptors: {
      unicodeRange: "U+6d73,U+6d75-6d76,U+6d79-6d7b,U+6d7d-6d81,U+6d83-6d84,U+6d86-6d87,U+6d8a-6d8b,U+6d8d,U+6d8f-6d90,U+6d92,U+6d96-6d9a,U+6d9c,U+6da2,U+6da5,U+6dac-6dad,U+6db0-6db1,U+6db3-6db4,U+6db6-6db7,U+6db9-6dbe,U+6dc1-6dc3,U+6dc8-6dca,U+6dcd-6dd0,U+6dd2-6dd5,U+6dd7,U+6dda-6ddc,U+6ddf,U+6de2-6de3,U+6de5,U+6de7-6dea,U+6ded,U+6def-6df0,U+6df2,U+6df4-6df6,U+6df8,U+6dfa,U+6dfd-6e04,U+6e06-6e09,U+6e0b,U+6e0f,U+6e12-6e13,U+6e15,U+6e18-6e19,U+6e1b-6e1c,U+6e1e-6e1f,U+6e22,U+6e26-6e28,U+6e2a,U+6e2c,U+6e2e,U+6e30-6e31,U+6e33,U+6e35-6e37,U+6e39,U+6e3b-6e42,U+6e45-6e4c,U+6e4f-6e52,U+6e55,U+6e57,U+6e59-6e5a,U+6e5c-6e5e,U+6e60-6e6a,U+6e6c-6e6d,U+6e6f-6e7d,U+6e80-6e82,U+6e84,U+6e87-6e88,U+6e8a-6e8e,U+6e91-6e97,U+6e99-6e9b,U+6e9d-6e9e,U+6ea0-6ea1,U+6ea3-6ea4,U+6ea6,U+6ea8-6ea9,U+6eab-6eae,U+6eb0,U+6eb3,U+6eb5,U+6eb8-6eb9,U+6ebc,U+6ebe-6ec0,U+6ec3-6ec4"
    }
  },
  {
    uri: Xiaolai_Regular_6f3256af8454371776bc46670d33cc65_default,
    descriptors: {
      unicodeRange: "U+6bbb-6bbe,U+6bc0,U+6bc3-6bc4,U+6bc6-6bca,U+6bcc,U+6bce,U+6bd0-6bd1,U+6bd8,U+6bda,U+6bdc-6be0,U+6be2-6be9,U+6bec-6bee,U+6bf0-6bf2,U+6bf4,U+6bf6-6bf8,U+6bfa-6bfc,U+6bfe-6c04,U+6c08-6c0c,U+6c0e,U+6c12,U+6c17,U+6c1c-6c1e,U+6c20,U+6c23,U+6c25,U+6c2b-6c2d,U+6c31,U+6c33,U+6c36-6c37,U+6c39-6c3c,U+6c3e-6c3f,U+6c43-6c45,U+6c48,U+6c4b-6c4f,U+6c51-6c53,U+6c56,U+6c58-6c5a,U+6c62-6c63,U+6c65-6c67,U+6c6b-6c6f,U+6c71,U+6c73,U+6c75,U+6c77-6c78,U+6c7a-6c7c,U+6c7f-6c80,U+6c84,U+6c87,U+6c8a-6c8b,U+6c8d-6c8e,U+6c91-6c92,U+6c95-6c98,U+6c9a,U+6c9c-6c9e,U+6ca0,U+6ca2,U+6ca8,U+6cac,U+6caf-6cb0,U+6cb4-6cb7,U+6cba,U+6cc0-6cc3,U+6cc6-6cc8,U+6ccb,U+6ccd-6ccf,U+6cd1-6cd2,U+6cd8-6cda,U+6cdc-6cdd,U+6cdf,U+6ce4,U+6ce6-6ce7,U+6ce9,U+6cec-6ced,U+6cf2,U+6cf4,U+6cf9,U+6cff-6d00,U+6d02-6d03,U+6d05-6d06,U+6d08-6d0a,U+6d0d,U+6d0f-6d11,U+6d13-6d16,U+6d18,U+6d1c-6d1d,U+6d1f-6d24,U+6d26,U+6d28-6d29,U+6d2c-6d2d,U+6d2f-6d30,U+6d34,U+6d36-6d38,U+6d3a,U+6d3f-6d40,U+6d42,U+6d44,U+6d49,U+6d4c,U+6d50,U+6d55-6d58,U+6d5b,U+6d5d,U+6d5f,U+6d61-6d62,U+6d64-6d65,U+6d67-6d68,U+6d6b-6d6d,U+6d70-6d72"
    }
  },
  {
    uri: Xiaolai_Regular_23f228f3999c01983860012330e4be08_default,
    descriptors: {
      unicodeRange: "U+6967-696a,U+696c-696d,U+696f-6970,U+6972-6976,U+697a-697b,U+697d-697f,U+6981,U+6983,U+6985,U+698a-698c,U+698e-6993,U+6996-6997,U+6999-699a,U+699d-69a6,U+69a9-69aa,U+69ac,U+69ae-69b0,U+69b2-69b3,U+69b5-69b6,U+69b8-69ba,U+69bc-69c0,U+69c2-69c9,U+69cb,U+69cd,U+69cf,U+69d1-69d3,U+69d5-69da,U+69dc-69de,U+69e1-69ec,U+69ee-69f1,U+69f3-69fc,U+69fe,U+6a00-6a09,U+6a0b-6a16,U+6a19-6a1e,U+6a20,U+6a22-6a27,U+6a29,U+6a2b-6a2e,U+6a30,U+6a32-6a34,U+6a36-6a3c,U+6a3f-6a43,U+6a45-6a46,U+6a48-6a4a"
    }
  },
  {
    uri: Xiaolai_Regular_21430ee05a1248901da8d0de08744d47_default,
    descriptors: {
      unicodeRange: "U+6830-6831,U+6834-6836,U+683a-683b,U+683f,U+6847,U+684b,U+684d,U+684f,U+6852,U+6856-685f,U+686a,U+686c-6873,U+6875,U+6878-6880,U+6882,U+6884,U+6887-688e,U+6890-6892,U+6894-6896,U+6898-68a1,U+68a3-68a5,U+68a9-68ac,U+68ae,U+68b1-68b2,U+68b4,U+68b6-68bf,U+68c1,U+68c3-68c8,U+68ca,U+68cc,U+68ce-68d1,U+68d3-68d4,U+68d6-68d7,U+68d9,U+68db-68df,U+68e1-68e2,U+68e4-68ed,U+68ef,U+68f2-68f4,U+68f6-68f8,U+68fb,U+68fd-6900,U+6902-6904,U+6906-690a,U+690c,U+690f,U+6911,U+6913-691e,U+6921-6923,U+6925-692c,U+692e-692f,U+6931-6933,U+6935-6938,U+693a-693c,U+693e,U+6940-6941,U+6943-6953,U+6955-6956,U+6958-6959,U+695b-695c,U+695f,U+6961-6962,U+6964-6965"
    }
  },
  {
    uri: Xiaolai_Regular_5330a2119a716e4e7224ed108b085dac_default,
    descriptors: {
      unicodeRange: "U+66b8,U+66ba-66bd,U+66bf-66d8,U+66da,U+66de-66e5,U+66e7-66e8,U+66ea-66ef,U+66f1,U+66f5-66f6,U+66f8,U+66fa-66fb,U+66fd,U+6701-6707,U+670c,U+670e-670f,U+6711-6713,U+6716,U+6718-671a,U+671c,U+671e,U+6720-6725,U+6727,U+6729,U+672e,U+6730,U+6732-6733,U+6736-6739,U+673b-673c,U+673e-673f,U+6741,U+6744-6745,U+6747,U+674a-674b,U+674d,U+6752,U+6754-6755,U+6757-675b,U+675d,U+6762-6764,U+6766-6767,U+676b-676c,U+676e,U+6771,U+6774,U+6776,U+6778-677b,U+677d,U+6780,U+6782-6783,U+6785-6786,U+6788,U+678a,U+678c-678f,U+6791-6794,U+6796,U+6799,U+679b,U+679f-67a1,U+67a4,U+67a6,U+67a9,U+67ac,U+67ae,U+67b1-67b2,U+67b4,U+67b9-67c0,U+67c2,U+67c5-67ce,U+67d5-67d7,U+67db,U+67df,U+67e1,U+67e3-67e4,U+67e6-67e8,U+67ea-67eb,U+67ed-67ee,U+67f2,U+67f5-67fc,U+67fe,U+6801-6804,U+6806,U+680d,U+6810,U+6812,U+6814-6815,U+6818-681c,U+681e-6820,U+6822-6828,U+682b-682f"
    }
  },
  {
    uri: Xiaolai_Regular_cd145ce4a0ea18469358df53c207bc1b_default,
    descriptors: {
      unicodeRange: "U+6569-656a,U+656d-656f,U+6571,U+6573,U+6575-6576,U+6578-6586,U+6588-658a,U+658d-658f,U+6592,U+6594-6596,U+6598,U+659a,U+659d-659e,U+65a0,U+65a2-65a3,U+65a6,U+65a8,U+65aa,U+65ac,U+65ae,U+65b1-65b8,U+65ba-65bb,U+65be-65c0,U+65c2,U+65c7-65ca,U+65cd,U+65d0-65d1,U+65d3-65d5,U+65d8-65df,U+65e1,U+65e3-65e4,U+65ea-65eb,U+65f2-65f5,U+65f8-65f9,U+65fb-65ff,U+6601,U+6604-6605,U+6607-6609,U+660b,U+660d,U+6610-6612,U+6616-6618,U+661a-661c,U+661e,U+6621-6624,U+6626,U+6629-662c,U+662e,U+6630,U+6632-6633,U+6637-663b,U+663d,U+663f-6640,U+6642,U+6644-664a,U+664d-664e,U+6650-6651,U+6658-6659,U+665b-665e,U+6660,U+6662-6663,U+6665,U+6667,U+6669-666d,U+6671-6673,U+6675,U+6678-6679,U+667b-667d,U+667f-6681,U+6683,U+6685-6686,U+6688-668b,U+668d-6690,U+6692-6695,U+6698-669c,U+669e-66a6,U+66a9-66ad,U+66af-66b3,U+66b5-66b7"
    }
  },
  {
    uri: Xiaolai_Regular_36925dfe329a45086cbb7fc5c20d45ac_default,
    descriptors: {
      unicodeRange: "U+5f30,U+5f32-5f38,U+5f3b,U+5f3d-5f3f,U+5f41-5f4f,U+5f51,U+5f54,U+5f59-5f5c,U+5f5e-5f60,U+5f63,U+5f65,U+5f67-5f68,U+5f6b,U+5f6e-5f6f,U+5f72,U+5f74-5f76,U+5f78,U+5f7a,U+5f7d-5f7f,U+5f83,U+5f86,U+5f8d-5f8f,U+5f91,U+5f93-5f94,U+5f96,U+5f9a-5f9b,U+5f9d-5fa0,U+5fa2-5fa7,U+5fa9,U+5fab-5fac,U+5faf-5fb4,U+5fb6,U+5fb8-5fbb,U+5fbe-5fc2,U+5fc7-5fc8,U+5fca-5fcb,U+5fce,U+5fd3-5fd5,U+5fda-5fdc,U+5fde-5fdf,U+5fe2-5fe3,U+5fe5-5fe6,U+5fe8-5fe9,U+5fec,U+5fef-5ff0,U+5ff2-5ff4,U+5ff6-5ff7,U+5ff9-5ffa,U+5ffc,U+6007-6009,U+600b-600c,U+6010-6011,U+6013,U+6017-6018,U+601a,U+601e-601f,U+6022-6024,U+602c-602e,U+6030-6034,U+6036-603a,U+603d-603e,U+6040,U+6044-604a,U+604c,U+604e-604f,U+6051,U+6053-6054,U+6056-6058,U+605b-605c,U+605e-6061,U+6065-6066,U+606e,U+6071-6072,U+6074-6075,U+6077,U+607e,U+6080-6082,U+6085-6088,U+608a-608b,U+608e-6091,U+6093,U+6095,U+6097-6099,U+609c,U+609e,U+60a1-60a2,U+60a4-60a5,U+60a7,U+60a9-60aa,U+60ae,U+60b0,U+60b3,U+60b5-60b7,U+60b9-60ba,U+60bd-60c4,U+60c7-60c9,U+60cc"
    }
  },
  {
    uri: Xiaolai_Regular_4bfaa8ffa64c5ee560aa2daba7c9cbd3_default,
    descriptors: {
      unicodeRange: "U+635a-635d,U+6360,U+6364-6366,U+6368,U+636a-636c,U+636f-6370,U+6372-6375,U+6378-6379,U+637c-637f,U+6381,U+6383-6386,U+638b,U+638d,U+6391,U+6393-6395,U+6397,U+6399-639f,U+63a1,U+63a4,U+63a6,U+63ab,U+63af,U+63b1-63b2,U+63b5-63b6,U+63b9,U+63bb,U+63bd,U+63bf-63c3,U+63c5,U+63c7-63c8,U+63ca-63cc,U+63d1,U+63d3-63d5,U+63d7-63dd,U+63df,U+63e2,U+63e4-63e8,U+63eb-63ec,U+63ee-63f1,U+63f3,U+63f5,U+63f7,U+63f9-63fc,U+63fe,U+6403-6404,U+6406-640a,U+640d-640e,U+6411-6412,U+6415-641a,U+641d,U+641f,U+6422-6425,U+6427-6429,U+642b,U+642e-6433,U+6435-6439,U+643b-643c,U+643e,U+6440,U+6442-6443,U+6449,U+644b-6451,U+6453,U+6455-6457,U+6459-645d,U+645f-6466,U+6468,U+646a-646c,U+646e-6477,U+647b-6481,U+6483,U+6486,U+6488-648f"
    }
  },
  {
    uri: Xiaolai_Regular_112c051027b2d766c19a519f6ee1f4f7_default,
    descriptors: {
      unicodeRange: "U+61c5-61c7,U+61c9,U+61cc-61d0,U+61d3,U+61d5-61e5,U+61e7-61f4,U+61f6-61fe,U+6200-6205,U+6207,U+6209,U+6213-6214,U+6219,U+621c-621e,U+6220,U+6223,U+6226-6229,U+622b,U+622d,U+622f-6232,U+6235-6236,U+6238-623c,U+6242,U+6244-6246,U+624a,U+624f-6250,U+6255-6257,U+6259-625a,U+625c-6262,U+6264-6265,U+6268,U+6271-6272,U+6274-6275,U+6277-6278,U+627a-627b,U+627d,U+6281-6283,U+6285-6288,U+628b-6290,U+6294,U+6299,U+629c-629e,U+62a3,U+62a6-62a7,U+62a9-62aa,U+62ad-62b0,U+62b2-62b4,U+62b6-62b8,U+62ba,U+62be,U+62c0-62c1,U+62c3,U+62cb,U+62cf,U+62d1,U+62d5,U+62dd-62de,U+62e0-62e1,U+62e4,U+62ea-62eb,U+62f0,U+62f2,U+62f5,U+62f8-62fb,U+6300,U+6303-6306,U+630a-630d,U+630f-6310,U+6312-6315,U+6317-6319,U+631c,U+6326-6327,U+6329,U+632c-632e,U+6330-6331,U+6333-6338,U+633b-633c,U+633e-6341,U+6344,U+6347-6348,U+634a,U+6351-6354,U+6356-6359"
    }
  },
  {
    uri: Xiaolai_Regular_5b0ed6971aaab9c8ad563230bd5471a7_default,
    descriptors: {
      unicodeRange: "U+5dd0-5dda,U+5ddc,U+5ddf-5de0,U+5de3-5de4,U+5dea,U+5dec-5ded,U+5df0,U+5df5-5df6,U+5df8-5dfc,U+5dff-5e00,U+5e04,U+5e07,U+5e09-5e0b,U+5e0d-5e0e,U+5e12-5e13,U+5e17,U+5e1e-5e25,U+5e28-5e2c,U+5e2f-5e30,U+5e32-5e36,U+5e39-5e3a,U+5e3e-5e41,U+5e43,U+5e46-5e4b,U+5e4d-5e53,U+5e56-5e5a,U+5e5c-5e5d,U+5e5f-5e60,U+5e63-5e71,U+5e75,U+5e77,U+5e79,U+5e7e,U+5e81-5e83,U+5e85,U+5e88-5e89,U+5e8c-5e8e,U+5e92,U+5e98,U+5e9b,U+5e9d,U+5ea1-5ea4,U+5ea8-5eac,U+5eae-5eb2,U+5eb4,U+5eba-5ebd,U+5ebf-5ec8,U+5ecb-5ed0,U+5ed4-5ed5,U+5ed7-5eda,U+5edc-5ee7,U+5ee9,U+5eeb-5ef3,U+5ef5,U+5ef8-5ef9,U+5efb-5efd,U+5f05-5f07,U+5f09,U+5f0c-5f0e,U+5f10,U+5f12,U+5f14,U+5f16,U+5f19-5f1a,U+5f1c-5f1e,U+5f21-5f24,U+5f28,U+5f2b-5f2c,U+5f2e"
    }
  },
  {
    uri: Xiaolai_Regular_98f2ad84457de7f3740d9920b8fa8667_default,
    descriptors: {
      unicodeRange: "U+60cd-60d0,U+60d2-60d4,U+60d6-60d7,U+60d9,U+60db,U+60de,U+60e1-60e5,U+60ea,U+60f1-60f2,U+60f5,U+60f7-60f8,U+60fb-60ff,U+6102-6105,U+6107,U+610a-610c,U+6110-6114,U+6116-6119,U+611b-611e,U+6121-6122,U+6125,U+6128-612a,U+612c-613e,U+6140-6147,U+6149,U+614b,U+614d,U+614f-6150,U+6152-6154,U+6156-615c,U+615e-6161,U+6163-6166,U+6169-616f,U+6171-6174,U+6176,U+6178-618a,U+618c-618d,U+618f-6193,U+6195-619c,U+619e-61a6,U+61aa-61ab,U+61ad-61b6,U+61b8-61bd,U+61bf-61c1,U+61c3-61c4"
    }
  },
  {
    uri: Xiaolai_Regular_733171b4ffcd17ea1fe1c0ba627173bf_default,
    descriptors: {
      unicodeRange: "U+5cf4-5cfa,U+5cfc-5d01,U+5d04-5d05,U+5d08-5d0d,U+5d0f-5d13,U+5d15,U+5d17-5d1a,U+5d1c-5d1d,U+5d1f-5d23,U+5d25,U+5d28,U+5d2a-5d2c,U+5d2f-5d33,U+5d35-5d3c,U+5d3f-5d46,U+5d48-5d49,U+5d4d-5d57,U+5d59-5d5a,U+5d5c,U+5d5e-5d68,U+5d6a,U+5d6d-5d6e,U+5d70-5d73,U+5d75-5d81,U+5d83-5d98,U+5d9a-5d9c,U+5d9e-5db6,U+5db8-5dc4,U+5dc6-5dcc,U+5dce-5dcf"
    }
  },
  {
    uri: Xiaolai_Regular_684d65f1793cac449dde5d59cb3c47fb_default,
    descriptors: {
      unicodeRange: "U+5b52,U+5b56,U+5b5e,U+5b60-5b61,U+5b67-5b68,U+5b6b,U+5b6d-5b6f,U+5b72,U+5b74,U+5b76-5b79,U+5b7b-5b7c,U+5b7e-5b7f,U+5b82,U+5b86,U+5b8a,U+5b8d-5b8e,U+5b90-5b92,U+5b94,U+5b96,U+5b9f,U+5ba7-5ba9,U+5bac-5baf,U+5bb1-5bb2,U+5bb7,U+5bba-5bbc,U+5bc0-5bc1,U+5bc3,U+5bc8-5bcb,U+5bcd-5bcf,U+5bd1,U+5bd4-5bdc,U+5be0,U+5be2-5be3,U+5be6-5be7,U+5be9-5bed,U+5bef,U+5bf1-5bf7,U+5bfd-5bfe,U+5c00,U+5c02-5c03,U+5c05,U+5c07-5c08,U+5c0b-5c0e,U+5c10,U+5c12-5c13,U+5c17,U+5c19,U+5c1b,U+5c1e-5c21,U+5c23,U+5c26,U+5c28-5c2b,U+5c2d-5c30,U+5c32-5c33,U+5c35-5c37,U+5c43-5c44,U+5c46-5c47,U+5c4c-5c4d,U+5c52-5c54,U+5c56-5c58,U+5c5a-5c5d,U+5c5f,U+5c62,U+5c64,U+5c67-5c6d,U+5c70,U+5c72-5c78,U+5c7b-5c7e,U+5c80,U+5c83-5c87,U+5c89-5c8b,U+5c8e-5c8f,U+5c92-5c93,U+5c95,U+5c9d-5ca1,U+5ca4-5ca8,U+5caa,U+5cae-5cb0,U+5cb2,U+5cb4,U+5cb6,U+5cb9-5cbc,U+5cbe,U+5cc0,U+5cc2-5cc3,U+5cc5-5cca,U+5ccc-5cd1,U+5cd3-5cd8,U+5cda-5ce0,U+5ce2-5ce3,U+5ce7,U+5ce9,U+5ceb-5cec,U+5cee-5cef,U+5cf1-5cf3"
    }
  },
  {
    uri: Xiaolai_Regular_cbaaefaaf326668277aa24dfa93c4d28_default,
    descriptors: {
      unicodeRange: "U+593b,U+593d-5940,U+5943,U+5945-5946,U+594a,U+594c-594d,U+5950,U+5952-5953,U+5959,U+595b-595f,U+5961,U+5963-5964,U+5966-5972,U+5975,U+5977,U+597a-597c,U+597e-5980,U+5985,U+5989,U+598b-598c,U+598e-5991,U+5994-5995,U+5998,U+599a-599d,U+599f-59a2,U+59a6-59a7,U+59ac-59ad,U+59b0-59b1,U+59b3-59b8,U+59ba,U+59bc-59bd,U+59bf-59c5,U+59c7-59c9,U+59cc-59cf,U+59d5-59d6,U+59d9,U+59db,U+59de-59e2,U+59e4,U+59e6-59e7,U+59e9-59eb,U+59ed-59f8,U+59fa,U+59fc-59fe,U+5a00,U+5a02,U+5a0a-5a0b,U+5a0d-5a10,U+5a12,U+5a14-5a17,U+5a19-5a1b,U+5a1d-5a1e,U+5a21-5a22,U+5a24,U+5a26-5a28,U+5a2a-5a30,U+5a33,U+5a35,U+5a37-5a3b,U+5a3d-5a3f,U+5a41-5a45,U+5a47-5a48,U+5a4b-5a54,U+5a56-5a59,U+5a5b-5a61,U+5a63-5a66,U+5a68-5a69,U+5a6b-5a73,U+5a78-5a79,U+5a7b-5a7e,U+5a80-5a90"
    }
  },
  {
    uri: Xiaolai_Regular_58fd02350d0bc52cf1ca3bb32ce9766e_default,
    descriptors: {
      unicodeRange: "U+5a91,U+5a93-5a99,U+5a9c-5aa9,U+5aab-5ab1,U+5ab4,U+5ab6-5ab7,U+5ab9-5abd,U+5abf-5ac0,U+5ac3-5ac8,U+5aca-5acb,U+5acd-5ad1,U+5ad3,U+5ad5,U+5ad7,U+5ad9-5adb,U+5add-5adf,U+5ae2,U+5ae4-5ae5,U+5ae7-5ae8,U+5aea,U+5aec-5af0,U+5af2-5b08,U+5b0a-5b15,U+5b18-5b31,U+5b33,U+5b35-5b36,U+5b38-5b3f,U+5b41-5b4f"
    }
  },
  {
    uri: Xiaolai_Regular_7ccce86603f80a099ddb0cb21d4ae3e3_default,
    descriptors: {
      unicodeRange: "U+5843,U+5845-584b,U+584e-5850,U+5852-5853,U+5855-5857,U+5859-585d,U+585f-5864,U+5866-586a,U+586d-587d,U+587f,U+5882,U+5884,U+5886-5888,U+588a-5891,U+5894-5898,U+589b-589d,U+58a0-58a7,U+58aa-58bb,U+58bd-58c0,U+58c2-58c4,U+58c6-58d0,U+58d2-58d4,U+58d6-58e3,U+58e5-58ea,U+58ed,U+58ef,U+58f1-58f2,U+58f4-58f5,U+58f7-58f8,U+58fa-5901,U+5903,U+5905-5906,U+5908-590c,U+590e,U+5910-5913,U+5917-5918,U+591b,U+591d-591e,U+5920-5923,U+5926,U+5928,U+592c,U+5930,U+5932-5933,U+5935-5936"
    }
  },
  {
    uri: Xiaolai_Regular_3717077e38f98d89eae729b6c14e56dc_default,
    descriptors: {
      unicodeRange: "U+56d0-56d3,U+56d5-56d6,U+56d8-56d9,U+56dc,U+56e3,U+56e5-56ea,U+56ec,U+56ee-56ef,U+56f2-56f3,U+56f6-56f8,U+56fb-56fc,U+5700-5702,U+5705,U+5707,U+570b-571b,U+571d-571e,U+5720-5722,U+5724-5727,U+572b,U+5731-5732,U+5734-5738,U+573c-573d,U+573f,U+5741,U+5743-5746,U+5748-5749,U+574b,U+5752-5756,U+5758-5759,U+5762-5763,U+5765,U+5767,U+576c,U+576e,U+5770-5772,U+5774-5775,U+5778-577a,U+577d-5781,U+5787-578a,U+578d-5791,U+5794-579a,U+579c-579f,U+57a5,U+57a8,U+57aa,U+57ac,U+57af-57b1,U+57b3,U+57b5-57b7,U+57b9-57c1,U+57c4-57ca,U+57cc-57cd,U+57d0-57d1,U+57d3,U+57d6-57d7,U+57db-57dc,U+57de,U+57e1-57e3,U+57e5-57ec,U+57ee,U+57f0-57f3,U+57f5-57f7,U+57fb-57fc,U+57fe-57ff,U+5801,U+5803-5805,U+5808-580a,U+580c,U+580e-5810,U+5812-5814,U+5816-5818,U+581a-581d,U+581f,U+5822-5823,U+5825-5829,U+582b-582f,U+5831-5834,U+5836-5842"
    }
  },
  {
    uri: Xiaolai_Regular_dbea1af6dcd9860be40c3d18254338f5_default,
    descriptors: {
      unicodeRange: "U+55f9-55fc,U+55ff,U+5602-5607,U+560a-560b,U+560d,U+5610-5617,U+5619-561a,U+561c-561d,U+5620-5622,U+5625-5626,U+5628-562b,U+562e-5630,U+5633,U+5635,U+5637-5638,U+563a,U+563c-563e,U+5640-564b,U+564f-5653,U+5655-5656,U+565a-565b,U+565d-5661,U+5663,U+5665-5667,U+566d-5670,U+5672-5675,U+5677-567a,U+567d-5684,U+5687-568d,U+5690-5692,U+5694-56a2,U+56a4-56ae,U+56b0-56b6,U+56b8-56bb,U+56bd-56c9,U+56cb-56cf"
    }
  },
  {
    uri: Xiaolai_Regular_4a0fdb40036e87b40aa08dd30584cb85_default,
    descriptors: {
      unicodeRange: "U+5286-5287,U+5289-528f,U+5291-5292,U+5294-529a,U+529c,U+52a4-52a7,U+52ae-52b0,U+52b4-52bd,U+52c0-52c2,U+52c4-52c6,U+52c8,U+52ca,U+52cc-52cf,U+52d1,U+52d3-52d5,U+52d7,U+52d9-52de,U+52e0-52e3,U+52e5-52ef,U+52f1-52f8,U+52fb-52fd,U+5301-5304,U+5307,U+5309-530c,U+530e,U+5311-5314,U+5318,U+531b-531c,U+531e-531f,U+5322,U+5324-5325,U+5327-5329,U+532b-532d,U+532f-5338,U+533c-533d,U+5340,U+5342,U+5344,U+5346,U+534b-534d,U+5350,U+5354,U+5358-5359,U+535b,U+535d,U+5365,U+5368,U+536a,U+536c-536d,U+5372,U+5376,U+5379,U+537b-537e,U+5380-5381,U+5383,U+5387-5388,U+538a,U+538e-5394,U+5396-5397,U+5399,U+539b-539c,U+539e,U+53a0-53a1,U+53a4,U+53a7,U+53aa-53ad,U+53af-53b5,U+53b7-53ba,U+53bc-53be,U+53c0,U+53c3-53c7,U+53ce-53d0,U+53d2-53d3,U+53d5,U+53da,U+53dc-53de,U+53e1-53e2,U+53e7,U+53f4,U+53fa,U+53fe-5400,U+5402,U+5405,U+5407,U+540b,U+5414,U+5418-541a,U+541c,U+5422,U+5424-5425,U+542a,U+5430,U+5433,U+5436-5437,U+543a"
    }
  },
  {
    uri: Xiaolai_Regular_0f626226ba1272e832aea87bafd9720e_default,
    descriptors: {
      unicodeRange: "U+5101-5105,U+5108-510a,U+510c-5111,U+5113-5120,U+5122-513e,U+5142,U+5147,U+514a,U+514c,U+514e-5150,U+5152-5153,U+5157-5159,U+515b,U+515d-5161,U+5163-5164,U+5166-5167,U+5169-516a,U+516f,U+5172,U+517a,U+517e-517f,U+5183-5184,U+5186-5187,U+518a-518b,U+518e-5191,U+5193-5194,U+5198,U+519a,U+519d-519f,U+51a1,U+51a3,U+51a6-51aa,U+51ad-51ae,U+51b4,U+51b8-51ba,U+51be-51bf,U+51c1-51c3,U+51c5,U+51c8,U+51ca,U+51cd-51ce,U+51d0,U+51d2-51da,U+51dc,U+51de-51df,U+51e2-51e3,U+51e5-51ea,U+51ec,U+51ee,U+51f1-51f2,U+51f4,U+51f7,U+51fe,U+5204-5205,U+5209,U+520b-520c,U+520f-5210,U+5213-5215,U+521c,U+521e-521f,U+5221-5223,U+5225-5227,U+522a,U+522c,U+522f,U+5231-5232,U+5234-5235,U+523c,U+523e,U+5244-5249,U+524b,U+524e-524f,U+5252-5253,U+5255,U+5257-525b,U+525d,U+525f-5260,U+5262-5264,U+5266,U+5268,U+526b-526e,U+5270-5271,U+5273-527c,U+527e,U+5280,U+5283-5285"
    }
  },
  {
    uri: Xiaolai_Regular_938d90c10ff8c20386af7f242c05d6b0_default,
    descriptors: {
      unicodeRange: "U+543d,U+543f,U+5441-5442,U+5444-5445,U+5447,U+5449,U+544c-544f,U+5451,U+545a,U+545d-5461,U+5463,U+5465,U+5467,U+5469-5470,U+5474,U+5479-547a,U+547e-547f,U+5481,U+5483,U+5485,U+5487-548a,U+548d,U+5491,U+5493,U+5497-5498,U+549c,U+549e-54a2,U+54a5,U+54ae,U+54b0,U+54b2,U+54b5-54b7,U+54b9-54ba,U+54bc,U+54be,U+54c3,U+54c5,U+54ca-54cb,U+54d6,U+54d8,U+54db,U+54e0-54e4,U+54eb-54ec,U+54ef-54f1,U+54f4-54f9,U+54fb,U+54fe,U+5500,U+5502-5505,U+5508,U+550a-550e,U+5512-5513,U+5515-551a,U+551c-551f,U+5521,U+5525-5526,U+5528-5529,U+552b,U+552d,U+5532,U+5534-5536,U+5538-553b,U+553d,U+5540,U+5542,U+5545,U+5547-5548,U+554b-554f,U+5551-5554,U+5557-555b,U+555d-5560,U+5562-5563,U+5568-5569,U+556b,U+556f-5574,U+5579-557a,U+557d,U+557f,U+5585-5586,U+558c-558e,U+5590,U+5592-5593,U+5595-5597,U+559a-559b,U+559e,U+55a0-55a6,U+55a8-55b0,U+55b2,U+55b4,U+55b6,U+55b8,U+55ba,U+55bc,U+55bf-55c3,U+55c6-55c8,U+55ca-55cb,U+55ce-55d0,U+55d5,U+55d7-55db,U+55de,U+55e0,U+55e2,U+55e7,U+55e9,U+55ed-55ee,U+55f0-55f1,U+55f4,U+55f6,U+55f8"
    }
  },
  {
    uri: Xiaolai_Regular_b6d128682ee29e471486354d486a1b90_default,
    descriptors: {
      unicodeRange: "U+4fe0,U+4fe2,U+4fe4-4fe5,U+4fe7,U+4feb-4fec,U+4ff0,U+4ff2,U+4ff4-4ff7,U+4ff9,U+4ffb-4ffd,U+4fff-500b,U+500e,U+5010-5011,U+5013,U+5015-5017,U+501b,U+501d-501e,U+5020,U+5022-5024,U+5027,U+502b,U+502f-5039,U+503b,U+503d,U+503f-5042,U+5044-5046,U+5049-504b,U+504d,U+5050-5054,U+5056-5059,U+505b,U+505d-5064,U+5066-506b,U+506d-5075,U+5078-507a,U+507c-507d,U+5081-5084,U+5086-5087,U+5089-508c,U+508e-50a2,U+50a4,U+50a6,U+50aa-50ab,U+50ad-50b1,U+50b3-50b9,U+50bc-50ce,U+50d0-50d5,U+50d7-50d9,U+50db-50e5,U+50e8-50eb,U+50ef-50f2,U+50f4,U+50f6-50fa,U+50fc-5100"
    }
  },
  { uri: Xiaolai_Regular_e51ef413167c6e14e0c0fdcc585f2fc9_default, descriptors: { unicodeRange: "U+49d5-4a77" } },
  {
    uri: Xiaolai_Regular_9d81066dd2b337c938df6e90380a00dc_default,
    descriptors: {
      unicodeRange: "U+4dac-4dad,U+4daf-4db5,U+4e02,U+4e04-4e06,U+4e0f,U+4e12,U+4e17,U+4e1f-4e21,U+4e23,U+4e26,U+4e29,U+4e2e-4e2f,U+4e31,U+4e33,U+4e35,U+4e37,U+4e3c,U+4e40-4e42,U+4e44,U+4e46,U+4e4a,U+4e51,U+4e55,U+4e57,U+4e5a-4e5b,U+4e62-4e65,U+4e67-4e68,U+4e6a-4e6f,U+4e72,U+4e74-4e7d,U+4e7f-4e85,U+4e87,U+4e8a,U+4e90,U+4e96-4e97,U+4e99,U+4e9c-4e9e,U+4ea3,U+4eaa,U+4eaf-4eb1,U+4eb4,U+4eb6-4eb9,U+4ebc-4ebe,U+4ec8,U+4ecc,U+4ecf-4ed0,U+4ed2,U+4eda-4edc,U+4ee0,U+4ee2,U+4ee6-4ee7,U+4ee9,U+4eed-4eef,U+4ef1,U+4ef4,U+4ef8-4efa,U+4efc,U+4efe,U+4f00,U+4f02-4f08,U+4f0b-4f0c,U+4f12-4f16,U+4f1c-4f1d,U+4f21,U+4f23,U+4f28-4f29,U+4f2c-4f2e,U+4f31,U+4f33,U+4f35,U+4f37,U+4f39,U+4f3b,U+4f3e-4f42,U+4f44-4f45,U+4f47-4f4c,U+4f52,U+4f54,U+4f56,U+4f61-4f62,U+4f66,U+4f68,U+4f6a-4f6b,U+4f6d-4f6e,U+4f71-4f72,U+4f75,U+4f77-4f7a,U+4f7d,U+4f80-4f82,U+4f85-4f87,U+4f8a,U+4f8c,U+4f8e,U+4f90,U+4f92-4f93,U+4f95-4f96,U+4f98-4f9a,U+4f9c,U+4f9e-4f9f,U+4fa1-4fa2,U+4fa4,U+4fab,U+4fad,U+4fb0-4fb4,U+4fb6-4fbe,U+4fc0-4fc2,U+4fc6-4fc9,U+4fcb-4fcd,U+4fd2-4fd6,U+4fd9,U+4fdb"
    }
  },
  { uri: Xiaolai_Regular_20e7bf72fa05de9adf7dbcc7bf51dde6_default, descriptors: { unicodeRange: "U+4933-49d4" } },
  { uri: Xiaolai_Regular_4095eb84ef3874e2600247bee0b04026_default, descriptors: { unicodeRange: "U+487a-4932" } },
  {
    uri: Xiaolai_Regular_4ee10ae43505e2e0bc62656ced49c0fa_default,
    descriptors: { unicodeRange: "U+47d2-4879,U+2ce7c,U+2ce88,U+2ce93" }
  },
  {
    uri: Xiaolai_Regular_7494dc504ae00ee9cd0505f990f88c5d_default,
    descriptors: {
      unicodeRange: "U+4756-47d1,U+2ca02,U+2ca0e,U+2ca7d,U+2caa9,U+2cb29,U+2cb2e,U+2cb31,U+2cb38-2cb39,U+2cb3f,U+2cb41,U+2cb4e,U+2cb5a,U+2cb64,U+2cb69,U+2cb6c,U+2cb6f,U+2cb76,U+2cb78,U+2cb7c,U+2cbb1,U+2cbbf-2cbc0,U+2cbce,U+2cc5f,U+2ccf5-2ccf6,U+2ccfd,U+2ccff,U+2cd02-2cd03,U+2cd0a,U+2cd8b,U+2cd8d,U+2cd8f-2cd90,U+2cd9f-2cda0,U+2cda8,U+2cdad-2cdae,U+2cdd5,U+2ce18,U+2ce1a,U+2ce23,U+2ce26,U+2ce2a"
    }
  },
  {
    uri: Xiaolai_Regular_8de5b863cb50dfefdd07cb11c774d579_default,
    descriptors: {
      unicodeRange: "U+46c3-4755,U+2c488,U+2c494,U+2c497,U+2c542,U+2c613,U+2c618,U+2c621,U+2c629,U+2c62b-2c62d,U+2c62f,U+2c642,U+2c64a-2c64b,U+2c72c,U+2c72f,U+2c79f,U+2c7c1,U+2c7fd,U+2c8d9,U+2c8de,U+2c8e1,U+2c8f3,U+2c907,U+2c90a,U+2c91d"
    }
  },
  {
    uri: Xiaolai_Regular_3e1f8f654357353bf0e04ba5c34b5f7f_default,
    descriptors: {
      unicodeRange: "U+4629-46c2,U+2bdf7,U+2be29,U+2c029-2c02a,U+2c0a9,U+2c0ca,U+2c1d5,U+2c1d9,U+2c1f9,U+2c27c,U+2c288,U+2c2a4,U+2c317,U+2c35b,U+2c361,U+2c364"
    }
  },
  {
    uri: Xiaolai_Regular_2e33e8dc771ef5e1d9127d60a6b73679_default,
    descriptors: {
      unicodeRange: "U+458e-4628,U+2b7a9,U+2b7c5,U+2b7e6,U+2b7f9,U+2b806,U+2b80a,U+2b81c,U+2b8b8,U+2bac7,U+2bb5f,U+2bb62,U+2bb7c,U+2bb83,U+2bc1b,U+2bd77,U+2bd87"
    }
  },
  {
    uri: Xiaolai_Regular_173945821411c09f70c95f98d590e697_default,
    descriptors: {
      unicodeRange: "U+4449-4511,U+2afa2,U+2b127-2b128,U+2b137-2b138,U+2b1ed"
    }
  },
  {
    uri: Xiaolai_Regular_b358f7a51ece39a3247942b1feabdb29_default,
    descriptors: {
      unicodeRange: "U+439b-4448,U+2a437,U+2a5f1,U+2a602,U+2a61a,U+2a6b2,U+2a7dd,U+2a8fb,U+2a917,U+2aa30,U+2aa36,U+2aa58"
    }
  },
  {
    uri: Xiaolai_Regular_23ad2d71b280f00b1363b95b7bea94eb_default,
    descriptors: {
      unicodeRange: "U+4275-430d,U+298c6,U+29a72,U+29d98,U+29ddb,U+29e15,U+29e3d,U+29e49"
    }
  },
  {
    uri: Xiaolai_Regular_5882ffa04f32584d26109137e2da4352_default,
    descriptors: {
      unicodeRange: "U+4132-41de,U+28bef,U+28c47,U+28c4f,U+28c51,U+28c54,U+28d10,U+28d71,U+28dfb,U+28e1f,U+28e36,U+28e89,U+28e99,U+28eeb,U+28f32,U+28ff8,U+292a0"
    }
  },
  {
    uri: Xiaolai_Regular_a203b91dad570bf05a58c3c3ddb529bf_default,
    descriptors: {
      unicodeRange: "U+41df-4274,U+292b1,U+29490,U+295cf,U+2967f,U+296f0,U+29719,U+29750"
    }
  },
  {
    uri: Xiaolai_Regular_bd77e3c7f9e0b072d96af37f73d1aa32_default,
    descriptors: {
      unicodeRange: "U+408e-4131,U+285c8-285c9,U+28678,U+28695,U+286d7,U+286fa,U+287e0,U+28946,U+28949,U+2896b,U+28987-28988,U+289ba-289bb,U+28a1e,U+28a29,U+28a43,U+28a71,U+28a99,U+28acd,U+28add,U+28ae4,U+28b49,U+28bc1"
    }
  },
  {
    uri: Xiaolai_Regular_5a45d991244d4c7140217e1e5f5ca4f4_default,
    descriptors: {
      unicodeRange: "U+3e83-3f2f,U+27139,U+273da-273db,U+273fe,U+27410,U+27449,U+27614-27615,U+27631,U+27684,U+27693,U+2770e,U+27723,U+27752"
    }
  },
  {
    uri: Xiaolai_Regular_f56414bf9bced67990def8660e306759_default,
    descriptors: {
      unicodeRange: "U+3f30-3fdb,U+27985,U+27a84,U+27bb3,U+27bbe,U+27bc7,U+27cb8,U+27da0,U+27e10"
    }
  },
  {
    uri: Xiaolai_Regular_583d166e56ba0de4b77eabb47ef67839_default,
    descriptors: {
      unicodeRange: "U+3fdc-408d,U+27fb7,U+27ff9,U+2808a,U+280bb,U+2815d,U+28277,U+28282,U+282e2,U+282f3,U+283cd,U+28408,U+2840c,U+28455,U+28468,U+2856b"
    }
  },
  {
    uri: Xiaolai_Regular_7f855356ab893b0d2b9c1c83b8116f0e_default,
    descriptors: {
      unicodeRange: "U+3dd2-3e82,U+26a58,U+26a8c,U+26ab7,U+26aff,U+26b5c,U+26c21,U+26c29,U+26c73,U+26cdd,U+26e40,U+26e65,U+26f94,U+26ff6-26ff8,U+270f4,U+2710d"
    }
  },
  {
    uri: Xiaolai_Regular_b57aaedfd8ebdf3931f25119dc6a5eb2_default,
    descriptors: {
      unicodeRange: "U+3d34-3dd1,U+2648d,U+26676,U+2667e,U+266b0,U+2671d,U+2677c,U+267cc,U+268dd,U+268ea,U+26951,U+2696f,U+269dd,U+269fa,U+26a1e"
    }
  },
  {
    uri: Xiaolai_Regular_b6fd38ca30869792244804b04bc058da_default,
    descriptors: {
      unicodeRange: "U+3c76-3d33,U+25d0a,U+25da1,U+25e2e,U+25e56,U+25e62,U+25e65,U+25ec2,U+25ed7-25ed8,U+25ee8,U+25f23,U+25f5c,U+25fd4,U+25fe0,U+25ffb,U+2600c,U+26017,U+26060,U+260ed,U+26221,U+26270,U+26286,U+2634c,U+26402"
    }
  },
  {
    uri: Xiaolai_Regular_452225341522a7942f0f6aab1a5c91a3_default,
    descriptors: {
      unicodeRange: "U+3bda-3c75,U+25771,U+257a9,U+257b4,U+259c4,U+259d4,U+25ae3-25ae4,U+25af1,U+25bb2,U+25c14,U+25c4b,U+25c64"
    }
  },
  {
    uri: Xiaolai_Regular_866fa7613df6b3fd272bcfd4530c0bb9_default,
    descriptors: {
      unicodeRange: "U+3b25-3bd9,U+2504a,U+25055,U+25122,U+2512b,U+251a9,U+251cd,U+251e5,U+2521e,U+2524c,U+2542e,U+2548e,U+254d9,U+2550e,U+25532,U+25562,U+255a7-255a8"
    }
  },
  {
    uri: Xiaolai_Regular_52a84a22fd1369bffeaf21da2d6158dc_default,
    descriptors: {
      unicodeRange: "U+3a6b-3b24,U+24896,U+249db,U+24a4d,U+24a7d,U+24ac9,U+24b56,U+24b6f,U+24c16,U+24d14,U+24dea,U+24e0e,U+24e37,U+24e6a,U+24e8b,U+24eaa"
    }
  },
  {
    uri: Xiaolai_Regular_829615148e6357d826b9242eb7fbbd1e_default,
    descriptors: {
      unicodeRange: "U+39a9-3a6a,U+24096,U+24103,U+241ac,U+241c6,U+241fe,U+243bc,U+243f8,U+244d3,U+24629,U+246a5,U+247f1"
    }
  },
  {
    uri: Xiaolai_Regular_c99eda15fc26a2941579560f76c3a5cf_default,
    descriptors: {
      unicodeRange: "U+38e3-39a8,U+23a98,U+23c7f,U+23c97-23c98,U+23cfe,U+23d00,U+23d0e,U+23d40,U+23dd3,U+23df9-23dfa,U+23e23,U+23f7e"
    }
  },
  {
    uri: Xiaolai_Regular_395c35dd584b56b0789f58a0559beaf1_default,
    descriptors: {
      unicodeRange: "U+3760-382a,U+22ab8,U+22b43,U+22b46,U+22b4f-22b50,U+22ba6,U+22bca,U+22c1d,U+22c24,U+22c55,U+22d4c,U+22de1"
    }
  },
  {
    uri: Xiaolai_Regular_203b0e569e3b14aac86a003dc3fa523e_default,
    descriptors: {
      unicodeRange: "U+382b-38e2,U+231b6,U+231c3-231c4,U+231f5,U+23350,U+23372,U+233d0,U+233d2-233d3,U+233d5,U+233da,U+233df,U+233e4,U+2344a-2344b,U+23451,U+23465,U+234e4,U+2355a,U+23594,U+235c4,U+235cb,U+23638-2363a,U+23647,U+2370c,U+2371c,U+2373f,U+23763-23764,U+237e7,U+237ff,U+23824,U+2383d"
    }
  },
  {
    uri: Xiaolai_Regular_51a0e808bbc8361236ac521a119758a3_default,
    descriptors: {
      unicodeRange: "U+3698-375f,U+22218,U+2231e,U+223ad,U+224dc,U+226f3,U+2285b,U+228ab,U+2298f"
    }
  },
  {
    uri: Xiaolai_Regular_6e092f71c1e634059ada0e52abadce67_default,
    descriptors: {
      unicodeRange: "U+35e6-3697,U+21c56,U+21cde,U+21d2d,U+21d45,U+21d62,U+21d78,U+21d92,U+21d9c,U+21da1,U+21db7,U+21de0,U+21e33-21e34,U+21f1e,U+21f76,U+21ffa,U+2217b"
    }
  },
  {
    uri: Xiaolai_Regular_0f7fb1e0d5015bb1371343153ecf7ce3_default,
    descriptors: {
      unicodeRange: "U+3444-350e,U+20ad3,U+20b1d,U+20b9f,U+20c41,U+20cbf,U+20cd0,U+20d45,U+20de1,U+20e64,U+20e6d,U+20e95,U+20e9d,U+20ea2,U+20f5f,U+210c1,U+21201,U+2123d,U+21255,U+21274,U+2127b"
    }
  },
  {
    uri: Xiaolai_Regular_d0cf73942fea1c74edbdf0b3011f4656_default,
    descriptors: {
      unicodeRange: "U+350f-35e5,U+212d7,U+212e4,U+212fd,U+2131b,U+21336,U+21344,U+2139a,U+213c4,U+21413,U+2146d-2146e,U+215d7,U+21647,U+216b4,U+21706,U+21742,U+218bd,U+219c3"
    }
  },
  {
    uri: Xiaolai_Regular_968cffdc8ee679da094e77ebf50f58ef_default,
    descriptors: {
      unicodeRange: "U+336d-3443,U+2032b,U+20371,U+20381,U+203f9,U+2044a,U+20509,U+20547,U+205d6,U+20628,U+20676,U+2074f,U+20779,U+20807,U+2083a,U+20895,U+208b9,U+2097c,U+2099d"
    }
  },
  {
    uri: Xiaolai_Regular_7a07ddc0f0c0f5f4a9bad6ee3dda66b5_default,
    descriptors: {
      unicodeRange: "U+328b-336c,U+2000b,U+20089,U+200a2,U+200a4,U+20164,U+201a2,U+20213"
    }
  },
  {
    uri: Xiaolai_Regular_ec181b795ac1fb5a50d700b6e996d745_default,
    descriptors: {
      unicodeRange: "U+3192-31ba,U+31c0-31e3,U+31f0-321e,U+3220-328a,U+1f250-1f251"
    }
  },
  {
    uri: Xiaolai_Regular_cfb211578629b7e8153b37240de6a9d5_default,
    descriptors: {
      unicodeRange: "U+2f74-2fd5,U+3000,U+3003-3007,U+3012-3013,U+3018-301c,U+3020-3029,U+302f-303f,U+3041-3096,U+3099-30a1"
    }
  },
  {
    uri: Xiaolai_Regular_59e9ff77b0efaf684bc09274fb6908c9_default,
    descriptors: {
      unicodeRange: "U+30a2-30ff,U+3105-312f,U+3131-318e,U+3190-3191"
    }
  },
  {
    uri: Xiaolai_Regular_2adbc89c11e65905393d3dfc468b9d5b_default,
    descriptors: {
      unicodeRange: "U+4e36,U+4ea0,U+4f74,U+4f91,U+4f94,U+4fc5,U+507e,U+50ed,U+5182,U+51f5,U+525e,U+5282,U+52f9,U+5326,U+537a,U+53a3,U+5423,U+5459,U+54b4,U+54d9,U+55c9,U+57f4,U+580b,U+5902,U+5925,U+5a08,U+5ab5,U+5b84,U+5be4,U+5c22,U+5cb5,U+5cbd,U+5d3e,U+5e31,U+5e5e,U+5e80,U+5ee8,U+5f82,U+5fc9,U+5fed,U+600a,U+605d,U+609b,U+609d,U+60dd,U+6243,U+6322,U+63ce,U+640c,U+643f,U+6445,U+64d7,U+6534,U+6549,U+656b,U+6603,U+674c,U+680a,U+6864,U+69d4,U+6a65,U+6c2a,U+6c46,U+6c5c,U+6d0e,U+6d48,U+6e2b,U+6eb2,U+6eb7,U+6f89,U+706c,U+70b1,U+7113,U+71d4,U+727f,U+72f3,U+7303,U+7321,U+736c,U+736f,U+74a9,U+74de,U+750d,U+7513,U+7592,U+75c4,U+7605,U+760a,U+761b,U+7625,U+762d,U+7643,U+7707,U+7747,U+77b5,U+7839,U+784e,U+78a5,U+7924,U+793b,U+798a,U+7a03,U+7a06,U+7a78,U+7a80,U+7aad,U+7ba8,U+7be5,U+7cc8,U+7ec1,U+7f0b,U+7f0f,U+7f12,U+7f68,U+7f9d,U+8025,U+809c,U+80ad,U+80b7,U+80e8,U+811e,U+8204,U+8223,U+822d,U+823b,U+824b,U+825a,U+827d,U+827f,U+828f,U+82c8,U+8307,U+831b,U+8347,U+837d,U+839b,U+83a9,U+83f9,U+84b9,U+8579,U+864d,U+867f,U+86b0,U+86d1,U+86d8,U+86f2,U+8764,U+8770,U+8788,U+8797,U+87ac-87ad,U+87b5,U+881b,U+8844,U+88bc,U+88fc,U+8930,U+89cf,U+89d6,U+8ba0,U+8bd4,U+8c02,U+8c2b,U+8c85,U+8e23,U+8f81-8f82,U+8fd5,U+90b6,U+90db,U+914e,U+9164,U+91ad,U+943e,U+94b7-94b8,U+94eb,U+950d,U+9514,U+9516,U+9518,U+9529,U+9538,U+953f,U+954e,U+955f,U+95fc,U+9667,U+96b3,U+9792,U+97b2,U+98a1,U+9969,U+9987,U+9998,U+9a80,U+9a92,U+9a96,U+9adf,U+9cb4,U+9cbd,U+9cd0,U+9cd4,U+9e31,U+9e3a,U+9e71,U+9ee5,U+9eea,U+9ef9,U+9fa0"
    }
  },
  {
    uri: Xiaolai_Regular_70e811fd7994e61f408c923de6ddd078_default,
    descriptors: {
      unicodeRange: "U+4e0c,U+4e28,U+4e3f,U+4ec2,U+502e,U+50ba,U+5155,U+5181,U+522d,U+5281,U+5290,U+5369,U+53b6,U+54d5,U+54dc,U+54ff,U+552a,U+553c,U+5588,U+55b5,U+5686,U+570a,U+5776,U+5786,U+57a4,U+5820,U+5865,U+58bc,U+5b32,U+5b65,U+5c1c,U+5c66,U+5c6e,U+5c8d,U+5ddb,U+5f2a,U+5f50,U+5f61,U+6067,U+614a,U+615d,U+619d,U+61d4,U+620b,U+6224-6225,U+6343,U+63ad,U+63f2,U+640b,U+6420,U+6434,U+6496,U+64d0,U+6509,U+652e,U+67a8,U+6833,U+6844,U+684a,U+6920,U+6957,U+6971,U+6a8e,U+6a91,U+6aa0,U+6b43,U+6bea,U+6bf5,U+6c15,U+6cd0,U+6ee0,U+6f24,U+6f2d,U+70c0,U+721d,U+728b,U+72c3,U+72e8,U+730a,U+7338-7339,U+734d,U+746d,U+752f,U+754e,U+770d,U+7735,U+778d,U+77a2,U+77e7,U+7857,U+786d,U+78c9,U+78f2,U+791e,U+7953,U+7b58,U+7b9d,U+7bda,U+7cd7,U+7f32-7f33,U+8022,U+8028-8029,U+8035,U+804d,U+8080,U+80c2,U+80e9,U+80ec,U+80f2,U+810e,U+8221,U+8274,U+82b0,U+82e0,U+83b0,U+8487-8488,U+848e,U+84cd,U+84d0,U+8539,U+857a,U+85a8,U+85b7,U+867c,U+871e,U+8723,U+877e,U+878b,U+8793,U+8803,U+88d2,U+8966,U+89cc,U+89eb,U+8b26,U+8c8a,U+8c98,U+8d33,U+8d47,U+8d55,U+8dbc,U+8e40,U+8e94,U+8f77,U+8f79,U+9058,U+91a2,U+91b5,U+928e,U+9494,U+94b6,U+94de,U+94f4,U+94f9,U+950a,U+950e,U+951e,U+952b,U+953c,U+953e,U+9544,U+9561,U+9564,U+9569,U+95f6,U+9603,U+960d,U+963d,U+9674,U+9794,U+97ab,U+98a5,U+9a9f,U+9ab1,U+9ad1,U+9b0f,U+9b2f,U+9c92,U+9c95,U+9cba,U+9cbc,U+9cc6,U+9ccb,U+9cd8,U+9e32,U+9e38,U+9e5b,U+9e7e,U+9eb4,U+9efb-9efc,U+9f3d"
    }
  },
  {
    uri: Xiaolai_Regular_c4a687ac4f0c2766eefc9f77ed99cddf_default,
    descriptors: {
      unicodeRange: "U+2e3b,U+2e80-2e99,U+2e9b-2ef3,U+2f00-2f73,U+ffffd"
    }
  },
  {
    uri: Xiaolai_Regular_51502f1206be09c565f1547c406e9558_default,
    descriptors: {
      unicodeRange: "U+4e69,U+4f1b,U+4f67,U+4f7e,U+4fdc,U+50e6,U+5196,U+5202,U+5233,U+523f,U+52a2,U+536e,U+5476,U+54ad,U+54cf,U+5537,U+561e,U+56dd,U+56df,U+5709,U+572c,U+57cf,U+57f8,U+580d,U+5881,U+589a,U+5941,U+59b2,U+5c25,U+5d24,U+5d74,U+5e42,U+5e8b,U+5eb3,U+5ed2,U+5fad,U+6003,U+603c,U+6083,U+6100,U+6126,U+6206,U+62ca,U+638e,U+63b4,U+6426,U+646d,U+6535,U+65c4,U+66db,U+6715,U+6769,U+6798,U+67c3,U+6861,U+698d,U+69ca,U+69ed,U+69f2,U+69ff,U+6a18,U+6b39,U+6bb3,U+6c0d,U+6cb2,U+6cd6,U+6cf7,U+6cfa,U+6d33,U+6e16,U+6e53-6e54,U+6ebb,U+6fb6,U+709d,U+72ad,U+72f7,U+72fb,U+7313,U+739f,U+74ba,U+754b,U+755b,U+758b,U+75ac,U+75d6,U+7617,U+7635,U+7640,U+76a4,U+76b2,U+775a,U+77bd,U+781f,U+79b3,U+7b2b,U+7b31,U+7b3e,U+7b6e,U+7b9c,U+7c0b,U+7c9e,U+7cc1,U+7ce8,U+7ea5,U+7f21,U+7f27,U+7f74,U+7fb0,U+8031,U+8071,U+80ea,U+8114,U+8160,U+81a6,U+81c1,U+829f,U+82a4,U+82fb,U+831a,U+8333,U+836c,U+83b6,U+83f8,U+8411,U+841c,U+8489,U+848c,U+85a4,U+8627,U+8629,U+866e,U+86b5,U+872e,U+8731,U+877b,U+877d,U+87ea,U+8813,U+8816,U+8864,U+88ce,U+88e5,U+897b,U+89cb,U+89f3,U+8bfc,U+8c35,U+8d46,U+8d4d,U+8dba,U+8e3a,U+8f75,U+8f7e,U+8fd3,U+9161,U+9179,U+917e,U+91a3,U+94ac,U+94d7,U+94e5,U+952a,U+952c,U+9545,U+9565,U+9568,U+956a,U+961d,U+96e0,U+972a,U+9730,U+989f,U+98e7,U+990d,U+9967,U+9993,U+9aa3,U+9ac0,U+9ae1,U+9aeb,U+9af9,U+9c86,U+9c8b,U+9ca0-9ca1,U+9ca3,U+9ce2,U+9e48,U+9e6a,U+9e87,U+9ee2,U+9ee9,U+9f17,U+9f19,U+9f2c,U+9f80"
    }
  },
  {
    uri: Xiaolai_Regular_1fdc0c67ed57263a80fd108c1f6ccf24_default,
    descriptors: {
      unicodeRange: "U+4ef3,U+50d6,U+50ec,U+51ab,U+51b1,U+52d6,U+54a9,U+54da,U+55be,U+55cd,U+564d,U+572f,U+574c,U+576b,U+57d8,U+57fd,U+5844,U+59d2,U+5ae0,U+5b16,U+5b37,U+5b5b,U+5b80,U+5d1e,U+5d6b,U+5efe,U+5f11,U+5f56,U+5f58,U+5f73,U+5f8c,U+5fc4,U+5fe4,U+602b,U+6106,U+610d,U+63de,U+63f8,U+641b,U+64e4,U+6634,U+676a,U+67b5,U+681d,U+6883,U+69b1,U+69e0,U+6b37,U+6b9b,U+6d7c,U+6ed7,U+6f36,U+6f72,U+6f8c,U+7035,U+7039,U+7173,U+7178,U+7228,U+728f,U+72b4,U+72ef,U+72f4,U+7331,U+7481,U+74e0,U+7540,U+75c3,U+75e6,U+763c,U+764d,U+76cd,U+7704,U+7743,U+7780,U+7847,U+786a,U+78b9,U+7962,U+7a02,U+7aac,U+7ab3,U+7b0a,U+7b4c,U+7b7b,U+7bfc,U+7c0f,U+7c16,U+7c40,U+7ca2,U+7cc7,U+7cf8,U+7d77,U+7e3b,U+7ea1,U+7ea9,U+7ef2,U+7f02,U+7f07,U+7f0c,U+7f23,U+7f2f,U+7fbc,U+8016,U+8020,U+812c,U+8136,U+8182,U+822f,U+8233,U+825f,U+8268,U+8284,U+8288,U+8291,U+8308,U+8311,U+835b,U+836d,U+83dd,U+8406,U+840f,U+845c,U+84b4,U+84e3,U+850c,U+855e,U+863c,U+86ba,U+86c4,U+86de,U+86f1,U+873e,U+87bd,U+87db,U+880a,U+883c,U+887f,U+88f0,U+890a,U+892b,U+895e,U+89ef,U+8a48,U+8bdc,U+8c18,U+8c33,U+8c94,U+8db1,U+8dcf,U+8dd6,U+8de3,U+8e6f,U+8e90,U+8f7a,U+8fb6,U+902d,U+90be,U+91af,U+936a,U+948b,U+94d8,U+9513,U+953a,U+956c,U+963c,U+9654,U+966c,U+9688,U+97b4,U+996b,U+9a75,U+9a7a,U+9aba,U+9aed,U+9b08,U+9b43,U+9c8e,U+9c94,U+9c9a,U+9e2b,U+9e36,U+9e4b,U+9e4e,U+9e55,U+9e63,U+9e68-9e69,U+9ebd,U+9ec9,U+9f0d,U+9f37,U+9f51"
    }
  },
  {
    uri: Xiaolai_Regular_e11567fd2accf9957cd0d3c2be937d87_default,
    descriptors: {
      unicodeRange: "U+50a7,U+5240,U+5261,U+52ac,U+531a,U+5363,U+5432,U+5452,U+5456,U+5472,U+5478,U+553f,U+5575,U+5581,U+55cc,U+55fe,U+5601,U+572e,U+57d2,U+57ef,U+581e,U+5924,U+5981,U+5997,U+59a3,U+5aaa,U+5ab8,U+5b34,U+5d5d,U+5def,U+5e11,U+5e91,U+5ed1,U+5ef4,U+5f40,U+600d,U+6019,U+601b,U+605a,U+6092,U+60ab,U+6217,U+623d,U+6369,U+65d2,U+6661,U+670a,U+6753,U+67a7,U+6855,U+68f9,U+6939,U+696e,U+6980,U+6a7c,U+6aab,U+6b82,U+6bf3,U+6bf9,U+6c05,U+6c19-6c1a,U+6ca9,U+6cf6,U+6d1a,U+6dab,U+6f74,U+7085,U+7198,U+71b5,U+7256,U+725d,U+727e,U+72fa,U+7322,U+738e,U+73e5,U+750f,U+755a,U+7594,U+75b3,U+760c,U+7615,U+7630,U+763f,U+77ec,U+7817,U+78a1,U+78d9,U+7905,U+7b2a,U+7b2e,U+7b62,U+7b85,U+7bcc,U+7bea,U+7c26,U+7c74,U+7c9c-7c9d,U+7e47,U+7e9b,U+7e9f,U+7ee0,U+7ee8,U+7ef1,U+7f01,U+7f11,U+7f17,U+7f36,U+7f7e,U+7fee,U+802a,U+80cd,U+8112,U+8169,U+8234,U+8279,U+8298,U+82ca,U+82d8,U+82e1,U+83c0,U+83d4,U+83df,U+8401,U+8451,U+845a,U+8476,U+8478,U+84ba,U+84bd,U+84e0,U+851f,U+8548,U+8556,U+8585,U+868d,U+86e9,U+86f4,U+86f8,U+8765,U+8785,U+87ab,U+87ee,U+8832,U+8872,U+88b7,U+88e2-88e3,U+89da,U+8bce,U+8bd3,U+8bd6,U+8bf9,U+8c16,U+8c73,U+8d5c,U+8dde,U+8f6d,U+8f94,U+8fe8,U+9011,U+915e,U+9185,U+918c,U+94ab,U+94d1,U+94f3,U+9515,U+951d,U+9558,U+9567,U+96ce,U+96e9,U+9785,U+9878,U+987c,U+9883,U+98d1,U+9954,U+9963,U+9a93,U+9ac1,U+9acc,U+9b1f,U+9b49,U+9b4d,U+9b51,U+9ca7,U+9cae,U+9cce,U+9cd3,U+9e37,U+9e39,U+9e41,U+9e46,U+9f22,U+9f2f,U+9f39,U+9f85"
    }
  },
  {
    uri: Xiaolai_Regular_20cc1bbf50e7efb442756cb605672c1f_default,
    descriptors: {
      unicodeRange: "U+4e5c,U+4edf,U+4f25,U+4f32,U+4f5e,U+4f76,U+4faa,U+4fe6,U+5028,U+5048,U+5250,U+535f,U+538d,U+53c1,U+5412,U+5443,U+54d4,U+54dd,U+5541,U+5550,U+5577,U+55dd,U+55f3,U+560f,U+562c,U+5657-5658,U+5664,U+56af,U+575c,U+577c,U+57b2,U+57da,U+5800,U+5a62,U+5aeb,U+5c3b,U+5ca3,U+5d26,U+5d9d,U+5f01,U+5fb5,U+5fdd,U+5ff8,U+6029,U+6041,U+6079,U+60b1,U+6222,U+629f,U+6332,U+63bc,U+63e0,U+6485,U+65ab,U+65c3,U+65c6,U+668c,U+669d,U+66be,U+67fd,U+6800,U+68fc,U+690b,U+6924,U+6978,U+69a7,U+6a3e,U+6a50,U+6a5b,U+6a97,U+6b24,U+6b8d,U+6baa,U+6c10,U+6c54,U+6ceb,U+6d04,U+6d4d,U+6eb1,U+6ebd,U+7110,U+71b3,U+71f9,U+7230,U+728d,U+7292,U+72b8,U+72d2,U+7360,U+73a2,U+7511,U+75a0,U+75c8,U+779f,U+7826,U+7877,U+7a39,U+7aa8,U+7ae6,U+7b04,U+7b0f,U+7baa,U+7bac,U+7c1f,U+7ccd,U+7ecb,U+7ed4,U+7ed7,U+7efb,U+7f0d,U+7f5f,U+7faf,U+7fd5,U+7fe5,U+8027,U+80bc,U+80dd,U+80fc,U+8132,U+815a,U+8167,U+816d,U+81ca,U+8228,U+82a1,U+82a9,U+82ab,U+82cc,U+8351,U+8368,U+83b8,U+83d8,U+83ea,U+83f0,U+8497,U+84c1,U+858f,U+85ff,U+867b,U+86a8-86a9,U+870a,U+8722,U+876e,U+877c,U+87e5,U+8888,U+88df,U+8919,U+8bcc,U+8bdf,U+8be8,U+8bee,U+8c20,U+8c2f,U+8d36,U+8df8,U+8e05,U+8e2f,U+8f9a,U+9021,U+908b,U+90b4,U+90ba,U+90d0,U+90eb,U+90fe,U+91aa,U+933e,U+9486-9487,U+948d,U+9490,U+94ad,U+94bd,U+94d6,U+94d9,U+9507,U+9546,U+955e,U+956b,U+95e9,U+9604,U+960b,U+9612,U+9615,U+9617,U+96b9,U+989a-989b,U+989e,U+9a78,U+9a7d,U+9aa0,U+9aa2,U+9ac2,U+9b23,U+9b3b,U+9c82,U+9cca,U+9cd9,U+9e28,U+9e5a,U+9e5e,U+9e6c,U+9efe,U+9f0b"
    }
  },
  {
    uri: Xiaolai_Regular_5d2898fbc097a7e24c6f38d80587621e_default,
    descriptors: {
      unicodeRange: "U+4e47,U+4e8d,U+4f65,U+4f89,U+50ee,U+520e,U+5416,U+5454,U+54bb,U+54c2,U+54d3,U+54de,U+5591,U+55e5,U+560c,U+566b,U+5769,U+578c,U+5793,U+57e4,U+5889,U+593c,U+59ab,U+5ad4,U+5ad8,U+5af1,U+5b53,U+5ba5,U+5c59,U+5c63,U+5d5b,U+5e0f,U+5e14,U+5edb,U+5fbc,U+6004,U+60ad,U+610e,U+61b7,U+624c,U+634c,U+647a,U+64ba,U+65f0,U+6600,U+66f7,U+67e2,U+67f0,U+680c,U+686b,U+6874,U+691f,U+6989,U+6a17,U+6b81,U+6b84,U+6c06-6c07,U+6c3d,U+6d07,U+6d27,U+6d2b,U+6d91,U+6e6b,U+6e8f,U+6fde,U+70bb,U+723b,U+726e,U+72b0,U+72ce,U+72f2,U+7301,U+731e,U+737e,U+7477,U+748e,U+74ff,U+7633,U+7654,U+771a,U+7726,U+7765,U+7768,U+781c,U+7829,U+78d4,U+7913,U+7957,U+79d5,U+79eb,U+7a70,U+7a86,U+7b25,U+7b38,U+7b47,U+7b72,U+7ba6-7ba7,U+7dae,U+7ee1,U+7efe,U+7f26,U+7f31,U+7f35,U+801c,U+8043,U+809f,U+80ab,U+80d7,U+8118,U+8188,U+81cc,U+823e,U+8244,U+824f,U+82b4,U+82c1,U+82e4,U+82f4,U+8306,U+833a,U+835c,U+839c,U+83b3,U+83bc,U+846d,U+867a,U+868b,U+8734,U+87ca,U+886e,U+887e,U+88a2,U+88c9,U+8921,U+8bb5,U+8bf3,U+8c04,U+8c17,U+8c1d,U+8c25,U+8c36,U+8c55,U+8c78,U+8d3d,U+8d40,U+8d59,U+8d67,U+8d91,U+8dbf,U+8deb-8dec,U+8dfd,U+8e14,U+8e41,U+8f8e,U+900b,U+9044,U+9062,U+90cf,U+9123,U+9146,U+9162,U+9172,U+918d,U+9190,U+92c8,U+93ca,U+948c,U+94aa,U+94b2,U+94c8,U+94ca,U+94d5,U+94df,U+94e9-94ea,U+94f7,U+94fc-94fd,U+951b,U+954f,U+9554,U+9559,U+9566,U+9571-9572,U+95f1,U+9608,U+960f,U+97af,U+988f,U+98d5,U+992e,U+9955,U+9ab0,U+9b32,U+9c90,U+9c9e,U+9ca5,U+9ca9,U+9cad,U+9cb1,U+9cc3,U+9e47,U+9ee7,U+9f87"
    }
  },
  {
    uri: Xiaolai_Regular_ac9ceb44437becc3e9c4dbfebab7fc2d_default,
    descriptors: {
      unicodeRange: "U+4e93,U+4ec4,U+4ef5,U+4f27,U+4f7b,U+4fe3,U+5080,U+5121,U+51eb,U+5208,U+52f0,U+53f5,U+5453,U+5466,U+54a6,U+54bf,U+54d0,U+5533,U+5549,U+5556,U+556d,U+558f,U+55f2,U+55f5,U+5627,U+567b,U+56d4,U+571c,U+5739,U+57b4,U+5807,U+58c5,U+59a4,U+59af,U+59d8,U+5a09,U+5a0c,U+5a4a,U+5ad2,U+5b6c,U+5ca2,U+5cac,U+5d03,U+5d6c,U+5db7,U+5ebe,U+5f2d,U+5fea,U+6042,U+6120,U+6175,U+6221,U+623e,U+6339,U+638a,U+643d,U+64b8,U+64e2,U+66e9,U+67b3,U+67c1,U+67d2,U+6832,U+6877,U+68f0,U+6934,U+6966,U+6987,U+6998,U+69c1,U+69ce,U+6a3d,U+6a84,U+6aa9,U+6b87,U+6bd6,U+6c16,U+6c18,U+6cd4,U+6cee,U+6de0,U+6e0c,U+6ecf,U+6f4b,U+70b7,U+7168,U+72d9,U+7352,U+73b3,U+73d0,U+7441,U+74d2,U+75a5,U+75e7-75e8,U+7610,U+7619,U+765e,U+772d,U+7812,U+782c,U+784c,U+7850,U+7856,U+789b,U+78f4,U+7a51,U+7b15,U+7b1e,U+7b24,U+7b5a,U+7bb8,U+7bc1,U+7bd9,U+7ed0,U+7ee6,U+7efa,U+7f1b,U+7f1f,U+7f22,U+7f45,U+7f71,U+7fa7,U+7fbf,U+7ff3,U+8052,U+80b1,U+80db,U+80f4,U+81bb,U+81ec,U+8202,U+8210,U+8249,U+828a,U+828e,U+82e3,U+8315,U+8369,U+8378,U+83a8,U+83aa,U+83b4,U+83e1,U+84fc,U+8538,U+853b,U+859c,U+85ae,U+86b4,U+86c9,U+86cf,U+8725,U+879f,U+87b3,U+887d,U+88fe,U+8a8a,U+8ba7,U+8c07,U+8c14,U+8c30,U+8c47,U+8db5,U+8dd7,U+8e1f,U+8e69,U+8e70,U+8e85,U+8f78,U+8f87,U+8f8b,U+8f8f,U+90c4,U+9143,U+917d,U+948f,U+94cd,U+94d2,U+94ef,U+954a,U+9609-960a,U+96d2,U+9708,U+9765,U+97ea,U+9880,U+98a7,U+996c,U+9980,U+9991,U+9a88,U+9ab6,U+9afb,U+9b47,U+9c87,U+9c9b,U+9cb5,U+9cc7,U+9e2c,U+9e42,U+9e58,U+9ecd,U+9ecf,U+9f8a,U+9f8c"
    }
  },
  {
    uri: Xiaolai_Regular_c16ed9740b85badf16e86ea782a3062f_default,
    descriptors: {
      unicodeRange: "U+4ebb,U+4edd,U+4fa9,U+502c,U+50a5,U+51c7,U+51fc,U+523d,U+5241,U+530f,U+5464,U+549d,U+54a3,U+5514,U+5527,U+555c,U+556e,U+5576,U+55b1,U+55b9,U+55eb,U+5624,U+564c,U+5671,U+5685,U+568f,U+56d7,U+56e1,U+57a1,U+57d9,U+5942,U+5a67,U+5c50,U+5c7a,U+5c98,U+5d06,U+5d27,U+5d6f,U+5df3,U+5dfd,U+5e19,U+5ea0,U+5eb9,U+5eea,U+5ffe,U+600f,U+606b,U+6215,U+622c,U+6266,U+62bb,U+62bf,U+6308,U+6387,U+63b8,U+63c4,U+63c6,U+63f6,U+6441,U+6555,U+659b,U+6677,U+66a7,U+6775,U+678b,U+679e,U+6840,U+6849,U+6860,U+68c2,U+6910,U+6a28,U+6a2f,U+6a79,U+6b92-6b93,U+6bc2,U+6bfd,U+6c29,U+6c32,U+6c86,U+6cc5,U+6d0c,U+6d60,U+6da0,U+6ddd,U+6e86,U+6ed3,U+6edf,U+6fb9,U+6fd1,U+6fef,U+7023,U+7080,U+70ca,U+712f,U+7145,U+7284,U+732c,U+73c8,U+73d9,U+740a,U+7457,U+7596,U+759d,U+75a3,U+75d8,U+75e3-75e4,U+75ff,U+7622,U+7688,U+76b4,U+76e5,U+7818,U+7887,U+789a,U+78b2,U+7b08,U+7b33,U+7c2a,U+7ccc,U+7ea8,U+7ec0,U+7fe6,U+8012,U+8084,U+8093,U+80e4,U+80ef,U+8297,U+82a8,U+82be,U+8331,U+8366,U+83c5,U+83fd,U+8473,U+84a1,U+84ca,U+84d1,U+857b,U+85c1,U+85d3,U+8605,U+8662,U+86aa,U+86b1,U+86d4,U+86ed,U+86f3,U+8709,U+8748,U+874c,U+8763,U+89c7,U+89de,U+89e5,U+8a3e,U+8ba6,U+8c00,U+8c21,U+8c49,U+8c7a,U+8d30,U+8df9,U+8e51,U+8e59,U+8f6b,U+8f73,U+8ff3,U+9016,U+9026,U+902f,U+9099,U+909b,U+90c7,U+914a,U+91ae,U+91ba,U+9495,U+94a3,U+94af,U+94ba,U+94bf,U+94cc,U+94e1,U+94f0,U+9531,U+955d,U+95f3,U+9697,U+96bc,U+975b,U+977c,U+98a2,U+998a,U+9994-9995,U+9a9b,U+9ab7,U+9ac5,U+9c91,U+9ccf,U+9cd5,U+9e29,U+9edc,U+9edf,U+9f83,U+9f88-9f89"
    }
  },
  {
    uri: Xiaolai_Regular_aa0d470430e6391eca720c7cfa44446f_default,
    descriptors: {
      unicodeRange: "U+4ee8,U+4f22,U+4f43,U+4f57,U+4f5d,U+4f6f,U+4ff8,U+502d,U+507b,U+5345,U+53df,U+53fb,U+544b,U+5482,U+54a7,U+54cc,U+550f,U+5544,U+5555,U+5594,U+55e8,U+55ec,U+55ef,U+564e,U+56f9,U+5704,U+576d,U+5785,U+57ad,U+5914,U+5958,U+599e,U+59aa,U+59be,U+5a06,U+5abe,U+5ae1,U+5b40,U+5bee,U+5cbf,U+5cc4,U+5ccb,U+5d47,U+603f,U+6078,U+607d,U+607f,U+608c,U+609a,U+60fa,U+61ff,U+621b,U+622e,U+626a,U+6371,U+63ae,U+63cd,U+63d6,U+6410,U+6414,U+6421,U+6448,U+64d8,U+6710,U+6748,U+6772,U+680e,U+6954,U+69ab,U+6c68,U+6c8f,U+6ca4,U+6d2e,U+6e4e,U+6e98,U+6fe0,U+7094,U+70e9,U+7116,U+7119,U+723f,U+73c9,U+74e4,U+753e,U+7548,U+75bd,U+75cd,U+7618,U+7634,U+76c5,U+76f1,U+7708,U+7719,U+777e,U+7791,U+77b3,U+7823,U+7827,U+7830,U+7889,U+7893,U+7949,U+795c,U+79e3,U+7a14,U+7a88,U+7a95,U+7aa0,U+7afd,U+7b90,U+7bd1,U+7bfe,U+7da6,U+7ec2,U+7eef,U+7f03-7f04,U+7f08,U+7f58,U+7f61,U+7f9f,U+8174,U+8200,U+828d,U+82c4,U+82d5,U+82dc,U+82f7,U+832d,U+835a,U+840b,U+8438,U+852b,U+869d,U+86ac,U+86d0,U+86f0,U+8782,U+87a8,U+87d1-87d2,U+87e0,U+8839,U+8913,U+891b,U+8934,U+8941,U+89ca,U+89ce,U+8a07,U+8ba3,U+8bc5,U+8bcb,U+8bdb,U+8c11,U+8c15,U+8c29,U+8c32,U+8dc4,U+8dce,U+8ddb,U+8dfa,U+8e09,U+8e1d,U+8e39,U+8e42,U+8e49,U+8e4b,U+8e8f,U+8f71-8f72,U+9004,U+9036,U+9097,U+90dc,U+90e2,U+90e6,U+90ef,U+9104,U+919a,U+91b4,U+938f,U+9497,U+950f,U+9557,U+9562-9563,U+9573,U+9606,U+9649,U+972d,U+973e,U+97a3,U+97eb,U+988c,U+9894,U+98a6,U+9974,U+9977,U+997d,U+9a90,U+9a9d,U+9aef,U+9ca2,U+9ccd,U+9cdf,U+9e20,U+9e4c,U+9e6b,U+9f3e"
    }
  },
  {
    uri: Xiaolai_Regular_f2b54d4e7be0eaefe1c2c56836fa5368_default,
    descriptors: {
      unicodeRange: "U+4ede,U+4ee1,U+4eeb,U+4fda,U+4ffe,U+5025,U+506c,U+50f3,U+5106,U+520d,U+525c,U+52ad,U+530d,U+5310,U+539d,U+53a9,U+53fc,U+5421,U+5477,U+54e7,U+551b,U+5530,U+557e,U+5599,U+55c4,U+55d1,U+55d4,U+55df,U+55e4,U+55ea,U+5623,U+562d,U+5654,U+56eb,U+56f5,U+57a7,U+57d5,U+57dd,U+584d,U+5880,U+58ec,U+59dd,U+5a32,U+5a55,U+5a75,U+5b51,U+5b71,U+5b73,U+5cd2,U+5ce4,U+5e5b,U+5e96,U+5fd2,U+607b,U+61d1,U+634b,U+636d,U+63b3,U+63ff,U+64c0,U+661d,U+6657,U+66dc,U+67a5,U+6841,U+6867,U+6901,U+699b,U+6a47,U+6b46,U+6c21,U+6c24,U+6c35,U+6c4a,U+6c94,U+6ca3,U+6d39,U+6d63,U+6d6f,U+6d94,U+705e,U+71e7,U+726f,U+72cd,U+72de,U+72f0,U+7325,U+7350,U+7391,U+741a,U+757f,U+7583,U+75b1,U+75b4,U+75b8,U+75c2,U+75f1,U+766f,U+7699,U+7751,U+789c,U+7a17,U+7be6,U+7cb2,U+7ea3,U+7eb0,U+7ebe,U+7eeb,U+7f25,U+7f2c,U+7fb8,U+8026,U+8037,U+8153,U+8171,U+8191,U+8214,U+821b,U+8222,U+826e,U+82eb,U+830c,U+8314,U+8334,U+83d6,U+8418,U+843c,U+84ff,U+8564,U+8572,U+8616,U+866c,U+8693,U+86a3,U+86a7,U+86af,U+86b6,U+86c6,U+86ca,U+8708,U+870d,U+8759,U+8760,U+87af,U+87c6,U+8869,U+88c6,U+89d0,U+8b07,U+8baa-8bab,U+8bc2,U+8be4,U+8bf0,U+8c2a,U+8c62,U+8c89,U+8d49,U+8d6d,U+8d84,U+8d94,U+8db8,U+8dc6,U+8e2e,U+8e3d,U+8e47,U+8e7f,U+9005,U+9051,U+907d,U+9082,U+9088,U+90b0,U+90d3,U+9150,U+949c,U+94a4,U+94b9,U+94cb,U+94e0,U+9509,U+9512,U+951f,U+9534,U+9552-9553,U+965f,U+96b0,U+9791,U+9889,U+9990,U+9a9c,U+9aa7,U+9c88,U+9cb2-9cb3,U+9cb6-9cb7,U+9cc5,U+9cdc,U+9e22,U+9e2a,U+9e57,U+9e67,U+9e73,U+9e82,U+9eb8,U+9ee0,U+9f9b"
    }
  },
  {
    uri: Xiaolai_Regular_99a16ef6a64934d5781933dbd9c46b2e_default,
    descriptors: {
      unicodeRange: "U+4eb5,U+4f09,U+4f5a,U+4f8f,U+4fce,U+4fdf,U+4fea,U+4ff3,U+500c,U+500f,U+504e,U+5088,U+52be,U+5420,U+5457,U+5499,U+549b,U+54c6,U+54d2,U+558b,U+559f,U+55bd,U+55d6,U+565c,U+567c,U+568e,U+5768,U+577b,U+57a9,U+57ed,U+59f9,U+5a11,U+5a40,U+5ae6,U+5b6a,U+5b93,U+5bb8,U+5c15,U+5c99,U+5c9c,U+5cc1,U+5d2e,U+5d4b,U+5d99,U+5e54,U+5e61,U+5fcf-5fd1,U+6002,U+6006,U+6014,U+60af,U+60c6,U+60da,U+60f4,U+621f,U+62c8,U+631b,U+631e,U+63e9,U+64b5,U+655d,U+6619,U+6635,U+6641,U+67ad,U+67b0,U+67b7,U+67e9,U+684e,U+688f,U+695d,U+696b,U+69b7,U+6a58,U+6c26,U+6d35,U+6d43,U+6d9e,U+6dd9,U+6dec,U+6e11,U+6e6e,U+6e9f,U+6ec2,U+6ee2,U+6ef9,U+6f09,U+6f66,U+6f8d,U+6fc2,U+6fc9,U+729f,U+72c8,U+73de,U+7430,U+7566,U+7579,U+75c9,U+75e2,U+75fc,U+762a,U+7638,U+7678,U+76c2,U+76f9,U+778c,U+77cd,U+77dc,U+7800,U+781d,U+782d,U+783b-783c,U+78a3,U+78ec,U+7980,U+7a23,U+7b95,U+7bdd,U+7c0c,U+7c41,U+7c91,U+7cb3,U+7cc5,U+7ecc,U+7f19,U+7fca,U+8006,U+8069,U+807f,U+80bd,U+80ed,U+814b,U+8198,U+82cb,U+82d2,U+834f,U+8360,U+847a,U+84d6,U+84e5,U+8537,U+85d0,U+8671,U+86a4,U+86ce,U+86f9,U+8703,U+8707,U+8737,U+873b,U+8815,U+8936,U+8bc3,U+8bcf,U+8bd2,U+8bd8,U+8be9,U+8c0c,U+8c0f,U+8c4c,U+8d45,U+8d5d,U+8d73,U+8e31,U+8e6d,U+8e76,U+8fe4,U+9041,U+90d7,U+9169,U+92ae,U+94a1,U+94c4,U+94c9,U+94db,U+94e7,U+9503,U+9506,U+9517,U+9528,U+9537,U+9542,U+9549,U+95fe,U+9616,U+961a,U+96c9,U+96f3,U+9701,U+970e,U+9739,U+9753,U+9798,U+98d2-98d3,U+98d9-98da,U+9968,U+996f,U+9984,U+9997,U+9acb,U+9b03,U+9c85,U+9ca8,U+9cab,U+9e49,U+9e51,U+9e66,U+9f10"
    }
  },
  {
    uri: Xiaolai_Regular_c40533fdf4cc57177b12803598af7e59_default,
    descriptors: {
      unicodeRange: "U+4e15,U+4e1e,U+4e2b,U+4eb3,U+4ec9,U+4f0e,U+4f64,U+501c,U+50a9,U+510b,U+51a2,U+51bc,U+527d,U+52d0,U+53fd,U+5429,U+542e,U+5486,U+54af,U+5506,U+5511,U+5522,U+552c,U+556c,U+55b3,U+55d2,U+55e6,U+55fd,U+561f,U+5639,U+5659,U+5662,U+5693,U+572a,U+5892,U+598a,U+5992,U+59a9,U+5a20,U+5ae3,U+5b17,U+5b7d,U+5d34,U+5d3d,U+5d4a,U+5d82,U+5e1a-5e1b,U+5ea5,U+5f0b,U+5f77,U+5fd6,U+5fff,U+6026,U+6035,U+6063,U+60b4,U+60bb,U+60ee,U+612b,U+6194,U+61ca,U+61e6,U+61f5,U+620a,U+6248,U+62a1,U+62d7,U+6376,U+637b,U+652b,U+65bc,U+65cc,U+65ce,U+65d6,U+664c,U+665f,U+6666,U+6684,U+66b9,U+6773,U+6777,U+6787,U+67de,U+6845,U+693d,U+6994,U+6a35,U+6d54,U+6d5c,U+6d8e,U+6dd6,U+6eb4,U+6f2a,U+6f78,U+704f,U+70ec,U+7118,U+714a,U+7172,U+71b9,U+724d,U+728a,U+7337,U+733e,U+7396,U+73b7,U+73cf,U+7428,U+742c,U+742e,U+74ee,U+74f4,U+7525,U+753a,U+7572,U+75d4,U+765c,U+768e,U+7762,U+777d,U+77fd,U+7825,U+7837,U+78b4,U+795f,U+79ed,U+7a1e,U+7b06,U+7b20,U+7ba9,U+7bab,U+7c7c,U+7cbd,U+7cdc,U+7ec9,U+7ef6,U+7f30,U+7f42,U+7f44,U+7f54,U+7f94,U+8004,U+800b,U+8019,U+809b,U+80ae,U+80c4,U+80f1,U+8146,U+816e,U+817c,U+81c0,U+81fc,U+81fe,U+822b,U+830f,U+832f,U+8340,U+8365,U+8385,U+8392,U+83a0,U+8424,U+84af,U+869c,U+8713,U+8717-8718,U+87c0,U+87cb,U+87fe,U+8821,U+8902,U+89d1,U+8bb9,U+8c12,U+8d32,U+8d53,U+8df7,U+8e7c,U+8f7c,U+8f95,U+8fab,U+9052,U+905b,U+9095,U+909d,U+90c5,U+911e,U+9122,U+916a,U+919b,U+948e,U+9492,U+949a,U+94b5,U+94bc,U+94c6,U+94f1,U+9502,U+9511,U+9536,U+956f-9570,U+9602,U+9621,U+9631,U+998b,U+99a5,U+9a81,U+9a9e,U+9ebe,U+9f8b"
    }
  },
  {
    uri: Xiaolai_Regular_91ddb2969bf2d31ba02ad82998d1314c_default,
    descriptors: {
      unicodeRange: "U+4f2b,U+4f3d,U+4fac,U+5043,U+5055,U+5140,U+5156,U+51cb,U+5243,U+531d,U+536f,U+53a5,U+53ae,U+53f1,U+541d,U+5431,U+547b,U+5492,U+5494,U+54a4,U+54aa,U+54ce,U+54fd,U+5509,U+5520,U+553e,U+557b,U+55c5,U+55e1,U+55f7,U+5608,U+5636,U+563b,U+5773,U+57a0,U+5811,U+587e,U+58d5,U+59e3,U+5a29,U+5a6a,U+5a76,U+5a7a,U+5ac9,U+5b62,U+5b95,U+5c49,U+5c8c,U+5cab,U+5cb7,U+5d02,U+5d58,U+5e44,U+5e7a,U+5eff,U+5f29,U+5f89,U+5f9c,U+5fa8,U+6005,U+6043,U+60b8,U+60d8,U+60ec,U+60f0,U+6115,U+618e,U+630e,U+637a,U+6390,U+63ac,U+63b0,U+64de,U+6525,U+6538,U+65ee-65ef,U+6631,U+6636,U+6654,U+677c,U+67b8,U+67d8,U+683e,U+6886,U+68b5,U+692d,U+6963,U+6979,U+6988,U+6b59,U+6b9a,U+6c69,U+6c74,U+6cae,U+6ce0,U+6cef,U+6d95,U+6dc5,U+6dde,U+6de6,U+6dfc,U+6ea7,U+6f15,U+6f29,U+7096,U+70c3,U+7131,U+715c,U+7166,U+7266,U+7317,U+731d,U+7329,U+73e9,U+7425,U+7455,U+7490,U+74ef,U+7519,U+75b5,U+75b9,U+75de,U+7656,U+7663,U+7691,U+7729,U+77fe,U+783e,U+787c,U+795a,U+7a79,U+7abf,U+7b3a,U+7b4f,U+7b60,U+7b75,U+7b8d,U+7bb4,U+7bd3,U+7be1,U+7cbc,U+7edb,U+7f1c,U+7f8c,U+7fb2,U+7fb9,U+7fce,U+7ff1,U+810d,U+81c6,U+82a5,U+82aa,U+82de,U+8317,U+8343,U+835e,U+8364,U+836a,U+853a,U+8543,U+854a,U+8559,U+8568,U+85b0,U+85b9,U+864f,U+86e4,U+8715,U+8845,U+8884,U+88e8,U+88f1,U+8983,U+8be1,U+8c1f,U+8c27,U+8c5a,U+8c82,U+8d58,U+8dbe,U+8f98,U+9035,U+9074,U+90a1,U+9149,U+9157,U+93d6,U+949d,U+94c2,U+94e3-94e4,U+95eb,U+95f0,U+9611,U+9619,U+9642,U+968d,U+9706,U+970f,U+97ed,U+988a,U+9893,U+98e8,U+9a77,U+9a87,U+9aa1,U+9abc,U+9cdd,U+9e2f,U+9e33,U+9e44,U+9e5c,U+9e9d,U+9edd"
    }
  },
  {
    uri: Xiaolai_Regular_774d4f764a1299da5d28ec2f2ffe0d69_default,
    descriptors: {
      unicodeRange: "U+4f58,U+4f6c,U+4f70,U+4fd0,U+5014,U+51bd,U+524c,U+5315,U+5323,U+535e,U+540f,U+542d,U+545b,U+548e,U+549a,U+54ab,U+54fc,U+5567,U+556a,U+5600,U+5618,U+563f,U+5669,U+56f1,U+56ff,U+573b,U+574d,U+579b,U+57b8,U+57c2,U+586c,U+58f9,U+595a,U+598d,U+5993,U+5996,U+59d7,U+5b7a,U+5ba6,U+5c4e,U+5c96,U+5ce5,U+5eb6,U+5f08,U+5f99,U+602f,U+6059,U+606c,U+607a,U+60ed,U+61a9,U+620c,U+6249,U+62a8,U+62c4,U+62ed,U+62fd,U+6342,U+6345,U+6396,U+63a3,U+6402,U+6413,U+642a,U+6487,U+64a9,U+64ac,U+64ae,U+64b7,U+659f,U+65a1,U+667e,U+66f3,U+67e0,U+69db,U+69df,U+6aac,U+6b86,U+6c50,U+6c5e,U+6c76,U+6c85,U+6c8c,U+6cde,U+6d19,U+6d52,U+6da7,U+6db8,U+6e1a,U+6e25,U+6e4d,U+6e5f,U+6ec1,U+6f31,U+6f7a,U+6fa7,U+6fe1,U+701b,U+70ab,U+70f7,U+717d,U+71a8,U+7252,U+72c4,U+72e1,U+7315,U+736d,U+73ae,U+73c0,U+73c2,U+740f,U+75a4,U+7600-7601,U+768b,U+76bf,U+76d4,U+7728,U+772f,U+776c,U+77a0,U+77b0,U+77f8,U+783a,U+78d0,U+78fa,U+7977,U+7a37,U+7a92,U+7afa,U+7b71,U+7b94,U+7cef,U+7f28,U+7fe1,U+808b,U+80e5,U+80eb,U+8110,U+8113,U+812f,U+814c,U+81c3,U+8235,U+82d4,U+8309,U+83c1,U+8431,U+8469,U+84bf,U+84d3,U+84df,U+84e6,U+8511,U+8638,U+86c0,U+86db,U+86fe,U+8757,U+8822,U+8882,U+8885,U+8892,U+88f3,U+892a,U+8ba5,U+8bd9,U+8be0,U+8be7,U+8bfd,U+8c1a,U+8d4a,U+8d4e,U+8d66,U+8dda,U+8e0c,U+8e52,U+8e74,U+8e87,U+8f76,U+8fc2,U+8fe6,U+900d,U+9068,U+90ac,U+90b3,U+90b8,U+90e7,U+9119,U+9131,U+915a,U+916e,U+94b4,U+94d0,U+94e2,U+94ec,U+94ff,U+9522,U+9535,U+9556,U+965b,U+96f9,U+9774,U+9981,U+998d,U+998f,U+9a6e,U+9a7f,U+9a8a,U+9b13,U+9c9f,U+9e3e,U+9e43,U+9e6d,U+9e8b,U+9e92,U+9edb,U+9eef"
    }
  },
  {
    uri: Xiaolai_Regular_7718fe60986d8b42b1be9c5ace5ccf25_default,
    descriptors: {
      unicodeRange: "U+4e10,U+4e56,U+4e98,U+4ec3,U+4f3a,U+4f5f,U+4f88,U+4f97,U+4fa5,U+4fe8,U+504c,U+5197,U+52fa,U+5364,U+53e8,U+5406,U+543c,U+545c,U+5471,U+5480,U+5495,U+54b3,U+54df,U+54e6,U+54ee,U+557c,U+5583,U+55dc,U+55e3,U+566c,U+592f,U+5944,U+5983,U+59ca,U+59e5,U+5a13,U+5a7f,U+5b09,U+5bd0,U+5e4c,U+5eb5,U+5f1b,U+5f3c,U+608d,U+60cb,U+61a7,U+61ac,U+61cb,U+6233,U+62a0,U+62e7,U+62ee,U+62f4,U+62f7,U+634e,U+6382,U+63c9,U+63ea,U+6400,U+645e,U+6482,U+6556,U+6593,U+6615,U+664f,U+66e6,U+672d,U+675e,U+67da,U+6805,U+6808,U+6868,U+68a2,U+695e,U+69ad,U+6a80,U+6a90,U+6b83,U+6be1,U+6c30,U+6cad,U+6cb1,U+6cf1,U+6d31,U+6d93,U+6dae,U+6dbf,U+6dc6-6dc7,U+6e0d,U+6e32,U+6e3a,U+6e85,U+6eba,U+6f3e,U+6f5e,U+6f7c,U+6fee,U+71ee,U+722a,U+72b7,U+72e9,U+73ba,U+73d1,U+7409,U+7435-7436,U+7459-745a,U+747e,U+7487,U+74e2,U+7504,U+752c-752d,U+7599,U+759f,U+75a1,U+75ca,U+75f0,U+761f,U+7629,U+777f,U+7785,U+77a5,U+77bf,U+78d5,U+7934,U+7940,U+79a7,U+7b19,U+7c38,U+7c95,U+7cb1,U+7ce0,U+7eca,U+7ef7,U+7f2b,U+7f81,U+7fcc,U+8046,U+8148,U+8165,U+819b,U+81ba,U+828b,U+82ae,U+82b7,U+82d3,U+8301,U+830e,U+831c,U+8338,U+837c,U+8393,U+8398,U+83ba,U+83e0,U+83e9,U+853c,U+8654,U+86df,U+8712,U+873f,U+874e,U+8783,U+8859,U+88a4,U+8925,U+8bb7,U+8bff,U+8c19,U+8c1b,U+8c24,U+8c2c,U+8d61,U+8db4,U+8e6c,U+8f8a,U+8fe5,U+8ff8,U+901e,U+90f4,U+912f,U+9163,U+9170,U+91dc,U+949b,U+94a8,U+94b3,U+94c0,U+94e8,U+9525,U+9530,U+9539,U+954c-954d,U+9550,U+955b,U+962a,U+9685,U+96cc,U+9776,U+988d,U+9975,U+9985,U+9a6f,U+9aa5,U+9ab8,U+9c7f,U+9ca4,U+9cb8,U+9e25,U+9e35,U+9e4a"
    }
  },
  {
    uri: Xiaolai_Regular_aa5c9ca6cf4fba00433b7aa3fa10671a_default,
    descriptors: {
      unicodeRange: "U+4ea2,U+4ea5,U+4f36,U+4f84,U+4f8d,U+501a,U+5029,U+516e,U+51a5,U+51c4,U+51f8,U+5201,U+527f,U+5321,U+5352,U+5366,U+53e9,U+54c7,U+5632,U+5676,U+56b7,U+56bc,U+56da,U+56e4,U+5703,U+5729,U+5742,U+57a2-57a3,U+5815,U+58d1,U+5919,U+592d,U+5955,U+5a05,U+5a25,U+5a34,U+5b70,U+5b75,U+5bdd,U+5bf0,U+5c41,U+5c79,U+5c91,U+5c94,U+5ce6,U+5ced,U+5d69,U+5dc5,U+5e16,U+5e27,U+5f27,U+5f95,U+5ffb,U+6020,U+604d,U+6055,U+60e6,U+60eb,U+6123,U+618b,U+61a8,U+620d,U+62c7,U+62ce,U+62d9,U+631f,U+634d,U+6452,U+6479,U+64ce,U+64d2,U+655b,U+660a,U+6726,U+67c4,U+6809,U+6853,U+68e3,U+68f1,U+68fa,U+693f,U+6942,U+6995,U+69a8,U+69b4,U+6a71,U+6b89,U+6bcb,U+6bd3,U+6bd9,U+6c40,U+6cf8,U+6cfe,U+6d85,U+6da3,U+6daa,U+6e0e,U+6e43-6e44,U+6f88,U+7078,U+7099,U+70bd,U+70d9,U+70fd,U+7109,U+7184,U+7239,U+733f,U+73f2,U+748b,U+749c,U+749e,U+759a,U+75d2,U+75eb,U+7620,U+766b,U+7693,U+76cf,U+7738,U+773a,U+776b,U+778e,U+77aa,U+7852,U+78be,U+7948,U+795b,U+7960,U+796f,U+79ba,U+7a20,U+7a96,U+7aa5,U+7b03,U+7b28,U+7b50,U+7b77,U+7bc6,U+7bf1,U+7c27,U+7d0a,U+7ead,U+7ec5,U+7ee2,U+7ef0,U+7efd,U+7f0e,U+7f2e,U+7f79,U+7f9a,U+8098,U+80da,U+80e7,U+80f0,U+80f3,U+80fa,U+818a,U+81e7,U+8237-8238,U+8299,U+82b8,U+82ce,U+837b,U+83bd,U+83cf,U+8426,U+8475,U+85c9,U+85d5,U+85dc,U+85e9,U+871a,U+8747,U+8749,U+888d,U+8910,U+891a,U+8bb4,U+8be3,U+8bec,U+8bf2,U+8c06,U+8c0d,U+8d31,U+8d48,U+8de4,U+8e1e,U+8e4a,U+8e66,U+8f84,U+8f97,U+9083,U+90e1,U+9165,U+91c9,U+94b0,U+94f5,U+9504,U+9532,U+956d,U+95f5,U+95fa,U+9668,U+9698,U+96bd,U+9704,U+9773,U+9890,U+996a,U+997a,U+9a74,U+9a8b,U+9cc4,U+9ccc"
    }
  },
  {
    uri: Xiaolai_Regular_4f50e5136e136527280bc902c5817561_default,
    descriptors: {
      unicodeRange: "U+4ea8,U+4f1e,U+4f51,U+4f63,U+4f7c,U+4f83,U+4fa0,U+4fd1,U+4ffa,U+5018,U+5026,U+508d,U+50bb,U+50f5,U+50fb,U+5162,U+5319,U+5320,U+538c,U+5413,U+541f,U+5475,U+54bd,U+54d1,U+5589,U+5598,U+575f,U+57ae,U+57e0,U+5937,U+5974,U+5978,U+59ae,U+5a1f,U+5a49,U+5ab3,U+5b99,U+5b9b,U+5ba0,U+5be1,U+5be5,U+5c09,U+5c27,U+5de2,U+5e9a,U+5f26,U+5f8a,U+5f98,U+6021,U+606d,U+60bc,U+60d5,U+60e7,U+611a,U+614c,U+6254,U+626f,U+6292,U+6296,U+62b9,U+62e2,U+631a,U+631d,U+6320,U+6346,U+63ba,U+6467,U+64bc,U+658b,U+663c,U+6643,U+6652,U+6656,U+6687,U+66d9,U+66dd,U+66f0,U+673d,U+67ab,U+6816-6817,U+68a7,U+68ad,U+68cd,U+68e0,U+6986,U+69fd,U+6b47,U+6bd7,U+6c1f,U+6c2e-6c2f,U+6cbe,U+6de4,U+6e1d,U+6e83,U+6e9c,U+6ed4-6ed5,U+6f4d,U+70f9,U+7130,U+716e,U+718f,U+71ac,U+71e5,U+72fc,U+731c,U+7334,U+73ca,U+7422,U+7426,U+745f,U+7470,U+75af,U+75f4,U+762b,U+763e,U+7696,U+7737,U+7741,U+77a7,U+77bb,U+77ee,U+785d,U+788c,U+78ca,U+7901,U+796d,U+7985,U+79fd,U+7a3c,U+7a57,U+7a74,U+7b5b,U+7caa,U+7cb9,U+7cd5,U+7eac,U+7eb6,U+7ed1,U+7ee5,U+7f20,U+7f2a,U+7f38,U+7f69,U+7fa1,U+8018,U+8038,U+803f,U+804b,U+80a2,U+80be,U+80d6,U+817a,U+81fb,U+820c,U+82ad,U+82af,U+82bd,U+8327,U+8354,U+835f,U+8367,U+836b,U+840c,U+841d,U+8471,U+849c,U+84b2,U+84c9,U+8517,U+851a,U+8549,U+8681,U+8721,U+8776,U+88d9,U+88f9,U+89c5,U+8c1c,U+8c34,U+8d81,U+8d9f,U+8e0a,U+8e72,U+8eb2,U+8fed,U+901b,U+902e,U+906e,U+9091,U+90aa,U+90af,U+915d,U+9171,U+946b,U+9489,U+9499,U+94a5,U+9508,U+9524,U+952d,U+9551,U+9576,U+95f7,U+9600,U+96b6,U+96c0,U+9756,U+97f6,U+98a0,U+98a4,U+997f,U+9a73,U+9a86,U+9ad3,U+9e3d,U+9ed4"
    }
  },
  {
    uri: Xiaolai_Regular_093b9ef39a46ceae95a1df18a0a3a326_default,
    descriptors: {
      unicodeRange: "U+4e4d,U+4e5e,U+4ec7,U+4ed5,U+50da,U+50e7,U+515c,U+51a4,U+51ff,U+5203,U+5254,U+5300,U+533e,U+5375,U+53ee,U+5435,U+543b,U+5455,U+548b,U+548f,U+54d7,U+54fa,U+5578,U+5587,U+55a7,U+560e,U+5760,U+576f,U+5777,U+5830,U+58a9,U+5962,U+59e8,U+5a07,U+5a23,U+5a3c,U+5b5a,U+5bb5,U+5bc5,U+5bde,U+5c7f,U+5cb1,U+5ce8,U+5cea,U+5d29,U+5d4c,U+5e18,U+5f57,U+5f5d,U+5f87,U+5ff1,U+6016,U+601c,U+6064,U+6177,U+61d2,U+625b,U+62e3,U+62f1,U+634f,U+63a0,U+6401,U+6405,U+6495,U+64c2,U+6512,U+6577,U+6590,U+65a7,U+65a9,U+65f7,U+6627,U+6655,U+6714,U+6795,U+67d1,U+67ff,U+68b3,U+68d5,U+68d8,U+6930,U+6960,U+6977,U+69bb,U+69d0,U+6a31,U+6b7c,U+6bb4,U+6c22,U+6c72,U+6c79,U+6c7e,U+6c81,U+6c93,U+6ca5,U+6cbc,U+6ce3,U+6cfb,U+6d3c,U+6da9,U+6df3,U+6e2d,U+6eaf,U+6ec7,U+6f13,U+6f33,U+6f62,U+6fa1,U+7011,U+707c,U+708a,U+70c1,U+70d8,U+70eb,U+711a,U+7194,U+7281,U+7316,U+7357,U+7384,U+7405,U+742a,U+745b,U+7574,U+7578,U+75ea,U+7682,U+7792,U+77d7,U+77e9,U+77eb,U+77f6,U+780c,U+78c5,U+7941,U+79e4,U+7a1a,U+7a9c,U+7ad6,U+7b5d,U+7bf7,U+7c07,U+7c3f,U+7c9f,U+7ca5,U+7cdf,U+7e82,U+7eab,U+7ece,U+7eda,U+7f09,U+7f15,U+7f9e,U+7fdf,U+7fe9,U+803b,U+803d,U+80aa,U+80b4,U+813e,U+8155,U+817b,U+819d,U+821c,U+82b9,U+82df,U+82ef,U+8304,U+83b9,U+8446,U+853d,U+85af,U+85fb,U+8650,U+865e,U+86d9,U+86ee,U+8700,U+8862,U+889c,U+88d4,U+88f8,U+895f,U+8a79,U+8bb3,U+8bb6,U+8bc0,U+8beb,U+8bf5,U+8c23,U+8c79,U+8d1e,U+8dcb,U+8e29,U+8e44,U+8e81,U+8eac,U+8eaf,U+8f8d,U+9050,U+90f8,U+914b,U+948a,U+94be,U+94ee,U+950c,U+9540,U+962e,U+9647,U+9661,U+9699,U+96cf,U+9716,U+9761,U+97a0,U+97e7,U+9a7c,U+9a8f,U+9ae6,U+9cd6,U+9e26"
    }
  },
  {
    uri: Xiaolai_Regular_a0ca5df4258213d7fc9fce80f65ce760_default,
    descriptors: {
      unicodeRange: "U+4fa3,U+4fae,U+4fd8,U+4fef,U+50a3,U+5189,U+5195,U+51db,U+51f3,U+51f9,U+5220,U+5228,U+5288,U+52ff,U+532e,U+533f,U+5351,U+53db,U+53ed,U+5450,U+5484,U+5490,U+54c9,U+54e9,U+5501,U+5507,U+5543,U+55d3,U+56a3,U+575e,U+589f,U+5984,U+59ec,U+5a04,U+5a36,U+5a77,U+5a9a-5a9b,U+5ab2,U+5ac2,U+5ad6,U+5bc7,U+5c2c,U+5c34,U+5c51,U+5cd9,U+5d0e,U+5deb,U+5e3c,U+5e87,U+5ed3,U+5f13,U+5f64,U+5fe1,U+606a,U+6096,U+60df,U+60f6,U+60f9,U+6151,U+620e,U+6241,U+6252,U+6273,U+627c,U+6289,U+62c2,U+62cc,U+62ef,U+6361,U+6363,U+63b7,U+63e3,U+6518,U+66ae,U+6756,U+6789,U+6813,U+6829,U+6862,U+6866,U+6893,U+6897,U+690e,U+6984,U+69cc,U+6a1f,U+6a44,U+6a59,U+6ba1,U+6c13,U+6c90,U+6ca6,U+6cbd,U+6ccc,U+6cd3,U+6cd7,U+6d4a,U+6d4f,U+6d5a,U+6d9f,U+6da1,U+6dcc,U+6ea5,U+6ee4,U+6ee6,U+6f2f,U+6f8e,U+701a,U+7095,U+709c,U+70af,U+70db,U+70e8,U+714e,U+715e,U+71a0,U+71ce,U+7235,U+7280,U+72d0,U+72f8,U+73ab,U+7410,U+745c,U+7480,U+74a7-74a8,U+74e3,U+75ae,U+75f9,U+76b1,U+76ce,U+7736,U+77e2-77e3,U+781a,U+789f,U+797a,U+79be,U+79c3,U+79c6,U+79f8,U+7a8d,U+7a98,U+7aa6,U+7aff,U+7b1b,U+7cd9,U+7d6e,U+7ede,U+7eee,U+7f00,U+7f24,U+7f2d,U+7fd8,U+800d,U+8116,U+8151,U+81b3,U+8205,U+82c7,U+82db,U+832c,U+8335,U+8339,U+8386,U+846b,U+8587,U+8611,U+8682,U+868a,U+868c,U+8774,U+88d8,U+88f4,U+8912,U+8b6c,U+8bbd,U+8c0e,U+8c41,U+8d26,U+8d3b-8d3c,U+8d50,U+8dea,U+8e35,U+8f99,U+8fe2,U+8fe9,U+9017,U+914c,U+916f,U+9175-9176,U+918b,U+94a0,U+94ae,U+94ce,U+94f2,U+951a,U+952f,U+9541,U+9640,U+9672,U+968b,U+96cd,U+96ef,U+9713,U+97ec,U+9885,U+9992,U+9a6d,U+9a79,U+9a85,U+9cbb,U+9cd7,U+9cde,U+9e93,U+9f9f"
    }
  },
  {
    uri: Xiaolai_Regular_d2666cbed13462c5dc36fa2f15c202ca_default,
    descriptors: {
      unicodeRange: "U+4e11,U+4ed7,U+4fcf,U+4fe9,U+4fed,U+50ac,U+50b2,U+5112,U+5180,U+5188,U+51f6,U+522e,U+5265,U+52cb,U+52df,U+5349,U+5367,U+5378,U+537f,U+5395,U+5398,U+53d4,U+543e,U+5440,U+5446,U+54b8,U+5565-5566,U+5580,U+55bb,U+56ca,U+572d,U+573e,U+574e,U+5782-5784,U+58f3,U+5938-5939,U+5948,U+594e,U+5a1c,U+5a74,U+5ae9,U+5b55,U+5b5c,U+5bb0,U+5bd3,U+5bf8,U+5c3f,U+5d14,U+5d2d,U+5df7,U+5dfe,U+5e05-5e06,U+5e1c,U+5e62,U+5e7b,U+5e7d,U+5ed6,U+5f2f,U+5f66,U+5f6c,U+5fa1,U+604b,U+609f,U+60a6,U+60e8,U+6101,U+6124,U+6127,U+6148,U+61be,U+6247,U+62d8,U+62da,U+633d,U+635e,U+6367,U+6380,U+638f,U+63a9,U+63fd,U+641c,U+64e6,U+655e,U+6572,U+6591,U+65a5,U+6691,U+6735,U+67a2-67a3,U+67ef,U+680b,U+6876,U+6905,U+6a0a,U+6a61,U+6b79,U+6bb7,U+6bbf,U+6c41,U+6c55,U+6c83,U+6c9b,U+6ca7,U+6cfc,U+6d46,U+6d51,U+6d74,U+6d9d,U+6daf,U+6dc0,U+6deb,U+6e17,U+6e24,U+6e89,U+6ea2,U+6ef4,U+6f6d,U+707f,U+70b3,U+70e4,U+70ef,U+710a,U+722c,U+725f,U+7261,U+72ee,U+72f1,U+730e,U+732b,U+7433,U+7538,U+75bc,U+7624,U+7709,U+7750,U+7779,U+7802,U+7898,U+78a7,U+78b1,U+78cb,U+78f7,U+7984,U+7a83,U+7aed,U+7b3c,U+7b4b,U+7c92,U+7c98,U+7ca4,U+7eb9,U+7ee3,U+7ef3,U+7ef5,U+7f05,U+7f55,U+7f62,U+7fc1,U+7fd4,U+7fe0,U+8042,U+806a,U+80a0,U+80a4,U+80c3,U+8102,U+8106,U+814a,U+8154,U+8247,U+8258,U+82cd,U+8328,U+832b,U+8389,U+83ca,U+845b,U+846c,U+84b8,U+8574,U+859b,U+8680,U+8695,U+86c7,U+8702,U+886c,U+8896,U+88b1,U+88e4,U+8bc8,U+8c10,U+8c26,U+8c28,U+8c2d,U+8d4c,U+8d63,U+8f67,U+8f74,U+8fc4,U+9006,U+9063,U+90a2,U+90b1,U+90c1,U+9177,U+9189,U+9493,U+949e,U+94fe,U+9610,U+961c,U+96a7,U+96fe,U+978d,U+97f5,U+9888,U+997c,U+9a84,U+9b3c,U+9b44-9b45,U+9b54,U+9e64,U+9f0e,U+9f9a"
    }
  },
  {
    uri: Xiaolai_Regular_1e6fd68f1f3902ce48ce8c69df385622_default,
    descriptors: {
      unicodeRange: "U+4e19,U+4e38,U+4e53,U+4e7e,U+4e9f,U+4ec6,U+4f50,U+4fde,U+502a,U+5154,U+517d,U+51d1,U+51f0,U+5239,U+5256,U+52c9,U+52fe,U+5308,U+532a,U+535c,U+5384,U+53a2,U+53a8,U+53c9,U+53e0,U+5496,U+54ac,U+54c0,U+54c4,U+54e8,U+5561,U+5582,U+561b,U+5631,U+566a,U+5764,U+576a,U+5792,U+57ab,U+584c,U+5885,U+58f6,U+59a8,U+5acc,U+5bc2,U+5c38-5c39,U+5c60,U+5c6f,U+5c82,U+5c90,U+5d16,U+5dcd,U+5e37,U+5e90,U+5eb8,U+5f6a,U+5fcc,U+6012,U+6068,U+6073,U+607c,U+6094,U+6109,U+621a,U+626e,U+6284,U+62d0,U+62e6,U+62fe,U+6321,U+6328,U+632b,U+6349,U+6454,U+65ed,U+660f,U+6674,U+66a8,U+6749,U+674f,U+6760,U+67af,U+6850,U+6854,U+6869,U+68a8,U+68d2,U+68f5,U+6912,U+6b49,U+6b6a,U+6bef,U+6c28,U+6c5d,U+6c82,U+6cab,U+6cb8,U+6cc4,U+6cf5,U+6d47,U+6d78,U+6da4,U+6dc4,U+6dcb,U+6df9,U+6e0a,U+6e23,U+6e5b,U+6eb6,U+6f06,U+6f47,U+6f84,U+6f9c,U+6fd2,U+7076,U+70ac,U+7199,U+723d,U+72ac,U+72ed,U+7476,U+7529,U+752b,U+754f,U+7554,U+75d5,U+7626,U+76ef,U+7720,U+7766,U+7784,U+77ac,U+780d,U+7838,U+7845,U+786b,U+78b3,U+7978,U+79b9,U+79c9,U+79e7,U+7a3d,U+7a84,U+7a9f,U+7b0b,U+7b52,U+7c7d,U+7f1a,U+7fc5,U+7ff0,U+804a,U+8086-8087,U+808c,U+809a,U+80ba,U+810a,U+8180,U+818f,U+81c2,U+81ed,U+8231,U+8292,U+829c,U+82a6,U+82d1,U+8346,U+838e,U+839e,U+83c7,U+83f1,U+8403,U+840e,U+8513,U+857e,U+85e4,U+867e,U+871c,U+87ba,U+87f9,U+884d,U+8944,U+8a93,U+8c05,U+8d2c,U+8d2e,U+8d42-8d43,U+8dfb,U+8e22,U+8eba,U+8f69,U+8f9c,U+8fa3,U+8fa8,U+8fb1,U+900a,U+9038,U+903b,U+9042,U+904f,U+90b5,U+90dd,U+9102,U+9187,U+94a7,U+94c5,U+9523,U+95f8,U+95fd,U+960e,U+964b-964c,U+96c1,U+9709,U+971c,U+97ad,U+9882,U+9965,U+9976,U+9988,U+99a8,U+9a82,U+9a9a,U+9b41,U+9c8d,U+9e45,U+9e70,U+9e9f,U+9f3b,U+9f7f"
    }
  },
  {
    uri: Xiaolai_Regular_87599f94b6cc129d505b375798d0d751_default,
    descriptors: {
      unicodeRange: "U+4e08,U+4e18,U+4e1b,U+4e22,U+4e27,U+4e32,U+4e52,U+4e73,U+4ead,U+4ed4,U+4ed9,U+4ef0,U+4fa6,U+5076,U+5179,U+51bb,U+51c9,U+51ef,U+51fd,U+524a,U+526a,U+529d,U+52ab,U+5306,U+5339,U+53d9,U+540a,U+5410,U+541e,U+5439,U+54b1,U+54ed,U+5564,U+558a,U+55b7,U+5634,U+574a,U+5751,U+57a6,U+57cb,U+57d4,U+5824,U+582a,U+5835,U+5858,U+5893,U+58e4,U+5951,U+5986,U+59da,U+59fb,U+59ff,U+5a03,U+5a46,U+5ac1,U+5b5d,U+5bfa,U+5c18,U+5c3a,U+5c48,U+5c4f,U+5c61,U+5cb3,U+5d1b,U+5e15,U+5e3d,U+5e99,U+5e9e,U+5eca,U+5f0a,U+5f17-5f18,U+5f25,U+5f7c,U+5fcd,U+6028,U+60a0,U+60ac,U+60d1,U+614e,U+6155,U+6168,U+61c8,U+6208,U+6212,U+6251,U+629a-629b,U+62ab-62ac,U+62fc,U+6323,U+632a,U+63d2,U+643a,U+6491-6492,U+649e,U+64b0,U+64c5,U+659c,U+6614,U+662d,U+6664,U+6670,U+6676,U+6746,U+67cf,U+67d4,U+682a,U+6843,U+6846,U+68da,U+6b3a,U+6b67,U+6c27,U+6c5b,U+6c64,U+6c70,U+6caa,U+6cca,U+6ce1,U+6d12,U+6d45,U+6dd1,U+6dd8,U+6e34,U+6e7f,U+6ee5,U+6f02,U+7092,U+70c2,U+70e6,U+7115,U+7237,U+7272,U+727a,U+72c2,U+739b,U+73b2,U+743c,U+751c,U+758f,U+75b2,U+7686,U+76c6,U+76d2,U+76fc,U+775b,U+77a9,U+7816,U+788e,U+7897,U+78b0,U+79bd,U+7a0d,U+7a91,U+7a9d,U+7ae3,U+7bad,U+7cca,U+7d2b,U+7eb1,U+7f06,U+7f14,U+7f1d,U+7f50,U+7ffc,U+8036,U+80bf,U+80c1,U+80ce,U+80f8,U+8109,U+810f,U+8170,U+8179,U+819c,U+821f,U+8230,U+8236,U+8273,U+829d,U+82f9,U+8305,U+8350,U+83b2,U+83cc,U+8404,U+840d,U+8427,U+8482,U+8679,U+8854,U+886b,U+8bbc,U+8be6,U+8c31,U+8c6b,U+8d4b,U+8dcc,U+8e2a,U+8e48,U+8f90,U+8fb0,U+9022,U+903c,U+903e,U+9065,U+916c,U+917f,U+94a9,U+94c3,U+94dd,U+94ed,U+9510,U+953b,U+96c7,U+970d,U+9738,U+9877,U+987d,U+989c,U+98d8,U+9a70,U+9a91,U+9aa4,U+9b42,U+9b4f,U+9e2d,U+9e3f,U+9e7f,U+9f20"
    }
  },
  {
    uri: Xiaolai_Regular_06c77b8c66e51ed6c63ccb502dd8b8af_default,
    descriptors: {
      unicodeRange: "U+4e59,U+4ed3,U+4f0f,U+4f38,U+4f69,U+4fa7,U+4faf,U+4ff1,U+5077,U+5085,U+5144,U+5151,U+51af,U+51b6,U+51cc,U+523a,U+5251,U+5269,U+5272,U+52d8,U+5353,U+5389,U+53f9,U+5401,U+5415,U+541b,U+54f2,U+5524,U+554a,U+559d,U+5609,U+5740,U+575d,U+5806,U+5821,U+586b,U+5915,U+594f,U+5960,U+5999,U+59a5,U+59b9,U+59c6,U+59d1,U+59dc,U+5b5f,U+5b64,U+5b87,U+5bb4,U+5bbf,U+5c16,U+5c1d,U+5c3e,U+5c9a,U+5ca9,U+5cad,U+5cfb,U+5de1,U+5de7,U+5de9,U+5ef7,U+5f04,U+5f70,U+5f79,U+5fc6,U+602a,U+6050,U+6052,U+6070,U+6084,U+60b2,U+60dc,U+60e9,U+6167,U+6170,U+61c2,U+6270,U+6291,U+62b1,U+62bc,U+62dc,U+62df,U+62f3,U+6324,U+633a,U+6377,U+6398,U+63cf,U+640f,U+642c-642d,U+6458,U+6478,U+6500,U+654c,U+6566,U+658c,U+65c1,U+65cb,U+65e8,U+65ec,U+6696-6697,U+6734,U+679a,U+679d,U+67dc,U+67f3-67f4,U+680f,U+683d,U+684c,U+68af,U+699c,U+6bc1,U+6c0f,U+6c1b,U+6c57,U+6c6a,U+6d3d,U+6d6e,U+6d82,U+6db5,U+6dee,U+6e58,U+6eaa,U+6ecb,U+6ede,U+6ee9,U+6f0f,U+6f20,U+6f58,U+704c,U+7070,U+70b8,U+718a,U+7238,U+7262,U+7275,U+72b9,U+72d7,U+72e0,U+741b,U+7434,U+7483,U+74f6-74f7,U+75ab,U+764c,U+7761,U+7855,U+7891,U+78c1,U+79d2,U+7a00,U+7a3b,U+7c97,U+7ea4,U+7eb2,U+7ed2,U+7eea,U+7ef8,U+7f18,U+7fbd,U+8000,U+8010,U+8096,U+809d,U+80a9,U+817f,U+81e3,U+8206,U+8212,U+82ac,U+8302,U+8361,U+8377,U+83f2,U+8461,U+848b,U+84ec,U+8521,U+85aa,U+8870,U+8877,U+8881,U+888b,U+88ad,U+88c2,U+8986,U+8bd1,U+8bf1,U+8d24,U+8d2a,U+8d3e-8d3f,U+8d41,U+8d56,U+8d64,U+8d6b,U+8e0f,U+8f70,U+8f85,U+8f88,U+8fa9,U+9003,U+901d,U+90b9,U+90ce,U+94a6,U+94f8,U+9505,U+95ea,U+95ef,U+95f2,U+95f9,U+9601,U+9605,U+9634,U+966a,U+9677,U+9690,U+9694,U+96d5,U+971e,U+9896-9897,U+9972,U+9a71,U+9a76,U+9a7e,U+9e1f,U+9e23"
    }
  },
  {
    uri: Xiaolai_Regular_13ae07ed2e272d26d59bc0691cd7117a_default,
    descriptors: {
      unicodeRange: "U+4e01,U+4e43,U+4ea6,U+4ef2,U+4eff,U+4f26,U+4f2a,U+4f2f,U+4f5b,U+4fa8,U+4fca,U+4fd7,U+5021,U+504f,U+5141,U+51c0,U+51dd,U+51e4,U+51ed,U+5200,U+5237,U+5427,U+5448,U+54a8,U+5706,U+5708,U+5723,U+575b,U+57c3,U+5899,U+58a8,U+58c1,U+5976,U+5988,U+59bb,U+59d0,U+59d3,U+5a18,U+5a31,U+5a92,U+5b54,U+5b85,U+5baa-5bab,U+5bc4,U+5bd2,U+5be8,U+5bff,U+5c65,U+5d07,U+5e1d,U+5e78,U+5e7c,U+5f03,U+5f1f,U+5f39,U+5f6d,U+5f92,U+5faa,U+5fbd,U+5fe7,U+5ffd,U+60a8,U+60ef,U+6108,U+6162,U+622a,U+6234,U+626b,U+626d,U+62c6,U+62d2,U+62d4,U+62d6,U+62e8,U+6316,U+6355,U+63ed,U+6447,U+64a4,U+65f1,U+6606,U+6628,U+664b,U+6668,U+6682,U+66f9,U+66fc,U+66ff,U+6717,U+6740,U+676d,U+67aa,U+67ec,U+67f1,U+6842,U+6851,U+695a,U+6982,U+6a2a,U+6b20,U+6b23,U+6b32,U+6b96,U+6bc5,U+6beb,U+6c60,U+6c9f,U+6cea,U+6cf3,U+6d1e,U+6d53,U+6d66,U+6d69,U+6d8c,U+6d9b,U+6db2,U+6de1,U+6dfb,U+6e14,U+6ed1,U+6eda,U+6ee8,U+6f2b,U+706d,U+7089,U+708e,U+70ad-70ae,U+70e7,U+7126,U+714c,U+71c3,U+71d5,U+7206,U+7259,U+731b,U+73a9,U+73bb,U+74dc,U+7532,U+7545,U+755c,U+75c7,U+7687,U+76d7,U+76f2,U+788d,U+78e8,U+79e6,U+79e9,U+7a3f,U+7a46,U+7a97,U+7af9,U+7bee,U+7c4d,U+7c89,U+7cd6,U+7eb5,U+7ebd,U+7ed8,U+8017,U+8033,U+80c0,U+80de,U+80f6,U+8138,U+817e,U+81a8,U+820d,U+827e,U+82b3,U+82d7,U+83b1,U+84c4,U+84dd,U+8584,U+864e,U+865a,U+866b,U+86cb,U+88d5,U+89e6,U+8bca,U+8bde,U+8bfa,U+8c0a,U+8c37,U+8c46,U+8c6a,U+8c8c,U+8d1d,U+8d29,U+8d4f,U+8d54,U+8d5a,U+8d60,U+8d62,U+8f7f,U+8f96,U+8f9e-8f9f,U+8fc1,U+8fdf,U+8fea,U+8ff7,U+9012,U+906d,U+9075,U+90a6,U+90bb,U+90ca,U+9178,U+9192,U+91ca,U+94bb,U+94dc,U+94fa,U+9501,U+950b,U+9521,U+955c,U+963b,U+9655,U+9675-9676,U+9887,U+9891,U+9971,U+9a97,U+9ece,U+9ed8"
    }
  },
  {
    uri: Xiaolai_Regular_353f33792a8f60dc69323ddf635a269e_default,
    descriptors: {
      unicodeRange: "U+4e1d,U+4e39,U+4e4c,U+4e4f,U+4e54,U+4e58,U+4e95,U+4ea1,U+4eab,U+4eae,U+4ec1,U+4f10,U+4f19,U+4f30,U+4f34,U+4fb5,U+503e,U+518c,U+5192,U+51a0,U+51ac,U+51b0,U+51e1,U+5211,U+5242,U+52a3,U+52b2,U+52c3,U+52c7,U+52d2,U+52e4,U+5377,U+539a,U+53a6,U+53e5,U+5417,U+5510,U+552f,U+5531,U+574f-5750,U+5761,U+5851,U+5854,U+58ee,U+593a,U+5949,U+5954,U+5a5a,U+5b8b,U+5bbd,U+5c04,U+5c0a,U+5c4b,U+5ce1,U+5cf0,U+5e10,U+5e8a,U+5e9f,U+5ec9,U+5f31,U+5f84,U+5fd8-5fd9,U+5fe0,U+6015,U+6062,U+6069,U+6076,U+6089,U+60a3,U+60ca,U+620f,U+624e,U+6263,U+6298,U+62a2,U+62bd,U+6311,U+6350,U+6389,U+638c,U+63f4,U+6446,U+644a,U+6469,U+64cd,U+654f,U+6562,U+656c,U+65d7,U+65e6,U+65fa,U+660c,U+6653,U+66b4,U+670b,U+672b,U+676f-6770,U+6881,U+6885,U+68a6,U+68cb,U+68ee,U+6b8a,U+6c88-6c89,U+6cc9,U+6ce5,U+6d01,U+6d17,U+6d1b,U+6d59,U+6d6a,U+6da8,U+6df7,U+6e10,U+6e20-6e21,U+6f5c,U+706f,U+70bc,U+719f,U+7267,U+732a,U+73cd,U+7518,U+756a,U+7586,U+7591,U+75db,U+76c8,U+76d0,U+76d6,U+76d8,U+76df,U+76fe,U+77db,U+7801,U+786c,U+795d,U+7965,U+79cb,U+7a77,U+7a7f,U+7aef,U+7b11,U+7bb1,U+7bc7,U+7ea0,U+7eaf,U+7ed5,U+7edc,U+7f13,U+7f29,U+7f34,U+7f8a,U+7ffb,U+8015,U+8058,U+805a,U+8083,U+80af,U+80c6,U+80cc,U+811a,U+8150,U+82e5,U+8336,U+8352,U+83ab,U+8428,U+8463,U+852c,U+8861,U+89c8,U+8bcd,U+8bd7,U+8bda,U+8be2,U+8bef,U+8bf8,U+8c0b,U+8c13,U+8d34,U+8d3a,U+8d74,U+8d76,U+8da3,U+8dd1,U+8ddd,U+8ddf,U+8df3,U+8f68,U+8f6f,U+8f7d,U+8f91,U+8f9b,U+8fbd,U+8fc8,U+8fd4,U+8feb,U+8ff9,U+900f,U+9057,U+907f-9080,U+90d1,U+90ed,U+91ce,U+9519,U+9526,U+95ed,U+9614,U+9635,U+9644,U+9686,U+96c5,U+96ea,U+9707,U+9732,U+9759,U+978b,U+9876,U+9881,U+9910,U+996e,U+9970,U+9c81,U+9e21,U+9ebb,U+9f84"
    }
  },
  {
    uri: Xiaolai_Regular_0facdf1ea213ba40261022f5d5ed4493_default,
    descriptors: {
      unicodeRange: "U+4e3d,U+4e4e,U+4e71,U+4e8f,U+4ed8,U+4eea,U+4f0a,U+4f0d,U+4f11,U+4f1f,U+4f24,U+4f3c,U+4f73,U+4fc4,U+500d,U+5012,U+501f,U+503a,U+505c,U+507f,U+50a8,U+514d,U+5178,U+517c,U+51b2,U+51b7,U+520a,U+5238,U+523b,U+52b1,U+535a,U+5371,U+5385,U+53eb-53ec,U+53f3,U+53f6,U+5409,U+542b,U+542f,U+5434,U+5462,U+5473,U+547c,U+54c8,U+54ea,U+56fa,U+5733,U+5757,U+5766,U+5802,U+585e,U+590f,U+591c,U+591f,U+5947,U+594b,U+5987,U+5a01,U+5b59,U+5b63,U+5b88,U+5b97,U+5b9c,U+5bbe,U+5bfb,U+5c01,U+5c1a,U+5c24,U+5c3c,U+5c97,U+5c9b,U+5cb8,U+5de6,U+5e01,U+5e2e,U+5e45,U+5e55,U+5e84,U+5ef6,U+5f02,U+5f52,U+5f69,U+5f7b,U+5f90,U+5fae,U+6000,U+600e,U+6025,U+60e0,U+6276,U+6297,U+62b5,U+62cd,U+62d3,U+62e5,U+62e9,U+62ff,U+6302,U+632f,U+63e1,U+6444,U+64ad,U+653b,U+6551,U+6563,U+65a4,U+65e7,U+6620,U+667a,U+66f2,U+671d,U+6731,U+6742,U+675f,U+6768,U+677e-677f,U+6790,U+67b6,U+67d3,U+6863,U+68b0,U+68c9,U+690d,U+6b8b,U+6bcd,U+6bd2,U+6bd5,U+6c38,U+6c61,U+6cbf,U+6cdb,U+6cf0,U+6d2a,U+6d89,U+6da6,U+6f6e,U+6fb3,U+7075,U+707e,U+70df,U+7164,U+7236,U+725b,U+7389,U+73e0,U+745e,U+74e6,U+751a,U+7537,U+75be,U+76ae,U+76db,U+793c,U+7956,U+7981,U+79d8,U+79df,U+79fb,U+7adf,U+7ae5,U+7b14,U+7b26,U+7b54,U+7b79,U+7d2f,U+7eb8,U+7eba,U+7ec6,U+7ee9,U+7eff,U+7f5a,U+7f6a,U+7f72,U+8089,U+80a5,U+80e1,U+8111,U+8131,U+821e,U+822c,U+8270,U+8499,U+8651,U+867d,U+8840,U+8857,U+8863,U+88c1,U+89c9,U+89d2,U+8a89,U+8bed,U+8bfe,U+8c01,U+8c22,U+8d21,U+8d25,U+8d2f,U+8d5e,U+8d75,U+8d8b,U+8dc3,U+8de8,U+8df5,U+8f6e,U+8f86,U+8f89,U+8fc5,U+8ff0,U+8ffd,U+9014,U+904d,U+90ae,U+9274,U+949f,U+952e,U+969c,U+96c4,U+96e8,U+96f6-96f7,U+97e9,U+987f,U+996d,U+9a7b,U+9aa8,U+9c7c,U+9c9c,U+9e4f,U+9f13,U+9f50"
    }
  },
  {
    uri: Xiaolai_Regular_f8ee5d36068a42b51d0e4a1116cfcec1_default,
    descriptors: {
      unicodeRange: "U+4e13,U+4e16,U+4e1c,U+4e24,U+4e3e,U+4e49,U+4e61,U+4e66,U+4e89,U+4e8c,U+4e94,U+4e9b,U+4ea4,U+4eac,U+4ebf,U+4eca,U+4ef6-4ef7,U+4efb,U+4f18,U+4f20,U+4f46,U+4f7f,U+4fe1,U+503c,U+505a,U+5146,U+5148,U+515a,U+5171,U+5177,U+519b,U+51b3,U+51c6,U+51e0,U+5212,U+521b,U+522b,U+529e,U+52bf,U+534e-534f,U+5355,U+5357,U+5382,U+539f,U+53bb,U+53bf,U+53c2,U+53c8,U+53ca,U+53d6-53d8,U+53e3,U+53ea,U+53f0,U+540d,U+5411,U+56db,U+56de,U+56e0,U+56e2,U+578b,U+57ce,U+57fa,U+589e,U+5904,U+5934,U+5982,U+5b89,U+5b8c,U+5bfc,U+5c06,U+5c11,U+5c40,U+5c71,U+5e38,U+5e72,U+5e76,U+5e7f,U+5e94,U+5e9c,U+5f0f,U+5f15,U+5f20,U+5f3a,U+5f62,U+5f88,U+5fc5,U+5fd7,U+5feb,U+601d,U+6027,U+60c5,U+60f3,U+610f,U+6216,U+6218,U+624b,U+624d,U+6279,U+628a,U+6295,U+6301,U+6307,U+636e,U+63a5,U+63a8,U+652f,U+6536,U+653e,U+6548,U+6559,U+6570,U+65bd,U+65e0,U+6602,U+660e,U+6613,U+66f4,U+6700,U+670d,U+671f,U+672f,U+6743,U+674e,U+6751,U+6761,U+6784,U+6797,U+679c,U+67e5,U+6807,U+6837,U+683c,U+6b21,U+6b63-6b65,U+6bcf,U+6bd4,U+6c42,U+6c5f,U+6ca1,U+6cbb,U+6d3b,U+6d41,U+6d88,U+6df1,U+70b9,U+7136,U+7269,U+7279,U+7531,U+754c,U+767e,U+76ca,U+76f8,U+770b,U+7740,U+7814,U+79ef,U+7a0b,U+7a0e,U+7a76,U+7b80,U+7cbe,U+7cfb,U+7e41,U+7ea7,U+7ec4,U+7ec7,U+7ed3,U+7ed9,U+7edf,U+7f8e,U+8001,U+804c,U+8054,U+80b2,U+81f3,U+8425,U+8868,U+88ab,U+897f,U+89c1-89c2,U+89c4,U+89c6,U+89e3,U+8ba1,U+8ba4,U+8bae,U+8bb0,U+8bba,U+8bc1,U+8c03,U+8d28,U+8d39,U+8def,U+8f66,U+8f6c,U+8fd0-8fd1,U+9020,U+9053,U+90a3,U+90fd,U+91cc,U+9500,U+9547,U+95e8,U+95f4,U+961f,U+9645,U+9662,U+96be,U+96c6,U+9700,U+9769,U+97e6,U+9875,U+9879,U+9886,U+9898,U+98ce,U+9996,U+2b5af,U+2cc56,U+2e9f5,U+30edd-30ede"
    }
  },
  {
    uri: Xiaolai_Regular_79d494361ae093b69e74ee9dbe65bfd4_default,
    descriptors: {
      unicodeRange: "U+4e03,U+4e30,U+4e34,U+4e45,U+4e60,U+4e70,U+4e88,U+4e91-4e92,U+4ea9,U+4eb2,U+4ec0,U+4ecb,U+4ecd,U+4ee4,U+4fee,U+5019,U+5047,U+50cf,U+5145,U+516d,U+5170,U+5175,U+5199,U+51cf,U+51fb,U+521a,U+5224,U+5267,U+52aa,U+5347-5348,U+534a,U+5356,U+5361,U+536b,U+5370,U+538b,U+53e4,U+53e6,U+5403,U+5426,U+5428,U+542c,U+5438,U+5668,U+56ed,U+56f4,U+56fe,U+57df,U+592a,U+5957,U+5b69,U+5b81,U+5b8f,U+5b98,U+5b9d,U+5ba1,U+5ba4,U+5bb3,U+5bc6,U+5bdf,U+5c3d,U+5c5e,U+5c81,U+5ddd,U+5de8,U+5dee,U+5e0c,U+5e86,U+5e8f,U+5e93,U+5e95,U+5e97,U+5ea7,U+5ead,U+5eb7,U+5f55,U+5f81,U+5f85,U+5ff5,U+6001,U+613f,U+6258,U+6267,U+6269,U+626c,U+627e,U+62db,U+62ec,U+6325,U+635f,U+6362,U+6388,U+6392,U+63a2,U+63a7,U+63aa,U+641e,U+6545,U+6597,U+65e2,U+65e9,U+661f,U+665a,U+666e-666f,U+66fe,U+6728,U+67d0,U+6811,U+6838,U+6865,U+697c,U+6b22,U+6b27,U+6b4c,U+6b62,U+6b66,U+6b7b,U+6bdb,U+6c47,U+6c49,U+6c7d,U+6c99,U+6cfd,U+6d0b,U+6d25,U+6d32,U+6d3e,U+6d4b,U+6e29,U+6e56,U+6e7e,U+6f14,U+6fc0,U+706b,U+70c8,U+7247,U+72af,U+72b6,U+72ec,U+732e,U+73ed,U+7403,U+7533,U+753b,U+7559,U+7565,U+7597,U+767b,U+773c,U+7763,U+77ed,U+77ff,U+7968,U+798f,U+79bb,U+79c0-79c1,U+7ad9,U+7ae0,U+7b51,U+7b7e,U+7cae,U+7d22,U+7ea2,U+7eb3,U+7eb7,U+7ec3,U+7ec8,U+7ecd,U+7edd,U+7efc,U+7f16,U+7f3a,U+7f51,U+7f57,U+7f6e,U+80dc,U+822a,U+8239,U+826f,U+82cf,U+82e6,U+8349,U+8363,U+83dc,U+8457,U+85cf,U+878d,U+8865,U+8a00,U+8b66,U+8ba2,U+8ba8,U+8bad,U+8bb2,U+8bc9,U+8bd5,U+8bfb,U+8d2b,U+8d35,U+8d37,U+8f7b,U+8f93,U+8fce,U+8fdd,U+9000-9002,U+9010,U+9047,U+9093,U+9152,U+9488,U+94a2,U+9633,U+9636,U+963f,U+9646,U+9648,U+964d,U+9664,U+9669,U+9760,U+97f3,U+987a,U+987e,U+9884,U+98de,U+9986,U+9ed1"
    }
  },
  {
    uri: Xiaolai_Regular_74e2263a91439c25b91d5132ce9f4d62_default,
    descriptors: {
      unicodeRange: "U+4e14,U+4e25,U+4e48,U+4e50,U+4e5d,U+4e9a,U+4ec5,U+4efd,U+4f17,U+4f4e-4f4f,U+4f55,U+4f59,U+4f60,U+4f8b,U+4f9b,U+4f9d,U+4fbf,U+4fc3,U+5065,U+513f,U+5149,U+514b,U+516b,U+5174,U+517b,U+518d,U+51b5,U+5207,U+5217-5219,U+521d,U+526f,U+529f,U+52a9,U+52b3,U+5305,U+533b,U+5343,U+5360,U+5373-5374,U+5386,U+53cb-53cd,U+53f2,U+53f7,U+544a,U+5468,U+547d,U+54cd,U+552e,U+5584,U+56f0,U+571f,U+5747,U+575a,U+57f9,U+5883,U+58eb,U+58f0,U+5907,U+590d,U+592e,U+5931,U+5956,U+5965,U+5973,U+5979,U+59cb,U+5b57-5b58,U+5b83,U+5ba2-5ba3,U+5bb9,U+5bcc,U+5c42,U+5c45,U+5c4a,U+5dde,U+5df1,U+5df4,U+5e03,U+5e08,U+5e26,U+5e2d,U+5f71,U+5f80,U+5f8b,U+5fb7,U+606f,U+611f,U+6237,U+623f,U+6253,U+627f,U+6293,U+62a4,U+62c5,U+62c9,U+6309,U+6574,U+6599,U+65ad,U+65af,U+65c5,U+65cf,U+6625,U+663e,U+671b,U+672a,U+6750,U+6781,U+6821,U+6839,U+6848,U+68c0,U+6a21,U+6b3e,U+6bb5,U+6c14,U+6cb3,U+6cb9,U+6ce8,U+6e05,U+6e2f,U+6e38,U+6e90,U+6ee1,U+70ed,U+7167,U+7231,U+7248,U+724c,U+7387,U+738b,U+73af,U+7530,U+75c5,U+767d,U+76d1,U+76f4,U+771f,U+77e5,U+77f3,U+7834,U+7840,U+786e,U+793a,U+795e,U+79f0,U+7a33,U+7a7a,U+7a81,U+7ade,U+7b56,U+7b97,U+7c73,U+7c7b,U+7d20,U+7d27,U+7ea6,U+7eaa,U+7ebf,U+7ee7,U+7eed,U+7ef4,U+7fa4,U+8003,U+80a1,U+81f4,U+8272,U+827a,U+8282,U+82b1,U+82f1,U+8303,U+836f,U+83b7,U+843d,U+88c5,U+8ba9,U+8baf,U+8bb8,U+8bbf,U+8bc4,U+8bc6,U+8bdd,U+8be5,U+8bf7,U+8c08,U+8c61,U+8d1f,U+8d22-8d23,U+8d27,U+8d2d,U+8d38,U+8d5b,U+8d70,U+8d85,U+8d8a,U+8db3,U+8eab,U+8f83,U+8fb9,U+8fdc,U+8fde,U+9009,U+901f,U+914d,U+91c7,U+94b1,U+94c1,U+94f6,U+95fb,U+9632,U+9650,U+968f,U+9752,U+975e,U+987b,U+989d,U+98df,U+9999,U+9a6c,U+9a8c,U+9ec4,U+9feb-9fec"
    }
  },
  {
    uri: Xiaolai_Regular_ee8bae97908d5147b423f77ad0d3c1bb_default,
    descriptors: {
      unicodeRange: "U+98fb-990c,U+990e-990f,U+9911-992d,U+992f-9953,U+9956-9962,U+9964,U+9966,U+9973,U+9978-9979,U+997b,U+997e,U+9982-9983,U+9989,U+998c,U+998e,U+999a-99a4,U+99a6-99a7,U+99a9-99c8"
    }
  },
  {
    uri: Xiaolai_Regular_56467a5c8840c4d23a60b2f935114848_default,
    descriptors: {
      unicodeRange: "U+8e4c-8e50,U+8e53-8e58,U+8e5a-8e65,U+8e67-8e68,U+8e6a-8e6b,U+8e6e,U+8e71,U+8e73,U+8e75,U+8e77-8e7b,U+8e7d-8e7e,U+8e80,U+8e82-8e84,U+8e86,U+8e88-8e8e,U+8e91-8e93,U+8e95-8e9b,U+8e9d,U+8e9f-8eaa,U+8ead-8eae,U+8eb0-8eb1,U+8eb3-8eb9,U+8ebb-8ecd,U+8ecf-8f02"
    }
  },
  {
    uri: Xiaolai_Regular_145aa02cdd91946e67dc934e1acffe75_default,
    descriptors: {
      unicodeRange: "U+2e3a,U+3001-3002,U+3008-3011,U+3014-3017,U+301d-301f,U+4dae,U+4e00,U+4e07,U+4e09-4e0b,U+4e0d-4e0e,U+4e1a,U+4e2a,U+4e2d,U+4e3a-4e3b,U+4e4b,U+4e5f,U+4e86,U+4e8b,U+4e8e,U+4ea7,U+4eba,U+4ece,U+4ed1,U+4ed6,U+4ee3,U+4ee5,U+4eec,U+4f01,U+4f1a,U+4f4d,U+4f53,U+4f5c,U+4fdd,U+5143,U+5165,U+5168,U+516c,U+5173,U+5176,U+5185,U+519c,U+51fa,U+5206,U+5229,U+5230,U+5236,U+524d,U+529b,U+52a0-52a1,U+52a8,U+5316-5317,U+533a,U+5341,U+5362,U+53d1,U+53ef,U+53f8,U+5404,U+5408,U+540c,U+540e,U+5458,U+548c,U+54c1,U+54e5,U+5546,U+559c,U+56fd,U+5728,U+5730,U+573a,U+5916,U+591a,U+5927,U+5929,U+592b,U+597d,U+59d4,U+5b50,U+5b66,U+5b9a,U+5b9e,U+5bb6,U+5bf9,U+5c0f,U+5c14,U+5c31,U+5c55,U+5de5,U+5df2,U+5e02,U+5e73-5e74,U+5ea6,U+5efa,U+5f00,U+5f53,U+5f97,U+5fc3,U+603b,U+6210-6211,U+6240,U+6280,U+62a5,U+63d0,U+6539,U+653f,U+6587,U+65b0,U+65b9,U+65e5,U+65f6,U+662f,U+6708-6709,U+672c,U+673a,U+675c,U+6765,U+6c11,U+6c34,U+6cd5,U+6ce2,U+6d4e,U+6d77,U+73b0,U+7406,U+751f,U+7528,U+7535,U+7684,U+76ee,U+793e,U+79cd,U+79d1,U+7acb,U+7b2c,U+7b49,U+7ba1,U+7ecf,U+8005,U+800c,U+80fd,U+81ea,U+884c,U+8981,U+8bbe,U+8bf4,U+8d44,U+8d77,U+8fbe,U+8fc7,U+8fd8-8fd9,U+8fdb,U+901a,U+90e8,U+91cd,U+91cf,U+91d1,U+9485,U+957f,U+95ee,U+9762,U+9ad8,U+9ea6,U+9f99,U+9fcf,U+9fd4,U+9fed,U+fe10-fe19,U+fe30-fe31,U+fe33-fe44,U+ff01,U+ff0c,U+ff1f,U+2b4e7,U+2b7f7,U+2b7fc,U+2cb2d,U+2cb3b,U+2cb4a,U+2cb5b,U+2cb73"
    }
  },
  {
    uri: Xiaolai_Regular_54acdfc2166ad7fcbd074f75fd4a56ba_default,
    descriptors: {
      unicodeRange: "U+6490,U+6493-6494,U+6497-6498,U+649a-649d,U+649f-64a3,U+64a5-64a8,U+64aa-64ab,U+64af,U+64b1-64b4,U+64b6,U+64b9,U+64bb,U+64bd-64bf,U+64c1,U+64c3-64c4,U+64c6-64cc,U+64cf,U+64d1,U+64d3-64d6,U+64d9-64dd,U+64df-64e1,U+64e3,U+64e5,U+64e7-64ff,U+6501-6508,U+650a-6511,U+6513-6517,U+6519-6524,U+6526-652a,U+652c-652d,U+6530-6533,U+6537,U+653a,U+653c-653d,U+6540-6544,U+6546-6547,U+654a-654b,U+654d-654e,U+6550,U+6552-6554,U+6557-6558,U+655a,U+655c,U+655f-6561,U+6564-6565,U+6567-6568"
    }
  },
  {
    uri: Xiaolai_Regular_29cec36cd205b211da97acabaa62f055_default,
    descriptors: {
      unicodeRange: "U+9695-9696,U+969a-969b,U+969d-96a6,U+96a8-96af,U+96b1-96b2,U+96b4-96b5,U+96b7-96b8,U+96ba-96bb,U+96bf,U+96c2-96c3,U+96c8,U+96ca-96cb,U+96d0-96d1,U+96d3-96d4,U+96d6-96df,U+96e1-96e7,U+96eb-96ee,U+96f0-96f2,U+96f4-96f5,U+96f8,U+96fa-96fd,U+96ff,U+9702-9703,U+9705,U+970a-970c,U+9710-9712,U+9714-9715,U+9717-971b,U+971d,U+971f-9729,U+972b-972c,U+972e-972f,U+9731,U+9733-9737,U+973a-973d,U+973f-9751,U+9754-9755,U+9757-9758,U+975a,U+975c-975d,U+975f,U+9763-9764,U+9766-9768,U+976a-9770"
    }
  },
  {
    uri: Xiaolai_Regular_3756e81d3e149cf6099163ee79944fec_default,
    descriptors: {
      unicodeRange: "U+6af0-6b1f,U+6b25-6b26,U+6b28-6b31,U+6b33-6b36,U+6b38,U+6b3b-6b3d,U+6b3f-6b42,U+6b44-6b45,U+6b48,U+6b4a-6b4b,U+6b4d-6b58,U+6b5a-6b61,U+6b68-6b69,U+6b6b-6b78,U+6b7a,U+6b7d-6b80,U+6b85,U+6b88,U+6b8c,U+6b8e-6b91,U+6b94-6b95,U+6b97-6b99,U+6b9c-6ba0,U+6ba2-6ba9,U+6bab-6bb2,U+6bb6,U+6bb8-6bba"
    }
  },
  {
    uri: Xiaolai_Regular_8e9f97f01034820170065b2921b4fb5e_default,
    descriptors: {
      unicodeRange: "U+430e-439a,U+29e8a,U+29ec4,U+29edb,U+29ee9,U+29f7e,U+29f83,U+29f8c,U+29fce,U+2a01a,U+2a02f,U+2a082,U+2a0f9,U+2a190,U+2a38c"
    }
  },
  {
    uri: Xiaolai_Regular_13d2887ec8ee73c43acdabc52a05af7b_default,
    descriptors: { unicodeRange: "U+92ef-933d,U+933f-9369,U+936b-9388" }
  },
  {
    uri: Xiaolai_Regular_72536a3d71b694a0d53dd90ddceae41e_default,
    descriptors: {
      unicodeRange: "U+4512-458d,U+2b300,U+2b363,U+2b36f,U+2b372,U+2b37d,U+2b404,U+2b410,U+2b413,U+2b461,U+2b4ef,U+2b4f6,U+2b4f9,U+2b50d-2b50e,U+2b536,U+2b5ae,U+2b5b3,U+2b5e7,U+2b5f4,U+2b61c-2b61d,U+2b626-2b628,U+2b62a,U+2b62c,U+2b695-2b696,U+2b6ad,U+2b6ed"
    }
  },
  {
    uri: Xiaolai_Regular_603aefd23e350ba7eb124273e3c9bcf1_default,
    descriptors: {
      unicodeRange: "U+88bd-88c0,U+88c3-88c4,U+88c7-88c8,U+88ca-88cd,U+88cf-88d1,U+88d3,U+88d6-88d7,U+88da-88de,U+88e0-88e1,U+88e6-88e7,U+88e9-88ef,U+88f2,U+88f5-88f7,U+88fa-88fb,U+88fd,U+88ff-8901,U+8903-8909,U+890b-890f,U+8911,U+8914-8918,U+891c-8920,U+8922-8924,U+8926-8929,U+892c-892f,U+8931-8933,U+8935,U+8937-8940,U+8942-8943,U+8945-895d,U+8960-8965,U+8967-897a,U+897c-897e,U+8980,U+8982,U+8984-8985"
    }
  },
  { uri: Xiaolai_Regular_095c169f3314805276f603a362766abd_default, descriptors: { unicodeRange: "U+4b0b-4ba0" } },
  {
    uri: Xiaolai_Regular_9544732d2e62d1a429674f8ee41b5d3a_default,
    descriptors: {
      unicodeRange: "U+7179,U+717b-717c,U+717e-7183,U+7185-7189,U+718b-718e,U+7190-7193,U+7195-7197,U+719a-719e,U+71a1-71a7,U+71a9-71ab,U+71ad-71b2,U+71b4,U+71b6-71b8,U+71ba-71c2,U+71c4-71cd,U+71cf-71d3,U+71d6-71df,U+71e1-71e4,U+71e6,U+71e8-71ed,U+71ef-71f8,U+71fa-7205,U+7207-721c,U+721e-7227,U+7229,U+722b,U+722d"
    }
  },
  {
    uri: Xiaolai_Regular_d3716376641d615e2995605b29bca7b6_default,
    descriptors: {
      unicodeRange: "U+982e-9874,U+988b,U+988e,U+9892,U+9895,U+9899,U+98a3,U+98a8-98cd,U+98cf-98d0,U+98d4,U+98d6-98d7,U+98db-98dd,U+98e0-98e6,U+98e9-98fa"
    }
  },
  {
    uri: Xiaolai_Regular_5a1ce3117cfe90c48e8fb4a9a00f694d_default,
    descriptors: {
      unicodeRange: "U+7c14-7c15,U+7c17-7c1e,U+7c20-7c25,U+7c28-7c29,U+7c2b-7c37,U+7c39-7c3e,U+7c42-7c4c,U+7c4e-7c72,U+7c75-7c7a,U+7c7e-7c88,U+7c8a-7c90,U+7c93-7c94,U+7c96,U+7c99-7c9b,U+7ca0-7ca1,U+7ca3,U+7ca6-7ca9,U+7cab-7cad,U+7caf-7cb0,U+7cb4-7cb8,U+7cba-7cbb,U+7cbf-7cc0,U+7cc2-7cc4,U+7cc6,U+7cc9,U+7ccb,U+7cce-7cd4"
    }
  },
  {
    uri: Xiaolai_Regular_b7d203b051eff504ff59ddca7576b6a9_default,
    descriptors: { unicodeRange: "U+7d95-7da5,U+7da7-7dad,U+7daf-7e2a" }
  },
  { uri: Xiaolai_Regular_4a38cc3e9cf104e69ba246d37f8cf135_default, descriptors: { unicodeRange: "U+4a78-4b0a" } },
  {
    uri: Xiaolai_Regular_982b630266d87db93d2539affb1275c6_default,
    descriptors: {
      unicodeRange: "U+9b30-9b31,U+9b33-9b3a,U+9b3d-9b40,U+9b46,U+9b4a-9b4c,U+9b4e,U+9b50,U+9b52-9b53,U+9b55-9bcf"
    }
  },
  {
    uri: Xiaolai_Regular_9592bfc861f07bcb8d75c196b370e548_default,
    descriptors: {
      unicodeRange: "U+6a4b-6a4f,U+6a51-6a57,U+6a5a,U+6a5c-6a60,U+6a62-6a64,U+6a66-6a70,U+6a72-6a78,U+6a7a-6a7b,U+6a7d-6a7f,U+6a81-6a83,U+6a85-6a8d,U+6a8f,U+6a92-6a96,U+6a98-6a9f,U+6aa1-6aa8,U+6aaa,U+6aad-6aef"
    }
  },
  { uri: Xiaolai_Regular_a7accba310e821da5505f71c03b76bdb_default, descriptors: { unicodeRange: "U+99c9-9a53" } },
  {
    uri: Xiaolai_Regular_dac48066b5883d8b4551fc584f0c2a3e_default,
    descriptors: {
      unicodeRange: "U+8550-8555,U+8557-8558,U+855a-855d,U+855f-8563,U+8565-8567,U+8569-8571,U+8573,U+8575-8578,U+857c-857d,U+857f-8583,U+8586,U+8588-858e,U+8590-859a,U+859d-85a3,U+85a5-85a7,U+85a9,U+85ab-85ad,U+85b1-85b6,U+85b8,U+85ba-85c0,U+85c2-85c8,U+85ca-85ce,U+85d1-85d2,U+85d4,U+85d6-85db,U+85dd-85e3,U+85e5-85e8,U+85ea-85fa,U+85fc-85fe,U+8600-8603"
    }
  },
  {
    uri: Xiaolai_Regular_a1f916d6039285c4ffb900cd654e418f_default,
    descriptors: {
      unicodeRange: "U+6fb2,U+6fb4-6fb5,U+6fb7-6fb8,U+6fba-6fbf,U+6fc1,U+6fc3-6fc8,U+6fca-6fd0,U+6fd3-6fdd,U+6fdf,U+6fe2-6fed,U+6ff0-7010,U+7012-7019,U+701c-7022,U+7024-7034,U+7036-7038,U+703a-704b,U+704d-704e,U+7050-7053"
    }
  },
  { uri: Xiaolai_Regular_95bfd249da4902577b4b7d76ebdd0b44_default, descriptors: { unicodeRange: "U+4ba1-4c2c" } },
  {
    uri: Xiaolai_Regular_93fc8f28a33234bcadf1527cafabd502_default,
    descriptors: {
      unicodeRange: "U+9a54-9a6b,U+9a72,U+9a83,U+9a89,U+9a8d-9a8e,U+9a94-9a95,U+9a99,U+9aa6,U+9aa9-9aaf,U+9ab2-9ab5,U+9ab9,U+9abb,U+9abd-9abf,U+9ac3-9ac4,U+9ac6-9aca,U+9acd-9ad0,U+9ad2,U+9ad4-9ad7,U+9ad9-9ade,U+9ae0,U+9ae2-9ae5,U+9ae7-9aea,U+9aec,U+9aee,U+9af0-9af8,U+9afa,U+9afc-9b02,U+9b04-9b07,U+9b09-9b0e,U+9b10-9b12,U+9b14-9b1e,U+9b20-9b22,U+9b24-9b2e"
    }
  },
  { uri: Xiaolai_Regular_903bb6865f3452e2fda42e3a25547bc5_default, descriptors: { unicodeRange: "U+9d1a-9da1" } },
  {
    uri: Xiaolai_Regular_4aca6a43e59aceee2166b0c7e4e85ef1_default,
    descriptors: {
      unicodeRange: "U+9e13-9e1e,U+9e24,U+9e27,U+9e2e,U+9e30,U+9e34,U+9e3b-9e3c,U+9e40,U+9e4d,U+9e50,U+9e52-9e54,U+9e56,U+9e59,U+9e5d,U+9e5f-9e62,U+9e65,U+9e6e-9e6f,U+9e72,U+9e74-9e7d,U+9e80-9e81,U+9e83-9e86,U+9e89-9e8a,U+9e8c-9e91,U+9e94-9e9c,U+9e9e,U+9ea0-9ea5,U+9ea7-9eb3,U+9eb5-9eb7,U+9eb9-9eba,U+9ebc,U+9ebf-9ec3,U+9ec5-9ec8,U+9eca-9ecc,U+9ed0,U+9ed2-9ed3,U+9ed5-9ed7,U+9ed9-9eda,U+9ede,U+9ee1,U+9ee3-9ee4,U+9ee6,U+9ee8,U+9eeb-9eee,U+9ef0-9ef8"
    }
  },
  {
    uri: Xiaolai_Regular_24476a126f129212beb33f66853ea151_default,
    descriptors: {
      unicodeRange: "U+8b1c-8b25,U+8b27-8b65,U+8b67-8b6b,U+8b6d-8b9f,U+8bac,U+8bb1,U+8bbb,U+8bc7,U+8bd0"
    }
  },
  { uri: Xiaolai_Regular_1b611157cd46bb184d4fa4dae2d6a2b8_default, descriptors: { unicodeRange: "U+4cad-4d2f" } },
  {
    uri: Xiaolai_Regular_56a32a7689abd0326e57c10c6c069bb4_default,
    descriptors: {
      unicodeRange: "U+9c4b-9c7b,U+9c7d-9c7e,U+9c80,U+9c83-9c84,U+9c89-9c8a,U+9c8c,U+9c8f,U+9c93,U+9c96-9c99,U+9c9d,U+9caa,U+9cac,U+9caf,U+9cb9,U+9cbe-9cc2,U+9cc8-9cc9,U+9cd1-9cd2,U+9cda-9cdb,U+9ce0-9ce1,U+9ce3-9d19"
    }
  },
  {
    uri: Xiaolai_Regular_3cc70dbb64df5b21f1326cc24dee2195_default,
    descriptors: {
      unicodeRange: "U+9389-938e,U+9390-93c9,U+93cb-93d5,U+93d7-9410"
    }
  },
  {
    uri: Xiaolai_Regular_f6032fc06eb20480f096199713f70885_default,
    descriptors: {
      unicodeRange: "U+20a0-20b5,U+20b9-20ba,U+20bc-20bd,U+4e2c,U+5107,U+5216,U+5293,U+54f3,U+5523,U+5819,U+5adc,U+5c88,U+5e3b,U+5fee,U+62f6,U+63be,U+6484,U+6499,U+67d9,U+67dd,U+6d5e,U+6f46,U+717a,U+71e0,U+72c1,U+73e7,U+75b0,U+7603,U+7722,U+7809,U+7811,U+7946,U+7967,U+799a,U+7b45,U+7ba2,U+8014,U+80d9,U+8159,U+817d,U+81a3,U+81aa,U+8201,U+833c,U+836e,U+83e5,U+8459,U+84f0,U+8729,U+8753,U+87d3,U+89dc,U+8bf6,U+8c2e,U+8e2c,U+8e9c,U+8e9e,U+8ece,U+8fee,U+9139,U+914f,U+9174,U+9191,U+960c,U+9622,U+9a98,U+9b48,U+9ca6,U+9cb0,U+9da2-9e12,U+9e88,U+9f44,U+9f86"
    }
  },
  { uri: Xiaolai_Regular_e2ead7ea7da0437f085f42ffc05f8d13_default, descriptors: { unicodeRange: "U+9bd0-9c4a" } },
  { uri: Xiaolai_Regular_97f7f48ce90c9429bf32ae51469db74d_default, descriptors: { unicodeRange: "U+4c2d-4cac" } },
  { uri: Xiaolai_Regular_24a21c1e4449222e8d1898d69ff3a404_default, descriptors: { unicodeRange: "U+4d30-4dab" } },
  {
    uri: Xiaolai_Regular_726303e0774b4e678bff8c2deb6ca603_default,
    descriptors: { unicodeRange: "U+9411-943d,U+943f-946a,U+946c-9484" }
  },
  {
    uri: Xiaolai_Regular_5a7fac4b8b23a6e4e5ba0c9bf1756c91_default,
    descriptors: {
      unicodeRange: "U+9efa,U+9efd,U+9eff-9f0a,U+9f0c,U+9f0f,U+9f11-9f12,U+9f14-9f16,U+9f18,U+9f1a-9f1f,U+9f21,U+9f23-9f2b,U+9f2d-9f2e,U+9f30-9f36,U+9f38,U+9f3a,U+9f3c,U+9f3f-9f43,U+9f45-9f4f,U+9f52-9f7e,U+9f81-9f82,U+9f8d-9f94"
    }
  },
  {
    uri: Xiaolai_Regular_2b7441d46298788ac94e610ffcc709b6_default,
    descriptors: {
      unicodeRange: "U+7e2b-7e3a,U+7e3c-7e40,U+7e42-7e46,U+7e48-7e81,U+7e83-7e9a,U+7e9c-7e9e,U+7eae,U+7eb4,U+7ebb-7ebc,U+7ed6,U+7ee4,U+7eec,U+7ef9,U+7f0a,U+7f10,U+7f1e,U+7f37,U+7f39,U+7f3b"
    }
  }
];

// fonts/Fonts.ts
var _Fonts = class _Fonts {
  constructor(scene) {
    __publicField(this, "scene");
    /**
     * Get all the font families for the given scene.
     */
    __publicField(this, "getSceneFamilies", () => {
      return _Fonts.getUniqueFamilies(this.scene.getNonDeletedElements());
    });
    /**
     * if we load a (new) font, it's likely that text elements using it have
     * already been rendered using a fallback font. Thus, we want invalidate
     * their shapes and rerender. See #637.
     *
     * Invalidates text elements and rerenders scene, provided that at least one
     * of the supplied fontFaces has not already been processed.
     */
    __publicField(this, "onLoaded", (fontFaces) => {
      let shouldBail = true;
      for (const fontFace of fontFaces) {
        const sig = `${fontFace.family}-${fontFace.style}-${fontFace.weight}-${fontFace.unicodeRange}`;
        if (!_Fonts.loadedFontsCache.has(sig)) {
          _Fonts.loadedFontsCache.add(sig);
          shouldBail = false;
        }
      }
      if (shouldBail) {
        return;
      }
      let didUpdate = false;
      const elementsMap = this.scene.getNonDeletedElementsMap();
      for (const element of this.scene.getNonDeletedElements()) {
        if (isTextElement(element)) {
          didUpdate = true;
          ShapeCache.delete(element);
          charWidth.clearCache(getFontString(element));
          const container = getContainerElement(element, elementsMap);
          if (container) {
            ShapeCache.delete(container);
          }
        }
      }
      if (didUpdate) {
        this.scene.triggerUpdate();
      }
    });
    /**
     * Load font faces for a given scene and trigger scene update.
     */
    __publicField(this, "loadSceneFonts", async () => {
      const sceneFamilies = this.getSceneFamilies();
      const charsPerFamily = _Fonts.getCharsPerFamily(
        this.scene.getNonDeletedElements()
      );
      return _Fonts.loadFontFaces(sceneFamilies, charsPerFamily);
    });
    this.scene = scene;
  }
  static get registered() {
    if (!_Fonts._registered) {
      _Fonts._registered = _Fonts.init();
    } else if (!_Fonts._initialized) {
      _Fonts._registered = new Map([
        ..._Fonts.init().entries(),
        ..._Fonts._registered.entries()
      ]);
    }
    return _Fonts._registered;
  }
  get registered() {
    return _Fonts.registered;
  }
  /**
   * Generate CSS @font-face declarations for the given elements.
   */
  static async generateFontFaceDeclarations(elements) {
    const families = _Fonts.getUniqueFamilies(elements);
    const charsPerFamily = _Fonts.getCharsPerFamily(elements);
    const familyWithCJK = families.find(
      (x) => getFontFamilyFallbacks(x).includes(CJK_HAND_DRAWN_FALLBACK_FONT)
    );
    if (familyWithCJK) {
      const characters = _Fonts.getCharacters(charsPerFamily, familyWithCJK);
      if (containsCJK(characters)) {
        const family = FONT_FAMILY_FALLBACKS[CJK_HAND_DRAWN_FALLBACK_FONT];
        charsPerFamily[family] = new Set(characters);
        families.unshift(FONT_FAMILY_FALLBACKS[CJK_HAND_DRAWN_FALLBACK_FONT]);
      }
    }
    const iterator = _Fonts.fontFacesStylesGenerator(families, charsPerFamily);
    const concurrency = 3;
    const fontFaces = await new PromisePool(iterator, concurrency).all();
    return Array.from(new Set(fontFaces));
  }
  static async loadFontFaces(fontFamilies, charsPerFamily) {
    for (const { fontFaces: fontFaces2, metadata } of _Fonts.registered.values()) {
      if (metadata.local) {
        continue;
      }
      for (const { fontFace } of fontFaces2) {
        if (!window.document.fonts.has(fontFace)) {
          window.document.fonts.add(fontFace);
        }
      }
    }
    const iterator = _Fonts.fontFacesLoader(fontFamilies, charsPerFamily);
    const concurrency = 10;
    const fontFaces = await new PromisePool(iterator, concurrency).all();
    return fontFaces.flat().filter(Boolean);
  }
  static *fontFacesLoader(fontFamilies, charsPerFamily) {
    for (const [index, fontFamily] of fontFamilies.entries()) {
      const font = getFontString({
        fontFamily,
        fontSize: 16
      });
      const text = _Fonts.getCharacters(charsPerFamily, fontFamily);
      if (!window.document.fonts.check(font, text)) {
        yield promiseTry(async () => {
          try {
            const fontFaces = await window.document.fonts.load(font, text);
            return [index, fontFaces];
          } catch (e) {
            console.error(
              `Failed to load font "${font}" from urls "${_Fonts.registered.get(fontFamily)?.fontFaces.map((x) => x.urls)}"`,
              e
            );
          }
        });
      }
    }
  }
  static *fontFacesStylesGenerator(families, charsPerFamily) {
    for (const [familyIndex, family] of families.entries()) {
      const { fontFaces, metadata } = _Fonts.registered.get(family) ?? {};
      if (!Array.isArray(fontFaces)) {
        console.error(
          `Couldn't find registered fonts for font-family "${family}"`,
          _Fonts.registered
        );
        continue;
      }
      if (metadata?.local) {
        continue;
      }
      for (const [fontFaceIndex, fontFace] of fontFaces.entries()) {
        yield promiseTry(async () => {
          try {
            const characters = _Fonts.getCharacters(charsPerFamily, family);
            const fontFaceCSS = await fontFace.toCSS(characters);
            if (!fontFaceCSS) {
              return;
            }
            const fontFaceOrder = familyIndex * 1e4 + fontFaceIndex;
            const fontFaceTuple = [fontFaceOrder, fontFaceCSS];
            return fontFaceTuple;
          } catch (error) {
            console.error(
              `Couldn't transform font-face to css for family "${fontFace.fontFace.family}"`,
              error
            );
          }
        });
      }
    }
  }
  /**
   * Register a new font.
   *
   * @param family font family
   * @param metadata font metadata
   * @param fontFacesDecriptors font faces descriptors
   */
  static register(family, metadata, ...fontFacesDecriptors) {
    const fontFamily = FONT_FAMILY[family] ?? FONT_FAMILY_FALLBACKS[family];
    const registeredFamily = this.registered.get(fontFamily);
    if (!registeredFamily) {
      this.registered.set(fontFamily, {
        metadata,
        fontFaces: fontFacesDecriptors.map(
          ({ uri, descriptors }) => new ExcalidrawFontFace(family, uri, descriptors)
        )
      });
    }
    return this.registered;
  }
  /**
   * WARN: should be called just once on init, even across multiple instances.
   */
  static init() {
    const fonts = {
      registered: /* @__PURE__ */ new Map()
    };
    const init = (family, ...fontFacesDescriptors) => {
      const fontFamily = FONT_FAMILY[family] ?? FONT_FAMILY_FALLBACKS[family];
      const metadata = FONT_METADATA[fontFamily] ?? FONT_METADATA[FONT_FAMILY.Excalifont];
      _Fonts.register.call(fonts, family, metadata, ...fontFacesDescriptors);
    };
    init("Cascadia", ...CascadiaFontFaces);
    init("Comic Shanns", ...ComicShannsFontFaces);
    init("Excalifont", ...ExcalifontFontFaces);
    init("Helvetica", ...HelveticaFontFaces);
    init("Liberation Sans", ...LiberationFontFaces);
    init("Lilita One", ...LilitaFontFaces);
    init("Nunito", ...NunitoFontFaces);
    init("Virgil", ...VirgilFontFaces);
    init(CJK_HAND_DRAWN_FALLBACK_FONT, ...XiaolaiFontFaces);
    init(WINDOWS_EMOJI_FALLBACK_FONT, ...EmojiFontFaces);
    _Fonts._initialized = true;
    return fonts.registered;
  }
  /**
   * Get all the unique font families for the given elements.
   */
  static getUniqueFamilies(elements) {
    return Array.from(
      elements.reduce((families, element) => {
        if (isTextElement(element)) {
          families.add(element.fontFamily);
        }
        return families;
      }, /* @__PURE__ */ new Set())
    );
  }
  /**
   * Get all the unique characters per font family for the given scene.
   */
  static getCharsPerFamily(elements) {
    const charsPerFamily = {};
    for (const element of elements) {
      if (!isTextElement(element)) {
        continue;
      }
      for (const char of element.originalText) {
        if (!charsPerFamily[element.fontFamily]) {
          charsPerFamily[element.fontFamily] = /* @__PURE__ */ new Set();
        }
        charsPerFamily[element.fontFamily].add(char);
      }
    }
    return charsPerFamily;
  }
  /**
   * Get characters for a given family.
   */
  static getCharacters(charsPerFamily, family) {
    return charsPerFamily[family] ? Array.from(charsPerFamily[family]).join("") : "";
  }
  /**
   * Get all registered font families.
   */
  static getAllFamilies() {
    return Array.from(_Fonts.registered.keys());
  }
};
// it's ok to track fonts across multiple instances only once, so let's use
// a static member to reduce memory footprint
__publicField(_Fonts, "loadedFontsCache", /* @__PURE__ */ new Set());
__publicField(_Fonts, "_registered");
__publicField(_Fonts, "_initialized", false);
/**
 * Load font faces for passed elements - use when the scene is unavailable (i.e. export).
 */
__publicField(_Fonts, "loadElementsFonts", async (elements) => {
  const fontFamilies = _Fonts.getUniqueFamilies(elements);
  const charsPerFamily = _Fonts.getCharsPerFamily(elements);
  return _Fonts.loadFontFaces(fontFamilies, charsPerFamily);
});
var Fonts = _Fonts;

// ../element/src/elementLink.ts
var defaultGetElementLinkFromSelection = (id, type) => {
  const url = window.location.href;
  try {
    const link = new URL(url);
    link.searchParams.set(ELEMENT_LINK_KEY, id);
    return normalizeLink(link.toString());
  } catch (error) {
    console.error(error);
  }
  return normalizeLink(url);
};
var getLinkIdAndTypeFromSelection = (selectedElements, appState) => {
  if (selectedElements.length > 0 && canCreateLinkFromElements(selectedElements)) {
    if (selectedElements.length === 1) {
      return {
        id: selectedElements[0].id,
        type: "element"
      };
    }
    if (selectedElements.length > 1) {
      const selectedGroupId = Object.keys(appState.selectedGroupIds)[0];
      if (selectedGroupId) {
        return {
          id: selectedGroupId,
          type: "group"
        };
      }
      return {
        id: selectedElements[0].groupIds[0],
        type: "group"
      };
    }
  }
  return null;
};
var canCreateLinkFromElements = (selectedElements) => {
  if (selectedElements.length === 1) {
    return true;
  }
  if (selectedElements.length > 1 && elementsAreInSameGroup(selectedElements)) {
    return true;
  }
  return false;
};
var isElementLink = (url) => {
  try {
    const _url = new URL(url);
    return _url.searchParams.has(ELEMENT_LINK_KEY) && _url.host === window.location.host;
  } catch (error) {
    return false;
  }
};
var parseElementLinkFromURL = (url) => {
  try {
    const { searchParams } = new URL(url);
    if (searchParams.has(ELEMENT_LINK_KEY)) {
      const id = searchParams.get(ELEMENT_LINK_KEY);
      return id;
    }
  } catch {
  }
  return null;
};

// ../element/src/embeddable.ts
var embeddedLinkCache = /* @__PURE__ */ new Map();
var RE_YOUTUBE = /^(?:http(?:s)?:\/\/)?(?:www\.)?youtu(?:be\.com|\.be)\/(embed\/|watch\?v=|shorts\/|playlist\?list=|embed\/videoseries\?list=)?([a-zA-Z0-9_-]+)(?:\?t=|&t=|\?start=|&start=)?([a-zA-Z0-9_-]+)?[^\s]*$/;
var RE_VIMEO = /^(?:http(?:s)?:\/\/)?(?:(?:w){3}\.)?(?:player\.)?vimeo\.com\/(?:video\/)?([^?\s]+)(?:\?.*)?$/;
var RE_FIGMA = /^https:\/\/(?:www\.)?figma\.com/;
var RE_GH_GIST = /^https:\/\/gist\.github\.com\/([\w_-]+)\/([\w_-]+)/;
var RE_GH_GIST_EMBED = /^<script[\s\S]*?\ssrc=["'](https:\/\/gist\.github\.com\/.*?)\.js["']/i;
var RE_TWITTER = /(?:https?:\/\/)?(?:(?:w){3}\.)?(?:twitter|x)\.com\/[^/]+\/status\/(\d+)/;
var RE_TWITTER_EMBED = /^<blockquote[\s\S]*?\shref=["'](https?:\/\/(?:twitter|x)\.com\/[^"']*)/i;
var RE_VALTOWN = /^https:\/\/(?:www\.)?val\.town\/(v|embed)\/[a-zA-Z_$][0-9a-zA-Z_$]+\.[a-zA-Z_$][0-9a-zA-Z_$]+/;
var RE_GENERIC_EMBED = /^<(?:iframe|blockquote)[\s\S]*?\s(?:src|href)=["']([^"']*)["'][\s\S]*?>$/i;
var RE_GIPHY = /giphy.com\/(?:clips|embed|gifs)\/[a-zA-Z0-9]*?-?([a-zA-Z0-9]+)(?:[^a-zA-Z0-9]|$)/;
var RE_REDDIT = /^(?:http(?:s)?:\/\/)?(?:www\.)?reddit\.com\/r\/([a-zA-Z0-9_]+)\/comments\/([a-zA-Z0-9_]+)\/([a-zA-Z0-9_]+)\/?(?:\?[^#\s]*)?(?:#[^\s]*)?$/;
var RE_REDDIT_EMBED = /^<blockquote[\s\S]*?\shref=["'](https?:\/\/(?:www\.)?reddit\.com\/[^"']*)/i;
var ALLOWED_DOMAINS = /* @__PURE__ */ new Set([
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "player.vimeo.com",
  "figma.com",
  "link.excalidraw.com",
  "gist.github.com",
  "twitter.com",
  "x.com",
  "*.simplepdf.eu",
  "stackblitz.com",
  "val.town",
  "giphy.com",
  "reddit.com"
]);
var ALLOW_SAME_ORIGIN = /* @__PURE__ */ new Set([
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "player.vimeo.com",
  "figma.com",
  "twitter.com",
  "x.com",
  "*.simplepdf.eu",
  "stackblitz.com",
  "reddit.com"
]);
var createSrcDoc = (body) => {
  return `<html><body>${body}</body></html>`;
};
var getEmbedLink = (link) => {
  if (!link) {
    return null;
  }
  if (embeddedLinkCache.has(link)) {
    return embeddedLinkCache.get(link);
  }
  const originalLink = link;
  const allowSameOrigin = ALLOW_SAME_ORIGIN.has(
    matchHostname(link, ALLOW_SAME_ORIGIN) || ""
  );
  let type = "generic";
  let aspectRatio = { w: 560, h: 840 };
  const ytLink = link.match(RE_YOUTUBE);
  if (ytLink?.[2]) {
    const time = ytLink[3] ? `&start=${ytLink[3]}` : ``;
    const isPortrait = link.includes("shorts");
    type = "video";
    switch (ytLink[1]) {
      case "embed/":
      case "watch?v=":
      case "shorts/":
        link = `https://www.youtube.com/embed/${ytLink[2]}?enablejsapi=1${time}`;
        break;
      case "playlist?list=":
      case "embed/videoseries?list=":
        link = `https://www.youtube.com/embed/videoseries?list=${ytLink[2]}&enablejsapi=1${time}`;
        break;
      default:
        link = `https://www.youtube.com/embed/${ytLink[2]}?enablejsapi=1${time}`;
        break;
    }
    aspectRatio = isPortrait ? { w: 315, h: 560 } : { w: 560, h: 315 };
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    };
  }
  const vimeoLink = link.match(RE_VIMEO);
  if (vimeoLink?.[1]) {
    const target = vimeoLink?.[1];
    const error = !/^\d+$/.test(target) ? new URIError("Invalid embed link format") : void 0;
    type = "video";
    link = `https://player.vimeo.com/video/${target}?api=1`;
    aspectRatio = { w: 560, h: 315 };
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      error,
      sandbox: { allowSameOrigin }
    };
  }
  const figmaLink = link.match(RE_FIGMA);
  if (figmaLink) {
    type = "generic";
    link = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
      link
    )}`;
    aspectRatio = { w: 550, h: 550 };
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    };
  }
  const valLink = link.match(RE_VALTOWN);
  if (valLink) {
    link = valLink[1] === "embed" ? valLink[0] : valLink[0].replace("/v", "/embed");
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    };
  }
  if (RE_TWITTER.test(link)) {
    const postId = link.match(RE_TWITTER)[1];
    const safeURL = escapeDoubleQuotes(
      `https://twitter.com/x/status/${postId}`
    );
    const ret = {
      type: "document",
      srcdoc: (theme) => createSrcDoc(
        `<blockquote class="twitter-tweet" data-dnt="true" data-theme="${theme}"><a href="${safeURL}"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>`
      ),
      intrinsicSize: { w: 480, h: 480 },
      sandbox: { allowSameOrigin }
    };
    embeddedLinkCache.set(originalLink, ret);
    return ret;
  }
  if (RE_REDDIT.test(link)) {
    const [, page, postId, title] = link.match(RE_REDDIT);
    const safeURL = escapeDoubleQuotes(
      `https://reddit.com/r/${page}/comments/${postId}/${title}`
    );
    const ret = {
      type: "document",
      srcdoc: (theme) => createSrcDoc(
        `<blockquote class="reddit-embed-bq" data-embed-theme="${theme}"><a href="${safeURL}"></a><br></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"><\/script>`
      ),
      intrinsicSize: { w: 480, h: 480 },
      sandbox: { allowSameOrigin }
    };
    embeddedLinkCache.set(originalLink, ret);
    return ret;
  }
  if (RE_GH_GIST.test(link)) {
    const [, user, gistId] = link.match(RE_GH_GIST);
    const safeURL = escapeDoubleQuotes(
      `https://gist.github.com/${user}/${gistId}`
    );
    const ret = {
      type: "document",
      srcdoc: () => createSrcDoc(`
          <script src="${safeURL}.js"><\/script>
          <style type="text/css">
            * { margin: 0px; }
            table, .gist { height: 100%; }
            .gist .gist-file { height: calc(100vh - 2px); padding: 0px; display: grid; grid-template-rows: 1fr auto; }
          </style>
        `),
      intrinsicSize: { w: 550, h: 720 },
      sandbox: { allowSameOrigin }
    };
    embeddedLinkCache.set(link, ret);
    return ret;
  }
  embeddedLinkCache.set(link, {
    link,
    intrinsicSize: aspectRatio,
    type,
    sandbox: { allowSameOrigin }
  });
  return {
    link,
    intrinsicSize: aspectRatio,
    type,
    sandbox: { allowSameOrigin }
  };
};
var createPlaceholderEmbeddableLabel = (element) => {
  let text;
  if (isIframeElement(element)) {
    text = "IFrame element";
  } else {
    text = !element.link || element?.link === "" ? "Empty Web-Embed" : element.link;
  }
  const fontSize = Math.max(
    Math.min(element.width / 2, element.width / text.length),
    element.width / 30
  );
  const fontFamily = FONT_FAMILY.Helvetica;
  const fontString = getFontString({
    fontSize,
    fontFamily
  });
  return newTextElement({
    x: element.x + element.width / 2,
    y: element.y + element.height / 2,
    strokeColor: element.strokeColor !== "transparent" ? element.strokeColor : "black",
    backgroundColor: "transparent",
    fontFamily,
    fontSize,
    text: wrapText(text, fontString, element.width - 20),
    textAlign: "center",
    verticalAlign: VERTICAL_ALIGN.MIDDLE,
    angle: element.angle ?? 0
  });
};
var matchHostname = (url, allowedHostnames) => {
  try {
    const { hostname } = new URL(url);
    const bareDomain = hostname.replace(/^www\./, "");
    if (allowedHostnames instanceof Set) {
      if (ALLOWED_DOMAINS.has(bareDomain)) {
        return bareDomain;
      }
      const bareDomainWithFirstSubdomainWildcarded = bareDomain.replace(
        /^([^.]+)/,
        "*"
      );
      if (ALLOWED_DOMAINS.has(bareDomainWithFirstSubdomainWildcarded)) {
        return bareDomainWithFirstSubdomainWildcarded;
      }
      return null;
    }
    const bareAllowedHostname = allowedHostnames.replace(/^www\./, "");
    if (bareDomain === bareAllowedHostname) {
      return bareAllowedHostname;
    }
  } catch (error) {
  }
  return null;
};
var maybeParseEmbedSrc = (str) => {
  const twitterMatch = str.match(RE_TWITTER_EMBED);
  if (twitterMatch && twitterMatch.length === 2) {
    return twitterMatch[1];
  }
  const redditMatch = str.match(RE_REDDIT_EMBED);
  if (redditMatch && redditMatch.length === 2) {
    return redditMatch[1];
  }
  const gistMatch = str.match(RE_GH_GIST_EMBED);
  if (gistMatch && gistMatch.length === 2) {
    return gistMatch[1];
  }
  if (RE_GIPHY.test(str)) {
    return `https://giphy.com/embed/${RE_GIPHY.exec(str)[1]}`;
  }
  const match = str.match(RE_GENERIC_EMBED);
  if (match && match.length === 2) {
    return match[1];
  }
  return str;
};
var embeddableURLValidator = (url, validateEmbeddable) => {
  if (!url) {
    return false;
  }
  if (validateEmbeddable != null) {
    if (typeof validateEmbeddable === "function") {
      const ret = validateEmbeddable(url);
      if (typeof ret === "boolean") {
        return ret;
      }
    } else if (typeof validateEmbeddable === "boolean") {
      return validateEmbeddable;
    } else if (validateEmbeddable instanceof RegExp) {
      return validateEmbeddable.test(url);
    } else if (Array.isArray(validateEmbeddable)) {
      for (const domain of validateEmbeddable) {
        if (domain instanceof RegExp) {
          if (url.match(domain)) {
            return true;
          }
        } else if (matchHostname(url, domain)) {
          return true;
        }
      }
      return false;
    }
  }
  return !!matchHostname(url, ALLOWED_DOMAINS);
};

// components/hyperlink/helpers.ts
var EXTERNAL_LINK_IMG = document.createElement("img");
EXTERNAL_LINK_IMG.src = `data:${MIME_TYPES.svg}, ${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1971c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
)}`;
var ELEMENT_LINK_IMG = document.createElement("img");
ELEMENT_LINK_IMG.src = `data:${MIME_TYPES.svg}, ${encodeURIComponent(
  `<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#1971c2"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-right-line"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z" /><path d="M3 9v6" /></svg>`
)}`;
var getLinkHandleFromCoords = ([x1, y1, x2, y2], angle, appState) => {
  const size = DEFAULT_LINK_SIZE;
  const linkWidth = size / appState.zoom.value;
  const linkHeight = size / appState.zoom.value;
  const linkMarginY = size / appState.zoom.value;
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;
  const centeringOffset = (size - 8) / (2 * appState.zoom.value);
  const dashedLineMargin = 4 / appState.zoom.value;
  const x = x2 + dashedLineMargin - centeringOffset;
  const y = y1 - dashedLineMargin - linkMarginY + centeringOffset;
  const [rotatedX, rotatedY] = pointRotateRads(
    pointFrom(x + linkWidth / 2, y + linkHeight / 2),
    pointFrom(centerX, centerY),
    angle
  );
  return [
    rotatedX - linkWidth / 2,
    rotatedY - linkHeight / 2,
    linkWidth,
    linkHeight
  ];
};
var isPointHittingLinkIcon = (element, elementsMap, appState, [x, y]) => {
  const threshold = 4 / appState.zoom.value;
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const [linkX, linkY, linkWidth, linkHeight] = getLinkHandleFromCoords(
    [x1, y1, x2, y2],
    element.angle,
    appState
  );
  const hitLink = x > linkX - threshold && x < linkX + threshold + linkWidth && y > linkY - threshold && y < linkY + linkHeight + threshold;
  return hitLink;
};
var isPointHittingLink = (element, elementsMap, appState, [x, y], isMobile) => {
  if (!element.link || appState.selectedElementIds[element.id]) {
    return false;
  }
  if (!isMobile && appState.viewModeEnabled && hitElementBoundingBox(x, y, element, elementsMap)) {
    return true;
  }
  return isPointHittingLinkIcon(
    element,
    elementsMap,
    appState,
    pointFrom(x, y)
  );
};

// renderer/helpers.ts
var fillCircle = (context, cx, cy, radius, stroke = true) => {
  context.beginPath();
  context.arc(cx, cy, radius, 0, Math.PI * 2);
  context.fill();
  if (stroke) {
    context.stroke();
  }
};
var getNormalizedCanvasDimensions = (canvas, scale) => {
  return [canvas.width / scale, canvas.height / scale];
};
var bootstrapCanvas = ({
  canvas,
  scale,
  normalizedWidth,
  normalizedHeight,
  theme,
  isExporting,
  viewBackgroundColor
}) => {
  const context = canvas.getContext("2d");
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.scale(scale, scale);
  if (isExporting && theme === THEME.DARK) {
    context.filter = THEME_FILTER;
  }
  if (typeof viewBackgroundColor === "string") {
    const hasTransparence = viewBackgroundColor === "transparent" || viewBackgroundColor.length === 5 || // #RGBA
    viewBackgroundColor.length === 9 || // #RRGGBBA
    /(hsla|rgba)\(/.test(viewBackgroundColor);
    if (hasTransparence) {
      context.clearRect(0, 0, normalizedWidth, normalizedHeight);
    }
    context.save();
    context.fillStyle = viewBackgroundColor;
    context.fillRect(0, 0, normalizedWidth, normalizedHeight);
    context.restore();
  } else {
    context.clearRect(0, 0, normalizedWidth, normalizedHeight);
  }
  return context;
};

// renderer/staticScene.ts
var GridLineColor = {
  Bold: "#dddddd",
  Regular: "#e5e5e5"
};
var strokeGrid = (context, gridSize, gridStep, scrollX, scrollY, zoom, width, height) => {
  const offsetX = scrollX % gridSize - gridSize;
  const offsetY = scrollY % gridSize - gridSize;
  const actualGridSize = gridSize * zoom.value;
  const spaceWidth = 1 / zoom.value;
  context.save();
  if (zoom.value === 1) {
    context.translate(offsetX % 1 ? 0 : 0.5, offsetY % 1 ? 0 : 0.5);
  }
  for (let x = offsetX; x < offsetX + width + gridSize * 2; x += gridSize) {
    const isBold = gridStep > 1 && Math.round(x - scrollX) % (gridStep * gridSize) === 0;
    if (!isBold && actualGridSize < 10) {
      continue;
    }
    const lineWidth = Math.min(1 / zoom.value, isBold ? 4 : 1);
    context.lineWidth = lineWidth;
    const lineDash = [lineWidth * 3, spaceWidth + (lineWidth + spaceWidth)];
    context.beginPath();
    context.setLineDash(isBold ? [] : lineDash);
    context.strokeStyle = isBold ? GridLineColor.Bold : GridLineColor.Regular;
    context.moveTo(x, offsetY - gridSize);
    context.lineTo(x, Math.ceil(offsetY + height + gridSize * 2));
    context.stroke();
  }
  for (let y = offsetY; y < offsetY + height + gridSize * 2; y += gridSize) {
    const isBold = gridStep > 1 && Math.round(y - scrollY) % (gridStep * gridSize) === 0;
    if (!isBold && actualGridSize < 10) {
      continue;
    }
    const lineWidth = Math.min(1 / zoom.value, isBold ? 4 : 1);
    context.lineWidth = lineWidth;
    const lineDash = [lineWidth * 3, spaceWidth + (lineWidth + spaceWidth)];
    context.beginPath();
    context.setLineDash(isBold ? [] : lineDash);
    context.strokeStyle = isBold ? GridLineColor.Bold : GridLineColor.Regular;
    context.moveTo(offsetX - gridSize, y);
    context.lineTo(Math.ceil(offsetX + width + gridSize * 2), y);
    context.stroke();
  }
  context.restore();
};
var frameClip = (frame, context, renderConfig, appState) => {
  context.translate(frame.x + appState.scrollX, frame.y + appState.scrollY);
  context.beginPath();
  if (context.roundRect) {
    context.roundRect(
      0,
      0,
      frame.width,
      frame.height,
      FRAME_STYLE.radius / appState.zoom.value
    );
  } else {
    context.rect(0, 0, frame.width, frame.height);
  }
  context.clip();
  context.translate(
    -(frame.x + appState.scrollX),
    -(frame.y + appState.scrollY)
  );
};
var linkIconCanvasCache = {
  regularLink: null,
  elementLink: null
};
var renderLinkIcon = (element, context, appState, elementsMap) => {
  if (element.link && !appState.selectedElementIds[element.id]) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const [x, y, width, height] = getLinkHandleFromCoords(
      [x1, y1, x2, y2],
      element.angle,
      appState
    );
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    context.save();
    context.translate(appState.scrollX + centerX, appState.scrollY + centerY);
    context.rotate(element.angle);
    const canvasKey = isElementLink(element.link) ? "elementLink" : "regularLink";
    let linkCanvas = linkIconCanvasCache[canvasKey];
    if (!linkCanvas || linkCanvas.zoom !== appState.zoom.value) {
      linkCanvas = Object.assign(document.createElement("canvas"), {
        zoom: appState.zoom.value
      });
      linkCanvas.width = width * window.devicePixelRatio * appState.zoom.value;
      linkCanvas.height = height * window.devicePixelRatio * appState.zoom.value;
      linkIconCanvasCache[canvasKey] = linkCanvas;
      const linkCanvasCacheContext = linkCanvas.getContext("2d");
      linkCanvasCacheContext.scale(
        window.devicePixelRatio * appState.zoom.value,
        window.devicePixelRatio * appState.zoom.value
      );
      linkCanvasCacheContext.fillStyle = "#fff";
      linkCanvasCacheContext.fillRect(0, 0, width, height);
      if (canvasKey === "elementLink") {
        linkCanvasCacheContext.drawImage(ELEMENT_LINK_IMG, 0, 0, width, height);
      } else {
        linkCanvasCacheContext.drawImage(
          EXTERNAL_LINK_IMG,
          0,
          0,
          width,
          height
        );
      }
      linkCanvasCacheContext.restore();
    }
    context.drawImage(linkCanvas, x - centerX, y - centerY, width, height);
    context.restore();
  }
};
var _renderStaticScene = ({
  canvas,
  rc,
  elementsMap,
  allElementsMap,
  visibleElements,
  scale,
  appState,
  renderConfig
}) => {
  if (canvas === null) {
    return;
  }
  const { renderGrid = true, isExporting } = renderConfig;
  const [normalizedWidth, normalizedHeight] = getNormalizedCanvasDimensions(
    canvas,
    scale
  );
  const context = bootstrapCanvas({
    canvas,
    scale,
    normalizedWidth,
    normalizedHeight,
    theme: appState.theme,
    isExporting,
    viewBackgroundColor: appState.viewBackgroundColor
  });
  context.scale(appState.zoom.value, appState.zoom.value);
  if (renderGrid) {
    strokeGrid(
      context,
      appState.gridSize,
      appState.gridStep,
      appState.scrollX,
      appState.scrollY,
      appState.zoom,
      normalizedWidth / appState.zoom.value,
      normalizedHeight / appState.zoom.value
    );
  }
  const groupsToBeAddedToFrame = /* @__PURE__ */ new Set();
  visibleElements.forEach((element) => {
    if (element.groupIds.length > 0 && appState.frameToHighlight && appState.selectedElementIds[element.id] && (elementOverlapsWithFrame(
      element,
      appState.frameToHighlight,
      elementsMap
    ) || element.groupIds.find((groupId) => groupsToBeAddedToFrame.has(groupId)))) {
      element.groupIds.forEach(
        (groupId) => groupsToBeAddedToFrame.add(groupId)
      );
    }
  });
  const inFrameGroupsMap = /* @__PURE__ */ new Map();
  visibleElements.filter((el) => !isIframeLikeElement(el)).forEach((element) => {
    try {
      const frameId = element.frameId || appState.frameToHighlight?.id;
      if (isTextElement(element) && element.containerId && elementsMap.has(element.containerId)) {
        return;
      }
      context.save();
      if (frameId && appState.frameRendering.enabled && appState.frameRendering.clip) {
        const frame = getTargetFrame(element, elementsMap, appState);
        if (frame && shouldApplyFrameClip(
          element,
          frame,
          appState,
          elementsMap,
          inFrameGroupsMap
        )) {
          frameClip(frame, context, renderConfig, appState);
        }
        renderElement(
          element,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
      } else {
        renderElement(
          element,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
      }
      const boundTextElement = getBoundTextElement(element, elementsMap);
      if (boundTextElement) {
        renderElement(
          boundTextElement,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
      }
      context.restore();
      if (!isExporting) {
        renderLinkIcon(element, context, appState, elementsMap);
      }
    } catch (error) {
      console.error(
        error,
        element.id,
        element.x,
        element.y,
        element.width,
        element.height
      );
    }
  });
  visibleElements.filter((el) => isIframeLikeElement(el)).forEach((element) => {
    try {
      const render = () => {
        renderElement(
          element,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
        if (isIframeLikeElement(element) && (isExporting || isEmbeddableElement(element) && renderConfig.embedsValidationStatus.get(element.id) !== true) && element.width && element.height) {
          const label = createPlaceholderEmbeddableLabel(element);
          renderElement(
            label,
            elementsMap,
            allElementsMap,
            rc,
            context,
            renderConfig,
            appState
          );
        }
        if (!isExporting) {
          renderLinkIcon(element, context, appState, elementsMap);
        }
      };
      const frameId = element.frameId || appState.frameToHighlight?.id;
      if (frameId && appState.frameRendering.enabled && appState.frameRendering.clip) {
        context.save();
        const frame = getTargetFrame(element, elementsMap, appState);
        if (frame && shouldApplyFrameClip(
          element,
          frame,
          appState,
          elementsMap,
          inFrameGroupsMap
        )) {
          frameClip(frame, context, renderConfig, appState);
        }
        render();
        context.restore();
      } else {
        render();
      }
    } catch (error) {
      console.error(error);
    }
  });
  renderConfig.pendingFlowchartNodes?.forEach((element) => {
    try {
      renderElement(
        element,
        elementsMap,
        allElementsMap,
        rc,
        context,
        renderConfig,
        appState
      );
    } catch (error) {
      console.error(error);
    }
  });
};
var renderStaticSceneThrottled = throttleRAF(
  (config) => {
    _renderStaticScene(config);
  },
  { trailing: true }
);
var renderStaticScene = (renderConfig, throttle2) => {
  if (throttle2) {
    renderStaticSceneThrottled(renderConfig);
    return;
  }
  _renderStaticScene(renderConfig);
};

// renderer/staticSvgScene.ts
var roughSVGDrawWithPrecision = (rsvg, drawable, precision) => {
  if (typeof precision === "undefined") {
    return rsvg.draw(drawable);
  }
  const pshape = {
    sets: drawable.sets,
    shape: drawable.shape,
    options: { ...drawable.options, fixedDecimalPlaceDigits: precision }
  };
  return rsvg.draw(pshape);
};
var maybeWrapNodesInFrameClipPath = (element, root, nodes, frameRendering, elementsMap) => {
  if (!frameRendering.enabled || !frameRendering.clip) {
    return null;
  }
  const frame = getContainingFrame(element, elementsMap);
  if (frame) {
    const g = root.ownerDocument.createElementNS(SVG_NS, "g");
    g.setAttributeNS(SVG_NS, "clip-path", `url(#${frame.id})`);
    nodes.forEach((node) => g.appendChild(node));
    return g;
  }
  return null;
};
var renderElementToSvg = (element, elementsMap, rsvg, svgRoot, files, offsetX, offsetY, renderConfig) => {
  const offset = { x: offsetX, y: offsetY };
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  let cx = (x2 - x1) / 2 - (element.x - x1);
  let cy = (y2 - y1) / 2 - (element.y - y1);
  if (isTextElement(element)) {
    const container = getContainerElement(element, elementsMap);
    if (isArrowElement(container)) {
      const [x12, y12, x22, y22] = getElementAbsoluteCoords(container, elementsMap);
      const boundTextCoords = LinearElementEditor.getBoundTextElementPosition(
        container,
        element,
        elementsMap
      );
      cx = (x22 - x12) / 2 - (boundTextCoords.x - x12);
      cy = (y22 - y12) / 2 - (boundTextCoords.y - y12);
      offsetX = offsetX + boundTextCoords.x - element.x;
      offsetY = offsetY + boundTextCoords.y - element.y;
    }
  }
  const degree = 180 * element.angle / Math.PI;
  let root = svgRoot;
  if (element.link) {
    const anchorTag = svgRoot.ownerDocument.createElementNS(SVG_NS, "a");
    anchorTag.setAttribute("href", normalizeLink(element.link));
    root.appendChild(anchorTag);
    root = anchorTag;
  }
  const addToRoot = (node, element2) => {
    if (isTestEnv()) {
      node.setAttribute("data-id", element2.id);
    }
    root.appendChild(node);
  };
  const opacity = (getContainingFrame(element, elementsMap)?.opacity ?? 100) * element.opacity / 1e4;
  switch (element.type) {
    case "selection": {
      throw new Error("Selection rendering is not supported for SVG");
    }
    case "rectangle":
    case "diamond":
    case "ellipse": {
      const shape = ShapeCache.generateElementShape(element, null);
      const node = roughSVGDrawWithPrecision(
        rsvg,
        shape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      );
      if (opacity !== 1) {
        node.setAttribute("stroke-opacity", `${opacity}`);
        node.setAttribute("fill-opacity", `${opacity}`);
      }
      node.setAttribute("stroke-linecap", "round");
      node.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      const g = maybeWrapNodesInFrameClipPath(
        element,
        root,
        [node],
        renderConfig.frameRendering,
        elementsMap
      );
      addToRoot(g || node, element);
      break;
    }
    case "iframe":
    case "embeddable": {
      const shape = ShapeCache.generateElementShape(element, renderConfig);
      const node = roughSVGDrawWithPrecision(
        rsvg,
        shape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      );
      const opacity2 = element.opacity / 100;
      if (opacity2 !== 1) {
        node.setAttribute("stroke-opacity", `${opacity2}`);
        node.setAttribute("fill-opacity", `${opacity2}`);
      }
      node.setAttribute("stroke-linecap", "round");
      node.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      addToRoot(node, element);
      const label = createPlaceholderEmbeddableLabel(element);
      renderElementToSvg(
        label,
        elementsMap,
        rsvg,
        root,
        files,
        label.x + offset.x - element.x,
        label.y + offset.y - element.y,
        renderConfig
      );
      const embeddableNode = roughSVGDrawWithPrecision(
        rsvg,
        shape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      );
      embeddableNode.setAttribute("stroke-linecap", "round");
      embeddableNode.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      while (embeddableNode.firstChild) {
        embeddableNode.removeChild(embeddableNode.firstChild);
      }
      const radius = getCornerRadius(
        Math.min(element.width, element.height),
        element
      );
      const embedLink = getEmbedLink(toValidURL(element.link || ""));
      if (renderConfig.renderEmbeddables === false || embedLink?.type === "document") {
        const anchorTag = svgRoot.ownerDocument.createElementNS(SVG_NS, "a");
        anchorTag.setAttribute("href", normalizeLink(element.link || ""));
        anchorTag.setAttribute("target", "_blank");
        anchorTag.setAttribute("rel", "noopener noreferrer");
        anchorTag.style.borderRadius = `${radius}px`;
        embeddableNode.appendChild(anchorTag);
      } else {
        const foreignObject = svgRoot.ownerDocument.createElementNS(
          SVG_NS,
          "foreignObject"
        );
        foreignObject.style.width = `${element.width}px`;
        foreignObject.style.height = `${element.height}px`;
        foreignObject.style.border = "none";
        const div = foreignObject.ownerDocument.createElementNS(SVG_NS, "div");
        div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        div.style.width = "100%";
        div.style.height = "100%";
        const iframe = div.ownerDocument.createElement("iframe");
        iframe.src = embedLink?.link ?? "";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.borderRadius = `${radius}px`;
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.allowFullscreen = true;
        div.appendChild(iframe);
        foreignObject.appendChild(div);
        embeddableNode.appendChild(foreignObject);
      }
      addToRoot(embeddableNode, element);
      break;
    }
    case "line":
    case "arrow": {
      const boundText = getBoundTextElement(element, elementsMap);
      const maskPath = svgRoot.ownerDocument.createElementNS(SVG_NS, "mask");
      if (boundText) {
        maskPath.setAttribute("id", `mask-${element.id}`);
        const maskRectVisible = svgRoot.ownerDocument.createElementNS(
          SVG_NS,
          "rect"
        );
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;
        maskRectVisible.setAttribute("x", "0");
        maskRectVisible.setAttribute("y", "0");
        maskRectVisible.setAttribute("fill", "#fff");
        maskRectVisible.setAttribute(
          "width",
          `${element.width + 100 + offsetX}`
        );
        maskRectVisible.setAttribute(
          "height",
          `${element.height + 100 + offsetY}`
        );
        maskPath.appendChild(maskRectVisible);
        const maskRectInvisible = svgRoot.ownerDocument.createElementNS(
          SVG_NS,
          "rect"
        );
        const boundTextCoords = LinearElementEditor.getBoundTextElementPosition(
          element,
          boundText,
          elementsMap
        );
        const maskX = offsetX + boundTextCoords.x - element.x;
        const maskY = offsetY + boundTextCoords.y - element.y;
        maskRectInvisible.setAttribute("x", maskX.toString());
        maskRectInvisible.setAttribute("y", maskY.toString());
        maskRectInvisible.setAttribute("fill", "#000");
        maskRectInvisible.setAttribute("width", `${boundText.width}`);
        maskRectInvisible.setAttribute("height", `${boundText.height}`);
        maskRectInvisible.setAttribute("opacity", "1");
        maskPath.appendChild(maskRectInvisible);
      }
      const group = svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
      if (boundText) {
        group.setAttribute("mask", `url(#mask-${element.id})`);
      }
      group.setAttribute("stroke-linecap", "round");
      const shapes = ShapeCache.generateElementShape(element, renderConfig);
      shapes.forEach((shape) => {
        const node = roughSVGDrawWithPrecision(
          rsvg,
          shape,
          MAX_DECIMALS_FOR_SVG_EXPORT
        );
        if (opacity !== 1) {
          node.setAttribute("stroke-opacity", `${opacity}`);
          node.setAttribute("fill-opacity", `${opacity}`);
        }
        node.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        if (element.type === "line" && isPathALoop(element.points) && element.backgroundColor !== "transparent") {
          node.setAttribute("fill-rule", "evenodd");
        }
        group.appendChild(node);
      });
      const g = maybeWrapNodesInFrameClipPath(
        element,
        root,
        [group, maskPath],
        renderConfig.frameRendering,
        elementsMap
      );
      if (g) {
        addToRoot(g, element);
        root.appendChild(g);
      } else {
        addToRoot(group, element);
        root.append(maskPath);
      }
      break;
    }
    case "freedraw": {
      const backgroundFillShape = ShapeCache.generateElementShape(
        element,
        renderConfig
      );
      const node = backgroundFillShape ? roughSVGDrawWithPrecision(
        rsvg,
        backgroundFillShape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      ) : svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
      if (opacity !== 1) {
        node.setAttribute("stroke-opacity", `${opacity}`);
        node.setAttribute("fill-opacity", `${opacity}`);
      }
      node.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      node.setAttribute("stroke", "none");
      const path = svgRoot.ownerDocument.createElementNS(SVG_NS, "path");
      path.setAttribute("fill", element.strokeColor);
      path.setAttribute("d", getFreeDrawSvgPath(element));
      node.appendChild(path);
      const g = maybeWrapNodesInFrameClipPath(
        element,
        root,
        [node],
        renderConfig.frameRendering,
        elementsMap
      );
      addToRoot(g || node, element);
      break;
    }
    case "image": {
      const width = Math.round(element.width);
      const height = Math.round(element.height);
      const fileData = isInitializedImageElement(element) && files[element.fileId];
      if (fileData) {
        const { reuseImages = true } = renderConfig;
        let symbolId = `image-${fileData.id}`;
        let uncroppedWidth = element.width;
        let uncroppedHeight = element.height;
        if (element.crop) {
          ({ width: uncroppedWidth, height: uncroppedHeight } = getUncroppedWidthAndHeight(element));
          symbolId = `image-crop-${fileData.id}-${hashString(
            `${uncroppedWidth}x${uncroppedHeight}`
          )}`;
        }
        if (!reuseImages) {
          symbolId = `image-${element.id}`;
        }
        let symbol = svgRoot.querySelector(`#${symbolId}`);
        if (!symbol) {
          symbol = svgRoot.ownerDocument.createElementNS(SVG_NS, "symbol");
          symbol.id = symbolId;
          const image = svgRoot.ownerDocument.createElementNS(SVG_NS, "image");
          image.setAttribute("href", fileData.dataURL);
          image.setAttribute("preserveAspectRatio", "none");
          if (element.crop || !reuseImages) {
            image.setAttribute("width", `${uncroppedWidth}`);
            image.setAttribute("height", `${uncroppedHeight}`);
          } else {
            image.setAttribute("width", "100%");
            image.setAttribute("height", "100%");
          }
          symbol.appendChild(image);
          (root.querySelector("defs") || root).prepend(symbol);
        }
        const use = svgRoot.ownerDocument.createElementNS(SVG_NS, "use");
        use.setAttribute("href", `#${symbolId}`);
        if (renderConfig.exportWithDarkMode && fileData.mimeType !== MIME_TYPES.svg) {
          use.setAttribute("filter", IMAGE_INVERT_FILTER);
        }
        let normalizedCropX = 0;
        let normalizedCropY = 0;
        if (element.crop) {
          const { width: uncroppedWidth2, height: uncroppedHeight2 } = getUncroppedWidthAndHeight(element);
          normalizedCropX = element.crop.x / (element.crop.naturalWidth / uncroppedWidth2);
          normalizedCropY = element.crop.y / (element.crop.naturalHeight / uncroppedHeight2);
        }
        const adjustedCenterX = cx + normalizedCropX;
        const adjustedCenterY = cy + normalizedCropY;
        use.setAttribute("width", `${width + normalizedCropX}`);
        use.setAttribute("height", `${height + normalizedCropY}`);
        use.setAttribute("opacity", `${opacity}`);
        if (element.scale[0] !== 1 || element.scale[1] !== 1) {
          use.setAttribute(
            "transform",
            `translate(${adjustedCenterX} ${adjustedCenterY}) scale(${element.scale[0]} ${element.scale[1]}) translate(${-adjustedCenterX} ${-adjustedCenterY})`
          );
        }
        const g = svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
        if (element.crop) {
          const mask = svgRoot.ownerDocument.createElementNS(SVG_NS, "mask");
          mask.setAttribute("id", `mask-image-crop-${element.id}`);
          mask.setAttribute("fill", "#fff");
          const maskRect = svgRoot.ownerDocument.createElementNS(
            SVG_NS,
            "rect"
          );
          maskRect.setAttribute("x", `${normalizedCropX}`);
          maskRect.setAttribute("y", `${normalizedCropY}`);
          maskRect.setAttribute("width", `${width}`);
          maskRect.setAttribute("height", `${height}`);
          mask.appendChild(maskRect);
          root.appendChild(mask);
          g.setAttribute("mask", `url(#${mask.id})`);
        }
        g.appendChild(use);
        g.setAttribute(
          "transform",
          `translate(${offsetX - normalizedCropX} ${offsetY - normalizedCropY}) rotate(${degree} ${adjustedCenterX} ${adjustedCenterY})`
        );
        if (element.roundness) {
          const clipPath = svgRoot.ownerDocument.createElementNS(
            SVG_NS,
            "clipPath"
          );
          clipPath.id = `image-clipPath-${element.id}`;
          const clipRect = svgRoot.ownerDocument.createElementNS(
            SVG_NS,
            "rect"
          );
          const radius = getCornerRadius(
            Math.min(element.width, element.height),
            element
          );
          clipRect.setAttribute("width", `${element.width}`);
          clipRect.setAttribute("height", `${element.height}`);
          clipRect.setAttribute("rx", `${radius}`);
          clipRect.setAttribute("ry", `${radius}`);
          clipPath.appendChild(clipRect);
          addToRoot(clipPath, element);
          g.setAttributeNS(SVG_NS, "clip-path", `url(#${clipPath.id})`);
        }
        const clipG = maybeWrapNodesInFrameClipPath(
          element,
          root,
          [g],
          renderConfig.frameRendering,
          elementsMap
        );
        addToRoot(clipG || g, element);
      }
      break;
    }
    case "frame":
    case "magicframe": {
      if (renderConfig.frameRendering.enabled && renderConfig.frameRendering.outline) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        rect.setAttribute("width", `${element.width}px`);
        rect.setAttribute("height", `${element.height}px`);
        rect.setAttribute("rx", FRAME_STYLE.radius.toString());
        rect.setAttribute("ry", FRAME_STYLE.radius.toString());
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", FRAME_STYLE.strokeColor);
        rect.setAttribute("stroke-width", FRAME_STYLE.strokeWidth.toString());
        addToRoot(rect, element);
      }
      break;
    }
    default: {
      if (isTextElement(element)) {
        const node = svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
        if (opacity !== 1) {
          node.setAttribute("stroke-opacity", `${opacity}`);
          node.setAttribute("fill-opacity", `${opacity}`);
        }
        node.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        const lines = element.text.replace(/\r\n?/g, "\n").split("\n");
        const lineHeightPx = getLineHeightInPx(
          element.fontSize,
          element.lineHeight
        );
        const horizontalOffset = element.textAlign === "center" ? element.width / 2 : element.textAlign === "right" ? element.width : 0;
        const verticalOffset = getVerticalOffset(
          element.fontFamily,
          element.fontSize,
          lineHeightPx
        );
        const direction = isRTL(element.text) ? "rtl" : "ltr";
        const textAnchor = element.textAlign === "center" ? "middle" : element.textAlign === "right" || direction === "rtl" ? "end" : "start";
        for (let i = 0; i < lines.length; i++) {
          const text = svgRoot.ownerDocument.createElementNS(SVG_NS, "text");
          text.textContent = lines[i];
          text.setAttribute("x", `${horizontalOffset}`);
          text.setAttribute("y", `${i * lineHeightPx + verticalOffset}`);
          text.setAttribute("font-family", getFontFamilyString(element));
          text.setAttribute("font-size", `${element.fontSize}px`);
          text.setAttribute("fill", element.strokeColor);
          text.setAttribute("text-anchor", textAnchor);
          text.setAttribute("style", "white-space: pre;");
          text.setAttribute("direction", direction);
          text.setAttribute("dominant-baseline", "alphabetic");
          node.appendChild(text);
        }
        const g = maybeWrapNodesInFrameClipPath(
          element,
          root,
          [node],
          renderConfig.frameRendering,
          elementsMap
        );
        addToRoot(g || node, element);
      } else {
        throw new Error(`Unimplemented type ${element.type}`);
      }
    }
  }
};
var renderSceneToSvg = (elements, elementsMap, rsvg, svgRoot, files, renderConfig) => {
  if (!svgRoot) {
    return;
  }
  elements.filter((el) => !isIframeLikeElement(el)).forEach((element) => {
    if (!element.isDeleted) {
      if (isTextElement(element) && element.containerId && elementsMap.has(element.containerId)) {
        return;
      }
      try {
        renderElementToSvg(
          element,
          elementsMap,
          rsvg,
          svgRoot,
          files,
          element.x + renderConfig.offsetX,
          element.y + renderConfig.offsetY,
          renderConfig
        );
        const boundTextElement = getBoundTextElement(element, elementsMap);
        if (boundTextElement) {
          renderElementToSvg(
            boundTextElement,
            elementsMap,
            rsvg,
            svgRoot,
            files,
            boundTextElement.x + renderConfig.offsetX,
            boundTextElement.y + renderConfig.offsetY,
            renderConfig
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
  elements.filter((el) => isIframeLikeElement(el)).forEach((element) => {
    if (!element.isDeleted) {
      try {
        renderElementToSvg(
          element,
          elementsMap,
          rsvg,
          svgRoot,
          files,
          element.x + renderConfig.offsetX,
          element.y + renderConfig.offsetY,
          renderConfig
        );
      } catch (error) {
        console.error(error);
      }
    }
  });
};

// scene/export.ts
var truncateText = (element, maxWidth) => {
  if (element.width <= maxWidth) {
    return element;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = getFontString({
    fontFamily: element.fontFamily,
    fontSize: element.fontSize
  });
  let text = element.text;
  const metrics = ctx.measureText(text);
  if (metrics.width > maxWidth) {
    for (let i = text.length; i > 0; i--) {
      const newText = `${text.slice(0, i)}...`;
      if (ctx.measureText(newText).width <= maxWidth) {
        text = newText;
        break;
      }
    }
  }
  return newElementWith(element, { text, width: maxWidth });
};
var addFrameLabelsAsTextElements = (elements, opts) => {
  const nextElements = [];
  for (const element of elements) {
    if (isFrameLikeElement(element)) {
      let textElement = newTextElement({
        x: element.x,
        y: element.y - FRAME_STYLE.nameOffsetY,
        fontFamily: FONT_FAMILY.Helvetica,
        fontSize: FRAME_STYLE.nameFontSize,
        lineHeight: FRAME_STYLE.nameLineHeight,
        strokeColor: opts.exportWithDarkMode ? FRAME_STYLE.nameColorDarkTheme : FRAME_STYLE.nameColorLightTheme,
        text: getFrameLikeTitle(element)
      });
      textElement.y -= textElement.height;
      textElement = truncateText(textElement, element.width);
      nextElements.push(textElement);
    }
    nextElements.push(element);
  }
  return nextElements;
};
var getFrameRenderingConfig = (exportingFrame, frameRendering) => {
  frameRendering = frameRendering || getDefaultAppState().frameRendering;
  return {
    enabled: exportingFrame ? true : frameRendering.enabled,
    outline: exportingFrame ? false : frameRendering.outline,
    name: exportingFrame ? false : frameRendering.name,
    clip: exportingFrame ? true : frameRendering.clip
  };
};
var prepareElementsForRender = ({
  elements,
  exportingFrame,
  frameRendering,
  exportWithDarkMode
}) => {
  let nextElements;
  if (exportingFrame) {
    nextElements = getElementsOverlappingFrame(elements, exportingFrame);
  } else if (frameRendering.enabled && frameRendering.name) {
    nextElements = addFrameLabelsAsTextElements(elements, {
      exportWithDarkMode
    });
  } else {
    nextElements = elements;
  }
  return nextElements;
};
var exportToCanvas = async (elements, appState, files, {
  exportBackground,
  exportPadding = DEFAULT_EXPORT_PADDING,
  viewBackgroundColor,
  exportingFrame
}, createCanvas = (width, height) => {
  const canvas = document.createElement("canvas");
  canvas.width = width * appState.exportScale;
  canvas.height = height * appState.exportScale;
  return { canvas, scale: appState.exportScale };
}, loadFonts = async () => {
  await Fonts.loadElementsFonts(elements);
}) => {
  await loadFonts();
  const frameRendering = getFrameRenderingConfig(
    exportingFrame ?? null,
    appState.frameRendering ?? null
  );
  if (exportingFrame) {
    frameRendering.clip = false;
  }
  const elementsForRender = prepareElementsForRender({
    elements,
    exportingFrame,
    exportWithDarkMode: appState.exportWithDarkMode,
    frameRendering
  });
  if (exportingFrame) {
    exportPadding = 0;
  }
  const [minX, minY, width, height] = getCanvasSize(
    exportingFrame ? [exportingFrame] : getRootElements(elementsForRender),
    exportPadding
  );
  const { canvas, scale = 1 } = createCanvas(width, height);
  const defaultAppState = getDefaultAppState();
  const { imageCache } = await updateImageCache({
    imageCache: /* @__PURE__ */ new Map(),
    fileIds: getInitializedImageElements(elementsForRender).map(
      (element) => element.fileId
    ),
    files
  });
  renderStaticScene({
    canvas,
    rc: rough3.canvas(canvas),
    elementsMap: toBrandedType(
      arrayToMap(elementsForRender)
    ),
    allElementsMap: toBrandedType(
      arrayToMap(syncInvalidIndices(elements))
    ),
    visibleElements: elementsForRender,
    scale,
    appState: {
      ...appState,
      frameRendering,
      viewBackgroundColor: exportBackground ? viewBackgroundColor : null,
      scrollX: -minX + exportPadding,
      scrollY: -minY + exportPadding,
      zoom: defaultAppState.zoom,
      shouldCacheIgnoreZoom: false,
      theme: appState.exportWithDarkMode ? THEME.DARK : THEME.LIGHT
    },
    renderConfig: {
      canvasBackgroundColor: viewBackgroundColor,
      imageCache,
      renderGrid: false,
      isExporting: true,
      // empty disables embeddable rendering
      embedsValidationStatus: /* @__PURE__ */ new Map(),
      elementsPendingErasure: /* @__PURE__ */ new Set(),
      pendingFlowchartNodes: null
    }
  });
  return canvas;
};
var createHTMLComment = (text) => {
  return document.createComment(` ${text} `);
};
var exportToSvg = async (elements, appState, files, opts) => {
  const frameRendering = getFrameRenderingConfig(
    opts?.exportingFrame ?? null,
    appState.frameRendering ?? null
  );
  let {
    exportPadding = DEFAULT_EXPORT_PADDING,
    exportWithDarkMode = false,
    viewBackgroundColor,
    exportScale = 1,
    exportEmbedScene
  } = appState;
  const { exportingFrame = null } = opts || {};
  const elementsForRender = prepareElementsForRender({
    elements,
    exportingFrame,
    exportWithDarkMode,
    frameRendering
  });
  if (exportingFrame) {
    exportPadding = 0;
  }
  const [minX, minY, width, height] = getCanvasSize(
    exportingFrame ? [exportingFrame] : getRootElements(elementsForRender),
    exportPadding
  );
  const offsetX = -minX + exportPadding;
  const offsetY = -minY + exportPadding;
  const svgRoot = document.createElementNS(SVG_NS, "svg");
  svgRoot.setAttribute("version", "1.1");
  svgRoot.setAttribute("xmlns", SVG_NS);
  svgRoot.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svgRoot.setAttribute("width", `${width * exportScale}`);
  svgRoot.setAttribute("height", `${height * exportScale}`);
  if (exportWithDarkMode) {
    svgRoot.setAttribute("filter", THEME_FILTER);
  }
  const defsElement = svgRoot.ownerDocument.createElementNS(SVG_NS, "defs");
  const metadataElement = svgRoot.ownerDocument.createElementNS(
    SVG_NS,
    "metadata"
  );
  svgRoot.appendChild(createHTMLComment("svg-source:excalidraw"));
  svgRoot.appendChild(metadataElement);
  svgRoot.appendChild(defsElement);
  if (exportEmbedScene) {
    try {
      encodeSvgBase64Payload({
        metadataElement,
        // when embedding scene, we want to embed the origionally supplied
        // elements which don't contain the temp frame labels.
        // But it also requires that the exportToSvg is being supplied with
        // only the elements that we're exporting, and no extra.
        payload: serializeAsJSON(elements, appState, files || {}, "local")
      });
    } catch (error) {
      console.error(error);
    }
  }
  const frameElements = getFrameLikeElements(elements);
  if (frameElements.length) {
    const elementsMap = arrayToMap(elements);
    for (const frame of frameElements) {
      const clipPath = svgRoot.ownerDocument.createElementNS(
        SVG_NS,
        "clipPath"
      );
      clipPath.setAttribute("id", frame.id);
      const [x1, y1, x2, y2] = getElementAbsoluteCoords(frame, elementsMap);
      const cx = (x2 - x1) / 2 - (frame.x - x1);
      const cy = (y2 - y1) / 2 - (frame.y - y1);
      const rect = svgRoot.ownerDocument.createElementNS(SVG_NS, "rect");
      rect.setAttribute(
        "transform",
        `translate(${frame.x + offsetX} ${frame.y + offsetY}) rotate(${frame.angle} ${cx} ${cy})`
      );
      rect.setAttribute("width", `${frame.width}`);
      rect.setAttribute("height", `${frame.height}`);
      if (!exportingFrame) {
        rect.setAttribute("rx", `${FRAME_STYLE.radius}`);
        rect.setAttribute("ry", `${FRAME_STYLE.radius}`);
      }
      clipPath.appendChild(rect);
      defsElement.appendChild(clipPath);
    }
  }
  const fontFaces = !opts?.skipInliningFonts ? await Fonts.generateFontFaceDeclarations(elements) : [];
  const delimiter = "\n      ";
  const style = svgRoot.ownerDocument.createElementNS(SVG_NS, "style");
  style.classList.add("style-fonts");
  style.appendChild(
    document.createTextNode(`${delimiter}${fontFaces.join(delimiter)}`)
  );
  defsElement.appendChild(style);
  if (appState.exportBackground && viewBackgroundColor) {
    const rect = svgRoot.ownerDocument.createElementNS(SVG_NS, "rect");
    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0");
    rect.setAttribute("width", `${width}`);
    rect.setAttribute("height", `${height}`);
    rect.setAttribute("fill", viewBackgroundColor);
    svgRoot.appendChild(rect);
  }
  const rsvg = rough3.svg(svgRoot);
  const renderEmbeddables = opts?.renderEmbeddables ?? false;
  renderSceneToSvg(
    elementsForRender,
    toBrandedType(arrayToMap(elementsForRender)),
    rsvg,
    svgRoot,
    files || {},
    {
      offsetX,
      offsetY,
      isExporting: true,
      exportWithDarkMode,
      renderEmbeddables,
      frameRendering,
      canvasBackgroundColor: viewBackgroundColor,
      embedsValidationStatus: renderEmbeddables ? new Map(
        elementsForRender.filter((element) => isFrameLikeElement(element)).map((element) => [element.id, true])
      ) : /* @__PURE__ */ new Map(),
      reuseImages: opts?.reuseImages ?? true
    }
  );
  return svgRoot;
};
var encodeSvgBase64Payload = ({
  payload,
  metadataElement
}) => {
  const base64 = stringToBase64(
    JSON.stringify(encode({ text: payload })),
    true
  );
  metadataElement.appendChild(
    createHTMLComment(`payload-type:${MIME_TYPES.excalidraw}`)
  );
  metadataElement.appendChild(createHTMLComment("payload-version:2"));
  metadataElement.appendChild(createHTMLComment("payload-start"));
  metadataElement.appendChild(document.createTextNode(base64));
  metadataElement.appendChild(createHTMLComment("payload-end"));
};
var decodeSvgBase64Payload = ({ svg }) => {
  if (svg.includes(`payload-type:${MIME_TYPES.excalidraw}`)) {
    const match = svg.match(
      /<!-- payload-start -->\s*(.+?)\s*<!-- payload-end -->/
    );
    if (!match) {
      throw new Error("INVALID");
    }
    const versionMatch = svg.match(/<!-- payload-version:(\d+) -->/);
    const version = versionMatch?.[1] || "1";
    const isByteString = version !== "1";
    try {
      const json = base64ToString(match[1], isByteString);
      const encodedData = JSON.parse(json);
      if (!("encoded" in encodedData)) {
        if ("type" in encodedData && encodedData.type === EXPORT_DATA_TYPES.excalidraw) {
          return json;
        }
        throw new Error("FAILED");
      }
      return decode(encodedData);
    } catch (error) {
      console.error(error);
      throw new Error("FAILED");
    }
  }
  throw new Error("INVALID");
};
var getCanvasSize = (elements, exportPadding) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  const width = distance(minX, maxX) + exportPadding * 2;
  const height = distance(minY, maxY) + exportPadding * 2;
  return [minX, minY, width, height];
};
var getExportSize = (elements, exportPadding, scale) => {
  const [, , width, height] = getCanvasSize(elements, exportPadding).map(
    (dimension) => Math.trunc(dimension * scale)
  );
  return [width, height];
};

// data/restore.ts
var AllowedExcalidrawActiveTools = {
  selection: true,
  text: true,
  rectangle: true,
  diamond: true,
  ellipse: true,
  line: true,
  image: true,
  arrow: true,
  freedraw: true,
  eraser: false,
  custom: true,
  frame: true,
  embeddable: true,
  hand: true,
  laser: false,
  magicframe: false
};
var getFontFamilyByName = (fontFamilyName) => {
  if (Object.keys(FONT_FAMILY).includes(fontFamilyName)) {
    return FONT_FAMILY[fontFamilyName];
  }
  return DEFAULT_FONT_FAMILY;
};
var repairBinding = (element, binding) => {
  if (!binding) {
    return null;
  }
  const focus = binding.focus || 0;
  if (isElbowArrow(element)) {
    const fixedPointBinding = isFixedPointBinding(binding) ? {
      ...binding,
      focus,
      fixedPoint: normalizeFixedPoint(binding.fixedPoint ?? [0, 0])
    } : null;
    return fixedPointBinding;
  }
  return {
    ...binding,
    focus
  };
};
var restoreElementWithProperties = (element, extra) => {
  const base = {
    type: extra.type || element.type,
    // all elements must have version > 0 so getSceneVersion() will pick up
    // newly added elements
    version: element.version || 1,
    versionNonce: element.versionNonce ?? 0,
    index: element.index ?? null,
    isDeleted: element.isDeleted ?? false,
    id: element.id || randomId(),
    fillStyle: element.fillStyle || DEFAULT_ELEMENT_PROPS.fillStyle,
    strokeWidth: element.strokeWidth || DEFAULT_ELEMENT_PROPS.strokeWidth,
    strokeStyle: element.strokeStyle ?? DEFAULT_ELEMENT_PROPS.strokeStyle,
    roughness: element.roughness ?? DEFAULT_ELEMENT_PROPS.roughness,
    opacity: element.opacity == null ? DEFAULT_ELEMENT_PROPS.opacity : element.opacity,
    angle: element.angle || 0,
    x: extra.x ?? element.x ?? 0,
    y: extra.y ?? element.y ?? 0,
    strokeColor: element.strokeColor || DEFAULT_ELEMENT_PROPS.strokeColor,
    backgroundColor: element.backgroundColor || DEFAULT_ELEMENT_PROPS.backgroundColor,
    width: element.width || 0,
    height: element.height || 0,
    seed: element.seed ?? 1,
    groupIds: element.groupIds ?? [],
    frameId: element.frameId ?? null,
    roundness: element.roundness ? element.roundness : element.strokeSharpness === "round" ? {
      // for old elements that would now use adaptive radius algo,
      // use legacy algo instead
      type: isUsingAdaptiveRadius(element.type) ? ROUNDNESS.LEGACY : ROUNDNESS.PROPORTIONAL_RADIUS
    } : null,
    boundElements: element.boundElementIds ? element.boundElementIds.map((id) => ({ type: "arrow", id })) : element.boundElements ?? [],
    updated: element.updated ?? getUpdatedTimestamp(),
    link: element.link ? normalizeLink(element.link) : null,
    locked: element.locked ?? false
  };
  if ("customData" in element || "customData" in extra) {
    base.customData = "customData" in extra ? extra.customData : element.customData;
  }
  const ret = {
    // spread the original element properties to not lose unknown ones
    // for forward-compatibility
    ...element,
    // normalized properties
    ...base,
    ...getNormalizedDimensions(base),
    ...extra
  };
  delete ret.strokeSharpness;
  delete ret.boundElementIds;
  return ret;
};
var restoreElement = (element) => {
  element = { ...element };
  switch (element.type) {
    case "text":
      delete element.rawText;
      let fontSize = element.fontSize;
      let fontFamily = element.fontFamily;
      if ("font" in element) {
        const [fontPx, _fontFamily] = element.font.split(" ");
        fontSize = parseFloat(fontPx);
        fontFamily = getFontFamilyByName(_fontFamily);
      }
      const text = typeof element.text === "string" && element.text || "";
      const lineHeight = element.lineHeight || (element.height ? (
        // detect line-height from current element height and font-size
        detectLineHeight(element)
      ) : (
        // no element height likely means programmatic use, so default
        // to a fixed line height
        getLineHeight(element.fontFamily)
      ));
      element = restoreElementWithProperties(element, {
        fontSize,
        fontFamily,
        text,
        textAlign: element.textAlign || DEFAULT_TEXT_ALIGN,
        verticalAlign: element.verticalAlign || DEFAULT_VERTICAL_ALIGN,
        containerId: element.containerId ?? null,
        originalText: element.originalText || text,
        autoResize: element.autoResize ?? true,
        lineHeight
      });
      if (!text && !element.isDeleted) {
        element = { ...element, originalText: text, isDeleted: true };
        element = bumpVersion(element);
      }
      return element;
    case "freedraw": {
      return restoreElementWithProperties(element, {
        points: element.points,
        lastCommittedPoint: null,
        simulatePressure: element.simulatePressure,
        pressures: element.pressures
      });
    }
    case "image":
      return restoreElementWithProperties(element, {
        status: element.status || "pending",
        fileId: element.fileId,
        scale: element.scale || [1, 1],
        crop: element.crop ?? null
      });
    case "line":
    case "draw":
      const { startArrowhead = null, endArrowhead = null } = element;
      let x = element.x;
      let y = element.y;
      let points = (
        // migrate old arrow model to new one
        !Array.isArray(element.points) || element.points.length < 2 ? [pointFrom(0, 0), pointFrom(element.width, element.height)] : element.points
      );
      if (points[0][0] !== 0 || points[0][1] !== 0) {
        ({ points, x, y } = LinearElementEditor.getNormalizedPoints(element));
      }
      return restoreElementWithProperties(element, {
        type: element.type === "draw" ? "line" : element.type,
        startBinding: repairBinding(element, element.startBinding),
        endBinding: repairBinding(element, element.endBinding),
        lastCommittedPoint: null,
        startArrowhead,
        endArrowhead,
        points,
        x,
        y,
        ...getSizeFromPoints(points)
      });
    case "arrow": {
      const { startArrowhead: startArrowhead2 = null, endArrowhead: endArrowhead2 = "arrow" } = element;
      let x2 = element.x;
      let y2 = element.y;
      let points2 = (
        // migrate old arrow model to new one
        !Array.isArray(element.points) || element.points.length < 2 ? [pointFrom(0, 0), pointFrom(element.width, element.height)] : element.points
      );
      if (points2[0][0] !== 0 || points2[0][1] !== 0) {
        ({ points: points2, x: x2, y: y2 } = LinearElementEditor.getNormalizedPoints(element));
      }
      const base = {
        type: element.type,
        startBinding: repairBinding(element, element.startBinding),
        endBinding: repairBinding(element, element.endBinding),
        lastCommittedPoint: null,
        startArrowhead: startArrowhead2,
        endArrowhead: endArrowhead2,
        points: points2,
        x: x2,
        y: y2,
        elbowed: element.elbowed,
        ...getSizeFromPoints(points2)
      };
      return isElbowArrow(element) ? restoreElementWithProperties(element, {
        ...base,
        elbowed: true,
        startBinding: repairBinding(element, element.startBinding),
        endBinding: repairBinding(element, element.endBinding),
        fixedSegments: element.fixedSegments,
        startIsSpecial: element.startIsSpecial,
        endIsSpecial: element.endIsSpecial
      }) : restoreElementWithProperties(element, base);
    }
    case "ellipse":
    case "rectangle":
    case "diamond":
    case "iframe":
    case "embeddable":
      return restoreElementWithProperties(element, {});
    case "magicframe":
    case "frame":
      return restoreElementWithProperties(element, {
        name: element.name ?? null
      });
  }
  return null;
};
var repairContainerElement = (container, elementsMap) => {
  if (container.boundElements) {
    const boundElements = container.boundElements.slice();
    const boundIds = /* @__PURE__ */ new Set();
    container.boundElements = boundElements.reduce(
      (acc, binding) => {
        const boundElement = elementsMap.get(binding.id);
        if (boundElement && !boundIds.has(binding.id)) {
          boundIds.add(binding.id);
          if (boundElement.isDeleted) {
            return acc;
          }
          acc.push(binding);
          if (isTextElement(boundElement) && // being slightly conservative here, preserving existing containerId
          // if defined, lest boundElements is stale
          !boundElement.containerId) {
            boundElement.containerId = container.id;
          }
        }
        return acc;
      },
      []
    );
  }
};
var repairBoundElement = (boundElement, elementsMap) => {
  const container = boundElement.containerId ? elementsMap.get(boundElement.containerId) : null;
  if (!container) {
    boundElement.containerId = null;
    return;
  }
  if (boundElement.isDeleted) {
    return;
  }
  if (container.boundElements && !container.boundElements.find((binding) => binding.id === boundElement.id)) {
    const boundElements = (container.boundElements || (container.boundElements = [])).slice();
    boundElements.push({ type: "text", id: boundElement.id });
    container.boundElements = boundElements;
  }
};
var repairFrameMembership = (element, elementsMap) => {
  if (element.frameId) {
    const containingFrame = elementsMap.get(element.frameId);
    if (!containingFrame) {
      element.frameId = null;
    }
  }
};
var restoreElements = (elements, localElements, opts) => {
  const existingIds = /* @__PURE__ */ new Set();
  const localElementsMap = localElements ? arrayToMap(localElements) : null;
  const restoredElements = syncInvalidIndices(
    (elements || []).reduce((elements2, element) => {
      if (element.type !== "selection" && !isInvisiblySmallElement(element)) {
        let migratedElement = restoreElement(element);
        if (migratedElement) {
          const localElement = localElementsMap?.get(element.id);
          if (localElement && localElement.version > migratedElement.version) {
            migratedElement = bumpVersion(
              migratedElement,
              localElement.version
            );
          }
          if (existingIds.has(migratedElement.id)) {
            migratedElement = { ...migratedElement, id: randomId() };
          }
          existingIds.add(migratedElement.id);
          elements2.push(migratedElement);
        }
      }
      return elements2;
    }, [])
  );
  if (!opts?.repairBindings) {
    return restoredElements;
  }
  const restoredElementsMap = arrayToMap(restoredElements);
  for (const element of restoredElements) {
    if (element.frameId) {
      repairFrameMembership(element, restoredElementsMap);
    }
    if (isTextElement(element) && element.containerId) {
      repairBoundElement(element, restoredElementsMap);
    } else if (element.boundElements) {
      repairContainerElement(element, restoredElementsMap);
    }
    if (opts.refreshDimensions && isTextElement(element)) {
      Object.assign(
        element,
        refreshTextDimensions(
          element,
          getContainerElement(element, restoredElementsMap),
          restoredElementsMap
        )
      );
    }
    if (isLinearElement(element)) {
      if (element.startBinding && (!restoredElementsMap.has(element.startBinding.elementId) || !isArrowElement(element))) {
        element.startBinding = null;
      }
      if (element.endBinding && (!restoredElementsMap.has(element.endBinding.elementId) || !isArrowElement(element))) {
        element.endBinding = null;
      }
    }
  }
  return restoredElements.map((element) => {
    if (isElbowArrow(element) && element.startBinding == null && element.endBinding == null && !validateElbowPoints(element.points)) {
      return {
        ...element,
        ...updateElbowArrowPoints(
          element,
          restoredElementsMap,
          {
            points: [
              pointFrom(0, 0),
              element.points[element.points.length - 1]
            ]
          }
        ),
        index: element.index
      };
    }
    if (isElbowArrow(element) && element.startBinding && element.endBinding && element.startBinding.elementId === element.endBinding.elementId && element.points.length > 1 && element.points.some(
      ([rx, ry]) => Math.abs(rx) > 1e6 || Math.abs(ry) > 1e6
    )) {
      console.error("Fixing self-bound elbow arrow", element.id);
      const boundElement = restoredElementsMap.get(
        element.startBinding.elementId
      );
      if (!boundElement) {
        console.error(
          "Bound element not found",
          element.startBinding.elementId
        );
        return element;
      }
      return {
        ...element,
        x: boundElement.x + boundElement.width / 2,
        y: boundElement.y - 5,
        width: boundElement.width,
        height: boundElement.height,
        points: [
          pointFrom(0, 0),
          pointFrom(0, -10),
          pointFrom(boundElement.width / 2 + 5, -10),
          pointFrom(
            boundElement.width / 2 + 5,
            boundElement.height / 2 + 5
          )
        ]
      };
    }
    return element;
  });
};
var coalesceAppStateValue = (key, appState, defaultAppState) => {
  const value = appState[key];
  return value !== void 0 ? value : defaultAppState[key];
};
var LegacyAppStateMigrations = {
  isSidebarDocked: (appState, defaultAppState) => {
    return [
      "defaultSidebarDockedPreference",
      appState.isSidebarDocked ?? coalesceAppStateValue(
        "defaultSidebarDockedPreference",
        appState,
        defaultAppState
      )
    ];
  }
};
var restoreAppState = (appState, localAppState) => {
  appState = appState || {};
  const defaultAppState = getDefaultAppState();
  const nextAppState = {};
  for (const legacyKey of Object.keys(
    LegacyAppStateMigrations
  )) {
    if (legacyKey in appState) {
      const [nextKey, nextValue] = LegacyAppStateMigrations[legacyKey](
        appState,
        defaultAppState
      );
      nextAppState[nextKey] = nextValue;
    }
  }
  for (const [key, defaultValue] of Object.entries(defaultAppState)) {
    const suppliedValue = appState[key];
    const localValue = localAppState ? localAppState[key] : void 0;
    nextAppState[key] = suppliedValue !== void 0 ? suppliedValue : localValue !== void 0 ? localValue : defaultValue;
  }
  return {
    ...nextAppState,
    cursorButton: localAppState?.cursorButton || "up",
    // reset on fresh restore so as to hide the UI button if penMode not active
    penDetected: localAppState?.penDetected ?? (appState.penMode ? appState.penDetected ?? false : false),
    activeTool: {
      ...updateActiveTool(
        defaultAppState,
        nextAppState.activeTool.type && AllowedExcalidrawActiveTools[nextAppState.activeTool.type] ? nextAppState.activeTool : { type: "selection" }
      ),
      lastActiveTool: null,
      locked: nextAppState.activeTool.locked ?? false
    },
    // Migrates from previous version where appState.zoom was a number
    zoom: {
      value: getNormalizedZoom(
        isFiniteNumber(appState.zoom) ? appState.zoom : appState.zoom?.value ?? defaultAppState.zoom.value
      )
    },
    openSidebar: (
      // string (legacy)
      typeof appState.openSidebar === "string" ? { name: DEFAULT_SIDEBAR.name } : nextAppState.openSidebar
    ),
    gridSize: getNormalizedGridSize(
      isFiniteNumber(appState.gridSize) ? appState.gridSize : DEFAULT_GRID_SIZE
    ),
    gridStep: getNormalizedGridStep(
      isFiniteNumber(appState.gridStep) ? appState.gridStep : DEFAULT_GRID_STEP
    ),
    editingFrame: null
  };
};
var restore = (data, localAppState, localElements, elementsConfig) => {
  return {
    elements: restoreElements(data?.elements, localElements, elementsConfig),
    appState: restoreAppState(data?.appState, localAppState || null),
    files: data?.files || {}
  };
};
var restoreLibraryItem = (libraryItem) => {
  const elements = restoreElements(
    getNonDeletedElements3(libraryItem.elements),
    null
  );
  return elements.length ? { ...libraryItem, elements } : null;
};
var restoreLibraryItems = (libraryItems = [], defaultStatus) => {
  const restoredItems = [];
  for (const item of libraryItems) {
    if (Array.isArray(item)) {
      const restoredItem = restoreLibraryItem({
        status: defaultStatus,
        elements: item,
        id: randomId(),
        created: Date.now()
      });
      if (restoredItem) {
        restoredItems.push(restoredItem);
      }
    } else {
      const _item = item;
      const restoredItem = restoreLibraryItem({
        ..._item,
        id: _item.id || randomId(),
        status: _item.status || defaultStatus,
        created: _item.created || Date.now()
      });
      if (restoredItem) {
        restoredItems.push(restoredItem);
      }
    }
  }
  return restoredItems;
};

// data/blob.ts
var parseFileContents = async (blob) => {
  let contents;
  if (blob.type === MIME_TYPES.png) {
    try {
      return await (await import("./data/image-EVYOHS6K.js")).decodePngMetadata(blob);
    } catch (error) {
      if (error.message === "INVALID") {
        throw new ImageSceneDataError(
          "Image doesn't contain scene",
          "IMAGE_NOT_CONTAINS_SCENE_DATA"
        );
      } else {
        throw new ImageSceneDataError("Error: cannot restore image");
      }
    }
  } else {
    if ("text" in Blob) {
      contents = await blob.text();
    } else {
      contents = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsText(blob, "utf8");
        reader.onloadend = () => {
          if (reader.readyState === FileReader.DONE) {
            resolve(reader.result);
          }
        };
      });
    }
    if (blob.type === MIME_TYPES.svg) {
      try {
        return decodeSvgBase64Payload({
          svg: contents
        });
      } catch (error) {
        if (error.message === "INVALID") {
          throw new ImageSceneDataError(
            "Image doesn't contain scene",
            "IMAGE_NOT_CONTAINS_SCENE_DATA"
          );
        } else {
          throw new ImageSceneDataError("Error: cannot restore image");
        }
      }
    }
  }
  return contents;
};
var getFileHandleType = (handle) => {
  if (!handle) {
    return null;
  }
  return handle.name.match(/\.(json|excalidraw|png|svg)$/)?.[1] || null;
};
var isImageFileHandleType = (type) => {
  return type === "png" || type === "svg";
};
var isImageFileHandle = (handle) => {
  const type = getFileHandleType(handle);
  return type === "png" || type === "svg";
};
var isSupportedImageFileType = (type) => {
  return !!type && Object.values(IMAGE_MIME_TYPES).includes(type);
};
var isSupportedImageFile = (blob) => {
  const { type } = blob || {};
  return isSupportedImageFileType(type);
};
var loadSceneOrLibraryFromBlob = async (blob, localAppState, localElements, fileHandle) => {
  const contents = await parseFileContents(blob);
  let data;
  try {
    try {
      data = JSON.parse(contents);
    } catch (error) {
      if (isSupportedImageFile(blob)) {
        throw new ImageSceneDataError(
          "Image doesn't contain scene",
          "IMAGE_NOT_CONTAINS_SCENE_DATA"
        );
      }
      throw error;
    }
    if (isValidExcalidrawData(data)) {
      return {
        type: MIME_TYPES.excalidraw,
        data: restore(
          {
            elements: clearElementsForExport(data.elements || []),
            appState: {
              theme: localAppState?.theme,
              fileHandle: fileHandle || blob.handle || null,
              ...cleanAppStateForExport(data.appState || {}),
              ...localAppState ? calculateScrollCenter(data.elements || [], localAppState) : {}
            },
            files: data.files
          },
          localAppState,
          localElements,
          { repairBindings: true, refreshDimensions: false }
        )
      };
    } else if (isValidLibrary(data)) {
      return {
        type: MIME_TYPES.excalidrawlib,
        data
      };
    }
    throw new Error("Error: invalid file");
  } catch (error) {
    if (error instanceof ImageSceneDataError) {
      throw error;
    }
    throw new Error("Error: invalid file");
  }
};
var loadFromBlob = async (blob, localAppState, localElements, fileHandle) => {
  const ret = await loadSceneOrLibraryFromBlob(
    blob,
    localAppState,
    localElements,
    fileHandle
  );
  if (ret.type !== MIME_TYPES.excalidraw) {
    throw new Error("Error: invalid file");
  }
  return ret.data;
};
var parseLibraryJSON = (json, defaultStatus = "unpublished") => {
  const data = JSON.parse(json);
  if (!isValidLibrary(data)) {
    throw new Error("Invalid library");
  }
  const libraryItems = data.libraryItems || data.library;
  return restoreLibraryItems(libraryItems, defaultStatus);
};
var loadLibraryFromBlob = async (blob, defaultStatus = "unpublished") => {
  return parseLibraryJSON(await parseFileContents(blob), defaultStatus);
};
var canvasToBlob = async (canvas) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (isPromiseLike(canvas)) {
        canvas = await canvas;
      }
      canvas.toBlob((blob) => {
        if (!blob) {
          return reject(
            new CanvasError("Error: Canvas too big", "CANVAS_POSSIBLY_TOO_BIG")
          );
        }
        resolve(blob);
      });
    } catch (error) {
      reject(error);
    }
  });
};
var generateIdFromFile = async (file) => {
  try {
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-1",
      await blobToArrayBuffer(file)
    );
    return bytesToHexString(new Uint8Array(hashBuffer));
  } catch (error) {
    console.error(error);
    return nanoid2(40);
  }
};
var getDataURL = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      resolve(dataURL);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
var getDataURL_sync = (data, mimeType) => {
  return `data:${mimeType};base64,${stringToBase64(
    toByteString(data),
    true
  )}`;
};
var dataURLToFile = (dataURL, filename = "") => {
  const dataIndexStart = dataURL.indexOf(",");
  const byteString = atob(dataURL.slice(dataIndexStart + 1));
  const mimeType = dataURL.slice(0, dataIndexStart).split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new File([ab], filename, { type: mimeType });
};
var dataURLToString = (dataURL) => {
  return base64ToString(dataURL.slice(dataURL.indexOf(",") + 1));
};
var resizeImageFile = async (file, opts) => {
  if (file.type === MIME_TYPES.svg) {
    return file;
  }
  const [pica, imageBlobReduce] = await Promise.all([
    import("pica").then((res) => res.default),
    // a wrapper for pica for better API
    import("image-blob-reduce").then((res) => res.default)
  ]);
  const reduce = imageBlobReduce({
    pica: pica({ features: ["js", "wasm"] })
  });
  if (opts.outputType) {
    const { outputType } = opts;
    reduce._create_blob = function(env) {
      return this.pica.toBlob(env.out_canvas, outputType, 0.8).then((blob) => {
        env.out_blob = blob;
        return env;
      });
    };
  }
  if (!isSupportedImageFile(file)) {
    throw new Error("Error: unsupported file type", { cause: "UNSUPPORTED" });
  }
  return new File(
    [await reduce.toBlob(file, { max: opts.maxWidthOrHeight, alpha: true })],
    file.name,
    {
      type: opts.outputType || file.type
    }
  );
};
var SVGStringToFile = (SVGString, filename = "") => {
  return new File([new TextEncoder().encode(SVGString)], filename, {
    type: MIME_TYPES.svg
  });
};
var ImageURLToFile = async (imageUrl, filename = "") => {
  let response;
  try {
    response = await fetch(imageUrl);
  } catch (error) {
    throw new Error("Error: failed to fetch image", { cause: "FETCH_ERROR" });
  }
  if (!response.ok) {
    throw new Error("Error: failed to fetch image", { cause: "FETCH_ERROR" });
  }
  const blob = await response.blob();
  if (blob.type && isSupportedImageFile(blob)) {
    const name = filename || blob.name || "";
    return new File([blob], name, { type: blob.type });
  }
  throw new Error("Error: unsupported file type", { cause: "UNSUPPORTED" });
};
var getFileFromEvent = async (event) => {
  const file = event.dataTransfer.files.item(0);
  const fileHandle = await getFileHandle(event);
  return { file: file ? await normalizeFile(file) : null, fileHandle };
};
var getFileHandle = async (event) => {
  if (nativeFileSystemSupported) {
    try {
      const item = event.dataTransfer.items[0];
      const handle = await item.getAsFileSystemHandle() || null;
      return handle;
    } catch (error) {
      console.warn(error.name, error.message);
      return null;
    }
  }
  return null;
};
var getActualMimeTypeFromImage = (buffer) => {
  let mimeType = null;
  const first8Bytes = `${[...new Uint8Array(buffer).slice(0, 8)].join(" ")} `;
  const headerBytes = {
    // https://en.wikipedia.org/wiki/Portable_Network_Graphics#File_header
    png: "137 80 78 71 13 10 26 10 ",
    // https://en.wikipedia.org/wiki/JPEG#Syntax_and_structure
    // jpg is a bit wonky. Checking the first three bytes should be enough,
    // but may yield false positives. (https://stackoverflow.com/a/23360709/927631)
    jpg: "255 216 255 ",
    // https://en.wikipedia.org/wiki/GIF#Example_GIF_file
    gif: "71 73 70 56 57 97 "
  };
  if (first8Bytes === headerBytes.png) {
    mimeType = MIME_TYPES.png;
  } else if (first8Bytes.startsWith(headerBytes.jpg)) {
    mimeType = MIME_TYPES.jpg;
  } else if (first8Bytes.startsWith(headerBytes.gif)) {
    mimeType = MIME_TYPES.gif;
  }
  return mimeType;
};
var createFile = (blob, mimeType, name) => {
  return new File([blob], name || "", {
    type: mimeType
  });
};
var normalizeFile = async (file) => {
  if (!file.type) {
    if (file?.name?.endsWith(".excalidrawlib")) {
      file = createFile(
        await blobToArrayBuffer(file),
        MIME_TYPES.excalidrawlib,
        file.name
      );
    } else if (file?.name?.endsWith(".excalidraw")) {
      file = createFile(
        await blobToArrayBuffer(file),
        MIME_TYPES.excalidraw,
        file.name
      );
    } else {
      const buffer = await blobToArrayBuffer(file);
      const mimeType = getActualMimeTypeFromImage(buffer);
      if (mimeType) {
        file = createFile(buffer, mimeType, file.name);
      }
    }
  } else if (isSupportedImageFile(file)) {
    const buffer = await blobToArrayBuffer(file);
    const mimeType = getActualMimeTypeFromImage(buffer);
    if (mimeType && mimeType !== file.type) {
      file = createFile(buffer, mimeType, file.name);
    }
  }
  return file;
};
var blobToArrayBuffer = (blob) => {
  if ("arrayBuffer" in blob) {
    return blob.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target?.result) {
        return reject(new Error("Couldn't convert blob to ArrayBuffer"));
      }
      resolve(event.target.result);
    };
    reader.readAsArrayBuffer(blob);
  });
};

// data/image.ts
var getTEXtChunk = async (blob) => {
  const chunks = decodePng(new Uint8Array(await blobToArrayBuffer(blob)));
  const metadataChunk = chunks.find((chunk2) => chunk2.name === "tEXt");
  if (metadataChunk) {
    return tEXt.decode(metadataChunk.data);
  }
  return null;
};
var encodePngMetadata = async ({
  blob,
  metadata
}) => {
  const chunks = decodePng(new Uint8Array(await blobToArrayBuffer(blob)));
  const metadataChunk = tEXt.encode(
    MIME_TYPES.excalidraw,
    JSON.stringify(
      encode({
        text: metadata,
        compress: true
      })
    )
  );
  chunks.splice(-1, 0, metadataChunk);
  return new Blob([encodePng(chunks)], { type: MIME_TYPES.png });
};
var decodePngMetadata = async (blob) => {
  const metadata = await getTEXtChunk(blob);
  if (metadata?.keyword === MIME_TYPES.excalidraw) {
    try {
      const encodedData = JSON.parse(metadata.text);
      if (!("encoded" in encodedData)) {
        if ("type" in encodedData && encodedData.type === EXPORT_DATA_TYPES.excalidraw) {
          return metadata.text;
        }
        throw new Error("FAILED");
      }
      return decode(encodedData);
    } catch (error) {
      console.error(error);
      throw new Error("FAILED");
    }
  }
  throw new Error("INVALID");
};

export {
  MAX_CUSTOM_COLORS_USED_IN_CANVAS,
  COLORS_PER_ROW,
  DEFAULT_CHART_COLOR_INDEX,
  DEFAULT_ELEMENT_STROKE_COLOR_INDEX,
  DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX,
  COLOR_PALETTE,
  DEFAULT_ELEMENT_STROKE_PICKS,
  DEFAULT_ELEMENT_BACKGROUND_PICKS,
  DEFAULT_CANVAS_BACKGROUND_PICKS,
  DEFAULT_ELEMENT_STROKE_COLOR_PALETTE,
  DEFAULT_ELEMENT_BACKGROUND_COLOR_PALETTE,
  getAllColorsSpecificShade,
  rgbToHex,
  isDarwin,
  isWindows,
  isAndroid,
  isFirefox,
  isSafari,
  isIOS,
  isBrave,
  supportsResizeObserver,
  APP_NAME,
  TEXT_AUTOWRAP_THRESHOLD,
  DRAGGING_THRESHOLD,
  LINE_CONFIRM_THRESHOLD,
  ELEMENT_SHIFT_TRANSLATE_AMOUNT,
  ELEMENT_TRANSLATE_AMOUNT,
  TEXT_TO_CENTER_SNAP_THRESHOLD,
  SHIFT_LOCKING_ANGLE,
  DEFAULT_LASER_COLOR,
  CURSOR_TYPE,
  POINTER_BUTTON,
  POINTER_EVENTS,
  YOUTUBE_STATES,
  CLASSES,
  FONT_FAMILY,
  THEME,
  FRAME_STYLE,
  MIN_FONT_SIZE,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_FAMILY,
  DEFAULT_TEXT_ALIGN,
  DEFAULT_VERTICAL_ALIGN,
  DEFAULT_TRANSFORM_HANDLE_SPACING,
  SIDE_RESIZING_THRESHOLD,
  DEFAULT_COLLISION_THRESHOLD,
  COLOR_WHITE,
  COLOR_CHARCOAL_BLACK,
  COLOR_VOICE_CALL,
  DEFAULT_GRID_SIZE,
  IMAGE_MIME_TYPES,
  MIME_TYPES,
  ALLOWED_PASTE_MIME_TYPES,
  EXPORT_IMAGE_TYPES,
  EXPORT_DATA_TYPES,
  EXPORT_SOURCE,
  IMAGE_RENDER_TIMEOUT,
  TAP_TWICE_TIMEOUT,
  TOUCH_CTX_MENU_TIMEOUT,
  SCROLL_TIMEOUT,
  ZOOM_STEP,
  MIN_ZOOM,
  MAX_ZOOM,
  HYPERLINK_TOOLTIP_DELAY,
  THEME_FILTER,
  URL_QUERY_KEYS,
  URL_HASH_KEYS,
  DEFAULT_UI_OPTIONS,
  MQ_MAX_WIDTH_PORTRAIT,
  MQ_MAX_WIDTH_LANDSCAPE,
  MQ_MAX_HEIGHT_LANDSCAPE,
  MQ_RIGHT_SIDEBAR_MIN_WIDTH,
  EXPORT_SCALES,
  DEFAULT_EXPORT_PADDING,
  DEFAULT_MAX_IMAGE_WIDTH_OR_HEIGHT,
  MAX_ALLOWED_FILE_BYTES,
  SVG_NS,
  VERSIONS,
  BOUND_TEXT_PADDING,
  VERTICAL_ALIGN,
  TEXT_ALIGN,
  ROUNDNESS,
  STROKE_WIDTH,
  LIBRARY_SIDEBAR_TAB,
  CANVAS_SEARCH_TAB,
  DEFAULT_SIDEBAR,
  LIBRARY_DISABLED_TYPES,
  TOOL_TYPE,
  EDITOR_LS_KEYS,
  DEFAULT_FILENAME,
  STATS_PANELS,
  MIN_WIDTH_OR_HEIGHT,
  ARROW_TYPE,
  DEFAULT_REDUCED_GLOBAL_ALPHA,
  ORIG_ID,
  UserIdleState,
  getLineHeight,
  Queue,
  CODES,
  KEYS,
  matchKey,
  isArrowKey,
  shouldResizeFromCenter,
  shouldMaintainAspectRatio,
  shouldRotateWithDiscreteAngle,
  clamp,
  round,
  roundToStep,
  isFiniteNumber,
  normalizeRadians,
  degreesToRadians,
  radiansToDegrees,
  vector,
  vectorFromPoint,
  vectorDot,
  vectorSubtract,
  vectorScale,
  vectorNormalize,
  pointFrom,
  pointFromPair,
  pointRotateRads,
  pointCenter,
  pointDistance,
  pointOnLineSegment,
  rangeInclusive,
  rangesOverlap,
  rangeIntersection,
  getSizeFromPoints,
  rescalePoints,
  getGridPoint,
  getDateTime,
  capitalizeString,
  isToolIcon,
  isInputLike,
  isInteractive,
  isWritableElement,
  getFontFamilyString,
  getFontString,
  debounce,
  throttleRAF,
  easeOut,
  easeToValuesRAF,
  chunk,
  distance,
  updateActiveTool,
  getShortcutKey,
  viewportCoordsToSceneCoords,
  sceneCoordsToViewportCoords,
  getGlobalCSSVariable,
  tupleToCoors,
  muteFSAbortError,
  findIndex,
  findLastIndex,
  isTransparent,
  resolvablePromise,
  getNearestScrollableContainer,
  focusNearestParent,
  preventUnload,
  getUpdatedTimestamp,
  arrayToMap,
  arrayToMapWithIndex,
  arrayToObject,
  arrayToList,
  isTestEnv,
  isDevEnv,
  wrapEvent,
  updateObject,
  getFrame,
  isPromiseLike,
  queryFocusableElements,
  isShallowEqual,
  composeEventHandlers,
  assertNever,
  invariant,
  memoize,
  isMemberOf,
  cloneJSON,
  updateStable,
  addEventListener,
  getSvgPathFromStroke,
  normalizeEOL,
  toBrandedType,
  promiseTry,
  castArray,
  randomInteger,
  randomId,
  normalizeLink,
  isLocalLink,
  toValidURL,
  isInitializedImageElement,
  isImageElement,
  isEmbeddableElement,
  isIframeElement,
  isIframeLikeElement,
  isTextElement,
  isFrameElement,
  isMagicFrameElement,
  isFrameLikeElement,
  isFreeDrawElement,
  isLinearElement,
  isArrowElement,
  isElbowArrow,
  isLinearElementType,
  isBindingElement,
  isBindingElementType,
  isBindableElement,
  isTextBindableContainer,
  isExcalidrawElement,
  isFlowchartNodeElement,
  hasBoundTextElement,
  isBoundToContainer,
  isUsingAdaptiveRadius,
  canApplyRoundnessTypeToElement,
  getDefaultRoundnessTypeForElement,
  hitElementItself,
  hitElementBoundingBox,
  hitElementBoundingBoxOnly,
  hitElementBoundText,
  HEADING_RIGHT,
  HEADING_DOWN,
  HEADING_LEFT,
  HEADING_UP,
  compareHeading,
  headingForPointFromElement,
  originalContainerCache,
  updateOriginalContainerCache,
  resetOriginalContainerCache,
  getOriginalContainerHeightFromCache,
  measureText,
  getApproxMinLineWidth,
  getMinTextElementWidth,
  isMeasureTextSupported,
  normalizeText,
  getLineHeightInPx,
  getApproxMinLineHeight,
  setCustomTextMetricsProvider,
  getTextWidth,
  wrapText,
  redrawTextBoundingBox,
  handleBindTextResize,
  computeBoundTextPosition,
  getBoundTextElementId,
  getBoundTextElement,
  getContainerElement,
  getContainerCenter,
  getTextElementAngle,
  shouldAllowVerticalAlign,
  suppportsHorizontalAlign,
  isValidTextContainer,
  computeContainerDimensionForBoundText,
  getBoundTextMaxWidth,
  getBoundTextMaxHeight,
  getTextFromElements,
  shouldEnableBindingForPointerEvent,
  isBindingEnabled,
  BINDING_HIGHLIGHT_THICKNESS,
  BINDING_HIGHLIGHT_OFFSET,
  bindOrUnbindLinearElement,
  bindOrUnbindLinearElements,
  getSuggestedBindingsForArrows,
  maybeBindLinearElement,
  bindLinearElement,
  isLinearElementSimpleAndAlreadyBound,
  getHoveredElementForBinding,
  updateBoundElements,
  bindPointToSnapToElementOutline,
  calculateFixedPointForElbowArrowBinding,
  fixBindingsAfterDuplication,
  fixBindingsAfterDeletion,
  maxBindingGap,
  bindingProperties,
  BoundElement,
  BindableElement,
  getArrowLocalFixedPoints,
  updateElbowArrowPoints,
  mutateElement,
  newElementWith,
  bumpVersion,
  isInvisiblySmallElement,
  isElementInViewport,
  isElementCompletelyInViewport,
  getPerfectElementSize,
  getLockedLinearCursorAlignSize,
  getNormalizedDimensions,
  getSceneVersion,
  hashElementsVersion,
  hashString,
  getNonDeletedElements3 as getNonDeletedElements,
  isNonDeletedElement,
  isElementInsideBBox,
  elementPartiallyOverlapsWithOrContainsBBox,
  elementsOverlappingBBox,
  bindElementsToFramesAfterDuplication,
  elementsAreInFrameBounds,
  elementOverlapsWithFrame,
  isCursorInFrame,
  groupByFrameLikes,
  getFrameChildren,
  getFrameLikeElements,
  getRootElements,
  getElementsInResizingFrame,
  getElementsInNewFrame,
  getContainingFrame,
  filterElementsEligibleAsFrameChildren,
  addElementsToFrame,
  removeElementsFromFrame,
  removeAllElementsFromFrame,
  replaceAllElementsInFrame,
  updateFrameMembershipOfSelectedElements,
  isElementInFrame,
  getFrameLikeTitle,
  getElementsOverlappingFrame,
  frameAndChildrenSelectedTogether,
  excludeElementsInFramesFromSelection,
  getElementsWithinSelection,
  getVisibleAndNonSelectedElements,
  isSomeElementSelected,
  getCommonAttributeOfSelectedElements,
  getSelectedElements,
  getTargetElements,
  makeNextSelectedElementIds,
  selectGroup,
  selectGroupsForSelectedElements,
  isSelectedViaGroup,
  getSelectedGroupForElement,
  getSelectedGroupIds,
  selectGroupsFromGivenElements,
  editGroupForSelectedElement,
  isElementInGroup,
  getElementsInGroup,
  getSelectedGroupIdForElement,
  addToGroup,
  removeFromSelectedGroups,
  getMaximumGroups,
  getNonDeletedGroupIds,
  elementsAreInSameGroup,
  isInGroup,
  getNewGroupIdsForDuplication,
  validateFractionalIndices,
  orderByFractionalIndex,
  syncMovedIndices,
  syncInvalidIndices,
  Scene_default,
  LinearElementEditor,
  getElementShape,
  getBoundTextShape,
  aabbForElement,
  getCornerRadius,
  isPathALoop,
  hasBackground,
  hasStrokeColor,
  hasStrokeWidth,
  hasStrokeStyle,
  canChangeRoundness,
  toolIsArrow,
  canHaveArrowheads,
  MINIMAL_CROP_SIZE,
  cropElement,
  getUncroppedWidthAndHeight,
  getFlipAdjustedCropPosition,
  getRenderOpacity,
  renderSelectionElement,
  renderElement,
  getFreeDrawSvgPath,
  ShapeCache,
  getElementAbsoluteCoords,
  getElementBounds,
  getCommonBounds,
  getDraggedElementsBounds,
  getResizedElementAbsoluteCoords,
  getCommonBoundingBox,
  getVisibleSceneBounds,
  getSelectionBoxShape,
  isPointInShape,
  newElement,
  newEmbeddableElement,
  newIframeElement,
  newFrameElement,
  newMagicFrameElement,
  newTextElement,
  refreshTextDimensions,
  newFreeDrawElement,
  newLinearElement,
  newArrowElement,
  newImageElement,
  createSrcDoc,
  getEmbedLink,
  maybeParseEmbedSrc,
  embeddableURLValidator,
  loadHTMLImageElement,
  updateImageCache,
  getInitializedImageElements,
  normalizeSVG,
  defaultGetElementLinkFromSelection,
  getLinkIdAndTypeFromSelection,
  canCreateLinkFromElements,
  isElementLink,
  parseElementLinkFromURL,
  centerScrollOn,
  calculateScrollCenter,
  getNormalizedZoom,
  getNormalizedGridStep,
  getDefaultAppState,
  isEraserActive,
  isHandToolActive,
  AbortError,
  ImageSceneDataError,
  ExcalidrawError,
  Fonts,
  nativeFileSystemSupported,
  fileOpen,
  fileSave,
  serializeAsJSON,
  saveAsJSON,
  loadFromJSON,
  serializeLibraryAsJSON,
  saveLibraryAsJSON,
  getLinkHandleFromCoords,
  isPointHittingLinkIcon,
  isPointHittingLink,
  fillCircle,
  getNormalizedCanvasDimensions,
  bootstrapCanvas,
  renderStaticSceneThrottled,
  renderStaticScene,
  exportToCanvas,
  exportToSvg,
  getExportSize,
  restoreElements,
  restoreAppState,
  restore,
  restoreLibraryItems,
  getTEXtChunk,
  encodePngMetadata,
  decodePngMetadata,
  getFileHandleType,
  isImageFileHandleType,
  isImageFileHandle,
  isSupportedImageFileType,
  isSupportedImageFile,
  loadSceneOrLibraryFromBlob,
  loadFromBlob,
  parseLibraryJSON,
  loadLibraryFromBlob,
  canvasToBlob,
  generateIdFromFile,
  getDataURL,
  getDataURL_sync,
  dataURLToFile,
  dataURLToString,
  resizeImageFile,
  SVGStringToFile,
  ImageURLToFile,
  getFileFromEvent,
  createFile,
  normalizeFile
};
//# sourceMappingURL=chunk-JTCCLT6C.js.map
