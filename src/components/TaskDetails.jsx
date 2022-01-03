import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "./Button";
import "./taskDetails.css"

export default function TaskDetails() {
    const params = useParams()
    const history = useHistory()

    const handleButtonBack =() =>{
        history.goBack()
    }
    return(
        <>
            <div className="back-button-details">
                <Button onclick={()=>history.goBack()}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime, explicabo modi ipsum quas aliquid. Illo, tenetur omnis rem, sed necessitatibus minus molestias architecto amet eius ipsam eveniet. Velit, quidem.</p>
            </div>
        </>
    )
}