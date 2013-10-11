$(function(){
	initEvent();
	setInterval("fun();",3000);
});

function initEvent(){
    $("#videolist li a").hover(function(){
    	$(this).children("p").css("color","#ff6f3d");
    },function(){
    	$(this).children("p").css("color","#656d78");
    });

    $("#videolist li a").hover(function(){
    	$(this).find("span").css("background-position","0 -36px");
    	$(".play1").css("background-position","-36px -36px");
    },function(){
    	$(this).find("span").css("background-position","0 0");
    	$(".play1").css("background-position","-36px 0");
    });

}


var curIndex = 1;
function fun(){
	$(".black").css("background-image","url(images/mitv"+curIndex+".jpg)");
	//$(".black").stop().animate({"background-image","url(images/mitv"+curIndex+".jpg)"});
	curIndex = curIndex % 6 + 1;
}