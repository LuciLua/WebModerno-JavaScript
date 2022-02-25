import React from "react";

import Cabecalho from "../components/Cabecalho";

export default function Exemplo(){
    return(
        <>
            {/* Objetivo de criar um componente: reuso */}
            <Cabecalho theme={"light"} title="Aprenda Next"/>
            <h1>Exemplo</h1>
        </>
    )
}