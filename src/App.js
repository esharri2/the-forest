import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Splash from './components/Splash';
import Instrument from './components/Instrument'

class App extends Component {

  state = {
    showSplash: true
  }

  toggleSplash = () => {
    this.state.showSplash
      ? this.setState({ showSplash: false })
      : this.setState({ showSplash: true })
  }

  render() {
    return <div id="wrapper">
      {this.state.showSplash ? <Splash toggleSplash={this.toggleSplash} /> : <Instrument />}
    </div>
  }
}

export default App;
