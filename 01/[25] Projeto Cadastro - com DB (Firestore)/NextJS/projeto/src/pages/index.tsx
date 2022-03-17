import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  // Para alterar estado na inicialização do componente
  useEffect(obterTodos, [])


  function obterTodos() {
    repo.obterTodos().then(clientes => {
      //seta os clientes
      setClientes(clientes)
      // tabela visivel
      setVisivel('tabela')
    })
  }

  // const clientes = [
  //   new Cliente('Ana', 32, '1'),
  //   new Cliente('Bia', 23, '2'),
  //   new Cliente('Julia', 19, '3'),
  //   new Cliente('Yasmin', 22, '4')
  // ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log("exclui: ", cliente.nome)
  }

  
  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  
  async function salvarCliente(cliente: Cliente) {
    // console.log("salvo:", cliente)
    await repo.salvar(cliente)
    obterTodos()
    // setVisivel('tabela')
  }

  return (
    <div className={`
    flex h-screen
    flex-col
    justify-center
    items-center
    bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={novoCliente}

              >Novo Cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  )
}
