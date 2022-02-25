import React from "react";
import styles from '../styles/estiloso.module.css'

function Estiloso(props) {
  return (
    <>
      <div className={styles.container}>
        <h1>Ola, {props.children}. children...</h1>
        <h2>Formatada: {props.name}</h2>
        <h2>Original: {props.date}</h2>
      </div>
    </>
  );
}

export default Estiloso;
