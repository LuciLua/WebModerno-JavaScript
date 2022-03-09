import Layout from "../../../components/Layout"
import { useRouter } from "next/router";
import { useEffect }  from "react";

export default function ClienteProCodigo() {
  const router = useRouter();

  // useEffect(() => {
  //   console.log(router.query)
  // }, [])

  return (
    <>
      <Layout titulo="Navegação Dinâmica">
        <p>Tipo = {router.query.id}</p>
        <p>cliente = {router.query.client}</p>
      </Layout>
    </>
  );
}
