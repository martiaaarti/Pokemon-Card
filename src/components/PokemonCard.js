import React, {Component} from 'react';
import {connect} from "react-redux";
import {getData} from "../actions/index";
import {CardTitle} from 'reactstrap';
import {getForceColor} from './getForceColor';


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
                                    <img className='card-img-top' height='70%' src={pokemon.img} alt="Pokemon thumbnail"/>
                                    <CardTitle className='p-2'># {pokemon.num} {pokemon.name}</CardTitle>
                                    <div className='align-bottom'>
                                        {pokemon.type.map((force, i) => (
                                            <span size='sm' className='badge p-1 mx-1 grass-color' key={i} style={getForceColor(force)} >
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

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    };
  }

export default connect(
    mapStateToProps,
    { getData }
  )(PokemonCard);
