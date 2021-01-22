/* eslint-disable no-console */
Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: '',
    headerText: '',
    disabled: false,
    range: [],
    value: '00:00',
    start: '',
    end: '',
  },
  didMount() {
    console.log(this._compareTime('1:01', '22:59'))
    console.log(this._compareTime('23:01', '22:59'))

    const hours = []
    for (let h = 0; h < 24; h++) {
      const hour = h >= 10 ? h : ('0' + h)
      hours.push(hour)
    }
    const minutes = []
    for (let m = 0; m < 60; m++) {
      const minute = m >= 10 ? m : ('0' + m)
      minutes.push(minute)
    }
    this.setData({
      hours,
      minutes
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    time_show() {
      if (this.props.disabled) {
        return
      }
      let time = this.props.value.split(':')
      time = [parseInt(time[0], 10), parseInt(time[1], 10)]
      this.setData({
        time,
        show: true
      })
    },
    time_cancle() {
      this.setData({
        show: false
      })
      if (this.props.onCancle) {
        this.props.onCancle()
      }
    },
    time_confirm() {
      this.setData({
        show: false
      })
      if (this.props.onChange) {
        this.props.onChange({
          detail: {
            value: this.data.value
          }
        })
      }
    },
    _compareTime(time1, time2) {
      const time1m = time1.split(':')[0]
      const time1s = time1.split(':')[1]
      const time2m = time2.split(':')[0]
      const time2s = time2.split(':')[1]
      if (time1m > time2m) {
        return true
      } else if (time1m < time2m) {
        return false
      } else if (time1m === time2m) {
        if (time1s > time2s) {
          console.log('true')
          return true
        } else {
          return false
        }
      } else {
        return null
      }
    },
    time_change(e) {
      const current = e.detail.value
      let h = current[0]
      h = h >= 10 ? h : ('0' + h)
      let m = current[1]
      m = m >= 10 ? m : ('0' + m)
      const value = `${h}:${m}`
      if (this.props.start) {
        if (this._compareTime(value, this.props.start) === false) {
          let time = this.props.start.split(':')
          time = [parseInt(time[0], 10), parseInt(time[1], 10)]
          this.setData({
            value: this.props.start,
            time
          })
          return
        }
      }
      if (this.props.end) {
        if (this._compareTime(value, this.props.start) === true) {
          let time = this.props.end.split(':')
          time = [parseInt(time[0], 10), parseInt(time[1], 10)]
          this.setData({
            value: this.props.end,
            time
          })
          return
        }
      }
      this.data.value = value
    }
  },
})
