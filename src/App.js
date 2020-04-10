import React from 'react';
import background from '../src/LOGOwhite.jpg'
import foreground from '../src/LOGOblack.jpg'
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={logo:background}
    }
  

  render(){

    
    return (
      <div className="Homepage">
       <div id="background">
         <img src={this.state.logo} id="background-image" alt="background" onMouseEnter={()=>{this.setState({logo:foreground})}} onMouseLeave={()=>{this.setState({logo:background})}}></img>
         
       </div>
      </div>
    );
  } 
  
}

export default App;
