document.body.style.backgroundColor = 'black';
document.body.style.border = '6px solid green';
document.body.style.padding = '3px';

class retroBox extends HTMLDivElement {
	constructor() {
		super();
		this.style.border = '3px solid green';
		this.style.padding = '3px';
		this.className = 'retro_box';
	}
}
customElements.define('retro-box', retroBox, { extends: 'div' });

class retroMsg extends HTMLParagraphElement {
	constructor() {
		super();
		this.style.color = 'green';
		this.style.fontFamily = 'monospace';
	}
}
customElements.define('retro-msg', retroMsg, { extends: 'p' });

class retroButton extends HTMLButtonElement {
	constructor() {
		super();
		this.style.border = '3px solid green';
		this.style.padding = '6px';
		this.style.backgroundColor = 'black';
		this.style.fontFamily = 'monospace';
		this.style.color = 'green';
		this.style.width = '50px';
		this.style.height = '25px';
	}
}
customElements.define('retro-button', retroButton, { extends: 'button' });

class retroTextbox extends HTMLTextAreaElement {
	constructor() {
		super();
		this.style.border = '3px solid green';
		this.style.backgroundColor = 'black';
		this.style.padding = '6px';
		this.style.color = 'green';
		this.style.fontFamily = 'monospace';
	}
}
customElements.define('retro-textbox', retroTextbox, { extends: 'textarea' });

let box = new retroBox();
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

let choose = new retroButton();
document.body.appendChild(choose);

choose.onclick = () => {
	choose.remove();

	let msg = new retroMsg();
	msg.textContent = questions["0"];

	let innerbox = new retroBox();

	box.appendChild(innerbox);

	innerbox.appendChild(msg);

	let textbox = document.createElement('textarea');
	textbox.className = 'area';
	textbox.style.border = '3px solid green';
	textbox.style.backgroundColor = 'black';
	textbox.style.color = 'green';
	textbox.style.fontFamily = 'monospace';
	textbox.style.width = '50px';
	textbox.style.height = '25px';
	textbox.style.padding = '3px';

	let submit_button = document.createElement('button');
	submit_button.style.border = '3px solid green';
	submit_button.style.backgroundColor = 'black';
	submit_button.style.color = 'green';
	submit_button.style.fontFamily = 'monospace';
	submit_button.style.width = '75px';
	submit_button.style.height = '37px';
	submit_button.style.padding = '3px';
	submit_button.textContent = 'submit';

	innerbox.appendChild(textbox);
	textbox.after(submit_button);

	submit_button.addEventListener('click', () => {
		if (textbox.value.trim().toLowerCase() === responses["0"].trim().toLowerCase()) {
			if (!box.querySelector('.success')) {
				let success_innerbox = document.createElement('div');
				success_innerbox.style.border = '3px solid green';
				success_innerbox.className = 'success';
				box.appendChild(success_innerbox);

				let success_msg = document.createElement('p');
				success_msg.style.color = 'green';
				success_msg.style.fontFamily = 'monospace';
				success_msg.textContent = 'Questa è la risposta corretta.';

				success_innerbox.appendChild(success_msg);
			}
		}
	});
};

