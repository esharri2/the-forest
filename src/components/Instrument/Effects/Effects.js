import React, { Component } from 'react';
import Effect from './Effect'
import './Effects.css'

const Effects = props => {
    const effects = [];

    for (let name in props.effects) {
        effects.push(
            <Effect
                key={name}
                name={name}
                value={props.effects[name]}
                updateEffect={props.updateEffect} />
        )
    }

    return effects;

}

export default Effects;