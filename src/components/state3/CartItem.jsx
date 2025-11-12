import { memo } from 'react';
import withRenderTracker from '../hoc/withRenderTracker';

const Func = memo(({ title, count }) => <p>{`${title} (Кол-во: ${count})`}</p>);
Func.name = 'CartItem';

const CartItem = withRenderTracker(Func);

export default CartItem;
