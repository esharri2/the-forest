import React, { Component } from 'react';
import Pad from "./Pad";
import "./Pads.css";
import sound1 from './sound-files/1.wav';
import sound2 from './sound-files/2.wav';
import sound3 from './sound-files/3.wav';
import sound4 from './sound-files/4.wav';
import sound5 from './sound-files/5.wav';
import sound6 from './sound-files/6.wav';
import sound7 from './sound-files/7.wav';
import sound8 from './sound-files/8.wav';
import sound9 from './sound-files/9.wav';



class Pads extends Component {
    state = {
        pads: [
            { letter: "A", name:"night insects", url: sound1 },
            { letter: "B", name:"tweety bird", url: sound2 },
            { letter: "C", name:"forest insect", url: sound3 },
            { letter: "D", name:"cave water", url: sound4 },
            { letter: "E", name:"spring birds", url: sound5 },
            { letter: "F", name:"elephants", url: sound6 },
            { letter: "G", name:"howling", url: sound7 },
            { letter: "H", name:"chimps", url: sound8 },
            { letter: "I", name:"thunder", url: sound9 }
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