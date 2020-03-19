
var mySwiper1 = new Swiper('.swiper-container1', {
    loop: true,
    on:{
        slideChange: function(){
            $(".warehouseTab a").removeClass("active")
            $(".warehouseTab a").eq(mySwiper1.realIndex).addClass("active")
        },
    }
})
var mySwiper2 = new Swiper('.swiper-container2', {
    loop: true,
    on:{
        slideChange: function(){
            $(".courseTab a").removeClass("active")
            $(".courseTab a").eq(mySwiper2.realIndex).addClass("active")
        },
    }
})

$(".warehouseTab a").click(function () {
    $(".warehouseTab a").removeClass("active")
    $(this).addClass("active")
    mySwiper1.slideToLoop($(this).index(), 1000, false)
})
$(".courseTab a").click(function () {
    $(".courseTab a").removeClass("active")
    $(this).addClass("active")
    mySwiper2.slideToLoop($(this).index(), 1000, false)
})