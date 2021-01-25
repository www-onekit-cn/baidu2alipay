/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    longitude(longitude) {
      this.setData({
        longitude
      })
    },
    latitude(latitude) {
      this.setData({
        latitude
      })
    },
    scale: 16,
    markers(markers) {
      this.setData({
        markers
      })
    },
    polyline(polyline) {
      this.setData({
        polyline
      })
    },
    polygons(polygon) {
      this.setData({
        polygon
      })
    },
    circles(circles) {
      this.setData({
        circles
      })
    },
    controls(controls) {
      this.setData({
        controls
      })
    },
    'include-points': function (includePoints) {
      this.setData({
        'include-points': includePoints
      })
    },
    'show-location': function (showLocation) {
      this.setData({
        'show-location': showLocation
      })
    },
    // 支付宝暂时不支持3D'
    'enable-3D': function () {
      console.log('[onekit]enable-3D')
      my.showToast({
        content: '支付宝暂时不支持3D',
      })
    },
    'show-compass': function (showCompass) {
      this.mapCtx.showsCompass({
        isShowCompass: showCompass
      })
    },
    'enable-overlooking': function (enableOverlooking) {
      this.mapCtx.gestureEnable({
        isGestureEnable: enableOverlooking
      })
    },
    'enable-zoom': function (enableZoom) {
      this.mapCtx.showsScale({
        isShowsScale: enableZoom
      })
    },
    'enable-scroll': function (enableScroll) {
      this.mapCtx.gestureEnable({
        isGestureEnable: enableScroll
      })
    },
    'enable-rotate': function (enableRotate) {
      this.mapCtx.gestureEnable({
        isGestureEnable: enableRotate
      })
    },
  },
  onInit() {
    console.log('onInit', this)
  },
  didMount() {
    const that = this
    this.mapCtx = my.createMapContext(this.props.onekitId)

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec((rect) => {
      that.setData({
        rect: rect[0]
      })
    })
  },
  didUpdate() {
    this._trigger_updated()
  },
  didUnmount() {},
  methods: {
    map_markertap({detail}) {
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
    map_callouttap({detail}) {
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
    map_controltap({detail}) {
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
    map_regionchange({detail}) {
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
    map_tap({detail}) {
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
    image_load({detail}) {
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
        const {detail, dataset} = this._dataset()
        if (this.props.onUpdated) {
          this.props.onUpdated({
            detail,
            currentTarget: {
              dataset
            }
          })
        }
      }
    },
    //
    _trigger_poitap({detail}) {
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
