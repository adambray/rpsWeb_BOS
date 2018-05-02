import HistoryUsecase from '../src/history';
import {PAPER, ROCK, SCISSORS} from "../src/rps";
import FakeRoundRepo from "./fakeRoundRepo";
import Rps from "../src/rps";
import UiSpy from "./UiSpy";
import chai from 'chai';
import sinonChai from 'sinon-chai';
import * as sinon from 'sinon';
import Round from "../src/round";

const expect = chai.expect;
chai.use(sinonChai);

describe('history', () => {
  describe('when rounds have been played', () => {
    it('calls .rounds() on the ui with the rounds that have been played', () => {
      const repo = new FakeRoundRepo();
      const rps = new Rps(repo);
      const history = new HistoryUsecase(repo);
      const ui = {
        p1wins: sinon.spy(),
        p2wins: sinon.spy(),
        tie: sinon.spy(),
        invalid: sinon.spy(),
        rounds: sinon.spy(),
      };

      rps.play(ROCK, PAPER, ui);
      rps.play(PAPER, ROCK, ui);
      rps.play(SCISSORS, ROCK, ui);

      history.update(ui);

      expect(ui.rounds).to.have.been.calledWith([
        new Round(ROCK, PAPER, 'p2'),
        new Round(PAPER, ROCK, 'p1'),
        new Round(SCISSORS, ROCK, 'p2'),
      ]);
    });
  })
});