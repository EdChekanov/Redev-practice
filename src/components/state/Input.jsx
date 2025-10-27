import { useState } from 'react';

const Input = () => {
  const [state, setState] = useState('');

  return (
    <>
      <br />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <p>State: {state}</p>
      <button onClick={() => setState('')}>Tap-tap</button>
    </>
  );
};

export default Input;
