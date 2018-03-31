import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import u from "updeep";
import { State } from "@src/types";

export const initialState: State = {
  serverState: {}
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

const serverState = createReducer(initialState.serverState, {
  LoadServerState: (serverState, action) => {
    let ret = Object.assign({}, serverState);
    Object.keys(action.serverState).map(path => {
      const target = action.serverState[path];
      function concat(items) {
        return [...(items || []), ...target];
      }

      if (path.startsWith("+")) {
        ret = u.updateIn(path.slice(1), concat, ret);
      } else if (path.startsWith("-")) {
        ret = u.updateIn(
          path.slice(1),
          u.reject(item => item.id == target.id),
          ret
        );
      } else if (path.startsWith("?")) {
        ret = u.updateIn(
          path.slice(1),
          u.map(item => {
            return item.id == target.id ? target : item;
          }),
          ret
        );
      } else {
        ret = u.updateIn(path, target, ret);
      }
    });
    return ret;
  }
});

const reducers = combineReducers({
  // query,
  serverState,
  router: routerReducer
});

export default reducers;
