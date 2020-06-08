import React from 'react'

import './SO79Collection.css'

import Navigation from '../Navigation/Navigation'

import img001 from './walletsforgallery/Custom wallet 1.png'
import img002 from './walletsforgallery/Custom wallet 2.png'
import img003 from './walletsforgallery/Custom wallet 3.png'
import img004 from './walletsforgallery/Green tiger.png'
import img005 from './walletsforgallery/Sharp abstract Blue .png'
import img006 from './walletsforgallery/So09.png'
import img007 from './walletsforgallery/Source.png'
import img008 from './walletsforgallery/tiger colours.png'
import img009 from './walletsforgallery/waves .png'

class SO79Collection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            images:[
                img001,
                img002,
                img003,
                img004,
                img005,
                img006,
                img007,
                img008,
                img009,
                img001,
                img002,
                img003,
                img004,
                img005,
                img006,
                img007,
                img008,
                img009,
            ],
            name:[
                "Many Hats",
                "SO79 Orange 'O'",
                "Japanese Dragon",
                "Green Tiger",
                "Abstract Blue",
                "SO79 Blue",
                "SO09",
                "Source",
                "White Tiger",
                "Japanese Waves",
                "Many Hats",
                "SO79 Orange 'O'",
                "Japanese Dragon",
                "Green Tiger",
                "Abstract Blue",
                "SO79 Blue",
                "SO09",
                "Source",
                "White Tiger",
                "Japanese Waves",
            ],
            price:[
                "£250",
                "£200",
                "£300",
                "£150",
                "£350",
                "£100",
                "£400",
                "£50",
                "£500",
                "£250",
                "£200",
                "£300",
                "£150",
                "£350",
                "£100",
                "£400",
                "£50",
                "£500",
                
            ],
            index:0
        }
    }
    
    render(){
        return(
            <div>
                <Navigation menuShow="main-menu-style" igicon="menu2" bagicon="menu21"/>
                <div id="aboutWalletContainer">
                    
                    <div id="aboutWallet">
                        <h1>{this.state.name[this.state.index]}</h1>
                        <p>{this.state.price[this.state.index]}</p>
                        <p><i class="fas fa-plus-circle" id="addToBasketButton" title="Add to Basket"></i></p>
                    </div>
                </div>
                <div id="walletFocus">
                    <img src={this.state.images[this.state.index]}/>
                </div>
                <div id="walletSelection">
                    
                    <div id="walletScroll">
                        {
                            this.state.images.map((img, index)=>{
                                return <img src={img} onClick={()=>{
                                    this.setState({index:index})
                                }}/>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SO79Collection