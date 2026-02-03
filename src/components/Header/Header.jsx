import { NavLink } from 'react-router-dom';

import sprite from 'assets/sprite.svg';
import styles from './Header.module.css';

export const Header = () => {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={getLinkClass}>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          Home
        </NavLink>

        <NavLink to="/tasks" className={getLinkClass}>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          TasksJS
        </NavLink>

        <NavLink to="/english" className={getLinkClass}>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          English
        </NavLink>
      </nav>
    </header>
  );
};
