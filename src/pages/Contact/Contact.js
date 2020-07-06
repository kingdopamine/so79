import React from 'react'

import './Contact.css'

import headerimg from './TOTALLY BESPOKE picture.png'





class Contact extends React.Component{
    
    
    render(){
        return(
            <div>
                <img id="headerimg" src={headerimg}/>
                <div id="bespokeText">
                    <p> 
                        SO79 is a creative customisation platform, reactive and flexible in its ability to design and personalise. Our interactive website allows you to tailor make and custom design your product, choose from unique fabrics, zip colours, hand-painted monograms and design styles.<br/><br/>

                        However, we are here to offer something extra with our brand. This is why we relish the opportunity to work with clients who fancy a uniquely tailored product, fabric or paintwork that is not available online.<br/><br/>

                        We are looking forward to collaborating directly with you, personalising fabrics and products upon your request. We also enjoy to be challenged within our crafts.<br/><br/>

                        If you have a particular inquiry or idea in mind, then please don’t be shy and get in touch for this completely bespoke service.<br/><br/>

                        We are always open to new projects and love to collaborate!<br/><br/>

                    </p>
                    <h1>SUBMIT AN ENQUIRY</h1>
                    <h1>PLEASE EMAIL : info@sourceof79.com </h1>
                </div>
            </div>
        )
    }
}

export default Contact