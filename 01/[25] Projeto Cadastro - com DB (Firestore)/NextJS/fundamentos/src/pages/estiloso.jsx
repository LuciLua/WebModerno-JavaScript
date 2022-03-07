import React from "react";
import styles from '../styles/estiloso.module.css'
import Link from "next/link";
import Layout from "../components/Layout";

function Estiloso(props) {
  return (
    <>
      {/* <Layout> */}
      <Layout titulo="Exemplo de CSS Modularizado">
      <div className={styles.container}>
        <h1>Ola, {props.children}. children...</h1>
        {/* <h2>Formatada: {props.name}</h2> */}
        {/* <h2>Original: {props.date}</h2> */}
        <Link href={'/'}>Voltar</Link>
      </div>
      </Layout>
      
    </>
  );
}

export default Estiloso;
