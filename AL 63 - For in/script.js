/*
var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']
console.log(listaConvidados)
for (var x in listaConvidados) {
    console.log('Índice ' + x + ' valor ' + listaConvidados[x])
}
*/

var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']
console.log(listaFuncionarios)

listaFuncionarios.forEach(function (valor, indice, array) {
    console.log('indice' + indice + '| valor: ' + valor)
    if (valor == 'Lucas') {
        array[indice] = 'Um Novo Valor'
    }
    console.log(array)
})