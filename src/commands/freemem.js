const os = require('os');
const log = require('../utils/log');

module.exports = bot => {
  bot.command('freemem', (ctx) => {
    let total = os.totalmem();
    let free = os.freemem();
    let response = 'Total: ' + total + '\n' + 'Free: ' + free;
    ctx.reply(response);
    
    log(ctx, response);
  });
};