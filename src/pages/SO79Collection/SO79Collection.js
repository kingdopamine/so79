import React from 'react'

import './SO79Collection.css'

import Navigation from '../Navigation/Navigation'

class SO79Collection extends React.Component{
    
    render(){
        return(
            <div>
                <Navigation menuShow="main-menu-style" igicon="menu2" bagicon="menu21"/>
                <h1>SO79 Collection</h1>
            </div>
        )
    }
}

export default SO79Collection