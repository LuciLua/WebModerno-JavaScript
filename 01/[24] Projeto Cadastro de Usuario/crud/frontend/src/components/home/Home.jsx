import React from "react";
import Main from "../template/Main/Main";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Main 
            icon="home" 
            title="Início" 
            subtitle="Segundo projeto do capítulo de React."
        >
            <div className='display-4'>
                Bem-Vindo!
            </div>
            <hr />
            <p className="mb-0 text-muted">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
        </Main>
    )
}