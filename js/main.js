//alert('Hello JavaScript');
/*
var nome = 'André Holanda';
var idade = 18;
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

//Lista (Array)
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
console.log(lista.join('-'));
//Ficha
var fruta = {nome:'Maçã', cor:'Vermelha'};
console.log(fruta);
console.log('Nome: '+fruta.nome+ ', Cor: '+fruta.cor);

//Lista de ficha
var frutas = [{nome:'Pera', cor:'Amarela'},{nome:'Uva', cor:'Preta'}];
console.log(frutas);
console.log(frutas[1].nome,frutas[1].cor);

//Condicional IF
/*var idadeN = prompt('qual a sua Idade: ');
if (idadeN > 18){
    console.log('Maior de Idade !');
}else if (idadeN == 18){
    console.log('Tem 18 Anos !');
}else{
    console.log('Menor de Idade !');
}

//Laço de repetição WHILE
var count = 0;
while (count <= 5){
    console.log(count);
    count++
}

//Laço de repetição FOR
for(count = 1; count <= 5; count++){
    console.log(count);
}
*/
//Trabalhando com DATE
var d = new Date();
console.log((d.getDate())+'/'+(d.getMonth()+1)+'/'+(d.getFullYear()));
console.log(d.getDay());