import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faSpinner} from '@fortawesome/free-solid-svg-icons'
import PokemonCards from './PokemonCards.js';
import PokemonDetails from './PokemonDetails.js';
import { getData } from "../actions/index";
import { connect } from "react-redux";
library.add(faTimes, faSpinner);

export class App extends Component {

    componentDidMount() {
        this.props.getData();
    }

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

export default connect(
    null,
    { getData }
)(App);