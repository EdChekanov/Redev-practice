import { useState } from 'react';

const Counter = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <h2>State: {state}</h2>
      <button onClick={() => setState((s) => s + 1)}>Tap-tap</button>
    </>
  );
};

export default Counter;
