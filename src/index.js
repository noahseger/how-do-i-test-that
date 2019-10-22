const server = require('./autopilot/server');

server.start().done(({ options }) => {
  const { host, port } = options;
  console.log(`Running server at ${host}:${port}`);
});
