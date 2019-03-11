import React from 'react';
import { getForceColor } from './getForceColor';

const Details = (props) => {

    const countCandy = props.pokemon.candy_count ? props.pokemon.candy_count : "0";

    return (
        <div className='text-center'>
            <div className='card-body p-2'>
                <h2 className=' card-title mb-3'># {props.pokemon.num} {props.pokemon.name}</h2>
                <h5 className='card-text mb-2'><b>Height:</b> {props.pokemon.height}</h5>
                <h5 className='card-text mb-2'><b>Weight:</b> {props.pokemon.weight}</h5>
                <h5 className='card-text mb-2'><b>Candy name:</b> {props.pokemon.candy}</h5>
                <h5 className='card-text mb-2'><b>Candy count:</b> {countCandy}</h5>
                <h5 className='card-text mb-2'><b>Egg cycles:</b> {props.pokemon.egg}</h5>
                <h5 className='card-text mb-2'><b>Spawn chance:</b> {props.pokemon.spawn_chance}</h5>
                <h5 className='card-text mb-2'><b>Average spawns:</b> {props.pokemon.avg_spawns}</h5>
                <h5 className='card-text'><b>Spawn time:</b> {props.pokemon.spawn_time}</h5>
            </div>
            <div className='align-bottom m-2'>
                <h3>Weaknesses</h3>
                {props.pokemon.weaknesses.map((weakness, i) => (
                    <h5 className='d-inline' key={i}><span size='sm' className='badge p-1 mx-1' style={getForceColor(weakness)}>
                        {weakness}
                    </span></h5>
                ))}
            </div>
        </div>
    )
}

export default Details
