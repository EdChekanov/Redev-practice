import { useState } from 'react';

const Text = () => {
  const [state, setState] = useState(true);

  return (
    <>
      {state ? <h2>Look at me O_o</h2> : <h2>___</h2>}
      <button onClick={() => setState((s) => !s)}>Tap-tap</button>
    </>
  );
};

export default Text;
