import BaseShared from './base';
import { flatModule } from './modules';

class Shared {
  static shared: BaseShared;

  constructor(option = {}) {
    const { pool, actions } = flatModule(option);
    Shared.shared = new BaseShared(pool, actions);
  }

  public getShared(): BaseShared {
    return Shared.shared;
  }
}

export default Shared;
