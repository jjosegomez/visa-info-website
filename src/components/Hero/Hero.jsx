import { useState } from "react";
import ContactForm from "../EmailForm/ContactForm";
import "./Hero.css"

function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h2>this is the hero section</h2>
            </div>
            <div className="hero-form">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Hero;