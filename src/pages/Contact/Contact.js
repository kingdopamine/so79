import React from 'react'

import './Contact.css'

import green from './Green denim texture.png'



class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state={
            monogram:'SO79'
        }
    }

    monogram(event){
        if(event.target.value===''){
            this.setState({monogram:'SO79'})
        } else {
            this.setState({monogram:event.target.value})
        }
        
    }
    
    render(){
        return(
            <div id="testheading">
                <h1 id="test1">{this.state.monogram}</h1>
                <h1 id="test2">{this.state.monogram}</h1>
                <input type="text" id="monogramText" onChange={(event)=>{this.monogram(event)}}></input>
            </div>
        )
    }
}

export default Contact