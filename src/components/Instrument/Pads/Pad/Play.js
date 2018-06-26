import React from 'react';
import Loader from './Loader';

const Play = props =>
    <button
        className={`play ${props.playing ? "on" : "off"}`}
        onClick={props.play}
        disabled={!props.loaded}>
        {props.loaded ? props.letter : <Loader />}
    </button>

export default Play;