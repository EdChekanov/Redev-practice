import './App.css';
import Number from '@/components/Number';
import String from '@/components/String';
import Boolean from '@/components/Boolean';
import Object from '@/components/Object';
import Function from '@/components/Function';
import Array from '@/components/Array';

function App() {
  return (
    <>
      <Number number={5} />
      <String string={'Good evening'} />
      <Boolean boolean={true} />
      <Object object={{ text: 'Ho-Ho-Ho' }} />
      <Function fn={() => console.log('Hi there')} />
      <Array array={['first', 'second', 'third']} />
    </>
  );
}

export default App;
