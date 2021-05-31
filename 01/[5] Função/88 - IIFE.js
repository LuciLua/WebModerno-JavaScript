// função autoinvocada
// fugir de escopo global
// função anonima

// se algo é comaprtilhado com toda sua aplicação,
// principalmente se é algo que é variavel,
// muitos codigos (que rodam no seu browser) podem manipular aquele valor variavel e pode gerar bugs inesperados

// IIFE -> expressão de função / Function expression
// Immediately Invoked Function Expression

(function(valor){
    console.log
    ('Será executado na hora!')
    console.log('Fugindo do escopo mais abrangente!', valor)
})('!!!parametro!!!')