import React from 'react';

export default class RPSApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: undefined,
      p1input: undefined,
      p2input: undefined
    }
  }

  render() {
    return (
      <div>
        <header>
          {this.state.result}
        </header>
        <input type="text"
               name="p1input"
               id="p1input"
               onChange={(event) => this.updateInputs(event)}/>
        <input type="text"
               name="p2input"
               id="p2input"
               onChange={(event) => this.updateInputs(event)}/>
        <button id="playButton"
                onClick={() => this.playGame()}>
          Play
        </button>
      </div>
    )
  }

  playGame() {
    this.props.useCases.play(this.state.p1input, this.state.p2input, this);
  }

  invalid() {
    this.setState({result: 'INVALID'});
  }

  p1wins() {
    this.setState({result: 'P1 Wins'});
  }

  p2wins() {
    this.setState({result: 'P2 Wins'});
  }

  tie() {
    this.setState({result: 'Tie'});
  }

  updateInputs(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
}
