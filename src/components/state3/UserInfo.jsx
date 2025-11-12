import { memo } from 'react';
import withRenderTracker from '../hoc/withRenderTracker';

const Func = memo(({ user }) => {
  return (
    <h2>
      Name: {user.name}, age: {user.age}, isActive:{' '}
      {user.isActive ? 'yes' : 'no'}
    </h2>
  );
});
Func.name = 'UserInfo';

const UserInfo = withRenderTracker(Func);

export default UserInfo;
