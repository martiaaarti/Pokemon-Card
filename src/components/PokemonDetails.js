import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getData} from "../actions/index";

export class PokemonDetails extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {

        return (
            <div className='container section pokemon-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{this.props.pokemon.id}</span>
                        <p>Pokemon information</p>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const pokemons = state.pokemons;
    const pokemon = pokemons ? pokemons[id] : null;
    return {
        pokemon: pokemon
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(PokemonDetails);