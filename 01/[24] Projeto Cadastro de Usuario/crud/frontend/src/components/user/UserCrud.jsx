import React, { Component } from "react";

import axios from 'axios'

import Main from '../template/Main/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterare Excluir!'
}

const baseURL = 'https://localhost:3001/users'
const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
}

// tentar substituir para versoes mais modernas disso usando funcao...
export default class UserCrud extends Component {

    state = {...initialState}

    // vai limpar o formulario, o user
    clear(){
        this.setState({ user: initialState.user })
    }

    // incluir e/ou alterar
    save(){
        const user = this.state.user
        // qualquer numero diferente de 0 é verdadeiro
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseURL}/${user.id}` : baseURL

        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user) // coloca elemento na primeria posicao do array
        return list
    }

    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}