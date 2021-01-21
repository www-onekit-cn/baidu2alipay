/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    value: '',
    indicatorStyle: '',
    indicatorClass: '',
    maskStyle: '',
    maskClass: '',
    title: '',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    pickerView_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    }
  },
})
