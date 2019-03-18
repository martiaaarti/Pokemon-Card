import React from 'react';
import { getForceColor } from './getForceColor';
import PropTypes from 'prop-types';

const Details = (props) => {

    const countCandy = props.pokemon.candy_count ? props.pokemon.candy_count : "0";
    const {pokemon} = props;

    return (
        <div className='text-center'>
            <div className='card-body p-2'>
                <h2 className=' card-title mb-3'># {pokemon.num} {pokemon.name}</h2>
                <h5 className='card-text mb-2'><b>Height:</b> {pokemon.height}</h5>
                <h5 className='card-text mb-2'><b>Weight:</b> {pokemon.weight}</h5>
                <h5 className='card-text mb-2'><b>Candy name:</b> {pokemon.candy}</h5>
                <h5 className='card-text mb-2'><b>Candy count:</b> {countCandy}</h5>
                <h5 className='card-text mb-2'><b>Egg cycles:</b> {pokemon.egg}</h5>
                <h5 className='card-text mb-2'><b>Spawn chance:</b> {pokemon.spawn_chance}</h5>
                <h5 className='card-text mb-2'><b>Average spawns:</b> {pokemon.avg_spawns}</h5>
                <h5 className='card-text'><b>Spawn time:</b> {pokemon.spawn_time}</h5>
            </div>
            <div className='align-bottom m-2'>
                <h3>Weaknesses</h3>
                {pokemon.weaknesses.map((weakness, i) => (
                    <h5 className='d-inline' key={i}><span size='sm' className='badge p-1 mx-1' style={getForceColor(weakness)}>
                        {weakness}
                    </span></h5>
                ))}
            </div>
        </div>
    )
}

Details.propTypes = {
    num: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    candy: PropTypes.string,
    candy_count: PropTypes.number,
    egg: PropTypes.string,
    spawn_chance: PropTypes.number,
    avg_spawns: PropTypes.number,
    spawn_time: PropTypes.string,
    weakness: PropTypes.string,
}

export default Details
