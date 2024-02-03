const hexbutton = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyBtn = document.querySelector('.Copy-hex-color');
const rgbCopyColor = document.querySelector('.Copy-rgb-color');
// create random hex color

hexbutton.addEventListener('click', () => {
	let characterSet = '0123456789ABCDF';
	let hexColorOutput = '';
	for (let i = 0, characterSetLength = characterSet.length; i < 6; ++i) {
		hexColorOutput += characterSet.charAt(
			Math.floor(Math.random() * characterSetLength),
		);
	}
	hexColorValue.textContent = `#${hexColorOutput}`;
	hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
});

// rgb color generator

const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getBlueInputRange = document.querySelector('#blue');
const getGreenInputRange = document.querySelector('#green');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbColorValue = document.querySelector('.rgb-color-value');
rgbBtn.addEventListener('click', () => {
	let extractRedValue = getBlueInputRange.value;
	let extractGreenValue = getGreenInputRange.value;
	let extractBlueValue = getBlueInputRange.value;
	rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
	rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});

function copyHexToClipBoard() {
	navigator.clipboard.writeText(hexColorValue.textContent);
}

hexCopyBtn.addEventListener('click', copyHexToClipBoard);
function copyRgbToClipBoard() {
	navigator.clipboard.writeText(rgbColorValue.textContent);
}

rgbBtn.addEventListener('click', copyRgbToClipBoard);
