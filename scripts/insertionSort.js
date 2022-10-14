function Insertion() {
	setTimeComplexities("N^2", "N^2", "N");
	setSpaceComplexity(1);
	c_delay = 0;

	for (var j = 0; j < arraySize; j++) {
		div_update(divs[j], div_sizes[j], "orange"); //Color update

		var key = div_sizes[j];
		var i = j - 1;
		while (i >= 0 && div_sizes[i] > key) {
			div_update(divs[i], div_sizes[i], "red"); //Color update
			div_update(divs[i + 1], div_sizes[i + 1], "red"); //Color update

			div_sizes[i + 1] = div_sizes[i];

			div_update(divs[i], div_sizes[i], "red"); //Height update
			div_update(divs[i + 1], div_sizes[i + 1], "red"); //Height update

			div_update(divs[i], div_sizes[i], "skyblue"); //Color update
			if (i == j - 1) {
				div_update(divs[i + 1], div_sizes[i + 1], "yellow"); //Color update
			} else {
				div_update(divs[i + 1], div_sizes[i + 1], "skyblue"); //Color update
			}
			i -= 1;
		}
		div_sizes[i + 1] = key;

		for (var t = 0; t < j; t++) {
			div_update(divs[t], div_sizes[t], "green"); //Color update
		}
	}
	div_update(divs[j - 1], div_sizes[j - 1], "green"); //Color update

	enable_buttons();
}
