import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { work } from '../../data/work';

import styles from './WorkPage.module.css';

const WorkPage = () => {
  return (
    <main style={{ padding: '4px' }}>
      <h2 className={styles.title}>Робочі записи</h2>

      {work.map((task) => (
        <LessonBlock key={task.id} task={task} />
      ))}
    </main>
  );
};

export default WorkPage;
