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
        volume: -5,
        loaded: false,
    }

    componentDidMount() {
        //TODO find way to avoid putting this listener in every Pad component
        window.addEventListener("keypress", this.keyPress);
        this.player = new Tone.Player({
            "url": this.props.url,
            "loop": true,
            "loopStart": 0,
            "loopEnd": 4.,
            "onload": this.loaded
        })

        this.volume = new Tone.Volume(this.state.volume)
        this.distortion = new Tone.BitCrusher(10);
        this.reverb = new Tone.JCReverb(0);
        this.vibrato = new Tone.Vibrato({
            maxDelay: .4,
            frequency: 0,
            depth: .2,
            type: 'sine'
        });
        this.phase = new Tone.Phaser(0);
        this.delay = new Tone.PingPongDelay(0);
        this.wave = new Tone.Vibrato({
            maxDelay: .4,
            frequency: 0,
            depth: 3,
            type: 'triangle'
        });


        const effects = [this.distortion, this.reverb, this.vibrato, this.phase, this.delay, this.wave]

        effects.forEach(effect => {
            effect.wet.value = 0;
        })

        this.player.chain(...effects, this.volume, Tone.Master);
    }

    loaded = () => {
        this.setState({ loaded: true })
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
            //TODO could be DRY with loop on effects object
            if (prevfx.distortion !== fx.distortion || !prevState.plugged) {
                this.setDistortion(fx.distortion);
            }
            if (prevfx.reverb !== fx.reverb || !prevState.plugged) {
                this.setReverb(fx.reverb);
            }
            if (prevfx.slow !== fx.slow || !prevState.plugged || !prevState.playing && this.state.playing) {            
                this.setSlow(fx.slow);
            }
            if (prevfx.fast !== fx.fast || !prevState.plugged || !prevState.playing && this.state.playing) {
                this.setSpeed(fx.fast);
            }
            if (prevfx.vibrato !== fx.vibrato || !prevState.plugged) {
                this.setVibrato(fx.vibrato);
            }
            if (prevfx.phase !== fx.phase || !prevState.plugged) {
                this.setPhase(fx.phase);
            }
            if (prevfx.delay !== fx.delay || !prevState.plugged) {
                this.setDelay(fx.delay);
            }
            if (prevfx.wave !== fx.wave || !prevState.plugged) {
                this.setWave(fx.wave);
            }

        }


    }

    setDistortion = (val) => {
        const min = 10;
        const max = 1;
        if (val === 0) {
            this.distortion.wet.value = 0;
        } else {
            this.distortion.wet.value = 1;
            this.distortion.bits = this.scale(val, min, max);
        }
    }

    setReverb = (val) => {
        const min = 0;
        const max = .8;
        if (val === 0) {
            this.reverb.wet.value = 0;
        } else {
            this.reverb.wet.value = 1;
            this.reverb.roomSize.value = this.scale(val, min, max);
        }
    }

    setSlow = (val) => {
        const min = 1;
        const max = .1;
        this.player.playbackRate = this.scale(val, min, max);
    }

    setSpeed = (val) => {
        const min = 1;
        const max = 2;
        this.player.playbackRate = this.scale(val, min, max);
    }

    setVibrato = (val) => {
        const min = 0;
        const max = 8;
        if (val === 0) {
            this.vibrato.wet.value = 0;
        } else {
            this.vibrato.wet.value = 1;
            this.vibrato.frequency.value = this.scale(val, min, max);
        }
    }

    setPhase = (val) => {
        const min = 0;
        const max = 10;
        if (val === 0) {
            this.phase.wet.value = 0;
        } else {
            this.phase.wet.value = 1;
            this.phase.frequency.value = this.scale(val, min, max);
        }
    }

    setDelay = (val) => {
        const min = 0;
        const max = 2;
        if (val === 0) {
            this.delay.wet.value = 0;
        } else {
            this.delay.wet.value = 1;
            this.delay.delayTime.value = this.scale(val, min, max);
        }
    }

    setWave = (val) => {
        const min = 0;
        const max = 8;
        if (val === 0) {
            this.vibrato.wet.value = 0;
        } else {
            this.vibrato.wet.value = 1;
            this.vibrato.frequency.value = this.scale(val, min, max);
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


    keyPress = event => {               
        if (event.key.toLowerCase() === this.props.letter.toLowerCase()) {
            this.play();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("keypress", this.keyPress)
    }

    render() {

        return (
            <div className="pad">
                <Play
                    play={this.play}
                    loaded={this.state.loaded}
                    letter={this.props.letter}
                    playing={this.state.playing} />
                <Rate
                    loopRate={this.state.loopRate}
                    handleChange={this.handleChange} />
                <Volume
                    volume={this.state.volume}
                    handleChange={this.handleChange} />
                <Plug
                    plugged={this.state.plugged}
                    plug={this.plug} />
            </div>
        )


    }
}

export default Pad;
