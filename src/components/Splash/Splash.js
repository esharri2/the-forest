import React from 'react';
import './Splash.css'

const Splash = props => (
    <div onClick={props.toggleSplash} id="title-wrapper">
        <div id="titles">
            <h1 id="titleA">The Forest</h1>
            <h1 className="sub" id="titleB">The Forest</h1>
            <h1 className="sub" id="titleC">The Forest</h1>
        </div>
    </div>
)

export default Splash;