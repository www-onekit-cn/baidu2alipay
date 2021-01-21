/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    percent: '',
    showInfo: false,
    strokeWidth: 6,
    activeColor: '#09BB07',
    backgroundColor: '#EBEBEB',
    active: false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
