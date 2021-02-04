/* eslint-disable no-console */
/* eslint-disable camelcase */

export default class VideoContext {
  constructor(alipayVideoContext, id) {
    this.alipayVideoContext = alipayVideoContext
    this.id = id
  }

  play() {
    return this.alipayVideoContext.play()
  }

  pause() {
    return this.alipayVideoContext.pause()
  }

  seek(position) {
    return this.alipayConvasContext.seek(position)
  }

  sendDanmu(data) {
    const video = getApp().onekit_nodes[`_${this.id}`]
    video.sendDanmu(data)
  }

  requestFullScreen(object) {
    return this.alipayConvasContext.requestFullScreen(object)
  }

  exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen()
  }

  exitPictureInPicture(wx_object) {
    const video = getApp().onekit_nodes[`_${this.id}`]
    video.exitPictureInPicture(wx_object)
  }

  showStatusBar() {
    return this.alipayVideoContext.showStatusBar()
  }

  hideStatusBar() {
    return this.alipayConvasContext.hideStatusBar()
  }

  stop() {
    return this.alipayVideoContext.stop()
  }

  playbackRate() {
    return this.alipayVideoContext.playbackRate()
  }
}
