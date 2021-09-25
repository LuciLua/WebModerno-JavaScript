// npm i node-schedule@1.3.0 -E
// o prorpio javascript tem temporizadores, como o setinterval, settimeout
// forma mais rica de disparar ações de forma temporizada: schedule

const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 6', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})
// executando tarefa a cada 5 segundos da hora 16. estando na semana 6 (sabado)

// 0 domingo, 1 seg, 2 terça, 3 quarta, 4 quinta, 5 sexta, 6 sabado
// de 5 em 5 minutos (se fosse so '5' spenas no segundo 5 de qualque minuto as 12 hoas da terça feira )
// hora tal
// dia tal e mes tal
// semana tal


setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando tarefa1!')
}, 20000)
// depois de 20 segundos, ela é cancelada

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)] // executa de domingo a sabado
regra.hour = 16 // hora tem que ser 16
regra.second = 30 // vai executar no segundo 30
// 16:30
// a cada 1 minuto ele vai executar, sempre q o segundo for 30

const tarefa2 = schedule.scheduleJob(regra, function(){// 1 parametro: regra, 2: funcao que sera chamada
console.log('Executando tarefa2!', new Date().getSeconds())
})
    

// outras opçoes:

// setImmediate
// setInterval