import React, { Dispatch, useEffect } from "react";
import { createContext, useState } from "react";
import { languagesList, languageOptions } from "../local";
import {ThemeProvider} from '@material-ui/core'

export const LanguageProviderContext = createContext({
  userLanguage: "en",
  dictionary: languagesList[0].value,
  direction: languagesList[0].direction,
  theme: languagesList[0].theme,
});
export const LanguageProviderContextDispatcher = createContext(
  (() => {}) as Dispatch<any>
);

const LanguageProvider = ({ children }: any) => {
  const [userLanguage, setUserLanguage] = useState("en");

  const currentLanguage = languagesList.find((x) => x.key === userLanguage);
  const provider = {
    userLanguage: userLanguage,
    dictionary: currentLanguage?.value,
    direction: currentLanguage?.direction,
    theme: currentLanguage ? currentLanguage?.theme : languagesList[0].theme
  };

  useEffect(() => {
    const lng = localStorage.getItem("language");
    if (lng) setUserLanguage(lng);
  }, []);

  const changeLanguage = (key: string) => {
    const newLanguage = languageOptions.find((x) => x.key === key)?.value
      ? key
      : "en";
    setUserLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  
  return (
    <LanguageProviderContext.Provider value={provider}>
      <LanguageProviderContextDispatcher.Provider value={changeLanguage}>
      <ThemeProvider theme={provider.theme}>
        <div style={{ direction: provider.direction }}>{children}</div>
        </ThemeProvider>
      </LanguageProviderContextDispatcher.Provider>
    </LanguageProviderContext.Provider>
  );
};

export default LanguageProvider;
