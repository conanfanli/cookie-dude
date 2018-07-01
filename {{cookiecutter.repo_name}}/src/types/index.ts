import * as actionCreators from "@src/actions";
export * from "@src/generated_interfaces";

export type ActionType = typeof actionCreators;

export interface State {
  serverState: {};
}
