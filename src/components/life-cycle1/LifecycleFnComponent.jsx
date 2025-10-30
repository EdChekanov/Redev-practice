import { useEffect, useState } from 'react';

const LifecycleFnComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://todo-redev.herokuapp.com/api/users'
      );

      console.log(await response.json());
    }
    getData();
  }, []);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log(`Компонент обновлен. Count - ${count}`);
    }
  }, [count]);

  useEffect(
    () => () => {
      console.log('Компонент будет размонтирован');
    },
    []
  );

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Увеличить
      </button>
    </div>
  );
};

export default LifecycleFnComponent;
