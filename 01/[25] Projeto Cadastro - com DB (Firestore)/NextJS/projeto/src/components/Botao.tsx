interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    // chama funcao
    onClick?: () => void 
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'green'

    return(
        <button 
        onClick={props.onClick}
        className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        rounded-md
        px-3 py-2
        text-white
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}