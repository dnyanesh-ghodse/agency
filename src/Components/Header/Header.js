import React from 'react'
import logo from "../../assets/Group7.svg"
import cart from "../../assets/iconmonstr-checkout-7.svg"
import classes from "../Header/Header.module.css"
import CTA from './CTA'
function Header() {
    return (
        <>
        <header className={classes.header}>
            <nav>
                <div className={classes.brand_logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes.navigation}>
                    <ul className={classes.nav}>
                        <li><a href="/">USP's</a></li>
                        <li><a href="/">PRICING</a></li>
                        <li className={classes.cart}><a href="/"><img src={cart} alt="" /></a></li>
                    </ul>              
                </div>    
            </nav>   
            <CTA/>  
        </header>
        
        </>
    )
}

export default Header
