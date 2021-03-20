$(document).ready(function () {

  $('input[name=selecionado]').change(function () {
    switch ($(this).val()) {
      case "01":
        $('#tela1').css('background', 'url(../assets/week02/01.png)');
        $('label').removeClass('Oselecionado');
        $('#label_01').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Ryu');
        break;
      case "02":
        $('#tela1').css('background', 'url(../assets/week02/02.png)')
        $('label').removeClass('Oselecionado');
        $('#label_02').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Chun-li');
        break;
      case "03":
        $('#tela1').css('background', 'url(../assets/week02/03.png)')
        $('label').removeClass('Oselecionado');
        $('#label_03').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Guile');
        break;
      case "04":
        $('#tela1').css('background', 'url(../assets/week02/04.png)')
        $('label').removeClass('Oselecionado');
        $('#label_04').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Dhalsim');
        break;
      case "05":
        $('#tela1').css('background', 'url(../assets/week02/05.png)')
        $('label').removeClass('Oselecionado');
        $('#label_05').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Poison');
        break;
      case "06":
        $('#tela1').css('background', 'url(../assets/week02/06.png)')
        $('label').removeClass('Oselecionado');
        $('#label_06').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('M. Bison');
        break;
      case "07":
        $('#tela1').css('background', 'url(../assets/week02/07.png)')
        $('label').removeClass('Oselecionado');
        $('#label_07').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Athena');
        break;
      case "08":
        $('#tela1').css('background', 'url(../assets/week02/08.png)')
        $('label').removeClass('Oselecionado');
        $('#label_08').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Benimaru');
        break;
      case "09":
        $('#tela1').css('background', 'url(../assets/week02/09.png)')
        $('label').removeClass('Oselecionado');
        $('#label_09').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Kula');
        break;
      case "10":
        $('#tela1').css('background', 'url(../assets/week02/10.png)')
        $('label').removeClass('Oselecionado');
        $('#label_10').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Iori');
        break;
      case "11":
        $('#tela1').css('background', 'url(../assets/week02/11.png)')
        $('label').removeClass('Oselecionado');
        $('#label_11').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Mary');
        break;
      case "12":
        $('#tela1').css('background', 'url(../assets/week02/12.png)');
        $('label').removeClass('Oselecionado');
        $('#label_12').addClass('Oselecionado');
        $('.nomeSelecionado p').text('');
        $('.nomeSelecionado p').text('Choi');
        break;
      default:
      // code block
    }
  });

});