Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    src: '',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    coverImage_tap() {
      if (this.props.onload) {
        this.props.onload()
      }
      if (this.props.onerror) {
        this.props.onerror()
      }
    }
  },
})
