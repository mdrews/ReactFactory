import { ADDIRON, MOVE } from './type';

const addIron = () => {
    return {
        type: ADDIRON
    }
};

const moveCharacter = (x, y) => {
    return {
        type: MOVE,
        coords: {x: x, y: y}
    }
}

export { addIron, moveCharacter };