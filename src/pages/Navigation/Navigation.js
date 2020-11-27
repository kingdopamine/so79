import React from 'react'

import './Navigation.css'

import foreground from './Recrafted with Logo.png'


class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mainmenu:'menuOff',
            cart:'cartHide',
            checkoutItems:{
                SO79Collection:this.props.SO79 
            }
        }
       this.mainMenuToggle=this.mainMenuToggle.bind(this)
        this.cartToggle=this.cartToggle.bind(this)

        
    }

    mainMenuToggle(){
        if(this.state.mainmenu==="menuOff"){
            this.setState({mainmenu:"main-menu-list"})
        } else {
            this.setState({mainmenu:"menuOff"})
        }
    }

    cartToggle(){
        if(this.state.cart==="cartHide"){
            this.setState({cart:"cart"})
        } else {
            this.setState({cart:"cartHide"})
        }
    }

    //<p id="main-menu-so79" onMouseEnter={()=>{this.setState({mainmenu:"main-menu-list"})}} onMouseLeave={()=>{this.setState({mainmenu:"menuOff"})}}>

    render(){
        return(
            <div>
                <a href='/'><img src={foreground} id='homebutton' alt='homebutton'/></a> 
                <div className={this.props.menuShow}>
                    <p id="main-menu-so79" onClick={()=>{this.mainMenuToggle()}}>
                        <i class="fas fa-bars" id="main-menu" ></i >SOURCE OF 79
                    </p>
                    <ul className={this.state.mainmenu} >
                    <li><a href="/so79-collection">SO79 Collection</a></li>
                    <li><a href="/create-your-own">Create Your Own</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li>Other Products
                            <ul id="main-menu-submenu">
                                <li><a href="/bags">- Bags</a></li>
                                <li><a href="/tshirts">- T-shirts</a></li>
                                <li><a href="/aprons">- Aprons</a></li>
                            </ul>
                        </li>
                        <li id="completebespoke"><a href="/contact-complete-bespoke">Complete Bespoke Contact Us</a></li>
                    </ul>
                </div>
                <div id="basketIG">
                <a href="https://instagram.com/sourceof79" target="blank"><i class="fab fa-instagram" id={this.props.igicon}></i></a>
                    <a href="/checkout"><i class="fas fa-shopping-bag" id={this.props.bagicon} onMouseEnter={this.cartToggle}></i></a>
                    <p id={this.props.basketAmount}>{this.props.totalItems}</p>
                    <div id={this.state.cart} onMouseLeave={this.cartToggle}>
                        <tr>
                            <th>item</th>
                            <th>quantity</th>
                            <th>price</th>
                        </tr>
                        {
                            this.state.checkoutItems.SO79Collection.map((collection)=>{
                            return <tr>
                                        <th>{collection.name}</th>
                                        <th>{collection.quantity}</th>
                                        <th>{collection.price}</th>
                                    </tr>    
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation