var api = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    tableContent: [//表格数据
      {
        th_title: "室外测试值",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "6层东区前台",
        pm: 48,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "6层南侧办公区",
        pm: 49,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "西区前台",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "北侧办公区",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "服务大厅",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "5B18办公区",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "B3值班室",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "室内测试平均值",
        pm: 47,
        co2: 400,
        hcho: 0.44,
        vocs: 0.001
      },
      {
        th_title: "健康值",
        pm: "35<检测值",
        co2: "1000检测值",
        hcho: "0.44<检测值",
        vocs: "0.001<检测值"
      },
      {
        th_title: "数值",
        pm: "35<检测值",
        co2: "1000检测值",
        hcho: "0.44<检测值",
        vocs: "0.001<检测值"
      },
      {
        th_title: "超标值",
        pm: "35<检测值",
        co2: "1000检测值",
        hcho: "0.44<检测值",
        vocs: "0.001<检测值"
      }
    ],
    thumb_upid: null,
    title:"中智外企服务分公司办公室空气质量监测数据",
    time:"2018.11.26",
    articleContent: "此处为正文处内容包括图片文字"  //文章内容数据
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      thumb_upid: options.thumb_upid
    })
    // wx.request({
    //   url: api.SYNC_TABLE_URL + '?id=' + this.data.thumb_upid, //文章内容接口
    //   success:function(res){
    //     that.setData({
    //       articleContent:res.data.data.list
    //     })
    //   }
    // })
  }
})