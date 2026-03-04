export const DepartmentSelect = ({ value, onChange, options }) => {
  return (
    <label>
      Оберіть підрозділ:
      <select value={value} onChange={onChange}>
        <option value="">Виберіть підрозділ:</option>
        {options.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </label>
  );
};
