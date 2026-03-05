import { useState } from 'react';
import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { DepartmentSelect } from '../../components/DepartmentSelect/DepartmentSelect';

import { work } from '../../data/work/sa-24';
import { maint } from '../../data/work/maint';
import { screen } from '../../data/work/screen';

import styles from './WorkPage.module.css';

const workData = {
  work_SA24: work,
  maint: maint,
  screen: screen,
};

const WorkPage = () => {
  const [selectedDept, setSelectedDept] = useState(Object.keys(workData)[0]);

  const handleChange = (e) => {
    setSelectedDept(e.target.value);
  };

  const filteredWork = selectedDept ? workData[selectedDept] : [];

  return (
    <main style={{ padding: '4px' }}>
      <h2 className={styles.title}>Робочі записи</h2>

      <DepartmentSelect
        value={selectedDept}
        onChange={handleChange}
        options={Object.keys(workData)}
      />

      {filteredWork.length === 0 && selectedDept && (
        <p>Немає записів для цього підрозділу.</p>
      )}

      {filteredWork.map((task) => (
        <LessonBlock key={task.id} task={task} />
      ))}
    </main>
  );
};

export default WorkPage;
