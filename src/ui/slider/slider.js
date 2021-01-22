/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0,
    backgroundColor: '#cccccc',
    blockSize: 24,
    blockColor: '#ffffff',
    showValue: false,
    color: '#e9e9e9',
  },
  methods: {
    slider_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
    slider_Changing(e) {
      if (this.props.onChanging) {
        this.props.onChanging(e)
      }
    }
  },
})
