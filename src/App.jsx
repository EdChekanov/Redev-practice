import { useRef, useState } from 'react';
import './App.css';
import List from './components/key-refs/List';
const DATA = ['машина', 'река', 'горы'];

function App() {
  const [data, setData] = useState(DATA);
  const [text, setText] = useState('');

  const inputRef = useRef(null);
  return (
    <>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setData((d) => [...d, e.target.value]);
            setText('');
          }
        }}
        type="text"
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <List data={data} setData={setData} />
    </>
  );
}

export default App;
