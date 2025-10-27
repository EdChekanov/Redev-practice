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
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p>{`${product.title} (Кол-во: ${product.count})`}</p>
            <button
              onClick={() =>
                setCart((c) =>
                  [
                    ...c.filter((item) => item.title !== product.title),
                    {
                      id: product.id,
                      title: product.title,
                      count: product.count + 1,
                    },
                  ].sort((a, b) => a.id - b.id)
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
