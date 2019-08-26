import React from 'react';

function PlayerStats(props) {
    return(<div>
        <div>Iron: {props.player.iron} &ensp; Copper: {props.player.copper}</div>
    </div>)
}

export { PlayerStats };