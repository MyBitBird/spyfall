import { useContext } from "react";

import { LanguageProviderContext } from "../../providers/language";

const useLanguage = () => useContext(LanguageProviderContext);

export default useLanguage;
