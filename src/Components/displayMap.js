import React, { useState } from 'react';
import { Tracker } from '../tracker';

function DisplayMap(props, addIron) {
    const[currentNode, setCurrentNode] = useState();
    
    const handleHover = (node) => {
            setCurrentNode(node);
    }

    const handleNodeClick = () => {
        props.addIron();
        console.log(props);
    }

    const chunkArray = () => {
        let array = new Array(10);
        for(let y = 0; y < 10; y++) {
            array[y] = new Array(10);
            for(let x = 0; x < 10; x++) {
                array[y][x] = {x: x, y: y, iron: 10}
            }
        }
        return(array);
    }

    let chunk = chunkArray();
    return (
        <div className="App">
        <header className="App-header">
        <Tracker node={currentNode} />
        
        <div className='grid-container'>
        {chunk.map(row => {
                return row.map(node => {
                return(<div className='node' onClick={handleNodeClick} onMouseOver={() => handleHover(node)}>{node.y}, {node.x}</div>)
                })
        })}
        </div>
        </header>
        </div>
    );
}

export { DisplayMap }