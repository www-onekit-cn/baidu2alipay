Component({
  mixins: [],
  data: {},
  props: {
    headerText:"",
    disabled:false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    picker_Change(e){
      if(this.props.onChange){
        this.props.onChange({})
      }
    }
  },
});
