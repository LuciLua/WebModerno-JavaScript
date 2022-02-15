import React from "react";
import './Button.css'

// focar na criação de componentes sem estado... priorizar componentes funcionais
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(
        <>
            <button 
                className={classes}
                onClick={e => {
                    // Conteudo do elemento sera passado para a funcao click
                    props.click && props.click(props.label)
                }}
                >
                {props.label}
            </button>
        </>
    )
}