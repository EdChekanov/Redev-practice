const FiltersForm = ({
  breeds,
  setBreed,
  count,
  setCount,
  handleRefreshClick,
}) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ marginRight: '15px' }}>Порода:</p>
        <select
          name="select"
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        >
          <option value="All">Все породы</option>
          {breeds.map((breed) => (
            <option key={breeds.indexOf(breed)} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Показать</p>
        <input
          type="number"
          value={count}
          min="1"
          max="50"
          onChange={handleInputChange}
        />
        <button onClick={handleRefreshClick}>Обновить</button>
      </div>
    </>
  );

  function handleInputChange(e) {
    if (e.target.value > 0 && e.target.value <= 50) setCount(e.target.value);
  }
};

export default FiltersForm;
