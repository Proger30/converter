import Decimal from "./modules/converter/decimal/Decimal.js";
import Binary from './modules/converter/binary/Binary.js';
import Octal from './modules/converter/octal/Octal.js';
import Hex from './modules/converter/hex/Hex.js';

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
  	CountingValues.CountingDecValues(inputDec.value);
});
inputBin.addEventListener("input", () => {
	CountingValues.CountingBinValues(inputBin.value);
});
inputOct.addEventListener("input", () => {
	CountingValues.CountingOctValues(inputOct.value);
});
inputHex.addEventListener("input", () => {
  	CountingValues.CountingHexValues(inputHex.value);
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
		CalculatingProcess();
	});
});

selectedNotation.addEventListener('change', () => {
	CalculatingProcess();
});

const CalculatingProcess = () => {
	const value = Addition(inputTerms[0].value, inputTerms[1].value, selectedNotation.value);
	answerSumm.textContent = `Result: ${value}`;
	AdditionValueConversion(value, selectedNotation.value);
};

const AdditionValueConversion = (value, notation) => {
	switch (notation) {
		case 'Dec':
			CountingValues.CountingDecValues(value);
			break;
		case 'Bin':
			CountingValues.CountingBinValues(value);
			break;
		case 'Oct':
			CountingValues.CountingOctValues(value);
			break;
		case 'Hex':
			CountingValues.CountingHexValues(value);
			break;
	};
};

const CountingValues = {

	CountingDecValues (value) {
		inputDec.value = +value;
		inputBin.value = Decimal(+value, 2);
		inputOct.value = Decimal(+value, 8);
		inputHex.value = Decimal(+value, 16);
	},

	CountingBinValues (value) {
		inputDec.value = Binary(value, 10);
		inputBin.value = value;
		inputOct.value = Binary(value, 8);
		inputHex.value = Binary(value, 16);
	},

	CountingOctValues (value) {
		inputDec.value = Octal(value, 10);
		inputBin.value = Octal(value, 2);
		inputOct.value = value;
		inputHex.value = Octal(value, 16);
	},

	CountingHexValues (value) {
		inputBin.value = Hex(value, 2);
		inputDec.value = Hex(value, 10);
		inputOct.value = Hex(value, 8);	
		inputHex.value = value;
	}
};
