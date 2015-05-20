/// <reference path="../../src/typings/node.d.ts" />
/// <reference path="../typings/jasmine.d.ts"/>
/// <reference path="../../src/typings/angular/angular-mocks.d.ts" />

import angular      = require("angular");
import ngMock       = require("angular-mocks/ngMock");
import StateMachine = require("../../src/stateMachine")

describe("my test", () => {

  var target: StateMachine.IStateMachineService;

  beforeEach(() => {
    angular.mock.module("knStatemachine");
    //angular.mock.inject(knStatemachineService => {
      //target = knStatemachineService;
    //});
  });

  it("tests", () => {
    expect(true).toBe(true);
    //expect(target.create({})).toBeDefined();
  });
});
