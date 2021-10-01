/**
 * exercicio 02 - Extremos
 * objetivo: o maior e o menor numero no vetor e seus indices
 */

function retornarDados(vetor){

    //condições inválidas
    if(vetor == null)
        throw ("vetor esta nulo");

    if(vetor.length === 0)
        throw ("vetor com zero elementos");

    // variaveis para armazenar o menor e maior numero, além de seus índices.
    let menor = vetor[0];
    let menorIndice = 0;
    let maior = vetor[0];
    let maiorIndice =0;

    // procura os dados.
    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] < menor){
            menor = vetor[i];
            menorIndice = i;
        }
        
        if(vetor[i] > maior){
            maior = vetor[i];
            maiorIndice = i;
        }

    }

    let dados = {}; // objeto dados, como se fosse a classe Extremos do java
    dados.menor = menor;
    dados.maior = maior;
    dados.menorIndice = menorIndice;
    dados.maiorIndice = maiorIndice;
    return dados;
}

module.exports = retornarDados;