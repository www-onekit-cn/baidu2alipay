/* eslint-disable no-octal */
/* eslint-disable camelcase */
/* eslint-disable no-console */

import PROMISE from '../node_modules/oneutil/PROMISE'
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

  static redirectTo(object) {
    return my.redirectTo(object)
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
  static downloadFile(tt_object) {
    const tt_url = tt_object.url
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    PROMISE((SUCCESS) => {
      my.downloadFile({
        url,
        success: tt_res => {
          const my_res = {
            tempFilePath: tt_res.apFilePath,
            statusCode: 200
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static request(tt_object) {
    const tt_url = tt_object.url
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    PROMISE((SUCCESS) => {
      my.request({
        url,
        success: tt_res => {
          const my_res = {
            data: tt_res.data,
            statusCode: tt_res.status,
            header: tt_res.headers
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static uploadFile(tt_object) {
    const tt_url = tt_object.url
    const tt_filePath = tt_object.filePath
    const tt_name = tt_object.name
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    const filePath = tt_filePath
    const fileName = tt_name
    const fileType = 'image'
    PROMISE((SUCCESS) => {
      my.uploadFile({
        url,
        filePath,
        fileName,
        fileType,
        success: tt_res => {
          const my_res = {
            data: tt_res.data,
            statusCode: tt_res.statusCode,
            header: tt_res.header
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static connectSocket(tt_object) {
    const tt_url = tt_object.url
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    PROMISE((SUCCESS) => {
      my.connectSocket({
        url,
        success: () => {
          const my_res = {
            errMsg: 'connectSocket: ok',
            socketTaskId: 1
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
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
  static showToast(tt_object) {
    const tt_title = tt_object.title
    const tt_icon = tt_object.icon || 'success'
    const tt_duration = tt_object.duration || 1500
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const content = tt_title
    const type = tt_icon
    const duration = tt_duration
    PROMISE((SUCCESS) => {
      my.showToast({
        content,
        type,
        duration,
        success: () => {
          const tt_res = {
            errMsg: 'showToast: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static hideToast(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.hideToast({
        success: () => {
          const tt_res = {
            errMsg: 'hideToast: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showLoading(tt_object) {
    const tt_title = tt_object.title
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const content = tt_title
    PROMISE((SUCCESS) => {
      my.showLoading({
        content,
        success: () => {
          const tt_res = {
            errMsg: 'showLoading: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static hideLoading(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.hideLoading({
        success: () => {
          const tt_res = {
            errMsg: 'hideLoading: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showModal(tt_object) {
    const tt_title = tt_object.title
    const tt_content = tt_object.content
    const tt_confirmText = tt_object.confirmText || '确定'
    const tt_cancelText = tt_object.cancelText || '取消'
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const title = tt_title
    const content = tt_content
    const confirmButtonText = tt_confirmText
    const cancelButtonText = tt_cancelText
    PROMISE((SUCCESS) => {
      my.confirm({
        title,
        content,
        confirmButtonText,
        cancelButtonText,
        success: my_res => {
          if (my_res.confirm) {
            const tt_res = {
              errMsg: 'showModal: ok',
              confirm: true,
              cancel: false
            }
            SUCCESS(tt_res)
          } else {
            const tt_res = {
              errMsg: 'showModal: ok',
              confirm: false,
              cancel: true
            }
            SUCCESS(tt_res)
          }
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showActionSheet(tt_object) {
    const tt_itemList = tt_object.itemList
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const items = tt_itemList
    PROMISE((SUCCESS) => {
      my.showActionSheet({
        items,
        success: my_res => {
          const tt_res = {
            errMsg: 'hideLoading: ok',
            tapIndex: my_res.index
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // /////////// 导航栏 ////////////
  static showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object)
  }

  static hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object)
  }

  static setNavigationBarTitle(tt_object) {
    const tt_title = tt_object.title
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const title = tt_title
    PROMISE((SUCCESS) => {
      my.setNavigationBar({
        title,
        success: () => {
          const tt_res = {
            errMsg: 'setNavigationBarTitle: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setNavigationBarColor(tt_object) {
    const tt_backgroundColor = tt_object.backgroundColor
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const backgroundColor = tt_backgroundColor
    PROMISE((SUCCESS) => {
      my.setNavigationBar({
        backgroundColor,
        success: () => {
          const tt_res = {
            errMsg: 'setNavigationBarColor: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// TabBar  ///////
  static showTabBarRedDot(object) {
    return my.showTabBarRedDot(object)
  }

  static showTabBar(object) {
    return my.showTabBar(object)
  }

  static setTabBarStyle(tt_object) {
    const tt_color = tt_object.color || '#ff3377'
    const tt_selectedColor = tt_object.selectedColor || '#ff3377'
    const tt_backgroundColor = tt_object.backgroundColor || '#ffffff'
    const tt_borderStyle = tt_object.borderStyle || 'black'
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const color = tt_color
    const selectedColor = tt_selectedColor
    const backgroundColor = tt_backgroundColor
    const borderStyle = tt_borderStyle
    PROMISE((SUCCESS) => {
      my.setTabBarStyle({
        color,
        selectedColor,
        backgroundColor,
        borderStyle,
        success: () => {
          const tt_res = {
            errMsg: 'setTabBarStyle: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setTabBarItem(tt_object) {
    const tt_index = tt_object.index
    const tt_text = tt_object.text || ''
    const tt_iconPath = tt_object.iconPath || ''
    const tt_selectedIconPath = tt_object.selectedIconPath || ''
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const index = tt_index
    const text = tt_text
    const iconPath = tt_iconPath
    const selectedIconPath = tt_selectedIconPath
    PROMISE((SUCCESS) => {
      my.setTabBarItem({
        index,
        text,
        iconPath,
        selectedIconPath,
        success: () => {
          const tt_res = {
            errMsg: 'setTabBarItem: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setTabBarBadge(object) {
    return my.setTabBarBadge(object)
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

  static showFavoriteGuide() {
    return console.warn('showFavoriteGuide is not support')
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
  static nextTick() {
    return console.warn('nextTick is not support')
  }

  // ////// 菜单  ///////
  static getMenuButtonBoundingClientRect() {
    return my.getMenuButtonBoundingClientRect()
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
  static chooseImage(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.chooseImage({
        success: tt_res => {
          const my_res = {
            tempFiles: tt_res.apFilePaths,
            tempFilePaths: tt_res.tempFilePaths
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static saveImageToPhotosAlbum(tt_object) {
    const url = tt_object.filePath
    const success = tt_object.success
    const fail = tt_object.fail
    const complete = tt_object.complete
    tt_object = null
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

  static getImageInfo(tt_object) {
    const tt_src = tt_object.src
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const src = tt_src
    PROMISE((SUCCESS) => {
      my.getImageInfo({
        src,
        success: tt_res => {
          const my_res = {
            errMsg: 'getImageInfo: ok',
            width: tt_res.width,
            height: tt_res.height,
            type: tt_res.type,
            path: tt_res.path,
            orientation: tt_res.orientation
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static compressImage(tt_object) {
    const tt_src = tt_object.src
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const apFilePaths = [tt_src]
    PROMISE((SUCCESS) => {
      my.compressImage({
        apFilePaths,
        success: tt_res => {
          const my_res = {
            errMsg: 'compressImage: ok',
            tempFilePath: tt_res.apFilePaths[0]
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static chooseAlbum(tt_object) {
    const swan_success = tt_object.success
    const swan_fail = tt_object.fail
    const swan_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.chooseImage({
        success: tt_res => {
          const tt_tempFiles = tt_res.tempFiles.map(file => ({
            path: file.path,
            size: file.size,
            type: 'image',
            duration: 0

          }))
          const swan_res = {
            tempFilePaths: tt_res.tempFilePaths,
            tempFiles: tt_tempFiles
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }
}
