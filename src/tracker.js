import React from 'react';

function Tracker(props) {
    let x = props.node ? props.node.x : '';
    let y = props.node ? props.node.y : '';
    let iron = props.node ? props.node.iron : '';

    return(
    <div>
        <div>x: {x}</div>
        <div>y: {y}</div>
        <div>iron: {iron}</div>
    </div>
    );
}

export { Tracker }