import React from 'react'

const Details = (props) => {

    const countCandy = props.pokemon.candy_count ? props.pokemon.candy_count : "0";

    return (
        <div className='card text-center z-depth-0 mt-5'>
            <div className='card-header'>
                <h1>Pokemon Details</h1>
            </div>
            <div className='card-body'>
                <h2 className=' card-title'># {props.pokemon.num} {props.pokemon.name}</h2>
                <p className='card=text'>Height: {props.pokemon.height}</p>
                <p className='card=text'>Weight: {props.pokemon.weight}</p>
                <p className='card=text'>Candy name: {props.pokemon.candy}, count: {countCandy}</p>
                <p className='card=text'>Egg cycles: {props.pokemon.egg}</p>
                <p className='card=text'>Spawn chance: {props.pokemon.spawn_chance} and average amount: {props.pokemon.avg_spawns}</p>
                <p className='card=text'>Spawn time: {props.pokemon.spawn_time}</p>
            </div>
            <div className='align-bottom m-3'>
                <h4>Weaknesses</h4>
                <span size='sm' className='badge p-1 mx-1'>
                </span>
            </div>
        </div>
    )
}

export default Details
