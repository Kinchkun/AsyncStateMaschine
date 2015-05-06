/// <reference path="../typings/jasmine.d.ts"/>


import StateMachine = require("../../src/stateMachine");

describe("my test", () => {

  var target: StateMachine;

  beforeEach(() => {
    target = new StateMachine();
  });

  it("tests", () => {
    expect(target.add(1,1)).toBe(2);
  });
});
