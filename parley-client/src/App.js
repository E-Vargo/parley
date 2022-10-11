
import './App.css';

import React, {Component} from 'react';
import Router from './components/Router'
import ConversationsContainer from './containers/ConversationsContainer'
import UserContainer from './containers/UserContainer'

class App extends Component {

 
  render() {
    return (
      <div className="App">
      <Router />
    </div>
    
    )
  };
}

export default App;
