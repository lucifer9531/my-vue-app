import { Pool } from '../typings';

function createAction(actionList: any[], pool: Pool): Map<string, unknown> {
  const actions = new Map<string, unknown>();
  actionList?.forEach((v) => {
    const { action, name } = v;
    const actionHandler = installAction(action, pool, name);
    Object.keys(actionHandler).forEach((key) => {
      actions.set(`${name}/${key}`, action[key]);
    });
  });
  return actions;
}

export function installAction(action: Record<string, Function>, pool: Pool, moduleName: string) {
  Object.keys(action).map((key) => {
    action[key] = registerAction(pool, action[key], moduleName);
  });
  return action;
}

function registerAction(pool: Pool, actionFn: Function, moduleName: string) {
  return function wrappedActionHandler(...param: any) {
    return actionFn(
      {
        state: (() => {
          pool.getState();
          const state = pool.getState();
          return state[moduleName];
        })(),
        commit: pool.dispatch,
      },
      ...param,
    );
  };
}

export default createAction;
