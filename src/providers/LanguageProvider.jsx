import { useState } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
