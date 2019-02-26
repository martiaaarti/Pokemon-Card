import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';

export default class App extends Component {
    state = { pokemons: [] };
  

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => this.setState({pokemons: data}))
    .catch(() => alert('Can not load data'));
  }

  render() {
    return (
      <div>
          <PokemonCard pokemons={this.state.pokemons}/>        
      </div>
    );
  }
}
