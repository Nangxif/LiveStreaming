$(function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	//报名人数
	var prenum=0,nextnum=0,originLength,lineH,listWidth;
	//视频滚动菜单的可视区宽度
	listWidth=$(".piccontent").eq(0).width()/3+"px";
	$(".piccontent .videoList .detailpic").css("width",listWidth);
	$(window).on('resize',function(){
		$(".piccontent>.videoList").animate({"left":"0px"});
		lineH=$(".poxs").height();
		if($("#chinese .piccontent").eq(0).width()/3!=0){
			listWidth=$("#chinese .piccontent").eq(0).width()/3+"px";
		}else if($("#math .piccontent").eq(0).width()/3!=0){
			listWidth=$("#math .piccontent").eq(0).width()/3+"px";
		}else if($("#english .piccontent").eq(0).width()/3!=0){
			listWidth=$("#english .piccontent").eq(0).width()/3+"px";
		}else{
			listWidth=$("#interest .piccontent").eq(0).width()/3+"px";
		}
		$(".piccontent .videoList .detailpic").css("width",listWidth);
	})
	Jump();
	var timer=setInterval(function(){
		Jump();
	},10000);
	function Jump(){
		prenum=nextnum;
		$.get("http://api.double-teacher.dream.cn/v2/other/ordercount", { "province": "广东省", "city": "珠海市" }, function (result) {
            nextnum=result.F_order_count;
            originLength=prenum.toString().length;
			var nextnumArr=nextnum.toString().split("");
			if(originLength!=nextnum.toString().length){
				$("#people,#peoples").empty();
				for(var i=0;i<nextnum.toString().length;i++){
					var html;
					if((i+1)%3==1){
						if(i!=nextnum.toString().length-1){
							html =$("<div class='pox'><div class='poxs'><div class='poxsList'>0123456789</div></div></div><span><span>,</span></span>");
						}else{
							html=$("<div class='pox'><div class='poxs'><div class='poxsList'>0123456789</div></div></div>");
						}
					}else{
						html=$("<div class='pox'><div class='poxs'><div class='poxsList'>0123456789</div></div></div>");
					}
					$("#people,#peoples").append(html);
					lineH=$(".poxs").height();
					$('#people>.pox').eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*lineH)+'px'});
					$("#peoples>.pox").eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*30)+'px'});
				}
			}else{
				lineH=$(".poxs").height();
				for(var j=0;j<nextnum.toString().length;j++){
					$('#people>.pox').eq(j).find(".poxsList").animate({'top':(-nextnumArr[j]*lineH)+'px'});
					$("#peoples>.pox").eq(j).find(".poxsList").animate({'top':(-nextnumArr[j]*30)+'px'});
				}
			}
        });
	}
	//视频数据
	var video={}
	$.ajax({
	   url: "http://192.168.24.146:88/LiveStreaming/data.json",
	   type: "GET",
	   dataType: "json", 
	   success: function(data) { 
	       video=data;
	       if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			//控制选择菜单的消失和出现
			var whichClass="chinese";
			sessionStorage.setItem('target',"level3");
			if(video.chinese.level3&&video.chinese.level3.length>0){
				if(video[whichClass].level3.length>0){
					for(var d=0;d<video[whichClass].level3.length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showVideo(\""+video[whichClass].level3[d].vid+"\")'><img src='"+video[whichClass].level3[d].mobilePicture+"' /><p>《"+video[whichClass].level3[d].className+"》——"+video[whichClass].level3[d].teacher+"</p></div>");
						$("#"+whichClass+"s").append(inHtm);
					}
				}
			}
			$(".hasLevel").on("click",function(){
				$(".choosewhich").css("display","block");
				$(".smallitem").slideUp();
				var l=sessionStorage.getItem('target');
				$(".chooselevel").text(["一","二","三","四","五","六","七","八","九"][Number(l.charAt(5))-1]+"年级");
				$(".chooseicon").text("+");
				$("#chineses,#maths,#englishs,#interests").empty();
				whichClass=$(this).data("type");
				if(video[whichClass][l]&&video[whichClass][l].length>0){
					for(var d=0;d<video[whichClass][l].length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showVideo(\""+video[whichClass][l][d].vid+"\")'><img src='"+video[whichClass][l][d].mobilePicture+"' /><p>《"+video[whichClass][l][d].className+"》——"+video[whichClass][l][d].teacher+"</p></div>");
						$("#"+whichClass+"s").append(inHtm);
					}
				}
			})
			$(".noLevel").on("click",function(){
				$(".choosewhich").css("display","none");
				$(".smallitem").css("display","none");
				$("#interests").empty();
				if(video.interest&&video.interest.length>0){
					for(var d=0;d<video.interest.length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showVideo(\""+video.interest[d].vid+"\")'><img src='"+video.interest[d].mobilePicture+"' /><p>《"+video.interest[d].className+"》——"+video.interest[d].teacher+"</p></div>");
						$("#interests").append(inHtm);
					}
				}
			})
			//控制下拉菜单的下拉和收缩
			$(".chooseicon").on("click",function(){
				if($(".smallitem").css("display")=='block'){
					$(".smallitem").slideUp();
					$(".chooseicon").text("+");
				}else{
					$(".smallitem").slideDown();
					$(".chooseicon").text("-");
				}
			})
			window.setdata=function(text,level){
				$("#chineses,#maths,#englishs,#interests").empty();
				$(".chooselevel").text(text);
				$(".smallitem").slideUp();
				$(".chooseicon").text("+");
				sessionStorage.setItem('target',level);
				if(video[whichClass][level]&&video[whichClass][level].length>0){
					for(var d=0;d<video[whichClass][level].length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showVideo(\""+video[whichClass][level][d].vid+"\")'><img src='"+video[whichClass][level][d].mobilePicture+"' /><p>《"+video[whichClass][level][d].className+"》——"+video[whichClass][level][d].teacher+"</p></div>");
						$("#"+whichClass+"s").append(inHtm);
					}
				}
			}
		}else{ //pc端
			//控制选择菜单的消失和出现
			var whichClass="chinese";
			sessionStorage.setItem('target',"level3");
			if(video.chinese.level3&&video.chinese.level3.length>0){
				if(video.chinese.level3.length>3){
					$(".prevpic span,.nextpic span").css("display","block");
					prevnext("chinese",video.chinese.level3);
				}
				$(".prevpic,.piccontent,.nextpic").css("padding-top","37.5038%");
				for(var d=0;d<video.chinese.level3.length;d++){
					var inHtm=$("<div class='detailpic prism-player' onclick='showpcVideo(\""+video.chinese.level3[d].vid+"\")'><img src='"+video.chinese.level3[d].pcPicture+"' /></div>");
					$("#chinese>.piccontent>.videoList").append(inHtm);
				}
			}
			$(".piccontent .videoList .detailpic").css("width",listWidth);
			$(".haveLevel").on("click",function(){
				$(".smallitem").css("display","block");
				$(".prevpic,.piccontent,.nextpic").css("padding-top","0%");
				$(".prevpic span,.nextpic span").unbind("click");//解绑左右按钮
				$(".prevpic span,.nextpic span").css("display","none");
				for(var index=0;index<9;index++){
					$("#pc .smallitem li").eq(index).removeClass("itemactive");
				}
				var l=sessionStorage.getItem('target');
				$("#pc .smallitem li").eq(Number(l.charAt(5))-1).addClass("itemactive");
				$("#chinese .videoList,#math .videoList,#english .videoList,#interest .videoList").empty();
				whichClass=$(this).data("type");
				if(video[whichClass][l]&&video[whichClass][l].length>0){
					if(video[whichClass][l].length>3){
						$(".prevpic span,.nextpic span").css("display","block");
						$(".piccontent .videoList").css("width",listWidth.slice(0,-2)*video[whichClass][l].length+"px");
						prevnext(whichClass,video[whichClass][l]);
					}
					$(".prevpic,.piccontent,.nextpic").css("padding-top","37.5038%");
					for(var d=0;d<video[whichClass][l].length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showpcVideo(\""+video[whichClass][l][d].vid+"\")'><img src='"+video[whichClass][l][d].pcPicture+"' /></div>");
						$("#"+whichClass+">.piccontent>.videoList").append(inHtm);
					}
				}
				$(".piccontent .videoList .detailpic").css("width",listWidth);
			})
			$(".nohaveLevel").on("click",function(){
				$(".smallitem").css("display","none");
				$(".prevpic,.piccontent,.nextpic").css("padding-top","0%");
				$(".prevpic span,.nextpic span").unbind("click");
				$(".prevpic span,.nextpic span").css("display","none");
				$("#chinese .videoList,#math .videoList,#english .videoList,#interest .videoList").empty();
				if(video.interest&&video.interest.length>0){
					if(video.interest.length>3){
						$(".prevpic span,.nextpic span").css("display","block");
						$(".piccontent .videoList").css("width",listWidth.slice(0,-2)*video.interest.length+"px");
						prevnext("interest",video.interest);
					}
					$(".prevpic,.piccontent,.nextpic").css("padding-top","37.5038%");
					for(var d=0;d<video.interest.length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showpcVideo(\""+video.interest[d].vid+"\")'><img src='"+video.interest[d].pcPicture+"' /></div>");
						$("#interest>.piccontent>.videoList").append(inHtm);
					}
				}
				$(".piccontent .videoList .detailpic").css("width",listWidth);
			})

			function prevnext(ele,data){
				$(".prevpic span,.nextpic span").on("click",function(){
					if(!$("#"+ele+">.piccontent>.videoList").is(":animated")){
						if($(this).data("num")==0){
							if(Math.ceil($("#"+ele+">.piccontent>.videoList").css("left").slice(0,-2))<0){
								$("#"+ele+">.piccontent>.videoList").animate({"left":(Number($("#"+ele+">.piccontent>.videoList").css("left").slice(0,-2))+Number(listWidth.slice(0,-2)))+"px"});
							}
						}else{
							if(Math.floor($("#"+ele+">.piccontent>.videoList").css("left").slice(0,-2))>=(3-data.length)*listWidth.slice(0,-2)){
								$("#"+ele+">.piccontent>.videoList").animate({"left":(Number($("#"+ele+">.piccontent>.videoList").css("left").slice(0,-2))-Number(listWidth.slice(0,-2)))+"px"});
							}
						}
					}
				});
			}
			window.data=function(that,text,level){
				for(var index=0;index<9;index++){
					$("#pc .smallitem li").eq(index).removeClass("itemactive");
				}
				sessionStorage.setItem('target',level);
				$(that).addClass("itemactive");
				$(".prevpic,.piccontent,.nextpic").css("padding-top","0%");
				$(".prevpic span,.nextpic span").unbind("click");
				$(".prevpic span,.nextpic span").css("display","none");
				$("#chinese .videoList,#math .videoList,#english .videoList,#interest .videoList").empty();
				if(video[whichClass][level]&&video[whichClass][level].length>0){
					if(video[whichClass][level].length>3){
						$(".prevpic span,.nextpic span").css("display","block");
						$(".piccontent .videoList").css("width",listWidth.slice(0,-2)*video[whichClass][level].length+"px");
						prevnext(whichClass,video[whichClass][level])
					}
					$(".prevpic,.piccontent,.nextpic").css("padding-top","37.5038%");
					for(var d=0;d<video[whichClass][level].length;d++){
						var inHtm=$("<div class='detailpic prism-player' onclick='showpcVideo(\""+video[whichClass][level][d].vid+"\")'><img src='"+video[whichClass][level][d].pcPicture+"' /></div>");
						$("#"+[whichClass]+">.piccontent>.videoList").append(inHtm);
					}
				}
				$(".piccontent .videoList .detailpic").css("width",listWidth);
			}
		}
	   }
	})	
	
	window.showVideo=function(hf){
		$("#fadebg").css("display","block");
		var player = new Aliplayer({
			"id": "fadebg",
			"vid": hf,
			"accessKeyId": AccessKeyId,
			"securityToken": SecurityToken,
			"accessKeySecret": AccessKeySecret,
			"format": "m3u8",
			"mediaType": "video",
			"width": "100%",
			"autoplay": true,
			"isLive": false,
			"rePlay": false,
			"playsinline": true,
			"preload": true,
			"controlBarVisibility": "hover",
			"useH5Prism": true
        },function(player){
            console.log('播放器创建好了。')
       	});
		$("#fadebgclose").on("click",function(){
			player.dispose(); //销毁
			$("#fadebg").remove();
			$("#fadebgclose").unbind("click");
			$("body").append($("<div id='fadebg'><div id='fadebgclose'>×</div></div>"));
		})
	}

	window.showpcVideo=function(hf){
		$("#fadebg").css("display","block");
		var player = new Aliplayer({
	        "id": "videoContent",
			"vid": hf,
			"accessKeyId": AccessKeyId,
			"securityToken": SecurityToken,
			"accessKeySecret": AccessKeySecret,
			"format": "m3u8",
			"mediaType": "video",
			"width": "684px",
			"autoplay": true,
			"isLive": false,
			"rePlay": false,
			"playsinline": true,
			"preload": true,
			"controlBarVisibility": "hover",
			"useH5Prism": true
        },function(player){
            console.log('播放器创建好了。')
       	});
		$("#fadebgclose").on("click",function(){
			player.dispose(); //销毁
			$("#fadebg").remove();
			$("#fadebgclose").unbind("click");
			$("body").append($("<div id='fadebg'><div id='videoContent'><div id='fadebgclose'>×</div></div></div>"));
		})
	}
})