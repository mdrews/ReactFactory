import React, {useEffect } from 'react';

import { PlayerStats } from "./playerStats";
import { DisplayMap } from './displayMap';

function Interface(props) {

    const handleInput = e => {
        switch (e.keyCode) {
            case 87: // W
                props.moveCharacter(0, 1);
                break;
            case 83: // S
                props.moveCharacter(0, -1);
                break;
            case 65: // A
                props.moveCharacter(1, 0);
                break;
            case 68: // D
                props.moveCharacter(-1, 0);
                break;
            default:
                break;
        }
    }
    
    useEffect(() => {
        document.addEventListener('keydown', handleInput);
        return () => {
            document.removeEventListener('keydown', handleInput);
        }
    });

    return(<div>
        <PlayerStats 
            character={props.character.inventory} 
        />
        <DisplayMap map={props.map} characterPosition={props.character.position} addIron={props.addIron} />
    </div>);
}

export { Interface };