import createPool from './pool';
import createAction from './action';

function flatModule(option: any) {
  const { modules } = option;
  const reducers: any = {};
  const actionList: Array<any> = [];
  Object.values(modules).forEach((obj: any) => {
    const { reducer, action, name } = obj;
    reducers[name] = reducer;
    actionList.push({
      name,
      action,
    });
  });

  const pool = createPool(reducers);
  const actions = createAction(actionList, pool);

  return {
    pool,
    actions,
  };
}

export { flatModule };
