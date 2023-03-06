const exercicio = require('./exercicio')

test('testar o numero de paradas', () => {
    expect(exercicio.NumeroParadas(["adulto", "adulto", "crianca"],9)).toBe(9);
});
