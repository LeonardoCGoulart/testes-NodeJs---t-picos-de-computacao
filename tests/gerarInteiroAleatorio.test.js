const gerarNumeroAleatorio = require('../lib/gerarInteiroAleatorio');

describe('gerarInteiroAleatorio', () => {
    test('o início do intervalo é um valor negativo', () => {
        const resultado = gerarNumeroAleatorio(-1,10);
        expect(resultado).toBe(-1); // inicio negativo deve retornar -1
    });
});

describe('gerarInteiroAleatorio', () => {
    test('o fim do intervalo é um valor negativo', () => {
        const resultado = gerarNumeroAleatorio(1,-10);
        expect(resultado).toBe(-1); // fim negativo deve retornar -1
    });
});

describe('gerarInteiroAleatorio', () => {
    test('o início do intervalo é igual ao fim do intervalo', () => {
        const resultado = gerarNumeroAleatorio(1,1);
        expect(resultado).toBe(-1); // o inicio não pode ser >= fim
    });
});

describe('gerarInteiroAleatorio', () => {
    test('um intervalo válido [200, 3000] é fornecido. ', () => {
        const resultado = gerarNumeroAleatorio(200,3000);
        if(resultado < 200 || resultado > 3000)
            throw new Error('Valor fora do intervalo');
    });
});