$(function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	var prenum=0,nextnum=0,originLength,lineH;
	$(window).on('resize',function(){
		lineH=$(".poxs").height();
	})
	Jump();
	var timer=setInterval(function(){
		Jump();
	},4000);
	function Jump(){
		prenum=nextnum;
		$.get("http://api.double-teacher.dream.cn/v2/other/ordercount", { "province": "广东省", "city": "珠海市" }, function (result) {
            nextnum=result.F_order_count;
            originLength=prenum.toString().length;
			var nextnumArr=nextnum.toString().split("");
			if(originLength!=nextnum.toString().length){
				$("#people,#peoples").empty();
				for(var i=0;i<nextnum.toString().length;i++){
					var html=$("<div class='pox'><div class='poxs'><div class='poxsList'>0123456789</div></div></div>");
					$("#people,#peoples").append(html);
					lineH=$(".poxs").height();
					$('#people>.pox').eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*lineH)+'px'});
					$("#peoples>.pox").eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*0.6*(document.documentElement.clientWidth / 7.5))+'px'});
				}
			}else{
				lineH=$(".poxs").height();
				for(var j=0;j<nextnum.toString().length;j++){
					$('#people>.pox').eq(j).find(".poxsList").animate({'top':(-nextnumArr[j]*lineH)+'px'});
					$("#peoples>.pox").eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*0.6*(document.documentElement.clientWidth / 7.5))+'px'});
				}
			}
        });
		// nextnum=Math.floor(Math.random()*1800000)+1000000;
  //       originLength=prenum.toString().length;
		// var nextnumArr=nextnum.toString().split("");
		// if(originLength!=nextnum.toString().length){
		// 	$("#people").empty();
		// 	for(var i=0;i<nextnum.toString().length;i++){
		// 		var html=$("<div class='pox'><div class='poxs'><div class='poxsList'>0123456789</div></div></div>");
		// 		$("#people").append(html);
		// 		$('#people>.pox').eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*lineH)+'px'});
		// 	}
		// 	lineH=$(".poxs").height();
		// }else{
		// 	for(var j=0;j<nextnum.toString().length;j++){
		// 		$('#people>.pox').eq(j).find(".poxsList").animate({'top':(-nextnumArr[j]*lineH)+'px'});
		// 	}
		// }
	}
	
	
})