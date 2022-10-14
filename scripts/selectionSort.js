function SelectionSort() {
	setTimeComplexities("N^2", "N^2", "N^2");
	setSpaceComplexity(1);
	c_delay = 0;
	for (var i = 0; i < arraySize - 1; i++) {
		div_update(divs[i], div_sizes[i], "red"); //Color update
		index_min = i;
		for (var j = i + 1; j < arraySize; j++) {
			div_update(divs[j], div_sizes[j], "orange"); //Color update

			if (div_sizes[j] < div_sizes[index_min]) {
				if (index_min != i) {
					div_update(divs[index_min], div_sizes[index_min], "skyblue"); //Color update
				}
				index_min = j;
				div_update(divs[index_min], div_sizes[index_min], "red"); //Color update
			} else {
				div_update(divs[j], div_sizes[j], "skyblue"); //Color update
			}
		}
		if (index_min != i) {
			var temp = div_sizes[index_min];
			div_sizes[index_min] = div_sizes[i];
			div_sizes[i] = temp;

			div_update(divs[index_min], div_sizes[index_min], "red"); //Height update
			div_update(divs[i], div_sizes[i], "red"); //Height update
			div_update(divs[index_min], div_sizes[index_min], "skyblue"); //Color update
		}
		div_update(divs[i], div_sizes[i], "green"); //Color update
	}
	div_update(divs[i], div_sizes[i], "green"); //Color update
	enable_buttons();
}
