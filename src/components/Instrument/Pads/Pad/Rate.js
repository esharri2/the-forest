import React, { Component } from 'react';

class Rate extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.name, event.target.value)
    }

    render() {
        return (
            <div className="rate">
                <label htmlFor="volume">Len</label>
                <input
                    className='range'
                    onChange={this.handleChange}
                    type="range"
                    min="0"
                    max="10"
                    step=".1"
                    name="loopRate"
                    id="rate"
                    value={this.props.loopRate} />
            </div>
        )
    }
}

export default Rate;