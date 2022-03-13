import Layout from "../components/Layout";

// Mas a geração de conteudo estatico so ocorre quandof az o build
export async function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico(props) {
  const { numero } = props;

  return (
    <Layout titulo="Conteúdo estático">
      {/* aqui, resp serv sera diferente do client: */}
      {/* <div>{Math.random()}</div> */}

      <div>{numero}</div>
    </Layout>
  );
}
