# SysInfoBot

A Telegram bot to check the system information

## Initial
```
git clone https://github.com/douglastofoli/sysinfo-bot.git
cd sysinfo-bot
npm install
```

## Configuration
```
cp .env.example .env
```
Edit the environment variables in the .env file

If you not want to log the commands, remove the call function log() in all files in the commands folder.
The environment variables for database on .env not necessary in this case.

### Run bot ou your system
```
node src/index.js
```

## Next steps

[x] Basic functions
[ ] Detail ping function
