const Decimal = (guessNumber, notation) => {

	let arrResult = [];
	let tempVar = guessNumber 
	let counter = 0

	while(tempVar > 0) {
		arrResult[counter] = tempVar % notation;
		tempVar = Math.floor(tempVar / notation);
		counter++;
	}

	if (notation == 16) { arrResult = arrResult.map( item => {
			switch (item) {
				case 10:
					return "A";
				case 11:
					return "B";
				case 12:
					return "C";
				case 13:
					return "D";
				case 14:
					return "E";
				case 15:
					return "F";
				default:
					return item;
			}
		})};
	
  return isNaN(+guessNumber) ? "Incorrect value" : arrResult.reverse().join('');
};

export default Decimal;
