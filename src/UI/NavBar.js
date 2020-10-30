import React from 'react';

import "../UI/NavBar.scss"
import { Link } from 'react-router-dom'
const NavBar = () =>{

    return(
            <container className="navBarContainer"> 
            <div className="SubNavBarContainer">

                <div className="LogoNavBar"></div>
                <div className="NavBar-control">
                    <div className="Recipes NavBar-links">Recipes</div>
                    <div className="login NavBar-links">Login</div>
                </div>
            </div>
        
            
            </container>
    )
    

};export default NavBar;