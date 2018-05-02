import ReactDOM from 'react-dom';
import React from 'react';
import RPSApp from '../src/RPSApp.jsx';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import * as sinon from 'sinon';

const expect = chai.expect;
chai.use(sinonChai);

describe('play form', function () {
  describe('when the play use case tells the UI that the input is invalid', function () {
    beforeEach(() => {
      renderApp({
        play: function (p1, p2, ui) {
          ui.invalid();
        }
      });
    });

    it('tells the user that their input is invalid', function () {
      play();

      expect(page()).to.contain('INVALID');
    })
  });

  describe('when the play use case tells the UI that p1 wins', function () {
    beforeEach(() => {
      renderApp({
        play: function (p1, p2, ui) {
          ui.p1wins();
        }
      });
    });

    it('tells the user that p1 wins', function () {
      play();

      expect(page()).to.contain('P1 Wins');
    })
  });

  describe('when the play use case tells the UI that p2 wins', function () {
    beforeEach(() => {
      renderApp({
        play: function (p1, p2, ui) {
          ui.p2wins();
        }
      });
    });

    it('tells the user that p2 wins', function () {
      play();

      expect(page()).to.contain('P2 Wins');
    })
  });

  describe('when the play use case tells the UI that there is a tie', function () {
    beforeEach(() => {
      renderApp({
        play: function (p1, p2, ui) {
          ui.tie();
        }
      });
    });

    it('tells the user that there is a tie', function () {
      play();

      expect(page()).to.contain('Tie');
    })
  });

  it('sends the users input to the rps play use case', function (done) {
    let playSpy = sinon.spy();

    renderApp({play: playSpy});

    play('p1 throw', 'p2 throw');
    expect(playSpy).to.have.been.calledWith('p1 throw', 'p2 throw');
  });
});

let domFixture;

beforeEach(setupDOM);
afterEach(tearDownDOM);

function setupDOM() {
  domFixture = document.createElement('div');
  domFixture.id = 'reactApp';
  document.querySelector('body').appendChild(domFixture);
}

function tearDownDOM() {
  domFixture.remove();
}

function play(p1, p2) {
  setInputValue("p1input", p1);
  setInputValue("p2input", p2);

  document.querySelector('#playButton').click();
}

function setInputValue(id, value) {
  const input = document.getElementById(id);
  const lastValue = input.value;

  input.value = value;

  // react 16 hack
  let tracker = input._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }

  input.dispatchEvent(new Event('input', {'bubbles': true, 'cancelable': true}));
}

function page() {
  return domFixture.innerText;
}

function renderApp(useCases) {
  ReactDOM.render(
    <RPSApp useCases={useCases}/>,
    domFixture
  )
}


