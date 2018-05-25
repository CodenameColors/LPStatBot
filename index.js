const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready!');
});

client.login('NDQ5Mzk5NTk4Nzc2MTg4OTI4.DekNPQ.rO0jQabZF7kbbjaaXXZpDTDw_Xw');

client.on('message', message => {
  console.log(message.content);
  if(message.content.includes('!LP Vote')){
    //message.channel.send('So you wanna vote ehhh?');
    console.log('vote detected');
    message.channel.send(message.content.replace('!LP Vote', ''));
    
  }
});
