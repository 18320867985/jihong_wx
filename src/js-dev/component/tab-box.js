/*
 * 
 * 
 * 		//点击事件
		$(".tab-item").on("tab_select",function(event,element){			
			//element 当前点击的元素	
			
		});
 * 
 * */


+(function($) {

	
	// 选项卡tag-box2 新的
	$(".tab-big .tab-ttl .tab-item").on("click", function(e) {
		
		e.preventDefault();
		var p=$(this).parents(".tab-big");
		p.find(".tab-ttl .tab-item").removeClass("active");
		$(this).addClass("active");

		var target = $(this).attr("data-target");
		$(".tab-content",p).find(".tab-content-item").removeClass("active");
		$(".tab-content",p).find(target).addClass("active");
		
		// 点击触发自定义事件 
		$(this).trigger("tab_select");

	});

})(window.jQuery || window.Zepto)