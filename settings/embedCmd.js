const fs = require('fs');
const fsPromises = fs.promises;

async function listDir() {
  try {
    return await fsPromises.readdir('commands/');
  } catch (err) {
    console.error('Error occured while reading directory!', err);
    return [];
  }
}

module.exports = {

  commandsEmbed: async function(){

    let embedMsg = {
      embed: {
        "thumbnail": {
          "url": "attachment://blaaspijpjager.jpg"
        },
        "color": 0xF96221,
        fields: [{
          name: 'Commands',
          value: `asdf`,
          inline: true
        }],
        footer: {
          text: "© made by Zaptimist"
        }
      },
      files: [{
        attachment: './img/blaaspijpjager.jpg',
        name: 'blaaspijpjager.jpg'
      }]
    };

    let listCommand = await listDir();
    let myString = ``;

    listCommand = await listCommand.map(x => {
      myString = myString + `>${x.replace('.js', '')}\n`;
    })

    embedMsg.embed.fields[0].value = myString;

    return embedMsg;
  }
}

