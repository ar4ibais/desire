$(function(){

  $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close')
  });

  $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close')
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.category-living'
    }
  });


});