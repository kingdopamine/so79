import React from 'react'

import './AboutUs.css'

import Navigation from '../Navigation/Navigation'

import macca from './Work shot edited.jpg'

class AboutUs extends React.Component{
    
    render(){
        return(
            <div id="aboutText">
                <h1>About</h1>
                <p><img id="macca" src={macca}/>
                Source of 79 is a London based customisable goods platform, offering locally sourced and personalised goods, without compromise, created by professional and experienced makers and artists. Made using high grade materials, vintage, raw, rare and up-cycled denims, precision paint work and all hand made for you with care.<br/><br/>

                Working with brands such as Evisu, Levi’s, Dunhill, Lewis Leathers, Comme des Garçon and Jimmy Choo has given us the knowledge, understanding and ability to make and produce quality hand painted art pieces on different mediums and materials.<br/><br/>

                Mark MacDonald, founder, maker and artist works with high end luxury brands and fashion houses, merging the boundaries of customisation, personalisation and monogramming on fashion, fabrics, goods and garments. After acquiring so much quality experience with so many varied brands a new creative outlet of expression was required…<br/><br/>

                SO79 products are made to last, made to wear and made to be yours. All our products are hand made, hand stamped and exquisitely painted in the SO79 London Studio.<br/><br/>

                SO79 has arrived.

                </p>
            </div>
        )
    }
}

export default AboutUs