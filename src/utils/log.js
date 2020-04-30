const db = require('../database/connection');

const log = async (ctx, response) => {
  let title;
  if (ctx.chat.type === 'private')
    title = ctx.chat.username;  
  else
    title = ctx.chat.title; 
  
  let type = ctx.chat.type;
  let command = ctx.contextState.command.text;

  await db('logs').insert({
    title,
    type,
    command,
    response,
  });
};

module.exports = log;