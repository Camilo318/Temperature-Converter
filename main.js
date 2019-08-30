let celciusIn = document.querySelector('#celcius > input');
let fahrenheitIn = document.querySelector('#fahrenheit > input');
let kelvinIn = document.querySelector('#kelvin > input');

celciusIn.addEventListener('input', converter);







function converter(){
	let cTemp = parseFloat(celciusIn.value);
	let fTemp = (cTemp * (9/5)) + 32;
	let kTemp = cTemp + 273.15;
	fahrenheitIn.value = fTemp;
	kelvinIn.value = kTemp;
}