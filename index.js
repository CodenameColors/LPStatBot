//the main portion of the LPStatBot

//TODO: Make the config.js file
//TODO: Make multiple command files to clean up my code.


/*
----------------features DONE---------------------
***Can Read messages
***Can Send messages
***Can query the HLTB Database!
***If the vote exceeds the threshold, send a message to let the user know.

----------------IN PROGRESS-----------------------
***Lets users vote on new LPs.
***One vote per person. Tell them if they already voted as well.
***Send the votes to a PSQL DB to save it all
***on the first of the month clear the DB records to allow new votes
***Users can query the standings with a command
***Users can change their vote only if they already voted. update DB record
***Scape the web to see if the game asked is under the time threshold
***Help Command
***Maybe DM the user who asks what thier current vote is.
***Add a reaction to show the bot Parsed the message
*** i want a small picture in the standings... maybe...
*/

//discord API
const Discord = require('discord.js');
const client = new Discord.Client();

//HLTB API
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

client.on('ready', () => {
  console.log('Ready!');
});

client.login('NDQ5Mzk5NTk4Nzc2MTg4OTI4.DekNPQ.rO0jQabZF7kbbjaaXXZpDTDw_Xw');

//runs everytime a message is found
client.on('message', message => {
  //someone wants to vote for a new LP
  if(message.content.includes('!LP Vote')){
    message.channel.send(message.content.replace('!LP Vote', ''));
    hltbService.search('asdfghhj').then( (result) => {
      if(result.length == 0){
        console.log('Sorry this game isn\'t in the databse...');
      }
      console.log(result)
    });     
  }  
});
