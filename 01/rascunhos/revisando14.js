function Materias (id, name, dep, creditos){
    this.id = id
    this.name = name
    this.dep = dep
    this.creditos = creditos

    this.show = function (){
        console.log(`id: ${this.id} \nnome: ${this.name} departamento: ${this.dep} \ncreditos: ${this.creditos}`)
    }
}

// 5 periodo

const m1 = new Materias ('ART205','METODOLOGIA DA PESQUISA', 'ART',4)
const m2 = new Materias ('ART285', 'ANÁLISE FÍLMICA: METODOLOGIA E PRÁTICA', 'ART',4)
const m3 = new Materias ('ART358','ILUSTRAÇÃO', 'ART',3)
const m4 = new Materias ('ART378', 'ARTES E HISTÓRIA III', 'ART',4)
const m5 = new Materias ('CSO093', 'INTRODUÇÃO À ANTROPOLOGIA','CSO', 4)
const m6 = new Materias ('CSO150', 'VIDA URBANA, GLOBALIZAÇÃO E MUDANÇA SOCIAL','CSO', 4)
const m7 = new Materias ('HIS147', 'HISTÓRIA DA ÁFRICA','HIS', 4)
const m8 = new Materias ('LEC090', 'PRÁTICAS DE GÊNEROS ACADÊMICOS','LEC', 4)

// 1 periodo

const m9 = new Materias ('ART344', 'INTEGRAÇÃO CRÍTICA DAS ARTES', 'ART',2)
const m10 = new Materias ('ART186', 'IMAGEM DIGITAL 2D', 'ART',3)
const m11 = new Materias ('ART310', 'GEOMETRIA APLICADA', 'ART',4)
const m12 = new Materias ('ART343', 'ESTUDOS DA COR I', 'ART',3)
const m13 = new Materias ('ART188', 'FOTOGRAFIA INSTRUMENTAL', 'ART',3)
const m14 = new Materias ('ART335', 'LINGUAGEM VISUAL', 'ART',2)
const m15 = new Materias ('ART193', 'DESENHO E MEIOS DE EXPRESSÃO I', 'ART',3)

// 2 periodo

const m16 = new Materias ('ART206', 'ATELIÊ DE EXPRESSÃO BIDIMENSIONAL', 'ART',4)
const m17 = new Materias ('ART182', 'SEMINÁRIO DE ATUALIDADE CULTURAL I', 'ART',4)
const m18 = new Materias ('ART279', 'CINEMA E DIÁLOGOS', 'ART',4)
const m19 = new Materias ('ART342', 'DIÁLOGOS ENTRE MODA E ARTE', 'ART',2)
const m20 = new Materias ('ART187', 'IMAGEM DIGITAL 3D', 'ART',3)
const m21 = new Materias ('UNI004', 'FRANCÊS INSTRUMENTAL I','UNI', 4)
const m22 = new Materias ('ART190', 'VÍDEO INSTRUMENTAL', 'ART',3)

// 3 periodo

const m23 = new Materias ('ART339', 'MEIOS E MÉTODOS DE REPRESENTAÇÃO', 'ART',4)
const m24 = new Materias ('ART207', 'ATELIÊ DE EXPRESSÃO TRIDIMENSIONAL', 'ART',4)
const m25 = new Materias ('UNI005', 'FRANCÊS INSTRUMENTAL II','UNI', 4)
const m26 = new Materias ('FIL093', 'LITERATURA FILOSÓFICA E FILOSOFIA LITERÁRIA EM SARTRE','FIL', 4)
const m27 = new Materias ('ART376', 'ARTES E HISTÓRIA I', 'ART',4)
const m28 = new Materias ('LEC196', 'TÓPICOS DE LITERATURA GREGA','LEC', 2)
const m29 = new Materias ('ART189', 'MULTIMÍDIA INSTRUMENTAL', 'ART',3)


// 4 periodo

const m30 = new Materias ('ART256', 'HISTÓRIA DA MODA I', 'ART',4)
const m31 = new Materias ('HIS114', 'HISTÓRIA ANTIGA','HIS', 4)
const m32 = new Materias ('ART338', 'PROCESSOS EM DESIGN', 'ART',4)
const m33 = new Materias ('UNI006', 'FRANCES INSTRUMENTAL III','UNI', 4)
const m34 = new Materias ('ART181', 'SEMIÓTICA DO DESIGN', 'ART',4)
const m35 = new Materias ('ART377', 'ARTES E HISTÓRIA II', 'ART',4)



const allMaterias = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25, m26, m27, m28, m29, m30, m31, m32, m33, m34, m35]


function contagemCreditos () {
    let soma = 0
    for (let i=0; i < allMaterias.length; i++){
        soma += allMaterias[i].creditos;
    }

    return(
        soma
    )
}

function horas(credit){
    var hora = credit * 15
    return(
        hora
    )
}

const h1 = horas(contagemCreditos())

console.log(`Parabéns! Você conseguiu ${h1} horas com seus ${contagemCreditos()} créditos em ${allMaterias.length} matérias diferentes!`)

function day (){
    const dia = 24 
    const hra = () => (h1/dia)
    return hra()
}

function ano(){
    const ano = 365.25
    const yea = () => ((100*day())/ano)
    return yea()
}

console.log('Com',day().toFixed(0), 'dias completos estudando estas materias!\nIsso equivale também a aproximadamente', ano().toFixed(3), '% de um ano! ')




// function contDep() {
//     for (let i=0; i < allMaterias.length; i++){

//         console.log(`${allMaterias[i].name} pertence ao departamento de ${allMaterias[i].dep}`)
//     }
// }

// contDep()