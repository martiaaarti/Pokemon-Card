import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faSpinner} from '@fortawesome/free-solid-svg-icons'
import PokemonCards from './PokemonCards.js';
import PokemonDetails from './PokemonDetails.js';
library.add(faTimes, faSpinner);

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => (
                        <PokemonCards />
                    )} />
                    <Route path='/details/:id' component={PokemonDetails} />
                </Switch>
            </div>
        )
    }
};