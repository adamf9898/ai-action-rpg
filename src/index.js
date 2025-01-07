const { initializeGameWorld, updateGameWorld } = require('./gameWorld');
const { createPlayer, updatePlayer } = require('./player');
const { createNPCs, updateNPCs } = require('./npc');
const { generateText } = require('./aiTextGeneration');
const { generateImage } = require('./aiImageGeneration');
const { chatWithAI } = require('./aiChat');
const { buildWorldWithAI } = require('./aiWorldBuilding');
const { logEvent } = require('./utils');

let gameWorld;
let player;
let npcs;

function initializeGame() {
  gameWorld = initializeGameWorld();
  player = createPlayer();
  npcs = createNPCs();
}

function gameLoop() {
  updateGameWorld(gameWorld);
  updatePlayer(player);
  updateNPCs(npcs);

  // Example AI interactions
  const eventText = generateText('event');
  const eventImage = generateImage('event');
  const chatResponse = chatWithAI('Hello AI!');
  const newWorldData = buildWorldWithAI(gameWorld);

  logEvent(eventText);
  logEvent(eventImage);
  logEvent(chatResponse);
  logEvent(newWorldData);

  requestAnimationFrame(gameLoop);
}

initializeGame();
gameLoop();
