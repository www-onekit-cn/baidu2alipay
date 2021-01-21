/* eslint-disable no-console */
/* eslint-disable camelcase */

export default function OnekitApp(swan_object) {
  const my_object = {
    onekit_nodes: {},
    onLaunch() {
      my.onError(my_error => {
        console.error('[my.onError]', my_error)
        const swan_error = my_error
        if (getApp().onekit_onError) {
          getApp().onekit_onError(swan_error)
        }
        if (swan_object.onError) {
          swan_object.onError(swan_error)
        }
      })
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
        swan_object.onLaunch()
      }
    },
    onShow() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow()
      }
      if (swan_object.onShow) {
        swan_object.onShow()
      }
    },
    onHide() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow()
      }
      if (swan_object.onHide) {
        swan_object.onHide()
      }
    },
    onError() {
      if (swan_object.onError) {
        swan_object.onError()
      }
    },
  }
  for (const key of Object.keys(swan_object)) {
    const member = swan_object[key]
    switch (key) {
      case 'onLaunch':
      case 'onShow':
      case 'onHide':
      case 'onError':
      case 'onPageNotFound':
      case 'onUnhandledRejection':
      case 'onThemeChange':
        break
      default:
        my_object[key] = member
        break
    }
  }
  return App(my_object)
}
