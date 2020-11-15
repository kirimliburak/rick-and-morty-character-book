import React from 'react';
import './App.css';
import { Component } from 'react';
import { CharacterList } from './components/character-list/character-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    let count = 1;
    let tempArr = [];

    while (count < 35) {
      await fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then(response => response.json())
        .then(chars => chars.results.map(char => tempArr.push(char)));
      count++;
    }
    this.setState({ characters: tempArr }, () => { });
    console.log("Characters: ");
    console.log(this.state.characters);
  }

  render() {
    return (
      <div className="App" >
        <h1>Rick and Morty Character Book</h1>
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
