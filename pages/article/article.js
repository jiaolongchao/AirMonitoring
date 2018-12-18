var utils = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
const moment = require('../../utils/moment.min.js');
moment.locale('en', {
  longDateFormat: {
    l: "YYYY-MM-DD",
    L: "YYYY-MM-DD HH:mm"
  }
});
const app = getApp()
Page({
  data: {
    dataList: [ //表格数据
    ],
    thumb_upid: null,
    title: "",
    date: "",
    source: "",
    content: "" //文章内容数据
  },
  onLoad: function(options) {
    console.log(options)
    var that = this;
    that.setData({
      thumb_upid: options.thumb_upid
    })
    wx.request({
      url: utils.SYNC_TABLE_URL + 'air/news/get?newsid=' + this.data.thumb_upid, //文章内容接口
      method: "GET",
      header: {
        'spatial': '000000000000000000000000'
      },
      success: function(res) {
        console.log(res.data.data)
        var data = res.data.data.news;
        var dataList = res.data.data.dataList;
        /** 
         * WxParse.wxParse(bindName , type, data, target,imagePadding) 
         * 1.bindName绑定的数据名(必填) 
         * 2.type可以为html或者md(必填) 
         * 3.data为传入的具体数据(必填) 
         * 4.target为Page对象,一般为this(必填) 
         * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选) 
         */
        that.setData({
          title: data.title,
          date: moment(data.date).format('l'),
          content: WxParse.wxParse('content', 'html', data.content, that, 5),
          source: data.source,
          dataList: dataList
        })
      }
    })
  }
})