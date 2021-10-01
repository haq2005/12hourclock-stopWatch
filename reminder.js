function myClock(){
	let hour = new Date().getHours()
	let minutes = new Date().getMinutes()
	let seconds = new Date().getSeconds()
	let latin = "A.M"
	if(hour>12){
		hour = hour-12
		latin = "P.M"
	}
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('Minutes').innerHTML = minutes
	document.getElementById('seconds').innerHTML = seconds
	document.getElementById('latin').innerHTML = latin

}
setInterval(myClock,1000)
//part-2
let min = 0;
let sec = 0;
let milli=0;
let interval;
//onstart
function watchStart(){
	interval = setInterval(stopWatch,10)
}
//onstop
function watchStop(){
	clearInterval(interval)
}
//reset
function watchReset(){
	
	min = 0;
	sec = 0;
	milli = 0;
	clearInterval(stopWatch)
	document.getElementById('milli').innerHTML = milli
	document.getElementById('second').innerHTML = sec
	document.getElementById('Minute').innerHTML = min

}
//Main function
function stopWatch(){
	milli++
	if(milli<9){
		document.getElementById('milli').innerHTML = milli
	}
	if(milli>=9){
		document.getElementById('milli').innerHTML = milli
	}
	if(milli>99){
		milli = 0;
		sec++;
		document.getElementById('milli').innerHTML = milli
		document.getElementById('second').innerHTML = sec
	}
	if (sec>59){
		sec =0
		min++
		document.getElementById('Minute').innerHTML = min
	}
}