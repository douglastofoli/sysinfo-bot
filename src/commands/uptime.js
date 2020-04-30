const os = require('os');
const moment = require('moment');
const log = require('../utils/log');

module.exports = bot => {
  bot.command('uptime', (ctx) => {
    let uptime = os.uptime();
    let response = 'Uptime: ' + moment.utc(uptime*1000).format('DD HH:mm:ss');
    ctx.reply(response);
    
    log(ctx, response);
  });
};