/*
function soma(a, b){
    //  b = b === undefined? 0: b
      return a + b
  }
  console.log(soma(7, 7));
  console.log(soma(7, 7, 9, 15)); // desconsidera os parametros adicionais
  console.log(soma(7)); // retorna not a number NaN
  console.log(soma()); // NaN
  */

function soma() {
    var resultado = 0
    for(var i in arguments){
        resultado += arguments[i]
    }
    return resultado
}
console.log(soma(7,8,2,6,4,' Texto'))