import Character from './character.js';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25, -100);
  }
  
  levelUp() {
    this.level += 1;
    this.health = -100;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
  }
  
  damage(points) {
        this.health -= points * (1 - this.defence / 100);
  }
}
