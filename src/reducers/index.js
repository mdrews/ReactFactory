import { ADDIRON, MOVE } from '../actions/type';
import { nodeInternals } from 'stack-utils';

const state = {
    character: {
        iron: 0,
        copper: 0
    }
}

const mapReducer = (state = {}, action) => {
    switch(action.type) {
        case ADDIRON:
            console.log(state.map);
            let newMap = state.map;
            newMap[action.node.y][action.node.x].iron--;
            return {    map: newMap,
                        character: {
                            position: state.character.position,
                            inventory: {
                                copper: state.character.inventory.copper,
                                iron: state.character.inventory.iron+1
                            }
                        }}
        case MOVE:
            return {
                ...state,
                    character: {
                        inventory: state.character.inventory,
                        position: {
                            x: state.character.position.x-action.coords.x,
                            y: state.character.position.y-action.coords.y
                        }
                    }
            }
        default:
            return state;
    }
}

export { mapReducer }