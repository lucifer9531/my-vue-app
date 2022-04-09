import { combineReducers, createStore } from 'redux';

function createPool(reducers = {}) {
  const staticReducers = combineReducers(reducers);
  return createStore(staticReducers);
}

export default createPool;
