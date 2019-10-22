class Server {
  constructor(config) {
    this.config = config;
  }
}

const routes = require("../server/routes");

module.exports = new Server({ routes });
