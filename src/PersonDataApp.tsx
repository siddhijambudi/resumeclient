import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PersonDataApp extends Component {
  state = {
    isLoading: true,
    personData: Object
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/v1/resume/name');
    const body = await response.json();

    this.setState({ personData: body, isLoading: false });
  }

  render() {
    const {personData, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Name</h2>
            {<div key={personData.id}>{personData.name}</div>}
          </div>
        </header>
      </div>
    );
  }
}

export default PersonDataApp;