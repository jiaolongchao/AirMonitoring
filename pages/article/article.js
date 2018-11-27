var api = require('../../utils/util.js')
const app = getApp()
Page({
  data:{
    tablecontent:[],
    thumb_upid:null
  },
  onLoad: function (options){
    var that = this;
    that.setData({
      thumb_upid: options.thumb_upid
    })
    // wx.request({
    //   url: api.SYNC_TABLE_URL + '?id=' + this.data.thumb_upid,
    //   success:function(res){
    //     that.setData({
    //       tablecontent:res.data.data.list
    //     })
    //   }
    // })
  }
})