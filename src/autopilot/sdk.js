let currentSDK;

const SDKConnector = {
  setSDK(sdk) {
    currentSDK = sdk;
  }
};

function copilotSDK(sdkConfig) {
  this.sdkConfig = sdkConfig;
}

const config = require("../config");

SDKConnector.setSDK(copilotSDK(config.sdk));
