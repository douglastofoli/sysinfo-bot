const os = require('os');
const log = require('../utils/log');

module.exports = bot => {
  bot.command('hostname', (ctx) => {
    let response = os.hostname();
    ctx.reply('Hostname: ' + response);
    
    log(ctx, response);
  });
};