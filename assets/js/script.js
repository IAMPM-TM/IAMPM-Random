class Chance {
  constructor(fail) {
    this.fail = fail;
    this.win = 100 - fail;
  }
}

class Randomizer {
  get settings() {
    const settings = new Map();

    settings.set(0, [
      new Chance(100),
      new Chance(80),
      new Chance(60),
      new Chance(40),
      new Chance(20),
      new Chance(0)
    ]);

    settings.set(1, [
      new Chance(80),
      new Chance(60),
      new Chance(40),
      new Chance(20),
      new Chance(0)
    ]);

    settings.set(2, [
      new Chance(60),
      new Chance(40),
      new Chance(20),
      new Chance(0)
    ]);

    settings.set(3, [
      new Chance(40),
      new Chance(20),
      new Chance(0)
    ]);

    return settings;
  }

  constructor() {
    this.chanceMap = this.settings;
  }

  getChance(level) {
    if (!this.chanceMap.has(level)) return null;
    
    const items = this.chanceMap.get(level);
    const index = this.getRandomNumber(items.length - 1);
    return items[index];
  }

  getRandomNumber(maxValue) {
    return Math.floor((Math.random() * maxValue));
  }
}

const rand = new Randomizer();

function calculate() {
  const teamLevel = parseInt(document.getElementById("team-level").value);
  const result = rand.getChance(teamLevel);

  if (result) {

    setResult(result);
    hideResult();
    showDice();

    setTimeout(function() {
      hideDice();
      showResult();  
    }, 3000);

  }
}

function setResult(result) {
  document.getElementById("fail").innerText = result.fail + "%";
  document.getElementById("win").innerText = result.win + "%";
}

function showDice() {
  document.getElementById("dice").style.display = "block";
}

function hideDice() {
  document.getElementById("dice").style.display = "none";
}

function showResult() {
  document.getElementById("result").style.display = "flex";
}

function hideResult() {
  document.getElementById("result").style.display = "none";
}