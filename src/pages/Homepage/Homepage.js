import React from 'react';

import './Homepage.css';

import Carousel from '../Carousel/Carousel'

import deconstructedZip from './YellowZip Only.png';
import deconstructedPurse from './Denim purse Only.png';
import deconstructedLogo from './Just logo only.png'

import foreground from '../Navigation/Recrafted with Logo.png'



class Homepage extends React.Component {
  
    
  componentDidMount(){
    
    return this.props.navHide
  }  

  render(){
    
    
    return (
      
      
        <div id="scroll">
          
          <div id="homepage">
            <button id="CYOButton" onClick={this.props.navHide}><a href="/create-your-own">CREATE YOUR OWN</a></button>
          </div>
          

         
            <img src={deconstructedZip} className="deconstruct" id="dZip" alt="yellow zip"></img>
            <img src={deconstructedZip} className="deconstruct" id="dZip" alt="yellow zip"></img>
            <img src={deconstructedPurse} className="deconstruct" id="dPurse" alt="denim purse"></img>
            <img src={deconstructedLogo} className="deconstruct" id="dLogo" alt="so79 logo"></img>
          
          
        
        
          <Carousel/>
        
        
        
            
      </div>
    );
  } 
  
}

export default Homepage;
