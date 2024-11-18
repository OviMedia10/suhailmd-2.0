const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_42_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDk0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvbjNtcUh2bVhLTGN3Y3NlQW4xaEVYRlc4N2JxVysrSW9YazhSRmR6MmRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyWGJSNm5pQ1JUbUVLYkFRS0UzSC1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMjhlYjVkLWIyYmEtNDA4Mi1iMWIxLTUyYzdiOTZiYjkzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxMjUsXG4gICAgICAxNjQsXG4gICAgICAxNTQsXG4gICAgICAyNDYsXG4gICAgICAxNDIsXG4gICAgICA2MixcbiAgICAgIDg4LFxuICAgICAgMTI2LFxuICAgICAgMTMzLFxuICAgICAgMjM3LFxuICAgICAgMTY3LFxuICAgICAgMjQ4LFxuICAgICAgMTMsXG4gICAgICAyNDUsXG4gICAgICA1MCxcbiAgICAgIDE1NixcbiAgICAgIDIyNCxcbiAgICAgIDkzLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICA4MyxcbiAgICAgIDc1LFxuICAgICAgMTUyLFxuICAgICAgMjI0LFxuICAgICAgNzMsXG4gICAgICAyNDEsXG4gICAgICAxNDUsXG4gICAgICAxNDEsXG4gICAgICAxNTcsXG4gICAgICAxMTksXG4gICAgICAyMjQsXG4gICAgICAyNDgsXG4gICAgICAxNzksXG4gICAgICAyMzUsXG4gICAgICAxNDcsXG4gICAgICAxOTAsXG4gICAgICAxMzIsXG4gICAgICAxNzIsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0Q2R0hQODZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzQyMzQ4NTk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2MTg0MTgwMjU2ODI5OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08ybnE1OEdFSUt4N3JrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiclIrM1JPQy9lL0dOclBpQUVQYWxqTFNxS054Vzh0TS9XUXJaeXc1WHJrWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6WFNsS245MmtrOFg3a1FXT2xQdjVveTV6eHNJdkVzRjFLVWExVndEOHpudVNnY2RIeVBvdHJXZGhpZ2xydE5YbWFHMjNPTFFUcGlCNEs0Z29zVUdBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5MG8wbzhmZHE4Y3AzRDNJL2VqakFXVlBiblpkUmVvbG5DQk94YmZVakt2QnB0UVJrUHJiVVBNc2V3TjRSRmxqUzZjNEU4Qkg1bDlyTUZZaEZXdlpEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM0MjM0ODU5OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTk1ODkxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxpZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGlmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNzFBQlhqZ2F0L1ROZ2g3dHdnN3I3RlBWZUdOTW9XSkc2d2lOdHBRdHk3UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjc2MzM0MDYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxOTU4OTAzMDg4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
