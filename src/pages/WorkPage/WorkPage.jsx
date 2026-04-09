import { useState } from 'react';
import { LessonBlock } from '../../components/LessonBlock/LessonBlock';
import { DepartmentSelect } from '../../components/DepartmentSelect/DepartmentSelect';

import { work } from '../../data/work/sa-24';
import { maint } from '../../data/work/maint';
import { screen } from '../../data/work/screen';
import { maintQuestions } from '../../data/work/maintQuestions';
import { bosch_KLD_1042 } from '../../data/work/bosch-KLD-1042';
import { home_appliance } from '../../data/work/home_appliance ';

import styles from './WorkPage.module.css';

const workData = {
  work_SA24: work,
  maint: maint,
  screen: screen,
  maintQuestions: maintQuestions,
  bosch_KLD_1042: bosch_KLD_1042,
  home_appliance: home_appliance,
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
