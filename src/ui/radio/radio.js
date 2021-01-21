/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    value: '',
    checked: false,
    disabled: false,
    color: '#09BB07'
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
