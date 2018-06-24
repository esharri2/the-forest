import React, { Component } from 'react';
import Play from './Play';
import Plug from './Plug'
import Rate from './Rate';
import Volume from './Volume';
import Tone from 'tone';
import './Pad.css';

class Pad extends Component {

    state = {
        playing: false,
        plugged: false,
        loopRate: 4,
        volume: -5
    }

    componentDidMount() {
        //TODO wait for sound to load to render Play component
        this.player = new Tone.Player({
            "url": this.props.url,
            "loop": true,
            "loopStart": 0,
            "loopEnd": 4
        })
        this.volume = new Tone.Volume(this.state.volume)
        this.distortion = new Tone.BitCrusher(10);
        this.player.chain(this.distortion, this.volume, Tone.Master);
    }

    componentDidUpdate(prevProps, prevState) {
        //Play stop check
        if (!prevState.playing && this.state.playing) {
            this.player.start();
        } else if (prevState.playing && !this.state.playing) {
            this.player.stop();
        }

        //Rate change check
        if (prevState.loopRate !== this.state.loopRate) {
            this.player.loopEnd = this.state.loopRate;
        }

        //Vol change check
        if (prevState.volume !== this.state.volume) {
            this.volume.volume.value = parseFloat(this.state.volume);
        }

        //If plugged in, update effects
        if (this.state.plugged) {
            const prevfx = prevProps.effects;
            const fx = this.props.effects;
            //Each conditional checks if effect val has changed OR if pad has just been plugged in
            if (prevfx.distortion !== fx.distortion || !prevState.plugged) {
                this.setDistortion(fx.distortion);
            }
        }


    }

    setDistortion = (val) => {
        const min = 10;
        const max = 1;
        if (val === min) {
            this.distortion.wet = 0;
        } else {
            this.distortion.wet.value = 1;
            this.distortion.bits = this.scale(val, 10, 1);
        }
    }


    play = () => {
        this.state.playing
            ? this.setState({ playing: false })
            : this.setState({ playing: true })
    }

    plug = () => {
        this.state.plugged
            ? this.setState({ plugged: false })
            : this.setState({ plugged: true })
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value })
    }

    scale = (val, min, max) => {
        const percentage = val / 100;
        const scaledVal = min + ((max - min) * percentage);
        return scaledVal;
    }

    render() {
        return (
            <div className="pad">
                <Play
                    play={this.play}
                    letter={this.props.letter}
                    playing={this.state.playing} />
                <Plug
                    plugged={this.state.plugged}
                    plug={this.plug} />
                <Rate
                    loopRate={this.state.loopRate}
                    handleChange={this.handleChange} />
                <Volume
                    volume={this.state.volume}
                    handleChange={this.handleChange} />

            </div>
        )
    }
}

export default Pad;
