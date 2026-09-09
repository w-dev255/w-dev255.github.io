const subject = {
	"0": "elettrotecnica"
};

const questions = {
	"0": "Come si trova la resistenza con la prima legge di ohm?"
};

const responses = {
	"0": "V / I"
};

let choose = document.createElement('button');
choose.textContent = 'start';
choose.style.color = 'green';
choose.style.backgroundColor = 'black';
choose.style.fontFamily = 'monospace';
document.body.appendChild(choose);

choose.onclick = () => {
	let msg = document.createElement('p');
	msg.style.color = 'green';
	msg.style.fontFamily = 'monospace';
	msg.textContent = questions["0"];
	document.body.appendChild(msg);
	let textbox = document.createElement('textarea');
	textbox.style.border = '3px solid green';
	textbox.style.backgroundColor = 'black';
	textbox.style.color = 'green';
	textbox.style.fontFamily = 'monospace';
	textbox.id = 'area';

	submit_button = document.createElement('button');
	submit_button.style.border = '3px solid green';
	submit_button.style.backgroundColor = 'black';
	submit_button.style.color = 'green';
	submit_button.style.fontFamily = 'monospace';
	submit_button.textContent = 'submit';

	document.body.appendChild(textbox);

	textbox.after(submit_button);
}

