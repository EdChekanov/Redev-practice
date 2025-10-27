const ChildComponent = ({ name, counter }) => {
  return (
    <>
      <h2>
        Привет, {name}! Текущий счетчик: {counter}
      </h2>
    </>
  );
};

export default ChildComponent;
