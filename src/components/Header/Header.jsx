import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.png';
import sprite from 'assets/sprite.svg';
import styles from './Header.module.css';

export const Header = ({ isOpen, onToggle }) => {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg} />

          <div className={styles.logoText}>
            <span className={styles.logoTop}>Dev</span>
            <span className={styles.logoBottom}>Education</span>
          </div>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-home`} />
            </svg>
            Home
          </NavLink>

          <NavLink to="/tasks" className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-tasks`} />
            </svg>
            TasksJS
          </NavLink>

          <NavLink to="/english" className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-english`} />
            </svg>
            English
          </NavLink>

          <NavLink to="/work" className={getLinkClass}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-english`} />
            </svg>
            Work
          </NavLink>
        </nav>

        <button
          className={`${styles.burger} ${isOpen ? styles.active : ''}`}
          onClick={onToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
