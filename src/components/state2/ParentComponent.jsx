import { useState } from 'react';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent ';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Счетчик: {counter}</h1>
      <button onClick={() => setCounter((c) => c + 1)}>Увеличить</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={() => setCounter(Math.floor(Math.random() * 10) + 1)}>
        Случайное значение
      </button>
      <button
        onClick={() => {
          if (counter > 0) setCounter((c) => c - 1);
        }}
      >
        Уменьшить
      </button>
      <ChildComponent name={'Ed'} counter={counter} />
      <SiblingComponent />
    </>
  );
};

export default ParentComponent;
