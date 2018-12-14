//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    listTexts: [ //中智空气监测信息列表
      {
        text: "中智外企服务分公司办公室空气质量监测数质量监测数",
        data: "2018.11.20",
        thumb_upid: 0
      },
      {
        text: "空气质量监测数",
        data: "2018.11.20",
        thumb_upid: 1
      },
      {
        text: "雾霾太多",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "雾霾太多雾霾太多雾霾太多雾霾太多",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "空气质量太差 我就测试空格",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "要起飞飞飞",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "中智外企服务分公司办公室空气质量监测数质量监测数",
        data: "2018.11.20",
        thumb_upid: 0
      },
      {
        text: "空气质量监测数",
        data: "2018.11.20",
        thumb_upid: 1
      },
      {
        text: "雾霾太多",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "雾霾太多雾霾太多雾霾太多雾霾太多",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "空气质量太差 我就测试空格",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "要起飞飞飞",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "中智外企服务分公司办公室空气质量监测数质量监测数",
        data: "2018.11.20",
        thumb_upid: 0
      },
      {
        text: "空气质量监测数",
        data: "2018.11.20",
        thumb_upid: 1
      },
      {
        text: "雾霾太多",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "雾霾太多雾霾太多雾霾太多雾霾太多",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "空气质量太差 我就测试空格",
        data: "2018.11.20",
        thumb_upid: 2
      },
      {
        text: "要起飞飞飞",
        data: "2018.11.20",
        thumb_upid: 2
      }
    ],
    airPmList: [], //测试用暂时没用
    height: '',
    res: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  goArticleInfo: function(e) {
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(index)
    wx.navigateTo({
      url: '../article/article?thumb_upid=' + this.data.listTexts[index].thumb_upid,
    })
  },
  lower() {
    var result = this.data.res;
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
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  onLoad: function(options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
  }
})