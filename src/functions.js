import Esrever from "esrever";

const upperCase = (str) => {
  return str.normalize().toUpperCase();
};

const sentenceCase = (str) => {
  return lowerCase(str)
    .replace(/[a-z]/i, function (letter) {
      return letter.toUpperCase();
    })
    .trim();
};

const titleCase = (str) => {
  return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
};

const lowerCase = (str) => {
  return str.normalize().toLowerCase();
};

const invertCase = (str) => {
  return str
    .split("")
    .map(function (c) {
      return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    })
    .join("");
};

const pointToComma = (str) => {
  return str.replace(/\./g, ",");
};

const commaToPoint = (str) => {
  return str.replace(/,/g, ".");
};

const removeNumbers = (str) => {
  return str.replace(/\d+/g, "");
};

const removeNonNumberic = (str) => {
  return str.replace(/\D/g, "");
};

const removeSpaces = (str) => {
  return str.replace(/\s+/g, "");
};

const reverseText = (str) => {
  return Esrever.reverse(str);
};

const removeDuplicateWordsDividedByComma = (str) => {
  return str
    .split(",")
    .filter((item, i, allItems) => {
      return i === allItems.indexOf(item);
    })
    .join(",");
};

const removeDuplicateLines = (str) => {
  return str
    .split("\n")
    .filter((item, i, allItems) => {
      return i === allItems.indexOf(item);
    })
    .join("\n");
};

const toMultipleLines = (str) => {
  return str.replace(/[, ]+/g, "\n");
};

const toSingleLine = (str) => {
  return str.replace(/[\n]+/g, ", ");
};

const TakeAction = (props) => {
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
