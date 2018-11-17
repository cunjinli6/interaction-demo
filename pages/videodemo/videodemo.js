// pages/videodemo/videodemo.js
var windowHeight = wx.getSystemInfoSync().windowHeight
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: windowHeight,
    currentClass: 'current-video',
    nextClass: 'next-video',
    refreshWording: '下拉刷新加载',
    refreshTransform: -30
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        showComp: true
      })
    }, 3000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  transitionEnd(detail) {
    console.log('move to next complete', detail)
    if (detail.moveToNext) {
      this.setData({
        currentClass: this.data.currentClass === 'current-video' ? 'next-video' : 'current-video',
        nextClass: this.data.nextClass === 'current-video' ? 'next-video' : 'current-video'
      })
    }
  },
  movedownRefresh() {
    this.setData({
      refreshWording: '下拉刷新加载'
    })
  },
  looseToRefresh() {
    this.setData({
      refreshWording: '松开加载, 2秒后完成'
    })
  },
  beginToRefresh(args) {
    setTimeout(() => {
      this.setData({
        refreshWording: '加载完成',
        refreshTransform: 0
      })
      setTimeout(() => {args.complete()}, 0)
    }, 2000)
  },
  refreshComplete() {
    setTimeout(() => {
      this.setData({
        refreshWording: '下拉刷新加载'
      })
    }, 1000)
  }
})