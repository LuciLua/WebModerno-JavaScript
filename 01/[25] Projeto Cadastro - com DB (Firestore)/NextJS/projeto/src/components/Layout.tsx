import Titulo from "./Titulo"

// recurso do typescript

interface LayoutProps {

    // se eu quisesse q fosse opcional, ou seja: posso ou n passar pro componente Layout um titulo
    // titulo?: string  

    titulo: string
    children: any
}

// props sao do tipo LayoutProps (criada ali em cima)
export default function Layout(props: LayoutProps) {
    return (
        <>
            <div className={`
            w-2/3
            bg-white
            rounded-md
            `}>
                <div className={`
                flex
                flex-col
                text-gray-800
                `}>
                    <Titulo>{props.titulo}</Titulo>
                </div>
                <div className={`
                p-6
                `}>
                    {props.children}
                </div>
            </div>
        </>
    )
}