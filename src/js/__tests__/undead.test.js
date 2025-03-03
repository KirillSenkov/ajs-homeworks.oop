import Undead from '../undead.js';

test('creation of Undead character', () => {
    const undead = new Undead('Назгул');
    expect(undead).toEqual({
        name: 'Назгул',
        type: 'Undead',
        health: -100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});