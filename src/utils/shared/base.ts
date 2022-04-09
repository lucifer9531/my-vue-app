import type { Store } from 'redux';
import { update } from './utils';

class BaseShared {
  static pool: Store;

  static actions = new Map();

  static cacheState = null;

  constructor(pool: Store, action = new Map()) {
    BaseShared.pool = pool;
    BaseShared.actions = action;
  }

  public init(listener: Function): void {
    BaseShared.cacheState = BaseShared.pool.getState();
    BaseShared.pool.subscribe(() => {
      const newState = BaseShared.pool.getState();
      const stateName = update(BaseShared.cacheState, newState);
      BaseShared.cacheState = newState;
      return listener(stateName);
    });
  }

  public dispatch(target: string, param?: any) {
    return BaseShared.actions.get(target)(param ? param : null);
  }
}

export default BaseShared;
