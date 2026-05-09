import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { tasksJS } from '../../data/tasksJS';

import styles from './TasksPage.module.css';

const TasksPage = () => {
  return (
    <main style={{ padding: '4px' }}>
      <h2 className={styles.title}>Задачі JS</h2>

      {tasksJS
        .sort((a, b) => a.id - b.id)
        .map((task) => (
          <LessonBlock key={task.id} task={task} />
        ))}
    </main>
  );
};

export default TasksPage;
