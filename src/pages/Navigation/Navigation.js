import React from 'react'

import './Navigation.css'

import foreground from './Recrafted with Logo.png'

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mainmenu:'menuOff',
        }
        this.mainMenuToggle=this.mainMenuToggle.bind(this)

        
    }

    mainMenuToggle(){
        if(this.state.mainmenu==="menuOff"){
            this.setState({mainmenu:"main-menu-list"})
        } else {
            this.setState({mainmenu:"menuOff"})
        }
    }

    render(){
        return(
            <div>
                <a href='/'><img src={foreground} id='homebutton' alt='homebutton'/></a> 
                <div className={this.props.menuShow}>
                    <p id="main-menu-so79" onMouseEnter={this.mainMenuToggle} >
                        <i class="fas fa-bars" id="main-menu" ></i >SOURCE OF 79
                    </p>
                    <ul className={this.state.mainmenu} onMouseLeave={this.mainMenuToggle}>
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
                <div >
                    <i class="fab fa-instagram" id={this.props.igicon}></i>
                    <i class="fas fa-shopping-bag" id={this.props.bagicon}></i>
                </div>
            </div>
        )
    }
}

export default Navigation