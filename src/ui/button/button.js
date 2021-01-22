/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {
    hideContact: true
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  props: {
    size: 'default',
    type: 'default',
    plain: false,
    formType: 'buttonclick',
    openType: '',
    hoverClass: 'button-hover',
    hoverStopPropagation: false,
    hoverStartTime: 20,
    hoverStayTime: 70,
    disabled: false,
    loading: false,
    //
    subscribeId: ''
  },
  methods: {
    contactBG_tap() {
      this.setData({
        hideContact: true
      })
    },
    button_onTap({
      detail
    }) {
      const that = this
      if (this.props.openType) {
        switch (this.props.openType) {
          case 'contact':
            this.setData({
              hideContact: false
            })
            break
          case 'share':
            // my.showShareMenu({
            //   success() {

            //   }
            // })
            break
          case 'getUserInfo':
            if (that.props.onGetuserinfo) {
              my.getUserInfo({
                success(res) {
                  detail = res
                  that.props.onGetuserinfo(detail)
                }
              })
            }
            break
          case 'getPhoneNumber':
            if (that.props.onGetphonenumber) {
              my.getPhoneNumber({
                success(res) {
                  detail = res
                  that.props.onGetphonenumber(detail)
                }
              })
            }
            break
          case 'launchApp':
            break
          case 'openSetting':
            /* my.navigateTo({
              url:"/onekit/page/setting/setting"
            }); */
            my.openSetting({

            })
            break
          case 'feedback':
            break
          default:
            break
        }
      }
      const dataset = this._dataset()
      if (this.props.onTap) {
        this.props.onTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
  },
  //
  _trigger_Getuserinfo({
    detail
  }) {
    const dataset = this._dataset()
    if (this.props.onGetuserinfo) {
      this.props.onGetuserinfo({
        detail,
        currentTarget: {
          dataset
        }
      })
    }
  },
  _trigger_Contact({
    detail
  }) {
    const dataset = this._dataset()
    if (this.props.onContact) {
      this.props.onContact({
        detail,
        currentTarget: {
          dataset
        }
      })
    }
  },
  _trigger_Getphonenumber({
    detail
  }) {
    const dataset = this._dataset()
    if (this.props.onGetphonenumber) {
      this.props.onGetphonenumber({
        detail,
        currentTarget: {
          dataset
        }
      })
    }
  },
  _trigger_Error({
    detail
  }) {
    const dataset = this._dataset()
    if (this.props.onError) {
      this.props.onError({
        detail,
        currentTarget: {
          dataset
        }
      })
    }
  },
  _trigger_Opensetting({
    detail
  }) {
    const dataset = this._dataset()
    if (this.props.onOpensetting) {
      this.props.onOpensetting({
        detail,
        currentTarget: {
          dataset
        }
      })
    }
  },
  _trigger_Launchapp({
    detail
  }) {
    const dataset = this._dataset()
    if (this.props.onLaunchapp) {
      this.props.onLaunchapp({
        detail,
        currentTarget: {
          dataset
        }
      })
    }
  },
})
