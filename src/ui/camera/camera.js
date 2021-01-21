/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    devicePosition: 'back',
    flash: 'auto'
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    camera_stop(e) {
      if (this.props.onStop) {
        this.props.onStop(e)
      }
    },
    camera_error(e) {
      if (this.props.onError) {
        this.props.onError(e)
      }
    }

  },
})
