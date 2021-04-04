$(document).ready(function () {
  $('.menu a:nth-of-type(1)').hover(function () {
    $('.mega').css('margin-top', '-68px').css('margin-bottom', '0px');
  });
  $('.menu a:nth-of-type(2)').hover(function () {
    $('.mega').css('margin-top', '0px').css('margin-bottom', '0px');
  });
  $('.menu a:nth-of-type(3)').hover(function () {
    $('.mega').css('margin-bottom', '-65px').css('margin-top', '0px');
  });

  $('.menu a:nth-of-type(1)').click(function () {
    $(this).css('transition', '0.3s').css('background-position-x', '160px');
    $('.mega').css('background-image', 'url(../assets/week04/02.png)');
    setTimeout(function () {
      $('.mega').css('background-image', 'url(../assets/week04/01.png)');
      $('.menu a:nth-of-type(1)').css('transition', '0.0s').css('background-position-x', '-63px');
      //your code to be executed after 1 seconds
    }, 1000);
    return false
  });
  $('.menu a:nth-of-type(2)').click(function () {
    $(this).css('transition', '0.3s').css('background-position-x', '160px');
    $('.mega').css('background-image', 'url(../assets/week04/02.png)');
    setTimeout(function () {
      $('.mega').css('background-image', 'url(../assets/week04/01.png)');
      $('.menu a:nth-of-type(2)').css('transition', '0.0s').css('background-position-x', '-63px');
      //your code to be executed after 1 seconds
    }, 1000);
    return false
  });
  $('.menu a:nth-of-type(3)').click(function () {
    $(this).css('transition', '0.3s').css('background-position-x', '160px');
    $('.mega').css('background-image', 'url(../assets/week04/02.png)');
    setTimeout(function () {
      $('.mega').css('background-image', 'url(../assets/week04/01.png)');
      $('.menu a:nth-of-type(3)').css('transition', '0.0s').css('background-position-x', '-63px');
      //your code to be executed after 1 seconds
    }, 1000);
    return false
  });
});