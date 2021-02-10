let saveFile = () => {
	const name = document.getElementBuId('txtName')
	const email = document.getElementBuId('txtEmail')
	const password = document.getElementBuId('txtPassword')
}

let data = 
	'\r Name: ' + name.value +'\r\n' +
	'\r Email: ' + email.value + '\r\n' +
	'\r Password' + password.value + '\r\n';


const textToBlob = new Blob([data], { type: 'text/plain'});
const sFileName = formData.txt;

let newLink = document.createElement("a");
newLink.download = sFileName;

if (window.webkitURL != null) {
	newLink.href = window.webkitURL.createObjectURL(textToBlob);
}
else {
	newLink.href = window.URL.createObjectURL(textToBlob);
	newLink.style.display = "none";
	document.body.appendChild(newLink);
}
