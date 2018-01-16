import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import {loadState, saveState} from  './localStorage'
import './assets/css/index.css'

import App from './App';
import SignIn from './pages/users/signin'
import Header from './pages/header';
import Footer from './pages/footer';
import Login from './pages/users/login'
import UserList from './pages/users/list'


const persistedState = loadState()
const store=createStore(rootReducer, persistedState);

store.subscribe(()=>{
  saveState(store.getState());
})

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <main role="main" className="container">
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={Login} />
          <Route path="/list" component={UserList} />
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
