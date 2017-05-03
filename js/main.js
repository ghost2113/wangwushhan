$(function(){
/*首页*/
	//内容详情列表图片切换
	$(".main_left_con li").mouseover(function(){
		//console.log($(this).attr("data_src"))
		var img_src = $(this).attr("data_src");
		$(".main_left_img img:eq(0)").attr("src",img_src)
	})
	//选项卡
	$(".main_right_title li").click(function(){

		//console.log($(this).index())
		var index = $(this).index();
		console.log($(".t_online_con form").eq(index))
		$(this).addClass("main_right_title_active").siblings().removeClass("main_right_title_active");
		$(".t_online_con form").eq(index).css("display","block").siblings().css("display","none");
	})
	$(".main_right_title li").eq(0).trigger("click");
	//导航页面
	$(".header_nav2 li").click(function(){
		$(".header_nav2 li").eq($(this).index()).children(".level2").stop().animate({"width":"0.3rem"});
		$(".header_nav2 li").eq($(this).index()).css({
		 	"border-top":"5px solid #8c8c8c",
    		"border-radius":"0 0 0.1rem 0.1rem",
    		"color":"white",
    		"background":"rgba(0,0,0,.7) no-repeat right bottom",
    		"background-image":"url(../images/nav_bg.png)"
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
	//手风琴效果实现
/*	$(".ol_order_right li").on("mouseenter",function(){
		//console.log($(this).css("width"))
		var index = $(this).index();
		$(this).stop("true","true").animate({"width":"40%"},500).siblings().stop("true","true").animate({"width":"20%"},500);
	})
	*/
	/***************************************
					hover事件的使用:$(selector).hover(fn1, fn2);
					鼠标进入，执行函数fn1
					鼠标移出，执行函数fn2

					扩展：$(selector).find(expr)：在选中的元素中查询满足expr选择器选中的元素
				***************************************/
				$(".ol_order_right li").hover(function(){
					/* 当前图片的宽度自定义动画结果400，其他的宽度动画结果160，整体宽度不变*/
					$(this).css("width","48%").siblings().css("width","13%");
					$(this).find(".des").css("display","none");
					$(this).find(".scenic_info").css("display","block");
				},function(){
					$(this).css("width","20%").siblings().css("width","20%");
					$(this).find(".des").css("display","block");
					$(this).find(".scenic_info").css("display","none");
				});
	
	/**
	 * 	二级页面 选项卡效果实现
	 */
	$(".t_nav_list li").click(function(){
		console.log($(this).index())
		console.log($(this).find("a").eq(0).html())
		var index = $(this).index();
//		标签列表颜色改变
		$(this).find("a").css("color","#af370a");
		$(this).siblings().find("a").css("color","#3c3c3c");
//		获取导航标签内容
		var listCon = $(this).find("a").eq(0).html();
		$(".t_sub_process span:nth-last-child(1)").html(listCon);
//		导航标签内容选项卡
		$(".t_sub_conlist").eq(index).css("display","block");
		$(".t_sub_conlist").eq(index).siblings().css("display","none");
	})
	$(".t_nav_list li").eq(0).trigger("click");
	
	
	/**
	 * 景区介绍轮播图
	 */
	console.log( $(".t_attractionsbox_position li:eq(0)").outerWidth())
	console.log( $(".t_attractionsbox_position li").length)
	console.log( $(".t_attractionsbox_position").css("left"))
	function shuffling(direction){
		//由参数判断轮播图滑动方向，+右 -左
		console.log(1)
		var direc = 1*direction;
		var width = $(".t_attractionsbox_position li:eq(0)").width();
		var allNum = $(".t_attractionsbox_position li").length;		
		var count = 0;
		$(".t_attractionsbox_position").animate({"left":direc*width},500)
	}

})
