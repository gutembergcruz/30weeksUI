$(document).ready(function () {
  $('nav a').mouseenter(function () {
    $(this).append('<img class="cruz" src="assets/week05/cross.png" alt=""></img>')
  });
  $('nav a').mouseout(function () {
    $('.cruz').remove();
  });

  $('.openAside').click(function () {
    $('aside').css('display', 'flex');
    return false;
  });
  $('.closeAside').click(function () {
    $('aside').css('display', 'none');
    return false;
  });
});

{/* <img class="cruz" src="assets/week05/cross.png" alt=""></img> */ }