const buscarPalavrasSemelhantes = (palavra, array) => console.log(array.filter(e => e.includes(palavra)))

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]
