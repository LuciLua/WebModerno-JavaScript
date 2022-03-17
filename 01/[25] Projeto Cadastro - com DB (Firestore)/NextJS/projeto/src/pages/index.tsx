import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

import { useState } from "react";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 32, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Julia', 19, '3'),
    new Cliente('Yasmin', 22, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log("exclui: ", cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log("salvo:", cliente)
    setVisivel('tabela')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
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
