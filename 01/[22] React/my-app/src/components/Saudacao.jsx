import React, { Component } from "react";

// para cessasr propriedades: this.props
export default class Saudacao extends Component{

    // Em react o componente so é atualizado quando o estado muda

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipo(e){
        this.setState({ 
            tipo: e.target.value,
         })
    }
    setNome(e){
        this.setState({ 
            nome: e.target.value
         })
    }

    // State pode ser alterado, props n
    
    render(){
        const { tipo, nome } = this.state
        return(
            <div>
                <h1>
                    {tipo}, {nome}!
                </h1>
                <hr />
                {/* inpout so de leitura, para mexer precisa suar evento onChange */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}