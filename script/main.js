import Decimal from "./modules/converter/decimal/Decimal.js";
import Binary from './modules/converter/binary/Binary.js';
import Octal from './modules/converter/octal/Octal.js';
import Hex from './modules/converter/hex/Hex.js'

import Addition from "./modules/calculator/addition/Addition.js";

const inputs = document.querySelectorAll('.converter>input');
const inputDec = document.querySelector("#Dec"),
  inputBin = document.querySelector("#Bin"),
  inputOct = document.querySelector("#Oct"),
  inputHex = document.querySelector("#Hex");

const selectedNotation = document.querySelector('#notation'),
  inputTerms = document.querySelectorAll(".calculater > input"),
  answerSumm = document.querySelector('.sum');

// ===========================================================================

inputDec.addEventListener("input", () => {
  const decValue = +inputDec.value;
  inputBin.value = Decimal(decValue, 2);
  inputOct.value = Decimal(decValue, 8);
  inputHex.value = Decimal(decValue, 16);
});
inputBin.addEventListener("input", () => {
  const binValue = inputBin.value;
  inputDec.value = Binary(binValue, 10);
  inputOct.value = Binary(binValue, 8);
  inputHex.value = Binary(binValue, 16);
});
inputOct.addEventListener("input", () => {
  const octValue = inputOct.value;
  inputDec.value = Octal(octValue, 10);
  inputBin.value = Octal(octValue, 2);
  inputHex.value = Octal(octValue, 16);
});
inputHex.addEventListener("input", () => {
  const hexValue = inputHex.value;
  inputDec.value = Hex(hexValue, 10);
  inputBin.value = Hex(hexValue, 2);
  inputOct.value = Hex(hexValue, 8);
});

inputs.forEach(input => {
	input.addEventListener('focus', () => {
		inputs.forEach(input => {
			input.value = '';
		});
	});
});

// ===========================================================================

inputTerms.forEach(input => {
	input.addEventListener('input', () => {
		answerSumm.textContent = `Result: ${Addition(inputTerms[0].value, inputTerms[1].value, selectedNotation.value)}`;
	});	
})

selectedNotation.addEventListener('change', () => {
	answerSumm.textContent = `Result: ${Addition(inputTerms[0].value, inputTerms[1].value, selectedNotation.value)}`;
})
