import React from 'react'


import './Checkout.css'

import Navigation from '../Navigation/Navigation'

class Checkout extends React.Component{
    
    render(){
        return(
            <div>
                
                <Navigation menuShow="main-menu-style" igicon="menu2" bagicon="menu21"/>
                <h1>Checkout</h1>
                <div id="paypal-button-container"></div>
                
            </div>
        )
    }
}

export default Checkout