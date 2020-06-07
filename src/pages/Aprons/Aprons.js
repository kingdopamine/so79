import React from 'react'

import './Aprons.css'

import Navigation from '../Navigation/Navigation'

class Aprons extends React.Component{
    
    render(){
        return(
            <div>
                <Navigation menuShow="main-menu-style" igicon="menu2" bagicon="menu21"/>
                <h1>Aprons</h1>
            </div>
        )
    }
}

export default Aprons