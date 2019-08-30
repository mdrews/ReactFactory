import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import { addIron, moveCharacter } from '../actions/index';
import { mapReducer } from '../reducers/index';
import { Interface } from './interface';


const mapStateToProps = (state) => {
    return {
        character: state.character,
        map: state.map
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIron: () => {
            dispatch(addIron());
        },
        moveCharacter: (x, y) => {
            dispatch(moveCharacter(x, y))
        }
    }
}

const newMapChunk = () => {
    let chunk = new Array(10);
    for(let y = 0; y < 10; y++) {
        chunk[y] = new Array(10);
        for(let x = 0; x < 10; x++) {
            chunk[y][x] = {x: x, y: y, iron: 0}
        }
    }
        chunk[4][4].iron = 30;
        return(chunk);
}

const state = { map: newMapChunk(), character: {
    position: {
        x: 5,
        y: 5
    },
    inventory: {
        iron: 0,
        copper: 0
    }
    
}};

const store = createStore(mapReducer, state);
const Container = connect(mapStateToProps, mapDispatchToProps)(Interface);

function Game() {
    return(<Provider store={store}><Container /></Provider>);
}

export { Game };