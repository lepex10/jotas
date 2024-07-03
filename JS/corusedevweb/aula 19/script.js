var variavel1 = prompt('Digite um numero: ');
var variavel2 = prompt('Digite oto numero: ');
var variavel3 = prompt('Só mais um Esse pode ser float Deve ser . e não Vírgula: ')

variavel3 = variavel3.replace(',','.');

variavel1 = parseInt(variavel1);
variavel2 = parseInt(variavel2);
variavel3 = parseFloat(variavel3);

console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

document.write(variavel1+' '+variavel2+' '+variavel3); // OU (variavel1.toString()+' '+variavel2.toString()+' '+variavel3.toString())