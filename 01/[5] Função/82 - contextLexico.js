// contexto lexico: contexto no qual as coisas foram declaradas dentro da linguagem

const valor = 'Global';

function minhaFuncao(){
    console.log(valor)
}

// quando a função foi declarada no JS, ela tem consciencia do local que ele foi definida.
// a função carrega consigo esse contexdo no qual ela foi declarada

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()