import React, { Component } from 'react';
import { connect } from "react-redux";
import { getForceColor } from './getForceColor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/forceColors.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {forcePropTypes} from '../types/forcePropTypes.js';


export class PokemonCards extends Component {
    constructor(props) {
        super(props);

        this.getForceColor = this.getForceColor;
    }

    render() {

        const { pokemons, error, loading } = this.props;

        if (error) {
            return <h2> Error! {error.message}</h2>;
        }

        if (loading) {
            return <div className='loading-container fa-10x'>
                <div className='spin-icon'>
                    <FontAwesomeIcon icon='spinner' className=' fa-spin fa-pull-center' />
                    <h2>Loading...</h2>
                </div>
            </div>
        }

        return (
            <div className='parent m-1'>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id} className='card text-center'>
                        <Link to={'/details/' + pokemon.id} className='link-decoration' style={{ textDecoration: 'none' }}>
                            <img className='card-img-top p-4' height='80%' src={pokemon.img} alt="Pokemon thumbnail" />
                            <h5 className='card-title p-2'>#{pokemon.num} {pokemon.name}</h5>
                        </Link>
                        <div className='align-bottom mb-2'>
                            {pokemon.type.map((force, i) => (
                                <span size='sm' className={'badge p-1 mx-1' + force} key={i} >
                                    {force}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};

PokemonCards.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string, //JESLI JESLI JEST REQUIRED
    num: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    force: forcePropTypes.isRequired //MOZNA W INNYM PLIKU I DAĆ ONEOF() Z WSZYSTKICH MOCY 
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        loading: state.loading,
        error: state.error
    };
}

export default connect(
    mapStateToProps
)(PokemonCards);
