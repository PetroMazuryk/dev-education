import { useState } from 'react';

import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { DepartmentSelect } from '../../components/DepartmentSelect/DepartmentSelect';

import { jsTasks } from '../../data/task/jsTasks';

import styles from './TasksPage.module.css';

const taskData = {
  jsTasks: jsTasks,
};

const TasksPage = () => {
  const [selectedDept, setSelectedDept] = useState(Object.keys(taskData)[0]);

  const handleChange = (e) => {
    setSelectedDept(e.target.value);
  };

  const filteredTasks = selectedDept ? taskData[selectedDept] : [];

  return (
    <main style={{ padding: '4px' }}>
      <h2 className={styles.title}>Задачі JS</h2>

      <DepartmentSelect
        value={selectedDept}
        onChange={handleChange}
        options={Object.keys(taskData)}
      />

      {filteredTasks.length === 0 && selectedDept && (
        <p>Немає задач для цієї категорії.</p>
      )}

      {filteredTasks
        .sort((a, b) => a.id - b.id)
        .map((task) => (
          <LessonBlock key={task.id} task={task} />
        ))}
    </main>
  );
};

export default TasksPage;
