import React, { Component } from 'react';

class Volume extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.name, event.target.value)
    }

    render() {
        return <input
            onChange={this.handleChange}
            type="range"
            min="-40"
            max="10"
            step=".1"
            name="volume"
            value={this.props.volume} />
    }
}

export default Volume;