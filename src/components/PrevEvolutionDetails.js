import React from 'react';

function PrevEvolutionDetails(props) {

    if (!props.pokemon.prev_evolution) {
        return <h4 className='my-4'>No previous evolution form.</h4>;;
    }

    return (
        <div>
        {props.pokemon.prev_evolution.map((previous, k) => (
            <h4 key={k} className='card-title'># {previous.num} {previous.name}</h4>
        ))}
        </div>
    )
}

export default PrevEvolutionDetails;