import { useEffect, useState, createContext, useContext } from "react";

type Language = "EN";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("EN");

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
