var lista_frutas = Array()

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Caju'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'
console.log(lista_frutas.length)

var y = 0
while(y < lista_frutas.length){
    document.write(lista_frutas[y] + '<br />')
    y++
}