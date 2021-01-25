/* eslint-disable camelcase */
import lottie from 'lottie-miniprogram'
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    path: '',
    loop: false,
    autoplay: true,
    action: 'play',
    hidden: true,
  },
  didMount() {
    const that = this
    // 在组件实例进入页面节点树时执行
    my.createSelectorQuery().in(this).select('.onekit-animation-view')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const context = canvas.getContext('2d')
        const dpr = my.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        lottie.setup(canvas)
        //
        const path = that.properties.path
        that.ani = lottie.loadAnimation({
          loop: that.properties.loop,
          animationData: path,
          autoplay: that.properties.autoplay,
          rendererSettings: {
            context
          }
        })
      })
  },
  didUpdate() {},
  didUnmount() {},
  // observers: {
  //   action(action) {
  //     if (this.ani) {
  //       switch (action) {
  //         case 'play': this.ani.play(); break
  //         case 'pause': this.ani.pause(); break
  //         case 'stop': this.ani.stop(); break
  //         default: break
  //       }
  //     }
  //   },
  // }
})
