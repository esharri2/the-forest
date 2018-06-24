import React, { Component } from 'react';
import './Instrument.css';
import Pads from "./Pads";
import Effects from "./Effects";

class Instrument extends Component {

    state = {
        distortion: 0,
        reverb: 0,
        speed: 0,
        slow: 0
    }

    updateEffect = (effect, value) => {
        this.setState({ [effect]: value })
    }

    render() {
        return (
            <div id="instrument">
                <Pads effects={this.state} />
                <Effects effects={this.state} updateEffect={this.updateEffect} />
            </div>
        )
    }
}

export default Instrument;
