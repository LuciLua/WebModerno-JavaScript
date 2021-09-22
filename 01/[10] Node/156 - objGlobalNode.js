// No browser> objeto global: window
// No node> objeto global: global

global.myApp = {
    saudacao(){
        return 'estou em todos os lugares'
    },
    nome: 'Cool System',
}


// global.myApp = Object.freeze({
//     saudacao(){
//         return 'estou em todos os lugares'
//     },
//     nome: 'Cool System',
// })

// uma vez que esse modulo for lido, uma vez q isso for global, qualquer outro arquivo do sisema tera acesso a "myApp"


// USAR COM CUIDADO E EM CASOS DE EXCESSÃO
// RECOMENDADO USAR O SISTEMA DE MODULOS

