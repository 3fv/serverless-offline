export default {
  apiKey: {
    usage:
      'Defines the API key value to be used for endpoints marked as private. Defaults to a random hash.',
  },
  disableCookieValidation: {
    usage: 'Used to disable cookie-validation on hapi.js-server',
  },
  enforceSecureCookies: {
    usage: 'Enforce secure cookies',
  },
  hideStackTraces: {
    usage: 'Hide the stack trace on lambda failure. Default: false',
  },
  host: {
    shortcut: 'o',
    usage: 'The host name to listen on. Default: localhost',
  },
  httpsProtocol: {
    shortcut: 'H',
    usage:
      'To enable HTTPS, specify directory (relative to your cwd, typically your project dir) for both cert.pem and key.pem files.',
  },
  lambdaPort: {
    usage: 'Lambda http port to listen on. Default: 3002',
  },
  noAuth: {
    usage: 'Turns off all authorizers',
  },
  noTimeout: {
    shortcut: 't',
    usage: 'Disables the timeout feature.',
  },
  port: {
    shortcut: 'P',
    usage: 'Port to listen on. Default: 3000',
  },
  printOutput: {
    usage: 'Outputs your lambda response to the terminal.',
  },
  resourceRoutes: {
    usage: 'Turns on loading of your HTTP proxy settings from serverless.yml.',
  },
  useChildProcesses: {
    usage: 'Uses separate node processes for handlers',
  },
  useWorkerThreads: {
    usage:
      'Uses worker threads for handlers. Requires node.js v11.7.0 or higher',
  },
  websocketPort: {
    usage: 'Websocket port to listen on. Default: 3001',
  },
  useDocker: {
    usage: 'Uses docker for node/python/ruby',
  },
}
