const canvas = {}
canvas.arc = function(context){
  context.beginPath()
  context.arc(100,75,50,0,2 * Math.PI)
  context.setFillStyle('blue')
  context.fill()
  context.draw()
}
canvas.beginPath = function(context){
  context.beginPath()
  context.setLineWidth(5)
  context.setStrokeStyle('#ff0000')
  context.moveTo(0,75)
  context.lineTo(250,75)
  context.stroke()
  context.beginPath()
  context.setStrokeStyle('#0000ff')
  context.moveTo(50,0)
  context.lineTo(150,130)
  context.stroke()
}
canvas.bezierCurveTo = function(context){
  // context.setLineWidth(1)
  context.beginPath()
  context.moveTo(20,20)
  context.bezierCurveTo(20,100,200,100,200,20)
  context.setStrokeStyle('black')
  context.stroke()
}
canvas.clearRect = function(context){
  context.setFillStyle('blue')
  context.fillRect(0,0,250,150)
  context.clearRect(20,20,150,75)
  context.draw()
}
canvas.clip = function(context){
  context.beginPath()
  context.rect(50,20,200,120)
  context.stroke()
  context.clip()
  context.fillRect(0,0,150,100)
}
canvas.closePath = function(context){
  context.beginPath()
  context.moveTo(20,20)
  context.lineTo(20,100)
  context.lineTo(70,100)
  context.closePath()
  context.stroke()
}
canvas.createCircularGradient = function(context){
  const grd = context.createCircularGradient(75,50,50)
  grd.addColorStop(0,'red')
  grd.addColorStop(1,'blue')
  context.setFillStyle(grd)
  context.fillRect(30,30,150,80)
}
canvas.createLinearGradient = function(context){
  const grd = context.createLinearGradient(0,0,200,0)
  grd.addColorStop(0,'blue')
  grd.addColorStop(1,'red')
  context.setFillStyle(grd)
  context.fillRect(30,30,150,80)
}
canvas.drawImage = function(context){
  context.drawImage('https://b.bdstatic.com/searchbox/icms/searchbox/img/api_logo.png',0,0)
}
canvas.fill = function(context){
  context.beginPath()
  context.moveTo(100,100)
  context.lineTo(10,100)
  context.lineTo(10,10)
  context.fill()
}
canvas.fillRect = function(context){
  context.beginPath()
  context.setFillStyle('blue')
  context.fillRect(30,30,150,75)
}
canvas.fillText = function(context){
  context.setFontSize(20)
  context.fillText('Hello',20,20)
  context.fillText('World',100,100)
}
canvas.font = function(context){
  context.font = '50px oblique bold Microsoft YaiHei'
  context.fillText('微软雅黑',90,90)
  context.font = '50px 楷体'
  context.fillText('楷体',90,200)
}
canvas.lineTo = function(context){
  context.beginPath()
  context.moveTo(10,10)
  context.rect(10,10,100,50)
  context.lineTo(110,60)
  context.stroke()
}
canvas.moveTo = function(context){
  context.moveTo(10,10)
  context.lineTo(100,10)
  context.moveTo(10,100)
  context.lineTo(100,100)
  context.stroke()
}
canvas.quadraticCurveTo = function(context){
  context.beginPath()
  context.moveTo(20,20)
  context.quadraticCurveTo(20,100,200,20)
  context.stroke()
}
canvas.rect = function(context){
  context.beginPath()
  context.rect(30,30,150,75)
  context.stroke()
}
canvas.rotate = function(context){
  context.beginPath()
  context.strokeRect(100,10,150,100)
  context.rotate(((10 * Math.PI)) / 180)
  context.strokeRect(100,10,150,100)
  context.rotate(((10 * Math.PI)) / 180)
  context.strokeRect(100,10,150,100)
  context.fill()
}
canvas.saveAndRestore = function(context){
  context.beginPath()
  context.setFillStyle('red')
  context.save()
  context.setFillStyle('blue')
  context.fillRect(10,10,150,100)
  context.restore()
  context.fillRect(50,50,150,100)
  context.stroke()
}
canvas.scale = function(context){
  context.beginPath()
  context.rect(10,10,25,15)
  context.stroke()
  context.scale(2,2)
  context.beginPath()
  context.rect(10,10,25,15)
  context.stroke()
  context.scale(2,2)
  context.beginPath()
  context.rect(10,10,25,15)
  context.stroke()
}
canvas.setFillStyle = function(context){
  [
  'blue',
  '#ffff00',
  'rgba(255,255,0, 0.3)'
].forEach(function(item,index){
  context.setFillStyle(item)
  context.beginPath()
  context.rect(0 + ((75 * index)),0,50,50)
  context.fill()
})
}
canvas.setFontSize = function(context){
  context.setFontSize(20)
  context.fillText('20',20,20)
  context.setFontSize(30)
  context.fillText('30',40,40)
  context.setFontSize(40)
  context.fillText('40',60,60)
  context.setFontSize(50)
  context.fillText('50',90,90)
}
canvas.setGlobalAlpha = function(context){
  context.setFillStyle('red')
  context.fillRect(10,10,150,100)
  context.setGlobalAlpha(0.2)
  context.setFillStyle('blue')
  context.fillRect(50,50,150,100)
  context.setFillStyle('yellow')
  context.fillRect(100,100,150,100)
  context.draw()
}
canvas.setLineCap = function(context){
  context.beginPath()
  context.moveTo(20,10)
  context.lineTo(200,10)
  context.stroke()
  [
  'butt',
  'round',
  'square'
].forEach(function(item,index){
  context.beginPath()
  context.setLineCap(item)
  context.setLineWidth(10)
  context.moveTo(20 + ((20 * index)),20 + ((20 * index)))
  context.lineTo(200,20 + ((20 * index)))
  context.stroke()
})
}
canvas.setLineDash = function(context){
  context.setLineDash([
  10,
  20
],5)
  context.beginPath()
  context.moveTo(0,100)
  context.lineTo(400,100)
  context.stroke()
}
canvas.setLineJoin = function(context){
  context.beginPath()
  context.moveTo(10,10)
  context.lineTo(90,50)
  context.lineTo(10,90)
  context.stroke()
  [
  'bevel',
  'round',
  'miter'
].forEach(function(item,index){
  context.beginPath()
  context.setLineJoin(item)
  context.setLineWidth(10)
  context.moveTo(30 + ((80 * index)),10)
  context.lineTo(120 + ((80 * index)),50)
  context.lineTo(30 + ((80 * index)),90)
  context.stroke()
})
}
canvas.setLineWidth = function(context){
  [
  1,
  5,
  10,
  15
].forEach(function(item,index){
  context.beginPath()
  context.setLineWidth(item)
  context.moveTo(20 + ((10 * index)),20 + ((20 * index)))
  context.lineTo(100,20 + ((20 * index)))
  context.stroke()
})
}
canvas.setMiterLimit = function(context){
  [
  1,
  2,
  3,
  4
].forEach(function(item,index){
  context.beginPath()
  context.setMiterLimit(item)
  context.setLineWidth(10)
  context.setLineJoin('miter')
  context.moveTo(50 + ((40 * index)),10)
  context.lineTo(140 + ((40 * index)),50)
  context.lineTo(50 + ((40 * index)),90)
  context.stroke()
})
}
canvas.setShadow = function(context){
  context.beginPath()
  context.setFillStyle('blue')
  context.setShadow(15,15,15,'red')
  context.rect(30,30,150,75)
  context.fill()
}
canvas.setStrokeStyle = function(context){
  context.setStrokeStyle('blue')
  context.strokeRect(30,30,150,75)
}
canvas.setTextAlign = function(context){
  context.setStrokeStyle('red')
  context.moveTo(150,20)
  context.lineTo(150,170)
  context.stroke()
  context.setFontSize(15)
  context.setTextAlign('left')
  context.fillText('textAlign=left',150,60)
  context.setTextAlign('center')
  context.fillText('textAlign=center',150,80)
  context.setTextAlign('right')
  context.fillText('textAlign=right',150,100)
}
canvas.setTextBaseline = function(context){
  context.setStrokeStyle('red')
  context.moveTo(5,75)
  context.lineTo(295,75)
  context.stroke()
  context.setFontSize(20)
  context.setTextBaseline('top')
  context.fillText('top',5,75)
  context.setTextBaseline('middle')
  context.fillText('middle',50,75)
  context.setTextBaseline('bottom')
  context.fillText('bottom',120,75)
  context.setTextBaseline('normal')
  context.fillText('normal',200,75)
}
canvas.setTransform = function(context){
  context.setFillStyle('blue')
  context.fillRect(30,30,150,75)
  context.setTransform(1,0.5,-0.5,1,30,10)
  context.setFillStyle('red')
  context.fillRect(30,30,150,75)
  context.setTransform(1,0.5,-0.5,1,30,10)
}
canvas.stroke = function(context){
  context.beginPath()
  context.moveTo(100,100)
  context.lineTo(10,100)
  context.lineTo(10,10)
  context.stroke()
}
canvas.strokeRect = function(context){
  context.setStrokeStyle('blue')
  context.strokeRect(30,30,150,75)
}
canvas.translate = function(context){
  context.strokeRect(10,10,150,100)
  context.translate(20,20)
  context.strokeRect(10,10,150,100)
  context.translate(20,20)
  context.strokeRect(10,10,150,100)
}
canvas.addColorStop = function(context){
  const grd = context.createLinearGradient(30,10,120,10)
  grd.addColorStop(0,'red')
  grd.addColorStop(0.16,'orange')
  grd.addColorStop(0.33,'yellow')
  grd.addColorStop(0.5,'green')
  grd.addColorStop(0.66,'cyan')
  grd.addColorStop(0.83,'blue')
  grd.addColorStop(1,'purple')
  context.setFillStyle(grd)
  context.fillRect(30,30,150,80)
}
canvas.reset = function(context){
  context.beginPath()
  context.setFillStyle('#000000')
  context.setStrokeStyle('#000000')
  context.setFontSize(10)
  context.setShadow(0,0,0,'rgba(0, 0, 0, 0)')
  context.setLineCap('butt')
  context.setLineJoin('miter')
  context.setLineWidth(1)
  context.setMiterLimit(10)
}
export default canvas
