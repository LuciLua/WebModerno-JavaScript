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

  return (
    <div className={`
    flex h-screen
    flex-col
    justify-center
    items-center
    bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
