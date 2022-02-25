import Estiloso from "./estiloso";

function Home() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = new Date();

  const month = monthNames[dateObj.getMonth()];

  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  const output = month + "\n" + day + ", " + year;

  console.log(dateObj);

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
        <Estiloso name={output} date={dateObj.toString()}>
          Luci
        </Estiloso>
      </div>
    </>
  );
}

export default Home;
