var arraySizeInput = document.getElementById("array-size-input");
var arraySize = arraySizeInput.value;
var generateArrayButton = document.getElementById("generate-array-button");
var inp_aspeed = document.getElementById("sorting-speed");
var div_sizes = [];
var divs = [];
var margin_size;
var arrayContainer = document.getElementById("array-container");
var visualize = document.getElementById("visualize-button");
var alertToast = document.getElementById("alert-toast");
var notAvailableToast = document.getElementById("not-available-toast");

//Selection of algorithm using dropdown
var algorithmSelectionField = document.getElementById("algorithm-selection-field");
var selectedAlgorithm = document.getElementById("selected-algorithm");
var algorithmNamesListItems = document.getElementsByClassName("algorithm-names-list-item");
var algorithmNamesList = document.getElementById("algorithm-names-list");
var dropdownArrowIcon = document.getElementById("dropdown-arrow-icon");
dropdownArrowIcon.classList.toggle("rotate-180");

algorithmSelectionField.onclick = function () {
	algorithmNamesList.classList.toggle("invisible");
	dropdownArrowIcon.classList.toggle("rotate-180");
};

for (let index = 0; index < algorithmNamesListItems.length; index++) {
	const algorithmNamesListItem = algorithmNamesListItems[index];
	algorithmNamesListItem.onclick = function () {
		selectedAlgorithm.innerHTML = this.textContent;
		algorithmNamesList.classList.add("invisible");
		dropdownArrowIcon.classList.remove("rotate-180");
	};
}

//Array generation and updation.

generateArrayButton.addEventListener("click", generate_array);
arraySizeInput.addEventListener("input", update_array_size);

function generate_array() {
	arrayContainer.innerHTML = "";
	for (var i = 0; i < arraySize; i++) {
		div_sizes[i] = Math.floor(Math.random() * 0.5 * (arraySizeInput.max - arraySizeInput.min)) + 10;
		divs[i] = document.createElement("div");
		arrayContainer.appendChild(divs[i]);
		margin_size = 0.1;
		divs[i].style = " margin:0% " + margin_size + "%; background-color:skyblue; width:" + (100 / arraySize - 2 * margin_size) + "%; height:" + div_sizes[i] + "%;";
	}
	visualize.addEventListener("click", runalgo);
}

function update_array_size() {
	arraySize = arraySizeInput.value;
	generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.

visualize.addEventListener("click", runalgo);

function enable_buttons() {
	visualize.addEventListener("click", runalgo);
	arraySizeInput.disabled = false;
	generateArrayButton.disabled = false;
	inp_aspeed.disabled = false;
}

function disable_buttons() {
	// visualize.removeEventListener("click", runalgo);
}

var showAlertTimeoutID = null;
var showAlertIntervalID = null;

function showAlert() {
	alertToast.classList.remove("invisible");
	alertToast.style.opacity = 1;
	if (showAlertIntervalID != null || showAlertTimeoutID != null) {
		alertToast.style.opacity = 1;
		clearInterval(showAlertIntervalID);
		clearTimeout(showAlertTimeoutID);
	}
	showAlertIntervalID = setTimeout(() => {
		showAlertIntervalID = setInterval(() => {
			if (alertToast.style.opacity > 0) {
				alertToast.style.opacity = alertToast.style.opacity - 0.01;
			} else {
				alertToast.classList.add("invisible");
				clearInterval(showAlertIntervalID);
			}
		}, 20);
	}, 2000);
}


showNotAvailableIntervalID = null;
showNotAvailableTimeoutID = null;
function showNotAvailable() {
	notAvailableToast.classList.remove("invisible");
	notAvailableToast.style.opacity = 1;
	if (showNotAvailableIntervalID != null || showNotAvailableTimeoutID != null) {
		notAvailableToast.style.opacity = 1;
		clearInterval(showNotAvailableIntervalID);
		clearTimeout(showNotAvailableTimeoutID);
	}
	showNotAvailableIntervalID = setTimeout(() => {
		showNotAvailableIntervalID = setInterval(() => {
			if (notAvailableToast.style.opacity > 0) {
				notAvailableToast.style.opacity = notAvailableToast.style.opacity - 0.01;
			} else {
				notAvailableToast.classList.add("invisible");
				clearInterval(showNotAvailableIntervalID);
			}
		}, 20);
	}, 2000);
}

function runalgo() {
	disable_buttons();
	var selectedAlgorithmName = selectedAlgorithm.innerHTML.trim();
	switch (selectedAlgorithmName) {
		case "Bubble Sort":
			Bubble();
			break;
		case "Selection Sort":
			SelectionSort();
			break;
		case "Insertion Sort":
			Insertion();
			break;
		case "Merge Sort":
			Merge();
			break;
		case "Quick Sort":
			Quick();
			break;
		case "Heap Sort":
			Heap();
			break;
		case "Radix Sort":
			showNotAvailable();
			// Radix();
			break;
		case "Counting Sort":
			showNotAvailable();
			// Counting();
			break;
		case "Bucket Sort":
			showNotAvailable();
			// Bucket();
			break;
		default:
			showAlert();
			break;
	}
}
