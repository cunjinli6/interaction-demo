// pages/movable/movable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.initInteraction()
  },
  initInteraction() {
    this.ctx = wx.createInteraction({
      selector: '.movable',
      event: ['touchstart', 'touchmove', 'touchend']
    }).addTarget({
      selector: '.movable',
      eventHandleWithWxs: 'test.func'
    }).setFields({
      // rect: true,
      // style: true
    }).setContext({
      lastLeft: 100,
      lastTop: 100,
      startX: 0,
      startY: 0
    }).start({
      complete(res) {
        console.log('add ok', res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})