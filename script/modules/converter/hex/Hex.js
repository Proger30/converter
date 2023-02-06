import Decimal from "../decimal/Decimal.js";
import TranslationToDecimalAlgorithm from "../translationAlgorithm/TranslationToDecimalAlgorithm.js";

const Hex = (guessNumber, notation) => {

	switch(notation) {
		case 10:
			return HexToDecimal(guessNumber);
		case 2:
			return Decimal(HexToDecimal(guessNumber), 2);
		case 8:
			return Decimal(HexToDecimal(guessNumber), 8);
	}
}

const HexToDecimal = (guessNumber) => TranslationToDecimalAlgorithm(guessNumber, 16);

export default Hex;