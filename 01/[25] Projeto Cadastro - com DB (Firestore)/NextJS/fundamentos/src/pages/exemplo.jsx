import React from "react";
import Link from "next/link";
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
  return (
    <>
      <Layout>
        {/* Objetivo de criar um componente: reuso */}
        <Cabecalho theme={"light"} title="Aprenda Next" />
        <h1>Exemplo</h1>
      </Layout>
    </>
  );
}
