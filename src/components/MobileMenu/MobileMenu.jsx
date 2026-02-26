import { NavLink } from 'react-router-dom';

import sprite from 'assets/sprite.svg';
import styles from './MobileMenu.module.css';

export const MobileMenu = ({ isOpen, onClose }) => {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menu}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <nav className={styles.nav}>
          <NavLink to="/" onClick={onClose} className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-home`} />
            </svg>
            Home
          </NavLink>
          <NavLink to="/tasks" onClick={onClose} className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-tasks`} />
            </svg>
            TasksJS
          </NavLink>
          <NavLink to="/english" onClick={onClose} className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-english`} />
            </svg>
            English
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
