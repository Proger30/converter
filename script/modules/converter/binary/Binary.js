import Decimal from "../decimal/Decimal.js";
import TranslationToDecimalAlgorithm from "../translationAlgorithm/TranslationToDecimalAlgorithm.js";

const Binary = (guessNumber, notation) => {

	switch(notation) {
		case 10:
			return BinaryToDecimal(guessNumber);
		case 8:
			return Decimal(BinaryToDecimal(guessNumber), 8);
		case 16:
			return Decimal(BinaryToDecimal(guessNumber), 16);
	}
}

const BinaryToDecimal = (guessNumber) => TranslationToDecimalAlgorithm (guessNumber, 2);

export default Binary;