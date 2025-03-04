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

test('That which is dead may never die', () => {
    const hero = new Zombie('Роб');
    hero.health = 0;
    hero.damage(30);
    expect(hero.health).toBe(-27);
});

test('That which is dead may never die, but rises again, harder and stronger', () => {
    const hero = new Zombie('Роб');
    hero.levelUp();
    expect(hero.level).toBe(2);
});