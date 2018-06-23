import React from 'react';

const Play = props => {
    return <button className={`play ${props.playing?"on":"off"}` } onClick={props.play}></button>
}

export default Play;