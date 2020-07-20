Component({
  mixins: [],
  data: {},
  props: {
    src:"",
    duration:"",
    controls:true,
    autoplay:false,
    loop:false,
    muted:false,
    initialTime:Number,
    pageGesture:false,
    direction:"",
    showFullscreenBtn:true,
    showPlayBtn:true,
    showCenterPlayBtn:true,
    enableProgressGesture:true,
    poster:"",
    showMuteBtn:false,
  },
  didMount() {
    //var video = my.createVideoContext("video");
  },
  didUpdate() {},
  didUnmount() {},
 methods: {
   video_onTimeupdate(e){
   //  console.log(e);
   }
  }
});
