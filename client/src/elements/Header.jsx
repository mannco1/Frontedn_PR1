import React from 'react';
import '../css/Header.css';
import { NavLink} from 'react-router-dom';

function isProfile(){
  return window.location.href[window.location.href.length-1]==='/' ? '' : 'none';
}


const Header = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <div className='logo'>Блог 2.0</div>
      </NavLink>

      <NavLink to="/profile">
      <button className='createPost' >Создать пост
      </button>
      </NavLink>


      <NavLink to="/log">
        <img className='profile' src='https://cdn-icons-png.flaticon.com/512/1000/1000997.png'></img>
      </NavLink>
    </header>

  );
};

export default Header;
