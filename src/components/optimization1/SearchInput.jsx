import { memo } from 'react';

const SearchInput = memo(({ setRequest }) => {
  console.log('SearchInput');

  return (
    <>
      <input type="text" onChange={(e) => setRequest(e.target.value)} />
    </>
  );
});

export default SearchInput;
