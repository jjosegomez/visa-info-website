import { useState } from "react";
import ContactForm from "../EmailForm/ContactForm";
import "./Hero.css"

function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h2>Estamos aqui para ayudarte a obtener tu <span className="title-decoration">Green Card!</span> </h2>
                <p>La Visa EB-2 con Exención por Interés Nacional (NIW) representa una oportunidad excepcional para profesionales extranjeros calificados que desean vivir y trabajar en los Estados Unidos. Este proceso acelera la obtención de la residencia permanente al evitar la extensa certificación laboral. La NIW permite a los solicitantes presentar sus propias solicitudes, ofreciendo una opción más rápida y flexible para alcanzar el éxito en los Estados Unidos.</p>
            </div>
            <div className="hero-form">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Hero;