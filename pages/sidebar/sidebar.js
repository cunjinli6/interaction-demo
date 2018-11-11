// page/one/index.js
Page({
  data: {
    open: false,
    mark: 0,
    newmark: 0,
    startmark: 0,
    endmark: 0,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    staus: 1,
    translate: ''
  },
  initInteraction() {
    this.ctx = wx.createInteraction({
      selector: '.page-top',
      event: ['touchstart', 'touchmove', 'touchend']
    }).setContext({
      startmark: 0,
      newmark: 0
    }).addTarget({
      selector: '.page-top',
      eventHandleWithWxs: 'test.func'
    }).start({
      complete(res) {
        console.log('add ok', res)
      }
    })
  },
  onReady() {
    // setTimeout(() => {
      this.initInteraction()
    // }, 5000)
  }
})