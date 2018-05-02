import {expect} from 'chai';
import Rps, {ROCK, PAPER, SCISSORS} from '../src/rps';
import UiSpy from "./UiSpy";

describe('RPS', () => {
  let uiSpy;
  let rps;

  beforeEach(() => {
    uiSpy = new UiSpy();
    rps = new Rps();
  });

  describe('when throws are invalid', () => {
    it('should call .invalid for p1 invalid', function () {
      rps.play('sailboat', ROCK, uiSpy);
      expect(uiSpy.invalidCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });

    it('should call .invalid for p2 invalid', function () {
      rps.play(PAPER, 'sailboat', uiSpy);
      expect(uiSpy.invalidCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });

  describe('when there\'s a tie', () => {
    it('should call .tie() on the ui', () => {
      rps.play(ROCK, ROCK, uiSpy);

      expect(uiSpy.tieCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });

  describe('rock versus scissors', () => {
    it('should call .p1wins() on the ui', () => {
      rps.play(ROCK, SCISSORS, uiSpy);

      expect(uiSpy.p1winsCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });

  describe('scissors versus rock', () => {
    it('should call .p2wins() on the ui', () => {
      rps.play(SCISSORS, ROCK, uiSpy);

      expect(uiSpy.p2winsCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });

  describe('rock versus paper', () => {
    it('should call .p2wins() on the ui', () => {
      rps.play(ROCK, PAPER, uiSpy);

      expect(uiSpy.p2winsCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });

  describe('paper versus rock', () => {
    it('should call .p1wins() on the ui', () => {
      rps.play(PAPER, ROCK, uiSpy);

      expect(uiSpy.p1winsCalled).to.eq(true);
    });
  });

  describe('scissors versus paper', () => {
    it('should call .p1wins() on the ui', () => {
      rps.play(SCISSORS, PAPER, uiSpy);

      expect(uiSpy.p1winsCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });

  describe('paper versus scissors', () => {
    it('should call .p2wins() on the ui', () => {
      rps.play(PAPER, SCISSORS, uiSpy);

      expect(uiSpy.p2winsCalled).to.eq(true);
      expect(uiSpy.calls).to.eq(1);
    });
  });
});
