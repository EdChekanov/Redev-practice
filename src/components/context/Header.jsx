import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import ThemeContext from '../../contexts/ThemeContext2';
import translations from '../../data/translations';

const Header = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <h1>{translations[language].welcome}</h1>
    </header>
  );
};

export default Header;
