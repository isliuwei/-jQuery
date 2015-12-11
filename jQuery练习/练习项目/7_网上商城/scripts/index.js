// 导航
$('#nav li').hover(function(){
	$('#nav .jnNav').hide();
	$(this).find('.jnNav').show();
},function(){
	$(this).find('.jnNav').hide();
});


// 轮播图
// $('#jnImagelist a').on('mouseover',function(){
// 	$(this).addClass('selected');
// 	$(this).siblings().removeClass('selected');	
// 	var index = $(this).index();
// 	$('#jnImglist img:eq('+index+')').fadeIn().siblings().fadeOut();
// });

var index = 0;
function changeImg(idx){
	$('#jnImagelist a').eq(idx).addClass('selected').siblings().removeClass('selected');	
	$('#jnImglist img').eq(idx).fadeIn().siblings().fadeOut();
}
$('#jnImagelist a').on('mouseover',function(){
	index = $(this).index();
	changeImg(index);	
});

var timer;
function play(){
	timer = setInterval(function(){
		index++;
		if(index == $('#jnImagelist a').length){
			index = 0;
		}
		changeImg(index);	
	},5000);
}

play();

$('#jnImageroll').hover(function(){
	clearInterval(timer);
},function(){
	play();
});


// 链接文字提示
var $tooltip;
$('#jnNoticeInfo a').on('mouseover',function(e){
	myTitle=this.title;
	this.title ="";
	$tooltip = $('<div>'+myTitle+'</div>');
	$tooltip.appendTo($('body')).addClass('link').offset({top: e.pageY+15, left: e.pageX+15}).show('fast');
}).on('mouseout',function(){
	this.title=myTitle;
	$tooltip.remove();
}).on('mousemove',function(e){
	$tooltip.offset({top: e.pageY+15, left: e.pageX+15});
});


// 换肤
$('#skin li').on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	skinName = $(this).attr('id');
	//console.log(skinName);
	//console.log($('#cssfile').attr('href'));
	$('#cssfile').attr('href','styles/skin/'+skinName+'.css');
	
});


//选项卡
// $('#jnBrandTab li').on('click',function(){
// 	$(this).addClass('chos').siblings().removeClass('chos');
// 	//var iLeft = $('#jnBrandList').offset().left;
// 	// var iLeft=0;
// 	//  iLeft= iLeft-780;
// 	// if(iLeft == -2340){
// 	// 	iLeft = 0;
// 	// }
// 	$('#jnBrandList').stop(true,false).animate({ left : '-=780px'},1000);
// });

var picIndex = 0;
$('#jnBrandTab ul li').on('click',function(){
	picIndex = $(this).index();
	changePic(picIndex);	
});

function changePic(idx){
	var iLeft = $('#jnBrandList li').outerWidth()*4;
	// console.log(iLeft);
	$('#jnBrandTab ul li').eq(idx).addClass('chos').siblings().removeClass('chos');
	//$('#jnBrandList').stop(true,false).animate({ left : -iLeft*picIndex},1000);
	if(!$('#jnBrandList').is(':animated')){
		$('#jnBrandList').animate({ left : -iLeft*picIndex },1000);
	}
	// else{
	// 	$('#jnBrandList').stop();
	// }
	// 	$('#jnBrandList').stop(true,false).animate({ left: -iLeft*picIndex },1000);
}

var bandTimer;
function bandPlay(){
	bandTimer = setInterval(function(){
		picIndex++;
		if(picIndex == $('#jnBrandTab').find('li').length){
			picIndex = 0;
		}
		changePic(picIndex);
	},5000);
}

bandPlay();

$('#jnBrand').hover(function(){
	clearInterval(bandTimer);
},function(){
	bandPlay();
});





	









