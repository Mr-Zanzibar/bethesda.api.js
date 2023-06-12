// Class to represent a weapon
class Weapon {
  constructor(name, damage, ammoType) {
    this.name = name;
    this.damage = damage;
    this.ammoType = ammoType;
  }

  fire() {
    console.log(`Attacking with ${this.name}! Inflicted damage: ${this.damage}`);
  }
}

// Class to represent an animal
class Animal {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  attack() {
    console.log(`The animal ${this.name} is attacking! Target's health points: ${this.hp}`);
  }
}

// Class to represent a ghoul
class Ghoul {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  attack() {
    console.log(`The ghoul ${this.name} is attacking! Target's health points: ${this.hp}`);
  }
}

// Function to get character information
const getCharacterInfo = async (characterId) => {
  const characterAPIURL = `/fallout76/characters/${characterId}`;
  const characterData = await callAPI(characterAPIURL);
  // Update the user interface with character information
  displayCharacterInfo(characterData);
};

// Function to send a command to the game
const sendCommand = async (command, parameters) => {
  const commandAPIURL = "/fallout76/commands";
  const commandData = {
    command,
    parameters
  };
  const commandResult = await callAPI(commandAPIURL, "POST", commandData);
  // Update the user interface with the command result
  displayCommandResult(commandResult);
};

// Function to get the timeline
const getTimeline = async () => {
  const timelineAPIURL = "/fallout76/timeline";
  const timelineData = await callAPI(timelineAPIURL);
  // Use the timeline in the application
  processTimelineData(timelineData);
};

// Function to play a sound
const playSound = async (soundURL) => {
  const audio = new Audio(soundURL);
  audio.play();
};

// Example usage of weapon, animal, ghoul classes, and timeline retrieval
const weapons = [
  new Weapon("Laser Rifle", 50, "Energy"),
  new Weapon("Plasma Pistol", 40, "Energy"),
  new Weapon("Shotgun", 80, "Ammo"),
];

const animals = [
  new Animal("Bear", 150),
  new Animal("Wolf", 80),
  new Animal("Tiger", 120),
];

const ghouls = [
  new Ghoul("Ghoul 1", 100, 20),
  new Ghoul("Ghoul 2", 120, 30),
  new Ghoul("Ghoul 3", 80, 15),
];

weapons.forEach((weapon) => weapon.fire());
animals.forEach((animal) => animal.attack());
ghouls.forEach((ghoul) => ghoul.attack());

// Example of retrieving the timeline
getTimeline();

// Example of playing a sound
const soundURL = "";
playSound(soundURL);
