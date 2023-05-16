$(window).scroll(function() {
  if ($(this).scrollTop() < 600) {
      $('.astronomy').fadeIn();
   }
  else {
    $('.astronomy').fadeOut();
   }
});
$(window).ready(function() {
  if ($(this).scrollTop() < 600) {
      $('.astronomy').fadeIn();
   }
  else {
    $('.astronomy').fadeOut();
   }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
      $('.big').animate({
    		'fontSize': '12rem'
    });
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
      $('.small').animate({
    		'fontSize': '3rem'
    });
  }
});