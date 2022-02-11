import React, { Fragment } from "react";

// Diferença entre import {Fragment} ou React

// A diferença é bem simples. O que muda nesses imports é como está configurado o export no arquivo de onde você está importando.

// Quando se importa dessa forma aqui: import React from 'react'; significa que o React é o export padrão do arquivo react, ou seja, lá no arquivo react o componente React vai estar escrito dessa forma: export default React.

// Enquanto que import { React } from ' react'; significa que você está importando um dos componentes de um arquivo que tem vários componentes e que esse componente não é o padrão, não é o default. Ou seja, lá no arquivo react o componente React vai estar apenas como export React, sem o default. Com essa notação, você pode inclusive importar vários componentes ao mesmo tempo. Por exemplo: import { Componente1, Componente2 } from 'arquivo';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>  {
    const { name, age } = props
    return(
        // tambem posso retornar em um array, mas preciso colocar um key para cada
        // não pode retornar duas tags em um unico componente, user sempre dentro de uma div, ou fragment <></> ou <React.Fragment>
        <Fragment>
            <h1>Bom dia {name}!</h1>
            <h2>Idade: {age}</h2>
        </Fragment>
    )
}