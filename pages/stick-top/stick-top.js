Page({
  data: {
    sticky: false,
    opacity: 0
  },
  //滚动条监听
  _onPageScroll: function (e) {
    let data = {}
    if (e.scrollTop > 60 && !this.data.sticky) {
      data = { sticky: true }
    }
    if (e.scrollTop < 60 && this.data.sticky) {
      data = ({ sticky: false })
    }
    data.opacity = e.scrollTop > 60 ? 1 : Math.max(0, (e.scrollTop) / 60)
    this.setData(data)
    // this.setData({ scrollTop: e.detail.scrollTop })
  },
  onShow() {
    // setTimeout(() => {
    //   this.initInteraction()
    // }, 5000)
    
  },
  onReady() {
    this.initInteraction()
  },
  initInteraction() {
    this.interactionContext = wx.createInteraction({
      selector: 'page',
      event: ['scroll'],
    }).setContext({
      a: 1,
      b: 2
    }).addTarget({
      selector: ['.page-group-interaction'],
      eventHandleWithWxs: "test.funcA"
    }).addTarget({
      selector: ['.page-banner .image'],
      eventHandleWithWxs: "test.funcB"
    }).addContextObserver('a', (context) => {
      console.log('new data context is', context)
    }).start({
      complete(res) {
        console.log('addInteraction res', res)
      },
    })
    setTimeout(() => {
      // this.interactionContext.stop()
    }, 3000)
  }
})