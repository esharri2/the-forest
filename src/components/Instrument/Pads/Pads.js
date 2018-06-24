import React, { Component } from 'react';
import Pad from "./Pad"
import "./Pads.css"


class Pads extends Component {
    state = {
        pads: [
            { letter: "A", url: "http://bbcsfx.acropolis.org.uk/assets/07074116.wav" },
            { letter: "B", url: "http://bbcsfx.acropolis.org.uk/assets/07054093.wav" },
            { letter: "C", url: "http://bbcsfx.acropolis.org.uk/assets/07058032.wav" },
            { letter: "D", url: "http://bbcsfx.acropolis.org.uk/assets/07074116.wav" },
            { letter: "E", url: "http://bbcsfx.acropolis.org.uk/assets/07074116.wav" },
            { letter: "F", url: "http://bbcsfx.acropolis.org.uk/assts/07074116.wav" },
            { letter: "G", url: "http://bbcsfx.acropolis.org.uk/assets/07074116.wav" },
            { letter: "H", url: "http://bbcsfx.acropolis.org.uk/assets/07074116.wav" },
            { letter: "I", url: "http://bbcsfx.acropolis.org.uk/assets/07074116.wav" },

        ]
    }

    // keyPress = event => {
    //     console.log(event.key);
    // }

    // componentDidMount() {
    //     window.addEventListener("keypress", this.keyPress);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener("keypress", this.keyPress)
    // }

    render() {
        return (
            <div onKeyPress={() => alert("hi")} className="pads">
                {this.state.pads.map((pad, index) => <Pad key={index} url={pad.url} letter={pad.letter} effects={this.props.effects} />)}
            </div>
        )
    }
}

export default Pads;