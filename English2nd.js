
	
var countDownDateForEnglish2nd = new Date("April 08,2019 10:00:00").getTime();

var x = setInterval(function(){

var now = new Date().getTime();

var distance = countDownDateForEnglish2nd - now;

var days = Math.floor(distance/(1000*60*60*24));

var hours = Math.floor((distance%(1000*60*60*24)) / (1000*60*60));

var minutes = Math.floor((distance%(1000*60*60)) / (1000*60));

var seconds = Math.floor((distance%(1000*60)) / 1000);


document.getElementById("English2nd").innerHTML = days+"d "+hours+"h "+minutes+"m "+seconds+"s" ;


if (distance<0){
	clearInterval(x);

	document.getElementById("English2nd").innerHTML = "EXPIRED" ;
}

},1000);

		