import { useEffect, useState } from 'react';

import Header from './Header';
import RefreshCounter from './RefreshCounter';
import FiltersForm from './FiltersForm';
import Showcase from './Showcase';

const Gallery = () => {
  const [count, setCount] = useState(3);
  const [refreshCount, setRefreshCount] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState('All');
  const [loading, setLoading] = useState(true);

  const URL = 'https://dog.ceo/api/breeds/image/random';

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <RefreshCounter refreshCount={refreshCount} />
      <FiltersForm
        breeds={breeds}
        setBreed={setBreed}
        count={count}
        setCount={setCount}
        handleRefreshClick={handleRefreshClick}
      />
      {loading ? <h1>Загрузка...</h1> : <Showcase dogs={dogs} />}
    </div>
  );

  function handleRefreshClick() {
    setRefreshCount((v) => v + 1);
    setLoading(true);
    fetchDogs(count, breed).then((resp) => setDogs(resp.message));
  }

  async function fetchDogs(count, breed = 'All') {
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

  async function fetchData() {
    let respWithDogs = await fetchDogs(3);
    setDogs(respWithDogs.message);

    let respWithBreeds = await fetchBreeds();
    setBreeds(respWithBreeds);
  }
};

export default Gallery;
