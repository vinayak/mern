import React, { Component } from 'react';
import Home from './pages/home/home';
import Landing from './pages/home/landing';

class App extends Component {
  render() {
    console.log("Home");
    console.log(window.location.hostname);
    let home;
    if (window.location.hostname.split('.').length === 2) {
      home = <Home />;
    }else{
      home = <Landing />;
    }
    return (
      <div className="App">
        {home}
      </div>
    );
  }
}

export default App;
