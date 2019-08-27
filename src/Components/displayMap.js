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
        let w = window.innerWidth;
        let h = window.innerHeight;
        console.log('w: ' + w + ', h: ' + h);
    }

    // const chunkArray = () => {
    //     let array = new Array(10);
    //     for(let y = 0; y < 10; y++) {
    //         array[y] = new Array(10);
    //         for(let x = 0; x < 10; x++) {
    //             array[y][x] = {x: x, y: y, iron: 10}
    //         }
    //     }
    //     return(array);
    // }
    let viewWidth = 5;
    let viewHeight = 5;
    let playerY = 5;
    let playerX = 5;
    let displayArea = new Array(5);
    let startY = playerY - Math.ceil(playerY/2);
    let startX = playerX - Math.ceil(playerX/2);
    for(let y = 0; y < viewHeight; y++) {
        displayArea[y] = new Array(5);
        for(let x = 0; x < viewWidth; x++) {
            displayArea[y][x] = props.map[startY+y][startX+x];
        }
    }

    const columns = '32px '
    console.log(columns);
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: columns.repeat(5),
        width: (32*viewWidth)+'px',
        height: (32*viewWidth)+'px'
    }

    let chunk = displayArea;
    return (
        <div className="App">
        <header className="App-header">
        <Tracker node={currentNode} />
        
        <div className='grid-container' style={gridStyle}>
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