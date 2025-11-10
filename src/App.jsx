import LanguageProvider from './providers/LanguageProvider';
import ThemeProvider from './providers/Theme2Provider';
import ControlsPanel from './components/context/ControlsPanel';
import Header from './components/context/Header';
import UserProfile from './components/context/UserProfile';

import './App.css';

function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <ControlsPanel />
          <Header />
          <UserProfile />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
