function runCode() {
	const html = document.getElementById('htmlCode').value;
	const css = `<style>${document.getElementById('cssCode').value}</style>`;
	const js = `<script>${document.getElementById('jsCode').value}<\/script>`;
	const output = document.getElementById('output');

	output.srcdoc = html + css + js;
}

function copyCode(id, button) {
	const textArea = document.getElementById(id);
	if (!textArea) return;

	navigator.clipboard
		.writeText(textArea.value)
		.then(() => {
			const originalText = button.textContent;
			button.textContent = 'Copied!';
			setTimeout(() => {
				button.textContent = originalText;
			}, 1000);
		})
		.catch((err) => {
			console.error('Failed to copy text: ', err);
		});
}
