import{OnekitPage,swan} from '../baidu2alipay/index'
OnekitPage({
  onLoad(e){
    const a = !!e.data
    console.log(e, a)
  }
});