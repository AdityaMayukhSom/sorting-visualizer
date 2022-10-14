//We only have to change background-color and height of the sorting element.
var speed = 1000;
inp_aspeed.addEventListener("input", vis_speed);
function vis_speed() {
	var array_speed = inp_aspeed.value;
	speed = Math.pow(10, array_speed);
	delay_time = 10000 / (Math.floor(arraySize / 10) * speed); //Decrease numerator to increase speed.
}

var delay_time = 10000 / (Math.floor(arraySize / 10) * speed); //Decrease numerator to increase speed.
var c_delay = 0; //This is updated on every div change so that visualization is visible.

function div_update(cont, height, color) {
	window.setTimeout(function () {
		cont.style = " margin:0% " + margin_size + "%; width:" + (100 / arraySize - 2 * margin_size) + "%; height:" + height + "%; background-color:" + color + ";";
	}, (c_delay = c_delay + delay_time));
}
