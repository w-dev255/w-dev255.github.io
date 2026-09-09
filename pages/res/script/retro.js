const divs = document.querySelectorAll('.retro');

divs.forEach(div => {
	div.querySelectorAll('*').forEach(child => {
		child.style.fontFamily = 'Courier New, monospace';
	});
});
