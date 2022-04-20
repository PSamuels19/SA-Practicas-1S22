const controller = require('./controller/index.controller');

test('addCounter', () => {
    expect(controller.addCounter(0, (value) => {
        expect(value).toBe(1);
    }))
});