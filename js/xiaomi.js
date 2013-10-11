$(function(){
	initEvent();

	initShow();

	handle = setInterval("fun();",3000);
});

function initEvent(){
	$(".side").hover(function(){
		$(".showlist").show();
	},function(){
		$(".showlist").show();
	});
	$(".showlist").hover(function(){
		$(this).show();
	},function(){
		$(this).show();
	});

	$(".bordershow").hover(function(){
		var w = $(this).width() -10;
		var h = $(this).height() -10;
		$(this).find("div").css({"width":w+"px","height":h+"px", "border":"5px solid #dcdcdc"});
		$(this).find("div").show();
 	},function(){
		$(this).find("div").hide();
	});

	$(".inoutt").focus(function(){
		$(this).css("border-color","#ff6f3d");
		$(this).attr("placeholder","");
	});
}

var curIndex = 1;
function fun(){
	for (var i = 1; i <= 3; i++) {
	    $(".aslide").hide();
	}
	var idd = "#" + curIndex;
    $(idd).show();
    curIndex = curIndex % 3 +1;
}

function initShow(){
    $("#xmslidcon").hover(function(){
    	$(".icons").show();
    	$("#icons1").addClass("addicons1");
    	$("#icons2").addClass("addicons2");
    },function(){
    	$(".icons").hide();
    	$("#icons1").removeClass("addicons1");
    	$("#icons2").removeClass("addicons2");
    });
    $("#icons1").hover(function(){
    	$(this).addClass("addicons01");
    },function(){
    	$(this).removeClass("addicons01");
    });
}