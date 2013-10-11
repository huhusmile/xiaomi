$(function(){
	initEvents();
	initShowlist();
});

function initEvents(){
    $(".txt").click(function(){
    	$(this).attr("value","");
    });

	$(".hdbtnsearch").hover(function(){
		$(".iconsearbg").show();
	},function(){
		$(".iconsearbg").hide();
	});
    
    $(".side").hover(function(){
		$(this).css("background-color","#ed5f30");
		$(".tri").css({" border-color": "transparent transparent #fff","border-style": "solid dashed dashed "});
	},function(){
		$(this).css("background-color","#ff6f3d");
		$(".tri").css({"border-color": "#fff transparent transparent", "border-style": "solid dashed dashed"});
	});

	$(".lnk").hover(function(){
		$(this).css("background-color","#ed5f30");
	},function(){
		$(this).css("background-color","#ff6f3d");
	});

	$(".shop").hover(function(){
		$(this).addClass("shophover");
		$(".minicartlist").show();
	},function(){
		$(this).removeClass("shophover");
		$(".minicartlist").hide();
	});
	$(".minicartlist").hover(function(){
		$(".shop").addClass("shophover");
		$(this).show();
	},function(){
		$(".shop").removeClass("shophover");
		$(this).hide();
	});
}

function initShowlist(){
	$(".side").hover(function(){
		$(".showlist").show();
	},function(){
		$(".showlist").hide();
	});
	$(".showlist").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});

	$(".lists li").hover(function(){
		$(this).css("background-color","#f3fbd7");
	},function(){
		$(this).css("background-color","#fffbea");
	});
}