import swan from "/onekit/swan"
Component({
  mixins: [],
  data: {
    hideContact: true
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  props: {},
  methods: {
    contactBG_tap() {
      this.setData({ hideContact: true });
    },
    button_onTap(e) {
      var that = this;
      if (this.props.openType) {
        switch (this.props.openType) {
          case "contact":
            this.setData({ hideContact: false });
            break;
          case "share":
            swan.showShareMenu({
              success(){

              }
            });
            break;
          case "getUserInfo":
          if(that.props.onGetuserinfo){
          swan.getUserInfo({
            success(res){
              e.detail = res;
              that.props.onGetuserinfo(e);
            }
          })
          }
            break;
          case "getPhoneNumber":
         if(that.props.onGetphonenumber){
          swan.getPhoneNumber({
            success(res){
              e.detail = res;
              that.props.onGetphonenumber(e);
            }
          })
          }
            break;
          case "launchApp":
            break;
          case "openSetting":
            /*my.navigateTo({
              url:"/onekit/page/setting/setting"
            });*/
            swan.openSetting({

            });
            break;
          case "feedback":
            break;
          default:
            break;
        }
      }
      if (this.props.onTap) { this.props.onTap(e); }
    },
  },
});
