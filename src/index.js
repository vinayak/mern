import React from 'react';
import {render} from 'react-dom';
import {Route, Redirect, Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import './assets/css/index.css'

import App from './App';
import SignIn from './pages/users/signin'
import Header from './pages/header';
import Footer from './pages/footer';
import Admin from './pages/users/login';
import Login from './pages/login/';
import UserList from './pages/users/list';
import AccountList from './pages/account/list';
import Report from './pages/report/report';
import Profile from './pages/profile/profile';
import Bank from './pages/bank/bank';
import Assessment from './pages/assessment/list';
import Test from './pages/assessment/new';
import BankList from './pages/bank/list';
import TutorList from './pages/tutor/list';
import TutorNew from './pages/tutor/new';
import Password from './pages/tutor/password';

import store from './store';
import history from './utils/history';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props)=>(
      store.getState().token
      ? <Component {...props}/>
    : <Redirect to="/"/>
    )} />
);

render((
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header store={store} />
        <main role="main" className="container">
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/swara" render={()=>(
              store.getState().token
              ? <Redirect to="/"/>
            : <Admin/>
            )} />
          <Route path="/login" render={()=>(
              store.getState().token
              ? <Redirect to="/"/>
            : <Login/>
            )} />
          <Route path="/setpassword/:id" exact component={Password} />
          <PrivateRoute path="/users" component={UserList} />
          <PrivateRoute path="/accounts" component={AccountList} />
          <PrivateRoute path="/bank" component={BankList} />
          <PrivateRoute path="/question/:id?" component={Bank} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/assessment" component={Assessment} />
          <PrivateRoute path="/test" component={Test} />
          <PrivateRoute path="/report" component={Report} />
          <PrivateRoute path="/tutors" component={TutorList} />
          <PrivateRoute path="/tutor/new" component={TutorNew} />

        </main>
        <Footer/>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
