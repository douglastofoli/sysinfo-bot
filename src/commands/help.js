const { message } = require('../config/helpMessage');
const log = require('../utils/log');

module.exports = bot => {
  bot.help((ctx) => {
    let response = '';
    message.forEach(element => {
      response += element;
    });
    ctx.reply(response);
    console.log(ctx.from.is_bot);
    // log(ctx, "null");
  });
};