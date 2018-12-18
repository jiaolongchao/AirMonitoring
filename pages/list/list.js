//index.js
//获取应用实例
var utils = require('../../utils/util.js');
const app = getApp()
Page({
  data: {
    listTexts: [ //中智空气监测信息列表
    ],
    height: '',
    pagenum: 1,
    pagesize: 14
  },
  goArticleInfo: function(e) {
    var index = parseInt(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../article/article?thumb_upid=' + this.data.listTexts[index].id,
    })
  },
  lower() {
    var result = this.data.listTexts;
    var resArr = [];
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 100) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          listTexts: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  onLoad: function(options) {
    var that = this;
    wx.request({ //获取列表
      url: utils.SYNC_TABLE_URL + 'air/news/list?pagenum=' + that.data.pagenum + '&pagesize=' + that.data.pagesize,
      method: "GET",
      header: {
        'spatial': '000000000000000000000000'
      },
      success: function(res) {
        var data = res.data.data.newsList;
        console.log(data);
        data.map((item) => {
          item.date = utils.formatTimeTwo(item.date, 'Y/M/D')
        })
        that.setData({
          listTexts: data
        })
      },
      fail: function() {
        console.log("监测数据接口调用失败");
      }
    })

    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
  }
})