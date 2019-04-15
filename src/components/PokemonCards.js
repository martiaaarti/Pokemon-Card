import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/forceColors.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

export class PokemonCards extends Component {
    render() {

        const { pokemons, error, loading, previousPage, nextPage } = this.props;

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
            <div>
                <div className='parent m-1'>
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.id} className='card text-center'>
                            <Link to={'/details/' + pokemon.id} className='link-decoration' style={{ textDecoration: 'none' }}>
                                <img className='card-img-top p-4' height='80%' src={pokemon.img} alt='Pokemon thumbnail' />
                                <h4 className='card-title p-2'>#{pokemon.num} {pokemon.name}</h4>
                            </Link>
                            <div className='align-bottom mb-2'>
                                {pokemon.type.map((force, i) => (
                                    <span size='sm' className={'badge p-1 mx-1 ' + force} key={i} >
                                        {force}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <nav aria-label='navigation'>
                    <ul className='pagination justify-content-center pagination-decoration'>
                        <Link to={'/' + previousPage } style={{ textDecoration: 'none' }}>
                            <li className='page-item mr-2'>Previous</li>
                        </Link>
                        <Link to={'/' + nextPage } style={{ textDecoration: 'none' }}>
                            <li className='page-item ml-2'>Next</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const currentPageNumber = ownProps.match.params.currentPageNumber;
    const nextPage = state.pokemons ? (currentPageNumber + 1) : null;
    const previousPage = state.pokemons ? (currentPageNumber - 1) : null;
    

    return {
        previousPage: previousPage,
        nextPage: nextPage,
        pokemons: state.pokemons,
        loading: state.loading,
        error: state.error
    };
}

PokemonCards.propTypes = {
    previousPage: PropTypes.number,
    nextPage: PropTypes.number
}

export default withRouter(connect(
    mapStateToProps
)(PokemonCards));
