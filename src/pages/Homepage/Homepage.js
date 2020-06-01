import React from 'react';
import foreground from './LOGOblack.jpg'
import background from './LOGOwhite.jpg'
import './Homepage.css';






class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state={logo:background}
    }


  render(){
    
    
    return (
      
      
      <div id="homepage">
       <div id="background">
       <div id="taglineHome"><a href="/design"><p><b>Re-Crafted Goods</b></p></a></div>  
         <a href="/design">
           
           <img src={this.state.logo} 
                id="background-image" 
                alt="background" 
                onMouseEnter={()=>{this.setState({logo:foreground})}} 
                onMouseLeave={()=>{this.setState({logo:background})}}>
            </img>
            
          </a>
          
          
       </div>
            
      </div>
    );
  } 
  
}

export default Homepage;
