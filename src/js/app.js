import 'normalize.css';
import '../css/style.css'; 
import { Randomizer } from './randomizer';

const rand = new Randomizer();

export function calculate() {
  const teamLevel = parseInt(document.getElementById("team-level").value);
  const result = rand.getChance(teamLevel);

  if (result) {
    setResult(result);

    setDisplay('result', 'none');
    setDisplay('dice', 'block');

    setTimeout(() => {
      setDisplay('dice', 'none');
      setDisplay('result', 'flex');
    }, 3000);
  }
}

function setResult(result) {
  setResultValue('fail', result.fail + '%');
  setResultValue('win', result.win + '%');
}

function setResultValue(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

function setDisplay(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = value;
  }
}