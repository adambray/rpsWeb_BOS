export default class FakeRoundRepo {
  constructor() {
    this.rounds = [];
  }

  save(round) {
    this.rounds.push(round);
  }

  findAll() {
    return this.rounds;
  }
}
