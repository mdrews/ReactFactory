import React from 'react';

function PlayerStats(props) {
    console.log(props);
    return(<div>
        <div>Iron: {props.character.iron} &ensp; Copper: {}</div>
    </div>)
}

export { PlayerStats };