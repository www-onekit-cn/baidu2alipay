/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    longitude: 0,
    latitude: 0,
    scale: 16,
    markers: [],
    polyline: [],
    polygons: [],
    circles: [],
    controls: [],
    includePoints: [],
    showLocation: [],
    // 支付宝暂时不支持3D
    enable3D: false,
    showCompass: false,
    // 支付宝暂时不支持3D
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false
  },
  deriveDataFromProps(props) {
    const mapCtx = my.createMapContext(props.onekitId)
    this.enableZoom_(mapCtx, props.enableZoom)
    this.enableScroll_(mapCtx, props.enableScroll)
    this.enableRotate_(mapCtx, props.enableRotate)
  },
  onInit() {
    console.log('onInit', this)
  },
  didMount() {
    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec((rect) => {
      this.setData({
        rect: rect[0]
      })
    })
  },
  didUpdate() {
    this._trigger_updated()
  },
  didUnmount() {},
  methods: {
    enableZoom_(mapCtx, enableZoom) {
      mapCtx.gestureEnable({
        isGestureEnable: enableZoom ? 1 : 0
      })
      console.warn('支付宝小程序地图组件会禁用全部手势')
    },
    enableScroll_(mapCtx, enableScroll) {
      mapCtx.gestureEnable({
        isGestureEnable: enableScroll ? 1 : 0
      })
      console.warn('支付宝小程序地图组件会禁用全部手势')
    },
    enableRotate_(mapCtx, enableRotate) {
      mapCtx.gestureEnable({
        isGestureEnable: enableRotate ? 1 : 0
      })
      console.warn('支付宝小程序地图组件会禁用全部手势')
    },
    map_markertap({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onMarkerTap) {
        this.props.onMarkerTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    map_callouttap({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onCalloutTap) {
        this.props.onCalloutTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    map_controltap({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onControltap) {
        this.props.onControltap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    map_regionchange({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onRegionChange) {
        this.props.onRegionChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    map_tap({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTap) {
        this.props.onTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    image_load({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onLoad) {
        this.props.onLoad({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    _trigger_updated() {
      this.mapCtx = my.createMapContext(this.props.onekitId)
      if (this.mapCtx.updateComponents) {
        if (this.props.onUpdated) {
          this.props.onUpdated({
            detail: {},
            currentTarget: {
              dataset: {}
            },
            type: 'updated'
          })
        }
      }
    },
    //
    _trigger_poitap({
      detail
    }) {
      this.mapCtx = my.createMapContext(this.props.onekitId)
      const dataset = this._dataset()
      if (this.props.onPoiTap) {
        this.props.onPoiTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
  },
})
