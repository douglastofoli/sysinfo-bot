const si = require('systeminformation');
const log = require('../utils/log');

module.exports = bot => {
  bot.command('cputemp', async (ctx) => {
    let response = await si.cpuTemperature();
    ctx.reply('Temperatura CPU: ' + response.main + 'ºC');
   
    log(ctx, response);
  });
};