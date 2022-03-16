import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {


  const clientes = [
    new Cliente('Ana', 32, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Julia', 19, '3'),
    new Cliente('Yasmin', 22, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)

  }
  function clienteExcluido(cliente: Cliente) {
    console.log("exclui: ", cliente.nome)
  }

  return (
    <div className={`
    flex h-screen
    flex-col
    justify-center
    items-center
    bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  )
}
