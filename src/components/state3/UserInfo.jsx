import { memo } from 'react';

const UserInfo = memo(({ user }) => {
  console.log('render UserInfo');

  return (
    <h2>
      Name: {user.name}, age: {user.age}, isActive:{' '}
      {user.isActive ? 'yes' : 'no'}
    </h2>
  );
});

export default UserInfo;
