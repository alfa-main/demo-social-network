import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
import Other from './components/Other/Other';
import { AppStateType } from './redux/redux-store';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./Login/Login'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Layout>
        <Sider trigger={null} collapsible>
          <Nav />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <HeaderContainer />
          </Header>
          <Content
            // className="site-layout-background"
            style={{
              // margin: '24px 16px',
              padding: '24px 16px',
              minHeight: 280,
              // backgroundColor: '#1890ff'
            }}
          >
            <Switch>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route path="/profile/:userId?" render={() => <React.Suspense fallback={<Preloader />}><ProfileContainer /></React.Suspense>} />
              <Route path="/dialogs" render={() => <React.Suspense fallback={<Preloader />}><DialogsContainer /></React.Suspense>} />
              <Route exact path="/news" component={News} />
              <Route exact path="/music" component={Music} />
              <Route exact path="/users" render={() => <UsersContainer />} />
              <Route exact path="/settings" component={Settings} />
              <Route path="/login" render={() => <React.Suspense fallback={<Preloader />}><Login /></React.Suspense>} />
              <Route path="*" render={() => <Other />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
