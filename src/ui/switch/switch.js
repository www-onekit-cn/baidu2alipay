/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    name: '',
    type: 'switch',
    color: '#3388ff',
    checked: false,
    disabled: false,
    value: ''
  },
  methods: {
    switch_Change({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onChange) {
        this.props.onChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    checkbox_Change({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onChange) {
        this.props.onChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
