import React from 'react'
import classes from "./Card.module.css"

function Card({text,title,btnText,color}) {
console.log(typeof color);
    //color === "blue" ? classes.blue ? color === "orange" ? classes.orange : null
    return (
        <div className={classes.card}>
            <div className={classes.title}>
                <div className={color === "green" ? classes.green : color === "blue" ? classes.blue : color === "orange" ? classes.orange: classes.purple}></div>
                <h2>{title}</h2>
            </div>
                <p>{text}</p>
                <button className={color === "green" ? classes.g : color === "blue" ? classes.b : color === "orange" ? classes.o: classes.p}>{btnText}</button>
        </div>
    )
}

export default Card
