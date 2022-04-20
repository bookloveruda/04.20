'use strict';

///////////////////////////////////////////////////////////////
// 마우스 올리면 나타나고, 아웃하면 사라지는..
// show / hide

const gnb = $('.gnb');
const subHeader = $('.sub-header');

// gnb.on('mouseover',function(e){
//   // subHeader.show();
//   // subHeader.show(1000);  //-> 1초동안 나와라
// });

// gnb.on('mouseout',function(e){
//   // subHeader.hide();
//   // subHeader.hide(0);
// });



////////////////////////////////////////////////////////
// span.topArrow  (TOP버튼(누르면 최상단으로 가는..))
// .scrollTop()
// fadeIn / fadeOut / animate


// $('window') // -> 콘솔에 적으면 아래와 같이 나옴
// // S.fn.init [prevObject: S.fn.init(1)]

// $('window').scrollTop() // -> 콘솔에 적으면 아래와 같이 나옴
// // undefined

// // 스크롤 높이 = scrollTop

// 작은따옴표('') 생략 가능
$(window).on('scroll',function(e){

  // 스크롤 Top을 알 수 있따!!!><
  const sTop = $(window).scrollTop();
  console.log(sTop);

  // Q1 : = 
  // 그럼 이걸로 어떤 지점을 넘어서면 
  // .topArrow(누르면 최상단으로 가는..Top버튼)이 나타나도록 할 수 있다.
  // 제이쿼리로 구현해봐라

  // A1 : = 
  if(sTop>300){
    // $('.topArrow').show();
    // $('.topArrow').show(200);
    // 버튼 나타나면 콘솔에 'dd'나타나도록.. 이런것도 있다..그냥..
    // $('.topArrow').show(200,function(){
    //   console.log('dd');
    // });
    
    // 그 자리에서 우아하게 사악 나타남
    $('.topArrow').fadeIn(200);
  }else{
    // $('.topArrow').hide();
    $('.topArrow').fadeOut(200);
  }
});


// Q2 : = 스크롤 TOp을 클릭하면 sTop이 0이 되도록(최상단으로 가도록)하게 
// A2 : = 
$('.topArrow').on('click',function(){
  // $('html,body').animate({scrollTop:0});
  $('html,body').animate({scrollTop:0} , 1000);  //-> 1초동안 찬찬히 올라감
});



////////////////////////////////////////////////////////
// slideDown / slideUp
// 'mouseenter' / 'mouseleave'
// 애니매이션 덜덜덜 여러번 반복 되는 것 고치기 >< 


gnb.on('mouseenter',function(e){
  // slideDown하면 계속 왔다 갔다 한다.
  // function(e) 넣고, console.log(e);
  // e.preventDefault(); 넣어봐라
  console.log(e);
  // e.preventDefault();
  e.stopPropagation();
  // 계속 그런다면 'mouseover'을 -> 'mouseenter'로 바꾸고
  // 'mouseout'을 -> 'mouseleaver'로 바꿔라
  // 그럼 걔 하나만 이벤트가 먹는다
  // 이게 왜 그러냐면 mouseover가 .gnb, ul , li다 먹기 때문에 그런거다 
  // 이벤트 전파가 쭉쭉쭉 계속되기 때문에.. (이벤트 버블링, 캡쳐링)

  subHeader.slideDown();
  
  subHeader.addClass('subAdd');
});

gnb.on('mouseleave',function(e){
  e.stopPropagation();
  subHeader.slideUp();
  subHeader.removeClass('subAdd');
});


////////////////////////////////////////////////////////