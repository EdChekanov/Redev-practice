import { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  });

  return (
    <>
      <h1>User Profile</h1>
      <h2>
        Name: {user.name}, age: {user.age}, isActive:{' '}
        {user.isActive ? 'yes' : 'no'}
      </h2>
      <button
        onClick={() =>
          setUser((u) => {
            return { ...u, name: getRandomName() };
          })
        }
      >
        Сменить имя
      </button>
      <button
        onClick={() =>
          setUser((u) => {
            return { ...u, age: u.age + 1 };
          })
        }
      >
        Увеличить возраст
      </button>
      <button
        onClick={() =>
          setUser((u) => {
            return { ...u, isActive: !u.isActive };
          })
        }
      >
        Переключить активность
      </button>
    </>
  );
};

export default UserProfile;

function getRandomName() {
  const names = ['Алексей', 'Мария', 'Иван', 'Елена', 'Дмитрий', 'Ольга'];
  return names[Math.floor(Math.random() * names.length)];
}
