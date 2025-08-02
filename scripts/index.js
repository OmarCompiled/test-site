const clock = document.getElementById('clock');
// very Simple Clock :)
async function updateClock() {
	let currentDate    = new Date();
	let currentHours   = currentDate.getHours().toString().padStart(2, "0");
	let currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
	// using toString() because someone at ECMA had trouble deciding return types :/
	let currentSeconds = currentDate.getSeconds().toString().padStart(2, "0");
	let currentTime    = `${currentHours}:${currentMinutes}:${currentSeconds}`;
	clock.innerHTML = currentTime;	
}

updateClock();
setInterval(updateClock, 1000);
