import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface PersonData {
  id: string;
  name: string;
}

class PersonDataApp extends Component<any, any> {

  constructor(personData: PersonData) {
    super(personData);
    this.state = {
      personData: [],
      isLoading: false
    };
  }
  
  componentDidMount() {
    this.setState({isLoading: true});
    
    fetch('https://siddhijambudiresume.herokuapp.com/api/v1/resume/name')
      .then(response => response.json())
      .then(data => this.setState({personData: data, isLoading: false}));
  }

  render() {
    const {personData, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="">
            <h2>Name</h2>
            {<div key={personData.id}>{personData.name}</div>}
          </div>
        </header>
      </div>
    );
  }
}

export default PersonDataApp;