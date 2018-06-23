import React, { Component } from 'react';

class Rate extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.name, event.target.value)
    }

    render() {
        return <input
            onChange={this.handleChange}
            type="range"
            min="0"
            max="10"
            step=".1"
            name="loopRate"
            value={this.props.loopRate} />
    }
}

export default Rate;