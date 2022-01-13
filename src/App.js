import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person'


const StyledButton = styled.button` 
background-color: ${props => props.alt ? 'red':'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon':'lightgreen'};
  color: black;
}`;
class App extends Component {
  state = {
    persons: [
      { id: 'jcnej', name: 'Mac', age: 28 },
      { id: 'seggs', name: 'Manu', age: 29 },
      { id: 'jmfhg', name: 'Steph', age: 26 },
    ],
    otherState: 'someOtherValue',
    showPersons: false,
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {

    this.setState({
      showPersons: !this.state.showPersons,
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: ' 8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   }
    // };
    let persons = null;
    if (this.state.showPersons) {
      persons = (< div >
        {this.state.persons.map((person, index) => {
          return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })}

      </div>
      );
      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon ',
      //   color: 'black',
      // };
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }



    return (
     
        <div className="App  ">
          <h1> Hi, I am React app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <StyledButton
            alt = {this.state.showPersons}
            onClick={this.togglePersonsHandler} >Switch Name</StyledButton>
          {persons}
        </div>
      
    );
  }
}

export default App;
