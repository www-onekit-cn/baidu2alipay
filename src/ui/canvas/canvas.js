/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    canvasId: '',
    disableScroll: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
