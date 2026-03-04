import styles from './DepartmentSelect.module.css';

export const DepartmentSelect = ({ value, onChange, options }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Оберіть підрозділ:</label>

      <select className={styles.select} value={value} onChange={onChange}>
        <option value="">Виберіть підрозділ:</option>
        {options.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
};
