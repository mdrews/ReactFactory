import { ADDIRON, MOVE } from './type';

const addIron = (node) => {
    return {
        type: ADDIRON,
        node
    }
};

const moveCharacter = (x, y) => {
    return {
        type: MOVE,
        coords: {x: x, y: y}
    }
}

export { addIron, moveCharacter };