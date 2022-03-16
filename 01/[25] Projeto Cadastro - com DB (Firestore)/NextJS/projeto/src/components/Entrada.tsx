interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    placeHolder?: 'text'
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void 
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`
        flex flex-col ${props.className}
        `}>
            <label
                className={`mb-2`}>
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                placeholder={props.placeHolder}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
            border border-purple-500 rounded-lg
            focus:outline-none
            px-4 py-2 
            bg-gray-100
            ${props.somenteLeitura ? '' : 'focus:bg-white'}
            `}
            />
        </div>
    )
}