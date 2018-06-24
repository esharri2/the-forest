import React from 'react';
import Loader from './Loader';

const Play = props =>
    <button
        className={`play ${props.playing ? "on" : "off"}`}
        onClick={props.play}>
        {props.loaded ? props.letter : <Loader/>}
    </button>

export default Play;