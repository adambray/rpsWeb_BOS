export default class UiSpy {
  constructor() {
    this.calls = 0;
  }

  tie() {
    this.calls++;
    this.tieCalled = true;
  }

  p1wins() {
    this.calls++;
    this.p1winsCalled = true;
  }

  p2wins() {
    this.calls++;
    this.p2winsCalled = true;
  }

  invalid() {
    this.calls++;
    this.invalidCalled = true;
  }
}
