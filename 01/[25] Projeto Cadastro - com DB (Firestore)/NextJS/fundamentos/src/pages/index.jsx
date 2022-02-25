import Estiloso from "./estiloso";
import Link from "next/link";

function Home() {

  var output = "ola"

  return (
    <>
      <h1>Fundamentos de Next.js e React</h1>
      <br />
      <h2>Vamos estudar esse framework!</h2>
      <br />
      <hr />
      <br />
      <p>
        Para criar um componente dentro do Next que tenha uma url basta criar
        arquivo dentro de pages e exportar
      </p>
      <br />
      <hr />
      <br />
      <p>ola</p>
      <div>
        <Estiloso name={output.toUpperCase()} date={output}>
          Luci
        </Estiloso>
      </div>
      <div>
        <Link href="/estiloso">
          Estiloso
        </Link>
      </div>
    </>
  );
}

// componentes funcionais: componentes baseados em funcao

export default Home;
