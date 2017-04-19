$(function(){
	//内容详情列表图片切换
	$(".main_left_con li").mouseover(function(){
		//console.log($(this).attr("data_src"))
		var img_src = $(this).attr("data_src");
		$(".main_left_img img:eq(0)").attr("src",img_src)
	})
	//导航页面
	$(".header_nav2 li").click(function(){
		$(".header_nav2 li").eq($(this).index()).children(".level2").stop().animate({"width":"0.3rem"});
		$(".header_nav2 li").eq($(this).index()).css({
		 	"border-top":"5px solid #8c8c8c",
    		"border-radius":"0 0 0.1rem 0.1rem",
    		"color":"white",
    		"background":"#1bba9e url(../images/nav_bg.png) no-repeat right bottom"
    	})
		$(".header_nav2 li").eq($(this).index()).children("a").css({"color":"#fff"});
		
		$(".header_nav2 li").eq($(this).index()).siblings().children(".level2").stop().animate({"width":"0"});
		$(".header_nav2 li").eq($(this).index()).siblings().css({
		 	"border-top":"none",
    		"border-radius":"0",
    		"background":"none"
    	})
		$(".header_nav2 li").eq($(this).index()).siblings().children("a").css({"color":"#3c3c3c"});
	})
	//在线预订
	//餐饮住宿选项卡
	$(".change_food").click(function(){
		//console.log($(this).index())
		$(this).addClass("food_active").siblings().removeClass("food_active");
		if($(this).index()==0){
			$(".accommodation").css("display","block");
			$(".food").css("display","none");
		}else{
			$(".accommodation").css("display","none");
			$(".food").css("display","block");
		}
	})
		//餐饮介绍效果
	$(".food>a").mouseenter(function(){
//		console.log($(".food_title"))
//		console.log($(".food_con"))
		$(".food_title").eq($(this).index()).stop().animate({"top":"100%"},1000)
		$(".food_con").eq($(this).index()).stop().animate({"top":"0"},1000)
		$(".food>a").mouseleave(function(){
			$(".food_title").eq($(this).index()).stop().animate({"bottom":"0"},1000)
			$(".food_con").eq($(this).index()).stop().animate({"top":"100%"},1000)
		})
	})
	
})

