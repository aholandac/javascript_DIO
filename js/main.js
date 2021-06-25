//alert('Hello JavaScript');

var nome = 'André Holanda';
var idade = 41;
var n1 = 5;
//alert('Bem Vindo '+nome+', Idade: '+idade);

console.log(nome);
console.log(idade+idade);

var frase = 'Japão é o melhor time do Mundo !';

console.log(frase.replace('Japão', 'Brasil'));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.replace('Japão','Brasil').toUpperCase());
console.log(frase.replace('Japão', 'CHINA').toLowerCase());

//alert(idade*n1);
console.log(idade*n1);

var lista = ['maçã', 'pera', 'laranja']
console.log(lista[1]);
console.log(lista[0],lista[1],lista[2]);
lista.push('melã');
console.log(lista[3]);
console.log(lista[0],lista[1],lista[2], lista[3]);
lista.pop();
console.log(lista[0],lista[1],lista[2], lista[3]);
console.log(lista.length);
lista.push('Abacaxi');
console.log(lista.length);
console.log(lista[0],lista[1],lista[2], lista[3]);
console.log(lista);
console.log(lista.toString());