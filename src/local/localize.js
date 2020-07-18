
import useLanguage from './../hooks/language/useLanguage';


const Localize = (key) =>
{
    const language = useLanguage()
    return language.dictionary[key] || key;
}

export default Localize;