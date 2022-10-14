function Heap() {
	setTimeComplexities("N log N", "N log N", "N log N");
	setSpaceComplexity(1);
	c_delay = 0;
	heap_sort();
	enable_buttons();
}
function heap_sort() {
	for (var i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
		max_heapify(arraySize, i);
	}
	for (var i = arraySize - 1; i > 0; i--) {
		swap(0, i);
		div_update(divs[i], div_sizes[i], "green"); //Color update
		div_update(divs[i], div_sizes[i], "orange"); //Color update
		max_heapify(i, 0);
		div_update(divs[i], div_sizes[i], "skyblue"); //Color update
		div_update(divs[i], div_sizes[i], "green"); //Color update
	}
	div_update(divs[i], div_sizes[i], "green"); //Color update
}

function swap(i, j) {
	div_update(divs[i], div_sizes[i], "red"); //Color update
	div_update(divs[j], div_sizes[j], "red"); //Color update
	var temp = div_sizes[i];
	div_sizes[i] = div_sizes[j];
	div_sizes[j] = temp;
	div_update(divs[i], div_sizes[i], "red"); //Height update
	div_update(divs[j], div_sizes[j], "red"); //Height update
	div_update(divs[i], div_sizes[i], "skyblue"); //Color update
	div_update(divs[j], div_sizes[j], "skyblue"); //Color update
}

function max_heapify(n, i) {
	var largest = i;
	var l = 2 * i + 1;
	var r = 2 * i + 2;

	if (l < n && div_sizes[l] > div_sizes[largest]) {
		if (largest != i) {
			div_update(divs[largest], div_sizes[largest], "skyblue"); //Color update
		}
		largest = l;
		div_update(divs[largest], div_sizes[largest], "red"); //Color update
	}

	if (r < n && div_sizes[r] > div_sizes[largest]) {
		if (largest != i) {
			div_update(divs[largest], div_sizes[largest], "skyblue"); //Color update
		}

		largest = r;
		div_update(divs[largest], div_sizes[largest], "red"); //Color update
	}

	if (largest != i) {
		swap(i, largest);
		max_heapify(n, largest);
	}
}
