import HistoryUsecase from '../src/history';
import {PAPER, ROCK} from "../src/rps";
import chai from 'chai';
import sinonChai from 'sinon-chai';
import * as sinon from 'sinon';
import Round from "../src/round";

const expect = chai.expect;
chai.use(sinonChai);

describe('history', () => {
  describe('when rounds have been played', () => {
    it('calls .rounds() on the ui with the rounds that have been played', () => {
      const rounds = [
        new Round(ROCK, PAPER, 'p2'),
        new Round(PAPER, ROCK, 'p1'),
      ];
      const repo = {
        findAll() {
          return rounds;
        }
      };

      const history = new HistoryUsecase(repo);
      const ui = {
        rounds: sinon.spy(),
        norounds: sinon.spy(),
      };

      history.update(ui);

      expect(ui.rounds).to.have.been.calledWith(rounds);
      expect(ui.norounds).to.not.have.been.called;
    });
  });

  describe('when no rounds have been played', () => {
    it('calls .rounds() on the ui with the rounds that have been played', () => {
      const repo = {
        findAll() {
          return [];
        }
      };
      const history = new HistoryUsecase(repo);
      const ui = {
        norounds: sinon.spy(),
      };

      history.update(ui);

      expect(ui.norounds).to.have.been.called;
    });
  })

});