/*************Usando JQuery****************/

$(document).ready(function() {
 // Variables Globales 
  var $textAreaPress = $('#tweet-box');
  var $container = $('#container-tweets');
  var $max = 140;
  
  // Evento
  $('#btn').on('click', function() {
      if ($textAreaPress.val()) {
      // $(this).prop('disabled', false);
      var $containerText = $('<p/>');
      $containerText.text($textAreaPress.val());
      $container.prepend($containerText);
      $textAreaPress.val('');
    }
  });

  $('#tweet-box').on('keyup', function(){
    if($textAreaPress.val()) {
      var $total = $max - $textAreaPress.val().length;
      $('#characters').text($total);
    }
  });



  /********Validar el boton para habilitar y deshabilitarlo************/
    // function habilitarbtn() {
    //     btn.removeAttr('disabled');
    //   }
    // }
    // habilitarbtn();
    
});



// 
// function validar(){
//   if(document.getElementById('tweet-box').value === ''){
//     btn.disabled=true;

//   } else {
//     btn.disabled=false;
//   }
// }

// /*************VERSION 0.0.2****************/
// // Evento de click al boton v1
// btn.addEventListener('click', twittear);
// // Evento de keyup al boton v2
// textAreaPress.addEventListener('keyup',validar);
// validar();
// textAreaPress.addEventListener('keyup',countString);
// function countString(){
//   var lengthText = 140 - (document.getElementById('tweet-box').value.length);
//   document.getElementById('characters').textContent=lengthText;
// }

// /*Ajusta la hora del Tweet*/ 
// function time() {
// 	var date = new Date();
// 	var hours = date.getHours();
// 	var min = date.getMinutes();
// 	var time;
// 	if (min < 10) {
// 		min = '0' + min;
// 	}
// 	if (hours >= 12 && hours <= 24) {
// 		time = hours + ':' + min + ' PM';
// 	} else {
// 		time = hours + ':' + min + ' AM';
// 	}
// 	return time;
// }

/****************VERSION 0.0.3***********************/
