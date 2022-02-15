import React from "react";
import './Button.css'

// focar na criação de componentes sem estado... priorizar componentes funcionais
export default props => {
    return(
        <>
            <button className="button">
                {props.label}
            </button>
        </>
    )
}