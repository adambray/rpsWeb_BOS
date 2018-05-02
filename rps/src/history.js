export default class HistoryUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  update(ui) {
    ui.rounds(this.repo.findAll())
  }
}