const path = {
	"0": "pages/c.html",
	"1": "pages/tools.html",
	"2": "pages/music.html"
};

let input = document.getElementById("search");

input.addEventListener("input", () => {
	let buffer = input.value

	if (buffer === "C") {
		window.location.href = path["0"];
	}
	if (buffer === "Tools") {
		window.location.href = path["1"];
	}
	if (buffer == "Music") {
		window.location.href = path["2"];
	}
});

