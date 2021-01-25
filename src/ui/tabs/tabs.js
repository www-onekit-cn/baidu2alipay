/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'
import OneKit from '../../js/OneKit'
import swan from '../../swan'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    tabsBackgroundColor: '#fff', // 选项卡背景颜色
    tabsActiveTextColor: '#000', // 选中选项卡字体颜色
    tabsInactiveTextColor: '#666', // 未选中选项卡字体颜色
    tabsUnderlineColor: '#333', // 选中选项卡下划线颜色
    activeName: '',
    urlQueryName: '#fff',
    maxTabItemAmount: 5,
  },
  didMount() {
    my.createSelectorQuery().in(this).select('.weui-tabs')
      .fields({
        size: true
      })
      .exec((res) => {
        const WIDTH = res[0].width
        const count = Math.min(Object.keys(this.tabItems).length, this.properties.maxTabItemAmount)
        const width = WIDTH / count
        // console.log(WIDTH, count, width)
        for (const key of Object.keys(this.tabItems)) {
          const tabItem = this.tabItems[key]
          tabItem._setWidth(width)
        }
      })

    let activeName
    if (this.properties.activeName) {
      activeName = this.properties.activeName
    } else if (this.properties.urlQueryName) {
      const page = OneKit.current()
      this.data.activeName = activeName = page.query[this.properties.urlQueryName]
    }
    if (!activeName) {
      activeName = this.firstName
    }

    const tabItem = this.tabItems[activeName]
    tabItem._reset(true)
  },
  didUpdate() {},
  didUnmount() {},
  // relations: {
  //   '../tab-item/tab-item': {
  //     type: 'child',
  //     linked(tabItem) {
  //       const name = tabItem._name()
  //       if (Object.keys(this.tabItems).length <= 0) {
  //         this.firstName = name
  //       }
  //       this.tabItems[name] = tabItem
  //       //
  //       const tabsBackgroundColor = this.properties.tabsBackgroundColor
  //       const tabsActiveTextColor = this.properties.tabsActiveTextColor
  //       const tabsInactiveTextColor = this.properties.tabsInactiveTextColor
  //       const tabsUnderlineColor = this.properties.tabsUnderlineColor
  //       tabItem._init({
  //         tabsBackgroundColor, tabsActiveTextColor, tabsInactiveTextColor, tabsUnderlineColor
  //       })
  //     },
  //   }
  // },
  methods: {
    tab_click(e) {
      const that = this
      // //////////
      const name = e.detail.name
      //
      if (that.data.activeName) {
        const tabItem = this.tabItems[that.data.activeName]
        tabItem._reset(false)
      }
      //
      that.data.activeName = name
      //
      this.triggerEvent('Tabchange', {
        name
      })
      if (this.properties.urlQueryName) {
        const urlQuery = {}
        urlQuery[this.properties.urlQueryName] = name
        swan.setURLQuery(urlQuery)
      }
    }
  }
})
