import { NavLink } from 'react-router-dom';

import navBarJson from './navBarJson.json';

import s from './nav-bar-style.module.scss';

const NavBar = () => {
  return (
    <ul className={s.menu__nav}>
      {navBarJson.map(({ id, link, text }) => (
        <li key={id}>
          <NavLink to={link} className={s.one__nav}>
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
