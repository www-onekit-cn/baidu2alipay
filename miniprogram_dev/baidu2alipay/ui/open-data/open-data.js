module.exports =
  /******/
  (function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value);
      /******/
      if (mode & 8) return value;
      /******/
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /******/
      var ns = Object.create(null);
      /******/
      __webpack_require__.r(ns);
      /******/
      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/
      if (mode & 2 && typeof value != 'string')
        for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      /******/
      return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 14);
    /******/
  })
/************************************************************************/
/******/
({

  /***/
  0:
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";
      /* eslint-disable max-len */
      // import swan_ai from "./swan.ai"
      // import onekit from "./onekit"
      // import CanvasContext from "./api/CanvasContext"
      // import VideoContext from "./api/VideoContext"
      // export default class swan {
      //   // ///////////////// animation //////////////////////////
      //   static createAnimation(swan_object) {
      //     return my.createAnimation(swan_object);
      //   }
      //   //////////////////onKeyboardHeightChange//////////////////
      //   static onKeyboardHeightChange(swan_object) {
      //     //需要编程支持
      //   }
      //   // /////////////// basic ////////////////////////////////
      //   static canIUse(swan_object) { return true; }
      //   static _getSystemInfo(swan_res) {
      //     swan_res.SDKVersion = "2.7.0";
      //     my.openBluetoothAdapter({
      //       success: (my_res) => {
      //         // swan_res.bluetoothEnabled = true;
      //         my.closeBluetoothAdapter();
      //       },
      //       fail: (my_res) => {
      //         // swan_res.bluetoothEnabled = false;
      //         my.closeBluetoothAdapter();
      //       }
      //     });
      //     my.getNetworkType({
      //       success: (my_res) => {
      //         // swan_res.wifiEnabled = (my_res.networkType === "WIFI");
      //       },
      //       fail: (my_res) => {
      //         // swan_res.wifiEnabled = false;
      //       }
      //     });
      //     my.getSetting({
      //       success: (my_res) => {
      //         swan_res.locationAuthorized = (my_res.authSetting.location === true);
      //         swan_res.cameraAuthorized = (my_res.authSetting.camera === true);
      //         swan_res.microphoneAuthorized = (my_res.authSetting.audioRecord === true);
      //         swan_res.albumAuthorized = (my_res.authSetting.album === true);
      //       },
      //     });
      //     return swan_res;
      //   }
      //   static getSystemInfo(swan_object) {
      //     var my_object = {};
      //     my_object.success = function (my_res) {
      //       var swan_res = {
      //         errMsg: "getSystemInfo:ok",
      //         SDKVersion: "2.4.2",
      //         brand: my_res.brand,
      //         fontSizeSetting: my_res.fontSizeSetting,
      //         language: my_res.language,
      //         model: my_res.model,
      //         // notificationAuthorized: notificationAuthorized,
      //         pixelRatio: my_res.pixelRatio,
      //         platform: my_res.platform,
      //         safeArea: { height: my_res.screenHeight, width: my_res.screenWidth, bottom: my_res.screenHeight, top: 0, left: 0, right: my_res.screenWidth },
      //         screenHeight: my_res.screenHeight,
      //         screenWidth: my_res.screenWidth,
      //         statusBarHeight: my_res.statusBarHeight,
      //         system: my_res.system,
      //         version: my_res.version,
      //         windowHeight: my_res.windowWidth,
      //         windowWidth: my_res.windowHeight,
      //       };

      //       swan_res = swan._getSystemInfo(swan_res);
      //       if (swan_success) { swan_success(swan_res); }
      //       if (swan_object.fail) { swan_fail(swan_res); }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(my_res);
      //       }
      //       if (swan_complete) {
      //         objec.complete(my_res);
      //       }
      //     };

      //     return my.getSystemInfo(my_object);
      //   }
      //   static getSystemInfoSync() {
      //     return my.getSystemInfoSync();
      //   }
      //   static base64ToArrayBuffer(base64) {
      //     base64 = base64.replace(/\s/g, '+');
      //     let commonContent = Buffer.from(base64, 'base64');
      //     return commonContent;
      //   }
      //   static arrayBufferToBase64(arrayBuffer) {
      //     let base64Content = Buffer.from(arrayBuffer).toString('base64');
      //     return base64Content;
      //   }
      //   static getUpdateManager(swan_object) { return my.getUpdateManager(swan_object); }
      //   static getLaunchOptionsSync(swan_object) { return my.getLaunchOptionsSync(swan_object); }
      //   static offPageNotFound(swan_object) { return my.offPageNotFound(swan_object); }
      //   static onPageNotFound(swan_object) { return my.onPageNotFound(swan_object); }
      //   static offError(swan_object) { return my.offError(swan_object); }
      //   static onError(swan_object) { return my.onError(swan_object); }
      //   static offAppShow(swan_object) { return my.offAppShow(swan_object); }
      //   static onAppShow(swan_object) { return my.onAppShow(swan_object); }
      //   static offAppHide(swan_object) { return my.offAppHide(swan_object); }
      //   static onAppHide(swan_object) { return my.onAppHide(swan_object); }
      //   static setEnableDebug(swan_object) { return my.setEnableDebug(swan_object); }
      //   static getLogManager(swan_object) { return my.getLogManager(swan_object); }
      //   // ///////////////// Canvas ///////////////////
      //   static drawCanvas(swan_object) {
      //     var canvasId = swan_object.canvasId;
      //     var actions = swan_object.actions;
      //     var canvasContext = my.createCanvasContext(canvasId);
      //     var dt;
      //     for (const action of actions) {
      //       var data = action.data;
      //       switch (action.method) {
      //         case "save":
      //           canvasContext.save();
      //           break;
      //         case "restore":
      //           canvasContext.restore();
      //           break;
      //         case "setFillStyle":
      //           canvasContext.setFillStyle({ swan, OnekitPage }.array2str(data[1]));
      //           break;
      //         case "setStrokeStyle":
      //           canvasContext.setStrokeStyle({ swan, OnekitPage }.array2str(data[1]));
      //           break;
      //         case "setFontSize":
      //           canvasContext.setFontSize(data[0]);
      //           break;
      //         case "setGlobalAlpha":
      //           canvasContext.setGlobalAlpha(data[0]);
      //           break;
      //         case "setShadow":
      //           var dat = data[3];
      //           canvasContext.setShadow(data[0], data[1], data[2], { swan, OnekitPage }.array2str(data[3]));
      //           break;
      //         case "setStrokeStyle":
      //           canvasContext.setStrokeStyle({ swan, OnekitPage }.array2str(data));
      //           break;
      //         case "drawImage":
      //           canvasContext.drawImage.apply(canvasContext, data);
      //           break;
      //         case "fillText":
      //           canvasContext.fillText.apply(canvasContext, data);
      //           break;
      //         case "setLineCap": canvasContext.setLineCap(data[0]); break;
      //         case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
      //         case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
      //         case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
      //         case "rotate": canvasContext.rotate(data[0]); break;
      //         case "scale": canvasContext.scale(data[0], data[1]); break;
      //         case "translate": canvasContext.translate(data[0], data[1]); break;
      //         case "strokePath":
      //           canvasContext.beginPath();
      //           for (dat of data) {
      //             dt = dat.data;
      //             switch (dat.method) {
      //               case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
      //               case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
      //               case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
      //               case "closePath": canvasContext.closePath(); break;
      //               case "arc": canvasContext.arc.apply(canvasContext, dt); break;
      //               case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
      //               case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

      //               default:
      //                 console.log("[drawCanvas-strokePath]", dat.method);
      //                 break;
      //             }
      //           }
      //           canvasContext.stroke();
      //           break;
      //         case "fillPath":
      //           for (dat of data) {
      //             dt = dat.data;
      //             switch (dat.method) {
      //               case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
      //               case "arc": canvasContext.arc.apply(canvasContext, dt); break;
      //               default:
      //                 console.log("[drawCanvas-fillPath]", dat.method);
      //                 break;
      //             }
      //           }
      //           canvasContext.fill();
      //           break;
      //         case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
      //         default:
      //           console.log("[drawCanvas]", action.method);
      //           break;
      //       }
      //     }
      //     canvasContext.draw();
      //   }
      //   static createContext() {
      //     var context = new Context();
      //     return context;
      //   }
      //   static createCanvasContext(canvasId) {
      //     return new CanvasContext(my.createCanvasContext(canvasId));
      //   }
      //   static createVideoContext(videoId, ui) {
      //     return new VideoContext(my.createVideoContext(videoId));
      //   }
      //   // //////////// swanML ///////////////
      //   static createSelectorQuery() {
      //     return new SelectorQuery(my.createSelectorQuery());
      //   }
      //   static canvasToTempFilePath(swan_object) {
      //     var my_object = {
      //       canvasId: swan_object.canvasId
      //     };
      //     my_object.success = function (my_res) {
      //       var swan_res = {
      //         errMsg: "canvasToTempFilePath:ok",
      //         tempFilePath: my_res.apFilePath
      //       };
      //       if (swan_success) {
      //         swan_object.success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.canvasToTempFilePath(my_object);
      //   }
      //   static canvasPutImageData(swan_object) { return my.canvasPutImageData(swan_object); }
      //   static canvasGetImageData(swan_object) { return my.canvasGetImageData(swan_object); }
      //   // //////////// Device //////////////////
      //   static onBeaconServiceChange(swan_object) { return my.onBeaconServiceChange(swan_object); }
      //   static onBeaconUpdate(swan_object) { return my.onBeaconUpdate(swan_object); }
      //   static getBeacons(swan_object) { return my.getBeacons(swan_object); }
      //   static stopBeaconDiscovery(swan_object) { return my.stopBeaconDiscovery(swan_object); }
      //   static startBeaconDiscovery(swan_object) { return my.startBeaconDiscovery(swan_object); }
      //   static stopWifi(swan_object) { return my.stopWifi(swan_object); }
      //   static startWifi(swan_object) { return my.startWifi(swan_object); }
      //   static setWifiList(swan_object) { return my.setWifiList(swan_object); }
      //   static onWifiConnected(swan_object) { return my.onWifiConnected(swan_object); }
      //   static onGetWifiList(swan_object) { return my.onGetWifiList(swan_object); }
      //   static getWifiList(swan_object) { return my.getWifiList(swan_object); }
      //   static getConnectedWifi(swan_object) { return my.getConnectedWifi(swan_object); }
      //   static connectWifi(swan_object) { return my.connectWifi(swan_object); }
      //   // ///////////////////////////////////////////
      // //   static setBackgroundFetchToken(my_object) {
      // //     var swan_token = my_object.token;
      // //     var swan_success = my_object.success;
      // //     var swan_fail = my_object.fail;
      // //     var swan_complete = my_object.complete;
      // //     /////////////////
      // //     my.setStorage({
      // //       key: "swan_token",
      // //       data: {
      // //         swan_token: swan_token,
      // //       },
      // //     })
      // //     my_object.success = function (swan_res) {
      // //       var swan_res = {
      // //         errMsg: "setBackgroundFetchToken:ok"
      // //       };
      // //       if (swan_success) {
      // //         swan_success(swan_res);
      // //       }
      // //       if (swan_success) {
      // //         swan_complete(swan_res);
      // //       }
      // //     };
      // //   };
      // //   static getBackgroundFetchToken(my_object) {
      // //     var swan_success = my_object.success;
      // //     var swan_fail = my_object.fail;
      // //     var swan_complete = my_object.complete;
      // //     console.log(swan_success)
      // //     my.getStorage({
      // //       key: 'swan_token',
      // //       success(my_res) {
      // //         console.log(my_res.data)
      // //       }
      // //     })
      // //     my_object.success = function (swan_res) {
      // //       var swan_res = {
      // //         errMsg: "getBackgroundFetchToken:ok"
      // //       };
      // //       console.log("", swan_res)

      // //       if (swan_success) {
      // //         swan_success(swan_res);
      // //       }
      // //       if (swan_success) {
      // //         swan_complete(swan_res);
      // //       }
      // //     };
      // //   };
      // //   static onBackgroundFetchData(callback) {
      // // //支付宝没有,需要编程
      // //   }

      //   static onAccelerometerChange(callback) {
      //     my.onAccelerometerChange(function (my_res) {
      //       if (swan._stopAccelerometer) {
      //         return;
      //       }
      //       callback(my_res);
      //     });
      //   }
      //   static stopAccelerometer(swan_object) {
      //     swan._stopAccelerometer = true;
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   static startAccelerometer(swan_object) {
      //     swan._stopAccelerometer = false;
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   static getBatteryInfoSync(swan_object) { return my.getBatteryInfoSync(swan_object); }
      //   static _getBatteryInfo(swan_res) {
      //     my.getSystemInfo({
      //       success: (my_res) => {
      //         var percent = my_res.currentBattery;
      //         function toPoint(percent) {
      //           var str = percent.replace("%", "");
      //           str = str / 100;
      //           return str;
      //         }
      //         toPoint(percent);
      //         var results = toPoint(percent);
      //         swan_res.level = results;
      //       }
      //     });
      //     return swan_res;
      //   }
      //   static getBatteryInfo(swan_object) {
      //     var my_object = {};
      //     my_object.success = function (my_res) {
      //       var swan_res = {
      //         errMsg: "getBatteryInfo:ok",
      //         isCharging: false,
      //       };
      //       swan_res = swan._getBatteryInfo(swan_res);
      //       if (swan_success) { swan_success(swan_res); }
      //       if (swan_object.fail) { swan_fail(swan_res); }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_success) { swan_object.success(my_res); }
      //       if (swan_object.fail) { swan_object.fail(my_res); }
      //     };
      //     return my.getSystemInfo(my_object);
      //   }
      //   //
      //   static getClipboardData(swan_object) {
      //     var my_object = {};
      //     if (swan_object) {
      //       my_object.success = function (my_res) {
      //         var swan_res = { data: my_res.text };
      //         if (swan_success) { swan_success(swan_res); }
      //         if (swan_object.fail) { swan_fail(swan_res); }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_success) { swan_object.success(my_res); }
      //         if (swan_object.fail) { swan_object.fail(my_res); }
      //       };
      //     }
      //     return my.getClipboard(my_object);
      //   }
      //   static setClipboardData(swan_object) {

      //     if (swan_object) {
      //       var  my_object = {};

      //       for (var key in swan_object) {
      //         switch (key) {
      //           case "data":
      //             my_object.text = swan_object[key];
      //             break;
      //           default:
      //             my_object[key] = swan_object[key];
      //             break;
      //         }
      //       }
      //     }
      //     return my.setClipboard(my_object);
      //   }
      //   static onCompassChange(swan_callback) {
      //     my.onCompassChange(function (my_res) {
      //       if (!swan._startCompass) {
      //         return;
      //       }
      //       swan_callback(my_res);
      //     });
      //   }
      //   static stopCompass(swan_object) {
      //     swan._startCompass = false;
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   static startCompass(swan_object) {
      //     swan._startCompass = true;
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   static addPhoneContact(swan_object) {
      //     var my_object = {};
      //     var errMsg;
      //     var swan_res = {
      //       errMsg: errMsg
      //     };
      //     my_object.success = function (my_res) {
      //       swan_res.errMsg = "addPhoneContact:ok";
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       swan_res.errMsg = "addPhoneContact:fail cancel";
      //       if (swan_object.fail) {
      //         swan_fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.addPhoneContact(my_object);
      //   }
      //   static onGyroscopeChange(callback) {
      //     my.onGyroscopeChange(function (my_res) {
      //       if (!swan._startGyroscope) {
      //         return;
      //       }
      //       callback(my_res);
      //     });
      //   }
      //   static stopGyroscope(swan_object) {
      //     swan._startGyroscope = false;
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   static startGyroscope(swan_object) {
      //     swan._startGyroscope = true;
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   //
      //   static onDeviceMotionChange(swan_object) { return my.onDeviceMotionChange(swan_object); }
      //   static stopDeviceMotionListening(swan_object) { return my.stopDeviceMotionListening(swan_object); }
      //   static startDeviceMotionListening(swan_object) { return my.startDeviceMotionListening(swan_object); }
      //   //
      //   static getNetworkType(swan_object) {
      //     if(!swan_object){return}
      //     var my_object = {};
      //     var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //      if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //       var swan_res = { networkType: swan._network(my_res).networkType };
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };

      //     return my.getNetworkType(my_object);
      //   }
      //   static _network(my_res) {
      //     var networkType;
      //     if (my_res.networkAvailable) {
      //       switch (my_res.networkType) {
      //         case "WWAN":
      //           networkType = "WIFI";
      //           break;
      //         default:
      //           networkType = my_res.networkType;
      //           break;
      //       }
      //     } else {
      //       networkType = "NONE";
      //     }
      //     return { isConnected: my_res.networkAvailable, networkType: networkType.toLowerCase() };
      //   }
      //   static onNetworkStatusChange(callack) {
      //     my.onNetworkStatusChange(function (my_res) {
      //       callack(swan._network(my_res));
      //     });
      //   }


      //   //
      //   static makePhoneCall(swan_object) {
      //     if (swan_object) {
      //     var  my_object = {};
      //     var swan_phoneNumber=swan_object.phoneNumber
      //     var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_phoneNumber){
      //      my_object.phoneNumber=swan_phoneNumber
      //     }
      //     if(swan_success){
      //      my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //      my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //      my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //         var swan_res = {
      //         };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_object.fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };

      //     }
      //      return my.makePhoneCall(my_object);
      //   }

      //   static scanCode(swan_object) {//
      //     var my_object;
      //     if (swan_object) {
      //       my_object = {};
      //       var swan_onlyFromCamera=swan_object.onlyFromCamera||false
      //       var swan_scanType=swan_object.scanType
      //        var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_onlyFromCamera){
      //       my_object.hideAlbum=swan_onlyFromCamera
      //     }
      //     if(swan_scanType){
      //       my_object.scanType=swan_scanType
      //     }
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //       my_object.success = function (my_res) {
      //         console.log(my_res)
      //         var swan_res = {};
      //         if (my_res.code) {
      //           swan_res.charSet = "UTF-8";
      //           swan_res.swan_res = my_res.code;
      //           if (my_res.qrCode) {
      //             swan_res.scanType = "QR_CODE";
      //           } else if (my_res.barCode) {
      //             swan_res.scanType = "EAN_8";
      //           }
      //         }
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         console.log(my_res)
      //         if (swan_fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       };
      //     }
      //     return my.scan(my_object);
      //   }
      //   //
      //   static vibrateLong(swan_object) {
      //     var my_object = {};
      //     my_object.success = function (my_res) {
      //       var swan_res = {
      //         errMsg: "vibrateLong:ok"
      //       };
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.vibrateLong(my_object);
      //   }
      //   static vibrateShort(swan_object) {
      //     var my_object = {};
      //     my_object.success = function (my_res) {
      //       var swan_res = {
      //         errMsg: "vibrateShort:ok"
      //       };
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.vibrateShort(my_object);
      //   }
      //   //
      //   static onMemoryWarning(swan_object) { return my.onMemoryWarning(swan_object); }
      //   //
      //   static writeBLECharacteristicValue(swan_object) { return my.writeBLECharacteristicValue(swan_object); }
      //   static readBLECharacteristicValue(swan_object) { return my.readBLECharacteristicValue(swan_object); }
      //   static onBLEConnectionStateChange(swan_object) { return my.onBLEConnectionStateChange(swan_object); }
      //   static onBLECharacteristicValueChange(swan_object) { return my.onBLECharacteristicValueChange(swan_object); }
      //   static notifyBLECharacteristicValueChange(swan_object) { return my.notifyBLECharacteristicValueChange(swan_object); }
      //   static getBLEDeviceServices(swan_object) { return my.getBLEDeviceServices(swan_object); }
      //   static getBLEDeviceCharacteristics(swan_object) { return my.getBLEDeviceCharacteristics(swan_object); }
      //   static createBLEConnection(swan_object) { return my.createBLEConnection(swan_object); }
      //   static closeBLEConnection(swan_object) { return my.closeBLEConnection(swan_object); }
      //   //
      //   static stopBluetoothDevicesDiscovery(swan_object) {
      //     if(!swan_object){return}
      //     var my_object = {};
      //     var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //         var swan_res = {

      //         };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_object.fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };

      //     return my.stopBluetoothDevicesDiscovery(my_object);
      //   }
      //   static startBluetoothDevicesDiscovery(swan_object) {
      //     // swan.openBluetoothAdapter(swan_object);
      //     return my.startBluetoothDevicesDiscovery(swan_object);
      //   }
      //   static openBluetoothAdapter(swan_object) {
      //     var my_object = {};
      //     my_object.success = function (my_res) {
      //       var swan_res = { errMsg: "openBluetoothAdapter:ok" };
      //       if (swan_success) { swan_success(swan_res); }
      //       if (swan_complete) { swan_complete(swan_res); }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_success) { swan_object.success(my_res); }
      //       if (swan_complete) { swan_complete(my_res); }
      //     };
      //     return my.openBluetoothAdapter(my_object);
      //   }
      //   static onBluetoothDeviceFound(swan_object) { return my.onBluetoothDeviceFound(swan_object); }
      //   static onBluetoothAdapterStateChange(swan_object) { return my.onBluetoothAdapterStateChange(swan_object); }
      //   static getConnectedBluetoothDevices(swan_object) { return my.getConnectedBluetoothDevices(swan_object); }
      //   static getBluetoothDevices(swan_object) {
      //     var my_object = {};
      //     my_object.success = function (my_res) {
      //       my.getBluetoothDevices({
      //         success: (my_res) => {
      //           // console.log("000", my_res)
      //           // console.log("000", my_res.devices)
      //           swan_res.devices = my_res.devices;
      //         }
      //       });
      //       var swan_res = {
      //         errMsg: "closeBluetoothAdapter:ok"
      //       };
      //       if (swan_success) { swan_success(swan_res); }
      //       if (swan_complete) { swan_complete(swan_res); }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_success) { swan_object.success(my_res); }
      //       if (swan_complete) { swan_complete(my_res); }
      //     };
      //     return my.getBluetoothDevices(my_object);
      //   }
      //   static getBluetoothAdapterState(swan_object) { return my.getBluetoothAdapterState(swan_object); }
      //   static closeBluetoothAdapter(swan_object) { return my.closeBluetoothAdapter(swan_object); }
      //   //
      //   static stopHCE(swan_object) { return my.stopHCE(swan_object); }
      //   static startHCE(swan_object) { return my.startHCE(swan_object); }
      //   static sendHCEMessage(swan_object) { return my.sendHCEMessage(swan_object); }
      //   static onHCEMessage(swan_object) { return my.onHCEMessage(swan_object); }
      //   static getHCEState(swan_object) { return my.getHCEState(swan_object); }
      //   //
      //   static setScreenBrightness(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return}
      //       my_object = {};
      //       var swan_value=swan_object_value
      //       var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_value){
      //       my_object.brightness=swan_value
      //     }
      //      if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //      my_object.success = function (my_res) {
      //         var swan_res = {

      //         };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_object.fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };


      //     return my.setScreenBrightness(my_object);
      //   }
      //   static setKeepScreenOn(swan_object) { return my.setKeepScreenOn(swan_object); }
      //   static onUserCaptureScreen(swan_object) { return my.onUserCaptureScreen(swan_object); }

      //   static getScreenBrightness(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return}
      //       my_object = {};
      //        var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //      if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //       var swan_res = { value: my_res.brightness };
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.getScreenBrightness(my_object);
      //   }
      //   // ///////////////// Ext //////////////
      //   static getExtConfigSync(swan_object) { return my.getExtConfigSync(swan_object); }
      //   static getExtConfig(swan_object) { return my.getExtConfig(swan_object); }
      //   // ////////////////// File //////////
      //   static getFileSystemManager(swan_object) { return my.getFileSystemManager(swan_object); }
      //   static getFileInfo(swan_object) { return my.getFileInfo(swan_object); }
      //   static removeSavedFile(swan_object) { return my.removeSavedFile(swan_object); }
      //   static getSavedFileInfo(swan_object) { return my.getSavedFileInfo(swan_object); }
      //   static getSavedFileList(swan_object) { return my.getSavedFileList(swan_object); }
      //   static openDocument(swan_object) { return my.openDocument(swan_object); }
      //   static saveFile(swan_object) {
      //     my.saveFile({
      //       apFilePath: swan_object.tempFilePath,
      //       success(my_res) {
      //         var swan_res = { savedFilePath: my_res.apFilePath };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       }, fail(my_res) {
      //         if (swan_fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       }
      //     });
      //   }
      //   // ////////// Location ///////////////
      //   static openLocation(swan_object) { return my.openLocation(swan_object); }
      //   static getLocation(swan_object) { return my.getLocation(swan_object); }
      //   static chooseLocation(swan_object) { return my.chooseLocation(swan_object); }
      //   // //////// Media ////////////////////
      //   static createMapContext(swan_object) { return my.createMapContext(swan_object); }
      //   static compressImage(swan_object) { return my.compressImage(swan_object); }
      //   static saveImageToPhotosAlbum(swan_object) { return my.saveImageToPhotosAlbum(swan_object); }
      //   static getImageInfo(swan_object) { return my.getImageInfo(swan_object); }
      //   static previewImage(swan_object) { return my.previewImage(swan_object); }
      //   static chooseImage(swan_object) {
      //     if (!swan_object.count) {
      //       swan_object.count = 0;
      //     }
      //     my.chooseImage({
      //       conut: swan_object.count,
      //       sizeType: swan_object.sizeType,
      //       sourceType: swan_object.scourceType,
      //       success: (my_res) => {
      //         var tempFilePaths = [];
      //         var tempFiles = [];
      //         for (var path of my_res.apFilePaths) {
      //           tempFilePaths.push(path);
      //           tempFiles.push({ path: path, size: 1000000 });
      //         }
      //         var swan_res = {
      //           tempFilePaths: tempFilePaths,
      //           tempFiles: tempFiles
      //         };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(complete);
      //         }
      //       },
      //       fail: (my_res) => {
      //         if (swan_fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       }
      //     });
      //   }
      //   static saveVideoToPhotosAlbum(swan_object) { return my.saveVideoToPhotosAlbum(swan_object); }
      //   static chooseVideo(swan_object) { return my.chooseVideo(swan_object); }
      //   static createVideoContext(videoId, ui) { return new VideoContext(my.createVideoContext(videoId)); }
      //   static stopVoice(swan_object) { return my.stopVoice(swan_object); }
      //   static pauseVoice(swan_object) { return my.pauseVoice(swan_object); }
      //   static playVoice(swan_object) { return my.playVoice(swan_object); }
      //   static setInnerAudioOption(swan_object) { return my.setInnerAudioOption(swan_object); }
      //   static getAvailableAudioSources(swan_object) { return my.getAvailableAudioSources(swan_object); }
      //   static createInnerAudioContext(swan_object) { return my.createInnerAudioContext(swan_object); }
      //   static createAudioContext(swan_object) { return my.createAudioContext(swan_object); }
      //   static onBackgroundAudioStop(swan_object) { return my.onBackgroundAudioStop(swan_object); }
      //   static onBackgroundAudioPause(swan_object) { return my.onBackgroundAudioPause(swan_object); }
      //   static onBackgroundAudioPlay(swan_object) { return my.onBackgroundAudioPlay(swan_object); }
      //   static stopBackgroundAudio(swan_object) { return my.stopBackgroundAudio(swan_object); }
      //   static seekBackgroundAudio(swan_object) { return my.seekBackgroundAudio(swan_object); }
      //   static pauseBackgroundAudio(swan_object) { return my.pauseBackgroundAudio(swan_object); }
      //   static playBackgroundAudio(swan_object) { return my.playBackgroundAudio(swan_object); }
      //   static getBackgroundAudioPlayerState(swan_object) { return my.getBackgroundAudioPlayerState(swan_object); }
      //   static getBackgroundAudioManager(swan_object) { return my.getBackgroundAudioManager(swan_object); }
      //   static createLivePusherContext(swan_object) { return my.createLivePusherContext(swan_object); }
      //   static startRecord(swan_object) { return my.startRecord(swan_object); }
      //   static stopRecord(swan_object) { return my.stopRecord(swan_object); }
      //   static getRecorderManager(swan_object) { return my.getRecorderManager(swan_object); }
      //   // ////////////// Network ///////////////
      //   static request(swan_object) {

      //     if (!swan_object) {
      //       return;
      //     }
      //     const swan_url = swan_object.url;
      //     const swan_data = swan_object.data;
      //     var swan_header=swan_object.header;
      //     var swan_timeout=swan_object.timeout;
      //     var swan_dataType=swan_object.dataType||"json"
      //     var swan_responseType=swan_object.responseType||"text"
      //     var swan_enableHttp2=swan_object.enableHttp2||false
      //     var swan_enableQuic=swan_object.enableQuic||false
      //     var swan_enableCache=swan_object.enableCache||false
      //     const swan_method = swan_object.method || "GET";
      //     const swan_success = swan_object.success;
      //     const swan_fail = swan_object.fail;
      //     const swan_complete = swan_complete;
      //     //
      //     var my_object = {};
      //     //
      //    if (swan_data) {
      //       my_object.data = swan_data;
      //     }
      //     if (swan_url) {
      //       my_object.url = swan_url;
      //     }
      //     if (swan_header) {
      //       my_object.header = swan_header;
      //     }
      //     if (swan_timeout) {
      //       my_object.timeout = swan_timeout;
      //     }
      //     if (swan_dataType) {
      //       my_object.dataType = swan_dataType;
      //     }
      //     // if (swan_responseType) {
      //     //   my_object.responseType = swan_responseType;
      //     // }
      //     // if (swan_enableHttp2) {
      //     //   my_object.enableHttp2 = swan_enableHttp2;       //weixin有alipay没有
      //     // }
      //     // if (swan_enableQuic) {
      //     //   my_object.enableQuic = swan_enableQuic;
      //     // }
      //     // if (swan_enableCache) {
      //     //   my_object.enableCache = swan_enableCache;
      //     // }
      //     if (swan_method) {
      //       my_object.method = swan_method;
      //     }
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     //
      //     my_object.success = function (my_res) {
      //       var swan_res = {
      //         data: my_res.data,
      //         statusCode: my_res.status,
      //         header: my_res.headers,
      //         // cookies:my_res.cookies,  需要编程
      //         // profile:my_res.profile
      //       };
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //      var swan_res = {

      //       };
      //       if (swan_object.fail) {
      //         swan_fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };

      //      my.httpRequest(my_object);

      //     /**/

      //   }
      //   //////////////////////////////////////////////////////////////
      //   static downloadFile(swan_object) { return my.downloadFile(swan_object); }
      //   static uploadFile(swan_object) {
      //     my.uploadFile({
      //       url: swan_object.url,
      //       filePath: swan_object.filePath,
      //       fileName: swan_object.name,
      //       fileType: "image",
      //       header: swan_object.header,
      //       formData: swan_object.formData,
      //       success: swan_object.success,
      //       fail: swan_object.fail,
      //       complete: swan_complete
      //     });
      //   }
      //   //
      //   static connectSocket(swan_object) { return my.connectSocket(swan_object); }
      //   static onSocketError(swan_object) { return my.onSocketError(swan_object); }
      //   static onSocketMessage(swan_object) { return my.onSocketMessage(swan_object); }
      //   static onSocketClose(swan_object) { return my.onSocketClose(swan_object); }
      //   static onSocketOpen(swan_object) { return my.onSocketOpen(swan_object); }
      //   static sendSocketMessage(swan_object) { return my.sendSocketMessage(swan_object); }
      //   static closeSocket(swan_object) { return my.closeSocket(swan_object); }
      //   static offLocalServiceResolveFail(callbck) { return my.offLocalServiceResolveFail(callbck); }
      //   static onLocalServiceResolveFail(callbck) { return my.onLocalServiceResolveFail(callbck); }
      //   static onLocalServiceDiscoveryStop(callbck) { return my.onLocalServiceDiscoveryStop(callbck); }
      //   static offLocalServiceLost(callbck) { return my.offLocalServiceLost(callbck); }
      //   static onLocalServiceLost(callbck) { return my.onLocalServiceLost(callbck); }
      //   static offLocalServiceFound(callbck) { return my.offLocalServiceFound(callbck); }
      //   static onLocalServiceFound(callbck) { return my.onLocalServiceFound(callbck); }
      //   static stopLocalServiceDiscovery(swan_object) { return my.stopLocalServiceDiscovery(swan_object); }
      //   static startLocalServiceDiscovery(swan_object) { return my.startLocalServiceDiscovery(swan_object); }

      //   // /////// Open Interface //////////
      //   static _checkSession() {
      //     var now = new Date().getTime();
      //     return getApp().onekitswan._jscode && getApp().onekitswan._login && now <= getApp().onekitswan._login + 1000 * 60 * 60 * 24 * 3;
      //   }
      //   static checkSession(swan_object) {
      //     if (this._checkSession()) {
      //       if (swan_success) {
      //         swan_success();
      //       }
      //       if (swan_complete) {
      //         swan_complete();
      //       }

      //     } else {
      //       if (swan_fail) {
      //         swan_fail();
      //       }
      //       if (swan_complete) {
      //         swan_complete();
      //       }
      //     }

      //     /*
      //        var url = getApp().onekitswan.server + "userinfo";
      //        my.httpRequest({
      //              url: url,
      //              header: {
      //                'Content-Type': 'application/x-www-form-urlencoded'
      //              },
      //              method: "POST",
      //              data: {
      //                nickname: my_res.nickName,
      //                avatarUrl: my_res.avatar,
      //                js_code: jscode
      //              },
      //              success(my_res) {
      //                if (swan_success) {
      //                  swan_object.success(my_res.data);
      //                }
      //                if (swan_complete) {
      //                  swan_complete(my_res.data);
      //                }
      //              }, fail(my_res) {
      //                console.log(my_res.data);
      //              }
      //            });
      //      }*/

      //   }

      //   static login(swan_object) {
      //     var that = this;
      //     if (!swan_object) {
      //       return my.getAuthCode(swan_object);
      //     }
      //     var my_object = {
      //       scopes: "auth_user"
      //     };
      //     my_object.success = function (my_res) {
      //       getApp().onekitswan._jscode = my_res.authCode;
      //       getApp().onekitswan._login = new Date().getTime();
      //       var swan_res = { code: my_res.authCode };
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(complete);
      //       }
      //     }
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(my_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(my_res);
      //       }
      //     }
      //     if (swan._checkSession()) {
      //       my_object.success({ authCode: getApp().onekitswan._jscode });
      //     } else {
      //       my.getAuthCode(my_object);
      //     }
      //   };
      //   static getUserInfo(swan_object) {


      //     swan.login({
      //       success: (my_res) => {
      //         var jscode = my_res.code;
      //         var withCredentials = swan_object.withCredentials;
      //         my.getAuthUserInfo({
      //           success(my_res) {
      //             console.log(my_res);
      //             var url = getApp().onekit.server + "api/userinfo";
      //             console.log(url);
      //             my.httpRequest({
      //               url: url,
      //               header: {
      //                 'Content-Type': 'application/x-www-form-urlencoded'
      //               },
      //               method: "POST",
      //               data: {
      //                 withCredentials: withCredentials === true,
      //                 js_code: jscode
      //               },
      //               success(my_res) {
      //                 console.log(my_res.data);
      //                 if (swan_success) {
      //                   swan_object.success(my_res.data);
      //                 }
      //                 if (swan_complete) {
      //                   swan_complete(my_res.data);
      //                 }
      //               }, fail(my_res) {
      //                 console.log(my_res.data);
      //               }
      //             });
      //           }
      //         });
      //       }
      //     });
      //   }
      //   static getOpenData(swan_object) {

      //     if (!getApp().onekit._opendataCallbacks) {
      //       getApp().onekit._opendataCallbacks = [];
      //     }
      //     function success(my_res) {
      //       var opendata = my_res.userInfo;
      //       getApp().onekit._opendata = opendata;
      //       for (var cb = 0; cb < getApp().onekit._opendataCallbacks.length; cb++) {
      //         getApp().onekit._opendataCallbacks[cb](opendata);
      //       }
      //       if (swan_success) {
      //         swan_object.success(opendata);
      //       }
      //       if (swan_complete) {
      //         swan_complete(opendata);
      //       }
      //     }
      //     var opendata = getApp().onekit._opendata;
      //     if (opendata) {
      //       if (Object.keys(opendata) > 0) {
      //         swan_object.success(opendata);
      //       } else {
      //         if (swan_success) {
      //           getApp().onekit._opendataCallbacks.push(swan_object.success);
      //         }
      //       }
      //       return;
      //     }
      //     getApp().onekit._opendata = {};
      //     swan.login({
      //       success(my_res) {
      //         var jscode = my_res.code;
      //         my.getAuthUserInfo({
      //           success(my_res) {
      //             var url = getApp().onekit.server + "opendata";
      //             my.httpRequest({
      //               url: url,
      //               header: {
      //                 'Content-Type': 'application/x-www-form-urlencoded'
      //               },
      //               method: "POST",
      //               data: {
      //                 nickname: my_res.nickName,
      //                 avatarUrl: my_res.avatar,
      //                 js_code: jscode
      //               },
      //               success(my_res) {
      //                 success(my_res.data);
      //               }, fail(my_res) {
      //                 console.log(my_res);
      //               }
      //             });
      //           }
      //         });
      //       }
      //     });

      //   }
      //   static getPhoneNumber(swan_object) {

      //     swan.login({
      //       success: (my_res) => {
      //         var jscode = my_res.code;
      //         console.log("ssss" + jscode);
      //         my.getPhoneNumber({
      //           success(my_res) {
      //             // var response = {
      //             // response:
      //             // "ZOELfBOrmRHNNiiVR4FmNrvV7Dmog5w/KFaNrfLugkDqdkPzlxBCzmfLBrtQlPptWix+1f9I07p5xNfwGgTgVA==",
      //             // sign:
      //             // "fD6CyFQeJTTgtM1uviy5uAm4YWiN3s0crGtD1v5XdXuDzFEBPTRYqGODcfzskAMFWNXJAK5Zx0/kk+6e9tn/N3U9RcrTgc6VLw7HM9fPTcz8CzVl1+b6fjsi0wWsADF53vKTurFn6HTSTEJvzbMMD5M2lgazni72tZHCNJSkeG1W+kjX/Mj5tfJXNkn6nlrtu1N6BxgsZdgDdkMQfIrWv2TOFlpx043LMBmk4CxXLpGvRfRcHLjixs5wEO1dfqENn6oj9hAQbPA8itYW4TvGlo5qhnzT+ya1rWcKrjn4zh7uvnr0hB0oPiqLu17txS5uIQIF0DJ2cC0k6kuOQLVwTQ=="
      //             // }
      //             // JSON.parse(my_res.response);
      //             var response = JSON.parse(my_res.response);
      //             console.log(response);
      //             var url = getApp().onekit.server + "phonenumber";
      //             my.httpRequest({
      //               url: url,
      //               header: {
      //                 'Content-Type': 'application/x-www-form-urlencoded'
      //               },
      //               method: "POST",
      //               data: {
      //                 response: response.response,
      //                 sign: response.sign,
      //                 js_code: jscode
      //               },
      //               success(my_res) {
      //                 var data = my_res.data;
      //                 if (swan_success) {
      //                   swan_object.success(data);
      //                 }
      //                 if (swan_complete) {
      //                   swan_complete(data);
      //                 }
      //               }, fail(my_res) {
      //                 console.log(my_res.data);
      //               }
      //             });
      //           }
      //         });
      //       },
      //     });

      //   }
      //   static navigateToMiniProgram(swan_object) { return my.navigateToMiniProgram(swan_object); }
      //   static navigateBackMiniProgram(swan_object) { return my.navigateBackMiniProgram(swan_object); }
      //   static getAccountInfoSync(swan_object) { return my.getAccountInfoSync(swan_object); }

      //   static reportMonitor(swan_object) { return my.reportMonitor(swan_object); }
      //   static reportAnalytics(swan_object) { return my.reportAnalytics(swan_object); }
      //   static requestPayment(swan_object) {
      //     var tradeNO = swan_object.package.split("=")[1];
      //     console.log(tradeNO);
      //     var my_object = {
      //       tradeNO: tradeNO,
      //       success: swan_object.success,
      //       fail: swan_object.fail,
      //       complete: swan_complete
      //     };
      //     return my.tradePay(my_object);
      //   }
      //   static authorize(swan_object) { return my.authorize(swan_object); }
      //   static openSetting(swan_object) { return my.openSetting(swan_object); }
      //   static getSetting(swan_object) { return my.getSetting(swan_object); }
      //   static chooseAddress(swan_object) { return my.chooseAddress(swan_object); }
      //   static openCard(swan_object) {
      //     my.openCardList();
      //     if (swan_success) {
      //       swan_object.success();
      //     }
      //     if (swan_complete) {
      //       swan_complete();
      //     }
      //   }
      //   static addCard(swan_object) {
      //     var url = getApp().onekit.server + "addcard";
      //     my.httpRequest({
      //       url: url,
      //       header: {
      //         'Content-Type': 'application/x-www-form-urlencoded'
      //       },
      //       method: "POST",
      //       data: {
      //         cardList: JSON.stringify(swan_object.cardList),
      //         js_code: swan_object.jscode
      //       },
      //       success(my_res) {
      //         var data = my_res.data;
      //         if (swan_success) {
      //           swan_object.success(data);
      //         }
      //         if (swan_complete) {
      //           swan_complete(data);
      //         }
      //       }, fail(my_res) {
      //         console.log(my_res.data);
      //       }
      //     });
      //   }
      //   static chooseInvoiceTitle(swan_object) { return my.chooseInvoiceTitle(swan_object); }
      //   static chooseInvoice(swan_object) { return my.chooseInvoice(swan_object); }
      //   static startSoterAuthentication(swan_object) { return my.startSoterAuthentication(swan_object); }
      //   static checkIsSupportSoterAuthentication(swan_object) { return my.checkIsSupportSoterAuthentication(swan_object); }
      //   static checkIsSoterEnrolledInDevice(swan_object) { return my.checkIsSoterEnrolledInDevice(swan_object); }
      //   static getWeRunData(swan_object) { return my.getWeRunData(swan_object); }

      //   // //////// Router //////////////
      //   static navigateBack(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return}
      //       my_object = {};
      //       var swan_delta=swan_object.swan_delta||1
      //        var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_delta){
      //       my_object.delta=swan_delta
      //     }
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //       my_object.success = function (my_res) {
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_object.fail) {
      //           swan_object.fail(my_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       };

      //     return my.navigateBack(my_object);
      //   }
      //   static switchTab(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return }
      //       my_object = {};
      //       var swan_url=swan_object.url
      //         var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_url){
      //       my_object.url=swan_url
      //     }
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.switchTab(my_object);
      //   }
      //   static navigateTo(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return }
      //       my_object = {};
      //       var swan_url=swan_object.url
      //       var swan_events=swan_object.events
      //       var swan_success=swan_object.success
      //       var swan_fail=swan_object.fail
      //       var swan_complete=swan_object.complete
      //        if(swan_url){
      //       my_object.url=swan_url
      //     }
      //     //    if(swan_events){
      //     //   my_object.events=swan_events////需要编程
      //     // }
      //       if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.navigateTo(my_object);
      //   }
      //   static reLaunch(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return }
      //       my_object = {};
      //       var swan_url=swan_object.url
      //     var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //      if(swan_url){
      //       my_object.url=swan_url
      //     }
      //      if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.reLaunch(my_object);
      //   }
      //   static redirectTo(swan_object) {
      //     var my_object;
      //     if (swan_object) {return}
      //       my_object = {};
      //       var swan_url=swan_object.url
      //     var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //      if(swan_url){
      //       my_object.url=swan_url
      //     }
      //      if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //       if (swan_success) {
      //         swan_success(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_object.fail) {
      //         swan_object.fail(swan_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(swan_res);
      //       }
      //     };
      //     return my.redirectTo(my_object);
      //   }
      //   // /////////// Share /////////////
      //   static updateShareMenu(swan_object) { return my.updateShareMenu(swan_object); }
      //   static showShareMenu(swan_object) {
      //     my.navigateTo({
      //       url: "/swan/page/share/share"
      //     });
      //   }
      //   static hideShareMenu(swan_object) { return my.hideShareMenu(swan_object); }
      //   static getShareInfo(swan_object) { return my.getShareInfo(swan_object); }
      //   // ///////////// Storage //////////////
      //   static getStorageInfoSync(swan_object) { return my.getStorageInfoSync(swan_object); }
      //   static getStorageInfo(swan_object) { return my.getStorageInfo(swan_object); }
      //   static clearStorageSync(swan_object) { return my.clearStorageSync(swan_object); }
      //   static clearStorage(swan_object) { return my.clearStorage(swan_object); }
      //   static removeStorageSync(swan_object) { return my.removeStorageSync(swan_object); }
      //   static removeStorage(swan_object) { return my.removeStorage(swan_object); }
      //   static setStorageSync(key, value) { return my.setStorageSync({ key: key, data: value }); }
      //   static setStorage(swan_object) { return my.setStorage(swan_object); }
      //   static getStorageSync(key) {
      //     var swan_res = my.getStorageSync({ key: key });
      //     if (!swan_res) {
      //       return "";
      //     } else if (swan_res.data) {
      //       return swan_res.data;
      //     } else if (swan_res.APDataStorage) {
      //       return swan_res.APDataStorage;
      //     } else {
      //       return "";
      //     }
      //   }
      //   static getStorage(swan_object) { return my.getStorage(swan_object); }
      //   // //////////// UI ////////////////
      //   static showActionSheet(swan_object) {
      //     var my_object;
      //     if (!swan_object) {return}
      //       my_object = {};
      //              var swan_itemList=swan_object.itemList
      //        var swan_itemColor=swan_object.itemColor
      //        var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //  if(swan_itemList){
      //       my_object.items=swan_itemList
      //     }
      //     //  if(swan_itemColor){
      //     //   my_object.itemColor=swan_itemColor weixin有alipay没有
      //     // }
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }

      //       my_object.success = function (my_res) {
      //         var swan_res = { tapIndex: my_res.index };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };

      //     return my.showActionSheet(my_object);
      //   }
      //   // static redirectTo(swan_object) { return my.redirectTo(swan_object); }
      //   // static redirectTo(swan_object) { return my.redirectTo(swan_object); }
      //   static hideLoading(swan_object) { return my.hideLoading(swan_object); }
      //   static showLoading(swan_object) {
      //     var my_object={};
      //     if (!swan_object) { return}
      //         var swan_title=swan_object.title
      //     var swan_mask=swan_object.mask
      //     var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_title){
      //       my_object.content=swan_title
      //     }
      //     // if(swan_mask){
      //     //   my_object.mask=swan_mask//需要编程
      //     // }
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //     my_object.success = function (my_res) {
      //         var swan_res = {


      //         };
      //         if (swan_success) {
      //           swan_success(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_object.fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(swan_res);
      //         }
      //       };

      //     return my.showLoading(my_object);
      //   }
      //   static hideToast(swan_object) {
      //     return my.hideToast(my_object);
      //   }
      //   static showToast(swan_object) {
      //     if (!swan_object) {
      //       return
      //     }
      //     let swan_title = swan_object.title;   // 必填项 现实的文本
      //     let swan_icon = swan_object.icon || 'success';  // 图片
      //     let swan_image = swan_object.image;
      //     let swan_duration = swan_object.duration || 1500 // 间隔时长
      //     let swan_mask = swan_object.mask;
      //     let swan_success = swan_object.success;
      //     let swan_fail = swan_object.fail;
      //     let swan_complete = swan_complete;
      //     swan_object = null;
      //     let my_object = {}
      //     if (swan_title) {
      //       my_object.content = swan_title
      //     }
      //     if (swan_icon) {
      //       my_object.type = swan_icon
      //     }
      //     if (swan_duration) {
      //       my_object.duration = swan_duration
      //     }
      //     //////////////
      //     my_object.success = function (my_res) {
      //       if (swan_success) {
      //         swan_success(my_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(my_res);
      //       }
      //     };
      //     my_object.fail = function (my_res) {
      //       if (swan_fail) {
      //         swan_fail(my_res);
      //       }
      //       if (swan_complete) {
      //         swan_complete(my_res);
      //       }
      //     };
      //     return my.showToast(my_object);
      //   }
      //   static showModal(my_object) {
      //     if (my_object === null) {
      //       return my.confirm();
      //     }
      //     var swan_object = {};
      //     var key;
      //     if (my_object.showCancel === null || my_object.showCancel) {
      //       var swan_title=swan_object.title
      //       var swan_content=swan_object.content
      //       var swan_cancelText=swan_object.cancelText
      //       var swan_cancelColor=swan_object.cancelColor
      //       var swan_confirmText=swan_object.confirmText||"确定"
      //       var swan_confirmColor=swan_object.confirmColor
      //   if(swan_title){
      //       my_object.title=swan_title
      //     }
      //     if(swan_content){
      //       my_object.content=swan_content
      //     }
      //     if(swan_cancelText){
      //       my_object.cancelButtonText=swan_cancelText
      //     }
      //     if(swan_confirmText){
      //       my_object.confirmButtonText=swan_confirmText
      //     }
      //       return my.confirm(swan_object);
      //     } else {
      //        var swan_title=swan_object.title
      //       var swan_content=swan_object.content
      //      var swan_confirmText=swan_object.confirmText||"确定"
      //     if(swan_title){
      //       my_object.title=swan_title
      //     }
      //     if(swan_content){
      //       my_object.content=swan_content
      //     }
      //     if(swan_confirmText){
      //       my_object.confirmButtonText=swan_confirmText
      //     }
      //       }
      //       return my.alert(swan_object);
      //     }

      //   static setNavigationBarColor(swan_object) { return my.setNavigationBarColor(swan_object); }
      //   static hideNavigationBarLoading(swan_object) {
      //     return my.hideNavigationBarLoading(my_object);
      //   }
      //   static showNavigationBarLoading(swan_object) {
      //     return my.showNavigationBarLoading(my_object);
      //   }
      //   static setNaivgationBarTitle(swan_object) { return my.setNavigationBar(swan_object); }
      //   static setBackgroundTextStyle(swan_object) { return my.setBackgroundTextStyle(swan_object); }

      //   static setBackgroundColor(swan_object) { return my.setBackgroundColor(swan_object); }
      //   static setTabBarItem(swan_object) { return my.setTabBarItem(swan_object); }
      //   static setTabBarStyle(swan_object) { return my.setTabBarStyle(swan_object); }
      //   static hideTabBar(swan_object) { return my.hideTabBar(swan_object); }
      //   static showTabBar(swan_object) { return my.showTabBar(swan_object); }
      //   static hideTabBarRedDot(swan_object) { return my.hideTabBarRedDot(swan_object); }
      //   static showTabBarRedDot(swan_object) { return my.showTabBarRedDot(swan_object); }
      //   static removeTabBarBadge(swan_object) { return my.removeTabBarBadge(swan_object); }
      //   static setTabBarBadge(swan_object) { return my.setTabBarBadge(swan_object); }

      //   static loadFontFace(swan_object) { return my.loadFontFace(swan_object); }

      //   static stopPullDownRefresh(swan_object) {
      //     var my_object = {};
      //     if (!swan_object) {return}
      //      var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //       my_object.success = function (my_res) {
      //         if (swan_success) {
      //           swan_object.success(my_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       };

      //     return my.stopPullDownRefresh(my_object);
      //   }
      //   static startPullDownRefresh(swan_object) {
      //     var my_object = {};
      //     if (!swan_object) {return }
      //      var swan_success=swan_object.success
      //     var swan_fail=swan_object.fail
      //     var swan_complete=swan_object.complete
      //     if(swan_success){
      //       my_object.success=swan_success
      //     }
      //     if(swan_fail){
      //       my_object.fail=swan_fail
      //     }
      //     if(swan_complete){
      //       my_object.complete=swan_complete
      //     }
      //       my_object.success = function (my_res) {
      //         if (swan_success) {
      //           swan_object.success(my_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       };
      //       my_object.fail = function (my_res) {
      //         if (swan_fail) {
      //           swan_fail(swan_res);
      //         }
      //         if (swan_complete) {
      //           swan_complete(my_res);
      //         }
      //       };

      //     return my.startPullDownRefresh(my_object);
      //   }
      //   static pageScrollTo(swan_object) { return my.pageScrollTo(swan_object); }
      //   static setTopBarText(swan_object) { return my.setTopBarText(swan_object); }
      //   static nextTick(swan_object) { return my.nextTick(swan_object); }
      //   static getMenuButtonBoundingClientRect(swan_object) { return my.getMenuButtonBoundingClientRect(swan_object); }
      //   static offWindowResize(swan_object) { return my.offWindowResize(swan_object); }
      //   static onWindowResize(swan_object) { return my.onWindowResize(swan_object); }
      //   // //////////// Worker ///////////////
      //   static createWorker(swan_object) { return my.createWorker(swan_object); }

      //   static createIntersectionObserver(swan_object) { return my.createIntersectionObserver(swan_object); }
      //   // ///////////////////////////////////
      //   static hideKeyboard(swan_object) { return my.hideKeyboard(swan_object); }
      //   // /////////// cloud ////////////////
      //   static get cloud() {
      //     return new swan_cloud();
      //   }
      // }


      /***/
    }),

  /***/
  14:
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      var _swan = __webpack_require__(0);

      var _swan2 = _interopRequireDefault(_swan);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      /* eslint-disable camelcase */
      import onekit_behavior from '../../behavior/onekit_behavior'
      import weixin_behavior from '../../behavior/weixin_behavior'

      Component({
        mixins: [onekit_behavior, weixin_behavior],
        data: {},
        props: {},

        didMount: function didMount() {
          var that = this;
          _swan2.default.getOpenData({
            success: function success(opendata) {
              switch (that.props.type) {
                case 'userNickName':
                  that.setData({
                    userNickName: opendata.nickName
                  });
                  break;
                case 'userAvatarUrl':
                  that.setData({
                    userAvatarUrl: opendata.avatarUrl
                  });
                  break;
                case 'userGender':
                  that.setData({
                    userGender: opendata.gender
                  });
                  break;
                case 'userCity':
                  that.setData({
                    userCity: opendata.city
                  });
                  break;
                case 'userProvince':
                  that.setData({
                    userProvince: opendata.province
                  });
                  break;
                case 'userCountry':
                  that.setData({
                    userCountry: opendata.country
                  });
                  break;
                case 'userLanguage':
                  that.setData({
                    userLanguage: opendata.language
                  });
                  break;
                default:
                  break;
              }
            }
          });
        },
        didUpdate: function didUpdate() {},
        didUnmount: function didUnmount() {},

        methods: {}
      });

      /***/
    })

  /******/
});
