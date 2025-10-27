import './App.css';
import Cart from './components/state3/Cart';
import TaskList from './components/state3/TaskList';
import UserProfile from './components/state3/UserProfile';

function App() {
  return (
    <>
      <UserProfile />
      <hr />
      <TaskList />
      <hr />
      <Cart />
    </>
  );
}

export default App;
