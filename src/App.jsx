import { useCallback, useState } from 'react';

import './App.css';

import CounterButton from './components/optimization1/CounterButton';
import ItemList from './components/optimization1/ItemList';
import SearchInput from './components/optimization1/SearchInput';

const MOCK_DATA = [
  'apple',
  'banana',
  'orange',
  'grape',
  'strawberry',
  'watermelon',
  'pineapple',
  'mango',
  'blueberry',
  'raspberry',
  'blackberry',
  'peach',
  'pear',
  'plum',
  'cherry',
  'kiwi',
  'melon',
  'apricot',
  'coconut',
  'pomegranate',
  'car',
  'bus',
  'bicycle',
  'train',
  'airplane',
  'motorcycle',
  'scooter',
  'tram',
  'subway',
  'ship',
  'dog',
  'cat',
  'bird',
  'fish',
  'horse',
  'rabbit',
  'hamster',
  'turtle',
  'snake',
  'frog',
  'red',
  'blue',
  'green',
  'yellow',
  'black',
  'white',
  'pink',
  'purple',
  'orange',
  'brown',
  'happy',
  'sad',
  'angry',
  'excited',
  'tired',
  'bored',
  'nervous',
  'calm',
  'surprised',
  'scared',
  'soccer',
  'basketball',
  'tennis',
  'volleyball',
  'baseball',
  'golf',
  'swimming',
  'running',
  'cycling',
  'skiing',
  'coffee',
  'tea',
  'water',
  'juice',
  'milk',
  'soda',
  'beer',
  'wine',
  'cocktail',
  'smoothie',
  'computer',
  'laptop',
  'tablet',
  'smartphone',
  'keyboard',
  'mouse',
  'monitor',
  'printer',
  'camera',
  'speaker',
  'book',
  'pen',
  'notebook',
  'paper',
  'pencil',
  'eraser',
  'ruler',
  'backpack',
  'desk',
  'chair',
  'house',
  'apartment',
  'building',
  'office',
  'school',
  'hospital',
  'restaurant',
  'store',
  'bank',
  'park',
  123,
  456,
  789,
  101112,
  131415, // numbers as strings
  'early',
  'late',
  'morning',
  'evening',
  'night',
  'afternoon',
  'weekday',
  'weekend',
  'holiday',
  'vacation',
];

function App() {
  const [request, setRequest] = useState('');
  const [count, setCount] = useState(0);

  const memoSetRequest = useCallback((value) => setRequest(value), []);
  const memoSetCount = useCallback(() => setCount((v) => v + 1), []);

  return (
    <>
      <p>Counter: {count}</p>
      {request}
      <br />
      <SearchInput setRequest={memoSetRequest} />
      <ItemList DATA_LIST={MOCK_DATA} request={request} />
      <CounterButton setCount={memoSetCount} />
    </>
  );
}

export default App;
