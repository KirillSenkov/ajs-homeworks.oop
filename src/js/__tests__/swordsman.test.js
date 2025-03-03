import Swordsman from '../swordsman.js';

test('creation of Swordsman character', () => {
    const swordsman = new Swordsman('Арагорн');
    expect(swordsman).toEqual({
        name: 'Арагорн',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});