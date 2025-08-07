const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hnT2VqaWk2MGVsTWt6OGViYnBsaG1mbHFWOUVFeS9wY09RWFU3dmQwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGdMUy9KSzByQ0FnNFJMc1VPbEZTTndGMGxzZHVBWGgxRUNvOThlNmZocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmE5L251VWU3eWZpSHpNdHdqb2l2UzgzZWp0U3A5TTZPVURMQ0pScm1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UG0zSkc4NDc5TnNrTEJtcXZxMXh1Zk83L3BkYUx4SERYSGpyaGxhZVJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCa0x6WENiZVRnd2dCbGFUS3pzL2FMUVFRY0UvRVp2bmVYT3BNTTZiRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMyWG94VHl0WWZkeFU0UmxzNmNFZjgyQ25uUnNYYkpVVm0zUkFtTDNnd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENUQmFsV0VFTGM0Uit6Wng4YUYwZ21oZWR3N29xZ0FhRUM2bzBiVjNuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGJhbTlrYTZ4b1FaZ0hrc1VDbmNKMGxOMFhYdUJsOEQ0TXhQVkUyd04waz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCbmdQZExvcVBmdVhRM3hoam9lUHJiSURDYUNkZ0FJWEQ0ZG1WV1F4SzhaWkNScWwzQTIvV3p5R1I4Tmc5YW0xQ21HVzNXQkpQbVlubGFVVHhGZkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiIyRTR1ZGlFTVlMUzF2RWtWOFIwK1BHcDQ0dkdQU0lFVVQxanl2bVBKd2VZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI1OUpWRFpBWSIsIm1lIjp7ImlkIjoiMjc4MTgyMzIyNjk6NzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmFsbGFzIiwibGlkIjoiMTc0NTkxMDkxNjc1MzI4Ojc4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStkODBFUW5zblF4QVlZQ2lBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoianRoV2c2ZFo1c09XYk0xYk1QRTdmQmVWWXpqdUNsbC9FQ0Q4U28wS2pobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWjFNR055ZUtlT2Q4RzRVOFY1eS9RWHA1ejlMRjNBdGN3RzRGZUk0VFhHTFhZOXdtWWtZR3JzM0xMS0RISVZNZGI1UWFvLzFUR05HVm9PUDgvTWVSQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InlDRWV4UFhQWW5Gc0hLK0JZSGpxZWFWdm1YOHhVNUNiVnM2NnZtbjRESHBxWDZpZDdGVHlXcW9UTmhyUFN2OWpmNWVMZE14THh2YVQvWDdseW41SEJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc4MTgyMzIyNjk6NzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTdZVm9PbldlYkRsbXpOV3pEeE8zd1hsV000N2dwWmZ4QWcvRXFOQ280YSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NTM5MTcwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWlHIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Ballas 𝗑ᴾᴿᴼ 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/wzdxwt.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Ballas 𝗑ᴾᴿᴼ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Ballas 𝗑ᴾᴿᴼ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "27767494368",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*♤𝙱𝚘𝚝 𝗑ᴾᴿᴼ♧*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ballas 𝗑ᴾᴿᴼ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "27767494368",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
