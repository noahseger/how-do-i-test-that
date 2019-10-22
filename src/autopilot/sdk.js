const copilotSDK = require('@condenast/copilot-js-sdk');
const { SDKConnector } = require('@condenast/autopilot-models');

const config = require('../config');

SDKConnector.setSDK(copilotSDK(config.sdk));
