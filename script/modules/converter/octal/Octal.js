import Decimal from "../decimal/Decimal.js";
import TranslationToDecimalAlgorithm from "../translationAlgorithm/TranslationToDecimalAlgorithm.js";

const Octal = (guessNumber, notation) => {

	switch(notation) {
		case 10:
			return OctalToDecimal(guessNumber);
		case 2:
			return Decimal(OctalToDecimal(guessNumber), 2);
		case 16:
			return Decimal(OctalToDecimal(guessNumber), 16);
	}
}

const OctalToDecimal = (guessNumber) => TranslationToDecimalAlgorithm(guessNumber, 8);

export default Octal;