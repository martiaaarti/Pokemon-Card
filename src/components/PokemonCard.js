import React, { Component} from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { CardTitle } from 'reactstrap';
import '../styles/colors.scss';

export class PokemonCard extends Component {
    constructor(props) {
        super(props);
        
        this.getForceColor = this.getForceColor.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    getForceColor(forceType) {
        const colorOfForces = {
            Grass: {
                background: '$font-color',
                color: '$grass-color'
            },
            Poison: {
                background: '$font-color',
                color: '$poison-color'
            },
            Fire: {
                background: '$font-color',
                color: '$fire-color'
            },
            Flying: {
                background: '$font-color',
                color: '$flying-color'
            },
            Water: {
                background: '$font-color',
                color: '$water-color'
            },
            Bug: {
                background: '$font-color',
                color: '$bug-color'
            }
        };
        return colorOfForces[forceType];
    }

    render() {
        return (
            <div className='parent m-1'>
                             {this.props.pokemons.map((pokemon) => (
                                <div key={pokemon.id} className='card text-center' >
                                    <img className='card-img-top' height='70%' src={pokemon.img} alt="Pokemon thumbnail"/>
                                    <CardTitle className='p-2'># {pokemon.num} {pokemon.name}</CardTitle>
                                    <div className='align-bottom'>
                                        {pokemon.type.map((force, index) => (
                                            <span size='sm' className='badge p-1 mx-1 grass-color' key={index}  >
                                                {/* {this.getForceColor(force)} */}
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
