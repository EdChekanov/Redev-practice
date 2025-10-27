import './App.css';
import Counter from '@/components/state/Counter';
import Text from '@/components/state/Text';
import Input from './components/state/Input';
import Button from './components/state/Button';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Text />
      <hr />
      <Input />
      <hr />
      <Button />
    </>
  );
}

export default App;
