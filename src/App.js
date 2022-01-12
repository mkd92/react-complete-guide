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
    otherState: 'someOtherValue',
    showPersons: false,
  }
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Steph', age: 27 },
        ],

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
  togglePersonsHandler = () => {

    this.setState({
      showPersons: !this.state.showPersons,
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
    let persons = null;
    if (this.state.showPersons) {
      persons = (< div >
        {this.state.persons.map(person => {
          return <Person
            name={person.name}
            age={person.age}
          />
        })}

      </div>);
    }
    return (

      <div className="App">
        <h1> Hi, I am React app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Switch Name</button>
        {persons}

      </div>
    );
  }
}

export default App;
