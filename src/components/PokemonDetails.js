import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { getData } from '../actions/index';

export class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {

        const { pokemon } = this.props;

        return pokemon ? (

            <div className='card mt-4'>
                <div className='card-header'>
                    <h1 className='text-center'>Pokemon Details
                    <button type='button' className='close' onClick={this.goBack} aria-label='Close'>
                            <FontAwesomeIcon icon='times' />
                        </button>
                    </h1>
                </div>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={pokemon.img} className='card-img p-4' alt='Pokemon Thumbnali'></img>
                    </div>
                    <div className='col-md-8'>
                        <Details pokemon={pokemon} />
                    </div>
                </div>
            </div>
        ) : null;
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id);
    const pokemons = state.pokemons;
    const pokemon = pokemons ? pokemons.find(pokemon => pokemon.id === id) : null;
    return {
        pokemon: pokemon
    }
}

export default withRouter(connect(
    mapStateToProps,
    { getData }
)(PokemonDetails));