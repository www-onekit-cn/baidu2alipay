/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    src: '',
    //
    title: '',
    initialTime: null,
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    objectFit: 'contain',
    poster: '',
    pagGesture: false,
    direction: null,
    //
    showProgress: true,
    showFullscreenBtn: true,
    enableProgressGesture: true,
    danmuList: [],
    danmuBtn: false,
    enableDanmu: false,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    showMuteBtn: true,
    //
    showNoWifiTip: true,
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    enablePlayGesture: false,
    showRateBtn: false,
    showVslideBtnInFullscreen: true,
    silentPlay: false,
    duration: null,
  },
  deriveDataFromProps(data_props) {
    this._trigger_controlstoggle(data_props.controls)
  },
  didMount() {
    const that = this
    my.createSelectorQuery()
      .select('.onekit-video').boundingClientRect().exec((rect) => {
        that.setData({
          rect: rect[0]
        })
      })
    this._trigger_seekcomplete()
    this._trigger_controlstoggle(this.props.controls)
    //
    if ((!this.props.pictureInPictureMode) || (this.props.pictureInPictureMode.length <= 0)) {
      this.data.pictureinpicture = 'none'
    } else {
      this.data.pictureinpicture = 'miniprogram'
    }
    this.setData(this.data)
  },
  methods: {
    video_play() {
      if (this.props.onPlay) {
        this.props.onPlay()
      }
    },
    video_pause() {
      if (this.props.onPause) {
        this.props.onPause()
      }
    },
    video_end() {
      if (this.props.onEnded) {
        this.props.onEnded()
      }
    },
    video_timeupdate(e) {
      this.currentTime = e.detail.currentTime
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e.detail)
      }
    },
    video_fullscreenchange(e) {
      this._trigger_controlstoggle(this.props.controls && !e.detail.fullScreen)
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange(e.detail)
      }
    },
    video_waiting() {
      if (this.props.onLoading) {
        this.props.onLoading({})
      }
    },
    video_error() {
      if (this.props.onError) {
        this.props.onError({})
      }
    },
    //
    _trigger_progress() {
      if (this.props.onProgress) {
        this.props.onProgress({})
      }
    },
    //
    video_renderstart(e) {
      console.log('[video.renderstart]', e)
      //   if (this.props.onLoadedmetadata) {
      //     this.props.onLoadedmetadata({})
      //   }
    },
    _trigger_controlstoggle(show) {
      if (this.data.show === show) {
        return
      }
      this.data.show = show
      if (this.props.onControlstoggle) {
        this.props.onControlstoggle({
          show
        })
      }
    },
    //
    _trigger_enterpictureinpicture() {
      if (this.props.onEnterpictureinpicture) {
        this.props.onEnterpictureinpicture({})
      }
    },
    //
    _trigger_leavepictureinpicture() {
      if (this.props.onLeavepictureinpicture) {
        this.props.onLeavepictureinpicture({})
      }
    },
    _trigger_seekcomplete(positon) {
      if (this.props.duration) {
        const res = my.getSystemInfo()
        if (res.platform === 'iOS') {
          positon = this.props.duration * 1000
        } else if (res.platform === 'Android ') {
          positon = this.props.duration
        }
        if (this.props.onSeekcomplete) {
          this.props.onSeekcomplete({
            positon
          })
        }
      }
    }
  },
})
