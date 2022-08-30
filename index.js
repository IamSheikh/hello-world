const { translations } = require("./translations.json");

const helloWorld = (language) => {
  if (language == "es") {
    return translations[0].es;
  } else if (language == "zh") {
    return translations[0].zh;
  } else if (language == "fr") {
    return translations[0].fr;
  } else if (language == "ja") {
    return translations[0].ja;
  } else if (language == "en") {
    return translations[0].en;
  } else {
    return translations[0].en;
  }
};

module.exports = helloWorld;
