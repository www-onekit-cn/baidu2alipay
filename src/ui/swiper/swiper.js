Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    indicatorDots: false,
    indicatorColor: 'rgba(0, 0, 0, .3)',
    indicatorActiveColor: '#000000',
    autoplay: false,
    current: 0,
    interval: 5000,
    duration: 500,
    circular: false,
    vertical: false,
    previousMargin: '0px',
    nextMargin: '0px',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    swiper_Change(e) {
      if (this.props.onchange) {
        this.props.onchange(e)
      }
    },
    swiper_AnimationEnd(e) {
      if (this.props.onanimationfinish) {
        this.props.onanimationfinish(e)
      }
    }
  },
})
