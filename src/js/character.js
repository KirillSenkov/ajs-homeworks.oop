export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        const stats = {
            Bowman: { attack: 25, defence: 25 },
            Swordsman: { attack: 40, defence: 10 },
            Magician: { attack: 10, defence: 40 },
            Daemon: { attack: 10, defence: 40 },
            Undead: { attack: 25, defence: 25 },
            Zombie: { attack: 40, defence: 10 },
        };

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой от 2 до 10 символов.');
        }
  
        if (!types.includes(type)) {
            throw new Error(`Некорректный тип персонажа: ${type}.`);
        }
  
        this.name = name;
        this.type = type;
        this.level = 1;

        if (!['Undead', 'Zombie'].includes(this.type)) {
            this.health = 100;
        }
        else {
            this.health = -100;
        }

        this.attack = stats[type].attack;
        this.defence = stats[type].defence;
    }
  
    levelUp() {
        if (this.health === 0 && !['Undead', 'Zombie'].includes(this.type)) {
            throw new Error('Нельзя повысить уровень мертвого персонажа.');
        }
  
        this.level += 1;

        if (!['Undead', 'Zombie'].includes(this.type)) {
            this.health = 100;
        }
        else {
            this.health = -100;
        }

        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
    }
  
    damage(points) {
        if (this.health > 0 || ['Undead', 'Zombie'].includes(this.type)) {
            this.health -= points * (1 - this.defence / 100);
            if (this.health < 0 && !['Undead', 'Zombie'].includes(this.type)) {
              this.health = 0;
            }
        }
    }
}