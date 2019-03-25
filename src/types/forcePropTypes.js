import { oneOf, shape, string, number} from 'prop-types';

export const forcePropTypes = shape({
    num: string.isRequired,
    name: string.isRequired,
    height: string,
    weight: string,
    candy: string,
    candy_count: number,
    egg: string,
    spawn_chance: number,
    avg_spawns: number,
    spawn_time: string,
    weakness: oneOf([
        'Grass',
        'Poison',
        'Fire',
        'Flying',
        'Water',
        'Bug',
        'Normal',
        'Electric',
        'Ground',
        'Fighting',
        'Psychic',
        'Rock',
        'Ice',
        'Ghost',
        'Dragon'
    ])
    });




