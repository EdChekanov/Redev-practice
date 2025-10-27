import { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой']);

  return (
    <>
      <h1>Task List</h1>
      <ul style={{ display: 'flex' }}>
        {tasks.map((task) => (
          <li style={{ marginLeft: '20px' }}>{task}</li>
        ))}
      </ul>
      <button onClick={() => setTasks((tasks) => [...tasks, generateTask()])}>
        Добавить задачу
      </button>
      <button onClick={() => setTasks((tasks) => tasks.slice(0, -1))}>
        Удалить последнюю задачу
      </button>
    </>
  );
};

export default TaskList;

function generateTask() {
  const taskNames = [
    'Купить продукты',
    'Выучить JavaScript',
    'Позвонить другу',
    'Прочитать книгу',
    'Сделать зарядку',
    'Написать отчёт',
  ];
  const randomIndex = Math.floor(Math.random() * taskNames.length);
  return taskNames[randomIndex];
}
