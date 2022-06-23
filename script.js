
alert(
  'Aqui você terá acesso a lista de notas do ultimo concurso realizado na cidade'
)

const students = [
  {
    name: 'Letícia',
    noteOne: 90,
    noteTwo: 70
  },
  {
    name: 'Lucas',
    noteOne: 70,
    noteTwo: 50
  },
  {
    name: 'Roberta',
    noteOne: 60,
    noteTwo: 80
  },
  {
    name: 'José',
    noteOne: 70,
    noteTwo: 60
  },
  {
    name: 'Rodrigo',
    noteOne: 90,
    noteTwo: 100
  },
  {
    name: 'Emanuel',
    noteOne: 100,
    noteTwo: 70
  },
  {
    name: 'Igor',
    noteOne: 50,
    noteTwo: 50
  }
]


 function average(noteOne, noteTwo) {
   return (noteOne + noteTwo) /10 / 2
 }


function averageAnalysi (student) {
let studentAverage = average(student.noteOne, student.noteTwo)

if (studentAverage >= 7) {
   alert (`A média do(a) aluno(a) ${student.name} é: ${studentAverage} \n
  Parabéns! Você atingiu a média proposta no concurso e foi selecionado na lista de aprovados.`
 )} else {
   alert(`A média do(a) aluno(a) ${student.name} é: ${studentAverage} \n
  Infelimente você não atingiu a média para ser aprovado no concurso.`)
  }
 }

 for (let student of students) {
 let = averageAnalysi(student) 
}
