document.body.style.backgroundColor = 'black';

const command = [];
const output = [];

let entry = document.createElement('p');
entry.textContent = '~#';
entry.style.color = 'green';
entry.style.fontFamily = 'monospace';

let commandArea = document.createElement('textarea');
commandArea.style.border = "none";
commandArea.style.color = 'green';
commandArea.style.fontFamily = 'monospace';
commandArea.style.width = '100px';
commandArea.style.height = '50px';

commandArea.addEventListener('keydown', (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		command.push(commandArea.value.trim());
	}
});
