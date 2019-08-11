const upperCase = str => {
  return str.normalize().toUpperCase();
};

const sentenceCase = str => {
  return lowerCase(str)
    .replace(/[a-z]/i, function(letter) {
      return letter.toUpperCase();
    })
    .trim();
};

const titleCase = str => {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
};

const lowerCase = str => {
  return str.normalize().toLowerCase();
};

const invertCase = str => {
  return str
    .split("")
    .map(function(c) {
      return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    })
    .join("");
};

const TakeAction = props => {
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
    default:
      return "";
  }
};

export default TakeAction;
