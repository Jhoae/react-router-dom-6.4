import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const onAboutClick = (url: string) => {
    navigate(url);
  };

  return (
    <header>
      <ul>
        <li>
          <button onClick={() => onAboutClick('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => onAboutClick('/about')}>About</button>
        </li>
      </ul>
    </header>
  );

  {
    /* <Link> 를 사용
  <header>
  <ul>
  <li>
      <Link to={'/'}>Home</Link>
    </li>
    <li>
      <Link to={'/about'}>About</Link>
      </li>
  </ul>
  </header> 
  */
  }
}

export default Header;
