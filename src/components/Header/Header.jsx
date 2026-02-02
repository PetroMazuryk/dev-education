import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${css.link} ${css.linkActive}` : css.link;

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={getLinkClass}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          Home
        </NavLink>

        <NavLink to="/tasks" className={getLinkClass}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          TasksJS
        </NavLink>
      </nav>
    </header>
  );
};
