import React from 'react'
import classes from "./CTA.module.css"

function CTA() {
    return (
        <div className={classes.cta}>
            <h2>We extract Leads & Data from Instagram</h2>
            <p className={classes.text}>Our agency does all the hard work and gives you the clean targeted data in Sheets!</p>
            <button className={classes.btn}>GET LEADS</button>
        </div>
    )
}

export default CTA
