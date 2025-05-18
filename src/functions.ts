import Esrever from "esrever";

const upperCase = (str: string): string => {
	return str.normalize().toUpperCase();
};

const sentenceCase = (str: string): string => {
	return lowerCase(str)
		.replace(/[a-z]/i, (letter) => letter.toUpperCase())
		.trim();
};

const titleCase = (str: string): string => {
	return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
};

const lowerCase = (str: string): string => {
	return str.normalize().toLowerCase();
};

const invertCase = (str: string): string => {
	return str
		.split("")
		.map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
		.join("");
};

const pointToComma = (str: string): string => {
	return str.replace(/\./g, ",");
};

const commaToPoint = (str: string): string => {
	return str.replace(/,/g, ".");
};

const removeNumbers = (str: string): string => {
	return str.replace(/\d+/g, "");
};

const removeNonNumberic = (str: string): string => {
	return str.replace(/\D/g, "");
};

const removeSpaces = (str: string): string => {
	return str.replace(/\s+/g, "");
};

const reverseText = (str: string): string => {
	return Esrever.reverse(str);
};

const removeDuplicateWordsDividedByComma = (str: string): string => {
	return str
		.split(",")
		.filter((item, i, allItems) => {
			return i === allItems.indexOf(item);
		})
		.join(",");
};

const removeDuplicateLines = (str: string): string => {
	return str
		.split("\n")
		.filter((item, i, allItems) => {
			return i === allItems.indexOf(item);
		})
		.join("\n");
};

const toMultipleLines = (str: string): string => {
	return str.replace(/[, ]+/g, "\n");
};

const toSingleLine = (str: string): string => {
	return str.replace(/[\n]+/g, " ");
};

const TakeAction = (props: { str: string; checkedRadioId: string }): string => {
	const { str, checkedRadioId } = props;

	switch (checkedRadioId) {
		case "upperCase":
			return upperCase(str);
		case "sentenceCase":
			return sentenceCase(str);
		case "titleCase":
			return titleCase(str);
		case "lowerCase":
			return lowerCase(str);
		case "invertCase":
			return invertCase(str);
		case "pointToComma":
			return pointToComma(str);
		case "commaToPoint":
			return commaToPoint(str);
		case "removeNumbers":
			return removeNumbers(str);
		case "removeNonNumeric":
			return removeNonNumberic(str);
		case "removeSpaces":
			return removeSpaces(str);
		case "reverseText":
			return reverseText(str);
		case "removeDuplicateWordsDividedByComma":
			return removeDuplicateWordsDividedByComma(str);
		case "removeDuplicateLines":
			return removeDuplicateLines(str);
		case "toMultipleLines":
			return toMultipleLines(str);
		case "toSingleLine":
			return toSingleLine(str);

		default:
			return "";
	}
};

export default TakeAction;
