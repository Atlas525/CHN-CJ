var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical', // 垂直切换选项
  freeMode: true,
  //initialSlide:6,
  mousewheel: {
    sensitivity: 0.1,
  },
  observer: true,
  observeParents: true,

})
//地图异步加载
window.onLoad = function () {
  var map = new AMap.Map('container', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 11, //初始化地图层级
    center: [120.114676, 30.272414], //初始化地图中心点
    mapStyle: 'amap://styles/08f351a27d4060d9ecb41766766a6d4b',
  });
  var marker = new AMap.Marker({
    position: new AMap.LngLat(120.114676, 30.272414),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '义乌市促佳贸易有限公司'
  });

  map.add(marker);
}
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=095e6b6d46d782cacba552dbd7975a66&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
