import React from 'react';

import  Footer from '../UI/Footer'
import NavBar from '../UI/NavBar'
import Aux from '../hoc/aux'
import "../Layout/Layout.scss"
const Layout = (props) =>{

    return(
        <Aux>
        <NavBar/>
        <main>
            {props.children}
        </main>
        <Footer/>
        </Aux>
    )
    

};export default Layout;