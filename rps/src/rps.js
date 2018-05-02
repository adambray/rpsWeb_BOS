export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';

const validThrows = [ROCK, PAPER, SCISSORS];

function isInvalidThrow(myThrow) {
  return !validThrows.includes(myThrow);
}

export default class Rps {
  play(p1Throw, p2Throw, ui) {
    if (isInvalidThrow(p1Throw) || isInvalidThrow(p2Throw)) {
      ui.invalid();
      return;
    }

    if (p1Throw === p2Throw) {
      ui.tie();
    } else if (
      p1Throw === ROCK && p2Throw === SCISSORS ||
      p1Throw === PAPER && p2Throw === ROCK ||
      p1Throw === SCISSORS && p2Throw === PAPER) {

      ui.p1wins();
    } else {
      ui.p2wins();
    }
  }
}
