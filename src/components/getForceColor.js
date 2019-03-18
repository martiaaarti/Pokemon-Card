import '../styles/forceColors.scss';

export const getForceColor = (forceType) => {
    const fontColor = 'rgb(242, 242, 242)';
        const colorOfForces = {
            Grass: 'grass-force',

            Poison: 'poison-force',
            Fire: {
                background: 'rgb(255, 71, 26)',
                color: fontColor
            },
            Flying: {
                background: 'rgb(153, 153, 255)',
                color: 'rgb(242, 242, 242)'
            },
            Water: {
                background: 'rgb(0, 153, 255)',
                color: fontColor
            },
            Bug: {
                background: 'rgb(163, 163, 117)',
                color: fontColor
            },
            Normal: {
                background: 'rgb(102, 153, 0)',
                color: fontColor
            },
            Electric: {
                background: 'rgb(197, 197, 116)',
                color: fontColor
            },
            Ground: {
                background: 'rgb(77, 38, 0)',
                color: fontColor
            },
            Fighting: {
                background: 'rgb(0, 204, 136)',
                color: fontColor
            },
            Psychic: {
                background: 'rgb(163, 218, 108)',
                color: fontColor
            },
            Rock: {
                background: 'rgb(153, 153, 147)',
                color: fontColor
            },
            Ice: {
                background: 'rgb(96, 202, 202)',
                color: fontColor
            },
            Ghost: {
                background: 'rgb(230, 230, 230)',
                color: 'rgb(0, 26, 51)'
            },
            Dragon: {
                background: 'rgb(0, 102, 0)',
                color: fontColor
            }
        };
        return colorOfForces[forceType];
};