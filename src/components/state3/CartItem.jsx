import { memo } from 'react';

const CartItem = memo(({ title, count }) => {
  console.log('render CartItem - ' + title);

  return <p>{`${title} (Кол-во: ${count})`}</p>;
});

export default CartItem;
