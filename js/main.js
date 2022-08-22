$(document).ready(function () {

  /* Плавная прокрутка меню */

  $('nav a[href^="#"]').not('.hide').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.menu__mobile .menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
  });

  /* Плавная прокрутка меню для Home & Logo */

  $('nav a.hide').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    return false;
  });

  /* Mobile menu */

  $('.menu__burger').click(function () {
    $('.menu__mobile .menu').toggle(500);
    $(this).toggleClass('close');
  });

});