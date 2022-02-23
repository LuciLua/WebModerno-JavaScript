export default function Jsx(){
    const a = 2
    const b = 3
    console.log(a*b)

    const title = <h1>Acessando constante</h1>

    function subtitle() {
        return(
            <h2>
                {"subtitle HERE!".toLowerCase()}
            </h2>
        )
    }

    return(
        <>
            <h1>Jsx é um conceito central</h1>
            <p>Resultado da conta: {a} x {b} = {a*b}</p>

            {/* chando funcao com retorno JSX*/}
            {subtitle()}

            <strong>{"exemplo".toUpperCase()}</strong>
            <p>
                {/* 2 chaves {{}} = Objeto */}
                {JSON.stringify({ name: "Luci", age: 20 })}
            </p>
            {title}


        </>
    )
}