import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonCards from './PokemonCards.js';
import PokemonDetails from './PokemonDetails.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={PokemonCards} />
                    <Route path='/details/:id' component={PokemonDetails} />
                </Switch>
            </div>
        )
    }
};