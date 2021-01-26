import{OnekitPage,swan} from '../baidu2alipay/index'
var app = getApp()

//rich-text
// const htmlSnip = `<div class="div_class">
//   <h1>Title</h1>
//   <p class="p">
//     Life is&nbsp;<i>like</i>&nbsp;a box of
//     <b>&nbsp;chocolates</b>
//   </p>
//   <img height="100px" width="100px" src="https://b.bdstatic.com/miniapp/images/demo-dog.png" />
// </div>`
// const nodeSnip = `
// /* eslint-disable babel/new-cap */
// Page({
// /* eslint-enable babel/new-cap */
//   data: {
//     nodes: [{
//       name: 'div',
//       attrs: {
//         class: 'div_class',
//         style: 'line-height: 60px; color: #4F99FB;;'
//       },
//       children: [{
//         type: 'text',
//         text: 'Life is like a box of chocolates'
//       }]
//     }]
//   }
// })`
// OnekitPage({
//     data:{
//         htmlSnip,
//         nodeSnip,
//         nodes:[
//           {
//               name:'div',
//               attrs:{
//                   class:'div_class',
//                   style:'line-height: 60px; color: #4F99FB;'
//                 },
//               children:[
//                 {
//                     type:'text',
//                     text:'Life is like a box of chocolates'
//                   }
//               ]
//             }
//         ]
//       },
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'rich-text'
//         });
//     }
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     }
//   })


//button
// OnekitPage({
//     data:{
//         appData:getApp().globalData.openParams,
//         isWeb:false,
//         isFavor:false
//       },
//     tapChange:function(){
//       this.setData({
//         isFavor:!this.data.isFavor
//       })
//     },
//     onShow:function(){
//       const openParams = this.data.appData
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'button'
//         });
//     }
//       if(openParams == 'docWeb'){
//       this.setData('isWeb',true);
//     }
//       swan.getSystemInfo({
//         success:(res)=>{this.setData('isWeb',res.platform == 'web')}
//       })
//     },
//     onHide:function(){
//       this.data.appData = ''
//     },
//     submit:function(){
//       swan.showToast({
//         title:'用户点击了submit',
//         icon:'none'
//       })
//     },
//     reset:function(){
//       swan.showToast({
//         title:'用户点击了reset',
//         icon:'none'
//       })
//     },
//     tap:function(){
//       swan.showToast({
//         title:'已点击',
//         icon:'none'
//       })
//     },
//     onShareAppMessage:function(){
//       return {
//         title:'百度智能小程序官方示例',
//         content:'世界很复杂，百度更懂你——小程序简介或详细描述',
//         imageUrl:'https://b.bdstatic.com/miniapp/images/bgt_icon.png',
//         path:'/index/index',
//         success:function(res){
//         },
//         fail:function(err){
//         }
//       }
//     },
//     getUserInfo:function(e){
//       console.log('用户信息:',e)
//       if(e.detail.encryptedData){
//       swan.showToast({
//           title:'已成功授权',
//           icon:'none'
//         });
//     }
//     },
//     openSetting:function(e){
//       console.log('用户设置:',e)
//     },
//     getPhoneNumber:function(e){
//       console.log('用户手机号:',e)
//     },
//     contact:function(e){
//       console.log('用户面板:',e)
//     },
//     chooseInvoiceTitle:function(e){
//       console.log('发票抬头:',e)
//     },
//     chooseAddress:function(e){
//       console.log('收货地址:',e)
//     },
//     login:function(e){
//       console.log('登录信息:',e)
//       if(e.detail.errCode == '10004'){
//       swan.showToast({
//           title:'用户未登录',
//           icon:'none'
//         });
//       return;
//     }
//       swan.showToast({
//         title:'用户登录成功',
//         icon:'none'
//       })
//     }
//   })

//picker
// OnekitPage({
//     data:{
//         selector:[
//           {
//               id:'1',
//               name:'选项一'
//             },
//           {
//               id:'2',
//               name:'选项二'
//             },
//           {
//               id:'3',
//               name:'选项三'
//             }
//         ],
//         rangeKey:[
//           '选项一'
//         ],
//         time:'12:12',
//         dateDay:'2018-01-05',
//         arrIndex:0,
//         regionData:[
//           '全部',
//           '全部',
//           '全部'
//         ],
//         customItem:'全部',
//         multiIndex:[
//           0,
//           0,
//           0
//         ],
//         multiArray:[
//           [
//             '无脊柱动物',
//             '脊柱动物'
//           ],
//           [
//             '扁性动物',
//             '线形动物',
//             '环节动物',
//             '软体动物',
//             '节肢动物'
//           ],
//           [
//             '猪肉绦虫',
//             '吸血虫'
//           ]
//         ]
//       },
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'picker'
//         });
//     }
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     selectorChange:function(e){
//       console.log('picker-selector changed，值为',e.detail.value)
//       this.setData('arrIndex',e.detail.value)
//     },
//     timeChange:function(e){
//       console.log('picker-time changed，值为',e.detail.value)
//       this.setData('time',e.detail.value)
//     },
//     dateChangeDay:function(e){
//       console.log('picker-date changed，值为',e.detail.value)
//       this.setData('dateDay',e.detail.value)
//     },
//     dateChangeMonth:function(e){
//       console.log('picker-date changed，值为',e.detail.value)
//       this.setData('dateMonth',e.detail.value)
//     },
//     dateChangeYear:function(e){
//       console.log('picker-date changed，值为',e.detail.value)
//       this.setData('dateYear',e.detail.value)
//     },
//     regionChange:function(e){
//       this.setData('regionData',e.detail.value)
//       console.log('picker-time changed，值为',e.detail.value)
//     },
//     cancel:function(){
//       swan.showToast({
//         title:'用户取消选择',
//         icon:'none'
//       })
//     },
//     bindMultiPickerChange:function(e){
//       console.log('picker-multiSelector changed，值为',e.detail.value)
//       this.setData('multiIndex',e.detail.value)
//     },
//     bindMultiPickerColumnChange:function(e){
//       console.log('修改的列为',e.detail.column,'，值为',e.detail.value)
//       var data = {
//         multiArray:this.getData('multiArray'),
//         multiIndex:this.getData('multiIndex')
//       }
//       data.multiIndex[e.detail.column] = e.detail.value
//           switch(e.detail.column){
//       case 0:
//         switch(data.multiIndex[0]){
//   case 0:
//     data.multiArray[1] = [
//   '扁性动物',
//   '线形动物',
//   '环节动物',
//   '软体动物',
//   '节肢动物'
// ];
//     data.multiArray[2] = [
//   '猪肉绦虫',
//   '吸血虫'
// ];
//     break;
//   case 1:
//     data.multiArray[1] = [
//   '鱼',
//   '两栖动物',
//   '爬行动物'
// ];
//     data.multiArray[2] = [
//   '鲫鱼',
//   '带鱼'
// ];
//     break;
// };
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         break;
//       case 1:
//         switch(data.multiIndex[0]){
//   case 0:
//     switch(data.multiIndex[1]){
//   case 0:
//     data.multiArray[2] = [
//   '猪肉绦虫',
//   '吸血虫'
// ];
//     break;
//   case 1:
//     data.multiArray[2] = [
//   '蛔虫'
// ];
//     break;
//   case 2:
//     data.multiArray[2] = [
//   '蚂蚁',
//   '蚂蟥'
// ];
//     break;
//   case 3:
//     data.multiArray[2] = [
//   '河蚌',
//   '蜗牛',
//   '蛞蝓'
// ];
//     break;
//   case 4:
//     data.multiArray[2] = [
//   '昆虫',
//   '甲壳动物',
//   '蛛形动物',
//   '多足动物'
// ];
//     break;
// };
//     break;
//   case 1:
//     switch(data.multiIndex[1]){
//   case 0:
//     data.multiArray[2] = [
//   '鲫鱼',
//   '带鱼'
// ];
//     break;
//   case 1:
//     data.multiArray[2] = [
//   '青蛙',
//   '娃娃鱼'
// ];
//     break;
//   case 2:
//     data.multiArray[2] = [
//   '蜥蜴',
//   '龟',
//   '壁虎'
// ];
//     break;
// };
//     break;
// };
//         data.multiIndex[2] = 0;
//         break;
//     }
//       this.setData('multiArray',data.multiArray)
//       this.setData('multiIndex',data.multiIndex)
//     }
//   })


//slider
// OnekitPage({
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'slider'
//         });
//     }
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     sliderChange:function(e){
//       console.log('sliderChange',e.detail)
//     },
//     sliderChanging:function(e){
//       console.log('sliderChanging',e.detail)
//     }
//   })

// switch
// OnekitPage({
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'switch'
//         });
//     }
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     switchChange:(e)=>{console.log(e.detail)}
//   })

//camera
// OnekitPage({
//     data:{
//         imageSrc:'',
//         device:'front',
//         videoSrc:''
//       },
//     onLoad:function(){
//       const ctx = swan.createCameraContext()
//       this.ctx = ctx
//     },
//     onShow:function(){
//       swan.authorize({
//         scope:'scope.camera',
//         fail:(err)=>{if(err.errCode == 10003){
//           swan.showToast({
//               title:'用户已拒绝授权申请，请自行开启相机授权',
//               icon:'none'
//             });
//         }}
//       })
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     switchCamera:function(){
//       const devices = this.getData('device')
//       if(devices == 'back'){
//       this.setData({
//           device:'front'
//         });
//     } else {
//       this.setData({
//           device:'back'
//         });
//     }
//     },
//     takePhoto:function(){
//       console.log('xxx')
//       this.ctx.takePhoto({
//         quality:'high',
//         success:(res)=>{this.setData({
//             imageSrc:res.tempImagePath
//           })}
//       })
//     },
//     startRecord:function(){
//       this.ctx.startRecord({
//         success:(res)=>{swan.showToast({
//             title:'startRecord',
//             icon:'none'
//           })}
//       })
//     },
//     stopRecord:function(){
//       this.ctx.stopRecord({
//         success:(res)=>{
//           swan.showModal({
//               title:'提示',
//               content:res.tempVideoPath
//             })
//           this.setData({
//               videoSrc:res.tempVideoPath
//             })
//         }
//       })
//     },
//     error:function(e){
//       swan.showModal({
//         title:'加载出错',
//         content:e.detail
//       })
//     }
//   })

// image
OnekitPage({
    data:{
        cutArray:[
          {
              mode:'top',
              text:'top：不缩放图片，只显示图片的顶部区域'
            },
          {
              mode:'bottom',
              text:'bottom：不缩放图片，只显示图片的底部区域'
            },
          {
              mode:'center',
              text:'center：不缩放图片，只显示图片的中间区域'
            },
          {
              mode:'left',
              text:'left：不缩放图片，只显示图片的左边区域'
            },
          {
              mode:'right',
              text:'right：不缩放图片，只显示图片的右边边区域'
            },
          {
              mode:'top left',
              text:'top left：不缩放图片，只显示图片的左上边区域'
            },
          {
              mode:'top right',
              text:'top right：不缩放图片，只显示图片的右上边区域'
            },
          {
              mode:'bottom left',
              text:'bottom left：不缩放图片，只显示图片的左下边区域'
            },
          {
              mode:'bottom right',
              text:'bottom right：不缩放图片，只显示图片的右下边区域'
            }
        ],
        scaleArray:[
          {
              mode:'scaleToFill',
              text:'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
            },
          {
              mode:'aspectFit',
              text:'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来',
              hasBackgroud:1
            },
          {
              mode:'aspectFill',
              text:'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
            },
          {
              mode:'widthFix',
              text:'widthFix：宽度不变，高度自动变化，保持原图宽高比不变'
            }
        ],
        src:'https://b.bdstatic.com/miniapp/images/demo-dog.png'
      },
    onShow:function(){
      const openParams = app.globalData.openParams
      if(openParams){
      swan.reportAnalytics('pageshow',{
          fr:openParams,
          type:'component',
          name:'image'
        });
    }
    },
    onHide:function(){
      app.globalData.openParams = ''
    },
    imageError:function(e){
      console.log('image 发生 error 事件，携带值为',e.detail.errMsg)
    },
    onTap:function(e){
      console.log('image 发生 tap 事件',e)
    },
    imageLoad:function(e){
      console.log('image 加载成功',e.type)
    }
  })

//video
// OnekitPage({
//     data:{
//         current:0,
//         srcList:[
//           'https://b.bdstatic.com/miniapp/development_tool/Smartprogram.mp4',
//           'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'
//         ],
//         src:'https://b.bdstatic.com/miniapp/development_tool/Smartprogram.mp4',
//         loop:false,
//         voice:false,
//         posterSrc:'https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/smartprogram-developer/img/video_cover.90f71a8.png',
//         initialTime:0,
//         objectFit:'',
//         pageGesture:false,
//         fullscreenBtn:true,
//         playBtn:true,
//         centerPlayBtn:true,
//         noWifiTip:true,
//         danmuList:[
//           {
//               text:'第 1s 出现的弹幕',
//               color:'#6895FF',
//               time:1
//             },
//           {
//               text:'第 3s 出现的弹幕',
//               color:'#6895FF',
//               time:3
//             }
//         ],
//         sendInfo:'',
//         userMessage:'baidu',
//         showRateBtn:false,
//         showVslideBtnInFullscreen:true,
//         silentPlay:false
//       },
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'video'
//         });
//     }
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     onReady:function(){
//       this.videoContext = swan.createVideoContext('myVideo')
//     },
//     initialTime:function(){
//       this.setData({
//         initialTime:20
//       })
//     },
//     controls:function(){
//       this.setData({
//         controls:!this.data.controls
//       })
//     },
//     loop:function(){
//       this.setData({
//         loop:true
//       })
//       swan.showToast({
//         title:'设置循环播放成功',
//         icon:'none'
//       })
//     },
//     voice:function(){
//       this.setData({
//         voice:!this.data.voice
//       })
//     },
//     objectFit:function(e){
//       this.setData({
//         objectFit:e.currentTarget.dataset.set
//       })
//       console.log('objectFit',e.currentTarget.dataset.set)
//     },
//     pageGesture:function(){
//       this.setData({
//         pageGesture:true
//       })
//     },
//     fullscreenBtn:function(){
//       this.setData({
//         fullscreenBtn:!this.data.fullscreenBtn
//       })
//     },
//     playBtn:function(){
//       this.setData({
//         playBtn:!this.data.playBtn
//       })
//     },
//     centerPlayBtn:function(){
//       this.setData({
//         centerPlayBtn:!this.data.centerPlayBtn
//       })
//     },
//     noWifiTip:function(){
//       this.setData({
//         noWifiTip:!this.data.noWifiTip
//       })
//     },
//     videoPlay:function(e){
//       console.log('video',e.type)
//     },
//     videoPause:function(e){
//       console.log('video',e.type)
//     },
//     videoEnded:function(e){
//       console.log('video',e.type)
//     },
//     videoError:function(e){
//       swan.showToast({
//         title:'播放出错......',
//         icon:'none'
//       })
//       console.log('video',e.type)
//     },
//     videoTimeupdate:function(e){
//       console.log('video',e.type)
//     },
//     videoWaiting:function(e){
//       console.log('video',e.type)
//     },
//     fullscreen:function(e){
//       console.log('fullscreenchange 参数是' + JSON.stringify(e))
//     },
//     loadedmetadata:function(e){
//       console.log('video',e.detail)
//     },
//     nextVideo:function(e){
//       var list = this.data.srcList
//       var current = ((this.data.current + 1)) % list.length
//       this.setData({
//         src:list[current]
//       })
//       this.data.current = current
//     },
//     bindInput:function(e){
//       this.data.userMessage = e.detail.value
//     },
//     sendDanmu:function(){
//       this.videoContext.sendDanmu({
//         text:this.data.userMessage,
//         color:'#f60'
//       })
//       this.setData({
//         userMessage:''
//       })
//     },
//     rateBtn:function(){
//       this.setData({
//         showRateBtn:!this.data.showRateBtn
//       })
//     },
//     vslideBtnInFullscreen:function(){
//       this.setData({
//         showVslideBtnInFullscreen:!this.data.showVslideBtnInFullscreen
//       })
//     },
//     silentPlayMode:function(){
//       this.setData({
//         silentPlay:!this.data.silentPlay
//       })
//     }
//   })

//map
// OnekitPage({
//     data:{
//         latitude:'40.048828',
//         longitude:'116.280412',
//         scale:16,
//         isWeb:false,
//         polygons:[
//         ],
//         drawPolygon:false,
//         includePoints:[
//         ],
//         showLocation:false,
//         enable3d:false,
//         showCompass:false,
//         enableOverlooking:false,
//         enableZoom:true,
//         enableScroll:true,
//         enableRotate:true,
//         markers:[
//           {
//               markerId:'1',
//               latitude:'40.052751',
//               longitude:'116.278796'
//             },
//           {
//               markerId:'2',
//               latitude:'40.048828',
//               longitude:'116.280412',
//               title:'markerId: 2',
//               zIndex:100,
//               iconPath:'https://b.bdstatic.com/searchbox/icms/searchbox/img/demo_location.png',
//               rotate:0,
//               width:30,
//               height:50,
//               callout:{
//                   display:'ALWAYS',
//                   content:'百度科技园',
//                   color:'#000',
//                   fontSize:'16',
//                   borderRadius:50,
//                   bgColor:'#5B9FFF',
//                   padding:2,
//                   textAlign:'center'
//                 }
//             },
//           {
//               markerId:'3',
//               latitude:'40.049655',
//               longitude:'116.27505',
//               callout:{
//                   display:'ALWAYS',
//                   content:'西山壹号院'
//                 }
//             }
//         ],
//         polyline:[
//           {
//               points:[
//                 {
//                     longitude:116.278796,
//                     latitude:40.048828
//                   },
//                 {
//                     longitude:116.27505,
//                     latitude:40.049655
//                   }
//               ],
//               color:'#FF5F41FF',
//               width:2,
//               dottedLine:true
//             }
//         ],
//         controls:[
//           {
//               controlId:1,
//               iconPath:'https://b.bdstatic.com/searchbox/icms/searchbox/img/api_logo.png',
//               position:{
//                   left:0,
//                   top:100,
//                   width:50,
//                   height:50
//                 },
//               clickable:true
//             }
//         ],
//         circles:[
//           {
//               latitude:'40.052751',
//               longitude:'116.278796',
//               color:'#FF5F41FF',
//               fillColor:'#21FFFFFF',
//               radius:'200',
//               strokeWidth:'2'
//             }
//         ]
//       },
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'map'
//         });
//     }
//       swan.getSystemInfo({
//         success:(res)=>{this.setData('isWeb',res.platform == 'web')}
//       })
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     showLocation:function(){
//       this.setData({
//         showLocation:!this.data.showLocation
//       })
//     },
//     toggle3d:function(){
//       this.setData({
//         enable3d:!this.data.enable3d
//       })
//     },
//     toggleShowCompass:function(){
//       this.setData({
//         showCompass:!this.data.showCompass
//       })
//     },
//     toggleOverlooking:function(){
//       this.setData({
//         enableOverlooking:!this.data.enableOverlooking
//       })
//     },
//     toggleZoom:function(){
//       this.setData({
//         enableZoom:!this.data.enableZoom
//       })
//     },
//     toggleScroll:function(){
//       this.setData({
//         enableScroll:!this.data.enableScroll
//       })
//     },
//     toggleRotate:function(){
//       this.setData({
//         enableRotate:!this.data.enableRotate
//       })
//     },
//     togglePolygon:function(){
//       this.setData({
//         drawPolygon:!this.data.drawPolygon
//       })
//     },
//     onMarkertap:function(e){
//       console.log('onMarkertap callback:',e)
//     },
//     onCallouttap:function(e){
//       console.log('onCallouttap callback:',e)
//     },
//     onControltap:function(e){
//       console.log('onControltap callback:',e)
//     },
//     onRegionchange:function(e){
//       console.log('onRegionchange callback:',e)
//     },
//     onTap:function(e){
//       console.log('onTap callback:',e)
//     },
//     onUpdated:function(e){
//       console.log('onUpdated callback:',e)
//     },
//     onPoitap:function(e){
//       console.log('onPoitap callback:',e)
//     },
//     bindmarkertap:function(){
//       swan.showToast({
//         title:'点击标记啦',
//         icon:'none'
//       })
//     },
//     bindcallouttap:function(){
//       swan.showToast({
//         title:'点击标记上方气泡啦',
//         icon:'none'
//       })
//     }
//   })

//canvas
// OnekitPage({
//     data:{
//         timer:'',
//         resultComment:'',
//         per:''
//       },
//     onShow:function(){
//       swan.getSystemInfo({
//         success:(res)=>{
//           var systemWidth = res.screenWidth
//           if(res.platform == 'web'){
//             this.data.per = 0.853;
//             return;
//           }
//           this.data.per = systemWidth / 375
//         }
//       })
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'canvas'
//         });
//     }
//       const totalItems = 100
//       const rightItems = 80
//       var completePercent = parseInt(((rightItems / totalItems)) * 100,10)
//       this.getResultComment(completePercent)
//       this.showScoreAnimation(rightItems,totalItems)
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     getResultComment:function(completePercent){
//       const cp = completePercent
//       this.setData({
//         resultComment:cp < 80?cp < 60?'不及格':'中等':cp < 90?'良好':'优秀'
//       })
//     },
//     showScoreAnimation:function(rightItems,totalItems){
//       var copyRightItems = 0
//       this.setData({
//         timer:setInterval(()=>{
//           copyRightItems++
//           if(copyRightItems == rightItems){
//             clearInterval(this.data.timer);
//           } else {
//             var ctx = swan.createCanvasContext('mycanvas');
//             var per = this.data.per;
//             ctx.setLineWidth(6);
//             ctx.setStrokeStyle('#F3F4F7');
//             ctx.setLineCap('round');
//             ctx.beginPath();
//             ctx.arc(165 * per,110 * per,70 * per,0,2 * Math.PI,false);
//             ctx.stroke();
//             ctx.setLineWidth(6);
//             ctx.setStrokeStyle('#38F');
//             ctx.setLineCap('round');
//             ctx.beginPath();
//             ctx.arc(165 * per,110 * per,70 * per,((-Math.PI * 1)) / 2,((((2 * Math.PI)) * ((copyRightItems / totalItems)))) - ((((Math.PI * 1)) / 2)),false);
//             ctx.stroke();
//             ctx.draw();
//           }
//         },20)
//       })
//     },
//     touchstart:function(e){
//       console.log('touchstart',e)
//     },
//     touchmove:function(e){
//       console.log('touchmove',e)
//     },
//     touchend:function(e){
//       console.log('touchend',e)
//     },
//     touchcancel:function(e){
//       console.log('touchcancel',e)
//     },
//     longtap:function(e){
//       console.log('longtap',e)
//     },
//     error:function(e){
//       console.log('error',e.detail.errMsg)
//     }
//   })


//movable-view
// OnekitPage({
//     data:{
//         title:'movable-view',
//         x:30,
//         y:30,
//         scale:1
//       },
//     onShow:function(){
//       const openParams = app.globalData.openParams
//       if(openParams){
//       swan.reportAnalytics('pageshow',{
//           fr:openParams,
//           type:'component',
//           name:'movable-view'
//         });
//     }
//     },
//     onHide:function(){
//       app.globalData.openParams = ''
//     },
//     move:function(){
//       this.setData({
//         x1:50,
//         y1:50
//       })
//     },
//     scale:function(){
//       this.setData({
//         scale:3
//       })
//     },
//     onChange:function(e){
//       console.log(e.detail)
//     },
//     onScale:function(e){
//       console.log(e.detail)
//     },
//     movableView:function(){
//       swan.navigateTo({
//         url:'/component/nav-movable-view/nav-movable-view'
//       })
//     }
//   })
