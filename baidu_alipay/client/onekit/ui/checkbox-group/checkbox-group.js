Component({
  mixins: [],
  data: {},
  props: {
    onekitClass:"",
    onekitStyle:"",
    onekitId:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    checkboxGroup_change(e){
      if(this.props.onchange){
        this.props.onchange({})
      }
    }
  },
});
