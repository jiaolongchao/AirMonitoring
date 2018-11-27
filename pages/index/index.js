//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'images/01.jpg',
      'images/02.jpg',
      'images/03.jpg',
      'images/04.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    listTexts: [
      {
        text: "中智外企服务分公司办公室空气质量监测数质量监测数",
        data: "2018.11.20",
        thumb_upid:0
      },
      {
        text: "空气质量监测数",
        data: "2018.11.20",
        thumb_upid: 1
      },
      {
        text: "空气",
        data: "2018.11.20",
        thumb_upid: 2
      }
    ],
    airPmList: []
  },
  goArticleInfo: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(index)
    wx.navigateTo({
      url: '../article/article?thumb_upid=' + this.data.listTexts[index].thumb_upid,
    })
  },
  onLoad: function () {
    // var that = this;
    // wx.request({
    //   url: 'http://web.juhe.cn:8080/environment/air/pm?city=%E5%8C%97%E4%BA%AC&key=623e1ac940908178af50be5d80b34020',
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data.subjects);
    //     var date = res.data.subjects;
    //     that.setData({
    //       airPmList: date
    //     })
    //   },
    //   fail: function () {
    //     console.log("接口调用失败");
    //   }
    // })
  }
})