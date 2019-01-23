import React, { Component } from 'react';
import './App.css';
import Cards from './card.js';

// Make new react app outside of JS workbook
// Put into new repository
// Must call an API
// Must use a library
// Must have at least one child component
// Submit using regular pull request
// The last day I’ll grade is Sep 28th

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Random Jeopardy Questions</h1>
        <div className="App">
          {/*importing the material ui card from card.js*/}
          <Cards/>
        </div>
      </div>
    );
  }
}

export default App;
