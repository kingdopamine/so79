import React from 'react';
import './Carousel.css';

import custom1 from './Custom wallet 1.png';
import custom2 from './Custom wallet 2.png';
import custom3 from './Custom wallet 3.png';
import custom4 from './Custom wallet 4.jpg';
import custom5 from './Custom wallet 5.png';



class Carousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            carousel:[custom1,custom2,custom3,custom4,custom5],
            class:"hidden",
            class2:"hidden",
            i:0,
            j:-1
        }
        this.previmg=this.previmg.bind(this)
        this.nextimg=this.nextimg.bind(this)
    }

    componentDidMount(){
        this.previmg()
       
    }

    previmg(){
        setTimeout(()=>{
            this.setState({class:'carousel'});
            setTimeout(()=>{
                if(this.state.j===this.state.carousel.length-1){
                    this.setState({j:-1})
                } else if(this.state.j===this.state.carousel.length-2){
                    this.setState({j:-2})
                };
                this.setState({class2:'hidden',j:this.state.j+2})
            },1000) 
            this.nextimg()},3500);
    }

    nextimg(){
        setTimeout(()=>{
            this.setState({class2:'carousel'});//this triggers the css animation of nextimg after 3.5secs, and also calls previmg after 3.5secs, which means previmg css will trigger 7secs after the beginning of this function
            setTimeout(()=>{
                if(this.state.i===this.state.carousel.length-1){
                    this.setState({i:-1})
                } else if(this.state.i===this.state.carousel.length-2){
                    this.setState({i:-2})
                };
                this.setState({class:'hidden',i:this.state.i+2})//1 second after previmg animation has ended, it's state is changed so that it's animation can be retriggered when called; the source img is changed also to create the illusion of a new image slidding into shot
            },1000)
        this.previmg()},3500)
    }

    render(){

        return (
            <div>
                <img src={this.state.carousel[this.state.i]} className={this.state.class}></img>
                <img src={this.state.carousel[this.state.j]} className={this.state.class2}></img>
            </div>

        )
    }
}

export default Carousel