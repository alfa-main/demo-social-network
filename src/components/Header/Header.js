import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {

  return (
    <header className={s.header}>
      <img src="https://t3.ftcdn.net/jpg/02/25/10/36/360_F_225103684_9opc6FzD29B5K2YMXlOTR1yuSQQemA4m.jpg" alt="icon" />

      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
