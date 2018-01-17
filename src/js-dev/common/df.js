mui.init({
	swipeBack: true //启用右滑关闭功能
});


//页脚链接跳转
$(".mui-bar.mui-bar-tab").on("tap",".mui-tab-item", function() {

	window.location.href = $(this).attr("href");

});

//兼容mobile
$("head meta").each(function() {

	var metaVal = $(this).attr("name");
	if(metaVal === "viewport") {
		$(this).attr("content", "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no");
	}
});

// ajax 页脚模板
var footerUrl = $(".index-footer").attr("data-url") || "footer.html";
$.get(footerUrl, function(html) {

	$(".index-footer").html(html);
	$(".index-footer").find(".mui-tab-item").removeClass("mui-active");

	var id = $(".index-footer").attr("data-active") || 1;

	$(".index-footer").find(".mui-tab-item").eq(id - 1).addClass("mui-active");

});

$(function(){
		// 图片加载失败
		$('img').each(function() {
			var error = false;
			if(!this.complete) {
				error = true;
			}
			if(typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) {
				error = true;
			}
			if(error) {

				$(this).on("error",function() {
					$(this).attr("src", "images/home/no-img.jpg");
					$(this).off('error');
				});
			}
		});
	
})




