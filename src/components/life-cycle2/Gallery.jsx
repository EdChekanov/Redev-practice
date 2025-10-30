import { useEffect, useState } from 'react';
import Showcase from './Showcase';

const Gallery = () => {
  const [count, setCount] = useState(3);
  const [refresh, setRefresh] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState('All');
  const [loading, setLoading] = useState(true);

  const URL = 'https://dog.ceo/api/breeds/image/random';
  const URLWithBreed =
    'https://dog.ceo/api/breed/{breed}/images/random/{count}';

  async function fetchData(count, breed = 'All') {
    const response =
      breed === 'All'
        ? await fetch(`${URL}/${count}`)
        : await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random/${count}`
          );
    setLoading(false);
    return await response.json();
  }

  async function fetchBreeds() {
    let resultArray = [];
    let response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    response = await response.json();
    for (const breed in response.message) {
      resultArray.push(breed);
    }

    return resultArray;
  }

  useEffect(() => {
    fetchData(3).then((resp) => {
      setDogs(resp.message);
    });
    fetchBreeds().then((arr) => {
      setBreeds(arr);
    });
  }, []);

  return (
    <div>
      <h1>Галерея собак</h1>
      <p>
        Картинки обновлены <i>{refresh} раз(а)</i>
      </p>
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
          onChange={(e) => {
            if (e.target.value > 0 && e.target.value <= 50)
              setCount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setRefresh((v) => v + 1);
            setLoading(true);
            fetchData(count, breed).then((resp) => setDogs(resp.message));
          }}
        >
          Обновить
        </button>
      </div>
      {loading ? <h1>Загрузка...</h1> : <Showcase dogs={dogs} />}
    </div>
  );
};

export default Gallery;
