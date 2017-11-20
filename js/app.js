/*************VERSION 0.0.1****************/
//Varibles globales
var btn = document.getElementById('btn');
var textAreaPress= document.getElementById('tweet-box');

function twittear(event){
//prevenir algunas acciones por defecto
  event.preventDefault();
  //Obteniendo el texto del textArea
  var textArea = document.getElementById('tweet-box').value;
  var box = document.createElement('p');
  //Agregando el texto al html
  box.textContent=textArea;
  document.getElementById('container-tweets').appendChild(box);
}

/********Validar el boton para habilitar y deshabilitarlo************/
function validar(){
  if(document.getElementById('tweet-box').value === ''){
    btn.disabled=true;

  } else {
    btn.disabled=false;
  }
}

/*************VERSION 0.0.2****************/
// Evento de click al boton v1
btn.addEventListener('click', twittear);
// Evento de keyup al boton v2
textAreaPress.addEventListener('keyup',validar);
validar();
textAreaPress.addEventListener('keyup',countString);
function countString(){
  var lengthText = 140 - (document.getElementById('tweet-box').value.length);
  document.getElementById('characters').textContent=lengthText;
}

/*Ajusta la hora del Tweet*/ 
function time() {
	var date = new Date();
	var hours = date.getHours();
	var min = date.getMinutes();
	var time;
	if (min < 10) {
		min = '0' + min;
	}
	if (hours >= 12 && hours <= 24) {
		time = hours + ':' + min + ' PM';
	} else {
		time = hours + ':' + min + ' AM';
	}
	return time;
}

/****************VERSION 0.0.3***********************/
