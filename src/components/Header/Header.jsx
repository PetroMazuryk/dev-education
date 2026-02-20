import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.png';
import sprite from 'assets/sprite.svg';
import styles from './Header.module.css';

export const Header = () => {
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
      </div>
    </header>
  );
};
