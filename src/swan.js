/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from 'oneutil/PROMISE'
import CameraContext from './api/CameraContext'
import OneKit from './js/OneKit'

export default class swan {
  // ///////////  基础 ////////////
  static canIUse(schema) {
    return my.canIUse(schema)
  }

  // ///////////  应用级事件 ////////////
  static offPageNotFound() {
    getApp().onekit_onError = null
  }

  static onPageNotFound(callback) {
    getApp().onekit_onPageNotFound = callback
  }

  static offError() {
    return my.offError()
  }

  static onError(callback) {
    return my.onError(callback)
  }

  static offAppShow() {
    return my.offAppShow()
  }

  static onAppShow(callback) {
    return my.onAppShow(callback)
  }

  static offAppHide() {
    return my.offAppHide()
  }

  static onAppHide(callback) {
    return my.offAppHide(callback)
  }

  // ///////////  URLQuery ////////////
  static setURLQuery(urlQuery) {
    const page = OneKit.current()
    //
    const oldURLQuery = page.query
    const newURLQuery = oldURLQuery
    for (const key of Object.keys(urlQuery)) {
      const value = urlQuery[key]
      newURLQuery[key] = value
    }
    page.query = newURLQuery
    if (page.onURLQueryChange) {
      page.onURLQueryChange({
        oldURLQuery,
        newURLQuery
      })
    }
  }

  static getURLQuery() {
    const page = OneKit.current()
    return page.query
  }

  // /////////// 更新 ////////////
  static getUpdateManager() {
    return my.getUpdateManager()
  }

  // /////////// 调试 ////////////
  static setEnableDebug() {
    return console.log('setEnableDebug is not setEnableDebug')
  }

  // /////////// 路由 ////////////
  static navigateTo(object) {
    return my.navigateTo(object)
  }

  static redirecswano(object) {
    return my.redirecswano(object)
  }

  static switchTab(object) {
    return my.switchTab(object)
  }

  static navigateBack(object) {
    return my.navigateBack(object)
  }

  static reLaunch(object) {
    return my.reLaunch(object)
  }

  // /////////// 网络 ////////////
  static downloadFile(swan_object) {
    const swan_url = swan_object.url
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const url = swan_url
    PROMISE((SUCCESS) => {
      my.downloadFile({
        url,
        success: my_res => {
          const swan_res = {
            tempFilePath: my_res.apFilePath,
            statusCode: 200
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static request(swan_object) {
    const swan_url = swan_object.url
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const url = swan_url
    PROMISE((SUCCESS) => {
      my.request({
        url,
        success: my_res => {
          const swan_res = {
            data: my_res.data,
            statusCode: my_res.status,
            header: my_res.headers
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static uploadFile(swan_object) {
    const swan_url = swan_object.url
    const swan_filePath = swan_object.filePath
    const swan_name = swan_object.name
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const url = swan_url
    const filePath = swan_filePath
    const fileName = swan_name
    const fileType = 'image'
    PROMISE((SUCCESS) => {
      my.uploadFile({
        url,
        filePath,
        fileName,
        fileType,
        success: my_res => {
          const swan_res = {
            data: my_res.data,
            statusCode: my_res.statusCode,
            header: my_res.header
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static connectSocket(swan_object) {
    const swan_url = swan_object.url
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const url = swan_url
    PROMISE((SUCCESS) => {
      my.connectSocket({
        url,
        success: () => {
          const swan_res = {
            errMsg: 'connectSocket: ok',
            sockeswanaskId: 1
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static onSocketOpen(callback) {
    return my.onSocketOpen(callback)
  }

  static onSocketError(callback) {
    return my.onSocketError(callback)
  }

  static sendSocketMessage(object) {
    return my.sendSocketMessage(object)
  }

  static onSocketMessage(callback) {
    return my.onSocketMessage(callback)
  }

  static closeSocket(object) {
    return my.closeSocket(object)
  }

  static onSocketClose(callback) {
    return my.onSocketClose(callback)
  }

  // /////////// 界面 ////////////
  // /////////// 交互反馈 ////////////
  static showToast(swan_object) {
    const swan_title = swan_object.title
    const swan_icon = swan_object.icon || 'success'
    const swan_duration = swan_object.duration || 1500
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const content = swan_title
    const type = swan_icon
    const duration = swan_duration
    PROMISE((SUCCESS) => {
      my.showToast({
        content,
        type,
        duration,
        success: () => {
          const swan_res = {
            errMsg: 'showToast: ok',
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static hideToast(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.hideToast({
        success: () => {
          const swan_res = {
            errMsg: 'hideToast: ok',
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static showLoading(swan_object) {
    const swan_title = swan_object.title
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const content = swan_title
    PROMISE((SUCCESS) => {
      my.showLoading({
        content,
        success: () => {
          const swan_res = {
            errMsg: 'showLoading: ok',
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static hideLoading(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.hideLoading({
        success: () => {
          const swan_res = {
            errMsg: 'hideLoading: ok',
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static showModal(swan_object) {
    const swan_title = swan_object.title
    const swan_content = swan_object.content
    const swan_confirmText = swan_object.confirmText || '确定'
    const swan_cancelText = swan_object.cancelText || '取消'
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const title = swan_title
    const content = swan_content
    const confirmBuswanonText = swan_confirmText
    const cancelBuswanonText = swan_cancelText
    PROMISE((SUCCESS) => {
      my.confirm({
        title,
        content,
        confirmBuswanonText,
        cancelBuswanonText,
        success: my_res => {
          if (my_res.confirm) {
            const swan_res = {
              errMsg: 'showModal: ok',
              confirm: true,
              cancel: false
            }
            SUCCESS(swan_res)
          } else {
            const swan_res = {
              errMsg: 'showModal: ok',
              confirm: false,
              cancel: true
            }
            SUCCESS(swan_res)
          }
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static showActionSheet(swan_object) {
    const swan_itemList = swan_object.itemList
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const items = swan_itemList
    PROMISE((SUCCESS) => {
      my.showActionSheet({
        items,
        success: my_res => {
          const swan_res = {
            errMsg: 'hideLoading: ok',
            tapIndex: my_res.index
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // /////////// 导航栏 ////////////
  static showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object)
  }

  static hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object)
  }

  static setNavigationBarTitle(swan_object) {
    const swan_title = swan_object.title
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const title = swan_title
    PROMISE((SUCCESS) => {
      my.setNavigationBar({
        title,
        success: () => {
          const swan_res = {
            errMsg: 'setNavigationBarTitle: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static setNavigationBarColor(swan_object) {
    const swan_backgroundColor = swan_object.backgroundColor
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const backgroundColor = swan_backgroundColor
    PROMISE((SUCCESS) => {
      my.setNavigationBar({
        backgroundColor,
        success: () => {
          const swan_res = {
            errMsg: 'setNavigationBarColor: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// TabBar  ///////
  static showTabBarRedDot(object) {
    return my.showTabBarRedDot(object)
  }

  static showTabBar(object) {
    return my.showTabBar(object)
  }

  static seswanabBarStyle(swan_object) {
    const swan_color = swan_object.color || '#ff3377'
    const swan_selectedColor = swan_object.selectedColor || '#ff3377'
    const swan_backgroundColor = swan_object.backgroundColor || '#ffffff'
    const swan_borderStyle = swan_object.borderStyle || 'black'
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const color = swan_color
    const selectedColor = swan_selectedColor
    const backgroundColor = swan_backgroundColor
    const borderStyle = swan_borderStyle
    PROMISE((SUCCESS) => {
      my.seswanabBarStyle({
        color,
        selectedColor,
        backgroundColor,
        borderStyle,
        success: () => {
          const swan_res = {
            errMsg: 'seswanabBarStyle: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static seswanabBarItem(swan_object) {
    const swan_index = swan_object.index
    const swan_text = swan_object.text || ''
    const swan_iconPath = swan_object.iconPath || ''
    const swan_selectedIconPath = swan_object.selectedIconPath || ''
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const index = swan_index
    const text = swan_text
    const iconPath = swan_iconPath
    const selectedIconPath = swan_selectedIconPath
    PROMISE((SUCCESS) => {
      my.seswanabBarItem({
        index,
        text,
        iconPath,
        selectedIconPath,
        success: () => {
          const swan_res = {
            errMsg: 'seswanabBarItem: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static seswanabBarBadge(object) {
    return my.seswanabBarBadge(object)
  }

  static removeTabBarBadge(object) {
    return my.removeTabBarBadge(object)
  }

  static hideTabBarRedDot(object) {
    return my.hideTabBarRedDot(object)
  }

  static hideTabBar(object) {
    return my.hideTabBar(object)
  }

  static showFavoriteGuide(swan_object) {
    const content = swan_object.content || '关注小程序，下次使用更便捷'
    const success = swan_object.success
    const fail = swan_object.fail
    const complete = swan_object.complete
    swan_object = null
    my.showToast({
      content,
      success,
      fail,
      complete
    })
  }

  // ////// 位置  ///////
  static pageScrollTo(object) {
    return my.pageScrollTo(object)
  }

  // ////// 下拉刷新  ///////
  static startPullDownRefresh(object) {
    return my.startPullDownRefresh(object)
  }

  static stopPullDownRefresh(object) {
    return my.stopPullDownRefresh(object)
  }

  // ////// 背景  ///////
  static setBackgroundColor(object) {
    return my.setBackgroundColor(object)
  }

  static setBackgroundTextStyle(object) {
    return my.setBackgroundTextStyle(object)
  }

  // ////// 动画  ///////
  static createAnimation(object) {
    return my.createAnimation(object)
  }

  // ////// 自定义组件  ///////
  static nextTick(callback) {
    return setTimeout(callback, 500)
  }

  // ////// 菜单  ///////
  static getMenuBuswanonBoundingClientRect() {
    return my.getMenuBuswanonBoundingClientRect()
  }

  // ////// 节点信息  ///////
  static createSelectorQuery() {
    return my.createSelectorQuery()
  }

  static createIntersectionObserver(object) {
    return my.createIntersectionObserver(object)
  }

  // ////// 数据储存  ///////
  static getStorage(object) {
    return my.getStorage(object)
  }

  static getStorageSync(key) {
    return my.getStorageSync(key)
  }

  static setStorage(key, data) {
    return my.setStorage(key, data)
  }

  static setStorageSync(key, data) {
    return my.setStorageSync(key, data)
  }

  static removeStorage(key) {
    return my.removeStorage(key)
  }

  static removeStorageSync(key) {
    return my.removeStorageSync(key)
  }

  static clearStorage(object) {
    return my.clearStorage(object)
  }

  static clearStorageSync(object) {
    return my.clearStorageSync(object)
  }

  static getStorageInfo(object) {
    return my.getStorageInfo(object)
  }

  static getStorageInfoSync() {
    return my.getStorageInfoSync()
  }

  // ////// 媒体  ///////

  // ////// 图片  ///////
  static chooseImage(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.chooseImage({
        success: my_res => {
          const swan_res = {
            tempFiles: my_res.apFilePaths,
            tempFilePaths: my_res.tempFilePaths
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static saveImageToPhotosAlbum(swan_object) {
    const url = swan_object.filePath
    const success = swan_object.success
    const fail = swan_object.fail
    const complete = swan_object.complete
    swan_object = null
    const my_object = {
      url,
      success,
      fail,
      complete
    }
    return my.saveImage(my_object)
  }

  static previewImage(object) {
    return my.previewImage(object)
  }

  static getImageInfo(swan_object) {
    const swan_src = swan_object.src
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const src = swan_src
    PROMISE((SUCCESS) => {
      my.getImageInfo({
        src,
        success: my_res => {
          const swan_res = {
            errMsg: 'getImageInfo: ok',
            width: my_res.width,
            height: my_res.height,
            type: my_res.type,
            path: my_res.path,
            orientation: my_res.orientation
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static compressImage(swan_object) {
    const swan_src = swan_object.src
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const apFilePaths = [swan_src]
    PROMISE((SUCCESS) => {
      my.compressImage({
        apFilePaths,
        success: my_res => {
          const swan_res = {
            errMsg: 'compressImage: ok',
            tempFilePath: my_res.apFilePaths[0]
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static chooseAlbum(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.completes
    swan_object = null
    PROMISE((SUCCESS) => {
      my.chooseImage({
        success: my_res => {
          const swan_res = {
            tempFilePaths: my_res.tempFilePaths,
            tempFiles: my_res.tempFiles.map(tempFile => ({
              path: tempFile.path,
              size: tempFile.size,
              type: 'image',
              duration: 15
            }))
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 相机组件控制  ///////
  static createCameraContext() {
    return new CameraContext(getApp().onekit_camera)
  }

  // ////// AR相机组件控制  ///////
  static createARCameraContext() {
    return my.createCameraContext()
  }

  // ////// 背景音频组件控制  ///////
  static getBackgroundAudioManager() {
    return my.getBackgroundAudioManager()
  }

  // ////// 音频组件控制  ///////
  static createInnerAudioContext() {
    return my.createInnerAudioContext()
  }

  static setInnerAudioOption() {
    return console.warn('setInnerAudioOption is not support')
  }

  static getRecorderManager() {
    return my.getRecorderManager()
  }

  static getAvailableAudioSources() {
    return my.getAvailableAudioSources()
  }

  // ////// 视频  ///////
  static chooseVideo(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.chooseVideo({
        success: my_res => {
          const swan_res = {
            errMsg: 'chooseVideo: ok',
            tempFilePath: my_res.tempFilePath,
            duration: my_res.duration,
            size: my_res.size,
            width: my_res.width,
            height: my_res.height,
            apFilePath: my_res.apFilePath,
            filePath: my_res.filePath,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static saveVideoToPhotosAlbum(swan_object) {
    const src = swan_object.filePath
    const success = swan_object.success
    const fail = swan_object.fail
    const complete = swan_object.complete
    swan_object = null
    const my_object = {
      src,
      success,
      fail,
      complete
    }
    return my.saveVideoToPhotosAlbum(my_object)
  }

  static createVideoContext(videoId) {
    return my.createVideoContext(videoId)
  }

  // ////// 透明视频组件控制  ///////
  static createAnimationVideo(videoId) {
    return my.createVideoContext(videoId)
  }

  // ////// 直播组件控制  ///////
  static createLivePlayerContext(domId) {
    return my.createLivePlayerContext(domId)
  }

  // ////// RTC组件控制  ///////
  static createRtcRoomContext(domId) {
    return my.createRtcRoomContext(domId)
  }

  // ////// 位置  ///////
  static getLocation(object) {
    return my.getLocation(object)
  }

  static chooseLocation(object) {
    return my.chooseLocation(object)
  }

  static openLocation(swan_object) {
    const latitude = swan_object.latitude
    const longitude = swan_object.longitude
    const name = swan_object.name || ''
    const address = swan_object.address || ''
    const success = swan_object.success
    const fail = swan_object.fail
    const complete = swan_object.complete
    swan_object = null
    const ali_res = {
      latitude,
      longitude,
      name,
      address,
      success,
      fail,
      complete
    }
    return my.openLocation(ali_res)
  }

  static startLocationUpdate() {
    return {}
  }

  static onLocationChange(callback) {
    getApp().onekit_LocationChange = callback
  }

  static offLocationChange() {
    getApp().onekit_LocationChange = null
  }

  static stopLocationUpdate() {
    return {}
  }

  // ////// 画布  ///////
  static createCanvasContext(id) {
    return my.createCanvasContext(id)
  }

  static canvasPutImageData(swan_object) {
    const canvasId = swan_object.canvasId
    const data = swan_object.data
    const x = swan_object.x
    const y = swan_object.y
    const width = swan_object.width
    const height = swan_object.height
    const success = swan_object.success
    const fail = swan_object.fail
    const complete = swan_object.complete
    swan_object = null
    const my_object = {
      data,
      x,
      y,
      width,
      height,
      success,
      fail,
      complete
    }
    return my.createCanvasContext(canvasId).putImageData(my_object)
  }

  static canvasGetImageData(swan_object) {
    const swan_canvasId = swan_object.canvasId
    const swan_x = swan_object.x
    const swan_y = swan_object.y
    const swan_width = swan_object.width
    const swan_height = swan_object.height
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const x = swan_x
    const y = swan_y
    const width = swan_width
    const height = swan_height
    PROMISE((SUCCESS) => {
      my.createCanvasContext(swan_canvasId).getImageData({
        x,
        y,
        width,
        height,
        success: my_res => {
          const swan_res = {
            width: my_res.width,
            height: my_res.height,
            data: my_res.data
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static canvasToTempFilePath(swan_object) {
    const swan_canvasId = swan_object.canvasId
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const canvasId = swan_canvasId
    PROMISE((SUCCESS) => {
      my.canvasToTempFilePath({
        canvasId,
        success: my_res => {
          const swan_res = {
            errMsg: 'canvasToTempFilePath: ok',
            tempFilePath: my_res.apFilePath
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 文件  ///////
  static saveFile(swan_object) {
    const swan_tempFilePath = swan_object.tempFilePath
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const apFilePath = swan_tempFilePath
    PROMISE((SUCCESS) => {
      my.saveFile({
        apFilePath,
        success: my_res => {
          const swan_res = {
            errMsg: 'saveFile: ok',
            savedFilePath: my_res.apFilePath
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static getFileInfo(swan_object) {
    const swan_filePath = swan_object.filePath
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const apFilePath = swan_filePath
    PROMISE((SUCCESS) => {
      my.getFileInfo({
        apFilePath,
        success: my_res => {
          const swan_res = {
            errMsg: 'getFileInfo: ok',
            size: my_res.size,
            digest: my_res.digest
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static getSavedFileList(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getSavedFileList({
        success: my_res => {
          const swan_fileList = my_res.fileList.map(file => ({
            size: file.size,
            filePath: file.apFilePath,
            createTime: file.createTime,
          }))
          const swan_res = {
            errMsg: 'getSavedFileList: ok',
            fileList: swan_fileList
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static getSavedFileInfo(swan_object) {
    const swan_filePath = swan_object.filePath
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const apFilePath = swan_filePath
    PROMISE((SUCCESS) => {
      my.getSavedFileInfo({
        apFilePath,
        success: my_res => {
          const swan_res = {
            errMsg: 'getSavedFileInfo: ok',
            size: my_res.size,
            createTime: my_res.createTime
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static openDocument(swan_object) {
    const swan_filePath = swan_object.filePath
    const swan_fileType = swan_object.fileType || 'pdf'
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const apFilePath = swan_filePath
    const fileType = swan_fileType
    PROMISE((SUCCESS) => {
      my.openDocument({
        apFilePath,
        fileType,
        success: () => {
          const swan_res = {
            errMsg: 'openDocument: ok',
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static removeSavedFile(swan_object) {
    const apFilePath = swan_object.filePath
    const success = swan_object.success
    const fail = swan_object.fail
    const complete = swan_object.complete
    swan_object = null
    const my_object = {
      apFilePath,
      success,
      fail,
      complete
    }
    return my.removeSavedFile(my_object)
  }

  static getFileSystemManager() {
    return my.getFileSystemManager()
  }

  // ////// 设备  ///////
  // ////// 系统信息  ///////
  static getSystemInfo(object) {
    return my.getSystemInfo(object)
  }

  static getSystemInfoSync() {
    return my.getSystemInfoSync()
  }

  static getConnectedWifi(object) {
    return my.getConnectedWifi(object)
  }

  // ////// 网络状态  ///////
  static getNetworkType(object) {
    return my.getNetworkType(object)
  }

  static onNetworkStatusChange(callback) {
    return my.onNetworkStatusChange(callback)
  }

  // ////// 屏幕  ///////
  static setKeepScreenOn(object) {
    return my.setKeepScreenOn(object)
  }

  static getScreenBrightness(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getScreenBrightness({
        success: my_res => {
          const swan_res = {
            errMsg: 'getScreenBrightness: ok',
            value: my_res.brightness
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static setScreenBrightness(swan_object) {
    const swan_value = swan_object.value
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const brightness = swan_value
    PROMISE((SUCCESS) => {
      my.setScreenBrightness({
        brightness,
        success: () => {
          const swan_res = {
            errMsg: 'setScreenBrightness: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 拨打电话  ///////
  static makePhoneCall(swan_object) {
    const swan_phoneNumber = swan_object.phoneNumber
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const number = swan_phoneNumber
    PROMISE((SUCCESS) => {
      my.makePhoneCall({
        number,
        success: () => {
          const swan_res = {
            errMsg: 'makePhoneCall: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 震动  ///////
  static vibrateShort(object) {
    return my.vibrateShort(object)
  }

  static vibrateLong(object) {
    return my.vibrateLong(object)
  }

  // ////// 剪切板  ///////
  static getClipboardData(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getClipboard({
        success: my_res => {
          const swan_res = {
            errMsg: 'getClipboardData: ok',
            data: my_res.text
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static setClipboardData(swan_object) {
    const swan_data = swan_object.data
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const text = swan_data
    PROMISE((SUCCESS) => {
      my.setClipboard({
        text,
        success: () => {
          const swan_res = {
            errMsg: 'setClipboardData: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 扫码  ///////
  static scanCode(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.scan({
        success: my_res => {
          const swan_res = {
            errMsg: 'scanCode: ok',
            result: my_res.code,
            qrCode: my_res.qrCode,
            barCode: my_res.barCode,
            scanType: my_res.codeType,
            codeContent: my_res.codeContent,
            imageChannel: my_res.imageChannel,
            rawData: my_res.rawData,
            charSet: 'GBK'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 加速度计  ///////
  static onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (res) {
      if (swan._stopAccelerometer) {
        return
      }
      callback(res)
    })
  }

  static offAccelerometerChange(callback) {
    my.offAccelerometerChange(function (res) {
      if (swan._stopAccelerometer) {
        return
      }
      callback(res)
    })
  }

  static stopAccelerometer(swan_object) {
    swan._stopAccelerometer = true
    if (swan_object.success) {
      swan_object.success()
    }
    if (swan_object.complete) {
      swan_object.complete()
    }
  }

  static startAccelerometer(swan_object) {
    swan._stopAccelerometer = false
    if (swan_object.success) {
      swan_object.success()
    }
    if (swan_object.complete) {
      swan_object.complete()
    }
  }

  // ////// 设备方向  ///////
  static onDeviceMotionChange() {
    return console.warn('onDeviceMotionChange is not support')
  }

  static startDeviceMotionListening() {
    return console.warn('startDeviceMotionListening is not support')
  }

  static stopDeviceMotionListening() {
    return console.warn('stopDeviceMotionListening is not support')
  }

  // ////// 性能  ///////
  static onMemoryWarning(callback) {
    return my.onMemoryWarning(callback)
  }

  // ////// 手机联系人  ///////
  static addPhoneContact(object) {
    return my.addPhoneContact(object)
  }

  // ////// 电量  ///////
  static getBatteryInfo(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getBatteryInfo({
        success: my_res => {
          const swan_res = {
            errMsg: 'getBatteryInfo: ok',
            level: my_res.level.toString(),
            isCharging: my_res.isCharging
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static getBatteryInfoSync() {
    const my_res = my.getBatteryInfoSync()
    const swan_res = {
      level: my_res.level.toString(),
      isCharging: my_res.isCharging
    }
    return swan_res
  }

  // ////// 截屏  ///////
  static onUserCaptureScreen(callback) {
    return my.onUserCaptureScreen(callback)
  }

  // ////// 日历  ///////
  static addEventOnCalendar() {
    return console.warn('addEventOnCalendar is not support')
  }

  static deleteEventOnCalendar() {
    return console.warn('deleteEventOnCalendar is not support')
  }

  // ////// 键盘高度  ///////
  static onKeyboardHeightChange() {
    return console.warn('onKeyboardHeightChange is not support')
  }

  static offKeyboardHeightChange() {
    return console.warn('offKeyboardHeightChange is not support')
  }

  // ////// 第三方平台  ///////
  static getExtConfig(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getExtConfig({
        success: my_res => {
          const swan_res = {
            errMsg: 'getExtConfig: ok',
            extConfig: my_res.data
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static getExtConfigSync() {
    const my_res = my.getExtConfigSync()
    const swan_res = {
      extConfig: my_res.data
    }
    return swan_res
  }

  // ////// 开放接口  ///////
  static login(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getAuthCode({
        success: my_res => {
          const swan_res = {
            errMsg: 'login: ok',
            code: my_res.authCode,
            authErrorScopes: my_res.authErrorScopes,
            authSuccessScopes: my_res.authSuccessScopes,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
    getApp().onekit_login = true
  }

  static getLoginCode(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getAuthCode({
        success: my_res => {
          const swan_res = {
            errMsg: 'getLoginCode: ok',
            code: my_res.authCode,
            authErrorScopes: my_res.authErrorScopes,
            authSuccessScopes: my_res.authSuccessScopes,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
    getApp().onekit_login = true
  }

  static checkSession() {
    return console.warn('checkSession is not support')
  }

  static isLoginSync() {
    if (getApp().onekit_login) {
      return true
    } else {
      return false
    }
  }

  static authorize(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getAuthCode({
        success: my_res => {
          const swan_res = {
            errMsg: 'authorize: ok',
            code: my_res.authCode,
            authErrorScopes: my_res.authErrorScopes,
            authSuccessScopes: my_res.authSuccessScopes,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 设置  ///////
  static getSetting(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getSetting({
        success: my_res => {
          const authSetting = {
            'scope.userInfo': my_res.userinfo,
            'scope.userLocation': my_res.location,
            'scope.address': my_res.aliaddress,
            'scope.record': false,
            'scope.album': my_res.album,
            'scope.camera': my_res.camera
          }
          const swan_res = {
            errMsg: 'getSetting: ok',
            authSetting
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static openSetting(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.openSetting({
        success: my_res => {
          const authSetting = {
            'scope.userInfo': my_res.userinfo,
            'scope.userLocation': my_res.location,
            'scope.address': false,
            'scope.record': false,
            'scope.album': my_res.album,
            'scope.camera': my_res.camera
          }
          const swan_res = {
            errMsg: 'getSetting: ok',
            authSetting
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 支付  ///////
  static requestPolymerPayment(swan_object) {
    const swan_orderInfo = swan_object.orderInfo
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    const tradeNO = swan_orderInfo.tpOrderId
    PROMISE((SUCCESS) => {
      my.tradePay({
        tradeNO,
        success: my_res => {
          const swan_res = {
            resultCode: my_res.resultCode
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 页面基础信息  ///////
  static setPageInfo() {
    return console.warn('setPageInfo is not support')
  }

  static setMetaDescription() {
    return console.warn('setMetaDescription is not support')
  }

  static setMetaKeywords() {
    return console.warn('setMetaKeywords is not support')
  }

  static setDocumentTitle() {
    return console.warn('setDocumentTitle is not support')
  }

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
  static reportAnalytics(object) {
    return my.reportAnalytics(object)
  }

  // ////// 风控  ///////
  static getSystemRiskInfo() {
    return console.warn('getSystemRiskInfo is not support')
  }

  // ////// 订阅  ///////
  static subscribeService() {
    return console.warn('subscribeService is not support')
  }

  // ////// 书架  ///////
  static insertBookshelf() {
    return console.warn('insertBookshelf is not support')
  }

  static deleteBookshelf() {
    return console.warn('deleteBookshelf is not support')
  }

  static queryBookshelf() {
    return console.warn('queryBookshelf is not support')
  }

  static updateBookshelfReadTime() {
    return console.warn('updateBookshelfReadTime is not support')
  }

  static navigateToBookshelf() {
    return console.warn('navigateToBookshelf is not support')
  }

  // ////// 跳转  ///////
  static openBdboxWebview() {
    return console.warn('openBdboxWebview is not support')
  }

  // ////// 用户接口  ///////
  static getSwanId() {
    return console.warn('getSwanId is not support')
  }

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
  static openShare(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS, FAIL) => {
      my.showSharePanel({
        success: () => {
          const swan_res = {
            result: true
          }
          SUCCESS(swan_res)
        },
        fail: () => {
          const swan_res = {
            result: false
          }
          FAIL(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static shareFile() {
    return my.showSharePanel()
  }

  // ////// 打开小程序  ///////
  static navigateToSmartProgram() {
    return console.warn('navigateToSmartProgram is not support')
  }

  static navigateBackSmartProgram() {
    return console.warn('navigateBackSmartProgram is not support')
  }

  // ////// 获取收货地址  ///////
  static chooseAddress(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      my.getAddress({
        success: my_res => {
          const swan_res = {
            errMsg: 'chooseAddress: ok',
            userName: my_res.fullname,
            provinceName: my_res.prov,
            cityName: my_res.city,
            countyName: my_res.country,
            detailInfo: my_res.address,
            telNumber: my_res.mobilePhone,
            area: my_res.area,
            street: my_res.street,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ////// 获取发票抬头  ///////
  static chooseInvoiceTitle() {
    return console.warn('chooseInvoiceTitle is not support')
  }

  // ////// 全屏内容发布器  ///////
  static openCommunityEditor() {
    return console.warn('openCommunityEditor is not support')
  }

  static closeCommunityEditor() {
    return console.warn('closeCommunityEditor is not support')
  }

  // ////// 全屏内容发布器  ///////
  static openReplyEditor() {
    return console.warn('openReplyEditor is not support')
  }

  static closeReplyEditor() {
    return console.warn('closeReplyEditor is not support')
  }

  // ////// 激励视频广告  ///////
  static createRewardedVideoAd() {
    return console.warn('createRewardedVideoAd is not support')
  }
}
