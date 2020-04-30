const ping = require('ping');
const log = require('../utils/log');

module.exports = bot => {
  bot.command('ping', async (ctx) => {
    var host = ctx.state.command.args;
    await ping.sys.probe(host, function (isAlive) {
      if (isAlive) {
        var msg = 'Host ' + host + ' is alive!';
      } else {
        var msg = 'Host ' + host + ' is dead.'; 
      }
      ctx.reply(msg);
      
      log(ctx, msg);
    });
  });
};