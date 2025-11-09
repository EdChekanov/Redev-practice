import { memo, useMemo } from 'react';

const ItemList = memo(({ DATA_LIST, request }) => {
  console.log('ItemList');
  const filterData = (list, query) => {
    if (!query) return list;
    return list.filter((item) => String(item).includes(query));
  };

  const filteredData = useMemo(
    () => filterData(DATA_LIST, request),
    [DATA_LIST, request]
  );

  return (
    <>
      <ul style={{ display: 'flex', overflowX: 'scroll' }}>
        {filteredData.map((item) => (
          <li key={crypto.randomUUID()} style={{ margin: '0 15px' }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
});

export default ItemList;
