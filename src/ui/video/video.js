/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {
    mobilenetHintType: 1,
    danmus: [
      [],
      []
    ]
  },
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
    //
    danmuBtn: false,
    //
    enableDanmu: false,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    showMuteBtn: true,
    //
    showNoWifiTip: true,
    //
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    enablePlayGesture: false,
    //
    showRateBtn: false,
    showVslideBtnInFullscreen: true,
    silentPlay: false,
    duration: null,
  },
  didMount() {
    my.createSelectorQuery()
      .select('.onekit-video').boundingClientRect().exec((rect) => {
        this.setData({
          rect: rect[0]
        })
      })
    //
    const danmuDict = {}
    this.props.danmuList.forEach((danmu) => {
      if (!danmuDict[danmu.time]) {
        danmuDict[danmu.time] = []
      }
      danmuDict[danmu.time].push(danmu)
    })
    this.data.danmuDict = danmuDict
    //
    if (this.props.enableProgressGesture) {
      this.data.mobilenetHintType = 1 || 3
    } else {
      this.data.mobilenetHintType = 0 || 2
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
      const currentTime = Math.ceil(e.detail.currentTime)
      //
      if (currentTime !== this.data.currentTime) {
        this.data.currentTime = currentTime
        const AorB = currentTime % 2
        const danmus = this.data.danmuDict[currentTime]
        const key = `danmus[${AorB}]`
        this.setData({
          [key]: danmus || []
        })
      }
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e.detail)
      }
    },
    video_fullscreenchange(e) {
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
    video_renderstart(e) {
      console.log('[video.renderstart]', e)
      //   if (this.props.onLoadedmetadata) {
      //     this.props.onLoadedmetadata({})
      //   }
    }
  }
})
