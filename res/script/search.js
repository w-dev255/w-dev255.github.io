const path = {
	"0": "res/pages/C.html"
};

let input = document.getElementById("search");

input.addEventListener("input", () => {
	let buffer = input.value

	if (buffer === "C") {
		window.location.href = path["0"];
	}
});

