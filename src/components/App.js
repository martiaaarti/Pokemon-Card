import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import PokemonCard from './PokemonCard.js';
import PokemonDetails from './PokemonDetails.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={PokemonCard} /> 
                <Route path='/details/:pokemon_id' component={PokemonDetails} />           
            </div>
        )
    }
};