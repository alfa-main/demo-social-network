import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
  SettingOutlined,
  UserOutlined,
  ContactsOutlined,
  ReadOutlined,
  MessageOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';

const Nav = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<MessageOutlined />}>
        <NavLink to="/dialogs">Messages</NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<ReadOutlined />}>
        <NavLink to="/news">News</NavLink>
      </Menu.Item>
      <Menu.Item key="4" icon={<PlayCircleOutlined />}>
        <NavLink to="/music">Music</NavLink>
      </Menu.Item>
      <Menu.Item key="5" icon={<ContactsOutlined />}>
        <NavLink to="/users">Users</NavLink>
      </Menu.Item>
      <Menu.Item key="6" icon={<SettingOutlined />}>
        <NavLink to="/settings">Settings</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default Nav;
