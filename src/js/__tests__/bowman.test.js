import Bowman from '../bowman.js';

test('creation of Bowman character', () => {
    const bowman = new Bowman('Леголас');
    expect(bowman).toEqual({
        name: 'Леголас',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});