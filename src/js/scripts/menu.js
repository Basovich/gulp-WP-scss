$('.js-nav-button').on('click', function(){
  $('.js-burger').toggleClass('active-sandwich');
  // $('body').toggleClass('active-sandwich-mobile');
  // $('.menu').toggle(400);
});

// Плавный скролл к якорю
$(".js-anchor").on("click",function (e) {
  e.preventDefault();

  //Добавляем подчеркивание
  $(".js-anchor").removeClass('active-anchor');
  $(this).addClass('active-anchor');

  //анимируем скролл
  var elem  = $(this).attr('href'),
      top = $(elem).offset().top - 100;

  $('body,html').animate({scrollTop: top}, 800);
});



$(window).on('scroll load', function() {
  $('.js-anchor-block').each(function(){
    var top  = $(this).offset().top - 101,
        bottom = top + $(this).height(),
        scroll = $(window).scrollTop(),
        link = $(this).attr('id');

    if ( scroll > top && scroll < bottom) {
      $(".js-anchor").removeClass('active-anchor');
      $("a[href='#" + link + "']").addClass('active-anchor');
    } else {
      $("a[href='#" + link + "']").removeClass('active-anchor');
    }
  });
});