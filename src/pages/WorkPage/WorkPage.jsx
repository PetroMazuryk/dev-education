import { useState } from 'react';
import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { work } from '../../data/work/sa-24';
import { maint } from '../../data/work/maint';

import styles from './WorkPage.module.css';

const workData = {
  WORK: work,
  MAINT: maint,
};

const WorkPage = () => {
  const [selectedDept, setSelectedDept] = useState('');

  const handleChange = (e) => {
    setSelectedDept(e.target.value);
  };

  const filteredWork = selectedDept ? workData[selectedDept] : [];

  return (
    <main style={{ padding: '4px' }}>
      <h2 className={styles.title}>Робочі записи</h2>

      <label>
        Оберіть підрозділ:
        <select value={selectedDept} onChange={handleChange}>
          <option value="">Виберіть підрозділ:</option>
          {Object.keys(workData).map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </label>

      {filteredWork.length === 0 && selectedDept && (
        <p>Немає записів для цього підрозділу</p>
      )}

      {filteredWork.map((task) => (
        <LessonBlock key={task.id} task={task} />
      ))}
    </main>
  );
};

export default WorkPage;
