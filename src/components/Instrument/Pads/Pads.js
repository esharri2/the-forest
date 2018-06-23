import React, { Component } from 'react';
import Pad from "./Pad"
import "./Pads.css"


class Pads extends Component {
    state = {
        pads: [
            "http://bbcsfx.acropolis.org.uk/assets/07074116.wav",
            "http://bbcsfx.acropolis.org.uk/assets/07054093.wav",
            "http://bbcsfx.acropolis.org.uk/assets/07058032.wav",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ]
    }
    render() {
        return (
            <div className="pads">
                {this.state.pads.map((url, index) => <Pad key={index} url={url} effects={this.props.effects} />)}
            </div>
        )
    }
}

export default Pads;