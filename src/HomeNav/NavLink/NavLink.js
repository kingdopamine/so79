import React from 'react';
import './NavLink.css';


class NavLink extends React.Component{

    render(){
        //There 4 of these in HomeNav.js; NOT 4 images BUT 4 of the entire html text below
        //We have made #navigation 45% the width/height of the vh
        //The css for HomeNav have flexwrapped these 4 parent #navigation elements to be in the correct position
        return (
            <div id="navgation">
                <div class="container">
                    <div id="overlay">
                        
                    <img src={this.props.img} id="navimg" alt="Click to enter"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavLink