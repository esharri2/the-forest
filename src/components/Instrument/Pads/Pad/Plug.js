import React from 'react';

const Plug = props => {
    return <button className={`plug ${props.plugged?"on":"off"}` } onClick={props.plug}></button>
}

export default Plug;