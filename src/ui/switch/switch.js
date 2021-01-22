/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
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
    switch_Change({detail}) {
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
    checkbox_Change({detail}) {
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
