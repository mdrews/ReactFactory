import React, { useState } from 'react';
import { Tracker } from '../tracker';

function DisplayMap(props, addIron) {
    const[currentNode, setCurrentNode] = useState();
    
    const handleHover = (node) => {
            setCurrentNode(node);
    }

    const handleNodeClick = (node) => {
        if(node.iron > 0) {
            props.addIron(node);
        }
        
        let w = window.innerWidth;
        let h = window.innerHeight;
        //console.log('w: ' + w + ', h: ' + h);
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
    //console.log('===props===')
    //console.log(props);
    let playerY = props.characterPosition.y;
    let playerX = props.characterPosition.x;
    let displayArea = new Array(5);
    let startY = playerY - Math.floor(playerY/2);
    let startX = playerX - Math.floor(playerX/2);
    for(let y = 0; y < viewHeight; y++) {
        displayArea[y] = new Array(5);
        for(let x = 0; x < viewWidth; x++) {
            displayArea[y][x] = props.map[startY+y][startX+x];
        }
    }

    const columns = '32px '
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
                return(<div  
                        className={node.iron > 0 ? 'node iron' : 'node'}
                        onClick={() => handleNodeClick(node)} 
                        onMouseOver={() => handleHover(node)}>{node.y}, {node.x}</div>)
            })
        })}
        </div>
        </header>
        </div>
    );
}

export { DisplayMap }