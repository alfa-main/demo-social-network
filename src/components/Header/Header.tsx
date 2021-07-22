import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type Props = {
  isAuth: boolean,
  login: string | null,
  logout: (userId: number) => number
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={s.header}>
      <img src="https://st2.depositphotos.com/4249533/6729/v/600/depositphotos_67293949-stock-illustration-web-developer.jpg" alt="icon" />

      <div className={s.loginBlock}>
        {
          props.isAuth
          // @ts-ignore
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
