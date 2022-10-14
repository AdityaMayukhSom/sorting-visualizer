const worstTimeComplexityContainer = document.getElementById("worst-time-complexity");
const averageTimeComplexityContainer = document.getElementById("average-time-complexity");
const bestTimeComplexityContainer = document.getElementById("best-time-complexity");
const worstSpaceComplexityContainer = document.getElementById("worst-space-complexity");

function setTimeComplexities(worstComplexity, averageComplexity, bestComplexity) {
	worstTimeComplexityContainer.innerText = `O(${worstComplexity})`;
	averageTimeComplexityContainer.innerText = `Θ(${averageComplexity})`;
	bestTimeComplexityContainer.innerText = `Ω(${bestComplexity})`;
}

function setSpaceComplexity(worstSpaceComplexity) {
	worstSpaceComplexityContainer.innerText = `O(${worstSpaceComplexity})`;
}
