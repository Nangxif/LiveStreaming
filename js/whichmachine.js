window.onload=function(){ 
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		loadCss("./css/mobile.css",function(){
			document.getElementById("mobile").style.display="block";
			var mobileimg=["./images/mobile/icon1.png","./images/mobile/icon2.png","./images/mobile/icon3.png","./images/mobile/pad1.png","./images/mobile/pad2.png","./images/mobile/pad3.png","./images/mobile/pad4.png"]
			var img=document.getElementsByClassName('mobileimg');
			for(var j=0;j<img.length;j++){
				img[j].setAttribute("src",mobileimg[j]);
			}
			var jscript=document.createElement("script");
		    jscript.setAttribute("src","./js/index.js");
		    document.getElementsByTagName("html")[0].appendChild(jscript);
		});
	} else {
		loadCss("./css/index.css",function(){
			document.getElementById("pc").style.display="block";
			var pcimg=["./images/pc/icon1.png","./images/pc/icon2.png","./images/pc/icon3.png","./images/pc/pad1.png","./images/pc/pad2.png","./images/pc/pad3.png","./images/pc/pad4.png"]
			var img=document.getElementsByClassName('pcimg');
			for(var i=0;i<img.length;i++){
				img[i].setAttribute("src",pcimg[i]);
			}
			var jscripts=document.createElement("script");
		    jscripts.setAttribute("src","./js/index.js");
		    document.getElementsByTagName("html")[0].appendChild(jscripts);
		});
	}
	function loadCss(src,fn){
    	var node=document.createElement('link');
    	node.rel='stylesheet';
    	node.href=src;
    	document.head.insertBefore(node,document.head.firstChild);
    	if(node.attachEvent){
    		node.attachEvent('onload', function(){fn(null,node)});
    	}else{
		   setTimeout(function() {
	         poll(node, fn);
	       }, 0); // for cache
    	}
    	function poll(node,callback){
		    var isLoaded = false;
		    if(/webkit/i.test(navigator.userAgent)) {//webkit
	        	if (node['sheet']) {
	        		isLoaded = true;
	      		}
		    }else if(node['sheet']){// for Firefox
		    	try{
		        	if (node['sheet'].cssRules) {
		          		isLoaded = true;
		        	}
		      	}catch(ex){
		        	// NS_ERROR_DOM_SECURITY_ERR
			        if (ex.code === 1000) {
			         	isLoaded = true;
			        }
			    }
		    }
		    if(isLoaded){
		    	setTimeout(function(){
		    		callback(null,node);
		    	},1);
		    }else{
		    	setTimeout(function(){
		    		poll(node,callback);
		    	},10);
		    }
    	}
    	node.onLoad=function(){
    		fn(null,node);
    	}
    }
}