import React from "react";
import './Navbar.css';
import logo from '../../images/Coral_Logo.svg';
import SearchContainer from "../SearchContainer/SearchContainer";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logoContainer">
                <img className='logo' src={logo} alt="logo"></img>
                <h1 className="OSF">
                    <span className="bigLetter">O</span>
                    <span className="smallLetter">cean</span>
                    <br></br>
                    <span className="bigLetter">S</span>
                    <span className="smallLetter">cience</span>
                    <br></br>
                    <span className="bigLetter">F</span>
                    <span className="smallLetter">eed</span>
                </h1>
            </div>
            <div className="columnRight"></div>
            <SearchContainer />
        </div>
    )
}

export default Navbar;