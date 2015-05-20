/// <reference path="typings/node.d.ts" />
/// <reference path="typings/angular/angular.d.ts" />

import angular = require("angular");
import fs = require("fs");

var [a,b] = [1,2]

export interface IStateMachineService {
  create: (definition: IStateMachineDefinition) => StateMachine;
}

export interface IStateMachineDefinition { }

class StateMachineService implements IStateMachineService { 
  public create = (definition: IStateMachineService): StateMachine => {
    return new StateMachine();
  }
}

export class StateMachine {}

angular.module("knStatemachine")
  .service("knStatemachineService", StateMachineService)
  ;
