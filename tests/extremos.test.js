const retornarDados = require('../lib/extremos');

describe('extremos', () => {
    test('vetor = [1, 2, 3, 4, 5, 6]', () => {
        const vetor = [1, 2, 3, 4, 5, 6];
        const dados = retornarDados(vetor);
        expect(dados.maior).toBe(6); // o maior é 6
        expect(dados.menor).toBe(1); // o menor é 1
        expect(dados.maiorIndice).toBe(5); // pos = 5
        expect(dados.menorIndice).toBe(0); // pos = 0
    });

    test('vetor = [1, 99, 3, -5, 8]', () => {
        const vetor = [1, 99, 3, -5, 8];
        const dados = retornarDados(vetor);
        expect(dados.maior).toBe(99); // o maior é 99
        expect(dados.menor).toBe(-5); // o menor é -5
        expect(dados.maiorIndice).toBe(1); // pos = 1
        expect(dados.menorIndice).toBe(3); // pos = 0
    });

    test('vetor = vazio', () => {
        const vetor = [];
        expect(() => {
            retornarDados(vetor)
        }).toThrow('vetor com zero elementos');
    });

    test('vetor = nulo', () => {
        const vetor = null;
        expect(() => {
            retornarDados(vetor)
        }).toThrow('vetor esta nulo');
    });

});
