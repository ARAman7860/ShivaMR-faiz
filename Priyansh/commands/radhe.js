const fs = require("fs");
module.exports.config = {
  name: "radhe",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("krishna") ||
     react.includes("kanha") ||
     react.includes("RADHA") ||
react.includes("radhe")) {
    var msg = {
        body: `💝༄ᶦᶰᵈ᭄🔥⃝яα∂нє яα∂нє❥❥═══🙏 
        
        हमने प्रेम की कितनी बाधा 
        ________________________
        देखी, फिर भी कृष्णा के  __________________________
        
        साथ राधा देखी…!!
        
        ༄ᶦᶰᵈ᭄🔥⃝яα∂нє яα∂нє❤️❥❥═══🙏👈`,attachment: fs.createReadStream(__dirname + `/noprefix/radhe.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
