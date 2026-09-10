const command = [];
const additional = [];
const instruction = [];

let entry = document.createElement('p');
entry.textContent = '~#';
entry.style.color = 'green';
entry.style.fontFamily = 'monospace';

let commandArea = document.createElement('textarea');
commandArea.style.border = "none";
commandArea.style.color = 'green';
commandArea.style.fontFamily = 'monospace';
commandArea.style.width = '50px';
commandArea.style.height = '25px';

commandArea.addEventListener('keydown', (event) => {
	if (event.key === "Enter") {
		command.push(commandArea.value);
	}
});
