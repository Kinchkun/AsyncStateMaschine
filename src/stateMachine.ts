import angular = require("../angular");

export interface IStateMachineService {
  create: (definition: IStateMachineDefinition) => StateMachine;
}
export interface IStateMachineDefinition { }


class StateMachineService implements IStateMachineService { 
  public create = (definition: IStateMachineService): StateMachine => {
    return new StateMachine();
  }
}

class StateMachine {}


angular.module("knStatemachine")
  .service("knStatemachineService", StateMachineService)
  ;
