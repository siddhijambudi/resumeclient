import * as React from 'react';
import './App.css';
import PersonDataApp from './PersonDataApp';

import logo from './logo.svg';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PersonDataApp/>
      </div>
    );
  }
}

export default App;