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
OnekitPage({
    onShow:function(){
      const openParams = app.globalData.openParams
      if(openParams){
      swan.reportAnalytics('pageshow',{
          fr:openParams,
          type:'component',
          name:'switch'
        });
    }
    },
    onHide:function(){
      app.globalData.openParams = ''
    },
    switchChange:(e)=>{console.log(e.detail)}
  })