import Esrever from "esrever";

// Detect locale from text content by checking for language-specific characters
const detectLocaleFromText = (str: string): string | undefined => {
	// Turkish-specific characters that require special case conversion
	// Key characters: ı (dotless i), İ (dotted I)
	const turkishAzerbaijaniChars = /[ıİşŞçÇğĞüÜöÖ]/;
	if (turkishAzerbaijaniChars.test(str)) {
		return "tr-TR";
	}

	// Lithuanian-specific characters with ogoneks
	// These characters have special uppercase forms
	const lithuanianChars = /[ąęįųĄĘĮŲ]/;
	if (lithuanianChars.test(str)) {
		return "lt-LT";
	}

	// Greek-specific: Sigma (Σ) has two lowercase forms (σ and ς)
	// Check for Greek characters
	const greekChars = /[αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ]/;
	if (greekChars.test(str)) {
		return "el-GR";
	}

	// German-specific: ß (Eszett) should become SS in uppercase
	const germanChars = /[ßÄÖÜäöü]/;
	if (germanChars.test(str)) {
		return "de-DE";
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
		.map((c) =>
			c === c.toLocaleUpperCase(effectiveLocale)
				? c.toLocaleLowerCase(effectiveLocale)
				: c.toLocaleUpperCase(effectiveLocale),
		)
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

export const transformations = [
	{
		id: "upperCase",
		label: "Upper case",
		example: { original: "eXaMpLe TeXt", result: "EXAMPLE TEXT" },
		transform: upperCase,
	},
	{
		id: "lowerCase",
		label: "Lower case",
		example: { original: "eXaMpLe TeXt", result: "example text" },
		transform: lowerCase,
	},
	{
		id: "titleCase",
		label: "Title case",
		example: { original: "eXaMpLe TeXt", result: "Example Text" },
		transform: titleCase,
	},
	{
		id: "sentenceCase",
		label: "Sentence case",
		example: { original: "eXaMpLe TeXt", result: "Example text" },
		transform: sentenceCase,
	},
	{
		id: "invertCase",
		label: "Invert case",
		example: { original: "eXaMpLe TeXt", result: "ExAmPlE tExT" },
		transform: invertCase,
	},
	{
		id: "pointToComma",
		label: "Point to comma",
		example: { original: "12.345", result: "12,345" },
		transform: pointToComma,
	},
	{
		id: "commaToPoint",
		label: "Comma to point",
		example: { original: "12,345", result: "12.345" },
		transform: commaToPoint,
	},
	{
		id: "removeNumbers",
		label: "Remove numbers",
		example: { original: "Example1234Text", result: "ExampleText" },
		transform: removeNumbers,
	},
	{
		id: "removeNonNumeric",
		label: "Remove non-numbers",
		example: { original: "+(48) 123-456-789", result: "48123456789" },
		transform: removeNonNumberic,
	},
	{
		id: "removeSpaces",
		label: "Remove spaces",
		example: { original: "E x amp le", result: "Example" },
		transform: removeSpaces,
	},
	{
		id: "reverseText",
		label: "Reverse text",
		example: { original: "Example", result: "elpmaxE" },
		transform: reverseText,
	},
	{
		id: "removeDuplicateWordsDividedByComma",
		label: "Remove duplicate words (divided by comma)",
		example: { original: "a,b,b,c,d,d", result: "a,b,c,d" },
		transform: removeDuplicateWordsDividedByComma,
	},
	{
		id: "removeDuplicateLines",
		label: "Remove duplicate lines",
		example: { original: "example\nexample\ntext", result: "example\ntext" },
		transform: removeDuplicateLines,
	},
	{
		id: "toMultipleLines",
		label: "Single line to multiple lines",
		example: { original: "example, text", result: "example\ntext" },
		transform: toMultipleLines,
	},
	{
		id: "toSingleLine",
		label: "Multiple lines to single line",
		example: { original: "example\ntext", result: "example text" },
		transform: toSingleLine,
	},
] as const;

export type TransformationId = (typeof transformations)[number]["id"];

const transformationById = new Map(
	transformations.map((transformation) => [transformation.id, transformation.transform]),
);

const getFunction = (functionId: string, inputText: string): string =>
	transformationById.get(functionId as TransformationId)?.(inputText) ?? "";

export default getFunction;
