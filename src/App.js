import React from 'react';

import './App.css';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage'
import Design from './pages/Design/design'
import AboutUs from './pages/AboutUs/AboutUs'
import Aprons from './pages/Aprons/Aprons'
import Bags from './pages/Bags/Bags'
import Contact from './pages/Contact/Contact'
import SO79Collection from './pages/SO79Collection/SO79Collection'
import TShirts from './pages/TShirts/TShirts'


class App extends React.Component {
  constructor(props) {
    super(props);
    
    }


  render(){
    
    
    return (
      <Router>
        {<Route exact path="/" component={Homepage} />}
        {<Route exact path="/create-your-own" component={Design} />}
        {<Route exact path="/about-us" component={AboutUs} />}
        {<Route exact path="/aprons" component={Aprons} />}
        {<Route exact path="/bags" component={Bags} />}
        {<Route exact path="/contact-complete-bespoke" component={Contact} />}
        {<Route exact path="/so79-collection" component={SO79Collection} />}
        {<Route exact path="/tshirts" component={TShirts} />}
      </Router>
      
      
    );
  } 
  
}

export default App;
