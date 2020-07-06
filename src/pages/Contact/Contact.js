import React from 'react'

import './Contact.css'

import headerimg from './TOTALLY BESPOKE picture.png'





class Contact extends React.Component{
    
    
    render(){
        return(
            <div id="contactPageWidth">
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
                    <br/><br/>
                    <h2>ABOUT...THE PAINTWORK </h2>

                    <p>
                    

                    <a style={{fontWeight:600}}>1 - PAINT</a><br/>
                    Always 3 coats of specialist fabric paint. This means that each design or painted colour will have 3 layers or coats of paint. This 3 coat technique enables the paintwork to reach true colour depth on the fabric, have longevity, strength and flexibility on the fabric.<br/><br/>

                    <a style={{fontWeight:600}}>2 - HEATPRESS</a><br/>
                    After the paintwork is completed and has had time to cure, the next stage is to heat press. This process of heating and pressing the paintwork at a high temperature allows the paint to bond with the fabric. It also seals the paintwork giving it a level of waterproofing and an extra ability to be hand washed or machined washed (maximum 30’). <br/><br/>

                    <a style={{fontWeight:600}}>3 - VARNISH</a><br/>
                    The final stage is the varnishing. We use a professionally designed flexible varnish made especially for fabric. The varnish contains silicone that enhances the ability of the paintwork and the varnish to withstand movement. The varnish also adds an extra gloss and protective layer to the paintwork. <br/><br/><br/>

                    <a style={{fontWeight:100}}>
                    NOTE,<br/><br/>

                    Prices will vary according to size, paintwork and level of detail.<br/>
                    SO79 products are made to be worn and made to wear, our fabric will fade naturally and gain patina. <br/><br/>

                    The paintwork is also made with this in mind. Nothing lasts forever and the paintwork will naturally wear and distress over time. The design of the paintwork is not only to adorn the product, it is also to look good as it distresses and wears. The paintwork is designed to be a protective coating to areas of the raw denim. This in turn enables the rest of the denim which is not painted to distress and wear at a faster speed than the protected (painted) areas. So in the long run, if you ever manage to get (and I hope you do) a SO79 product to a stage where the paintwork has worn off, by this time the paint will have done its job of protecting the design long enough to allow the denim to have 2 tones - A darker tone where the paint used to be and has been protected, and another much lighter tone where there was no paint. Failing that thou, if you feel you are in need of paint touch-up we are happy to accommodate.<br/></a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact