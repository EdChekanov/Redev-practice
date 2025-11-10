import UserProfile from './components/state3/UserProfile';
import TaskList from './components/state3/TaskList';
import Cart from './components/state3/Cart';

import './App.css';
import Toggle from './components/context/toggle';
import { ThemeContext, themes } from './contexts/ThemeContext';

Toggle;

function App() {
  return (
    <>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <Toggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
          />
        )}
      </ThemeContext.Consumer>
      <UserProfile />
      <TaskList />
      <Cart />
    </>
  );
}

export default App;
