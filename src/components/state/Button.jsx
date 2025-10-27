import { useState } from 'react';

const Button = () => {
  const [state, setState] = useState('#ff0');

  return (
    <>
      <button
        style={{ backgroundColor: state }}
        onClick={() =>
          setState(
            `#${Math.floor(Math.random() * 0xffffff)
              .toString(16)
              .padStart(6, '0')}`
          )
        }
      >
        Tap-tap
      </button>
    </>
  );
};

export default Button;
