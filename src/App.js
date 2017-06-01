import React, { Component } from 'react';
import './App.css';
import Email from './components/Email' 

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Email dataName={this.props.data.name} />
      </div>
    );
  }
}

export default App;
