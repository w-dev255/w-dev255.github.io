document.body.style.backgroundColor = 'black';

const supported_language = ["JavaScript"];

let buffer = [];

let command = [];
let language = [];
let output = [];

let entry = document.createElement('p');
entry.textContent = '~#';
entry.style.color = 'green';
entry.style.fontFamily = 'monospace';
document.body.appendChild(entry);

let commandArea = document.createElement('textarea');
commandArea.style.border = "none";
commandArea.style.color = 'green';
commandArea.style.fontFamily = 'monospace';
commandArea.style.width = '100px';
commandArea.style.height = '50px';
document.body.appendChild(commandArea);

commandArea.addEventListener('keydown', (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		if (commandArea.value.trim().length === 0) {
			return;
		} else {
			buffer.push(commandArea.value.trim());
			commandArea.value = '';
		}
	}
});
