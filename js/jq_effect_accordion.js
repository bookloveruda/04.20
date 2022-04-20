'use strict';

///////////////////////////////////////////////////////////////
// 아코디언

const menuLi = $('.menu>ul>li');



menuLi.on('mouseenter', function (e) {

  // 여러번 되면
  e.preventDefault();
  e.stopPropagation();

  // // this사용할 수 있다
  // console.log($(this));

  // // $(this).find('ul.sub');
  // console.log($(this).find('ul.sub'));

  // const ulSub = $(this).find('ul.sub');

  // // ///////////////
  // ulSub.slideDown();
  
  // // this말고 (나말고) 나머지들 = siblings
  // // $(this).siblings()
  // // console.log($(this).siblings());
  // console.log($(this).find('ul.sub'));
  // console.log($(this).siblings().find('ul.sub'));

  // ///////////////////////
  // $(this).siblings().find('ul.sub').slideUp();

  //////////////////////////////////////////////////////////
  // Toggle
  // 닫혔으면 열리고,  열려 있으면 닫아라
  $(this).find('ul.sub').slideToggle();
  
});



menuLi.on('mouseleave', function (e) {
  e.preventDefault();
  e.stopPropagation();
  
  // const ulSub = $(this).find('ul.sub');
  // ulSub.slideUp();
  
  //////////////////////////////////////////////////////////
  // Toggle
  $(this).find('ul.sub').slideToggle();

});


////////////////////////////////////////////////////////////////////////////////
// menu의 sub의 또 sub2 나오도록 


$('ul.sub>li').on('mouseover',function(e){

  e.preventDefault();
  e.stopPropagation();

  console.log($(this));
  // $(this).find('ul.sub2').slideToggle();
  
  $(this).find('ul.sub2').slideDown();
  // $(this).find('ul.sub2').fadeIn();

  // $(this).siblings().find('ul.sub2').hide();
  $(this).siblings().find('ul.sub2').slideUp();
});


$('ul.sub>li').on('mouseleave',function(e){

  e.preventDefault();
  e.stopPropagation();

  console.log($(this));
  // $(this).find('ul.sub2').slideToggle();
  
  $(this).find('ul.sub2').slideUp();
  // $(this).find('ul.sub2').fadeIn();

});