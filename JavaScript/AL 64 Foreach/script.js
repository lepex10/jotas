var listaFuncionarios = Array()

listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosângela'
listaFuncionarios[3] = 'Miguel'
listaFuncionarios[27] = 'Lucas'
listaFuncionarios[-12] = 'Fernando'

var f = function(valor, indice){
    console.log(valor, indice)
}
listaFuncionarios.forEach(f)