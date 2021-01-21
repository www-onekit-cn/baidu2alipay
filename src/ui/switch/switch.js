/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    checked: false,
    disabled: false,
    type: 'switch',
    color: '#04BE02',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    switch_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    }
  },
})
