/* header menu slideUp_Down*/ //mouseenter와 mouseleave를 사용해도 된다. 1depth의 li를 선택해야 ul을 선택해야 메뉴창이 유지가 되어서 보여주다가 사라진다. 
$('#nav>.navchild>.first_li').on({
  "mouseover focusin":function(){
  $(this).find("ul").stop().slideDown(500)
},"mouseout":function(){
  $(this).find("ul").stop().slideUp(100)
}
});
//last-child가 this가 된다. 그리고 다 클릭이 되면  parent의ul로 복귀한다.
$('#nav>.navchild>.first_li ul li:last-child').focusout(function(){
  $(this).parent("ul").stop().slideUp(300)
  })

/* 스와이퍼 slider */


/* 850px일 때 메뉴창 띄우기 */
$('.app-btn').on({click:function(){
    $('.bar').toggleClass('add');
    $('.mobile-nav').stop().slideToggle(1500);
}});//여러개 쓸 때 쓰는 방법 , 찍고 옆에 또 쓰고 function쓰면 된다.
// $('.app-btn').click(function(){})하나만 쓸 떄 쓰는 방법


/* swiper 제어 */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});

/* cursor_point_change 마우스모양 */
$('body').css({cursor:'url(./outbackimage/meat1.png),auto'})
$('a').css({cursor:'url(./outbackimage/meat2.png),auto'})
$('a').css({cursor:'url(./outbackimage/meat2.png),auto'})
$('.swiper-button-next').css({cursor:'url(./outbackimage/meat2.png),auto'})
$('.swiper-button-prev').css({cursor:'url(./outbackimage/meat2.png),auto'})
$('.swiper-pagination-bullet').css({cursor:'url(./outbackimage/meat2.png),auto'})
$('.footer3 .footer_wrap .main_footer1 .container .footer-left-menu .family-site select').css({cursor:'url(./outbackimage/meat2.png),auto'})

/* topbutton */
$(document).ready(function(){
  // When the user scrolls down 20px from the top of the document, show the button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  // When the button is clicked, scroll to the top of the document
  $('#topBtn').click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
    return false;
  });
});












