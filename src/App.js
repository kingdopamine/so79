import React from 'react';

import './App.css';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Design from './pages/Design/design'


class App extends React.Component {
  constructor(props) {
    super(props);
    
    }


  render(){
    
    
    return (
      <Router>
        {<Route exact path="/" component={Design} />}
      </Router>
      
      
    );
  } 
  
}

export default App;
