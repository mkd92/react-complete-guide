import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Mac', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 26 },
    ],
    otherState: 'someOtherValue'
  }
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Steph', age: 27 },
        ]
      }
    )
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Mac', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Steph', age: 26 },
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: ' 8px',
      cursor: 'pointer',
    };
    return (

      <div className="App">
        <h1> Hi, I am React app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Manikandan")} >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
