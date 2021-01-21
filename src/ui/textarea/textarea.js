/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    value: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: 'textarea-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: -1,
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
    disableDefaultPadding: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    textarea_Input(e) {
      if (this.props.onInput) {
        this.props.onInput(e)
      }
    },
    textarea_Focus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e)
      }
    },
    textarea_Blur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e)
      }
    },
    textarea_Confirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(e)
      }
    }
  },
})
