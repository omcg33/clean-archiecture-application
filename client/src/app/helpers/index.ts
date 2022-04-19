import { Reducer } from "redux";
import omit        from "lodash-es/omit";


import { stubMap } from "../reducers";

export const createRootReducer = (preloadedState: Object, staticReducers: {[key: string]: Reducer<any,any>}): {[key: string]: Reducer<any,any>} => {
  return Object.entries(omit(preloadedState, Object.keys(staticReducers)))
    .reduce((acc, [key]) => ({...acc, [key]: stubMap}), staticReducers)
};
