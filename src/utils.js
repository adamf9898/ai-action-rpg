const fs = require('fs');
const path = require('path');

function logEvent(event) {
  const logFilePath = path.join(__dirname, 'game.log');
  const logMessage = `${new Date().toISOString()} - ${event}\n`;
  fs.appendFileSync(logFilePath, logMessage);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

module.exports = {
  logEvent,
  getRandomInt,
  formatDate,
};
