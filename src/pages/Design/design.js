import React from 'react';
import './design.css';

import Carousel from '../Carousel/Carousel'

import foreground from './Recrafted with Logo.png'

import cardholderFront from './DCfront.jpg';


import redZip from './RedZipPlain.jpg';
import redZipBack from './RedZipPlainReversed.jpg'
import orangeZip from './OrangeZipPlain.jpg';
import yellowZip from './YellowZipPlain.jpg';
import blueZip from './BlueZipPlain.jpg';

import goldOutlineLogo from './GoldOutlineLogo.png';
import solidGoldLogo from './SolidGoldLogo.png';
import ecruLogo from './EcruLogo.png';
import solidRedLogo from './SolidRedLogo.png';

import deconstructedZip from './YellowZip Only.png';
import deconstructedPurse from './Denim purse Only.png';
import deconstructedLogo from './Just logo only.png'


import screen from './screen.jpg';

class Design extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            cardholderFront:redZip,
            cardholderBack:redZipBack,
            dZip:'dZip',
            dPurse:'dPurse',
            dLogo:'dLogo',
            zipDisplay:{
                zip:'zipOff'
            },
            frontDisplay:{
                front:'frontOn'
            },
            backDisplay:{
                back:'backOn'
            },
            logoDisplay:{
                logo:'logoOff'
            },
            designFDisplay:{
                designF:'designFOff'
            },
            designBDisplay:{
                designB:'designBOff'
            },
            menuItems:'menuOff',
            menuFade:'menu',
            carRender:'',
            designRender:'designRenderHidden',
            leftarrow:'arrow-hidden',
            rightarrow:'right-arrow',
            frontmenusection:'frontmenusection',
            backmenusection:'menusectionhidden',
            zipmenu:'zipmenu',
            fabricmenu:'fabricmenu'
            
        }
        this.zipToggle=this.zipToggle.bind(this)
        this.menuToggle=this.menuToggle.bind(this)
        this.frontToggle=this.frontToggle.bind(this)
        this.backToggle=this.backToggle.bind(this)
        this.logoToggle=this.logoToggle.bind(this)
        this.designFToggle=this.designFToggle.bind(this)
        this.designBToggle=this.designBToggle.bind(this)
        this.arrowToggle=this.arrowToggle.bind(this)
        
        
    }

    menuToggle(){
        
        if(this.state.menuItems==='menuItems'){
            this.setState({menuItems:'menuOff'})
            this.setState({menuFade:'menu'})
            this.setState({zipDisplay:{zip:'zipOff'}})
            this.setState({frontDisplay:{front:'frontOff'}})
            this.setState({backDisplay:{back:'backOff'}})
            this.setState({logoDisplay:{logo:'logoOff'}})
            this.setState({designFDisplay:{designF:'designFOff'}})
            this.setState({designBDisplay:{designB:'designBOff'}})
            this.setState({cardholder:goldOutlineLogo})
            this.setState({cardholder:screen})
            this.setState({carRender:''})  
            this.setState({designRender:'designRenderHidden'})      
        } else {
            this.setState({menuItems:'menuItems'});
            this.setState({menuFade:'fadeOff'})
            this.setState({cardholder:goldOutlineLogo})
            this.setState({carRender:'noCarRender'})
            this.setState({designRender:'designRenderfront'})
            this.setState({dZip:'dGone', dLogo:'dGone', dPurse:'dGone'})
        }
    }

    zipToggle(){
        if(this.state.zipDisplay.zip==='zipOn'){
            this.setState({zipDisplay:{zip:'zipOff'}})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({zipDisplay:{zip:'zipOn'}})
        }
    }

    frontToggle(){
        if(this.state.frontDisplay.front==='frontOn'){
            this.setState({frontDisplay:{front:'frontOff'}})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({frontDisplay:{front:'frontOn'}})
        }
    }

    backToggle(){
        if(this.state.backDisplay.back==='backOn'){
            this.setState({backDisplay:{back:'backOff'}})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({backDisplay:{back:'backOn'}})
        }
    }

    logoToggle(){
        if(this.state.logoDisplay.logo==='logoOn'){
            this.setState({logoDisplay:{logo:'logoOff'}})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({logoDisplay:{logo:'logoOn'}})
        }
    }


    designFToggle(){
        if(this.state.designFDisplay.designF==='designFOn'){
            this.setState({designFDisplay:{designF:'designFOff'}})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({designFDisplay:{designF:'designFOn'}})
        }
    }

    designBToggle(){
        if(this.state.designBDisplay.designB==='designBOn'){
            this.setState({designBDisplay:{designB:'designBOff'}})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({designBDisplay:{designB:'designBOn'}})
        }
    }

    arrowToggle(){
        if(this.state.leftarrow==="arrow-hidden"){
            this.setState({leftarrow:"left-arrow", rightarrow:"arrow-hidden", frontmenusection:'menusectionhidden', backmenusection:'backmenusection', zipmenu:"zipmenuback", fabricmenu:"fabricmenuback"})
        } else {
            this.setState({leftarrow:"arrow-hidden", rightarrow:"right-arrow", frontmenusection:'frontmenusection', backmenusection:'menusectionhidden', zipmenu:"zipmenu", fabricmenu:"fabricmenu"})
        }
    }


   

    render(){
        let i = 2;
        return (
       <div id="design-page">
        <a href='/'><img src={foreground} id='homebutton' alt='homebutton'/></a> 
        

        <div id="createYourOwn" >
            
            <button id={this.state.menuFade} onClick={this.menuToggle}>CREATE YOUR OWN</button>
                <div className={this.state.menuItems} >
                    <i class="fas fa-arrow-right" id={this.state.rightarrow} onClick={()=>{this.setState({designRender:"designRenderback"}); this.arrowToggle()}}></i>
                    <i class="fas fa-arrow-left" id={this.state.leftarrow} onClick={()=>{this.setState({designRender:"designRenderfront"}); this.arrowToggle()}}></i>
                    {/*<div className="classMenu" id="sizemenu">Size</div>*/}
                    <div className="classMenu" id={this.state.fabricmenu}>Fabric Choice</div>
                    <div onClick={this.zipToggle} className="classMenu" id={this.state.zipmenu}>Zip Colour</div>
                    <ul id={this.state.zipDisplay.zip}>
                        
                        <li onClick={()=>{this.setState({cardholder:redZip})}}>- Red</li>
                        <li onClick={()=>{this.setState({cardholder:orangeZip})}}>- Orange</li>
                        <li onClick={()=>{this.setState({cardholder:yellowZip})}}>- Yellow</li>
                        <li>- Green</li>
                        <li onClick={()=>{this.setState({cardholder:blueZip})}}>- Blue</li>
                        <li>- Purple</li>
                        <li>- Grey</li>
                    </ul>
                    <ul></ul>

                    <div id={this.state.frontmenusection}>
                        {/*<div onClick={this.frontToggle} className="boldMenuItems">FRONT</div>*/}
                        <ul id={this.state.frontDisplay.front}>
                            <li onClick={this.logoToggle}>Logo Style</li>
                                <ul id={this.state.logoDisplay.logo}>
                                    <li onClick={()=>{this.setState({cardholderFront:goldOutlineLogo})}}>- Gold Outline</li>
                                    <li onClick={()=>{this.setState({cardholderFront:solidGoldLogo})}}>- Solid Gold</li>
                                    <li onClick={()=>{this.setState({cardholderFront:ecruLogo})}}>- Ecru</li>
                                    <li onClick={()=>{this.setState({cardholderFront:solidRedLogo})}}>- Solid Red</li>
                                </ul>
                            <li onClick={this.designFToggle}>Design Style</li>
                                <ul id={this.state.designFDisplay.designF}>
                                    <li>- Waves</li>
                                    <li>- Animals</li>
                                    <li>- Drip</li>
                                    <li>- Bespoke/Custom</li>
                                </ul>
                            </ul>
                        </div>
                        <ul></ul>

                        <div id={this.state.backmenusection}>
                            {/*<div onClick={this.backToggle} className="boldMenuItems">BACK</div>*/}
                            <ul id={this.state.backDisplay.back}>
                                <li onClick={this.logoToggle}>Logo Style</li>
                                <ul id={this.state.logoDisplay.logo}>
                                    <li onClick={()=>{this.setState({cardholder:goldOutlineLogo})}}>- Gold Outline</li>
                                    <li onClick={()=>{this.setState({cardholder:solidGoldLogo})}}>- Solid Gold</li>
                                    <li onClick={()=>{this.setState({cardholder:ecruLogo})}}>- Ecru</li>
                                    <li onClick={()=>{this.setState({cardholder:solidRedLogo})}}>- Solid Red</li>
                                </ul>
                                <li onClick={this.designBToggle}>Design Style</li>
                                <ul id={this.state.designBDisplay.designB}>
                                    <li>- Waves</li>
                                    <li>- Animals</li>
                                    <li>- Drip</li>
                                    <li>- Bespoke/Custom</li>
                                </ul>
                            </ul>
                        </div>
                        
                    
                    <ul></ul>
                    
                </div>
            </div> 



        {/*<div id="design-render">
            <img 
                src={this.state.cardholder} blank cardholder
                id="cardholder1" 
                alt="cardholder" 
                ></img>
        </div>*/}
            <div id={this.state.openAnimation}>
                <img src={deconstructedZip} className="deconstruct" id={this.state.dZip} alt="yellow zip"></img>
                <img src={deconstructedPurse} className="deconstruct" id={this.state.dPurse} alt="denim purse"></img>
                <img src={deconstructedLogo} className="deconstruct" id={this.state.dLogo} alt="so79 logo"></img>
            </div>
        <div id={this.state.designRender}>
            <img src={this.state.cardholderFront} id="cardholderFront" alt="cardholder"></img>
            <img src={this.state.cardholderBack} id="cardholderBack" alt="cardholder"></img>
        </div>
        <div id={this.state.carRender}>
        <Carousel/>
        </div>
        

        
            
            
            
            
       </div>
      
        )
    } 
};

export default Design;