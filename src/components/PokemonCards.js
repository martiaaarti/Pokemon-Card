import React, { Component } from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { getForceColor } from './getForceColor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/forceColors.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class PokemonCards extends Component {
    constructor(props) {
        super(props);

        this.getForceColor = this.getForceColor;
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {

        const {pokemons, error, loading} = this.props;

        if(error) {
            return <h2>Error! {error.message}</h2>;
        }

        if(loading) {
            return <div className='container fa-10x'>
                <FontAwesomeIcon icon='spinner' className='fa-spin fa-pull-center' />
            </div>
        }

        return (
            <div className='parent m-1'>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id} className='card text-center' >
                        <img className='card-img-top p-4' height='80%' src={pokemon.img} alt="Pokemon thumbnail" />
                        <Link to={'/details/' + pokemon.id} className='link-decoration' style={{ textDecoration: 'none' }}>
                            <h5 className='card-title p-2'>#{pokemon.num} {pokemon.name}</h5>
                        </Link>
                        <div className='align-bottom mb-2'>
                            {pokemon.type.map((force, i) => (
                                <span size='sm' className={'badge p-1 mx-1' + getForceColor(force)} key={i} >
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
    id: PropTypes.number,
    img: PropTypes.string,
    num: PropTypes.string,
    name: PropTypes.string,
    force: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        loading: state.loading,
        error: state.error
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(PokemonCards);
