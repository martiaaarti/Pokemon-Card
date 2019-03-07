import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import PokemonThumbnail from './PokemonThumbnail';
import Details from './Details';

export class PokemonDetails extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className='container section'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <PokemonThumbnail pokemon={this.props.pokemon} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Details pokemon={this.props.pokemon} />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const pokemons = state.pokemons;
    const pokemon = pokemons ? pokemons[id-1] : null;
    return {
        pokemon: pokemon
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(PokemonDetails);