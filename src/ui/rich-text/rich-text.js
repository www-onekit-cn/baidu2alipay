/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    nodes: [],
    // 做不了
    selectable: false,
    imageMenuPrevent: false,
    preview: true
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    richText_longTap() {
      if (!this.props.imageMenuPrevent) {
        my.showActionSheet({
          // items: ['转发', '保存图片', '收藏'],
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
    }
  }
})
