const Telegraf = require('telegraf');
const commandParts = require('telegraf-command-parts');

const dotenv = require('dotenv');

dotenv.config();
const { BOT_TOKEN } = process.env;

const bot = new Telegraf(BOT_TOKEN);

bot.use(commandParts());

require('./commands/index')(bot);

bot.launch();