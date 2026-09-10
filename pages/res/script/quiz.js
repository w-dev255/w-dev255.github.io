document.body.style.backgroundColor = 'black';

let box = document.createElement('div');
box.id = 'retro_box';
box.style.border = '2px solid green';
document.body.appendChild(box);

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
choose.style.border = '3px solid green';
choose.textContent = 'start';
choose.style.color = 'green';
choose.style.backgroundColor = 'black';
choose.style.fontFamily = 'monospace';
document.body.appendChild(choose);

choose.onclick = () => {
	choose.remove();

	let msg = document.createElement('p');
	msg.style.color = 'green';
	msg.style.fontFamily = 'monospace';
	msg.textContent = questions["0"];

	let innerbox = document.createElement('div');
	innerbox.class = 'retro_box';
	innerbox.style.border = '2px solid green';
	box.appendChild(innerbox);
	innerbox.appendChild(msg);

	let textbox = document.createElement('textarea');
	textbox.style.border = '3px solid green';
	textbox.style.backgroundColor = 'black';
	textbox.style.color = 'green';
	textbox.style.fontFamily = 'monospace';
	textbox.class = 'area';

	let submit_button = document.createElement('button');
	submit_button.style.border = '3px solid green';
	submit_button.style.backgroundColor = 'black';
	submit_button.style.color = 'green';
	submit_button.style.fontFamily = 'monospace';
	submit_button.textContent = 'submit';

	box.appendChild(textbox);
	box.appendChild(submit_button);

	submit_button.addEventListener('hadler' => {
		if (textbox.value === responses["0"]) {
			let success_innerbox = document.createElement('div');
			success_innerbox.style.border = '3px solid green';
			success_innerbox.class = 'retro_box';
			document.body.appendChild(success_innerbox);
			box.appendChild(success_innerbox);

			let success_msg = document.createElement('p');
			success_msg.style.color = green;
			success_msg.style.fontFamily = 'monospace';
			success_msg.textContent = 'Questa è la risposta corretta.';

			document.body.appendChild(success_msg);

			success_innerbox.appendChild(success_msg);
		}
	}
}

