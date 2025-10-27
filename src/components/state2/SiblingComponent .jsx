import { useState } from 'react';

const SiblingComponent = () => {
  const [text, setText] = useState('React Developer');

  return (
    <>
      <h2>Текущий текст: {text}</h2>
      <button onClick={() => setText('REDEV')}>Изменить текст</button>
    </>
  );
};

export default SiblingComponent;
