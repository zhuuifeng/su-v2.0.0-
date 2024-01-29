$(function(){
    $(".scroll ul li").each(function(){
        $(this).click(function(){
     $(".scroll ul li").removeClass("selected");
      $(this).addClass("selected");
   })
   });
    $(function(){
	    $(".head").addClass("showdiv");
	    setTimeout(function(){
	        $(".head").addClass("s");
	    },500);
	});	
	/*新闻tab切换*/
	/* $(".posta").sudyTab({
		handle:".tit .title",
		content:".con .boxs,.more_btn .more_text",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
	});	
	$(".postb").sudyTab({
		handle:".tit .title",
		content:".con .boxs,.more_btn .more_text",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
	}); 
var oH = $(".main1 .news_boxb").height();
$(".main1 .news_boxa").height(oH-1);
$(window).resize(function(){
var oH = $(".main1 .news_boxb").height();
$(".main1 .news_boxa").height(oH-1);
});	
	$(".postc").sudyTab({
		handle:".tit .title",
		content:".con .boxs,.more_btn",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
	});	*/	
	/*友情链接下拉*/
	/* $(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	}); 
*/

	var os = function(){  
		var ua = navigator.userAgent,  
		isWindowsPhone = /(?:Windows Phone)/.test(ua),  
		isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,   
		isAndroid = /(?:Android)/.test(ua),   
		isFireFox = /(?:Firefox)/.test(ua),   
		isChrome = /(?:Chrome|CriOS)/.test(ua),  
		isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),  
		isPhone = /(?:iPhone)/.test(ua) && !isTablet,  
		isPc = !isPhone && !isAndroid && !isSymbian;  
		return {  
			isTablet: isTablet,  
			isPhone: isPhone,  
			isAndroid : isAndroid,  
			isPc : isPc  
		};  
	}();
	/*
var videoclip = '';
var videopath = '';
	var player = '',story_player = '';
	
	$(".video_link").hover(function(){
		videoclip = $(this).attr('href');
		$(this).attr({"href":"#video_box"});
	},function(){
		$(this).attr({"href":""+videoclip+""});
	});
	
	$(".video_link").fancybox({
		'padding':0,
		'hideOnContentClick':false,
		'overlayOpacity' :.6,
		//'zoomSpeedOut'   :400,
		'easingIn'		 : 'easeOutBack',
		'easingOut'		 : 'easeInBack',
		'callbackOnShow' :function(){
			var player = videojs("fancy_div",{
				muted: false,
				controls : true, 
				//height:300, 
				//width:300,
				loop : true,
				fluid : true
			}).ready(function(){
				var clipwidth = document.body.clientWidth -60;
				var clipheight= 520;
				var pos = $.fn.fancybox.getViewport();
				if(os.isAndroid || os.isPhone || os.isTablet){
					$("#fancy_outer").css({width:clipwidth});
					$("#fancy_outer").css('left', ((clipwidth + 36) > pos[0] ? pos[2] : pos[2] + Math.round((pos[0] - clipwidth	- 36)	/ 2)));
					$("#fancy_outer").css('top',  ((clipheight + 50) > pos[1] ? pos[3] : pos[3] + Math.round((pos[1] - clipheight - 50)	/ 2)));
				}
				var myPlayer = this;
				myPlayer.src(videopath+videoclip+'');
				myPlayer.play();
			});
			
			$('#fancy_close').click(function(){
				var player = videojs("fancy_div",{}).ready(function(){
					this.dispose();
				});
				$("#fancy_div").remove();
			});
		},
		'callbackOnClose':function(){
			$("#fancy_div_api").remove();
		}
	});
	

*/

	var first=0;
 


$("#banner .focus ul").slick({
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnDotsHover:true,
    pauseOnFocus:false,
    speed:600,
    dots:true,
    arrows:true,
	speed:1000,
    slide:"li",
			slidesToShow: 1,  
			slidesToScroll: 1

});


/* $(".post-52 ul").slick({
    autoplay:true,
    autoplaySpeed:2500,
    pauseOnDotsHover:true,
    pauseOnFocus:false,
    dots:false,
    arrows:false,
speed:1000,
    slide:"li",
			slidesToShow: 1,  
			slidesToScroll: 1,
init:function(){
$(".main5 .post-52 .news_list.u3").click(function(){
$(".post-52 ul").slickPause();
});
$(".fancy_wrap").click(function(){
$(".post-52 ul").slickPlay();
});
}

}); */

$(".bb").click(function(){  
    $(".body_b").addClass("showdiv");//.focus();
    $(".header").addClass("mobile");
    //first=1;
    setTimeout(function(){
        $(".head").removeClass("showdiv");//.addClass("leave");
        $(".main1").addClass("showdiv");
    },500);
})
$(".head").mousewheel(function(event, delta, deltaX, deltaY){
        if(delta<0){
            $(".bb").click();
        }
        console.log("1");
});
function showlayer(e,fun,type){
	if(!fun){fun=function(){};}	
	if($(e).find(".sbar").length>0){
		$(e).find(".sbar").mCustomScrollbar();
	}
	$(e).addClass("showdiv");
	fun();	
}
function hidelayer(e,fun,type){
	if(!fun){fun=function(){};}
	$(e).removeClass("showdiv");
	if(typeof(player)!="undefined"){player.pause();}
	fun();	
	if($(e).find(".playing").length>0){
		var v=$(e).find(".playing")[0];
		v.pause();
		$(e).find(".playing").removeClass("playing");
	}
}
    

// $(".home6 .frame").slick({
// 	autoplay:true,
// 	autoplaySpeed:6000,
// 	speed:600,
// 	dots:false,
// 	arrows:false
// });

// $(".home7 .focus1 .frame").slick({
// 	autoplay:true,
// 	autoplaySpeed:6000,
// 	speed:600,
// 	dots:true,
// 	arrows:false,
// 	appendDots:".home7 .focus1 .navg",
// 	customPaging: function(slider, i) {	 
// 		return i + 1;
// 	},
// });
// $(".home10 .focus1 .frame").slick({
// 	autoplay:true,
// 	autoplaySpeed:6000,
// 	speed:600,
// 	dots:true,
// 	arrows:false,
// 	appendDots:".home10 .focus1 .navg",
// 	customPaging: function(slider, i) {	 
// 		return i + 1;
// 	},
// });






// $(".home1 .td").each(function(index, element) {
//     var s=GetRandomNum(5,15);
//     $(this).css("transition-delay",s*0.1+"s");
//     $(this).find(".inner").css("transition-delay",(s+3)*0.1+"s");
// });


// setInterval(function(){
//     $(".home1 .td:has(strong)").removeClass("s");
//     var s=GetRandomNum(0,$(".home1 .td:has(strong)").length);
//     $(".home1 .td:has(strong)").eq(s).addClass("s");
// },5000);



// $(".td9,.td12,.td13,.td16,.td22").each(function(index, element) {
//     var s=GetRandomNum(5,15);
//     $(this).css("animation-delay",s*0.1+"s");
// });
// $(".home4 .d").each(function(index, element) {
//     var s=GetRandomNum(1,7);
//     $(this).css("transition-delay",s*0.1+"s");
//     $(this).find("span").css("transition-delay",(s+3)*0.1+"s");
// });


// $(".home2 .item").click(function(){
//     $(this).siblings().removeClass("now");
//     $(this).addClass("now");
//     $(".home2 .pic .d").removeClass("s");
//     $(".home2 .pic .d").eq($(this).index()).addClass("s");
// });
// $(".home2 .item").eq(0).click();

// tabdiv(".home3 .title .fz40",".home3 .list","click",3);
// $(".home3 .title .fz40:first").click();



// $(".rb").click(function(){
//     setTimeout(function(){
//         $(".ll").click();
//     },1100);
//     if($(".body_b").hasClass("showdiv")){
//         $(".body_r").removeClass("showdiv");
//     }
//     else{
//         $(".bb").click();
//         $(".body_b").css("z-index",3);
//         $(".body_r").css("z-index",1);
//     }
// });

// $(".body_b").scrollTop(0);


// var sw_k=1;
// document.onkeydown=function(event){
//     var e = event || window.event || arguments.callee.caller.arguments[0];
//     if((e.keyCode==40 || e.keyCode==32 || e.keyCode==34) && $(".body_home").hasClass("showdiv")){
//         sw_k=0;
//         $(".bb").click();
//         $(".body_b").animate({scrollTop:0},10);
//         $(".body_b").focus();
//         setTimeout(function(){sw_k=1;},1000);
//     }
//     if((e.keyCode==38 || e.keyCode==33) && $(".body_b").hasClass("showdiv") && $(".body_b").scrollTop()==0){
//         sw_k=0;
//         $(".body_home").addClass("showdiv").focus();
//         setTimeout(function(){
// 			$(".banner .slick-active .a1").focus();
// 		},500);
//         $(".body_b").removeClass("showdiv");        
//         $(".home5").removeClass("showdiv");
//         if($(".body_b").css("position")=="fixed")$(".header").removeClass("mobile");
//         setTimeout(function(){sw_k=1;},1000);
//     }
//     if((e.keyCode==37 || e.keyCode==38 || e.keyCode==33) && $(".body_r").hasClass("showdiv") && sw==1){
// 		$(".nav_b .list .item.now").prev().click();
// 	}
// 	if((e.keyCode==39 || e.keyCode==40 || e.keyCode==34 || e.keyCode==32) && $(".body_r").hasClass("showdiv") && sw==1){
// 		$(".nav_b .list .item.now").next().click();
// 	}
// }

/* $(window).scroll(function(){
	if($(window).width()<=850){
		if($(window).scrollTop()<50){
			$(".header").removeClass("mobile")
		}
		else{
			$(".header").addClass("mobile")
		}
	}

}); */

// $(".ll").click(function(){
//     $(".body_r").removeClass("showdiv");
//     $(".nav_b").removeClass("showdiv");
//     $(".rr").addClass("showdiv");
//     $(".home").removeClass("lock")
//     setTimeout(function(){      
//         $(".nav_b .item:first").click();
//         $(".home1").removeClass("showdiv");
//         if(!$(".body_b").hasClass("showdiv")){
//             $(".body_home").addClass("showdiv").focus();
//         }
//     },1100);
// });

// var video1=document.getElementById("video1");

// var svgs=[];
// $(".home11 .item svg").each(function(index, element) {
//     var id=$(this).attr("id");
//     svgs[index] = new Vivus(id,{type:'delayed',duration:60});
// });
// var svgs1=[];
// $(".home7 svg").each(function(index, element) {
//     var id=$(this).attr("id");
//     svgs1[id] = new Vivus(id,{type:'delayed',duration:60,start:'autostart'});
// });

// $(".home11 .item").mouseenter(function(){
//         if($(window).width()>=1024){
//             svgs[$(this).index()].reset().play();
//         }
//     }
// );
// $(".home7 .dd").mouseenter(function(){
//         if($(window).width()>=1024){
//             svgs1[$(this).find("svg").attr("id")].reset().play();
//         }
//     }
// )

// $(".home11 .item").mouseenter(
//     function(){     
//         svgs[$(this).index()].reset().play();
//     }
// );
// $(".home7 .dd").mouseenter(
//     function(){
//         svgs1[$(this).find("svg").attr("id")].reset().play();
//     }
// );


$(".body_b").scroll(function(){
    $(".main1,.main2,.main3,.main4,.main5,.main6,.main7").each(function(index, element) {
        var e=$(this);
        var fix=parseInt(e.attr("fix"));
        if(!fix && fix!=0){fix=$(window).height()*6*0.1;}
        else{fix=$(window).height()*fix*0.1;}
        //var h=$(window).height()-$(e).height()>0?$(window).height()-$(e).height():0;
        if($(window).scrollTop()>=$(e).offset().top-fix){
            if(!$(e).hasClass("showdiv")){
                $(e).addClass("showdiv");

            }           
        }
        else{
            if($(e).hasClass("showdiv")){
                $(e).removeClass("showdiv");
                if($(e).hasClass("part1")){
                    $(".home9 .part1").removeClass("s");
                }
            }
        }
        var top = $(".body_b").scrollTop();
        if(top < 1000){
		    $(".scrollto").removeClass("selected");
		    $(".scrollto0").addClass("selected");
		}
		else if(top < 1750){
		    $(".scrollto").removeClass("selected");
		    $(".scrollto1").addClass("selected");
		}
		else if(top < 2345){
		    $(".scrollto").removeClass("selected");
		    $(".scrollto2").addClass("selected");
		}
		else if(top < 3045){
		    $(".scrollto").removeClass("selected");
		    $(".scrollto3").addClass("selected");
		}
		else if(top < 3745){
		    $(".scrollto").removeClass("selected");
		    $(".scrollto4").addClass("selected");
		}
		else if(top < 4500){
		    $(".scrollto").removeClass("selected");
		    $(".scrollto5").addClass("selected");
		}
		else {
		    $(".scrollto").removeClass("selected");
		    $(".scrollto6").addClass("selected");
		}
    });
});

//初始化文字
// function settxt(e){
//     var text=$(e).text();
//     var l=0;
//     var html="";
//     while(l<text.length){       
//         html+="<i>"+text.substr(l,1)+"</i>";
//         l+=1;
//     }   
//     $(e).html(html);    
// }

// $(".home1 .td").each(function(index, element) {
//     settxt($(this).find("strong"));
// });

// var ls=100/$(".home2 .list .item").length;
// $(".home2 .list").mCustomScrollbar({
//   autoDraggerLength: false,  
//   axis: 'x',  
//   scrollbarPosition: 'outside',
//     callbacks:{
//         whileScrolling: function(){
//             //console.log(this.mcs.leftPct)
//             var p=this.mcs.leftPct;
//             $(".home2 .list .item").each(function(index, element) {
//                 if(p>index*ls){
//                     $(this).siblings().removeClass("now");
//                     $(this).addClass("now");
//                 }
//             });
//         }
//     }
// })


// tabdiv(".home8 .l .fz40 a",".home8 .div .list","click",1,300);
// tabdiv(".home8 .l .fz40 a",".home8 .l .a a","click",1,300);
// $(".home8 .l .fz40 a").eq(0).click();

});