class SharedModule {
  static shared: any;

  static listener: Array<Function> = [];

  static initShared(shared: any) {
    SharedModule.shared = shared;
  }

  /**
   * 重载 shared
   */
  static overloadShared(shared: any) {
    SharedModule.shared = shared;
    shared.init((stateName: string) => {
      SharedModule.listener.forEach((fn) => {
        fn(stateName);
      });
    });
  }

  static subscribe(fn: any) {
    if (!fn) throw Error('缺少参数');
    if (fn.length) {
      SharedModule.listener.push(...fn);
    } else {
      SharedModule.listener.push(fn);
    }
  }

  /**
   * 获取 shared 实例
   */
  static getShared() {
    return SharedModule.shared;
  }
}

export default SharedModule;
