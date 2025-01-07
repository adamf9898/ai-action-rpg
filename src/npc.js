class NPC {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.health = 100;
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
}

function createNPCs() {
  const npc1 = new NPC('Guard', 'protector');
  const npc2 = new NPC('Merchant', 'trader');
  return [npc1, npc2];
}

function updateNPCs(npcs) {
  // Implement logic to update NPC states here
  // For example, move NPCs, handle interactions, etc.
}

module.exports = {
  createNPCs,
  updateNPCs,
};
