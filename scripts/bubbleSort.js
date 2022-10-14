function Bubble() {
	setTimeComplexities("N^2", "N^2", "N");
	setSpaceComplexity(1);
	c_delay = 0;
	for (var i = 0; i < arraySize - 1; i++) {
		for (var j = 0; j < arraySize - i - 1; j++) {
			div_update(divs[j], div_sizes[j], "orange"); //Color update

			if (div_sizes[j] > div_sizes[j + 1]) {
				div_update(divs[j], div_sizes[j], "red"); //Color update
				div_update(divs[j + 1], div_sizes[j + 1], "red"); //Color update

				var temp = div_sizes[j];
				div_sizes[j] = div_sizes[j + 1];
				div_sizes[j + 1] = temp;

				div_update(divs[j], div_sizes[j], "red"); //Height update
				div_update(divs[j + 1], div_sizes[j + 1], "red"); //Height update
			}
			div_update(divs[j], div_sizes[j], "skyblue"); //Color updat
		}
		div_update(divs[j], div_sizes[j], "green"); //Color update
	}
	div_update(divs[0], div_sizes[0], "green"); //Color update
	enable_buttons();
}
