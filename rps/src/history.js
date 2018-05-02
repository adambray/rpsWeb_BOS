export default class HistoryUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  update(ui) {
    const rounds = this.repo.findAll();
    if (rounds.length)
      ui.rounds(rounds);
    else
      ui.norounds();
  }
}