import * as yow from 'yow-yo';
import * as chalk from 'chalk';

(async () => {
  const o = chalk.green;
  const r = chalk.red;

  function logo() {
    return `
${o(' __   _______        __     ____ _     ___ ')}
${o('   / / _        / /    / ___| |   |_ _|')}
${o('   V / | |   / / /____| |   | |    | | ')}
${r('   | || |_| | V  V /_____| |___| |___ | | ')}
${r('   |_| ___/  _/_/       ____|_____|___| ')}
    `;
  }

  const packageJson = require('../package.json');
  const bsConfig = {
    'auto-update': true,
    'check-updates': true,
    'cli-bin': 'yow',
    description: 'Yow cli generator',
    'logo-ascii': logo(),
    name: packageJson.name,
    registry: 'npm',
    timeout: 2000,
    version: packageJson.version,
    'welcome-message': 'Welcome to YOW-cli',
    'node-version': '>=6.0.0',
  };
  yow.baseConfig(bsConfig);
})();
