module.exports.config = {
 name: "Prem.babu",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID(module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(` ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ OWNER ▬▬▬▬▬▬▬▬  亹︻ཬ﴾歹꙳꙳꙳꙳꙳冬﴿ـــــــــــــــــــــ๏๏๏ 『٭』 ᏴᎡϴᏦᎬΝ ᎪᎪᎠᏆ 『٭』  亹︻ཬ﴾歹꙳꙳꙳꙳꙳冬﴿【Ձ】【ᴏ】【Ձ】【Ꮞ】ـــــــــــــــــــــــــ๏๏๏（៙益៙）  Isse Dubara Add Nhi Kar Paya 🥺 ${name} Group Mai :( `, event.threadID)
   } else api.sendMessage(`Bhag Ke Jaane Ka Nhi, ${name} Baby, Dekho Phir Se Add Kardiya Aapko`, event.threadID);
  })
 }
})) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "कोई एसे पिछवाड़े मैं लात मारता है?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐒𝐨𝐫𝐫𝐲 ✦pagla larka✦ 🙏 ${name} को दोबारा 𝐀𝐝𝐝 नही कर पाया 𝐆𝐫𝐨𝐮𝐩 में 🥺 लगता है इसने मुझे 𝐁𝐥𝐨𝐜𝐤 कर दिया 😕`, event.threadID)
   } else api.sendMessage(`भाग के जाने का नही ${name} बेबी ,🥀✦pagla.larka✦🌴 के 𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 के बिना कहीं नहीं जा सकते 😄 देखो फिर से 𝐀𝐝𝐝 कर दिया आपको 😌`, event.threadID);
  })
 }
}
