import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/about">О сайте</NavLink>
          </li>
          <li>
            <NavLink to="/cat">Категории</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
