import Round from "./round";

export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';

const validThrows = [ROCK, PAPER, SCISSORS];

function isInvalidThrow(myThrow) {
  return !validThrows.includes(myThrow);
}

export default class Rps {
  constructor(repo) {
    this.repo = repo;
  }

  play(p1Throw, p2Throw, ui) {
    if (isInvalidThrow(p1Throw) || isInvalidThrow(p2Throw)) {
      ui.invalid();
      return;
    }

    if (p1Throw === p2Throw) {
      this.repo.save(new Round(p1Throw, p2Throw, 'tie'));
      ui.tie();
    } else if (
      p1Throw === ROCK && p2Throw === SCISSORS ||
      p1Throw === PAPER && p2Throw === ROCK ||
      p1Throw === SCISSORS && p2Throw === PAPER) {

      this.repo.save(new Round(p1Throw, p2Throw, 'p1'));
      ui.p1wins();
    } else {
      this.repo.save(new Round(p1Throw, p2Throw, 'p2'));
      ui.p2wins();
    }
  }
}
