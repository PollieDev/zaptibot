module.exports.run = async (client, message, args, config) => {

  return message.channel.send({
    embed: {
      color: 3447003,
      description: "test",
      footer: {
        text: "© Example"
      }
    }
  });

}