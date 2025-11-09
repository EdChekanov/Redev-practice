import { memo } from 'react';

const CounterButton = memo(({ setCount }) => {
  console.log('CounterButton');
  return (
    <>
      <button onClick={setCount}>increase</button>
    </>
  );
});

export default CounterButton;
