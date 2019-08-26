import { ADDIRON } from '../actions/type';

const state = {
    player: {
        iron: 0,
        copper: 0
    }
}

const mapReducer = (state = {}, action) => {
    switch(action.type) {
        case ADDIRON:
            return { ...state,
                        player: {
                            iron: state.player.iron+1
                        }}
        default:
            return state;
    }
}

export { mapReducer }