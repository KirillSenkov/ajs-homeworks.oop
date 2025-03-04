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

test('A wraith cannot be slain', () => {
    const hero = new Undead('Назгул');
    hero.health = 0;
    hero.damage(30);
    expect(hero.health).toBe(-22.5);
});

test('The shadow grows stronger', () => {
    const hero = new Undead('Назгул');
    hero.levelUp();
    expect(hero.level).toBe(2);
});