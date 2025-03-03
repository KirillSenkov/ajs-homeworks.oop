import Zombie from '../zombie.js';

test('creation of Zombie character', () => {
    const zombie = new Zombie('Роб');
    expect(zombie).toEqual({
        name: 'Роб',
        type: 'Zombie',
        health: -100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});