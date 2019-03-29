
	
var countDownDateForEnglish1st = new Date("April 06,2019 10:00:00").getTime();

var x = setInterval(function(){

var now = new Date().getTime();

var distance = countDownDateForEnglish1st - now;

var days = Math.floor(distance/(1000*60*60*24));

var hours = Math.floor((distance%(1000*60*60*24)) / (1000*60*60));

var minutes = Math.floor((distance%(1000*60*60)) / (1000*60));

var seconds = Math.floor((distance%(1000*60)) / 1000);


document.getElementById("English1st").innerHTML = days+"d "+hours+"h "+minutes+"m "+seconds+"s" ;


if (distance<0){
	clearInterval(x);

	document.getElementById("English1st").innerHTML = "EXPIRED" ;
}

},1000);

		