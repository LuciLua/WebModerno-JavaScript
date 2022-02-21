import React, { Component } from "react";

import axios from 'axios'

import Main from '../template/Main/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterare Excluir!'
}

const baseURL = 'http://localhost:3001/users'
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

    updatedField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value

        this.setState({ user })
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.user.name} 
                            onChange={e=>this.updatedField(e)}
                            placeholder="Digite o nome"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="email"
                            value={this.state.user.email} 
                            onChange={e=>this.updatedField(e)}
                            placeholder="Digite o email"
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row m-2">
                        <div className="col-12 d-flex justify-content-end">
                            <button 
                            className="btn btn-primary"
                            onClick={e=> this.save(e)}
                            >
                            Salvar
                            </button>
                            <button 
                            className="btn btn-secondary ml-2"
                            onClick={e=> this.clear(e)}
                            >
                            Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <Main {...headerProps}>
                <h3>Cadastro de Usuário</h3>
                <hr />
                {this.renderForm()}
            </Main>
        )
    }
}