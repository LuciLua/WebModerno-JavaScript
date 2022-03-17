import Entrada from "./Entrada";
import { useState } from "react"
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    // funcao q n recebe nenhum parametro e n retorna nd tbm
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Codigo"
                    valor={id}
                />
            ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada
                texto="Idade"
                valor={idade}
                tipo="number"
                valorMudou={setIdade}
            />
            <div className="mt-7 flex justify-end">
                <Botao
                    cor="blue"
                    className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao
                    cor="gray"
                    onClick={() => props.cancelado()}
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}