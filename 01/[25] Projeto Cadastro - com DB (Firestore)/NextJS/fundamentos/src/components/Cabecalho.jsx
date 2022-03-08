import styles from '../styles/Cabecalho.module.css'
export default function Cabecalho(props){


    // propriedades sao objeto de somente leitura, nao da pra alterar

    var theme = props.theme

    function isTheme(){
        if(theme == "dark"){
            console.log("darkee!")
        } else{
            console.log("Light")
        }
    }


    isTheme()


    return(
        <header className={styles.dark}>
            <h1>Fundamentos de Next.js e React</h1>
            <h2>{props.title}</h2>
            <button onClick={(e) => {
                theme == "dark" ? theme = "light" : theme =  "dark"
                isTheme()
                }}>Theme</button>
        </header>
    )
}