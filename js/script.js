

$(function(){
// 弹窗
$('#information').on('click',function(){
	alert('页面正在装修中……')
});

$('#case').on('click',function(){
	alert('页面正在装修中……')
});

$('#about').on('click',function(){
	alert('页面正在装修中……')
});

// 更多
 $(".more").on('click',function(event) {
    var t = $(window).scrollTop();
    $('body,html').animate({'scrollTop':t+540},600)
 });
// 关于我
$('.textsec').hover(function(){
	$('.tip').animate({'top':'25%','opacity':1},600);
},function(){
	if (!$('.tip').is(':animated')) {
		$('.tip').animate({'top':400,'opacity':0},300);
	}
});

// $('.icon-group .container').mouseenter(function(){
//        $(".icon-group .glyphicon").animate({
// 		    left:'250px',
// 		    opacity:'0.5',
// 		    height:'150px',
// 		    width:'150px'
//   		},"slow");
//     });


// $(function() {
//       $(".icon-group").mouseenter(function() {
//           $(".imformation-1").slideDown(600); //隐藏
//       });
//       $(".icon-group").mouseenter(function() {
//           $(".imformation-2").slideDown(600); //隐藏
//       });
//       $(".icon-group").mouseenter(function() {
//           $(".imformation-3").slideDown(600); //隐藏
//       });
//  });


$('.icon-group').mouseenter(function(){
  $('.imformation-1').slideDown('slow')
           .queue(function(next){
    $('.imformation-2').slideDown('slow') 
    .queue(function(next){                //jq的.queue()回调函数可以传递一个参数next函数
           $('.imformation-3').slideDown('slow') 
           })     //，在结尾处调用这个可以再连缀执行列队动画。
  })
})



$(window).scroll(function() {
    if ($(window).scrollTop() > 700)
        $('div.go-top').slideDown('slow');
    else
        $('div.go-top').slideUp('slow'); 
    });
    $('div.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });










})


