$(document).ready(function () {
  $('.naoLogar').click(function () {
    return false;
  });

  var input01 = 0;
  var input02 = 0;

  $('#inputUser').keyup(function () {
    if ($('#inputUser').val() == "") {
      input01 = 0;
    } else {
      input01 = 1;
    }

    if (input01 == 1 && input02 == 1) {
      $('#btnLogar').removeClass('naoLogar');
    } else {
      $('#btnLogar').addClass('naoLogar');
    }
  });
  $('#inputPass').keyup(function () {
    if ($('#inputPass').val() == "") {
      input02 = 0;
    } else {
      input02 = 1;
    }

    if (input01 == 1 && input02 == 1) {
      $('#btnLogar').removeClass('naoLogar');
    } else {
      $('#btnLogar').addClass('naoLogar');
    }
  });


  /*ABRIR E FECHAR MODAL*/
  $('#abrirModal').click(function () {
    $('.modalConfig').fadeIn();
    return false;
  });
  $('.oBotaoFechar').click(function () {
    $('.modalConfig').fadeOut();
  });
  $('.oBotaoFechar a').click(function () {
    $('.modalConfig').fadeOut();
    return false;
  });



});