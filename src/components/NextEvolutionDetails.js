import React from 'react';

function NextEvolutionDetails(props) {

    if (!props.pokemon.next_evolution) {
        return <h4 className='my-4'>There is the last evolution form.</h4>;
    }

    return (
        <div>
            {props.pokemon.next_evolution.map((evolution, i) => (
                <h4 key={i} className='card-title'># {evolution.num} {evolution.name}</h4>
            ))}
        </div>
    )
}

export default NextEvolutionDetails;