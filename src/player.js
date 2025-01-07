class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.position = { x: 0, y: 0 };
  }

  move(direction) {
    switch (direction) {
      case 'up':
        this.position.y += 1;
        break;
      case 'down':
        this.position.y -= 1;
        break;
      case 'left':
        this.position.x -= 1;
        break;
      case 'right':
        this.position.x += 1;
        break;
      default:
        break;
    }
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  heal(amount) {
    this.health += amount;
    if (this.health > 100) {
      this.health = 100;
    }
  }

  addItem(item) {
    this.inventory.push(item);
  }

  removeItem(item) {
    const index = this.inventory.indexOf(item);
    if (index > -1) {
      this.inventory.splice(index, 1);
    }
  }
}

function createPlayer(name) {
  return new Player(name);
}

function updatePlayer(player) {
  // Implement logic to update player state here
  // For example, handle player input, update position, etc.
}

module.exports = {
  createPlayer,
  updatePlayer,
};
