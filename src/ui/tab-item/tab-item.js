/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {
    current: false,
    width: 'auto'
  },
  props: {
    label: '',
    name: '',
    badgeType: '',
    badgeText: '',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  // relations: {
  //   '../tabs/tabs': {
  //     type: 'parent'
  //   }
  // },
  methods: {
    _name() {
      return this.properties.name
    },
    _reset(isCurrent) {
      this.setData({isCurrent})
    },
    _init(data) {
      this.setData(data)
    },
    _setWidth(width) {
      this.setData({
        width: `${width}px`
      })
    },
    tab_tap() {
      this.setData({isCurrent: true})
      //
      const name = this.properties.name
      this.triggerEvent('tabclick', {name}, {bubbles: true, composed: true})
    }
  }
})
