import React from "react";
// import Filho from "./Filho";

import { childrenWithProps } from "../utils/utils";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
                {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/> */}
                {/* operador spred, recebendo todos as propriedades*/}
                {/* <Filho {...props}/> */}
                {/* Sobreescrevendo */}
                {/* <Filho {...props} nome="Carla"/>  */}

                {childrenWithProps(props)}
            </ul>
        </div>
        )
}