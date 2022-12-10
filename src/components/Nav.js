import React from "react";
import Logo from '../assets/troll-face.svg'

export default function Nav(){
    return(
        <nav className="nav">
            <img
                src={Logo}
                className='logo'
            />
            <h2 className="nav-heading">Meme Generator</h2>
            <h4 className="nav-subheading">React Course - Project 3</h4>
        </nav>
    )
}