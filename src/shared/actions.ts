import { warn } from '/@/utils/log';

function emptyAction() {
  warn('Current execute action is empty!');
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args) {
    // @ts-ignore
    return this.actions.onGlobalStateChange(...args);
  }
  /**
   * 映射
   */
  setGlobalState(...args) {
    // @ts-ignore
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;
