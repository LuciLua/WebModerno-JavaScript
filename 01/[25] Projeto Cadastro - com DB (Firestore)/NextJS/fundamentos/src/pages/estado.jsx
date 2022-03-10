import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
  // state é um array de 2 posições, a 1 é o proprio valor e a segunda é uma funcao
  const state = useState(0);
  //   console.log(state);

  //   let numero = state[0];
  //   let alterarNumero = state[1];

  // Destructuring
  const [numero, setNumero] = useState(0);

  function incrementar() {
    // mas nao gera impacto na interface grafica
    // alterarNumero(numero + 1);
    setNumero(numero + 1);
  }

  return (
    <Layout titulo="Componente com estado">
      <h1>Estado interno dentro do componente funcional</h1>
      <br />
      <span style={{ marginRight: "10px" }}>{numero}</span>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  );
}
