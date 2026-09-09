const subject = {
	"0": "elettrotecnica"
};

let choose = document.createElement('button');
choose.textContent = '...';
choose.style.color = 'green';
choose.style.backgroundColor = 'black';
choose.style.fontFamily = 'monospace';
document.body.appendChild(choose);

choose.onclick = () => {
	let msg = document.createElement('p');
	msg.style.color = 'green';
	msg.style.fontFamily = 'monospace';
	msg.textContent = 'Un messaggio verde.';
	document.body.appendChild(msg);
}

