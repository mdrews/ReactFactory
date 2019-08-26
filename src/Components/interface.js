import React from 'react';

import { PlayerStats } from "./playerStats";
import { DisplayMap } from './displayMap';

function Interface(props) {
    return(<div>
        <PlayerStats 
            player={props.player} 
            
        />
        <DisplayMap map={props.map} addIron={props.addIron} />
    </div>);
}

export { Interface };