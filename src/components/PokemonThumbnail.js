import React from 'react'

const PokemonThumbnail = (props) => {
    return (
        <div className='card z-depth-0 mt-5'>
            <img src={props.pokemon.img} class="card-img" alt="Pokemon Thumbnali"></img>
        </div>
    )
}

export default PokemonThumbnail
