import Layout from "../components/Layout";
import { useState } from "react";

export default function Integracao() {
  const [client, setClient] = useState({});
  const [codigo, setCodigo] = useState(1);

  // function obterCliente() {
  //   fetch(`http://localhost:3000/api/clientes/${codigo}`)
  //     .then((resp) => resp.json())
  //     .then((dados) => setClient(dados));
  // }

  // trata o codigo como sincrono... somente quando ele finalizar uma chmada ele vai para o outro
  async function obterCliente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const dados = await resp.json()  
    setClient(dados)
  }

  // Precisa mudar o estado interno do componente e depois fazer refletir na interface grafica

  return (
    <Layout titulo="Integrando API #1">
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}
      >
        <input
          placeholder="Cliente"
          type="text"
          value={codigo}
          style={{ marginBottom: "15px" }}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterCliente} style={{ marginBottom: "25px" }}>
          Obter Cliente
        </button>
      </div>
      <ul style={{ listStyle: "none" }}>
        <li>Codigo: {client.id}</li>
        <li>Nome: {client.nome}</li>
        <li>E-mail: {client.email}</li>
      </ul>
    </Layout>
  );
}
