import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import ThemeContext from '../../contexts/ThemeContext2';
import translations from '../../data/translations';

const UserProfile = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{translations[language].profile}</div>;
};

export default UserProfile;
