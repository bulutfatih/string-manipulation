import Esrever from "esrever";

// Detect locale from text content by checking for language-specific characters
const detectLocaleFromText = (str: string): string | undefined => {
	// Turkish-specific characters that require special case conversion
	// Key characters: ı (dotless i), İ (dotted I)
	const turkishAzerbaijaniChars = /[ıİşŞçÇğĞüÜöÖ]/;
	if (turkishAzerbaijaniChars.test(str)) {
		return 'tr-TR';
	}
	
	// Lithuanian-specific characters with ogoneks
	// These characters have special uppercase forms
	const lithuanianChars = /[ąęįųĄĘĮŲ]/;
	if (lithuanianChars.test(str)) {
		return 'lt-LT';
	}
	
	// Greek-specific: Sigma (Σ) has two lowercase forms (σ and ς)
	// Check for Greek characters
	const greekChars = /[αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ]/;
	if (greekChars.test(str)) {
		return 'el-GR';
	}
	
	// German-specific: ß (Eszett) should become SS in uppercase
	const germanChars = /[ßÄÖÜäöü]/;
	if (germanChars.test(str)) {
		return 'de-DE';
	}
	
	// Return undefined to use browser default for other languages
	return undefined;
};

const upperCase = (str: string, locale?: string): string => {
	const effectiveLocale = locale || detectLocaleFromText(str);
	return str.normalize().toLocaleUpperCase(effectiveLocale);
};

const sentenceCase = (str: string, locale?: string): string => {
	const effectiveLocale = locale || detectLocaleFromText(str);
	return lowerCase(str, effectiveLocale)
		.replace(/[a-z]/i, (letter) => letter.toLocaleUpperCase(effectiveLocale))
		.trim();
};

const titleCase = (str: string, locale?: string): string => {
	const effectiveLocale = locale || detectLocaleFromText(str);
	return str.toLocaleLowerCase(effectiveLocale).replace(/\b(\w)/g, (s) => s.toLocaleUpperCase(effectiveLocale));
};

const lowerCase = (str: string, locale?: string): string => {
	const effectiveLocale = locale || detectLocaleFromText(str);
	return str.normalize().toLocaleLowerCase(effectiveLocale);
};

const invertCase = (str: string, locale?: string): string => {
	const effectiveLocale = locale || detectLocaleFromText(str);
	return str
		.split("")
		.map((c) => (c === c.toLocaleUpperCase(effectiveLocale) ? c.toLocaleLowerCase(effectiveLocale) : c.toLocaleUpperCase(effectiveLocale)))
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
