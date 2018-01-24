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
import Login from './pages/users/login';
import UserList from './pages/users/list';
import store from './store';
import history from './utils/history';

// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()

render((
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header store={store} />
        <main role="main" className="container">
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" render={()=>(
              store.getState().token
              ? <Redirect to="/"/>
            : <Login/>
            )} />
          <Route path="/list" render={()=>(
              store.getState().token
              ? <UserList/>
            : <Redirect to="/login"/>
            )} />
        </main>
        <Footer/>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
