const TranslationToDecimalAlgorithm = (guessNumber, notation) => {

	let arrResult = [];
	let exponentiation = guessNumber.length - 1;
	
	for( let [i, item] of guessNumber.split('').entries() ) {
		
		if ( notation === 2 && +item > 1 || +item < 0 ) return "Incorrect value";

		if (notation === 16) {
			switch (item.toLowerCase()) {
				case "a":
					item = 10;
					break;
				case "b":
					item = 11;
					break;
				case "c":
					item = 12;
					break;
				case "d":
					item = 13;
					break;
				case "e":
					item = 14;
					break;
				case "f":
					item = 15;
					break;
			}
		}
	
		arrResult[i] = +item * exponFunc(exponentiation, notation);
		exponentiation--;

	};

	const result = arrResult.reduce((a,b)=>a+b);

	return isNaN(result) ? "Incorrect value" : result;
};


const exponFunc = (degree, multiplier) => {

	let result = 1;
	
	for ( let i = 0; i < degree; i++ ) {
		result *= multiplier;
	}
	
	return result;
};

export default TranslationToDecimalAlgorithm;