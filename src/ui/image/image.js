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
      detail = {
        errMsg: 'something wrong'
      }
      const dataset = this._dataset()
      if (this.props.onLoad) {
        this.props.onLoad({
          detail,
          currentTarget: {
            dataset
          },
          type: 'load'
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
      if (!this.props.imageMenuPrevent) {
        my.showActionSheet({
          items: ['查看图片', '识图找信息', '保存到相册', '保存到百度云盘', '分享图片', '设置壁纸'],
          cancelButtonText: '取消',
          success: ({
            index
          }) => {
            if (index === -1) {
              return
            }
            switch (index) {
              case 0:
                my.alert({
                  title: '暂不支持查看图片'
                })
                // my.previewImage({
                //   urls: '' // 拿不到URL
                // })
                break
              case 1:
                my.alert({
                  title: '暂不支持识图找信息'
                })
                break
              case 2:
                my.alert({
                  title: '暂不支持查看图片'
                })
                // my.saveImage({
                //   url: this.props.src,
                //   showActionSheet: true,
                //   success: () => {
                //     my.alert({
                //       title: '保存成功',
                //     })
                //   },
                // })
                break
              case 3:
                my.alert({
                  title: '暂不支持保存到百度云盘'
                })
                break
              case 4:
                my.alert({
                  title: '暂不支持分享图片'
                })
                break
              case 5:
                my.alert({
                  title: '暂不支持识图找信息'
                })
                break
              case 6:
                my.alert({
                  title: '暂不支持设置壁纸'
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
    },
    image_tap() {
      if (this.props.preview) {
        const originalSrc = this.props.src
        my.previewImage({
          urls: [originalSrc],
        })
        this.setData({
          originalSrc
        })
      }
    }
  }
})
