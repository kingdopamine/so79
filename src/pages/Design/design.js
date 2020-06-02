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
            zipDisplay:'menuOff',
            frontDisplay:'',
            backDisplay:'',
            logoDisplay:'menuOff',
            designFDisplay:'menuOff',
            designBDisplay:'menuOff',
            cardholderFrontDisplay:'menuOff',
            cardholderBackDisplay:'menuOff',
            cardholderfrontid:'cardholderFront',
            cardholderbackid:'cardholderBack',
            menuItems:'menuOff',
            menuFade:'menu',
            carRender:'',
            designRender:'designRenderHidden',
            frontmenusection:'frontmenusection',
            backmenusection:'menusectionhidden',
            zipmenu:'zipmenu',
            fabricmenu:'fabricmenu',
            frontmenutoggle:'menutogglehidden',
            backmenutoggle:'backmenutoggle',
            showbothtoggle:false

            
        }
        this.zipToggle=this.zipToggle.bind(this)
        this.menuToggle=this.menuToggle.bind(this)
        this.frontToggle=this.frontToggle.bind(this)
        this.backToggle=this.backToggle.bind(this)
        this.logoToggle=this.logoToggle.bind(this)
        this.designFToggle=this.designFToggle.bind(this)
        this.designBToggle=this.designBToggle.bind(this)
        this.mainDisplayToggle=this.mainDisplayToggle.bind(this)
        this.showBothToggle=this.showBothToggle.bind(this)
        
        
        
    }

    menuToggle(){
        
        if(this.state.menuItems==='menuItems'){
            this.setState({menuItems:'menuOff'})
            this.setState({menuFade:'menu'})
            this.setState({zipDisplay:"menuOff"})
            this.setState({frontDisplay:"menuOff"})
            this.setState({backDisplay:'menuOff'})
            this.setState({logoDisplay:{logo:'menuOff'}})
            this.setState({designFDisplay:"menuOff"})
            this.setState({designBDisplay:"menuOff"})
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
            this.setState({cardholderFrontDisplay:''})
        }
    }

    zipToggle(){
        if(this.state.zipDisplay===""){
            this.setState({zipDisplay:"menuOff"})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({zipDisplay:""})
        }
    }

    frontToggle(){
        if(this.state.frontDisplay===""){
            this.setState({frontDisplay:"menuOff"})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({frontDisplay:""})
        }
    }

    backToggle(){
        if(this.state.backDisplay===""){
            this.setState({backDisplay:"menuOff"})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({backDisplay:""})
        }
    }

    logoToggle(){
        if(this.state.logoDisplay===""){
            this.setState({logoDisplay:"menuOff"})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({logoDisplay:""})
        }
    }


    designFToggle(){
        if(this.state.designFDisplay===''){
            this.setState({designFDisplay:'menuOff'})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({designFDisplay:''})
        }
    }

    designBToggle(){
        if(this.state.designBDisplay===''){
            this.setState({designBDisplay:'menuOff'})
            this.setState({cardholder:goldOutlineLogo})
        } else {
            this.setState({designBDisplay:''})
        }
    }

    mainDisplayToggle(){
        if(this.state.frontmenusection==='frontmenusection'){
            this.setState({frontmenusection:'menusectionhidden',backmenusection:'backmenusection',cardholderFrontDisplay:'menuOff',cardholderBackDisplay:'',frontmenutoggle:'frontmenutoggle',backmenutoggle:'menutogglehidden'})
        };
        
        if(this.state.frontmenusection==='menusectionhidden'){
            this.setState({frontmenusection:'frontmenusection',backmenusection:'menusectionhidden',cardholderFrontDisplay:'',cardholderBackDisplay:'menuOff',frontmenutoggle:'menutogglehidden',backmenutoggle:'backmenutoggle'})
        };
    }

    showBothToggle(){
        if(this.state.showbothtoggle===false){
            this.setState({
                showbothtoggle:true,cardholderFrontDisplay:'',
                cardholderBackDisplay:'',
                cardholderfrontid:'cardholderFrontSBS',
                cardholderbackid:'cardholderBackSBS',
                menuItems:'menuOff',
                frontmenutoggle:'menutogglehidden',
                backmenutoggle:'menutogglehidden',
            })
        };
        if(this.state.showbothtoggle===true){
            this.setState({
                showbothtoggle:false,cardholderFrontDisplay:'',
                cardholderBackDisplay:'menuOff',
                cardholderfrontid:'cardholderFront',
                cardholderbackid:'cardholderBack',
                menuItems:'menuItems',
                frontmenutoggle:'menutogglehidden',
                backmenutoggle:'backmenutoggle',
            })
        }
    }


   

    render(){
        let i = 2;
        return (
       <div id="design-page">
        <a href='/'><img src={foreground} id='homebutton' alt='homebutton'/></a> 
        

        <div id="createYourOwn" >
            
            <button id={this.state.menuFade} onClick={this.menuToggle}>CREATE YOUR OWN</button>
            <p className="boldMenuItems" id="showboth" onClick={this.showBothToggle}><i class="fas fa-align-justify"></i></p>
            <p className="boldMenuItems" id={this.state.frontmenutoggle} onClick={()=>{this.mainDisplayToggle()}}><i class="fas fa-arrow-left"></i></p>
            <p className="boldMenuItems" id={this.state.backmenutoggle} onClick={()=>{this.mainDisplayToggle()}}><i class="fas fa-arrow-right"></i></p>
                <div className={this.state.menuItems} >
                    
                    <div className="boldMenuItems" id="sizemenu">SIZE</div>
                    <div className="boldMenuItems" id={this.state.fabricmenu}>FABRIC CHOICE</div>
                    <div onClick={this.zipToggle} className="boldMenuItems" id={this.state.zipmenu}>ZIP COLOUR</div>
                    <ul className={this.state.zipDisplay} id="zipmenuexpanded">
                        <li onClick={()=>{this.setState({cardholder:redZip})}}>Red</li>
                        <li onClick={()=>{this.setState({cardholder:orangeZip})}}>Orange</li>
                        <li onClick={()=>{this.setState({cardholder:yellowZip})}}>Yellow</li>
                        <li>Green</li>
                        <li onClick={()=>{this.setState({cardholder:blueZip})}}>Blue</li>
                        <li>Purple</li>
                        <li>Grey</li>
                    </ul>
                    

                    <div id={this.state.frontmenusection}>
                        <div onClick={this.frontToggle} className="boldMenuItems">FRONT</div>
                        <ul className={this.state.frontDisplay} id="frontmenuexpanded">
                            <li onClick={this.logoToggle}>Logo Style</li>
                                <ul className={this.state.logoDisplay} id="logomenuexpanded">
                                    <li onClick={()=>{this.setState({cardholderFront:goldOutlineLogo})}}>- Gold Outline</li>
                                    <li onClick={()=>{this.setState({cardholderFront:solidGoldLogo})}}>- Solid Gold</li>
                                    <li onClick={()=>{this.setState({cardholderFront:ecruLogo})}}>- Ecru</li>
                                    <li onClick={()=>{this.setState({cardholderFront:solidRedLogo})}}>- Solid Red</li>
                                </ul>
                            <li onClick={this.designFToggle}>Design Style</li>
                                <ul className={this.state.designFDisplay} id="designmenuexpanded">
                                    <li>- Waves</li>
                                    <li>- Animals</li>
                                    <li>- Drip</li>
                                    <li>- Bespoke/Custom</li>
                                </ul>
                            </ul>
                        </div>
                        <ul></ul>

                        <div id={this.state.backmenusection}>
                        <div onClick={this.backToggle} className="boldMenuItems">BACK</div>
                        <ul className={this.state.backDisplay} id="backmenuexpanded">
                            <li onClick={this.logoToggle}>Logo Style</li>
                                <ul className={this.state.logoDisplay} id="logomenuexpanded">
                                    <li onClick={()=>{this.setState({cardholderBack:goldOutlineLogo})}}>- Gold Outline</li>
                                    <li onClick={()=>{this.setState({cardholderBack:solidGoldLogo})}}>- Solid Gold</li>
                                    <li onClick={()=>{this.setState({cardholderBack:ecruLogo})}}>- Ecru</li>
                                    <li onClick={()=>{this.setState({cardholderBack:solidRedLogo})}}>- Solid Red</li>
                                </ul>
                            <li onClick={this.designBToggle}>Design Style</li>
                                <ul className={this.state.designBDisplay} id="designmenuexpanded">
                                    <li>- Waves</li>
                                    <li>- Animals</li>
                                    <li>- Drip</li>
                                    <li>- Bespoke/Custom</li>
                                </ul>
                            </ul>
                        </div>
                    
                    
                    
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
        
            <img src={this.state.cardholderFront} className={this.state.cardholderFrontDisplay} id={this.state.cardholderfrontid} alt="cardholder"></img>
            <img src={this.state.cardholderBack} className={this.state.cardholderBackDisplay}  id={this.state.cardholderbackid} alt="cardholder"></img>
        
        <div id={this.state.carRender}>
        <Carousel/>
        </div>
        

        
            
            
            
            
       </div>
      
        )
    } 
};

export default Design;