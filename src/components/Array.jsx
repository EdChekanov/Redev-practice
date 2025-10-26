const Array = ({ array }) => {
  return (
    <>
      <ul>
        <p>Передан массив</p>
        {array.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Array;
