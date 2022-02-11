import React from "react";

const BoaTarde = props => <h1>Boa Tarde {props.name}!</h1>
const BoaNoite = props => <h1>Boa Noite {props.name}!</h1>

export { BoaNoite, BoaTarde } // importar como { BoaTarde }

// quando default: não preciso de usar { BoaTarde } na hora de importar
// eslint-disable-next-line import/no-anonymous-default-export
export default { BoaTarde, BoaNoite } // cria objeto com as funcoes

// posso importar todos desestruturando também: export default { BoaTarde, BoaNoite }
// ai import Multi... deoois usa Multi.BoaTarde