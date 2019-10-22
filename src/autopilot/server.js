const Server = require('@condenast/autopilot-server');

const routes = require('../server/routes');

module.exports = new Server({ routes });
