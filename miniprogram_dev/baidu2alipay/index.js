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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PROMISE = __webpack_require__(5);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

var _CameraContext = __webpack_require__(6);

var _CameraContext2 = _interopRequireDefault(_CameraContext);

var _CanvasContext = __webpack_require__(7);

var _CanvasContext2 = _interopRequireDefault(_CanvasContext);

var _VideoContext = __webpack_require__(8);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _OneKit = __webpack_require__(4);

var _OneKit2 = _interopRequireDefault(_OneKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */
/* eslint-disable camelcase */


var swan = function () {
  function swan() {
    _classCallCheck(this, swan);
  }

  // ///////////  基础 ////////////
  swan.canIUse = function canIUse(schema) {
    return my.canIUse(schema);
  };

  // ///////////  应用级事件 ////////////


  swan.offPageNotFound = function offPageNotFound() {
    getApp().onekit_onError = null;
  };

  swan.onPageNotFound = function onPageNotFound(callback) {
    getApp().onekit_onPageNotFound = callback;
  };

  swan.offError = function offError() {
    return my.offError();
  };

  swan.onError = function onError(callback) {
    return my.onError(callback);
  };

  swan.offAppShow = function offAppShow() {
    return my.offAppShow();
  };

  swan.onAppShow = function onAppShow(callback) {
    return my.onAppShow(callback);
  };

  swan.offAppHide = function offAppHide() {
    return my.offAppHide();
  };

  swan.onAppHide = function onAppHide(callback) {
    return my.offAppHide(callback);
  };

  // ///////////  URLQuery ////////////


  swan.setURLQuery = function setURLQuery(urlQuery) {
    var page = _OneKit2.default.current();
    //
    var oldURLQuery = page.query;
    var newURLQuery = oldURLQuery;
    for (var _iterator = Object.keys(urlQuery), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var key = _ref;

      var value = urlQuery[key];
      newURLQuery[key] = value;
    }
    page.query = newURLQuery;
    if (page.onURLQueryChange) {
      page.onURLQueryChange({
        oldURLQuery: oldURLQuery,
        newURLQuery: newURLQuery
      });
    }
  };

  swan.getURLQuery = function getURLQuery() {
    var page = _OneKit2.default.current();
    return page.query;
  };

  // /////////// 更新 ////////////


  swan.getUpdateManager = function getUpdateManager() {
    return my.getUpdateManager();
  };

  // /////////// 调试 ////////////


  swan.setEnableDebug = function setEnableDebug() {
    return console.log('setEnableDebug is not setEnableDebug');
  };

  // /////////// 路由 ////////////


  swan.navigateTo = function navigateTo(object) {
    return my.navigateTo(object);
  };

  swan.redirecswano = function redirecswano(object) {
    return my.redirecswano(object);
  };

  swan.switchTab = function switchTab(object) {
    return my.switchTab(object);
  };

  swan.navigateBack = function navigateBack(object) {
    return my.navigateBack(object);
  };

  swan.reLaunch = function reLaunch(object) {
    return my.reLaunch(object);
  };

  // /////////// 网络 ////////////


  swan.downloadFile = function downloadFile(swan_object) {
    var swan_url = swan_object.url;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var url = swan_url;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.downloadFile({
        url: url,
        success: function success(my_res) {
          var swan_res = {
            tempFilePath: my_res.apFilePath,
            statusCode: 200
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.request = function request(swan_object) {
    var swan_url = swan_object.url;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var url = swan_url;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.request({
        url: url,
        success: function success(my_res) {
          var swan_res = {
            data: my_res.data,
            statusCode: my_res.status,
            header: my_res.headers
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.uploadFile = function uploadFile(swan_object) {
    var swan_url = swan_object.url;
    var swan_filePath = swan_object.filePath;
    var swan_name = swan_object.name;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var url = swan_url;
    var filePath = swan_filePath;
    var fileName = swan_name;
    var fileType = 'image';
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.uploadFile({
        url: url,
        filePath: filePath,
        fileName: fileName,
        fileType: fileType,
        success: function success(my_res) {
          var swan_res = {
            data: my_res.data,
            statusCode: my_res.statusCode,
            header: my_res.header
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.connectSocket = function connectSocket(swan_object) {
    var swan_url = swan_object.url;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var url = swan_url;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.connectSocket({
        url: url,
        success: function success() {
          var swan_res = {
            errMsg: 'connectSocket: ok',
            sockeswanaskId: 1
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.onSocketOpen = function onSocketOpen(callback) {
    return my.onSocketOpen(callback);
  };

  swan.onSocketError = function onSocketError(callback) {
    return my.onSocketError(callback);
  };

  swan.sendSocketMessage = function sendSocketMessage(object) {
    return my.sendSocketMessage(object);
  };

  swan.onSocketMessage = function onSocketMessage(callback) {
    return my.onSocketMessage(callback);
  };

  swan.closeSocket = function closeSocket(object) {
    return my.closeSocket(object);
  };

  swan.onSocketClose = function onSocketClose(callback) {
    return my.onSocketClose(callback);
  };

  // /////////// 界面 ////////////
  // /////////// 交互反馈 ////////////


  swan.showToast = function showToast(swan_object) {
    var swan_title = swan_object.title;
    var swan_icon = swan_object.icon || 'success';
    var swan_duration = swan_object.duration || 1500;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var content = swan_title;
    var type = swan_icon;
    var duration = swan_duration;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showToast({
        content: content,
        type: type,
        duration: duration,
        success: function success() {
          var swan_res = {
            errMsg: 'showToast: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.hideToast = function hideToast(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.hideToast({
        success: function success() {
          var swan_res = {
            errMsg: 'hideToast: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.showLoading = function showLoading(swan_object) {
    var swan_title = swan_object.title;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var content = swan_title;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showLoading({
        content: content,
        success: function success() {
          var swan_res = {
            errMsg: 'showLoading: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.hideLoading = function hideLoading(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.hideLoading({
        success: function success() {
          var swan_res = {
            errMsg: 'hideLoading: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.showModal = function showModal(swan_object) {
    var swan_title = swan_object.title;
    var swan_content = swan_object.content;
    var swan_confirmText = swan_object.confirmText || '确定';
    var swan_cancelText = swan_object.cancelText || '取消';
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var title = swan_title;
    var content = swan_content;
    var confirmBuswanonText = swan_confirmText;
    var cancelBuswanonText = swan_cancelText;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.confirm({
        title: title,
        content: content,
        confirmBuswanonText: confirmBuswanonText,
        cancelBuswanonText: cancelBuswanonText,
        success: function success(my_res) {
          if (my_res.confirm) {
            var swan_res = {
              errMsg: 'showModal: ok',
              confirm: true,
              cancel: false
            };
            SUCCESS(swan_res);
          } else {
            var _swan_res = {
              errMsg: 'showModal: ok',
              confirm: false,
              cancel: true
            };
            SUCCESS(_swan_res);
          }
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.showActionSheet = function showActionSheet(swan_object) {
    var swan_itemList = swan_object.itemList;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var items = swan_itemList;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showActionSheet({
        items: items,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'hideLoading: ok',
            tapIndex: my_res.index
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // /////////// 导航栏 ////////////


  swan.showNavigationBarLoading = function showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object);
  };

  swan.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object);
  };

  swan.setNavigationBarTitle = function setNavigationBarTitle(swan_object) {
    var swan_title = swan_object.title;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var title = swan_title;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setNavigationBar({
        title: title,
        success: function success() {
          var swan_res = {
            errMsg: 'setNavigationBarTitle: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.setNavigationBarColor = function setNavigationBarColor(swan_object) {
    var swan_backgroundColor = swan_object.backgroundColor;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var backgroundColor = swan_backgroundColor;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setNavigationBar({
        backgroundColor: backgroundColor,
        success: function success() {
          var swan_res = {
            errMsg: 'setNavigationBarColor: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// TabBar  ///////


  swan.showTabBarRedDot = function showTabBarRedDot(object) {
    return my.showTabBarRedDot(object);
  };

  swan.showTabBar = function showTabBar(object) {
    return my.showTabBar(object);
  };

  swan.setTabBarStyle = function setTabBarStyle(swan_object) {
    var swan_color = swan_object.color || '#ff3377';
    var swan_selectedColor = swan_object.selectedColor || '#ff3377';
    var swan_backgroundColor = swan_object.backgroundColor || '#ffffff';
    var swan_borderStyle = swan_object.borderStyle || 'black';
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var color = swan_color;
    var selectedColor = swan_selectedColor;
    var backgroundColor = swan_backgroundColor;
    var borderStyle = swan_borderStyle;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setTabBarStyle({
        color: color,
        selectedColor: selectedColor,
        backgroundColor: backgroundColor,
        borderStyle: borderStyle,
        success: function success() {
          var swan_res = {
            errMsg: 'setTabBarStyle: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.setTabBarItem = function setTabBarItem(swan_object) {
    var swan_index = swan_object.index;
    var swan_text = swan_object.text || '';
    var swan_iconPath = swan_object.iconPath || '';
    var swan_selectedIconPath = swan_object.selectedIconPath || '';
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var index = swan_index;
    var text = swan_text;
    var iconPath = swan_iconPath;
    var selectedIconPath = swan_selectedIconPath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setTabBarItem({
        index: index,
        text: text,
        iconPath: iconPath,
        selectedIconPath: selectedIconPath,
        success: function success() {
          var swan_res = {
            errMsg: 'setTabBarItem: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.setTabBarBadge = function setTabBarBadge(object) {
    return my.setTabBarBadge(object);
  };

  swan.removeTabBarBadge = function removeTabBarBadge(object) {
    return my.removeTabBarBadge(object);
  };

  swan.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return my.hideTabBarRedDot(object);
  };

  swan.hideTabBar = function hideTabBar(object) {
    return my.hideTabBar(object);
  };

  swan.showFavoriteGuide = function showFavoriteGuide(swan_object) {
    var content = swan_object.content || '关注小程序，下次使用更便捷';
    var success = swan_object.success;
    var fail = swan_object.fail;
    var complete = swan_object.complete;
    swan_object = null;
    my.showToast({
      content: content,
      success: success,
      fail: fail,
      complete: complete
    });
  };

  // ////// 位置  ///////


  swan.pageScrollTo = function pageScrollTo(object) {
    return my.pageScrollTo(object);
  };

  // ////// 下拉刷新  ///////


  swan.startPullDownRefresh = function startPullDownRefresh(object) {
    return my.startPullDownRefresh(object);
  };

  swan.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return my.stopPullDownRefresh(object);
  };

  // ////// 背景  ///////


  swan.setBackgroundColor = function setBackgroundColor(object) {
    return my.setBackgroundColor(object);
  };

  swan.setBackgroundTextStyle = function setBackgroundTextStyle(object) {
    return my.setBackgroundTextStyle(object);
  };

  // ////// 动画  ///////


  swan.createAnimation = function createAnimation(object) {
    return my.createAnimation(object);
  };

  // ////// 自定义组件  ///////


  swan.nextTick = function nextTick(callback) {
    return setTimeout(callback, 500);
  };

  // ////// 菜单  ///////


  swan.getMenuBuswanonBoundingClientRect = function getMenuBuswanonBoundingClientRect() {
    return my.getMenuBuswanonBoundingClientRect();
  };

  // ////// 节点信息  ///////


  swan.createSelectorQuery = function createSelectorQuery() {
    return my.createSelectorQuery();
  };

  swan.createIntersectionObserver = function createIntersectionObserver(object) {
    return my.createIntersectionObserver(object);
  };

  // ////// 数据储存  ///////


  swan.getStorage = function getStorage(object) {
    return my.getStorage(object);
  };

  swan.getStorageSync = function getStorageSync(key) {
    return my.getStorageSync(key);
  };

  swan.setStorage = function setStorage(key, data) {
    return my.setStorage(key, data);
  };

  swan.setStorageSync = function setStorageSync(key, data) {
    return my.setStorageSync(key, data);
  };

  swan.removeStorage = function removeStorage(key) {
    return my.removeStorage(key);
  };

  swan.removeStorageSync = function removeStorageSync(key) {
    return my.removeStorageSync(key);
  };

  swan.clearStorage = function clearStorage(object) {
    return my.clearStorage(object);
  };

  swan.clearStorageSync = function clearStorageSync(object) {
    return my.clearStorageSync(object);
  };

  swan.getStorageInfo = function getStorageInfo(object) {
    return my.getStorageInfo(object);
  };

  swan.getStorageInfoSync = function getStorageInfoSync() {
    return my.getStorageInfoSync();
  };

  // ////// 媒体  ///////

  // ////// 图片  ///////


  swan.chooseImage = function chooseImage(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseImage({
        success: function success(my_res) {
          var swan_res = {
            tempFiles: my_res.apFilePaths,
            tempFilePaths: my_res.tempFilePaths
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(swan_object) {
    var url = swan_object.filePath;
    var success = swan_object.success;
    var fail = swan_object.fail;
    var complete = swan_object.complete;
    swan_object = null;
    var my_object = {
      url: url,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.saveImage(my_object);
  };

  swan.previewImage = function previewImage(object) {
    return my.previewImage(object);
  };

  swan.getImageInfo = function getImageInfo(swan_object) {
    var swan_src = swan_object.src;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var src = swan_src;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getImageInfo({
        src: src,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getImageInfo: ok',
            width: my_res.width,
            height: my_res.height,
            type: my_res.type,
            path: my_res.path,
            orientation: my_res.orientation
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.compressImage = function compressImage(swan_object) {
    var swan_src = swan_object.src;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var apFilePaths = [swan_src];
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.compressImage({
        apFilePaths: apFilePaths,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'compressImage: ok',
            tempFilePath: my_res.apFilePaths[0]
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.chooseAlbum = function chooseAlbum(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.completes;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseImage({
        success: function success(my_res) {
          var swan_res = {
            tempFilePaths: my_res.tempFilePaths,
            tempFiles: my_res.tempFiles.map(function (tempFile) {
              return {
                path: tempFile.path,
                size: tempFile.size,
                type: 'image',
                duration: 15
              };
            })
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 相机组件控制  ///////


  swan.createCameraContext = function createCameraContext() {
    return new _CameraContext2.default(getApp().onekit_camera);
  };

  // ////// AR相机组件控制  ///////


  swan.createARCameraContext = function createARCameraContext() {
    return my.createCameraContext();
  };

  // ////// 背景音频组件控制  ///////


  swan.getBackgroundAudioManager = function getBackgroundAudioManager() {
    return my.getBackgroundAudioManager();
  };

  // ////// 音频组件控制  ///////


  swan.createInnerAudioContext = function createInnerAudioContext() {
    return my.createInnerAudioContext();
  };

  swan.setInnerAudioOption = function setInnerAudioOption() {
    return console.warn('setInnerAudioOption is not support');
  };

  swan.getRecorderManager = function getRecorderManager() {
    return my.getRecorderManager();
  };

  swan.getAvailableAudioSources = function getAvailableAudioSources() {
    return my.getAvailableAudioSources();
  };

  // ////// 视频  ///////


  swan.chooseVideo = function chooseVideo(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseVideo({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'chooseVideo: ok',
            tempFilePath: my_res.tempFilePath,
            duration: my_res.duration,
            size: my_res.size,
            width: my_res.width,
            height: my_res.height,
            apFilePath: my_res.apFilePath,
            filePath: my_res.filePath
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(swan_object) {
    var src = swan_object.filePath;
    var success = swan_object.success;
    var fail = swan_object.fail;
    var complete = swan_object.complete;
    swan_object = null;
    var my_object = {
      src: src,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.saveVideoToPhotosAlbum(my_object);
  };

  swan.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(my.createVideoContext(videoId), videoId);
  };

  // ////// 透明视频组件控制  ///////


  swan.createAnimationVideo = function createAnimationVideo(videoId) {
    return my.createVideoContext(videoId);
  };

  // ////// 直播组件控制  ///////


  swan.createLivePlayerContext = function createLivePlayerContext(domId) {
    return my.createLivePlayerContext(domId);
  };

  // ////// RTC组件控制  ///////


  swan.createRtcRoomContext = function createRtcRoomContext(domId) {
    return my.createRtcRoomContext(domId);
  };

  // ////// 位置  ///////


  swan.getLocation = function getLocation(object) {
    return my.getLocation(object);
  };

  swan.chooseLocation = function chooseLocation(object) {
    return my.chooseLocation(object);
  };

  swan.openLocation = function openLocation(swan_object) {
    var latitude = swan_object.latitude;
    var longitude = swan_object.longitude;
    var name = swan_object.name || '';
    var address = swan_object.address || '';
    var success = swan_object.success;
    var fail = swan_object.fail;
    var complete = swan_object.complete;
    swan_object = null;
    var ali_res = {
      latitude: latitude,
      longitude: longitude,
      name: name,
      address: address,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.openLocation(ali_res);
  };

  swan.startLocationUpdate = function startLocationUpdate() {
    return {};
  };

  swan.onLocationChange = function onLocationChange(callback) {
    getApp().onekit_LocationChange = callback;
  };

  swan.offLocationChange = function offLocationChange() {
    getApp().onekit_LocationChange = null;
  };

  swan.stopLocationUpdate = function stopLocationUpdate() {
    return {};
  };

  // ////// 画布  ///////


  swan.createCanvasContext = function createCanvasContext(canvasId) {
    return new _CanvasContext2.default(my.createCanvasContext(canvasId));
  };

  swan.canvasPutImageData = function canvasPutImageData(swan_object) {
    var canvasId = swan_object.canvasId;
    var data = swan_object.data;
    var x = swan_object.x;
    var y = swan_object.y;
    var width = swan_object.width;
    var height = swan_object.height;
    var success = swan_object.success;
    var fail = swan_object.fail;
    var complete = swan_object.complete;
    swan_object = null;
    var my_object = {
      data: data,
      x: x,
      y: y,
      width: width,
      height: height,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.createCanvasContext(canvasId).putImageData(my_object);
  };

  swan.canvasGetImageData = function canvasGetImageData(swan_object) {
    var swan_canvasId = swan_object.canvasId;
    var swan_x = swan_object.x;
    var swan_y = swan_object.y;
    var swan_width = swan_object.width;
    var swan_height = swan_object.height;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var x = swan_x;
    var y = swan_y;
    var width = swan_width;
    var height = swan_height;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.createCanvasContext(swan_canvasId).getImageData({
        x: x,
        y: y,
        width: width,
        height: height,
        success: function success(my_res) {
          var swan_res = {
            width: my_res.width,
            height: my_res.height,
            data: my_res.data
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.canvasToTempFilePath = function canvasToTempFilePath(swan_object) {
    var swan_canvasId = swan_object.canvasId;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var canvasId = swan_canvasId;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.canvasToTempFilePath({
        canvasId: canvasId,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'canvasToTempFilePath: ok',
            tempFilePath: my_res.apFilePath
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 文件  ///////


  swan.saveFile = function saveFile(swan_object) {
    var swan_tempFilePath = swan_object.tempFilePath;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var apFilePath = swan_tempFilePath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.saveFile({
        apFilePath: apFilePath,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'saveFile: ok',
            savedFilePath: my_res.apFilePath
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.getFileInfo = function getFileInfo(swan_object) {
    var swan_filePath = swan_object.filePath;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var apFilePath = swan_filePath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getFileInfo({
        apFilePath: apFilePath,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getFileInfo: ok',
            size: my_res.size,
            digest: my_res.digest
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.getSavedFileList = function getSavedFileList(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getSavedFileList({
        success: function success(my_res) {
          var swan_fileList = my_res.fileList.map(function (file) {
            return {
              size: file.size,
              filePath: file.apFilePath,
              createTime: file.createTime
            };
          });
          var swan_res = {
            errMsg: 'getSavedFileList: ok',
            fileList: swan_fileList
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.getSavedFileInfo = function getSavedFileInfo(swan_object) {
    var swan_filePath = swan_object.filePath;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var apFilePath = swan_filePath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getSavedFileInfo({
        apFilePath: apFilePath,
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getSavedFileInfo: ok',
            size: my_res.size,
            createTime: my_res.createTime
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.openDocument = function openDocument(swan_object) {
    var swan_filePath = swan_object.filePath;
    var swan_fileType = swan_object.fileType || 'pdf';
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var apFilePath = swan_filePath;
    var fileType = swan_fileType;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.openDocument({
        apFilePath: apFilePath,
        fileType: fileType,
        success: function success() {
          var swan_res = {
            errMsg: 'openDocument: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.removeSavedFile = function removeSavedFile(swan_object) {
    var apFilePath = swan_object.filePath;
    var success = swan_object.success;
    var fail = swan_object.fail;
    var complete = swan_object.complete;
    swan_object = null;
    var my_object = {
      apFilePath: apFilePath,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.removeSavedFile(my_object);
  };

  swan.getFileSystemManager = function getFileSystemManager() {
    return my.getFileSystemManager();
  };

  // ////// 设备  ///////
  // ////// 系统信息  ///////


  swan.getSystemInfo = function getSystemInfo(object) {
    return my.getSystemInfo(object);
  };

  swan.getSystemInfoSync = function getSystemInfoSync() {
    return my.getSystemInfoSync();
  };

  swan.getConnectedWifi = function getConnectedWifi(object) {
    return my.getConnectedWifi(object);
  };

  // ////// 网络状态  ///////


  swan.getNetworkType = function getNetworkType(object) {
    return my.getNetworkType(object);
  };

  swan.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return my.onNetworkStatusChange(callback);
  };

  // ////// 屏幕  ///////


  swan.setKeepScreenOn = function setKeepScreenOn(object) {
    return my.setKeepScreenOn(object);
  };

  swan.getScreenBrightness = function getScreenBrightness(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getScreenBrightness({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getScreenBrightness: ok',
            value: my_res.brightness
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.setScreenBrightness = function setScreenBrightness(swan_object) {
    var swan_value = swan_object.value;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var brightness = swan_value;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setScreenBrightness({
        brightness: brightness,
        success: function success() {
          var swan_res = {
            errMsg: 'setScreenBrightness: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 拨打电话  ///////


  swan.makePhoneCall = function makePhoneCall(swan_object) {
    var swan_phoneNumber = swan_object.phoneNumber;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var number = swan_phoneNumber;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.makePhoneCall({
        number: number,
        success: function success() {
          var swan_res = {
            errMsg: 'makePhoneCall: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 震动  ///////


  swan.vibrateShort = function vibrateShort(object) {
    return my.vibrateShort(object);
  };

  swan.vibrateLong = function vibrateLong(object) {
    return my.vibrateLong(object);
  };

  // ////// 剪切板  ///////


  swan.getClipboardData = function getClipboardData(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getClipboard({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getClipboardData: ok',
            data: my_res.text
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.setClipboardData = function setClipboardData(swan_object) {
    var swan_data = swan_object.data;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var text = swan_data;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setClipboard({
        text: text,
        success: function success() {
          var swan_res = {
            errMsg: 'setClipboardData: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 扫码  ///////


  swan.scanCode = function scanCode(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.scan({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'scanCode: ok',
            result: my_res.code,
            qrCode: my_res.qrCode,
            barCode: my_res.barCode,
            scanType: my_res.codeType,
            codeContent: my_res.codeContent,
            imageChannel: my_res.imageChannel,
            rawData: my_res.rawData,
            charSet: 'GBK'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 加速度计  ///////


  swan.onAccelerometerChange = function onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (res) {
      if (swan._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  };

  swan.offAccelerometerChange = function offAccelerometerChange(callback) {
    my.offAccelerometerChange(function (res) {
      if (swan._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  };

  swan.stopAccelerometer = function stopAccelerometer(swan_object) {
    swan._stopAccelerometer = true;
    if (swan_object.success) {
      swan_object.success();
    }
    if (swan_object.complete) {
      swan_object.complete();
    }
  };

  swan.startAccelerometer = function startAccelerometer(swan_object) {
    swan._stopAccelerometer = false;
    if (swan_object.success) {
      swan_object.success();
    }
    if (swan_object.complete) {
      swan_object.complete();
    }
  };

  // ////// 设备方向  ///////


  swan.onDeviceMotionChange = function onDeviceMotionChange() {
    return console.warn('onDeviceMotionChange is not support');
  };

  swan.startDeviceMotionListening = function startDeviceMotionListening() {
    return console.warn('startDeviceMotionListening is not support');
  };

  swan.stopDeviceMotionListening = function stopDeviceMotionListening() {
    return console.warn('stopDeviceMotionListening is not support');
  };

  // ////// 性能  ///////


  swan.onMemoryWarning = function onMemoryWarning(callback) {
    return my.onMemoryWarning(callback);
  };

  // ////// 手机联系人  ///////


  swan.addPhoneContact = function addPhoneContact(object) {
    return my.addPhoneContact(object);
  };

  // ////// 电量  ///////


  swan.getBatteryInfo = function getBatteryInfo(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getBatteryInfo({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getBatteryInfo: ok',
            level: my_res.level.toString(),
            isCharging: my_res.isCharging
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.getBatteryInfoSync = function getBatteryInfoSync() {
    var my_res = my.getBatteryInfoSync();
    var swan_res = {
      level: my_res.level.toString(),
      isCharging: my_res.isCharging
    };
    return swan_res;
  };

  // ////// 截屏  ///////


  swan.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    return my.onUserCaptureScreen(callback);
  };

  // ////// 日历  ///////


  swan.addEventOnCalendar = function addEventOnCalendar() {
    return console.warn('addEventOnCalendar is not support');
  };

  swan.deleteEventOnCalendar = function deleteEventOnCalendar() {
    return console.warn('deleteEventOnCalendar is not support');
  };

  // ////// 键盘高度  ///////


  swan.onKeyboardHeightChange = function onKeyboardHeightChange() {
    return console.warn('onKeyboardHeightChange is not support');
  };

  swan.offKeyboardHeightChange = function offKeyboardHeightChange() {
    return console.warn('offKeyboardHeightChange is not support');
  };

  // ////// 第三方平台  ///////


  swan.getExtConfig = function getExtConfig(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getExtConfig({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getExtConfig: ok',
            extConfig: my_res.data
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.getExtConfigSync = function getExtConfigSync() {
    var my_res = my.getExtConfigSync();
    var swan_res = {
      extConfig: my_res.data
    };
    return swan_res;
  };

  // ////// 开放接口  ///////


  swan.login = function login(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAuthCode({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'login: ok',
            code: my_res.authCode,
            authErrorScopes: my_res.authErrorScopes,
            authSuccessScopes: my_res.authSuccessScopes
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
    getApp().onekit_login = true;
  };

  swan.getLoginCode = function getLoginCode(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAuthCode({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'getLoginCode: ok',
            code: my_res.authCode,
            authErrorScopes: my_res.authErrorScopes,
            authSuccessScopes: my_res.authSuccessScopes
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
    getApp().onekit_login = true;
  };

  swan.checkSession = function checkSession() {
    return console.warn('checkSession is not support');
  };

  swan.isLoginSync = function isLoginSync() {
    if (getApp().onekit_login) {
      return true;
    } else {
      return false;
    }
  };

  swan.authorize = function authorize(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAuthCode({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'authorize: ok',
            code: my_res.authCode,
            authErrorScopes: my_res.authErrorScopes,
            authSuccessScopes: my_res.authSuccessScopes
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 设置  ///////


  swan.getSetting = function getSetting(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getSetting({
        success: function success(my_res) {
          var authSetting = {
            'scope.userInfo': my_res.userinfo,
            'scope.userLocation': my_res.location,
            'scope.address': my_res.aliaddress,
            'scope.record': false,
            'scope.album': my_res.album,
            'scope.camera': my_res.camera
          };
          var swan_res = {
            errMsg: 'getSetting: ok',
            authSetting: authSetting
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.openSetting = function openSetting(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.openSetting({
        success: function success(my_res) {
          var authSetting = {
            'scope.userInfo': my_res.userinfo,
            'scope.userLocation': my_res.location,
            'scope.address': false,
            'scope.record': false,
            'scope.album': my_res.album,
            'scope.camera': my_res.camera
          };
          var swan_res = {
            errMsg: 'getSetting: ok',
            authSetting: authSetting
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 支付  ///////


  swan.requestPolymerPayment = function requestPolymerPayment(swan_object) {
    var swan_orderInfo = swan_object.orderInfo;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    var tradeNO = swan_orderInfo.tpOrderId;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.tradePay({
        tradeNO: tradeNO,
        success: function success(my_res) {
          var swan_res = {
            resultCode: my_res.resultCode
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 页面基础信息  ///////


  swan.setPageInfo = function setPageInfo() {
    return console.warn('setPageInfo is not support');
  };

  swan.setMetaDescription = function setMetaDescription() {
    return console.warn('setMetaDescription is not support');
  };

  swan.setMetaKeywords = function setMetaKeywords() {
    return console.warn('setMetaKeywords is not support');
  };

  swan.setDocumentTitle = function setDocumentTitle() {
    return console.warn('setDocumentTitle is not support');
  };

  // ////// 分包预下载  ///////
  // static loadSubPackage(swan_object) {
  //   const swan_root = swan_object.root
  //   const swan_success = swan_object.success
  //   const swan_fail = swan_object.fail
  //   const swan_complete = swan_object.complete
  //   swan_object = null
  //   const url = swan_root
  //   PROMISE((SUCCESS) => {
  //     my.downloadFile({
  //       url,
  //       success: my_res => {
  //         const swan_res = {
  //           tempFilePath: my_res.apFilePath,
  //           statusCode: 200
  //         }
  //         SUCCESS(swan_res)
  //       }
  //     })
  //   }, swan_success, swan_fail, swan_complete)
  // }

  // ////// 数据分析  ///////


  swan.reportAnalytics = function reportAnalytics(object) {
    return my.reportAnalytics(object);
  };

  // ////// 风控  ///////


  swan.getSystemRiskInfo = function getSystemRiskInfo() {
    return console.warn('getSystemRiskInfo is not support');
  };

  // ////// 订阅  ///////


  swan.subscribeService = function subscribeService() {
    return console.warn('subscribeService is not support');
  };

  // ////// 书架  ///////


  swan.insertBookshelf = function insertBookshelf() {
    return console.warn('insertBookshelf is not support');
  };

  swan.deleteBookshelf = function deleteBookshelf() {
    return console.warn('deleteBookshelf is not support');
  };

  swan.queryBookshelf = function queryBookshelf() {
    return console.warn('queryBookshelf is not support');
  };

  swan.updateBookshelfReadTime = function updateBookshelfReadTime() {
    return console.warn('updateBookshelfReadTime is not support');
  };

  swan.navigateToBookshelf = function navigateToBookshelf() {
    return console.warn('navigateToBookshelf is not support');
  };

  // ////// 跳转  ///////


  swan.openBdboxWebview = function openBdboxWebview() {
    return console.warn('openBdboxWebview is not support');
  };

  // ////// 用户接口  ///////


  swan.getSwanId = function getSwanId() {
    return console.warn('getSwanId is not support');
  };

  // static getUserInfo(swan_object) {
  //   const swan_success = swan_object.success
  //   const swan_fail = swan_object.fail
  //   const swan_complete = swan_object.complete
  //   swan_object = null
  //   PROMISE((SUCCESS) => {
  //     my.getUserInfo({
  //       success: my_res => {
  //         const swan_userInfo = {
  //           gender: 0,
  //           nickName: my_res.nickName,
  //           avatarUrl: my_res.avatar
  //         }
  //         const swan_res = {
  //           errMsg: 'getUserInfo: ok',
  //           userInfo: swan_userInfo,
  //         }
  //         SUCCESS(swan_res)
  //       }
  //     })
  //   }, swan_success, swan_fail, swan_complete)
  // }

  // ////// 分享  ///////


  swan.openShare = function openShare(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS, FAIL) {
      my.showSharePanel({
        success: function success() {
          var swan_res = {
            result: true
          };
          SUCCESS(swan_res);
        },
        fail: function fail() {
          var swan_res = {
            result: false
          };
          FAIL(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.shareFile = function shareFile() {
    return my.showSharePanel();
  };

  // ////// 打开小程序  ///////


  swan.navigateToSmartProgram = function navigateToSmartProgram() {
    return console.warn('navigateToSmartProgram is not support');
  };

  swan.navigateBackSmartProgram = function navigateBackSmartProgram() {
    return console.warn('navigateBackSmartProgram is not support');
  };

  // ////// 获取收货地址  ///////


  swan.chooseAddress = function chooseAddress(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAddress({
        success: function success(my_res) {
          var swan_res = {
            errMsg: 'chooseAddress: ok',
            userName: my_res.fullname,
            provinceName: my_res.prov,
            cityName: my_res.city,
            countyName: my_res.country,
            detailInfo: my_res.address,
            telNumber: my_res.mobilePhone,
            area: my_res.area,
            street: my_res.street
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ////// 获取发票抬头  ///////


  swan.chooseInvoiceTitle = function chooseInvoiceTitle() {
    return console.warn('chooseInvoiceTitle is not support');
  };

  // ////// 全屏内容发布器  ///////


  swan.openCommunityEditor = function openCommunityEditor() {
    return console.warn('openCommunityEditor is not support');
  };

  swan.closeCommunityEditor = function closeCommunityEditor() {
    return console.warn('closeCommunityEditor is not support');
  };

  // ////// 全屏内容发布器  ///////


  swan.openReplyEditor = function openReplyEditor() {
    return console.warn('openReplyEditor is not support');
  };

  swan.closeReplyEditor = function closeReplyEditor() {
    return console.warn('closeReplyEditor is not support');
  };

  // ////// 激励视频广告  ///////


  swan.createRewardedVideoAd = function createRewardedVideoAd() {
    return console.warn('createRewardedVideoAd is not support');
  };

  return swan;
}();

exports.default = swan;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function current() {
  var pages = getCurrentPages();
  if (pages.length === 0) {
    return {};
  }
  return pages[pages.length - 1];
}

function currentUrl() {
  return current().route;
}
module.exports = { current: current, currentUrl: currentUrl };

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = exports.swan = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(41);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(42);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(43);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(44);
exports.OnekitPage = OnekitPage_1.default;
var swan_1 = __webpack_require__(3);
exports.swan = swan_1.default;
var global_1 = __webpack_require__(45);
exports.GLOBAL = global_1.default;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable no-console */
/* eslint-disable camelcase */

function OnekitApp(swan_object) {
  var my_object = {
    onekit_nodes: {},
    onLaunch: function onLaunch() {
      my.onError(function (my_error) {
        console.error('[my.onError]', my_error);
        var swan_error = my_error;
        if (getApp().onekit_onError) {
          getApp().onekit_onError(swan_error);
        }
        if (swan_object.onError) {
          swan_object.onError(swan_error);
        }
      });
      //

      // 小程序不支持
      // my.onPageNotFound(function (my_error) {
      //   var swan_error = my_error;
      //   if (getApp().onekit_onPageNotFound) {
      //     getApp().onekit_onPageNotFound(swan_error);
      //   }
      //   if (swan_object.onPageNotFound) {
      //     swan_object.onPageNotFound(swan_error);
      //   }
      // });
      // /////////////////
      if (swan_object.onLaunch) {
        swan_object.onLaunch();
      }
    },
    onShow: function onShow() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow();
      }
      if (swan_object.onShow) {
        swan_object.onShow();
      }
    },
    onHide: function onHide() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow();
      }
      if (swan_object.onHide) {
        swan_object.onHide();
      }
    },
    onError: function onError() {
      if (swan_object.onError) {
        swan_object.onError();
      }
    }
  };
  for (var _iterator = Object.keys(swan_object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var member = swan_object[key];
    switch (key) {
      case 'onLaunch':
      case 'onShow':
      case 'onHide':
      case 'onError':
      case 'onPageNotFound':
      case 'onUnhandledRejection':
      case 'onThemeChange':
        break;
      default:
        my_object[key] = member;
        break;
    }
  }
  return App(my_object);
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _oneutil = __webpack_require__(2);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _swan = __webpack_require__(3);

var _swan2 = _interopRequireDefault(_swan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitBehavior(object) {
  var swan_object = {
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _oneutil2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _swan2.default.createSelectorQuery;
  }
  for (var _iterator = Object.keys(object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        swan_object.props = {};
        for (var _iterator2 = Object.keys(value), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var p = _ref2;

          var v = value[p];
          swan_object.props[p] = v && v.value ? v.value : null;
        }
        break;
      default:
        swan_object[key] = value;
    }
  }

  return swan_object;
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;

var _oneutil = __webpack_require__(2);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _swan = __webpack_require__(3);

var _swan2 = _interopRequireDefault(_swan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitComponent(object) {
  var properties = {};
  var swan_object = {
    data: function data() {
      '';
    },
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      for (var _iterator = Object.keys(this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var k = _ref;

        var v = this.props[k];
        properties[k] = v;
        this.data[k] = v;
      }
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    },

    methods: {
      get properties() {
        return properties;
      }

    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _oneutil2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _swan2.default.createSelectorQuery;
  }
  for (var _iterator2 = Object.keys(object), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var key = _ref2;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        swan_object.props = {};
        for (var _iterator3 = Object.keys(value), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var k = _ref3;

          var p = value[k];
          var v = p && p.value ? p.value : null;
          swan_object.props[k] = v;
          properties[k] = v;
        }
        break;
      case 'methods':
        for (var _iterator4 = Object.keys(value), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var _k = _ref4;

          swan_object.methods[_k] = value[_k];
        }
        break;
      case 'data':
        for (var _iterator5 = Object.keys(value), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref5 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref5 = _i5.value;
          }

          var _k2 = _ref5;

          swan_object.data[_k2] = value[_k2];
        }
        break;
      case 'behaviors':
        swan_object.mixins = value;
        break;
      default:
        swan_object[key] = value;
        break;
    }
  }
  return Component(swan_object);
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(swan_object) {
  var my_object = {
    events: {
      onKeyboardHeight: function onKeyboardHeight(e) {
        for (var _iterator = getApp().onekit_onKeyboardHeight, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var onKeyboardHeight = _ref;

          onKeyboardHeight(e);
        }
      }
    },
    onLoad: function onLoad(options) {
      this._setData = this.setData;
      this.setData = function (keyOrData, value) {
        if (typeof keyOrData === 'string') {
          var data = {};
          data[keyOrData] = value;
          this._setData(data);
        } else {
          this._setData(keyOrData);
        }
      };
      if (swan_object.onLoad) {
        swan_object.onLoad.call(this, options || {});
      }
    },
    onReady: function onReady() {
      if (swan_object.onLoad) {
        swan_object.onLoad.call(this, this.query);
      }
      if (swan_object.onReady) {
        swan_object.onReady.call(this);
      }
    },
    getData: function getData(key) {
      return this.data[key];
    },
    selectComponent: function selectComponent(selector) {
      // selector = selector.replace(".","$");
      // selector = selector.replace("-","_");
      for (var _iterator2 = Object.keys(this), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var key = _ref2;

        if (key.indexOf(selector) >= 0) {
          return this[key];
        }
      }
      return null;
    },
    selectAllComponents: function selectAllComponents(selector) {
      //  selector = selector.replace(".","$");
      //   selector = selector.replace("-","_");
      for (var _iterator3 = Object.keys(this), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var key = _ref3;

        if (key.indexOf(selector) >= 0) {
          return [this[key]];
        }
      }
      return [];
    }
  };
  if (swan_object.behaviors) {
    for (var _iterator4 = swan_object.behaviors, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var behavior = _ref4;

      for (var _iterator5 = Object.keys(behavior), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var behavior_key = _ref5;

        var behavior_value = behavior[behavior_key];
        switch (behavior_key) {
          case 'methods':
            for (var _iterator6 = Object.keys(behavior_value), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
              }

              var method_key = _ref6;

              var method = behavior_value[method_key];
              my_object[method_key] = method;
            }
            break;
          default:
            my_object[behavior_key] = behavior_value;
            break;
        }
      }
    }
  }
  for (var _iterator7 = Object.keys(swan_object), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
    var _ref7;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref7 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref7 = _i7.value;
    }

    var key = _ref7;

    var value = swan_object[key];
    switch (key) {
      case 'behaviors':
        break;
      case 'onLoad':
        break;
      default:
        my_object[key] = value;
        break;
    }
  }
  return Page(my_object);
}

/*
export default function OnekitPage(swan_object) {
  const my_object = {
    onLoad(options) {
      this._setData = this.setData
      this.setData = function (keyOrData, value) {
        if (typeof (keyOrData) === 'string') {
          const data = {}
          data[keyOrData] = value
          this._setData(data)
        } else {
          this._setData(keyOrData)
        }
      }
      if (swan_object.onLoad) {
        swan_object.onLoad.call(this, options || {})
      }
    },
    getData(key) {
      return this.data[key]
    }
  }
  for (const key of Object.keys(swan_object)) {
    switch (key) {
      case 'onLoad':
        break
      default:
        my_object[key] = swan_object[key]
        break
    }
  }

  return Page(my_object)
}
*/

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var global = function () {
  function global() {
    _classCallCheck(this, global);
  }

  global.btoa = function (_btoa) {
    function btoa() {
      return _btoa.apply(this, arguments);
    }

    btoa.toString = function () {
      return _btoa.toString();
    };

    return btoa;
  }(function () {
    // eslint-disable-next-line no-undef
    return btoa();
  });

  _createClass(global, null, [{
    key: "isDemo",
    get: function get() {
      return false;
    }
  }]);

  return global;
}();

exports.default = global;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("oneutil/PROMISE");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CameraContext = function () {
  function CameraContext(myCameraContext) {
    _classCallCheck(this, CameraContext);

    this.myCameraContext = myCameraContext;
  }

  CameraContext.prototype.takePhoto = function takePhoto(object) {
    return this.myCameraContext.takePhoto(object);
  };

  CameraContext.prototype.startRecord = function startRecord(object) {
    return this.myCameraContext.startRecord(object);
  };

  CameraContext.prototype.stopRecord = function stopRecord(object) {
    return this.myCameraContext.stopRecord(object);
  };

  return CameraContext;
}();

exports.default = CameraContext;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable max-len */
var CanvasContext = function () {
  function CanvasContext(alipayCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.alipayCanvasContext = alipayCanvasContext;
  }

  CanvasContext.prototype.setFillStyle = function setFillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color);
  };

  CanvasContext.prototype.setStrokeStyle = function setStrokeStyle(color) {
    return this.alipayCanvasContext.setStrokeStyle(color);
  };

  CanvasContext.prototype.setShadow = function setShadow(offsetX, offsetY, blur, color) {
    return this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color);
  };

  CanvasContext.prototype.createLinearGradient = function createLinearGradient(x0, y0, x1, y1) {
    return this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1);
  };

  CanvasContext.prototype.createCircularGradient = function createCircularGradient(x, y, z) {
    return this.alipayCanvasContext.createCircularGradient(x, y, z);
  };

  CanvasContext.prototype.addColorStop = function addColorStop(stop, color) {
    return this.alipayCanvasContext.addColorStop(stop, color);
  };

  CanvasContext.prototype.setLineWidth = function setLineWidth(lineWidth) {
    return this.alipayCanvasContext.setLineWidth(lineWidth);
  };

  CanvasContext.prototype.setLineCap = function setLineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap);
  };

  CanvasContext.prototype.setLineJoin = function setLineJoin(lineJoin) {
    return this.alipayCanvasContext.setLineJoin(lineJoin);
  };

  //


  CanvasContext.prototype.setLineDash = function setLineDash(pattern, offset) {
    this.lineDashOffset = (pattern, offset);
  };

  CanvasContext.prototype.setMiterLimit = function setMiterLimit(miterLimit) {
    return this.alipayCanvasContext.setMiterLimit(miterLimit);
  };

  CanvasContext.prototype.rect = function rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height);
  };

  CanvasContext.prototype.fillRect = function fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height);
  };

  CanvasContext.prototype.strokeRect = function strokeRect(x, y, width, height) {
    return this.alipayCanvasContext.strokeRect(x, y, width, height);
  };

  CanvasContext.prototype.clearRect = function clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height);
  };

  CanvasContext.prototype.fill = function fill() {
    return this.alipayCanvasContext.fill();
  };

  CanvasContext.prototype.stroke = function stroke() {
    return this.alipayCanvasContext.stroke();
  };

  CanvasContext.prototype.beginPath = function beginPath() {
    return this.alipayCanvasContext.beginPath();
  };

  CanvasContext.prototype.closePath = function closePath() {
    return this.alipayCanvasContext.closePath();
  };

  CanvasContext.prototype.moveTo = function moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y);
  };

  CanvasContext.prototype.lineTo = function lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y);
  };

  CanvasContext.prototype.arc = function arc(x, y, r, sAngle, eAngle) {
    var counterclockwise = 0;
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise);
  };

  CanvasContext.prototype.scale = function scale(scaleWidth, scaleHeight) {
    return this.alipayCanvasContext.scale(scaleWidth, scaleHeight);
  };

  CanvasContext.prototype.rotate = function rotate(_rotate) {
    return this.alipayCanvasContext.rotate(_rotate);
  };

  CanvasContext.prototype.translate = function translate(x, y) {
    return this.alipayCanvasContext.translate(x, y);
  };

  CanvasContext.prototype.clip = function clip() {
    this.alipayCanvasContext.setFillStyle('#000');
    return this.alipayCanvasContext.clip();
  };

  CanvasContext.prototype.setFontSize = function setFontSize(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize);
  };

  CanvasContext.prototype.fillText = function fillText(text, x, y) {
    this._reset();
    return this.alipayCanvasContext.fillText(text, x, y);
  };

  CanvasContext.prototype.setTextAlign = function setTextAlign(align) {
    return this.alipayCanvasContext.setTextAlign(align);
  };

  CanvasContext.prototype.setTextBaseline = function setTextBaseline(textBaseline) {
    return this.alipayCanvasContext.setTextBaseline(textBaseline);
  };

  CanvasContext.prototype.drawImage = function drawImage(imageResource, sx, sy) {
    var sWidth = 0;
    var sHeight = 0;
    var dx = 0;
    var dy = 0;
    var dWidth = 0;
    var dHeight = 0;
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  };

  CanvasContext.prototype.setGlobalAlpha = function setGlobalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha);
  };

  CanvasContext.prototype.measureText = function measureText(width) {
    return this.alipayCanvasContext.measureText(width);
  };

  CanvasContext.prototype.strokeText = function strokeText(text, x, y) {
    var maxWidth = 0;
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth);
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this._reset();
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y);
  };

  CanvasContext.prototype.save = function save() {
    return this.alipayCanvasContext.save();
  };

  CanvasContext.prototype.restore = function restore() {
    return this.alipayCanvasContext.restore();
  };

  CanvasContext.prototype.draw = function draw(reserve, callback) {
    return this.alipayCanvasContext.draw(reserve, callback);
  };

  CanvasContext.prototype.setTransform = function setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY);
  };

  CanvasContext.prototype._reset = function _reset() {
    this.alipayCanvasContext.setFillStyle('#000000');
    this.alipayCanvasContext.setStrokeStyle('#000000');
    this.alipayCanvasContext.setFontSize(10);
    this.alipayCanvasContext.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');
    this.alipayCanvasContext.setLineJoin('miter');
    this.alipayCanvasContext.setLineWidth(1);
    this.alipayCanvasContext.setMiterLimit(10);
    this.alipayCanvasContext.clearRect(0, 0, 1000, 1000);
  };

  _createClass(CanvasContext, [{
    key: 'lineDashOffset',
    set: function set(offset) {
      this.alipayCanvasContext.setLineDash([5, 5], offset);
    },
    get: function get() {
      return this.alipayCanvasContext.getLineDash();
    }
  }]);

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable camelcase */

var VideoContext = function () {
  function VideoContext(alipayVideoContext, id) {
    _classCallCheck(this, VideoContext);

    this.alipayVideoContext = alipayVideoContext;
    this.id = id;
  }

  VideoContext.prototype.play = function play() {
    return this.alipayVideoContext.play();
  };

  VideoContext.prototype.pause = function pause() {
    return this.alipayVideoContext.pause();
  };

  VideoContext.prototype.seek = function seek(position) {
    return this.alipayVideoContext.seek(position);
  };

  VideoContext.prototype.sendDanmu = function sendDanmu(data) {
    var video = getApp().onekit_nodes["_" + this.id];
    video.sendDanmu(data);
  };

  VideoContext.prototype.requestFullScreen = function requestFullScreen(object) {
    return this.alipayVideoContext.requestFullScreen(object);
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.alipayVideoContext.exitFullScreen();
  };

  VideoContext.prototype.showStatusBar = function showStatusBar() {
    return this.alipayVideoContext.showStatusBar();
  };

  VideoContext.prototype.hideStatusBar = function hideStatusBar() {
    return this.alipayVideoContext.hideStatusBar();
  };

  VideoContext.prototype.stop = function stop() {
    return this.alipayVideoContext.stop();
  };

  VideoContext.prototype.playbackRate = function playbackRate(rate) {
    return this.alipayVideoContext.playbackRate(rate);
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ })

/******/ });