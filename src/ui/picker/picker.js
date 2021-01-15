Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    headerText: '',
    disabled: false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    picker_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    }
  },
})
