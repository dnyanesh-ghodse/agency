import React from 'react'
import Card from './Card'
import classes from "./Samples.module.css"

function Samples() {
        const cardData = [
        {
            title: "Followers / Following of @any_user",
            text: "Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
            btnText: "SAMPLE DATA",
            color: "orange"

        },
        {
            title: "Liker / Commenter of any post",
            text: "Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
            btnText: "SAMPLE DATA",
            color: "blue"
        },
        {
            title: "People Posting Specific #Hashtags",
            text: "Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
            btnText: "SAMPLE DATA",
            color: "green"
        },
        {
            title: "People Posting at Specific Locations",
            text: "Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
            btnText: "SAMPLE DATA",
            color: "purple"
        }
    ]
    return (
        <div className={classes.cards}>
            {cardData.map(card => {
                return <Card color={card.color} title={card.title} text={card.text} btnText={card.btnText}/>
            })}
        </div>
    )
}

export default Samples
