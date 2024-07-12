var objetos = Array('Cadeira', 'Impressora', 'Garfo')
function adicionarObjetos() {
    var objeto = document.getElementById('objeto').value
    if (objeto != '') {
        if (objetos.indexOf(objeto) !== -1) {
            alert('Objeto já foi adicionado')
        } else {
            objetos.push(objeto)
            console.log(objetos)
            document.getElementById('objeto').value = ''
        }
    } else {
        alert('Informe um objeto válido')
    }
}
function ordenarObjetos() {
    objetos.sort()
    console.log(objetos)
}
document.write(objetos)