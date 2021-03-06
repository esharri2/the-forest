import React, { Component } from 'react';

//TODO use same slider component for effect and rate
class Effect extends Component {

    handleChange = (event) => {
        const { name, value } = event.target
        this.props.updateEffect(name, value)
    }

    render() {

        const { name, value } = this.props;
        let on = false;
        if (value > 0) {
            on = true;
        }
        return (
            <div className={`effect ${name} ${on ? 'on' : null}`}>
                <label htmlFor={name}>{name}</label>
                <input
                    className="range"
                    onChange={this.handleChange}
                    type="range"
                    min="0"
                    max="100"
                    step=".1"
                    id={name}
                    name={name}
                    value={value} />
            </div>
        )
    }
}



export default Effect;