import Cliente from "../core/Cliente"
import { EditIcon, TrashIcon } from "./Icons"

interface TabelaProps {
    clientes: Cliente[]
    // propriedades opcionais
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className={`text-left p-4`}>Codigo</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {exibirAcoes ?
                    <th className={`p-4`}>Ações</th>
                    : false}
            </tr>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr
                    key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className={`text-left p-4`}>{cliente.id}</td>
                    <td className={`text-left p-4`}>{cliente.nome}</td>
                    <td className={`text-left p-4`}>{cliente.idade}</td>
                    {exibirAcoes ?
                        renderizarAcoes(cliente)
                        : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button onClick={() => {
                        props.clienteSelecionado?.(cliente)
                    }} className={`
                    flex justify-center items-center
                    text-green-600
                    hover:bg-purple-50
                    rounded-full
                    p-2 m-1
                    `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => {
                        props.clienteExcluido?.(cliente)
                    }} className={`
                    flex justify-center items-center
                  text-red-500
                  hover:bg-purple-50
                    rounded-full
                    p-2 m-1
                `}>
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className={`
        w-full
        rounded-xl
        overflow-hidden
        `}>
            <thead className={`
            bg-gradient-to-r from-purple-500 to-purple-700
            text-gray-100
            `}>
                {renderizarCabecalho()}
            </thead>
            {renderizarDados()}
        </table>
    )
}