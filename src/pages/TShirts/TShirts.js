import React from 'react'

import './TShirts.css'

import Navigation from '../Navigation/Navigation'

class TShirts extends React.Component{
    
    render(){
        return(
            <div>
                <Navigation menuShow="main-menu-style" igicon="menu2" bagicon="menu21"/>
                <h1>T-Shirts</h1>
            </div>
        )
    }
}

export default TShirts