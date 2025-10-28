import { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ]);

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p>{`${product.title} (Кол-во: ${product.count})`}</p>
            <button
              onClick={() =>
                setCart((c) =>
                  c.map((item) => ({
                    ...item,
                    count: item.id === product.id ? item.count + 1 : item.count,
                  }))
                )
              }
            >
              +1
            </button>
            <button
              onClick={() =>
                setCart((c) => c.filter((item) => item.id !== product.id))
              }
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </>
  );
};

export default Cart;
