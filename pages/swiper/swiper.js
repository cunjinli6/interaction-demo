const windowWidth = wx.getSystemInfoSync().windowWidth
Page({
  data: {
    imgUrls: [
      '/images/1.jpeg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    left: 0,
    windowWidth: windowWidth
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  swiperTransition1(e) {
    console.log('e.transition',e)
    this.setData({
      left: (e.detail.x) / 4
    })
  },
  onReady() {
    this.initInteraction()
  },
  initInteraction() {
    this.ctx = wx.createInteraction({
      selector: '.swiper',
      event: ['transition']
    }).addTarget({
      selector: '.red-line',
      eventHandleWithWxs: 'test.func'
    }).start({
      complete(res) {
        console.log('add ok', res)
      }
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})