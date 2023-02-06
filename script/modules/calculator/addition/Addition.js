// !!! Говнокод !!!

const Addition = (firstTerm, secondTerm, notation) => {
	let arrResult = [];
	let reminder = [0];
	let firstTermArr = `${AddingZero(firstTerm, secondTerm, notation)}${firstTerm}`.split('').reverse();
	let secondTermArr = `${AddingZero(secondTerm, firstTerm, notation)}${secondTerm}`.split('').reverse();
	const maxLength = (secondTermArr.length >= firstTermArr.length ? secondTermArr.length : firstTermArr.length)
	switch (notation) {
		case 'Bin':
			for( const item of [...firstTermArr, ...secondTermArr] )
				if ( +item > 1 || +item < 0 ) return "Incorrect value";
			for ( let i = 0; i < maxLength; i++ ) {
				const a = firstTermArr[i];
				const b = secondTermArr[i];
				switch(+a + +b) {
					case 0:
						arrResult[i] = 0 + reminder[i];
						reminder[i+1] = 0;
						break;
					case 1:
						arrResult[i] = reminder[i] == 1 ? 0 : 1;
						reminder[i+1] = reminder[i] == 1 ? 1 : 0;
						break;
					case 2:
						arrResult[i] = 0 + reminder[i];
						reminder[i+1] = 1;
						break;
				}
			};
			return arrResult.reverse().join('');
		case 'Oct':
			for( const item of [...firstTermArr, ...secondTermArr] )
				if ( +item > 7 || +item < 0 ) return "Incorrect value";
			for ( let i = 0; i < maxLength; i++ ) {
				const a = firstTermArr[i];
				const b = secondTermArr[i];
				switch(+a + +b >= 8) {
					case true:
						arrResult[i] = (+a + +b + reminder[i]) - 8
						reminder[i+1] = 1
						break;
					case false:
						const sum = +a + +b  + reminder[i]
						if ( sum >= 8 ) {
							arrResult[i] = sum - 8
							reminder[i+1] = 1
						} else {
							arrResult[i] = sum
							reminder[i+1] = 0
						}
						break;
				};
			};
			return arrResult.reverse().join('');
		case 'Dec':
			return +firstTerm + +secondTerm
		case 'Hex':
			firstTermArr = ChangingLettersToNumbers(firstTermArr);
			secondTermArr = ChangingLettersToNumbers(secondTermArr);
			for( const item of [...firstTermArr, ...secondTermArr] )
				if ( +item > 15 || +item < 0 ) return "Incorrect value";
			for ( let i = 0; i < maxLength; i++ ) {
				const a = firstTermArr[i];
				const b = secondTermArr[i];
				switch(+a + +b >= 16) {
					case true:
						arrResult[i] = (+a + +b + reminder[i]) - 16
						reminder[i+1] = 1
						break;
					case false:
						const sum = +a + +b  + reminder[i]
						if ( sum >= 16 ) {
							arrResult[i] = sum - 16
							reminder[i+1] = 1
						} else {
							arrResult[i] = sum
							reminder[i+1] = 0
						}
						break;
				};
			};
			return ChangingNumbersToLetters(arrResult).reverse().join('');
	};
	
};



const AddingZero = ( Term1, Term2, notation ) => {
	let result = '';
	const howManyZero = Math.abs( Term1.length - Term2.length );
	switch (notation) {
		case 'Bin':
			for (let i = 0; i < howManyZero; i++) 
				result += '0'
			return (howManyZero == 0) ? '00' : `0${result}`;
		case 'Oct':
			
			if (Term1.length > Term2.length) {
				result = ''
			} else if (Term1.length < Term2.length) {
				for (let i = 0; i < howManyZero; i++) 
					result += '0'
			}
			return (howManyZero == 0) ? '00' : `0${result}`;
		case 'Hex':
			
			if (Term1.length > Term2.length) {
				result = ''
			} else if (Term1.length < Term2.length) {
				for (let i = 0; i < howManyZero; i++) 
					result += '0'
			}
			return (howManyZero == 0) ? '00' : `0${result}`;

	}
	
};

const ChangingLettersToNumbers = (arr) => {
	return arr.map(item => {
		item = item.toLowerCase();
		
		switch (item) {
			case '0':
				return 0;
			case '1':
				return 1;
			case '2':
				return 2;
			case '3':
				return 3;
			case '4':
				return 4;
			case '5':
				return 5;
			case '6':
				return 6;
			case '7':
				return 7;
			case '8':
				return 8;
			case '9':
				return 9;
			case 'a':
				return 10;
			case 'b':
				return 11;
			case 'c':
				return 12;
			case 'd':
				return 13;
			case 'e':
				return 14;
			case 'f':
				return 15;
		}
	});
};

const ChangingNumbersToLetters = (arr) => {
	return arr.map(item => {
		switch (item) {
			case 0:
				return '0';
			case 1:
				return '1';
			case 2:
				return '2';
			case 3:
				return '3';
			case 4:
				return '4';
			case 5:
				return '5';
			case 6:
				return '6';
			case 7:
				return '7';
			case 8:
				return '8';
			case 9:
				return '9';
			case 10:
				return 'A';
			case 11:
				return 'B';
			case 12:
				return 'C';
			case 13:
				return 'D';
			case 14:
				return 'E';
			case 15:
				return 'F';
		}
	});
};

export default Addition;