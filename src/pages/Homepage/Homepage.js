import React from 'react';

import './Homepage.css';

import Carousel from '../Carousel/Carousel'

import deconstructedZip from './YellowZip Only.png';
import deconstructedPurse from './Denim purse Only.png';
import deconstructedLogo from './Just logo only.png'




class Homepage extends React.Component {
  
    
    

  render(){
    
    
    return (
      
      
        <div id="scroll">
          <div id="homepage">
            <button id="CYOButton"><a href="/create-your-own">CREATE YOUR OWN</a></button>
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
