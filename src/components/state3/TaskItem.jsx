import { memo } from 'react';

const TaskItem = memo(({ task }) => {
  console.log('render TaskItem');

  return <li style={{ marginLeft: '20px' }}>{task}</li>;
});

export default TaskItem;
