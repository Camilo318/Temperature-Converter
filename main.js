let celciusIn = document.querySelector('#celcius > input');
let fahrenheitIn = document.querySelector('#fahrenheit > input');
let kelvinIn = document.querySelector('#kelvin > input');

celciusIn.addEventListener('input', celciusConverter);
fahrenheitIn.addEventListener('input', fahConverter);
kelvinIn.addEventListener('input', kelConverter);






function celciusConverter(){
	let cTemp = parseFloat(celciusIn.value);
	let fTemp = (cTemp * (9/5)) + 32;
	let kTemp = cTemp + 273.15;
	fahrenheitIn.value = fTemp;
	kelvinIn.value = kTemp;
}
function fahConverter(){
	let fTemp = parseFloat(fahrenheitIn.value);
	let cTemp = (fTemp - 32) * (5/9);
	let kTemp = (fTemp + 459.67) * (5/9);
	celciusIn.value = cTemp;
	kelvinIn.value = kTemp;
}


function kelConverter(){
	let kTemp = parseFloat(kelvinIn.value);
	let cTemp = kTemp - 273.15;
	let fTemp = (kTemp - 273.15) * (9/5) + 32;

	celciusIn.value = cTemp;
	fahrenheitIn.value = fTemp;
	
	
}
