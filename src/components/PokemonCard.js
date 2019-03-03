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
                background: 'rgb(0, 128, 43)',
                color: 'rgb(242, 242, 242)'
            },
            Poison: {
                background: 'rgb(153, 0, 153)',
                color: 'rgb(242, 242, 242)'
            },
            Fire: {
                background: 'rgb(255, 71, 26)',
                color: 'rgb(242, 242, 242)'
            },
            Flying: {
                background: 'rgb(153, 153, 255)',
                color: 'rgb(242, 242, 242)'
            },
            Water: {
                background: 'rgb(0, 153, 255)',
                color: 'rgb(242, 242, 242)'
            },
            Bug: {
                background: 'rgb(163, 163, 117)',
                color: 'rgb(242, 242, 242)'
            },
            Normal: {
                background: 'rgb(102, 153, 0)',
                color: 'rgb(242, 242, 242)'
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
                                            <span size='sm' className='badge p-1 mx-1 grass-color' key={index} style={this.getForceColor(force)} >
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
