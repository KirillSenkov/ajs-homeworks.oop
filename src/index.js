import Bowman from './js/bowman.js';
import Swordsman from './js/swordsman.js';
import Magician from './js/magician.js';
import Daemon from './js/daemon.js';
import Undead from './js/undead.js';
import Zombie from './js/zombie.js';

const bowman = new Bowman('Леголас');
bowman.damage(9001);
const swordsman = new Swordsman('Арагорн');
swordsman.damage(9001);
const magician = new Magician('Гэндальф');
magician.damage(9001);
const daemon = new Daemon('Балрог');
daemon.damage(9001);
const undead = new Undead('Назгул');
undead.damage(9001);
const zombie = new Zombie('Роб');
zombie.damage(9001);