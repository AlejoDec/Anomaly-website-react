import React, { useState } from "react";
import langEs from "../lang/es-CO.json";
import langEn from "../lang/en-US.json";
import { createContext } from "react";
import { IntlProvider } from "react-intl";

interface LangContextType {
    locale: string;
    setLocale: (locale: string) => void;
    setLanguage: (lang: string) => void;
}

export const langContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [langShow, setLangShow] = useState(langEs);
    const [locale, setLocale] = useState('es');

    const setLanguage = (lang: string) => {
        switch (lang) {
            case 'es':
                setLangShow(langEs);
                setLocale('es');
                break;
            case 'en':
                setLangShow(langEn);
                setLocale('en');
                break;
            default:
                setLangShow(langEs);
                setLocale('es');
                break;
        }
    }

    return (
        <langContext.Provider value={{ locale, setLocale, setLanguage }}>
            <IntlProvider locale={locale} messages={langShow}> 
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};
