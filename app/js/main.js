$(function() {

  $('.contacts__list-item--more ul').hide();

  $('.contacts__list-item--more span').on('click', function(){
    // $('.contacts__list-item--more ul').hide(500);
    $(this).parent().toggleClass('active');
    $(this).parent().children('ul').slideToggle(500);
  });


    if ($(document).width() < 600) {
      $('.contacts__cities').hide();
    }


  $('.contacts__content-city').on('click', function () {
    if ($(document).width() < 600) {
      $(this).toggleClass('contacts__content-city--active');
      $('.contacts__cities').slideToggle();
    }
  });



  $('.header__menu-btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active');
  });

  $('.header__close').on('click', function(){
    $('.header__menu').removeClass('header__menu--active');
  });

  // Открытие попапа с формой
  $(document).on('click', '.js-open-pop-up_form', function () {
    $('.pop-up.pop-up_form').addClass('openned');
    $('body').addClass('blocked');
  });

  // Закрытие попапа
  $(document).mouseup(function (e) {
    var div = $(".pop-up form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.pop-up').removeClass('openned');
      $('body').removeClass('blocked');
    }
  });
  $(document).on('click', '.pop-up .close', function () {
    $('.pop-up').removeClass('openned');
    $('body').removeClass('blocked');
  });


  
});