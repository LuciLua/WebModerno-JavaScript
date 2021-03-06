import React from "react";
import Main from "../template/Main/Main";
import Alunos from "./alunos/Alunos";

import axios from "axios";
import { useEffect, useState } from "react";

// const listUsers = []


// axios.get('http://localhost:3001/users')
// .then(resp => resp.data)
// .then(json => {
//     json.map( j => {
//         listUsers.push(j)
//         return(
//             listUsers
//         )
//     })
// })



// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(resp => resp = resp.data)
            .then(data => setUsers(data))
    }, [])
            
    // console.log(users)

    return(
        <Main 
            icon="list" 
            title="Usuários" 
            subtitle="Página de testes."
        >
            <div className='display-4'>
                Lista de Usuários
            </div>
            <hr />
            <span className="fa fa-list mr-2 mb-3"/>
            <span className="mb-3 text-muted">Usuários</span>
            <ul className="list-group">

                {users.map(aluno => {
                    return(
                        <Alunos key={aluno.id} name={aluno.name}/>
                    )
                })}

            </ul>
        </Main>
    )
}