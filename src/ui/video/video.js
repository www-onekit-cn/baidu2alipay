Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    src: '',
    duration: '',
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    initialTime: Number,
    pageGesture: false,
    direction: '',
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    poster: '',
    showMuteBtn: false,
  },
  didMount() {
    // var video = my.createVideoContext("video");
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    video_play(e) {
      if (this.props.onPlay) {
        this.props.onPlay(e)
      }
    },
    video_pause(e) {
      if (this.props.onPause) {
        this.props.onPause(e)
      }
    },
    video_end(e) {
      if (this.props.onEnded) {
        this.props.onEnded(e)
      }
    },
    video_timeupdate(e) {
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e)
      }
    },
    video_fullscreenchange(e) {
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange(e)
      }
    },
    video_error(e) {
      if (this.props.onError) {
        this.props.onError(e)
      }
    },
  }
})
