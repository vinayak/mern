import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css'

import App from './App';
import SignIn from './pages/users/signin'
import Header from './pages/header';
import Footer from './pages/footer';

render((
    <BrowserRouter>
      <div>
        <Header/>
        <main role="main" className="container">
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
