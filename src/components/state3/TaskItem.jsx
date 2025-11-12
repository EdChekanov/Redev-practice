import { memo } from 'react';
import withRenderTracker from '../hoc/withRenderTracker';

const Func = memo(({ task }) => {
  return <li style={{ marginLeft: '20px' }}>{task}</li>;
});
Func.name = 'TaskItem';

const TaskItem = withRenderTracker(Func);

export default TaskItem;
