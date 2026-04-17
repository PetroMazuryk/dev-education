import { useState } from 'react';
import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { DepartmentSelect } from '../../components/DepartmentSelect/DepartmentSelect';

import { interview } from '../../data/english/interview';

import styles from './EnglishPage.module.css';

const englishData = {
  interview: interview,
};

const EnglishPage = () => {
  const [selectedDept, setSelectedDept] = useState(Object.keys(englishData)[0]);

  const handleChange = (e) => {
    setSelectedDept(e.target.value);
  };

  const filteredWork = selectedDept ? englishData[selectedDept] : [];

  return (
    <main style={{ padding: '4px' }}>
      <h2 className={styles.title}>English language learning</h2>

      <DepartmentSelect
        value={selectedDept}
        onChange={handleChange}
        options={Object.keys(englishData)}
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

export default EnglishPage;
