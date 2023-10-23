import { useState } from "react";
import ContactForm from "../EmailForm/ContactForm";
import "./Hero.css"

function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h2>We are here to help you get a <span className="title-decoration">Green Card!</span> </h2>
                <p>my name is ricardo i have a green card, my name is ricardo i have a green card, my name is ricardo i have a green cardmy name is ricardo i have a green cardmy name is ricardo i have a green cardmy name is ricardo i have a green card</p>
            </div>
            <div className="hero-form">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Hero;