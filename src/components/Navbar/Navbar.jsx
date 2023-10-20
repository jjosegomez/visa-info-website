import { useState } from "react";
import "./Navbar.css"

function Navbar() {
    const [collapse, setCollapse] = useState(false)
    const [collapseClass, setCollapseClass] = useState("mobile-navbar-link-list-collapsed")

    function handleCollapse() {
        if (collapse) {
            setCollapseClass("mobile-navbar-link-list-collapsed")
        }
        else {
            setCollapseClass("mobile-navbar-link-list")
        }
        console.log(collapseClass, collapse)
        setCollapse(!collapse)
    }

    return (
        <div className="navbar">
            <div className="desktop-navbar">
                <h2>Visa Information</h2>
                <div className="nav-link-list">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Testimonial</a>
                    <a className="nav-link" href="#">Contact Us</a>
                </div>
            </div>
            <div className="mobile-navbar">
                <h2>Visa Information</h2>
                <div className={collapseClass}>
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Testimonial</a>
                    <a className="nav-link" href="#">Contact Us</a>
                </div>
                <button onClick={handleCollapse}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <rect width="100%" height="100%" fill="none" />
                        <path d="M120-240v-80h720v80H120Z" fill="white" />
                        <path d="M120-440v-80h720v80H120Z" fill="white" />
                        <path d="M120-640v-80h720v80H120Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar;