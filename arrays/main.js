

const alunos = [ 'joao' , 'renan' , 'julia' , 'zeca' ];

//adicionar dinamicamente no final da lista
alunos.push('alberto');

//adicionar na posição 7 funciona tb para sobrescrever;
alunos[5] = 'juninho';

//aceita tipos diferentes dentro da lista
alunos.push(10);

//remove o ultimo valor da lista 
alunos.pop();

//remove o primeiro valor da lista
alunos.shift();

// deleta o item da lista na posição, "o valor fica nulo na posição"
delete alunos[1];



//exemplo de array de notas
const notas = []
notas.push(10);
notas.push(3);
notas.push(6);
notas.push(4);

const soma = notas[0] + notas[1] + notas[2] + notas[3];

console.log("media: " +  soma / notas.length)
