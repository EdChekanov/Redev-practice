const List = ({ data, setData }) => {
  return (
    <>
      <ul style={{ display: 'flex' }}>
        {data.map((item, index) => {
          return (
            <li style={{ margin: '15px' }} key={crypto.randomUUID()}>
              <p>{item}</p>
              <button
                onClick={() =>
                  setData((l) => {
                    l[index] = `!!!${l[index]}`;
                    return [...l];
                  })
                }
              >
                !!!
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
