module.exports.run = async (client, message, args, config) => {

  // Handle all messages in recursive

  return message.channel.send({
    embed: {
      color: '#FFFB0A',
      author: {
        name: 'Zaptibot',
        icon_url: '../img/zaptimist_logo.jpg'
      },
      title: "This is an embed",
      url: "http://google.com",
      description: "This is a test embed to showcase what they look like and what they can do.",
      fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Example"
      }
    }
  });


}