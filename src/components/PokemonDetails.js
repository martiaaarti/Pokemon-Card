import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import Details from './Details';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class PokemonDetails extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className='card mt-4'>
                <div className='card-header'>
                    <h1 className='text-center'>Pokemon Details
                    <Link to='/'><FontAwesomeIcon icon='times' className='fa-pull-right' style={{ color: '#212529' }} /></Link>
                    </h1>
                </div>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={this.props.pokemon.img} className="card-img p-4" alt="Pokemon Thumbnali"></img>
                    </div>
                    <div className='col-md-8'>
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
    const pokemon = pokemons ? pokemons[id - 1] : null;
    return {
        pokemon: pokemon
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(PokemonDetails);