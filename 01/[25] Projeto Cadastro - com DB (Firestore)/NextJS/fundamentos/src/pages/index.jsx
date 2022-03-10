import Estiloso from "./estiloso";
import Navegador from "../components/Navegador";
import { useEffect, useState } from "react";

function Home() {
  var output = "ola";
  var active = "var(--active)";

  const [path, setPath] = useState("/cliente/id/luci");
  const [type, setType] = useState("id");
  const [client, setClient] = useState("user");

  function finalPath() {
    setPath(`/cliente/${type}/${client}`);
    alert(`
    Salvo!
    ------------
    Tipo: ${type}
    Cliente: ${client}
    `);
  }

  // useState é assincrona, como corrigir atraso?
  function addClient(e) {
    setClient(e.target.value);
    console.log(client);
  }

  // useState é assincrona, como corrigir atraso?
  function addType(e) {
    setType(e.target.value);
    console.log(type);
  }

  // Style, posso usar tambem mais diretamente com double mustache!
  const estiloInput = {
    background: "#335a",
    color: "grey",
    textAlign: "center",
    outline: "none",
    border: "none",
    height: "60px",
    width: "100px",
  };

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
        className="navGroup"
        style={{
          // double mustache for intern style
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          flexWrap: "wrap",
          maxWidth: "1300px",
          margin: "auto",
          borderRadius: "5px",
          // background: "rgba(240, 248, 255)",
          width: "fit-content",
          overflow: "hidden",
          height: "fit-content",
        }}
      >
        <Navegador destino="/estiloso" label="Estiloso" cor={active} />
        {/* cor de forma dinamica */}
        <Navegador destino="/exemplo" label="Exemplo" />
        <Navegador destino="/jsx" label="Jsx" />
        <Navegador destino="/estado" label="Estado" />
        <Navegador destino="/navegacao" label="Navegacao I" cor="#335f" />
        <Navegador destino={path} label="Navegacao II" cor="#335f" />
        <input
          autoComplete="off"
          type="text"
          placeholder="Tipo"
          id="type"
          onChange={(e) => addType(e)}
          style={estiloInput}
        />
        <input
          autoComplete="off"
          type="text"
          placeholder="Client"
          id="client"
          onChange={(e) => addClient(e)}
          style={estiloInput}
        />
        <Navegador
          label="Salvar"
          cor="green"
          destino="/"
          click={() => {
            finalPath();
          }}
        />
      </div>
    </>
  );
}

// componentes funcionais: componentes baseados em funcao

export default Home;
