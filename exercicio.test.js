const exercicio = require('./exercicio')

test('testar o valor das refeicoes', () => {
    expect(exercicio.GastoRefeicao(5,["adulto", "adulto", "crianca"])).toBe(520);
});
