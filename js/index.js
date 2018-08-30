$(function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	//报名人数
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
		// nextnum=Math.floor(Math.random()*1800000)+1000000;
  //       originLength=prenum.toString().length;
		// var nextnumArr=nextnum.toString().split("");
		// if(originLength!=nextnum.toString().length){
		// 	$("#people,#peoples").empty();
		// 	for(var i=0;i<nextnum.toString().length;i++){
		// 		var html=$("<div class='pox'><div class='poxs'><div class='poxsList'>0123456789</div></div></div>");
		// 		$("#people,#peoples").append(html);
		// 		lineH=$(".poxs").height();
		// 		$('#people>.pox').eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*lineH)+'px'});
		// 		$("#peoples>.pox").eq(i).find(".poxsList").animate({'top':(-nextnumArr[i]*30)+'px'});
		// 	}
		// }else{
		// 	lineH=$(".poxs").height();
		// 	for(var j=0;j<nextnum.toString().length;j++){
		// 		$('#people>.pox').eq(j).find(".poxsList").animate({'top':(-nextnumArr[j]*lineH)+'px'});
		// 		$("#peoples>.pox").eq(j).find(".poxsList").animate({'top':(-nextnumArr[j]*30)+'px'});
		// 	}
		// }
	}
	//视频数据
	var video={
		"chinese":{
			"level1":[],
			"level2":[],
			"level3":[{
				"className":"作文悬念设置法",
				"teacher":"张赫",
				"link":"./video/Chinese/level3/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c31"
			},{
				"className":"理解词义的方法",
				"teacher":"张思灜",
				"link":"./video/Chinese/level3/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c32"
			}],
			"level4":[{
				"className":"明确文章表达方式",
				"teacher":"任悦",
				"link":"./video/Chinese/level4/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c41"
			}],
			"level5":[{
				"className":"写人叙事文章阅读",
				"teacher":"程可新",
				"link":"./video/Chinese/level5/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c51"
			}],
			"level6":[{
				"className":"写景状物散文阅读",
				"teacher":"曹茜",
				"link":"./video/Chinese/level6/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c61"
			}],
			"level7":[{
				"className":"高频考点精讲——人物形象分析及描写",
				"teacher":"叶地凤",
				"link":"./video/Chinese/level7/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c71"
			}],
			"level8":[{
				"className":"高频考点精讲——题目作用及含义",
				"teacher":"曹云霞",
				"link":"./video/Chinese/level8/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c81"
			}],
			"level9":[{
				"className":"高频考点精讲——小说专题",
				"teacher":"李维",
				"link":"./video/Chinese/level9/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"c91"
			}]
		},
		"math":{
			"level1":[{
				"className":"认识图形",
				"teacher":"蒲姜旭",
				"link":"./video/Math/level1/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m11"
			}],
			"level2":[{
				"className":"长度单位",
				"teacher":"梅天焓",
				"link":"./video/Math/level2/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m21"
			}],
			"level3":[{
				"className":"周期问题初识",
				"teacher":"李琳",
				"link":"./video/Math/level3/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m31"
			},{
				"className":"万以内加、减秘籍",
				"teacher":"国永",
				"link":"./video/Math/level3/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m32"
			}],
			"level4":[{
				"className":"乘法原理",
				"teacher":"董博聪",
				"link":"./video/Math/level4/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m41"
			},{
				"className":"年月日的秘密",
				"teacher":"施玥",
				"link":"./video/Math/level4/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m42"
			}],
			"level5":[{
				"className":"与体积有关的计算",
				"teacher":"张昊宇",
				"link":"./video/Math/level5/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m51"
			}],
			"level6":[{
				"className":"浓度问题",
				"teacher":"徐元圆",
				"link":"./video/Math/level6/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m61"
			},{
				"className":"公式类计算",
				"teacher":"鲁曦",
				"link":"./video/Math/level6/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m62"
			}],
			"level7":[{
				"className":"有理数与数轴",
				"teacher":"薄婷婷",
				"link":"./video/Math/level7/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m71"
			}],
			"level8":[{
				"className":"全等三角形",
				"teacher":"贾子豪",
				"link":"./video/Math/level8/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m81"
			}],
			"level9":[{
				"className":"数与式",
				"teacher":"于妍",
				"link":"./video/Math/level9/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"m91"
			}]
		},
		"english":{
			"level1":[],
			"level2":[],
			"level3":[{
				"className":"My dog is brown",
				"teacher":"张旭",
				"link":"./video/English/level3/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e31"
			},{
				"className":"The Barbecue",
				"teacher":"韩旭",
				"link":"./video/English/level3/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e32"
			}],
			"level4":[{
				"className":"This is my pet",
				"teacher":"刘晓琳",
				"link":"./video/English/level4/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e41"
			},{
				"className":"The Jumble Sale",
				"teacher":"姜婷",
				"link":"./video/English/level4/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e42"
			}],
			"level5":[{
				"className":"Our apartment",
				"teacher":"王格格",
				"link":"./video/English/level5/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e51"
			},{
				"className":"It's not fair",
				"teacher":"张文婷",
				"link":"./video/English/level5/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e52"
			}],
			"level6":[{
				"className":"Dad's run",
				"teacher":"王耿",
				"link":"./video/English/level6/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e61"
			}],
			"level7":[{
				"className":"完形填空高分秘籍",
				"teacher":"张博",
				"link":"./video/English/level7/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e71"
			}],
			"level8":[{
				"className":"玩转动词不定式",
				"teacher":"王冶",
				"link":"./video/English/level8/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e81"
			}],
			"level9":[{
				"className":"不择手段背单词",
				"teacher":"杨征",
				"link":"./video/English/level9/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"e91"
			}]
		},
		"interest":[
			{
				"className":"奇思妙剪",
				"teacher":"雷泽文",
				"link":"./video/Interest/1.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"i1"
			},
			{
				"className":"解谜火柴棒",
				"teacher":"邱慈霁",
				"link":"./video/Interest/2.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"i2"
			},
			{
				"className":"七彩魔法",
				"teacher":"吴幸晏",
				"link":"./video/Interest/3.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"i3"
			},
			{
				"className":"成语大侦探",
				"teacher":"孙文慧",
				"link":"./video/Interest/4.mp4",
				"pcPicture":"./picture/pc.png",
				"mobilePicture":"./picture/mobile.jpg",
				"id":"i4"
			}
		]
	}
	//控制选择菜单的消失和出现
	var whichClass="语文";
	$(".hasLevel").on("click",function(){
		$(".choosewhich").css("display","block");
		$(".smallitem").slideUp();
		$(".chooselevel").text("一年级");
		$("#chineses,#maths,#englishs,#interests").empty();
		switch($(this).text()){
			case '语文':{
				whichClass="语文";
				if(video.chinese.level1.length>0){
					for(var d=0;d<video.chinese.level1.length;d++){
						var inHtm=$("<div class='detailpic prism-player' data-link='"+video.chinese.level1[d].link+"'><img src='"+video.chinese.level1[d].mobilePicture+"' /><p>《"+video.chinese.level1[d].className+"》——"+video.chinese.level1[d].teacher+"</p></div>");
						$("#chineses").append(inHtm);
					}
				}
				break;
			}
			case '数学':{
				whichClass="数学";
				if(video.math.level1.length>0){
					for(var d=0;d<video.math.level1.length;d++){
						var inHtm=$("<div class='detailpic prism-player' data-link='"+video.math.level1[d].link+"'><img src='"+video.math.level1[d].mobilePicture+"' /><p>《"+video.math.level1[d].className+"》——"+video.math.level1[d].teacher+"</p></div>");
						$("#maths").append(inHtm);
					}
				}
				break;
			}
			case '英语':{
				whichClass="英语";
				if(video.english.level1.length>0){
					for(var d=0;d<video.english.level1.length;d++){
						var inHtm=$("<div class='detailpic prism-player' data-link='"+video.english.level1[d].link+"'><img src='"+video.english.level1[d].mobilePicture+"' /><p>《"+video.english.level1[d].className+"》——"+video.english.level1[d].teacher+"</p></div>");
						$("#englishs").append(inHtm);
					}
				}
				break;
			}
		}
	})
	$(".noLevel").on("click",function(){
		$(".choosewhich").css("display","none");
		$(".smallitem").css("display","none");
		$("#interests").empty();
		for(var d=0;d<video.interest.length;d++){
			var inHtm=$("<div class='detailpic prism-player' data-link='"+video.interest[d].link+"'><img src='"+video.interest[d].mobilePicture+"' /><p>《"+video.interest[d].className+"》——"+video.interest[d].teacher+"</p></div>");
			$("#interests").append(inHtm);
		}
	})
	//控制下拉菜单的下拉和收缩
	$(".chooseicon").on("click",function(){
		if($(".smallitem").css("display")=='block'){
			$(".smallitem").slideUp();
			$(".chooseicon").text("+");
		}else{
			// for(var m=0;m<9;m++){
			// 	if($(".chooselevel").text()!=$(".smallitem>li").eq(m).text()){
			// 		$(".smallitem>li").eq(m).removeClass('itemactive');
			// 	}
			// }
			$(".smallitem").slideDown();
			$(".chooseicon").text("-");
		}
	})
	window.setdata=function(text,level){
		// $(".smallitem>li").eq(level).addClass('itemactive');
		$("#chineses,#maths,#englishs,#interests").empty();
		$(".chooselevel").text(text);
		switch(whichClass){
			case '语文':{
				if(video.chinese[level].length>0){
					for(var d=0;d<video.chinese[level].length;d++){
						var inHtm=$("<div class='detailpic prism-player' data-link='"+video.chinese[level][d].link+"'><img src='"+video.chinese[level][d].mobilePicture+"' /><p>《"+video.chinese[level][d].className+"》——"+video.chinese[level][d].teacher+"</p></div>");
						$("#chineses").append(inHtm);
					}
				}
				break;
			}
			case '数学':{
				if(video.math[level].length>0){
					for(var d=0;d<video.math[level].length;d++){
						var inHtm=$("<div class='detailpic prism-player' data-link='"+video.math[level][d].link+"'><img src='"+video.math[level][d].mobilePicture+"' /><p>《"+video.math[level][d].className+"》——"+video.math[level][d].teacher+"</p></div>");
						$("#maths").append(inHtm);
					}
				}
				break;
			}
			case '英语':{
				if(video.english[level].length>0){
					for(var d=0;d<video.english[level].length;d++){
						var inHtm=$("<div class='detailpic prism-player' data-link='"+video.english[level][d].link+"'><img src='"+video.english[level][d].mobilePicture+"' /><p>《"+video.english[level][d].className+"》——"+video.english[level][d].teacher+"</p></div>");
						$("#englishs").append(inHtm);
					}
				}
				$(".prism-player").on("click",function(){
					$("#fadebg").css("display","block");
					var id=$(this).attr("id");
					var player = new Aliplayer({
			        id: "fadebg",
			        width: '100%',
			        autoplay: true,
			        //支持播放地址播放,此播放优先级最高
			        source : $(this).attr("data-link"),
			        },function(player){
			            console.log('播放器创建好了。')
			       });
					$(".prism-player video,.prism-player .prism-controlbar,.prism-player .play-apply-animation,.prism-player .prism-big-play-btn").on("click",function(event){
						event.stopPropagation();
					})
					$("#fadebg").on("click",function(){
						player.dispose(); //销毁
    					//$('#fadebg').empty(); //id为html里指定的播放器的容器id
    					// $("#fadebg").css("display","none");
    					$("body").append($("<div id='fadebg'></div>"));
					})
				})
				break;
			}
		}
	}
	$(".prism-player").on("click",function(){
		var id=$(this).attr("id");
		var player = new Aliplayer({
	        id: "fadebg",
	        width: '100%',
	        autoplay: true,
	        //支持播放地址播放,此播放优先级最高
	        source : $(this).attr("data-link"),
	        },function(player){
	            console.log('播放器创建好了。')
	       });
	})


})