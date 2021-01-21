import{OnekitPage,swan} from '../baidu2alipay/index'
var app = getApp()

//view
OnekitPage({
    data:{},
    onShow:function(){
      const openParams = app.globalData.openParams
      if(openParams){
      swan.reportAnalytics('pageshow',{
          fr:openParams,
          type:'component',
          name:'view'
        });
    }
    },
    onHide:function(){
      app.globalData.openParams = ''
    }
  })


