import React from "react";
import './button.css'
export default function Button({children, onclick}) {
    return(
        <button onClick={onclick} className="add-button">
            {children}
        </button>
    )
}