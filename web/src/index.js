import Rps from '../../rps/src/rps';
import React from 'react';
import ReactDOM from "react-dom";
import RPSApp from "./RPSApp";

const domFixture = document.createElement('div');
domFixture.id = 'reactApp';
document.querySelector('body').appendChild(domFixture);

const rps = new Rps();

ReactDOM.render(
  <RPSApp useCases={{play: rps.play}}/>,
  domFixture
);
