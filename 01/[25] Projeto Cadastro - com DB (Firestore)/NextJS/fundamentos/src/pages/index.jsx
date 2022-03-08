import Estiloso from "./estiloso";
import Navegador from "../components/Navegador";

function Home() {
  var output = "ola";
  var active = "var(--active)"

  return (
    <>
      {/* <h1>Fundamentos de Next.js e React</h1>
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
      </div> */}
      <div
        style={{
          // double mustache for intern style
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          flexWrap: "wrap",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <Navegador destino="/estiloso" label="Estiloso" cor={active} />
        {/* cor de forma dinamica */}
        <Navegador destino="/exemplo" label="Exemplo" />
        <Navegador destino="/jsx" label="Jsx" />
      </div>
    </>
  );
}

// componentes funcionais: componentes baseados em funcao

export default Home;
