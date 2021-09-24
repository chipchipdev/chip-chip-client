import React, { useContext } from 'react';
import { LANGUAGE_MAP, LanguageMap } from '../../constant';

const I18nContext = React.createContext<{
  map: LanguageMap,
}>({
  map: {} as LanguageMap,
});

export const I18nProvider = ({ children }: { children: any }) => {
  const map = LANGUAGE_MAP.enUS;

  return (
    <I18nContext.Provider value={{
      map,
    }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export function useI18nContext() {
  return useContext(I18nContext);
}
