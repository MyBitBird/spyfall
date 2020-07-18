import { useContext } from "react";
import { LanguageProviderContextDispatcher } from "../../providers/language";

const useLanguageAction = () => useContext(LanguageProviderContextDispatcher);

export default useLanguageAction;
