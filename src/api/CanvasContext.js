/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  setFillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color)
  }

  setStrokeStyle(color) {
    return this.alipayCanvasContext.setStrokeStyle(color)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  createLinearGradient(x0, y0, x1, y1) {
    return this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1)
  }

  createCircularGradient(x, y, z) {
    return this.alipayCanvasContext.createCircularGradient(x, y, z)
  }

  addColorStop(stop, color) {
    return this.alipayCanvasContext.addColorStop(stop, color)
  }

  setLineWidth(lineWidth) {
    return this.alipayCanvasContext.setLineWidth(lineWidth)
  }

  setLineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap)
  }

  setLineJoin(lineJoin) {
    return this.alipayCanvasContext.setLineJoin(lineJoin)
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

  setMiterLimit(miterLimit) {
    return this.alipayCanvasContext.setMiterLimit(miterLimit)
  }

  rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height)
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  strokeRect(x, y, width, height) {
    return this.alipayCanvasContext.strokeRect(x, y, width, height)
  }

  clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height)
  }

  fill() {
    return this.alipayCanvasContext.fill()
  }

  stroke() {
    return this.alipayCanvasContext.stroke()
  }

  beginPath() {
    return this.alipayCanvasContext.beginPath()
  }

  closePath() {
    return this.alipayCanvasContext.closePath()
  }

  moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y)
  }

  lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y)
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise = 0) {
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  scale(scaleWidth, scaleHeight) {
    return this.alipayCanvasContext.scale(scaleWidth, scaleHeight)
  }

  rotate(rotate) {
    return this.alipayCanvasContext.rotate(rotate)
  }

  translate(x, y) {
    return this.alipayCanvasContext.translate(x, y)
  }

  clip() {
    this.alipayCanvasContext.setFillStyle('#000')
    return this.alipayCanvasContext.clip()
  }

  setFontSize(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize)
  }

  fillText(text, x, y) {
    this._reset()
    return this.alipayCanvasContext.fillText(text, x, y)
  }

  setTextAlign(align) {
    return this.alipayCanvasContext.setTextAlign(align)
  }

  setTextBaseline(textBaseline) {
    return this.alipayCanvasContext.setTextBaseline(textBaseline)
  }

  drawImage(imageResource, sx, sy, sWidth = imageResource.width, sHeight = imageResource.height, dx = 0, dy = 0, dWidth = imageResource.width, dHeight = imageResource.height) {
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  setGlobalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  measureText(width) {
    return this.alipayCanvasContext.measureText(width)
  }

  strokeText(text, x, y, maxWidth = 0) {
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this._reset()
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  save() {
    return this.alipayCanvasContext.save()
  }

  restore() {
    return this.alipayCanvasContext.restore()
  }


  draw(reserve, callback) {
    return this.alipayCanvasContext.draw(reserve, callback)
  }


  setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
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
