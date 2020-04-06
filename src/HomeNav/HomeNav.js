import React from 'react';
import './HomeNav.css';
import NavLink from './NavLink/NavLink';
import img1 from '../../src/cardholderyellow.jpg';
import img2 from '../../src/Tee Black.jpg'

class HomeNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navimages : {
                img1:img1,
                img2:img2,
                img3:"",
                img4:""
            },
            animation:{
                anim1:"anim1",
                anim2:"anim2",
                anim3:"anim3",
                anim4:"anim4",
            }
        }
    }

    render(){
        return (
            <div id="nav-link-container">
                <NavLink img={this.state.navimages.img1} animation={this.state.animation.anim1}/>
                <NavLink img={this.state.navimages.img2} animation={this.state.animation.anim2}/>
                <NavLink img={this.state.navimages.img3} animation={this.state.animation.anim3}/>
                <NavLink img={this.state.navimages.img4} animation={this.state.animation.anim4}/>
            </div>
        )
    }
}

export default HomeNav