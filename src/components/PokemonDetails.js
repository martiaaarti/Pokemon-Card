import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './Details';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';

export class PokemonDetails extends Component {
    render() {
        
        const {pokemon} = this.props;

        return pokemon ? (
            <div className='card mt-4'>
                <div className='card-header'>
                    <h1 className='text-center'>Pokemon Details
                    <Link to='/'><FontAwesomeIcon icon='times' className='fa-pull-right' style={{ color: '#212529' }} /></Link>
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
    const id = ownProps.match.params.id;
    const pokemons = state.pokemons;
    const pokemon = pokemons ? pokemons[id - 1] : null;
    return {
        pokemon: pokemon
    }
}

export default withRouter(connect(
    mapStateToProps
)(PokemonDetails));