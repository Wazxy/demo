// pages/record/record.js
Page({
  data: {
    array: ['周联系简易记录表', '面谈记录表', '家长联系记录表', '研讨及总结记录'],
    objectArray: [
      {
        id: 0,
        name: '周联系简易记录表'
      },
      {
        id: 1,
        name: '面谈记录表'
      },
      {
        id: 2,
        name: '家长联系记录表'
      },
      {
        id: 3,
        name: '研讨及总结记录'
      }
    ],
    index:0
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
  
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})