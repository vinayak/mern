import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import CarouselIndex from './pages/carousel/index'

render((
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/carousel" component={CarouselIndex} />
      </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
