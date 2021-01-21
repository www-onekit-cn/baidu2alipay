/* eslint-disable no-console */

/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    src: '',
    mode: 'scaleToFill',
    lazyLoad: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    image_error(e) {
      console.log('image_error', e)
      if (this.props.onError) {
        this.props.onError(e)
      }
    },
    image_load(e) {
      console.log('image_load', e)
      if (this.props.onLoad) {
        this.props.onLoad(e)
      }
    },
  },
})
