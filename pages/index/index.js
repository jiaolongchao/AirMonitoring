//index.js
//获取应用实例
const utils = require('../../utils/util.js');
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
    imgUrls: [], //轮播放图片
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    listTexts: [], //中智空气监测信息列表
    name: "", //公司名称
    adress: "",
    phone: ""
  },
  goArticleInfo: function(e) {
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(index)
    wx.navigateTo({
      url: '../article/article?thumb_upid=' + this.data.listTexts[index].id,
    })
  },
  onLoad: function() {
    var that = this;
    wx.request({ //banner轮播
      url: utils.SYNC_TABLE_URL + 'air/ad/list',
      method: "GET",
      header: {
        'spatial': '000000000000000000000000'
      },
      success: function(res) {
        var data = res.data.data;
        var newData = data.filter(item => item.isuse != 1)
        console.log(newData);
        that.setData({
          imgUrls: newData
        })
      },
      fail: function() {
        console.log("banner轮播接口调用失败");
      }
    })

    wx.request({ //获取列表
      url: utils.SYNC_TABLE_URL + 'air/news/list?pagenum=1&pagesize=7',
      method: "GET",
      header: {
        'spatial': '000000000000000000000000'
      },
      success: function(res) {
        var data = res.data.data.newsList;
        console.log(data);
        data.map((item) => {
          //item.date = utils.formatTimeTwo(item.date, 'Y/M/D')
          item.date = moment(item.date).format('l');
        })
        that.setData({
          listTexts: data
        })
      },
      fail: function() {
        console.log("监测数据接口调用失败");
      }
    })

    wx.request({ //关于我们
      url: utils.SYNC_TABLE_URL + 'air/about/get',
      method: "GET",
      header: {
        'spatial': '000000000000000000000000'
      },
      success: function(res) {
        console.log(res.data.data);
        var data = res.data.data;
        that.setData({
          name: data.description,
          adress: data.addr,
          phone: data.tel
        })
      },
      fail: function() {
        console.log("关于我们接口调用失败");
      }
    })
  }
})