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
    listTexts:[
      {
        text:"中智外企服务分公司办公室空气质量监测数质量监测数",
        data:"2018.11.20"
      },
      {
        text: "空气质量监测数",
        data: "2018.11.20"
      },
      {
        text: "空气",
        data: "2018.11.20"
      }
    ]
  }
})