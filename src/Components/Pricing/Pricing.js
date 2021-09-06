import React from 'react'
import classes from "../Pricing/Pricing.module.css"

function Pricing() {
    return (
        <div className={classes.pricing}>
            <div className={classes.pricing_card}>
                <div className={classes.card}>
                    <h3>NUMBER OF ACCOUNTS</h3>
                    <input type="text" placeholder="ENTER NUMBER HERE"/>
                    <h1>$0.00</h1>
                </div>
            </div>
            <div className={classes.pricing_info}>
                <h3>TRY IT FREE</h3>
                <h4>Pay As You Go Rates</h4>
                <p>Emails Price per email </p>
                <p>up to 10,000 $0.008 </p>
                <p>up to 100,000 $0.005 </p>
                <p>up to 250,000 $0.004 </p>
                <p>up to 1,000,000 $0.003 </p>
                <h4>Enterprise Packages</h4>
                <p>over 1,000,000</p>
                <h5>Contact Us </h5>
                <h5>LEARN MORE ABOUT ENTERPRISE</h5>   
            </div>
        </div>
    )
}

export default Pricing
