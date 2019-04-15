import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons'
import PokemonCards from './PokemonCards';
import PokemonDetails from './PokemonDetails';
import { getData } from '../actions/index';
import { connect } from 'react-redux';
library.add(faTimes, faSpinner);

export class App extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <Router>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/1'/>}/>
                        <Route path='/details/:id' component={PokemonDetails} />
                        <Route exact path='/:currentPageNumber' component={PokemonCards}/>
                    </Switch>
            </Router>
        )
    }
};

export default connect(
    undefined,
    { getData }
)(App);