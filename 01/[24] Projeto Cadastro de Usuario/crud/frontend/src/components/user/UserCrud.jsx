import React, { Component } from "react";

import Main from '../template/Main/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterare Excluir!'
}

// tentar substituir para versoes mais modernas disso usando funcao...
export default class UserCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}