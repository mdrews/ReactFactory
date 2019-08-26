import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import { addIron } from '../actions/index';
import { mapReducer } from '../reducers/index';
import { Interface } from './interface';


const mapStateToProps = (state) => {
    return {
        player: state.player,
        map: state.map
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIron: () => {
            dispatch(addIron());
        }
    }
}

const newMapChunk = () => {
    let chunk = new Array(10);
    for(let y = 0; y < 10; y++) {
        chunk[y] = new Array(10);
    for(let x = 0; x < 10; x++) {
        chunk[y][x] = {x: x, y: y, iron: 10}
    }
        return(chunk);
    }
}

const state = { map: newMapChunk(), player: {
    iron: 0,
    copper: 0
}};

const store = createStore(mapReducer, state);
const Container = connect(mapStateToProps, mapDispatchToProps)(Interface);

function Game() {
    return(<Provider store={store}><Container /></Provider>);
}

export { Game };