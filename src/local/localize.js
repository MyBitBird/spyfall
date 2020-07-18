import useLanguage from "./../hooks/language/useLanguage";

const localize = (key) => {
  const language = useLanguage();
  return language.dictionary[key] || key;
};

export default localize;
