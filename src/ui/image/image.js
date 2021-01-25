/* eslint-disable no-console */
/* eslint-disable camelcase */
import {
  PATH
} from 'oneutil'
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    src: '',
    mode: 'scaleToFill',
    // 不支持
    webp: false,
    lazyLoad: false,
    imageMenuPrevent: false,
    preview: true,
    originalSrc: ''
  },
  didMount() {
    const pages = getCurrentPages()
    if (!this.props.src.indexOf('://')) {
      const currentUrl = pages[pages.length - 1].route
      const alipay_src = '/' + PATH.rel2abs(currentUrl, this.props.src)
      this.setData({
        src: alipay_src
      })
    }
  },
  methods: {
    image_error({
      detail
    }) {
      console.log(detail)
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
    image_load({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onLoad) {
        this.props.onLoad({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    onShareAppMessage() {
      return {
        title: '分享 View 组件',
        desc: 'View 组件很通用',
        path: 'weixin2alipay/ui/image/image',
      }
    },
    image_longTap() {
      if (this.props.imageMenuPrevent) {
        my.showActionSheet({
          items: ['转发', '保存图片', '收藏'],
          cancelButtonText: '取消',
          success: ({
            index
          }) => {
            if (index === -1) {
              return
            }
            switch (index) {
              case 0:
                this.onShareAppMessage()
                break
              case 1:
                my.saveImage({
                  url: this.props.src,
                  showActionSheet: true,
                  success: () => {
                    my.alert({
                      title: '保存成功',
                    })
                  },
                })
                break
              case 2:
                my.alert({
                  title: "请点击右上角的'☆'收藏按钮"
                })
                break
              default:
                break
            }
          }
        })
        this.setData({
          imageMenuPrevent: this.props.imageMenuPrevent
        })
      }
    }
  },
  image_tap() {
    if (this.props.preview) {
      const originalSrc = this.props.src
      my.previewImage({
        urls: [this.props.src],
      })
      this.setData({
        originalSrc
      })
    }
  }
})
