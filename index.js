// NPM imports
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });

// My Imports
const { token, prefix, version, mainColor } = require('./config/settings');
const { commandsEmbed } = require('./settings/embedCmd')


// When the bot is ready
client.once('ready', () => {
  let time = new Date();
  console.log(`Logged in as ${client.user.tag} on ${time}!`);

  // Start MP3 downloader

  // Start Memes soundboard

  // Start youtube listener

});

client.on('message', async message => {

  // If bot then gtfo
  if (message.author.bot) return;

  // If the bot is tagged by an user
  if (message.content.includes(client.user.toString())) {

    // commandsEmbed returns the embed json format + picture in settings/embedCmd.js
    // message.channel.send(await commandsEmbed())

    // Test send center shit
    var center = require('center-align');

    message.channel.send(`\`${center('foo', 12)}\``)

  }

  if (message.content.startsWith(prefix)){
    // First check on prefix
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    let commandFile = require('./commands/' + cmd + '.js');
    let config = {
      prefix: prefix,
      mainColor: mainColor,
      version: version
    }

    return commandFile.run(client, message, args, config);
  }

})


client.login(token);



// client.on('ready', () => {
//   let time = new Date();
//   console.log(`Logged in as ${client.user.tag} on ${time}!`);
// });

// client.on('message', message => {
//   if (message.content === '!play') {
//     // Note that this will only work if the message was sent in a guild
//     // and the author is actually in a voice channel.
//     // You might want to check for all that stuff first
//     const channel = message.member.voice.channel;

//     channel.join()
//       .then(connection => console.log('Connected!'))
//       .catch(console.error);
//   }
// });


client.on('message', msg => {
  msg.member.voice.channel.join().then(connection => {
    console.log('play');
    setInterval(() => {
      connection.play('./sounds/oi.mp3');
    }, 500);

    // while(true){

    // }

    // dispatcher.on('end', () => {
    //   console.log(dispatcher.time);
    //   msg.member.voice.channel.leave()
    // });

    // dispatcher.on('error', e => {
    //   console.log('e');
    //   msg.member.voiceChannel.leave()
    // });


  });
});

// client.login(token);