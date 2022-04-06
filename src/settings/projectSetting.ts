import type { ProjectConfig } from '/#/config';
import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // Use error-handler-plugin
  useErrorHandle: false,
};

export default setting;
