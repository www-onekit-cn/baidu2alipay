module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-console */
exports.default = {
  props: {
    onekitId: 'id' + new Date().getTime(),
    // onekitId: '' || `id${new Date().getTime()}`,
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
    onekitDataset: null
  },
  data: {},
  onInit: function onInit() {
    if (this.props.onekitId) {
      getApp().onekit_nodes['_' + this.props.onekitId] = this;
    }
    //
    if (this.props.onekitClass) {
      getApp().onekit_nodes['__' + this.props.onekitClass] = this;
    }
  },

  methods: {
    _dataset: function _dataset() {
      if (!this.props.onekitDataset) {
        return {};
      }
      var json = '{' + this.props.onekitDataset + '}';
      return JSON.parse(json);
    },
    _e: function _e(detail, dataset) {
      // currentTarget: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // detail: {
      //   curPercent: parseInt(curPercent, 10)
      // },
      // mark: {},
      // mut: false,
      // target: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // timeStamp: 8888888, //
      // type: 'activeend',
      // _userTap: false
      return {
        detail: detail || {},
        dataset: dataset || {}
      };
    }
  }
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {},
  methods: {
    ui_tap: function ui_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
    ui_touchstart: function ui_touchstart() {
      if (this.props.onTouchstart) {
        this.props.onTouchstart();
      }
    },
    ui_touchmove: function ui_touchmove() {
      if (this.props.onTouchmove) {
        this.props.onTouchmove();
      }
    },
    ui_touchcancel: function ui_touchcancel() {
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel();
      }
    },
    ui_touchend: function ui_touchend() {
      if (this.props.onTouchend) {
        this.props.onTouchend();
      }
    },
    ui_longpress: function ui_longpress() {
      if (this.props.onLongpress) {
        this.props.onLongpress();
      }
    },
    ui_longtap: function ui_longtap() {
      if (this.props.onLongtap) {
        this.props.onLongtap();
      }
    },
    ui_transitionend: function ui_transitionend() {
      if (this.props.onTransitionend) {
        this.props.onTransitionend();
      }
    },
    ui_animationstart: function ui_animationstart() {
      if (this.props.onAnimationstart) {
        this.props.onAnimationstart();
      }
    },
    ui_animationiteration: function ui_animationiteration() {
      if (this.props.onAnimationiteration) {
        this.props.onAnimationiteration();
      }
    },
    ui_animationend: function ui_animationend() {
      if (this.props.onAnimationend) {
        this.props.onAnimationend();
      }
    },
    ui_touchforcechange: function ui_touchforcechange() {
      if (this.props.onTouchforcechange) {
        this.props.onTouchforcechange();
      }
    }
  }
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(0);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _baidu_behavior = __webpack_require__(1);

var _baidu_behavior2 = _interopRequireDefault(_baidu_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
Component({
  mixins: [_onekit_behavior2.default, _baidu_behavior2.default],
  data: {},
  props: {
    value: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: 'textarea-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: -1,
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
    disableDefaultPadding: false
  },
  didMount: function didMount() {},
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    textarea_Input: function textarea_Input(e) {
      if (this.props.onInput) {
        this.props.onInput(e);
      }
    },
    textarea_Focus: function textarea_Focus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    },
    textarea_Blur: function textarea_Blur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    },
    textarea_Confirm: function textarea_Confirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(e);
      }
    }
  }
});

/***/ })

/******/ });