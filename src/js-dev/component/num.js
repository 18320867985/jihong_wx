	
	/*
	 * 数字框组件start
	 * 事件：number_click
	 *
	 * 点击事件
		$(".number").on("number_click",function(event,element){			
			//element 当前点击的元素	
			var p=$(element).parents(".number");
			alert($(p).find(".num").val());
								
		});
	 * */
	
	;(function($){
		
		//minus
		$(".minus").on("tap",function(e){
				e.stopPropagation();
				e.preventDefault();
				
			var p=$(this).parents(".number");
	
			//步长
			var step=Number($(".num",p).attr("data-step"));
				step=window.isNaN(step)?1:step;
				
			//最大值
//			var max=Number($(".num",p).attr("data-max"));
//				max=window.isNaN(max)?9999:max;
			//最小值
			var min=Number($(".num",p).attr("data-min"));
				min=window.isNaN(min)?0:min;
	
			var v=Number($(".num",p).val());
				v=window.isNaN(v)?min:v;
				
				//计算
					v=v>min?v-step:min; 
					
					if(v<=min){
						v=min;
					}
					
				$(".num",p).val(v);
		
				//点击触发自定义事件
				$(this).trigger("number_click",[this]);
				
			});
			
		//plus
		$(".plus").on("tap",function(e){
				e.stopPropagation();
				e.preventDefault();
				var p=$(this).parents(".number");
		
		//步长
			var step=Number($(".num",p).attr("data-step"));
				step=window.isNaN(step)?1:step;
				
			//最大值
			var max=Number($(".num",p).attr("data-max"));
				max=window.isNaN(max)?9999:max;
		//最小值
			var min=Number($(".num",p).attr("data-min"));
				min=window.isNaN(min)?0:min;
	
			var v=Number($(".num",p).val());
				v=window.isNaN(v)?min:v;
				
		
			//计算
				v=v<max?v+step:max; 
					
				if(v>=max){
				v=max;
				}
				
				
			$(".num",p).val(v);
				//点击触发自定义事件
				$(this).trigger("number_click",[this]);
			
			
		});
		
		
})(window.jQuery||window.Zepto);
		
	/*****数字框组件end******/