import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import './assets/css/index.css'

import App from './App';
import SignIn from './pages/users/signin'
import Header from './pages/header';
import Footer from './pages/footer';
import Login from './pages/users/login'
import UserList from './pages/users/list'
import store from './store'

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header store={store}/>
        <main role="main" className="container">
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={Login} />
          <Route path="/list" render={()=>(
              store.getState().token
              ? <UserList/>
            : <Redirect to="/login"/>
            )} />
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
