    var activeIndex = 0
    var $h = Math.ceil($(window).height());
    var $w = Math.ceil($(window).width());
    var oBo1 = document.getElementsByClassName("bo1")[0]
    var oBo2 = document.getElementsByClassName("bo2")[0]
    var oWBox = document.getElementsByClassName("wbox")[0]


    var mySwiper = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        //initialSlide:5,
        observer: true,
        mousewheel: {
            sensitivity : 0.1,
        },
        preventInteractionOnTransition: true, //禁止快速滑动
        on: {       
            slideChange: function () {
                activeIndex = this.activeIndex

                var ev = {
                    "deltaY": -1
                }
                if (mySwiper.previousIndex > mySwiper.activeIndex) {
                    ev = {
                        "deltaY": 1
                    }
                }
                boxMove(ev)

                if (activeIndex == 0) {
                    $(".seller .person1,.seller .text,.seller .shoe,.seller .head").hide()
                    navToW()
                } else if (activeIndex == 1) {
                    $(".seller .shoe,.seller .head").fadeIn(1000, function () {
                        $(".seller .person1,.seller .text").fadeIn(1000)
                    })
                    $(".product .cloth,.product .earphone,.product .cup,.product .pright").hide()
                    navToB()
                } else if (activeIndex == 2) {
                    $(".seller .person1,.seller .text,.seller .shoe,.seller .head").hide()
                    $(".warehouse .earth,.warehouse .wtext p,.warehouse .tabtns,.warehouse .wtext h2").hide()
                    $(".product .cup").fadeIn(700, function () {
                        $(".product .earphone").fadeIn(700, function () {
                            $(".product .cloth").fadeIn(700)
                        })
                    })
                    $(".product .pright").fadeIn(2100)
                    oWBox.style.width = 0
                    oWBox.style.opacity = 0
                    navToB()
                } else if (activeIndex == 3) {
                    $(".product .cloth,.product .earphone,.product .cup,.product .pright").hide()
                    $(".company .inner").hide()
                    $(".warehouse .earth").fadeIn(1000)
                    $(".warehouse .tabtns,.warehouse .wtext h2").fadeIn(1000, function () {
                        $(".warehouse .wtext p").fadeIn(1000)
                    })
                    navToW()
                } else if (activeIndex == 4) {
                    oWBox.style.width = 0
                    oWBox.style.opacity = 0
                    $(".warehouse .earth,.warehouse .wtext p,.warehouse .tabtns,.warehouse .wtext h2").hide()
                    $(".course .ctext,.course .text,.course .inner").hide()
                    $(".company .inner").fadeIn(1000)
                    navToW()

                    new Swiper('.swiper-container-h', {
                        observer: true,
                        observerParent: true,
                        pagination: {
                            el: '.swiper-pagination-h',
                            bulletActiveClass: 'my-bullet-active',
                            clickable: true,
                        }
                    });

                } else if (activeIndex == 5) {
                    $(".company .inner").hide()
                    $(".course .ctext").show()
                    $(".course .textTab a").removeClass("active")
                    $(".course .inner").fadeIn(1000)
                    navToW()
                    new Swiper('#swiper-container2',{
                        direction: 'vertical',
                        nested:true,
                        slidesPerView: 'auto',
                        mousewheel: true,
                        freeMode: true,
                        initialSlide :0,
                        scrollbar: {
                          el: '.swiper-scrollbar',
                        },
                    })
                    //默认滑到顶部
                    document.getElementsByClassName("scourse")[0].scrollIntoView();                    
                }
            },
        },
    });
    $(window).mousewheel(function (event) {
        var courseTop = Math.ceil($(".course .inner").offset().top)
        var hTop = Math.ceil($h*0.08+28)
        console.log(courseTop)
        console.log(hTop)
        if(courseTop <= hTop && courseTop!=0){
            mySwiper.mousewheel.disable()
        }else{
            mySwiper.mousewheel.enable()
        }
    })
    function slideTo(index){
        mySwiper.slideTo(index)
    }
    $(".product .pleft div").hover(function(){
        $(this).children("img").animate({ top: '-=30px' });
    },function(){
        $(this).children("img").animate({ top: '+=30px' });
    })

    $(".warehouse .tabtns a").click(function () {
        $(".warehouse .tabtns a").removeClass("active")
        $(this).addClass("active")
        $(".warehouse .pleft>div").hide()
        $(".warehouse .pleft>div").fadeIn(1000)

        startMove(oWBox, {
            width: Math.ceil($w*0.3),
            opacity: 100
        })
    })
    $(".course .textTab a").click(function () {
        $(".course .textTab a").removeClass("active")
        $(this).addClass("active")
        $(".course .ctext").hide()
        $(".course .text").fadeIn()
    })
    function getInfo(name) {
        console.log(name)
        $(".wbox img").attr("src", "../static/imgs/" + name + ".png")
        if (name == "yw") {
            $(".wbox h2").html("义乌仓")
            $(".wbox p").html("促佳义乌仓库位于义乌市廿三里街道，距离义乌城区、东阳城区、苏溪都是二十三华里，交通便利。义乌仓是促佳最大的一个仓库，仓储面积达12000余平方米，常备普货库存百万件，现有员工400余人，仓库单日最大订单处理量可达80000单。")
        } else if (name == "sz") {
            $(".wbox h2").html("深圳仓")
            $(".wbox p").html("促佳深圳仓库位于深圳市龙岗区，龙岗区是深圳市东北部的交通枢纽，拥有便捷的交通运输网络。深圳仓是促佳第二个建立的仓库，仓储面积6000余平方米，主要库存3C电子类商品。现有员工120余人，仓库单日最大订单处理量为30000单。")
        } else if (name == "xzx") {
            $(".wbox h2").html("美东仓")
            $(".wbox p").html("2019年设立于新泽西州。仓储面积6000余平方米，现有员工100余人，仓库单日最大订单处理量20000单。")
        } else if (name == "jlfny") {
            $(".wbox h2").html("美西仓")
            $(".wbox p").html("加利福尼亚洲位于西岸，面向太平洋，同时也是国际货运中心，2018年加州建仓，辐射美国中西部地区。货物最快3日内送达。仓储面积6000余平方米，现有员工100余人，仓库单日最大订单处理量20000单。")
        } else if (name == "mg") {
            $(".wbox h2").html("泰国仓")
            $(".wbox p").html("促佳泰国仓于2019年底设立于泰国曼谷。设有两个分仓，一个仓库面积8000余平方米，员工60余人，单日最大订单处理15000单；另一个仓库面积4000余平方米，员工35余人，单日最大订单处理4500单。")
        } else if (name == "yjd") {
            $(".wbox h2").html("印尼仓")
            $(".wbox p").html("促佳印尼仓于2019年底筹划，2020年将正式投入使用。仓库面积9500余平方米，员工65余人，投入使用后单日最大订单处理量将达20000单。")
        }
    }
    function getCourseInfo(year) {
        $(".course .text h3").html(year + "年")
        if (year == "2015") {
            $(".course .text>div").html("<p>义乌市促佳贸易有限公司</p><p>开始在线销售珠宝和配饰</p><p>一件代发业务正式进入电子商务行业</p><p>进行第<span>1</span>次规模扩张</p><p>开设了第<span>2</span>家速卖通商店</p><p>使年销售额达到了</p><h4>100万元<img src='../static/imgs/up.png' alt='' /></h4>")
        } else if (year == "2016") {
            $(".course .text>div").html("<p>进行第<span>2</span>次规模扩张</p><p>调整控制流程，优化综合管理</p><p>品控标准化</p><p>大客户增<span>+</span></p><p>速卖通店铺<span>+</span></p><p>使年销售额达到了</p><h4>800万<img src='../static/imgs/up.png' alt='' /></h4>")
        } else if (year == "2017") {
            $(".course .text>div").html("<p>成立杭州分公司</p><p>进行第<span>3</span> 次团队规模扩张</p><p>第<span>2</span>个仓库深圳建立</p><p>继续开设速卖通店铺，建设官方网站。</p><p>第三方卖家增<span>+</span></p><p>使年销售额达到了</p><h4>1600万<img src='../static/imgs/up.png' alt='' /></h4>")
        } else if (year == "2018") {
            $(".course .text>div").html("<p>第<span>4</span>次规模扩张</p><p>员工规模达到<span>350</span>人</p><p>第<span>3</span>个仓库在美国建立</p><p>在线业务平台正式启用</p><p>订单业务自动化</p><p>使年销售额达到了</p><h4>1亿<img src='../static/imgs/up.png' alt='' /></h4>")
        } else if (year == "2019") {
            $(".course .text>div").html("<p>第<span>5</span>次规模扩张</p><p>第<span>4</span>个仓库在美国建立</p><p>第<span>5</span>个仓库在泰国建立</p><p>上线手机APP和CJPacket</p><p>推出品牌定制业务</p><p>同年销售额达到了</p><h4>5亿<img src='../static/imgs/up.png' alt='' /></h4>")
        }


    }

    function boxMove(event) {
        console.log(event.deltaY)
        var bo1 = $(".bo1").css("opacity")
        var bo2 = $(".bo2").css("opacity")
        var box1 = ""
        var box2 = ""
        if (bo1 > 0) {
            box1 = oBo1
            box2 = oBo2
        } else {
            box1 = oBo2
            box2 = oBo1
        }
        if (event.deltaY > 0) {
            box2.style.top = 0
            box1.style.top = $h - 46
            box2.style.opacity = 0
            box1.style.opacity = 1
            startMove(box1, {
                top: "100%",
                opacity: 0,
            })
        } else {
            box1.style.top = $h - 46
            box2.style.top = "100%"
            box1.style.opacity = 1
            box2.style.opacity = 0
            startMove(box1, {
                top: 0,
                opacity: 0,
            })
        }        
        startMove(box2, {
            top: $h - 46,
            opacity: 100,
        })
        box2.style.display = activeIndex == 5?"none":"block";

    }

    function navToB() {
        $(".nav li").css({
            color: "#333"
        })
        $(".logo").attr("src", "../static/imgs/logo2.png")
    }

    function navToW() {
        $(".nav li").css({
            color: "#fff"
        })
        if (activeIndex == 0) {
            $(".logo").attr("src", "../static/imgs/logo1.png")
        } else {
            $(".logo").attr("src", "../static/imgs/logo2.png")
        }
    }
    //地图异步加载
    window.onLoad  = function(){
        var map = new AMap.Map('container',{
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom:11, //初始化地图层级
            center: [120.114676,30.272414], //初始化地图中心点
            mapStyle: 'amap://styles/08f351a27d4060d9ecb41766766a6d4b',
        });
        var marker = new AMap.Marker({
            position: new AMap.LngLat(120.114676,30.272414),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '义乌市促佳贸易有限公司'
        });
        
        map.add(marker);
    }
    var url = 'https://webapi.amap.com/maps?v=1.4.15&key=095e6b6d46d782cacba552dbd7975a66&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
    
    