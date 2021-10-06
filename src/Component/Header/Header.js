import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  };
  return (
    <div >
      <nav className='text pb-4 fs-4 ' >
        <NavLink className='gap' activeStyle={activeStyle} to='/home'>Home</NavLink>
        <NavLink className='gap' activeStyle={activeStyle} to='/service'>Service</NavLink>
        <NavLink className='gap' activeStyle={activeStyle} to='/about'>About</NavLink>
        <NavLink className='gap' activeStyle={activeStyle} to='/blog'>Blog</NavLink>
      </nav>
    </div>
  );
};

export default Header;