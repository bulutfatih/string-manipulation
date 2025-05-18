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

const getFunction = (functionId: string, inputText: string): string => {
	switch (functionId) {
		case "upperCase":
			return upperCase(inputText);
		case "sentenceCase":
			return sentenceCase(inputText);
		case "titleCase":
			return titleCase(inputText);
		case "lowerCase":
			return lowerCase(inputText);
		case "invertCase":
			return invertCase(inputText);
		case "pointToComma":
			return pointToComma(inputText);
		case "commaToPoint":
			return commaToPoint(inputText);
		case "removeNumbers":
			return removeNumbers(inputText);
		case "removeNonNumeric":
			return removeNonNumberic(inputText);
		case "removeSpaces":
			return removeSpaces(inputText);
		case "reverseText":
			return reverseText(inputText);
		case "removeDuplicateWordsDividedByComma":
			return removeDuplicateWordsDividedByComma(inputText);
		case "removeDuplicateLines":
			return removeDuplicateLines(inputText);
		case "toMultipleLines":
			return toMultipleLines(inputText);
		case "toSingleLine":
			return toSingleLine(inputText);

		default:
			return "";
	}
};

export default getFunction;
