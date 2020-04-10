import React from 'react';
import './design.css';
import cardholderfront from './DCfront.jpg'
import cardholderback from './DCback.jpg'

class Design extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cardholder1:cardholderfront,
            buttons:{
                button1:"selected",
                button2:"unselected"
            }
        }
    }

    render(){

        return (
       <div id="design-page">    
            <div id="design-render">
                <img 
                    src={this.state.cardholder1} 
                    id="cardholder1" 
                    alt="cardholder" 
                    onMouseEnter={()=>{this.setState({cardholder1:cardholderback})}} 
                    onMouseLeave={()=>{this.setState({cardholder1:cardholderfront})}}></img>
            </div>
            <div id="options">
            <button class={this.state.buttons.button1} onClick={()=>{this.setState({buttons:{button1:"selected",button2:"unselected"}})}}>Fabric</button>
            <button class={this.state.buttons.button2} onClick={()=>{this.setState({buttons:{button1:"unselected",button2:"selected"}})}}>Zip</button>
            
            </div>
            
       </div>
      
        )
    } 
};

export default Design;