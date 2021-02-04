/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  addColorStop(stop, color) {
    return this.alipayCanvasContext.addColorStop(stop, color)
  }

  arc(x, y, r, sAngle, eAngle) {
    const counterclockwise = 0
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  beginPath() {
    return this.alipayCanvasContext.beginPath()
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this._reset()
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height)
  }

  clip() {
    this.alipayCanvasContext.setFillStyle('#000')
    return this.alipayCanvasContext.clip()
  }

  closePath() {
    return this.alipayCanvasContext.closePath()
  }

  createCircularGradient(x, y, z) {
    return this.alipayCanvasContext.createCircularGradient(x, y, z)
  }

  createLinearGradient(x0, y0, x1, y1) {
    return this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1)
  }

  draw(reserve, callback) {
    return this.alipayCanvasContext.draw(reserve, callback)
  }

  drawImage(imageResource, sx, sy) {
    const sWidth = 0
    const sHeight = 0
    const dx = 0
    const dy = 0
    const dWidth = 0
    const dHeight = 0
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  fill() {
    return this.alipayCanvasContext.fill()
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  fillText(text, x, y) {
    this._reset()
    // this.alipayCanvasContext.setFillStyle('#000')
    return this.alipayCanvasContext.fillText(text, x, y)
  }

  lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y)
  }

  measureText(width) {
    return this.alipayCanvasContext.measureText(width)
  }

  moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height)
  }

  restore() {
    return this.alipayCanvasContext.restore()
  }

  rotate(rotate) {
    return this.alipayCanvasContext.rotate(rotate)
  }

  save() {
    return this.alipayCanvasContext.save()
  }

  scale(scaleWidth, scaleHeight) {
    return this.alipayCanvasContext.scale(scaleWidth, scaleHeight)
  }


  setFillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color)
  }

  setFontSize(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize)
  }

  setGlobalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  setLineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap)
  }

  //
  set lineDashOffset(offset) {
    this.alipayCanvasContext.setLineDash([5, 5], offset)
  }

  get lineDashOffset() {
    return this.alipayCanvasContext.getLineDash()
  }

  setLineDash(pattern, offset) {
    this.lineDashOffset = (pattern, offset)
  }

  setLineJoin(lineJoin) {
    return this.alipayCanvasContext.setLineJoin(lineJoin)
  }

  setLineWidth(lineWidth) {
    return this.alipayCanvasContext.setLineWidth(lineWidth)
  }

  setMiterLimit(miterLimit) {
    return this.alipayCanvasContext.setMiterLimit(miterLimit)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  setStrokeStyle(color) {
    return this.alipayCanvasContext.setStrokeStyle(color)
  }

  setTextAlign(align) {
    return this.alipayCanvasContext.setTextAlign(align)
  }

  setTextBaseline(textBaseline) {
    return this.alipayCanvasContext.setTextBaseline(textBaseline)
  }

  setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  stroke() {
    return this.alipayCanvasContext.stroke()
  }

  strokeRect(x, y, width, height) {
    return this.alipayCanvasContext.strokeRect(x, y, width, height)
  }

  strokeText(text, x, y) {
    const maxWidth = 0
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
  }

  transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  translate(x, y) {
    return this.alipayCanvasContext.translate(x, y)
  }

  _reset() {
    this.alipayCanvasContext.setFillStyle('#000000')
    this.alipayCanvasContext.setStrokeStyle('#000000')
    this.alipayCanvasContext.setFontSize(10)
    this.alipayCanvasContext.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)')
    this.alipayCanvasContext.setLineJoin('miter')
    this.alipayCanvasContext.setLineWidth(1)
    this.alipayCanvasContext.setMiterLimit(10)
    this.alipayCanvasContext.clearRect(0, 0, 1000, 1000)
  }
}
