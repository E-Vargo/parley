
import './App.css';

import React, {Component} from 'react';
import ConversationsContainer from './containers/ConversationsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <ConversationsContainer />
    </div>
    
    )
  };
}

export default App;
