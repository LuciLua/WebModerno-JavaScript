import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    clientes,
    tabelaVisivel,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    novoCliente,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
    flex h-screen
    flex-col
    justify-center
    items-center
    bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
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
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}

      </Layout>
    </div>
  )
}
