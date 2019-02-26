import React from 'react';
import { Card, CardImg, CardTitle, Container } from 'reactstrap';

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
        <Container>
            <div className='row m-1'>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} className='col-3 text-center'>
                        <CardImg top width="90%" height="70%" src={pokemon.img}/>
                        <CardTitle className='p-2'># {pokemon.num} {pokemon.name}</CardTitle>
                        <div className='align-bottom'>
                            {pokemon.type.map((force, index) => (
                                <span size='sm' className='badge p-1 mx-1' key={index} style={grassForce}>
                                    {force}
                                </span>
                            ))}
                        </div>                        
                    </Card>
                ))}
            </div>
        </Container>
    )
}
export default PokemonCard;