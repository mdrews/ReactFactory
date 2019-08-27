import React, {useEffect } from 'react';

import { PlayerStats } from "./playerStats";
import { DisplayMap } from './displayMap';

// const checkKey = e => {
//     console.log('key: ' + e.keyCode);
// }

// useEffect(() => {
//     document.addEventListener('keydown', checkKey)
// })

function Interface(props) {
    return(<div>
        <PlayerStats 
            player={props.player} 
            
        />
        <DisplayMap map={props.map} addIron={props.addIron} />
    </div>);
}

export { Interface };