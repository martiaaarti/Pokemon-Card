import React from 'react';
import { getForceColor } from './getForceColor';
import PropTypes from 'prop-types';
import { forcePropTypes } from '../types/forcePropTypes.js';
import PrevEvolutionDetails from './PrevEvolutionDetails.js';
import NextEvolutionDetails from './NextEvolutionDetails.js';

function Details(props) {

    const { pokemon } = props;
    const countCandy = pokemon.candy_count ? pokemon.candy_count : '0';
    

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
                    <h5 className='d-inline' key={i}>
                        <span size='sm' className='badge p-1 mx-1' style={getForceColor(weakness)}>
                            {weakness}
                        </span>
                    </h5>
                ))}

                <h3 className='my-3'>Previous and Next pokemon's evolution</h3>
                <div className='row '>
                    <div className='col-6'>
                        <div className='card'>
                            <h4 className='card-header'>Previous Evolution</h4>
                            <PrevEvolutionDetails pokemon={pokemon}/>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='card'>
                            <h4 className='card-header'>Next Evolution</h4>
                            <NextEvolutionDetails pokemon={pokemon}/>
                        </div>
                    </div>
                </div>
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
    weakness: forcePropTypes.isRequired,
}

export default Details
