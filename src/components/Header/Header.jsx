import s from './header.module.scss';
import NavBar from 'components/NavBar/NavBar';
const Header = () => {
  return (
    <header className={s.my__header}>
      <h1 className={s.super__kino}>SUPER FILMS</h1>
      <NavBar />
    </header>
  );
};

export default Header;
