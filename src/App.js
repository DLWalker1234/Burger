import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = { 
    persons: [
      {name: 'Dustin', age: 30},
      {name: 'Brad', age: 27},
      {name: 'Colton', age: 25}
    ]
  }

  switchNameHandler = () => {
    console.log('This button was clicked')
  }
  render() {
    return (
      <div className="App">
         <h1>Hi, Im a React Noob</h1>
         <p>This is really working!!!</p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default Radium(App);
