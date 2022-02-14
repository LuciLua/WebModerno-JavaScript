import React from "react"

export function childrenWithProps(props){
    // Transmitindo as propriedades do pai para o filho
    return React.Children.map(props.children,  child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        }) 
    })  
}
