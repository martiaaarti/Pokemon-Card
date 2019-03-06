import React, {Component} from 'react';
import {connect} from "react-redux";
import {getData} from "../actions/index";
import {getForceColor} from './getForceColor';
import {Link} from 'react-router-dom';


export class PokemonCard extends Component {
    constructor(props) {
        super(props);

        this.getForceColor = this.getForceColor;
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className='parent m-1'>
                {this.props.pokemons.map((pokemon) => (
                    <div key={pokemon.id} className='card text-center' >
                        <img className='card-img-top' height='80%' src={pokemon.img} alt="Pokemon thumbnail" />
                        <Link to={'/details/' + pokemon.id} className='link-decoration' style={{ textDecoration: 'none' }}>
                            <h5 className='card-title p-2'>#{pokemon.num} {pokemon.name}</h5>
                        </Link>
                        <div className='align-bottom mb-2'>
                            {pokemon.type.map((force, i) => (
                                <span size='sm' className='badge p-1 mx-1' key={i} style={getForceColor(force)} >
                                    {force}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    };
}

export default connect(
    mapStateToProps,
    {getData}
)(PokemonCard);
