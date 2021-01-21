/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    value: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    disabled: false,
    maxlength: 140,
    cursorSpacing: 0,
    autoFocus: false,
    focus: false,
    confirmType: 'done',
    confirmHold: false,
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    input_Input(e) {
      if (this.props.onInput) {
        this.props.onInput(e)
      }
    },
    input_Focus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e)
      }
    },
    input_Blur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e)
      }
    },
    input_Confirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(e)
      }
    }
  },
})
