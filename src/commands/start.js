const { message } = require('../config/startMessage');
const log = require('../utils/log');

module.exports = bot => {
  bot.start((ctx) => {
    ctx.reply(message);
    
    log(ctx, "null");
  });
}
