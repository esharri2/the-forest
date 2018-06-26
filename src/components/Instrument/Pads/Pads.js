import React, { Component } from 'react';
import Pad from "./Pad"
import "./Pads.css"


class Pads extends Component {
    state = {
        pads: [
            { letter: "A", name:"night insects", url: "http://bbcsfx.acropolis.org.uk/assets/07053042.wav" },
            { letter: "B", name:"tweety bird", url: "http://bbcsfx.acropolis.org.uk/assets/07074114.wav" },
            { letter: "C", name:"forest insect", url: "http://bbcsfx.acropolis.org.uk/assets/00008089.wav" },
            { letter: "D", name:"cave water", url: "http://bbcsfx.acropolis.org.uk/assets/07072023.wav" },
            { letter: "E", name:"spring birds", url: "http://bbcsfx.acropolis.org.uk/assets/07074106.wav" },
            { letter: "F", name:"elephants", url: "http://bbcsfx.acropolis.org.uk/assets/07062088.wav" },
            { letter: "G", name:"howling", url: "http://bbcsfx.acropolis.org.uk/assets/07074100.wav" },
            { letter: "H", name:"chimps", url: "http://bbcsfx.acropolis.org.uk/assets/07062023.wav" },
            { letter: "I", name:"thunder", url: "http://bbcsfx.acropolis.org.uk/assets/07043390.wav" }
        ]
    }

    render() {
        return (
            <div className="pads">
                {this.state.pads.map((pad, index) => <Pad key={index} url={pad.url} letter={pad.letter} effects={this.props.effects} />)}
            </div>
        )
    }
}

export default Pads;