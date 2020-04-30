const os = require('os');
const log = require('../utils/log');

module.exports = bot => {
  bot.command('release', (ctx) => {
    let response = os.release();
    ctx.reply('Kernel release: ' + response);
    
    log(ctx, response);
  });
};