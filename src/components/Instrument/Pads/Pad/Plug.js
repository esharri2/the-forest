import React from 'react';

const Plug = props => {
    return <button className={`plug ${props.plugged?"on":"off"}` } onClick={props.plug}>Plug</button>
}

export default Plug;