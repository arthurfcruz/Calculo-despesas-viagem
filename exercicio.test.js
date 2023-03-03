const exercicio = require('./exercicio')

test('Testar rendimento do combustivel', () => {
    expect(exercicio.GastoViagem(11000, 'etanol')).toBe(1);
});
