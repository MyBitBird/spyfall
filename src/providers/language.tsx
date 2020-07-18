import React, { Dispatch, useEffect } from "react";
import { createContext, useState } from "react";
import { languagesList, languageOptions } from "../local";

export const LanguageProviderContext = createContext({
  userLanguage: "en",
  dictionary: languagesList[0].value,
  direction: languagesList[0].direction,
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
    direction: currentLanguage?.direction
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
        <div style={{ direction: provider.direction }}>{children}</div>
      </LanguageProviderContextDispatcher.Provider>
    </LanguageProviderContext.Provider>
  );
};

export default LanguageProvider;
