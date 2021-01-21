/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, weixin_behavior],
  data: {},
  props: {
    hoverClass: 'none',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 400,
  },
})
