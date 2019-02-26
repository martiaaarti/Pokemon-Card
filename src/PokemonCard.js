import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';

const PokemonCard = (props) => {

    const {pokemons} = props;
    const grassForce = {
        background : 'rgb(0, 128, 43)',
        color: 'rgb(242, 242, 242)'
    };
    const poisonForce = {
        background: 'rgb(153, 0, 153)',
        color: 'rgb(242, 242, 242)'
    };
    const fireForce = {
        background: 'rgb(255, 71, 26)',
        color: 'rgb(242, 242, 242)'
    }
    const flyingForce = {
        background: 'rgb(153, 153, 255)',
        color: 'rgb(242, 242, 242)'
    }
    const waterForce = {
        background: 'rgb(0, 153, 255)',
        color: 'rgb(242, 242, 242)'
    }
    const bugForce = {
        background: 'rgb(163, 163, 117)',
        color: 'rgb(242, 242, 242)'
    }

    return (
            <div className='parent m-1'>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id} className='card text-center' >
                        <CardImg className='thumbnail' top width='70%' height='70%' src={pokemon.img}/>
                        <CardTitle className='p-2'># {pokemon.num} {pokemon.name}</CardTitle>
                        <div className='align-bottom'>
                            {pokemon.type.map((force, index) => (
                                <span size='sm' className='badge p-1 mx-1' key={index} style={grassForce}>
                                    {force}
                                </span>
                            ))}
                        </div>                        
                    </div>
                ))}
            </div>
    )
}
export default PokemonCard;