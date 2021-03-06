import React, { Component } from 'react';

class Volume extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.name, event.target.value)
    }

    render() {
        return (
            <div className="volume">
                <label htmlFor="volume">Vol</label>
                <input
                    className="range"
                    onChange={this.handleChange}
                    type="range"
                    min="-40"
                    max="10"
                    step=".1"
                    id="volume"
                    name="volume"
                    value={this.props.volume} />
            </div>
        )
    }
}

export default Volume;