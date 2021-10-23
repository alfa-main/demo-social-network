import { Button, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type Props = {
  isAuth: boolean,
  login: string | null,
  logout: () => void
}

const Header: React.FC<Props> = (props) => {
  return (
    <Row>
      <Col span={18}>
        <img
          src="https://st2.depositphotos.com/4249533/6729/v/600/depositphotos_67293949-stock-illustration-web-developer.jpg"
          className={s.logo}
          alt="icon"
        />
      </Col>

      {
        props.isAuth
          ? <>
            <Col span={1} className={s.userLogin}>
              <Text>{props.login} - </Text>
            </Col>
            <Col span={5}>
              <Button type={'primary'} onClick={props.logout}>Log out</Button>
            </Col>
          </>
          : <Col span={6}><NavLink to={'/login'}>Login</NavLink></Col>}
    </Row>
  );
}

export default Header;
