//---------------------------------------------------------------//
//Caso queira poder modificar essa base, compre com o dark//
//Caso você seja comprador, tenha uma boa sorte :)
//digite .preços para ver os preços.
//--------------------------------------------------------------//
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const hx = require('hxz-api')
const { color, bgcolor } = require('./lib/color')
const gis = require('g-i-s');
const { spawn, execSync } = require("child_process")
const thiccysapi = require('textmaker-thiccy');
const { translate } = require('bing-translate-api');
const { msgFilter } = require('./lib/antispam')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const request = require('request')
const express = require('express')
const app = express()
const { EmojiAPI } = require("emoji-api");
const phoneNum = require('awesome-phonenumber')
const emoji = new EmojiAPI()
const encodeUrl = require('encodeurl')
const yts = require( 'yt-search')
const { antivirtexx } = require('./lib/antivirtex.js')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2gifFile } = require("./lib/gif.js")
const fs = require('fs')
const BitlyClient = require('bitly').BitlyClient;
const bitttly = new BitlyClient('8491cb04e746edd1f4b687e398c27e9654136472')
const anime = JSON.parse(fs.readFileSync('./database/anime.json'))
const autosticker = JSON.parse(fs.readFileSync('./configurações/autosticker.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/antiracismo.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const buscas = JSON.parse(fs.readFileSync('./database/buscas.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const brainly = require('brainly-scraper-v2')
const fetch = require('node-fetch')
const ig = require('insta-fetcher')
const imageToBase64 = require('image-to-base64')
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const { webp2mp4File} = require('./lib/webp2mp4')
const axios = require("axios");
const tiktod = require('tiktok-scraper')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/apikey.json'))
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const ffmpeg = require('fluent-ffmpeg')
const { getLevelingXp, getLevelingMsg, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingMsg, addLevelingLevel, addLevelingId }  = require('./database/level')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
const { name, yt, replySet } = JSON.parse(fs.readFileSync('./database/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./configurações/welkom.json'))
const antispam = JSON.parse(fs.readFileSync('./configurações/spam.json'))
const samih = JSON.parse(fs.readFileSync('./configurações/simi.json'))
const { createExif } = require('./lib/fetcher')

const BotName = 'mia bot'; 
prefixStatus = true;
targetpc = '5517991134416'
creator = 'darkk'
banChats = true //não mude
offline = false //não mude
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:5.3\n' //versão do bot
            + 'FN:Dark\n' // Nome do dono
            + 'ORG:Mia;\n' // Nome do bot
            + 'TEL;type=CELL;type=VOICE;waid=5517991134416:+55 1799113-4416\n' //numero do dono do bot
            + 'END:VCARD'
			const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
const ngonsol = JSON.parse(fs.readFileSync('./configurações/Miku.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol 
prefix = '.'

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}


/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./configurações/antifake.json'))
const { crtt } = "Jogo da velha"
const autoblock = JSON.parse(fs.readFileSync('./database/autoblock.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const tictactoe = JSON.parse(fs.readFileSync('./tictactoe/ttt/tictactoe.json'));
const { ttthelp } = require('./tictactoe/ttt/TTTconfig/ttthelp');
const { tttme } = require('./tictactoe/ttt/TTTconfig/tttme');
var tttset = require('./tictactoe/ttt/TTTconfig/tttset.json');
var esp = require('./tictactoe/ttt/TTTconfig/tttframe.json');
/*********** END LOAD ***********/

/********** FUNCTION ***************/
     



        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}
function tanggal(){
	myMonths = ["enero","febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","octubre","Noviembre","Deciembre"];
				myDays = ['domingo','lunes','martes','miércoles','jueves','Viernes','sábado'];
				var tgl = new Date();
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy;
				return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Va no whatsapp que você deseja colocar o bot, abra a opção whatsapp web, e escanea esse código.'))
	})

	fs.existsSync('./ConexãoMia.json') && client.loadAuthInfo('./ConexãoMia.json')
	client.on('connecting', () => {
		start('2', 'Conectando...')
	})
	client.on('open', () => {
		success('2', 'Conexão estabelecida.')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./ConexãoMia.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		
		client.on('group-participants-update', async (anu) => {
			if(antifake.includes(anu.jid)) {
		const mdata = await client.groupMetadata(anu.jid)
				if (anu.action == 'add'){
					num = anu.participants[0]
					if(!num.split('@')[0].startsWith(55)) {
						client.sendMessage(mdata.id, ' ⛹️⛹️numeros estrangeiros não sao Permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
						setTimeout(async function () {
							client.groupRemove(mdata.id, [num])
						}, 1000)
					}
				}
			}
			if (!welkom.includes(anu.jid)) return
			try {
				const mdata = await client.groupMetadata(anu.jid)
				console.log(anu)
				if (anu.action == 'add') {
					num = anu.participants[0]
					try {
						ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					teks = `Ola @${num.split('@')[0]}\nSeja bem vindo ao grupo *${mdata.subject}*\n\n~Mia Bot`
					let buff = await getBuffer(ppimg)
					client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
					num = anu.participants[0]
					try {
						ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					teks = `Tchau @${num.split('@')[0]}👋`
					let buff = await getBuffer(ppimg)
					client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
				const mdata = await client.groupMetadata(anu.jid)
				num = anu.participants[0]
				try {
						ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
				let buff = await getBuffer(ppimg)
				
				teks = `𝙉𝙊𝙑𝙊 𝘼𝘿𝙈𝙄𝙉
				
\`\`\`Nome:\`\`\` ${num.replace('@s.whatsapp.net', '')}
	
\`\`\`Usuario:\`\`\` @${num.split('@')[0]}
	
\`\`\`Hora: ${time}\`\`\` 
	
\`\`\`Grupo:\`\`\` ${mdata.subject}`
				client.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `dark`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "Pendente"}})
			} else if (anu.action == 'demote') {
				num = anu.participants[0]
				const mdata = await client.groupMetadata(anu.jid)
				num = anu.participants[0]
				try {
						ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
				let buff = await getBuffer(ppimg)
				teks = `𝙈𝙀𝙉𝙊𝙎 𝙐𝙈 𝘼𝘿𝙈𝙄𝙉
				
\`\`\`Nome:\`\`\` ${num.replace('@s.whatsapp.net', '')}
	
\`\`\`Usuario:\`\`\` @${num.split('@')[0]}
	
\`\`\`Hora: ${time}\`\`\`
	
\`\`\`Grupo:\`\`\` ${mdata.subject}`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `dark`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "Pendente"}})
			}
			} catch (e) {
				console.log('Error : %s', color(e, 'red'))
			}
	})

	client.on('CB:action,,call', async json => {
		const callerId = json[2][0][1].from;
		console.log("[BLOCK]-> Recebi uma ligação do "+ callerId)
			client.sendMessage(callerId, "vai ligar pra sua mãe fdp", MessageType.text)
			await sleep(4000)
			await client.blockUser(callerId, "add") // Block user
	})


	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isCmd = body.startsWith(prefix)
			// apis 
			const imgsmenu = await axios.get('https://pastebin.com/raw/dE5qHRtk')

			mess = {
					wait: 'Pera e amg, estou processando',
				success: '️❬ ♱ ❭ Prontinho',
				wrongFormat: 'Formato errado, tente novamente no menu',
				levelon: '❬ ♱ ❭ Leveling Ativado',
				leveloff: ' ❬ ♱ ❭  Leveling Desativado',
				levelnoton: '❬ ♱ ❭ *leveling não ativado*',
					levelnol: 'Falha aff, desculpa',
					error: {
				stick: 'Não consegui fazer a figurinha, desculpa mb',
				Iv: 'link invalido'
				},
				only: {
					group: '[♱] Este comando só pode ser usado em grupos ',
					premium: '[♱] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					mod: '[♱] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD 𝐼𝑆𝐴 𝐵𝑂𝑇*',
					benned: 'Você para a banda, por favor, contate o proprietário para abrir sua banda',
					ownerG: '[♱] Somente o dark pode usar esse comando',
					ownerB: '[♱] Somente o dark pode usar esse comando',
					userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de Dark. Registre-se para fazer amizade com o bot Dark por meio, \n\nCommand : ${prefix}daftar nama|idade\nExemplo : ${prefix}daftar Dark|17\n\n──「 Dark BOT 」──`,
					admin: '[♱] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: ' [♱] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}

			selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

			responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
	
			
			const listmsg = (from, title, desc, list) => { // Fixx
				let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
				return client.relayWAMessage(po, {waitForAck: true})
			}

			const fakevn = {
				key: { 
					 fromMe: false,
					 participant: `0@s.whatsapp.net`, ...(from ? 
				{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
						   },
				message: { 
				   "audioMessage": {
							"mimetype":"audio/ogg; codecs=opus",
							"seconds": "99999999999",
							"ptt": "true"
								   }
								 } 
								} 

								const sendFileFromUrl = async(link, type, options) => {
									hasil = await getBuffer(link)
									client.sendMessage(from, hasil, type, options).catch(e => {
									fetch(link).then((hasil) => {
									client.sendMessage(from, hasil, type, options).catch(e => {
									client.sendMessage(from, { url : link }, type, options).catch(e => {
									reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
									console.log(e)
						 })
						 })
						 })
						 })
						 }

						             //AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
		if (budy == commandsDB[i].pesan) {
		client.sendMessage(from, commandsDB[i].balasan, text, {quoted: mek})
		}
		}

			const botNumber = client.user.jid
			const ownerNumber = ["5517991134416@s.whatsapp.net","123@s.whatsapp.net"] // Don doo bot
			const ajudanteBot = ["5517991134416@s.whatsapp.net","553186220057@s.whatsapp.net","556699555387@s.whatsapp.net"] // Don doo bot
			const mod = [ownerNumber,"5517991134416@s.whatsapp.net"]//Moders do bot
			const adminbotnumber = ["5517991134416@s.whatsapp.net"]//Admins do bot
			const frendsowner = ["5517991134416@s.whatsapp.net"]//Amigos do bot
			const premium = ["5517991134416@s.whatsapp.net","556293267451@s.whatsapp.net"] //premiums do bot
			const compradores = ["5517991134416@s.whatsapp.net","0@s.whatsapp.net"] //usuario que comprou o bot
			const isGroup = from.endsWith('@g.us')
			const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const totalchat = await client.chats.all()
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isAuto = isGroup ? autosticker.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntiSpam = isGroup ? antispam.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isBuscas = isGroup ? buscas.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isAutoBlock = isGroup ? autoblock.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isAjudante = ajudanteBot.includes(sender)
			const isPremium = premium.includes(sender)
			const isCompradores = compradores.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}			
		     const costum = (pesan, tipe, target, target2) => {
			     client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }

        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./jpeg/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./jpeg/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./jpeg/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }

		const sendStickerFromUrl = async(to, url) => {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, './stik' + names + '.png', async function () {
				console.log('selesai');
				let filess = './stik' + names + '.png'
				let asw = './stik' + names + '.webp'
				exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					let media = fs.readFileSync(asw)
					client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
					fs.unlinkSync(filess)
					fs.unlinkSync(asw)
				});
			});
		}
	const sendMediaURL = async(to, url, text="", mids=[]) =>{
			if(mids.length > 0){
				text = normalizeMention(to, text, mids)
			}
			const fn = Date.now() / 10000;
			const filename = fn.toString()
			let mime = ""
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					mime = res.headers['content-type']
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, filename, async function () {
				console.log('done');
				let media = fs.readFileSync(filename)
				let type = mime.split("/")[0]+"Message"
				if(mime === "image/gif"){
					type = MessageType.video
					mime = Mimetype.gif
				}
				if(mime.split("/")[0] === "audio"){
					mime = Mimetype.mp4Audio
				}
				client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
				
				fs.unlinkSync(filename)
			});
		}   


        	colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
			const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
				console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'do', color(pushname))
				await sleep(5000)
				return reply('Para de spamar fdp ou vai levar block.')}

		// MENSAGEM PV (MOSTRA A MENSAGEM ENVIADA) novo ${argx} antigo ${args[0]} novo argss
		if (!isGroup && !isCmd) console.log(color('[MENSAGEM PV]->', 'red'), 'de', color(pushname, 'magenta'), 'às', color(time, 'yellow'), 'mensagem->', (budy))

		// MENSAGEM GP
		if (isGroup && !isCmd) console.log(color('[MENSAGEM GP]->', 'blue'), 'de', color(pushname, 'magenta'), 'às' ,color(time, 'yellow'), 'em', color(groupName), 'mensagem->', (budy))

		// COMANDOS NO PRIVADO
		if (!isGroup && isCmd) console.log(color('[CMD PV]->', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'de', color(`${pushname}`, 'magenta'))

		// COMANDOS EM GRUPOS
		if (isGroup && isCmd) console.log(color('[CMD]', 'aqua'), color(time, 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'de', color(`${pushname}`, 'magenta') , 'no grupo', color(groupName, 'aqua'))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }
			
			if (isCmd && !isOwner) msgFilter.addFilter(from)	
 	    
            function addMetadata(packname, author) {	// by Mhankbarbar
				if (!packname) packname = 'dark'; if (!author) author = 'dark';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./stickers/${name}.exif`)) return `./stickers/${name}.exif`
				const json = {	
					"dark": packname,
					"darkkk": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./stickers/${name}.exif`, buffer, (err) => {	
					return `./stickers/${name}.exif`	
				})	

			}
			switch(command) {
				//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttthelp':
	client.sendMessage(from, ttthelp(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('logos/sticker/botlogo.webp')}}}})					
			break
case 'ttt':				
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Bom jogo`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 3000) // 4 minutos
}
break	
case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break	
case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break	
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 Parabéns ${pushname} você ganhou 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 Parabéns ${pushname} você ganhou 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
client.sendMessage(from, `EMPATE ⚖\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `EMPATE ⚖`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
case 'sttstexto':
	if (!q) return reply('Digite o texto | .sttstexto exemplo | esse comando ira postar o texto digitado status do meu whatsapp.')
	client.sendMessage('status@broadcast', `${q}`, extendedText)
	reply(`Mensagem: "${q}" postada nos status com sucesso.`)
	break
	case 'sttsimg':
		if (isQuotedImage) {
		const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		cihcih = await client.downloadMediaMessage(swsw)
		client.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		bur = `Imagem postada nos status do meu whatsapp com sucesso, utilizando a legenda: ${q}`
		client.sendMessage(from, bur, text, { quoted: mek })
		} else {
		reply('Marque a foto com .sttsimg (sua_msg)!')
		}
		break
		case 'sttsvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await client.downloadMediaMessage(swsw)
            client.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Video postado nos status do meu whatsapp com sucesso, utilizando a legenda: ${q}`
            client.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('Marque o video com .sttsvideo (sua_msg)!')
            }
            break
			case 'fast':
				if (!isQuotedVideo) return reply('Marque um video com .fast | Esse comando ira deixar o video rapido.')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(`Err: ${err}`)
				buffer453 = fs.readFileSync(ran)
				client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
				fs.unlinkSync(ran)
				})
				break
		case 'slow':
				if (!isQuotedVideo) return reply('Marque um video com .slow | Esse comando ira deixar o video devagar.')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(`Err: ${err}`)
				buffer453 = fs.readFileSync(ran)
				client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
				fs.unlinkSync(ran)
				})
				break
				case 'ia':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Dificuldades no comando amg? | Use .ia 1 para ativar e .ia 0 para desativar.')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo inteligencia artificial está ativo')
						samih.push(from)
						fs.writeFileSync('./configurações/simi.json', JSON.stringify(samih))
					reply('Modo inteligencia artificial ativado nesse grupo. | obs: não use acentos nas mensagens. ')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./configurações/simi.json', JSON.stringify(samih))
					reply('Modo inteligencia artificial desativado nesse grupo.')
					} else {
					reply('Use .ia 1 para ativar e .ia 0 para desativar.')
					}
					break
					case 'lermais':
						if (args.length < 1) return reply('Use .lermais msg/msg | Nota: tem q usar o /')
						var kls = body.slice(9)
						var has = kls.split("/")[0];
						var kas = kls.split("/")[1];
						if (args.length < 1) return reply(mess.blank)
						client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
						break
				case 'wa.me':
					case 'wame':
					  client.updatePresence(from, Presence.composing) 
					  options = {
					  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
					  contextInfo: { mentionedJid: [sender] }
					  }
					  client.sendMessage(from, options, text, { quoted: mek } )
					  break
				case 'gp':
					if (!isGroupAdmins) return reply('Você não é admin do grupo, não poderei executar esse comando, desculpe.')
					if (!isBotGroupAdmins) return reply('Para eu executar essa função, eu preciso ter admin.')
					if (!isGroup) return
					if (args[0] === 'abrir') {
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					case 'abraço':
		if (!isGroup) return reply(mess.only.group)
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		pro = '.\n'
		for (let _ of mentioned) {
		pro += `@${_.split('@')[0]}\n`
		}
		yhb = `Que fofo... ${pushname} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
		abraço = fs.readFileSync('./logos/abraço.mp4') 
        client.sendMessage(from, abraço, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Conta Verificada", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./logos/sticker/botlogo.webp')} } }, caption: yhb })
        break

					case 'setdesc':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Você não é admin do grupo, não poderei executar esse comando, desculpe.')
if (!isBotGroupAdmins) return reply('Para eu executar essa função, eu preciso ter admin.')
if (!isGroup) return
client.groupUpdateDescription(from, `${args.join(" ")}`)
break

case 'setnome':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Você não é admin do grupo, não poderei executar esse comando, desculpe.')
if (!isBotGroupAdmins) return reply('Para eu executar essa função, eu preciso ter admin.')
if (!isGroup) return
client.groupUpdateSubject(from, `${args.join(" ")}`)
client.sendMessage(from, 'Nome do grupo alterado com sucesso.', text, {quoted:mek})
break
		case 'reverter':
				if (!isQuotedVideo) return reply('Marque um video com .reverter | Esse comando ira deixar o video de trás pra frente.')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(`Err: ${err}`)
				buffer453 = fs.readFileSync(ran)
				client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
				fs.unlinkSync(ran)
				})
				break
				case 'metadinha':
					if (!isGroup) return reply(mess.only.group) //funcionando somente em grupos
						membr = [] 
						const suamae111 = groupMembers 
						const suamae211 = groupMembers
						const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
						const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
						var shipted11 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`] //porcentagens de precisão
						const shipted111 = shipted11[Math.floor(Math.random() * shipted11.length)]
						teks = `*Hmmm....* Calculei com uma precisão de ${shipted111} que vcs dois podem usar metadinha\n\n@${teupai111.jid.split('@')[0]}\n@${teupai211.jid.split('@')[0]}` //texto
						const mee =[`https://clutamac.sirv.com/ProjetoMetadinhaRandom/PROJETO1E2.jpg?text.0.text=${teupai111.jid.split('@')[0]}&text.0.position.gravity=north&text.0.position.x=-25%25&text.0.position.y=16%25&text.0.size=35&text.0.color=ffffff&text.0.font.family=Roboto&text.0.font.weight=800&text.1.text=${teupai211.jid.split('@')[0]}&text.1.position.gravity=north&text.1.position.x=25%25&text.1.position.y=16%25&text.1.size=35&text.1.color=ffffff&text.1.font.family=Roboto&text.1.font.weight=800`,`https://clutamac.sirv.com/ProjetoMetadinhaRandom/PROJETO3E4.jpg?text.0.text=${teupai211.jid.split('@')[0]}&text.0.position.gravity=north&text.0.position.x=-26%25&text.0.position.y=17%25&text.0.size=38&text.0.color=ffffff&text.0.font.family=Roboto&text.0.font.weight=700&text.1.text=${teupai111.jid.split('@')[0]}&text.1.position.gravity=north&text.1.position.x=26%25&text.1.position.y=17%25&text.1.size=38&text.1.color=ffffff&text.1.font.family=Roboto&text.1.font.weight=700`, `https://clutamac.sirv.com/ProjetoMetadinhaRandom/PROJETO5E6.jpg?text.0.text=${teupai111.jid.split('@')[0]}&text.0.position.gravity=north&text.0.position.x=-26%25&text.0.position.y=17%25&text.0.size=36&text.0.color=ffffff&text.0.font.family=Roboto&text.0.font.weight=700&text.1.text=${teupai211.jid.split('@')[0]}&text.1.position.gravity=north&text.1.position.x=26%25&text.1.position.y=17%25&text.1.size=36&text.1.color=ffffff&text.1.font.family=Roboto&text.1.font.weight=700`] //apis da metadinha
						const taa = mee[Math.floor(Math.random() * mee.length)]
						buffer2 = await getBuffer(`${taa}`) //imagem da metadinha
						client.sendMessage(from, buffer2, image, {quoted: mek, caption: `eita`}) //enviando a imagem
						membr.push(teupai111.jid) //puxando membro aleatorio do gp
						membr.push(teupai211.jid) //puxando membro aleatorio do gp
						mentions(teks, membr, true) //configurando a marcação desse membro
					break
			case 'spam':
				if(!q) return reply(`${prefix}spam |Seu texto`)
				jids = `${targetpc}@s.whatsapp.net` // nomer target
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
				const responye = await client.sendMessage(jids, `${split[1]}`, MessageType.text, options)
				await client.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
				break
				case 'figu':
					case 'fig':
					case 'f':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
								reply(mess.error.stick)
								})
								.on('end', function () {
									console.log('Finish')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
						reply(mess.wait)
							await ffmpeg(`./${media}`)
								.inputFormat(media.split('.')[1])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
								})
								.on('end', function () {
									console.log('Finish')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ranw = getRandom('.webp')
							ranp = getRandom('.png')
						reply(mess.wait)
							keyrmbg = 'Your-ApiKey'
							await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
								fs.unlinkSync(media)
								let buffer = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffer, (err) => {
									if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
								})
								exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
									fs.unlinkSync(ranp)
									if (err) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
								})
							})
						/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.on('start', function (cmd) {
									console.log('Started :', cmd)
								})
								.on('error', function (err) {
									fs.unlinkSync(media)
									console.log('Error :', err)
								})
								.on('end', function () {
									console.log('Finish')
									fs.unlinkSync(media)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)*/
						} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que já foi enviada`)
						}
						break
							case 'setreply':
								case 'fakechat':
										if (!q) return reply(mess.wrongFormat)
										fake = q
										fakegroup(`Fakechat feito com o texto "${q}"`)
										break
							case 'anime':
								reply(mess.wait)
								fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
								.then(res => res.text())
								.then(body => {
								let tod = body.split("\n");
								let pjr = tod[Math.floor(Math.random() * tod.length)];
								imageToBase64(pjr)
								.then((response) => {
								media =  Buffer.from(response, 'base64');
								client.sendMessage(from,media,image,{quoted:mek,caption:'nih'})
								}
								)
								.catch((error) => {
								console.log(error); 
								}
								)
								});
								break
	case 'porno2':
		if (!isQuotedVideo) return reply('Marque um video com .fast | Esse comando ira deixar o video rapido.')
		const RandomHub = require('random-hub').RandomHub;
		const hub = new RandomHub();
		media = await client.downloadAndSaveMediaMessage(hub.getRandomHub())
		ran = getRandom('.mp4')
		fs.unlinkSync(media)
		if (err) return reply(`Err: ${err}`)
		buffer453 = fs.readFileSync(ran)
		client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		fs.unlinkSync(ran)
		break	

				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `│ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
				reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `│} https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
					case 'leveling':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Alguma dificuldade no comando amg?')
						if (args[0] === 'on') {
						if (isLevelingOn) return reply('*O comando de level já estava ativo*')
						_leveling.push(groupId)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
						 reply(mess.levelon)
						} else if (args[0] === 'off') {
						_leveling.splice(groupId, 1)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
						 reply(mess.leveloff)
						} else {
					reply(' Use .leveling on para ativar | Use .leveling off para desativar')
						}
						break
						case 'rankgay':
							if (!isGroup) return reply(mess.only.group)
							tuh = fs.readFileSync(`./jpeg/gay.jpeg`)
							jds = []
							const Z11 = groupMembers
							const U11 = groupMembers
							const T11 = groupMembers
							const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
							const G22 = U11[Math.floor(Math.random() * U11.length)]
							const H33 = T11[Math.floor(Math.random() * T11.length)]
							buffer = await getBuffer(`https://darkfxl.sirv.com/rankgay.png?text.0.text=${F11.jid.split('@')[0]}&text.0.position.gravity=center&text.0.position.x=15%25&text.0.size=24&text.0.color=000000&text.0.font.family=Roboto&text.0.outline.color=b7b7bf&text.0.outline.width=1&text.1.text=${G22.jid.split('@')[0]}&text.1.position.gravity=center&text.1.position.x=-26%25&text.1.size=24&text.1.color=000000&text.1.font.family=Roboto&text.1.outline.color=868181&text.1.outline.width=1&text.1.outline.blur=1&text.2.text=${H33.jid.split('@')[0]}&text.2.position.gravity=center&text.2.position.x=-8%25&text.2.position.y=21%25&text.2.size=24&text.2.color=000000&text.2.font.family=Roboto&text.2.outline.color=e6dfdf&text.2.outline.width=1&text.2.outline.blur=1`, {method: 'get'})
							D11 = `●❯────────────────❮●\n🏳️‍🌈 Rank dos mais gays do grupo\n\n@${F11.jid.split('@')[0]}\n@${G22.jid.split('@')[0]}\n@${H33.jid.split('@')[0]}\n\n●❯────────────────❮●`                  
							jds.push(F11.jid)
							jds.push(G22.jid)
							jds.push(H33.jid)
							client.sendMessage(from, buffer, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
						  break
						  case 'ia2':
							if (!q) return reply('Digite o a mensagem que quer que eu responda | Exemplo: .ia2 ola\n\n Essa versão é ilimitada porem esta em beta, as msgs do bot pode estar sem sentindo mas é pq eu fiz varias adaptações de modulos.')
							translate(`${q}`, null, 'es', true).then(res => { //traduzindo a mensagem para espanhol
								const tra = (res.translation)
							let chatbot = require("espchatbotapi") //modulo de chatbot em espanhol
							chatbot = new chatbot('publico') //criando um chatbot
							chatbot.obtener(`${tra}`).then(respuesta => { //enviando a tradução da msg pro chatbot
								console.log(respuesta) // msg original (espanhol)
								const res = (respuesta) //definindo a msg original
								translate(`${res}`, null, 'pt', true).then(res2 => { //traduzindo a resposta para portugues de portugal
									const tra2 = (res2.translation) //definindo a tradução da resposta do bot
									console.log("Mensagem traduzida para:", res2.translation) 
								reply(res2.translation) //enviando resposta
							}).catch(err => {
							  console.log(err)
							})
						}).catch(err => {
							console.error(err);
						  });
						}).catch(err => {
							console.error(err);
						  });
							  break

case 'memes':
if (args.length < 0) return reply('Cadê o texto, hum?')
reply(mess.wait)
anu = await getBuffer(`https://bot-apis.herokuapp.com/fillipe/meme`)
client.sendMessage( from, anu, image, {quoted:mek})
break
					case 'level':
						if (!isLevelingOn) return reply('O Sistema De Nível ainda não foi ativado.')
						if (!isGroup) return reply(mess.error.Gp)
						const userLevel = getLevelingLevel(sender)
						  const userXp = getLevelingXp(sender)
						  const userMsg = getLevelingMsg(sender) // pega as mensagens
						if (userLevel === undefined && userXp === undefined) return reply('O seu nível atual é 0, seria isso um erro do sistema ou você que é Ghost?')
						sem = sender.replace('@s.whatsapp.net','')
						resul = `┏━━❉ LEVEL ❉━━\n┣⊱ Nome : ${pushname}\n┣⊱ Seu Número: ${sem}\n┣⊱ Seu XP:  ${userXp}\n┣⊱ Seu Level: ${userLevel}\n┣⊱ Mensagens: ${userMsg}\n┗━━━━━━━━━━━━`
						client.sendMessage(from, resul, text, { quoted: mek})
						.catch(async (err) => {
						console.error(err)
						await reply(`Erro.`)
						})
					  breakk
				case 'limpar':
					if (!isOwner) return reply('Comando que apenas meu dono pode usar.')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
				reply('Excluido todos os chats com sucesso :)')
					break
					case 'imagem':
						if (args.length < 1) return reply('Que imagem deseja pesquisar? | Exemplo: .imagem naruto')
						const gimg = args.join('');
						reply(mess.wait)
						gis(gimg, async (error, result) => {
						n = result
						images = n[Math.floor(Math.random() * n.length)].url
						client.sendMessage(from,{url:images},image,{quoted:mek})
						});
						break
				case 'bc':
					if (!isOwner) return reply('so o dark pode usar esse comando fi')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ MENSAGEM DO DONO ]\n\n${body.slice(4)}`})
						}
					reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ MENSAGEM DO DONO ]\n\n${body.slice(4)}`)
						}
					reply('Transmissão enviada com sucesso')
					}
					break
        case 'promover':
			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
					case 'ftag':
						if (!isGroup) return reply(ind.groupo())
						if (!isGroupAdmins) return reply(ind.admin())
						if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
						encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
						value = args.join(" ")
						var group = await client.groupMetadata(from)
						var member = group['participants']
						var mem = []
						member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
						})
						var options = {
							contextInfo: { mentionedJid: mem },
							quoted: mek
						}
						ini_buffer = fs.readFileSync(file)
						client.sendMessage(from, ini_buffer, sticker, options)
						fs.unlinkSync(file)
						} else {
						reply(`*Marque uma figurinha com .ftag | Eu irei reenviar a figurinha, so que essa figurinha ira marcar todos do grupo.*`)
						}
						break
							case 'imgtourl': case 'tourl':
				var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				var jnckk = await  client.downloadAndSaveMediaMessage(encmedia)
				var imgbb = require('imgbb-uploader')
				imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
				.then(data => {
				var caps = `╭─「 IMG PARA URL 」\n│\n│• ID: ${data.id}\n│• Tipo: ${data.image.mime}\n│• Extensão: ${data.image.extension}\n│\n│• URL: ${data.display_url}\n╰──────────────────`
				ibb = fs.readFileSync(jnckk)
				client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
				})
				.catch(err => {
				throw err 
				})
				break
				case 'gay1': 
				var imgbb = require('imgbb-uploader')
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				 reply(mess.wait)
				 owgi = await  client.downloadAndSaveMediaMessage(ger)
				 anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
				teks = `${anu.display_url}`
				ranp = getRandom('.png')
				rano = getRandom('.webp')
				bur = `a`
				anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
				img = await getBuffer(anu1)
				client.sendMessage(from, img, image, {quoted: mek, caption: bur})
			
					 } else {
						 reply('Marque uma foto com .gay1')
				  }
					 break
					 case 'rip': 
					 var imgbb = require('imgbb-uploader')
					  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					  reply(mess.wait)
					  owgi = await  client.downloadAndSaveMediaMessage(ger)
					  anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					 teks = `${anu.display_url}`
					 ranp = getRandom('.png')
					 rano = getRandom('.webp')
					 bur = `Rip`
					 anu1 = `https://api-gdr2.herokuapp.com/api/rip?img=${teks}`
					 img = await getBuffer(anu1)
					 client.sendMessage(from, img, image, {quoted: mek, caption: bur})
				 
						  } else {
							  reply('Marque uma foto com .rip')
					   }
						  break
						  case 'delete': 
						  var imgbb = require('imgbb-uploader')
						   if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						   ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						   reply(mess.wait)
						   owgi = await  client.downloadAndSaveMediaMessage(ger)
						   anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
						  teks = `${anu.display_url}`
						  ranp = getRandom('.png')
						  rano = getRandom('.webp')
						  bur = `Deletado`
						  anu1 = `https://api-gdr2.herokuapp.com/api/deletarCanvas?img=${teks}`
						  img = await getBuffer(anu1)
						  client.sendMessage(from, img, image, {quoted: mek, caption: bur})
					  
							   } else {
								   reply('Marque uma foto com .delete')
							}
							   break
							   case 'beautiful': 
							   case 'btf': 
							   var imgbb = require('imgbb-uploader')
								if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
								ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
								reply(mess.wait)
								owgi = await  client.downloadAndSaveMediaMessage(ger)
								anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
							   teks = `${anu.display_url}`
							   ranp = getRandom('.png')
							   rano = getRandom('.webp')
							   bur = `Perfeição`
							   anu1 = `https://api-gdr2.herokuapp.com/api/canvas/beautiful?img=${teks}`
							   img = await getBuffer(anu1)
							   client.sendMessage(from, img, image, {quoted: mek, caption: bur})
						   
									} else {
										reply('Marque uma foto com .btf ou .beautiful')
								 }
									break
									case 'lixo': 
									var imgbb = require('imgbb-uploader')
									 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
									 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
									 reply(mess.wait)
									 owgi = await  client.downloadAndSaveMediaMessage(ger)
									 anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
									teks = `${anu.display_url}`
									ranp = getRandom('.png')
									rano = getRandom('.webp')
									bur = `ops`
									anu1 = `https://api-gdr2.herokuapp.com/api/trash?img=${teks}`
									img = await getBuffer(anu1)
									client.sendMessage(from, img, image, {quoted: mek, caption: bur})
								
										 } else {
											 reply('Marque uma foto com .lixo')
									  }
										 break
										 case 'cadeia': 
										 var imgbb = require('imgbb-uploader')
										  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
										  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
										  reply(mess.wait)
										  owgi = await  client.downloadAndSaveMediaMessage(ger)
										  anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										 teks = `${anu.display_url}`
										 ranp = getRandom('.png')
										 rano = getRandom('.webp')
										 bur = `Preso.`
										 anu1 = `https://api-gdr2.herokuapp.com/api/jail?img=${teks}`
										 img = await getBuffer(anu1)
										 client.sendMessage(from, img, image, {quoted: mek, caption: bur})
									 
											  } else {
												  reply('Marque uma foto com .cadeia')
										   }
											  break
				case 'wallpaper':
				api = await fetchJson(`https://api-gdr2.herokuapp.com/api/random/wallpaper`)
				img = await getBuffer(api.result.url)
				dark = `Espero que goste`
				client.sendMessage(from, img, image, {quoted: mek, caption: dark})
				break
				case 'ttp':
					if(!q) return reply('Digite o texto | Exemplo: .ttp marcos')
					api = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${q}&cor=0ff&fonte=5`)
					dark = `eita`
					client.sendMessage(from, api, image, {quoted: mek, caption: dark})
					break
case 'morte':
if(!q) return reply('Digite o seu nome, ou nome de outra pessoa | Exemplo: .morte marcos')
	api = await fetchJson(`https://api.agify.io/?name=${q}`)
	texto = `Pessoas com o nome ${q} costumam morrer com ${api.age} anos`
	morte = fs.readFileSync('./logos/morte.mp4') 
	client.sendMessage(from, morte, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Conta Verificada", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./logos/sticker/botlogo.webp')} } }, caption: texto })
	break
	case 'genero':
if(!q) return reply('Digite o seu nome, ou nome de outra pessoa | Exemplo: .genero marcos')
	api = await fetchJson(`https://api.genderize.io/?name=${q}`)
translate(`${api.gender}`, null, 'pt', true).then(res => {
	texto = `Pessoas com o nome ${q} geralmente são ${res.translation}'s`
	genero = fs.readFileSync('./logos/genero.mp4') 
	client.sendMessage(from, genero, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Conta Verificada", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./logos/sticker/botlogo.webp')} } }, caption: texto })
});
	break
	case 'traduzir':
		if(!q) return reply('Digite o texto a ser traduzido | Exemplo: .traduzir hello')
		translate(`${q}`, null, 'pt', true).then(res => {
			texto = `A tradução de ${q} para português é: ${res.translation}`
			reply(texto)
		});
			break

	
						case 'preços':
							const thumb = fs.readFileSync(`./jpeg/preços.jpeg`)
							preço = `Base editável do bot:
	
	1- Base editável sem atualizações: R$15,00
							
	2- Base editável com atualizações: R$20,00`
							client.sendMessage(from, thumb, image, {quoted: mek, caption: preço})
							break
				case 'rebaixar':
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
					case 'menu6':
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
					case 'iaa':
						if (args.length < 1) return reply('O que quer que eu responda? | use .iaa [sua msg]')
						teks = body.slice(5)
						anu = await simih(teks)
					reply(anu)
						break
				case 'adc':
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						reply('Para evitar banimento no número, daqui 5 segundos eu tento adicionar esse número ⚙️')
						await sleep(5000)
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
					reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
					case 'tempban10s':

						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
						mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						if (mentioned.length > 1) {
							teks = 'ban temporario\n'
							for (let _ of mentioned) {
								teks += `@${_.split('@')[0]}\n`
							}
							mentions(teks, mentioned, true)
							client.groupRemove(from, mentioned)
						} else {
							mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 10 segundos adiciono ele de volta`, mentioned, true)
							client.groupRemove(from, mentioned)
							await sleep(10000)
							client.groupAdd(from, mentioned)
							reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
						}
						break
						case 'tempban20s':
	
							if (!isGroup) return reply(mess.only.group)
							if (!isGroupAdmins) return reply(mess.only.admin)
							if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
							mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
							if (mentioned.length > 1) {
								teks = 'ban temporario\n'
								for (let _ of mentioned) {
									teks += `@${_.split('@')[0]}\n`
								}
								mentions(teks, mentioned, true)
								client.groupRemove(from, mentioned)
							} else {
								mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 20 segundos adiciono ele de volta`, mentioned, true)
								client.groupRemove(from, mentioned)
								await sleep(20000)
								client.groupAdd(from, mentioned)
								reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
							}
							break
							case 'playstore':
								if(!q) return reply('Digite um nome de um app/jogo da play store | Exemplo: .playstore free fire')
								let pinn = await hx.pinterest(q)
	                            let acc = pinn[Math.floor(Math.random() * pinn.length)]
	                            let dii = await getBuffer(acc)
								let play = await hx.playstore(q)
								let store = '❉─────────────────────❉\n'
								for (let i of play){
								store += `\n*「 _PLAY STORE_ 」*\n
- *Nome* : ${i.name}
- *Link* : ${i.link}\n
- *Desenvolvedor* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n\n❉─────────────────────❉`
								}
								client.sendMessage(from, dii, image, {quoted: mek, caption: store}) //by dark
								break
								case 'ins':
									try {
									if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
									if (!q) return reply('Envie um link de um grupo | Exemplo .ins https://chat.whatsapp.com...')
									cos = args[0]
									var net = cos.split('https://chat.whatsapp.com/')[1]
									if (!net) return reply('Certifique-se de que é link https://whatsapp.com/')
									jids = []
									let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await client.query({ 
									json: ["query", "invite",net],
									expect200:true })
									let par = `*Id* : ${id}

${owner ? `*Dono* : @${owner.split('@')[0]}` : '*Dono* : -'}

*Nome do grupo*: ${subject}

*Data de criação do Grupo*: ${formatDate(creation * 1000)}

*Número de membros*: ${size}

${desc ? `*Desc*: ${desc}`: '*Desc*: não há nenhum'}

*Id da desc* : ${descId}

${descOwner ? `*Desc modificada por*: @${descOwner.split('@')[0]}` : '*Desc modificada por* : -'}\n\n*Desc Modificada em* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Contatos salvos*\n`
								   for ( let y of participants) {
									 par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Sim' : 'Não'}\n`
									 jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
									 }
									 jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
									 jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
									 client.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
									 } catch {
									 reply('Envie um link de um grupo | Exemplo .ins https://chat.whatsapp.com...')
									 }
									 break
							case 'igstory': 
							if(!q) return reply('Digite um nome de usuario do insta | Exemplo: .igstory neymarjr')
							hx.igstory(q)
							.then(async result => {
							for(let i of result.medias){
								if(i.url.includes('mp4')){
									let link = await getBuffer(i.url)
									client.sendMessage(from,link,video,{quoted: mek,caption: `Story do instagram de ${q}, tipo de story: ${i.type}`})
								} else {
									let link = await getBuffer(i.url)
									client.sendMessage(from,link,image,{quoted: mek,caption: `Story do instagram de ${q}, tipo de story: ${i.type}`})                  
								}
							}
							});
							break
							case 'video':
								if (args.length === 0) return reply(`Use .video [nome da musica] | Esse comando ira mandar o video da musica pesquisada.`)
								var srch = args.join('')
								aramas = await yts(srch);
								aramat = aramas.all 
								var mulaikah = aramat[0].url                            
									  try {
										ytv(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/a'pi-create.php?url=${dl_link}`)
											.then(async (a) => {
											if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `「  *Youtube Video*  」」\n\n*Título* : ${title}\n\n*Formato*: MP3\n*Tamanho do arquivo*: ${filesizeF}\n\n*Link*: ${a.data}\n\n_Se o video for muito grande, irei mandar o video em link._`)
											const captions = `「  *Youtube Video*  」\n\n*🎶 Título*: ${title}\n\n✅ *Formato*: MP4\n\n 🤏 *Tamanho*: ${filesizeF}\n\n 📌 *Link*: ${a.data}\n\n_Enviando o video, aguarde._`
											sendMediaURL(from, thumb, captions)
											await sendMediaURL(from, dl_link).catch(() => reply('error'))
											})                
											})
											} catch (err) {
											reply(mess.error.api)
											}
									   break 
									   case 'sexo':
										if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
										mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
										ghost = mek.participant
										rate = body.slice(1)		
										var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
										  reply(`Carregando 💕`)
										  anu = await fetchJson(`https://pastebin.com/raw/jjE0Zucz`, {method: 'get'})
										  const thumb2 = (anu.video)
										  video = await getBuffer(anu.video)              
										amor = `${pushname} fez sexo com @${mentidn.split('@')[0]}`
										sendMediaURL(from, thumb2, amor)
										client.sendMessage(from, video, MessageType.video, {mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Conta Verificada", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./logos/sticker/botlogo.webp')} } }, caption: amor })
                                      break
							case 'tempban30s':
		
								if (!isGroup) return reply(mess.only.group)
								if (!isGroupAdmins) return reply(mess.only.admin)
								if (!isBotGroupAdmins) return reply(mess.only.Badmin)
								if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
								mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
								if (mentioned.length > 1) {
									teks = 'ban temporario\n'
									for (let _ of mentioned) {
										teks += `@${_.split('@')[0]}\n`
									}
									mentions(teks, mentioned, true)
									client.groupRemove(from, mentioned)
								} else {
									mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 30 segundos adiciono ele de volta`, mentioned, true)
									client.groupRemove(from, mentioned)
									await sleep(30000)
									client.groupAdd(from, mentioned)
									reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
								}
								break
								case 'tempban40s':
			
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(mess.only.Badmin)
									if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									if (mentioned.length > 1) {
										teks = 'ban temporario\n'
										for (let _ of mentioned) {
											teks += `@${_.split('@')[0]}\n`
										}
										mentions(teks, mentioned, true)
										client.groupRemove(from, mentioned)
									} else {
										mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 40 segundos adiciono ele de volta`, mentioned, true)
										client.groupRemove(from, mentioned)
										await sleep(40000)
										client.groupAdd(from, mentioned)
										reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
									}
									break
									case 'tempban1m':
				
										
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins) return reply(mess.only.admin)
										if (!isBotGroupAdmins) return reply(mess.only.Badmin)
										if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
										mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
										if (mentioned.length > 1) {
											teks = 'ban temporario\n'
											for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
											}
											mentions(teks, mentioned, true)
											client.groupRemove(from, mentioned)
										} else {
											mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 1 minuto adiciono ele de volta`, mentioned, true)
											client.groupRemove(from, mentioned)
											await sleep(60000)
											client.groupAdd(from, mentioned)
											reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
										}
										break
										case "image":
											case "gimage":
											case "googleimage":
											  if (args.length < 1) return reply("Digite o que deseja procurar | Exemplo: .gimage naruto");
											  reply(mess.wait);
											  teks = args.join(" ");
											  res = await gis(teks, google);
											  function google(error, result) {
												if (error) {
												  return reply(
													"_Erro ou procurar imagem._"
												  );
												} else {
												  gugIm = result;
												  random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
												  sendMediaURL(from, random);
												}
											  }
											  break;
										case 'tempban2m':
					
											
											if (!isGroup) return reply(mess.only.group)
											if (!isGroupAdmins) return reply(mess.only.admin)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
											mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
											if (mentioned.length > 1) {
												teks = 'ban temporario\n'
												for (let _ of mentioned) {
													teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												client.groupRemove(from, mentioned)
											} else {
												mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 2 minutos adiciono ele de volta`, mentioned, true)
												client.groupRemove(from, mentioned)
												await sleep(120000)
												client.groupAdd(from, mentioned)
												reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
											}
											break
											case 'setftbot':
												client.updatePresence(from, Presence.composing) 
											if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setftbot ou marque uma imagem ja enviada.`)
												if (!isOwner) return reply(mess.only.ownerB)
												enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
												media = await client.downloadAndSaveMediaMessage(enmedia)
												await client.updateProfilePicture(botNumber, media)
											reply('Obrigada pela minha nova foto de perfil')
												break
				case 'banir':
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
						case 'bemvindo':
							if (!isGroup) return reply(mess.only.group)
							if (!isGroupAdmins) return reply(mess.only.admin)
							if (args.length < 1) return reply('Alguma dificuldade no comando? | Use .bemvindo 1 para ativar e .bemvindo 0 para desativar.')
							if (Number(args[0]) === 1) {
								if (isWelkom) return reply('Já esta ativado.')
								welkom.push(from)
								fs.writeFileSync('./configurações/welkom.json', JSON.stringify(welkom))
							reply('Modo bem vindo ativado nesse grupo.')
							} else if (Number(args[0]) === 0) {
								welkom.splice(from, 1)
								fs.writeFileSync('./configurações/welkom.json', JSON.stringify(welkom))
							reply('Modo bem vindo desativado nesse grupo.')
							} else {
							reply('1 para ativar, 0 para desativar')
							}
											  break
											  case 'antifake':
												try {
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins) return reply(mess.only.admin)
												if (args.length < 1) return reply('Alguma dificuldade no comando? | Use .antifake 1 para ativar e .antifake 0 para desativar.')
												if (Number(args[0]) === 1) {
													if (isAntiFake) return reply('Ja esta ativo')
													antifake.push(from)
													fs.writeFileSync('./configurações/antifake.json', JSON.stringify(antifake))
													reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
												} else if (Number(args[0]) === 0) {
													antifake.splice(from, 1)
													fs.writeFileSync('./configurações/antifake.json', JSON.stringify(antifake))
													reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
												} else {
													reply('1 para ativar, 0 para desativar')
												}
												} catch {
													reply('Deu erro, tente novamente :/')
												}
											break
							case 'adms':
								if (!isGroup) return reply(mess.only.group)
								teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
								no = 0
								for (let admon of groupAdmins) {
									no += 1
									teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
								}
								mentions(teks, groupAdmins, true)
								break
								case 'sair':
									if (!isGroup) return reply(mess.only.group)
									if (isGroupAdmins || isOwner) {
										client.groupLeave(from)
									} else {
										reply(mess.only.admin)
									}
									break
									case 'ytsearch':
										if (args.length < 1) return reply('Por favor, insira uma consulta!')
										var srch = args.join('');
										try {
										var aramas = await yts(srch);
										   } catch {
										}
										aramat = aramas.all 
										var tbuff = await getBuffer(aramat[0].image)
										var ytresult = '';
										ytresult += '「 *PESQUISA NO YOUTUBE* 」'
										ytresult += '\n________________________\n\n'
										   aramas.all.map((video) => {
										ytresult += '❏ Título: ' + video.title + '\n'
										ytresult += '❏ Link: ' + video.url + '\n'
										ytresult += '❏ Duração: ' + video.timestamp + '\n'
										ytresult += '❏ Upado em: ' + video.ago + '\n________________________\n\n'
										});
										ytresult += '◩ *Mia*'
										await fakethumb(tbuff,ytresult)
										break
										break
										case 'porns':
											if (args.length < 1) return reply('Por favor, insira uma consulta!')
											const PornHub = require('pornhub.js')
											const pornhub = new PornHub()
											 
											pornhub.search('Video', 'tokyo hot').then(res => {
												res.data.forEach(item => {
										legenda = `「 *PESQUISA NO PORNHUB* 」 
										
Titulo: ${item.title}

Url: ${item.url}

Premium: ${item.premium}

Duração: ${item.duration}`
img = getBuffer(item.preview)
client.sendMessage(from, img, image, {quoted: mek, caption: legenda})
								})
							})
											break
										case 'setfotogp':
											if (!isGroup) return reply(mess.only.group)
											if (!isadminbot) return reply('Me de adm para eu executar esta funçao.')
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											media = await client.downloadAndSaveMediaMessage(mek)
											await client.updateProfilePicture (from, media)
											reply('Foto do grupo alterada com sucesso.')
											break
										case 'attp':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Cade o texto? | exemplo: .attp miabot`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				break
				case 'tomp4':
					if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
					ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					owgi = await client.downloadAndSaveMediaMessage(ger)
					webp2mp4File(owgi).then(res=>{
					sendMediaURL(from,res.result,'Figurinha transformada em video com sucesso')
					})
					}else {
					reply('Marque uma figurinha animada.')
					}
					fs.unlinkSync(owgi)
					break
					case 'toimg':
						if (!isQuotedSticker) return reply('Marque uma figurinha com .toimg')
						reply(mess.wait)
						encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.png')
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Não consegui fazer, desculpe :/')
						buffer = fs.readFileSync(ran)
						fakethumb(buffer,'Figurinha transformada em foto com sucesso')
						fs.unlinkSync(ran)
						})
						break
						case 'addrespon':{
							if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
							if (args.length < 1) return reply(`Use ${prefix}addresp msg|resposta\n\nExemplo: ${prefix}addrespon ola|oi, como vai?`)
							let input1 = body.slice(11)
							if (!input1.includes('|')) return reply(`Use ${prefix}addresp msg|resposta\n\nExemplo: ${prefix}addrespon oi|eae`)
							let input = input1.split("|")
							if (checkCommands(input[0], commandsDB) === true) return reply(`O comando já existe`)
							addCommands(input[0], input[1], sender, commandsDB) 
							reply(`Mensagem: ${input[0]}\nResposta: ${input[1]}\n\nResposta definida com sucesso`)
							}
						break
						case 'estourar':                 
						encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} -af equalizer=f=200:width_type=o:width=200:g=30 ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return reply('Error!')
							hah = fs.readFileSync(ran)
							client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
							fs.unlinkSync(ran)
						})
					break	
	case 'esquilo':
						encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await client.downloadAndSaveMediaMessage(encmedia)
						buz = getRandom('.mp3')
						exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=65100" ${buz}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return reply('*Ocorreu um erro, tente novamente.*')
							bah = fs.readFileSync(buz)
							client.sendMessage(from, bah, audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: mek})
							fs.unlinkSync(buz)
							})
						   break
						   case 'infogp':
							client.updatePresence(from, Presence.composing)
						if (!isGroup) return reply(mess.only.group)
							try {
							ppimg = await client.getProfilePicture(from)
						} catch {
							ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
						}
							let buf = await getBuffer(ppimg)
							teks = (args.length > 1) ? body.slice(8).trim() : ''
							teks += `*Nome do grupo:* ${groupName}\n\n*Descrição:* ${groupDesc}\n\n*Número de Administradores:* ${groupAdmins.length}\n\n*Número de membros:* ${groupMembers.length}`
							no = 0
							for (let admon of groupAdmins) {
								no += 1
								teks += `[${no.toString()}]`
							}
							client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
							break
						case 'listresp':{
							let txt = `Lista de respostas\n\nTotal: ${commandsDB.length}\n\n`
							for (let i = 0; i < commandsDB.length; i++){
							txt += `❏ Mensagem: ${commandsDB[i].pesan}\n`
							}
							reply(txt)
							}
						  break
						  case 'deresp':
							case 'delrespon':{
								if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
								  if (args.length < 1) return reply(`Use ${prefix}delresp msg\n\nExemplo: ${prefix}delresp ola`)
								if (!checkCommands(body.slice(11), commandsDB)) return reply(`A mensagem não está no banco de dados`)
								deleteCommands(body.slice(11), commandsDB)
								reply(`Resposta excluída com sucesso, não irei responder mais essa msg: ${body.slice(11)}`)
								}
							break
						case 'tomp3':
							if (!isQuotedVideo) return reply('Marque um video com .tomp3 | esse comando ira mandar apenas o audio do video.')
							reply(mess.wait)
							encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
							media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.mp4')
							exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(`Err: ${err}`)
							buffer453 = fs.readFileSync(ran)
							client.sendMessage(from, buffer453, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
							fs.unlinkSync(ran)
							})
							break
							case 'igstalk':
								if (!q) return reply('Digite o nome do instagram da pessoa que você deseja ver o perfil.')
								ig.fetchUser(`${args.join(' ')}`).then(Y => {
								console.log(`${args.join(' ')}`)
								ten = `${Y.profile_pic_url_hd}`
								teks = `*ID* : ${Y.profile_id}\n*Nome de usuário* : ${args.join('')}\n*Nome completo* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Seguidores* : ${Y.followers}\n*Seguindo* : ${Y.following}\n*Privado?* : ${Y.is_private}\n*Verificado* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
								sendMediaURL(from,ten,teks) 
								})      
								break    
								case 'gay':		
								if (args.length < 1) return reply('marque seus amigos!')
								rate = body.slice(1)
								const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
								const kl = ti[Math.floor(Math.random() * ti.length)]
								client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%', text, { quoted: mek })
								break
								case 'cep':
	if (args.length < 1) return reply('digite o cep que deseja buscar')
	cep = body.slice(4)
	hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
	if (hehe.error) return reply(hehe.error)
	ccg =
	`🔍 *CONSULTA DE CEP* 🔍

• Cep: ${hehe.cep}
• Estado: ${hehe.state}
• Cidade: ${hehe.city}
• Rua: ${hehe.street}
• Bairro: ${hehe.neighborhood}
• Metodo: ${hehe.service}

• Usuario: ${pushname}

🔛 BY: Mia`
	client.sendMessage(from, ccg, text, {quoted:mek})
	break
	case 'ip':
	if (args.length < 1) return reply('digite o ip que deseja buscar')
	ip = body.slice(4)
	hehe = await fetchJson(`http://ip-api.com/json/${ip}`)
	if (hehe.error) return reply(hehe.error)
	ccg =
	`🔍 *CONSULTA DE IP* 🔍

• País: ${hehe.country}
• Sigla: ${hehe.countryCode}
• Região: ${hehe.regionName}
• Sigla Região: ${hehe.regionName}
• Cidade: ${hehe.city}
• Cep: ${hehe.zip}
• Lat: ${hehe.lat}
• Lon: ${hehe.lon}
• Fuso Horário: ${hehe.timezone}
• Net: ${hehe.isp}

• Usuario: ${pushname}

🔛 BY: Mia`
	client.sendMessage(from, ccg, text, {quoted:mek})
	break
	case 'cnpj':
		if(!q) return reply('Digite o cnpj que deseja consultar | Exemplo: .cnpj 27865757000102')
		const receitaws = require('receitaws')
const opt = {
    timeout: 10000
}
const instance = receitaws(opt)
instance(`${q}`).then(v => {

reply(`_CONSULTA CNPJ_ 🏴‍☠️ \n\n*CNPJ:* ${v.data.cnpj}\n\n*SITUAÇÃO:* ${v.data.situacao}\n\n*NATUREZA JURIDICA:* ${v.data.natureza_juridica}\n\n*ABERTURA:* ${v.data.abertura}\n\n*FANTASIA:* ${v.data.fantasia}\n\n*ULTIMA ATT:* ${v.data.ultima_atualizacao}\n\n*STATUS:* ${v.data.status}\n\n*CAPITAL SOCIAL:* ${v.data.capital_social}\n\n*EMAIL:* ${v.data.email}\n\n🗺️ _Endereços:_\n\n*BAIRRO:* ${v.data.bairro}\n*RUA:* ${v.data.logradouro}\n*NUMERO:* ${v.data.numero}\n*CEP:* ${v.data.cep}\n*MUNICIPIO:* ${v.data.municipio}\n\n\n</> Codado por dark.`)
})
break
	case 'togif': 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(mess.wait)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
	case 'emoji':
			if (!q) return fakegroup('Cade o emoji? | exemplo: .emoji 😍')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
			case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
					case 'beijo':
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
	mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
	ghost = mek.participant
	rate = body.slice(1)		
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
	  reply(`Carregando 💕`)
	 data = fs.readFileSync('./dark/shit.js');
	 jsonData = JSON.parse(data);
	 randIndex = Math.floor(Math.random() * jsonData.length);
	 randKey = jsonData[randIndex];
	buffer = await getBuffer(randKey.result)               
	amor = `${pushname} deu um beijo😘 no(a) @${mentidn.split('@')[0]}`
	client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: amor, contextInfo: {mentionedJid: [mentidn]}})
	break
	case 'entrar':
		if (!isOwner) return reply('Somente o meu dono pode usar esse comando, sinto muito.')
		setTimeout( () => {
		client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
		suksez = `Ok chefe, ja entrei nesse grupo.`
		client.sendMessage(from, suksez, text,{quoted : mek, contextInfo: { forwardingScore: 100, isForwarded: true}})
		}, 20000) // 1000 = 1s,
		setTimeout( () => {
		reply('entrando no grupo, aguarde.')
		}, 0) // 1000 = 1s,
		break
		case 'plaquinha':
			if (args.length < 1) return reply(mess.blank)
			qes = args.join(' ')
			if (args.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
		reply('*Estou fazendo, se der erro tente novamente ✓*') //mensagem
			buffer = await getBuffer(`https://clutamac.sirv.com/plaquinha.png?text.0.text=${qes}&text.0.position.gravity=center&text.0.position.x=-16%25&text.0.position.y=8%25&text.0.size=24&text.0.color=fcfcfc&text.0.opacity=55&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=600`) //api 
			client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Plaquinha fake feita.*'}) //case feita por darkkkkYT
			break
		case 'khalifa':
	reply('estou carregando a foto, so um momento pf')
  anu = await fetchJson(`https://darkapis.herokuapp.com/api/mia.php`, {method: 'get'})
  ri = JSON.parse(JSON.stringify(anu));
  ze =  ri[Math.floor(Math.random() * ri.length)];
  nye = await getBuffer(ze)
  client.sendMessage(from, nye, image, { caption: 'Inveja...', quoted: mek })
  await limitAdd(sender) 	
  break
		case 'dog':  

		reply('Enviando a imagem, por favor aguarde.')
		anu = await fetchJson(`https://some-random-api.ml/img/dog`)
		anu1 = await getBuffer(anu.link)
		client.sendMessage(from, anu1, image, {caption: `Parece com você`, quoted: mek})
		break
case 'gato':  

		reply('Enviando a imagem, por favor aguarde.')
		anu = await fetchJson(`https://some-random-api.ml/img/cat`)
		anu1 = await getBuffer(anu.link)
		client.sendMessage(from, anu1, image, {caption: `Parece com você`, quoted: mek})
		break
case 'panda':  

		reply('Enviando a imagem, por favor aguarde.')
		anu = await fetchJson(`https://some-random-api.ml/img/panda`)
		anu1 = await getBuffer(anu.link)
		client.sendMessage(from, anu1, image, {caption: `Parece com você`, quoted: mek})
		break
		case 'gato2':
			reply('estou carregando a foto, so um momento pf')
			  anu = await fetchJson(`https://darkapis.herokuapp.com/api/gato.php`, {method: 'get'})
			  ri = JSON.parse(JSON.stringify(anu));
			  ze =  ri[Math.floor(Math.random() * ri.length)];
			  nye = await getBuffer(ze)
			  client.sendMessage(from, nye, image, { caption: 'fof', quoted: mek })
			  await limitAdd(sender) 	
			  break
case 'panda2':  

		reply('Enviando a imagem, por favor aguarde.')
		anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
		anu1 = await getBuffer(anu.link)
		client.sendMessage(from, anu1, image, {caption: `Parece com você`, quoted: mek})
		break
		case 'ytsearch2':
			   var gh = body.slice(12)
				if (!q.endsWith("-doc")){
				anu = await yts(`${q}`).catch(e => {
				reply('_Error!_')
				})
				reply('Pesquisando...')
				let thumbInfo = `「  *Youtube Pesquisa*  」

◉ *Título :* ${anu.all[0].title}

◉ *Visualizações :* ${anu.all[0].views}

◉ *Duração :* ${anu.all[0].timestamp}

◉ *ID :* ${anu.all[0].videoId}

Se quiser o audio desse video digite .play ${anu.all[0].title}`
				infoplay = await getBuffer(anu.all[0].image)
				client.sendMessage(from, infoplay, image, {quoted: mek, caption: thumbInfo})
				}
				break
				case 'grupos':
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Lista de grupos que mia esta:\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total: ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case "play":
						if (args.length === 0)
						  return reply(
							`Use o comando assim: .play nome_da_msc`
						  );
						  reply("Fazendo o download da musica/audio aguarde...")
						var srch = args.join("");
						aramas = await yts(srch);
						aramat = aramas.all;
						var mulaikah = aramat[0].url;
						try {
						  yta(mulaikah).then((res) => {
							const { dl_link, thumb, title, filesizeF, filesize } = res;
							axios
							  .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
							  .then(async (a) => {
								if (Number(filesize) >= 100000)
								  return sendMediaURL(
									from,
									thumb,
									`「  *Youtube Play*  」\n\n🎶 *Título*: ${title}\n🎧 *Formato*: MP3\n🎬 *Tamanho*  ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
								  );
								const captions = `「  *Youtube Play*  」\n\n🎶 *Título*: ${title}\n\n🎧 *Formato*: MP3\n\n🎬 *Tamanho*: ${filesizeF}\n\n✅ *Link*: ${a.data}\n\n_*Estou enviando o audio aguarde*_`;
								sendMediaURL(from, thumb, captions);
								await sendMediaURL(from, dl_link).catch(() => reply("error"));
							  });
						  });
						} catch (err) {
						  reply(mess.error.api);
						}
						break;
					case 'play2':
						reply(mess.wait)
						if (args.length == 0) return reply(`Use o comando assim: .play2 nome_da_msc`)
						query = args.join(" ")
						anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${query}&apikey=apivinz`, {method: 'get'})
					   if (anu.error) return reply(anu.error)
					   infom = await yts(`${q}`).catch(e => {
						reply('_Erro, desculpe_')
						})
						let thumbInfo2 = `「  *Youtube Play*  」
				
🎶  *Título :* ${infom.all[0].title}
				
📢 *Visualizações :* ${infom.all[0].views}
				
🕓 *Duração :* ${infom.all[0].timestamp}
				
✅ *ID :* ${infom.all[0].videoId}
				
_*Estou enviando o audio aguarde*_`
						infoplay = await getBuffer(infom.all[0].image)
						ytaudio = await getBuffer(anu.result.url_audio)
						client.sendMessage(from, infoplay, image, {quoted: mek, caption: thumbInfo2})
						await sleep(1000)
						client.sendMessage(from, ytaudio, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
						break 
case 'pássaro':  

		reply('Enviando a imagem, por favor aguarde.')
		anu = await fetchJson(`https://some-random-api.ml/img/birb`)
		anu1 = await getBuffer(anu.link)
		client.sendMessage(from, anu1, image, {caption: `Parece com você`, quoted: mek})
		break
		case 'dono':
			memein = await kagApi.memeindo()
			buffer = fs.readFileSync(`jpeg/thumb.jpeg`)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Informações do dono*\n\n*Criador*: 𝐷𝐴𝑅𝐾⃖ ☔\n\n*YouTube*: https://bit.ly/2RMrLR4\n\n*WhatsApp*: wa.me/+5517991134416\n\n*GitHub*: https://github.com/DarkViPs\n\n*Data de criação*: 11/08/2021'})
			break
case 'coala':  

		reply('Enviando a imagem, por favor aguarde.')
		anu = await fetchJson(`https://some-random-api.ml/img/koala`)
		anu1 = await getBuffer(anu.link)
		client.sendMessage(from, anu1, image, {caption: `Parece com você`, quoted: mek})
		break
		case 'adquirir':
			texto = `Quer utilizar a mia bot?
			
Use esses comandos no seu termux:

> git clone https://github.com/DarkViPs/MiaBot
> cd Mia-Bot
> npm i
> bash install.sh


*Iniciar*

Após usar esses comandos, use o comando abaixo espere carregar e escaneie o QR Code.

> npm start

Você pode usar a inicialização do PM2 - recomendada mas usa muito a sua bateria e sua RAM - em vez do npm start com:

> npm i pm2 -g
> pm2 start index.js
> pm2 monit

(O npm i pm2 -g somente precisa ser executado uma única vez.)

Espere que goste :)`
reply(texto)
			break
			case 'hidetag':
				   if (!isGroup) return reply(ind.groupo())
				   if (!isGroupAdmins) return reply(ind.admin())
				   var value = body.slice(9)
				   var group = await client.groupMetadata(from)
				   var member = group['participants']
				   var mem = []
				   member.map( async adm => {
				   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				   })
				   var options = {
				   text: value,
				   contextInfo: { mentionedJid: mem },
				   quoted: mek
				   }
				   client.sendMessage(from, options, text)
				   break
				   case "term":
					if (!q) return reply('digite o comando');
					exec(q, (err, stdout) => {
					  if (err) return reply(`Mia Bot:~ ${err}`);
					  if (stdout) {
						reply(stdout);
					  }
					});
					break;
					case "q":
						if (!m.quoted) return reply("responder à mensagem!");
						let qse = client.serializeM(await m.getQuotedObj());
						if (!qse.quoted)
						  return reply("a mensagem que você respondeu não contém uma resposta!");
						await qse.quoted.copyNForward(m.chat, true);
						break;
						case 'ytmp3':
							if (args.length < 1) return reply('Mande o link | Exemplo: .ytmp3 https://youtu.be...')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							teks = args.join(' ')
							res = await y2mateA(teks)
							sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
							break
		case 'info':
			anu = await fetchJson(`https://pastebin.com/raw/cB9bLack`, {method: 'get'})
ri4 = JSON.parse(JSON.stringify(anu));
ze4 =  ri4[Math.floor(Math.random() * ri4.length)];
anuk = await getBuffer(ze4)
dark = `Mia bot`
client.sendMessage(from, anuk, image, {quoted: mek, caption: dark})
break
case 'pinterest':
	if(!q) return reply('O que deseja procurar? | digite .pinterest [pesquisa]')
	let pin = await hx.pinterest(q)
	let ac = pin[Math.floor(Math.random() * pin.length)]
	let di = await getBuffer(ac)
	await client.sendMessage(from,di,image,{quoted: mek})
	break
	case 'demonio':

		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			fs.unlinkSync(ran)
		})
	break
	case 'grave':                 

		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			fs.unlinkSync(ran)
		})
	break
	case 'linkwa':
		if(!q) return reply('Qual tipo de grupo você está procurando?')
		hx.linkwa(q)
		.then(result => {
		let res = '*「 _WHATS LINKS_ 」*\n\n'
		for (let i of result) {
		res += `*Nome*: *${i.nama}\n*Link*: ${i.link}\n\n`
		}
		reply(res)
		});
		break
		case 'rankcaco':
try{
if(!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
d = []
teks = '🐒 Rank dos mamacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank dos mais lindos \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranknazista':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '💂‍♂️Rank dos mais nazistas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostoso':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '😏Rank dos mais gostosos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgado':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🐃Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '"🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//textpro cases montadas por dark.
case 'light':	
if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .light dark')
reply('Aguarde, estou renderizando a imagem.')
thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
[`${q}`], ["Phaticusthiccy"]
).then(async (data) => { 
	try { 
let di = await getBuffer(data)
await client.sendMessage(from,di,image,{quoted: mek})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break
case 'papel':	
if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .papel dark')
reply('Aguarde, estou renderizando a imagem.')
thiccysapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
    `${q}`
    ).then(async (data) => { 
	try { 
let di = await getBuffer(data)
await client.sendMessage(from,di,image,{quoted: mek})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break
case 'doce':	
if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .doce dark')
reply('Aguarde, estou renderizando a imagem.')
thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
    `${q}`
    ).then(async (data) => { 
	try { 
let di = await getBuffer(data)
await client.sendMessage(from,di,image,{quoted: mek})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break
case 'glitch':	
if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .glitch dark')
reply('Aguarde, estou renderizando a imagem.')
thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
    `${q}`
    ).then(async (data) => { 
	try { 
let di = await getBuffer(data)
await client.sendMessage(from,di,image,{quoted: mek})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break
                      case 'devil':	
                      if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .devil dark')
                      reply('Aguarde, estou renderizando a imagem.')
					  thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
					  `${q}`
					  ).then(async (data) => { 
	                     try { 
		               let di = await getBuffer(data)
		               await client.sendMessage(from,di,image,{quoted: mek})
		               console.log(data)
	                      } catch(err) { 
	                 	console.log(err)
	                      } 
                           });
                        break
						case 'magma':	
						if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .magma dark')
						reply('Aguarde, estou renderizando a imagem.')
						api = await fetchJson(`http://localhost:8080/api/textpro/magma/${q}`, {method: 'get'})
						let magma = await getBuffer(`${api.resultado}`)
						await client.sendMessage(from,magma,image,{quoted: mek})
						  break
						case 'tec':	
						if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .tec dark')
						reply('Aguarde, estou renderizando a imagem.')
						thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
						`${q}`
						).then(async (data) => { 
						   try { 
						 let di = await getBuffer(data)
						 await client.sendMessage(from,di,image,{quoted: mek})
						 console.log(data)
							} catch(err) { 
						   console.log(err)
							} 
							 });
						  break
						  case 'luz':	
						  if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .luz dark')
						  reply('Aguarde, estou renderizando a imagem.')
						  thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
						  `${q}`
						  ).then(async (data) => { 
							 try { 
						   let di = await getBuffer(data)
						   await client.sendMessage(from,di,image,{quoted: mek})
						   console.log(data)
							  } catch(err) { 
							 console.log(err)
							  } 
							   });
							break
							case 'galaxia':	
							if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .galaxia dark')
							reply('Aguarde, estou renderizando a imagem.')
							thiccysapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
							`${q}`
							).then(async (data) => { 
							   try { 
							 let di = await getBuffer(data)
							 await client.sendMessage(from,di,image,{quoted: mek})
							 console.log(data)
								} catch(err) { 
							   console.log(err)
								} 
								 });
							  break
							  case 'neon':	
							  if(!q) return reply('Digite o texto que vai aparecer na imagem | Exemplo: .neon dark')
							  reply('Aguarde, estou renderizando a imagem.')
							  thiccysapi.textpro("https://textpro.me/neon-light-text-effect-online-882.html",
							  `${q}`
							  ).then(async (data) => { 
								 try { 
							   let di = await getBuffer(data)
							   await client.sendMessage(from,di,image,{quoted: mek})
							   console.log(data)
								  } catch(err) { 
								 console.log(err)
								  } 
								   });
								break
								//Efeitos - foto
								case 'grey':
									var Jimp = require('jimp');
									if (isQuotedImage) {
									const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									cihcih = await client.downloadMediaMessage(swsw)
									Jimp.read(cihcih, (err, lenna) => {
										if (err) throw err;
										lenna
										  .resize(256, 256) // redimensionar
										  .quality(60) // definir qualidade JPEG
										  .greyscale() // definir escala de cinza
										  .write('grey_effect.png'); // salvar
									  });
									  await sleep(3000)
									  const media = fs.readFileSync(`./grey_effect.png`)
									bur = `Imagem preto e branco feita`
									client.sendMessage(from, media, image, {quoted: mek, caption: bur}) //fim menu
									} else {
									reply('Marque a foto com .grey | Esse comando deixara a foto preto e branca.')
									}
									break
case 'gato3':
	const r = require('anime-pictures');
	r.random().then(result => {
	  console.log(result);
	buffer = getBuffer(`${result.anime_image}`)
	legenda = `fof dms`
reply(`${result}`)
});
	break
								
						case 'help':
							case 'menu':
								case 'mia':
									case 'miabot':
const timee = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const timestamp2 = speed();
const latensi2 = speed() - timestamp2
const userLevel2 = getLevelingLevel(sender)
const userXp2 = getLevelingXp(sender)
anu = await fetchJson(`https://pastebin.com/raw/cB9bLack`, {method: 'get'})
ri = JSON.parse(JSON.stringify(anu));
ze =  ri[Math.floor(Math.random() * ri.length)];
anuk = await getBuffer(ze)
uptime = process.uptime()
const sy =['Não viva somente do que faz sentido','Livre-se dos bajuladores','Não julgue sem conhecer','Não grite alto por sua felicidade','Não se leve o pensamento dos outros','As vzs vale a pena ser frio(a)','Bobeira é não viver a realidade','Sem conselhos, dsclp','A verdade alivia mais do que machuca','Cuidado com oq fala','Se não puder se destacar pelo talento, vença pelo esforço']
const dreps = sy[Math.floor(Math.random() * sy.length)]
const dups =['4','9','8','7','2','5','1','0 que azar','3','6','10']
const skr = dups[Math.floor(Math.random() * dups.length)]
console.log("[MENU]-> Acabei de mandar o menu para o "+ pushname)
							dark = `╭────────────────
│ Olá - "${pushname}"!
│ XP → ${userXp2}
│ Level → ${userLevel2}
│ Meu Ping → -${latensi2.toFixed(4)} s
│ Hora → ${timee}
╰────────────────	
	        			        
╭──〘 Comandos 〙──
│
│
│  「Info」
│
│ 1 *.dono*
│ 2 *.adquirir*
│
│  「Figurinhas」
│
│ 3 *.figu*
│ 4 *.f*
│ 5 *.fig*
│ 6 *.emoji* [emoji]
│ 7 *.attp* [texto]
│
│  「Tempban」
│
│ 8 *.tempban10s*
│ 9 *.tempban20s*
│ 10 *.tempban30s*
│ 11 *.tempban40s*
│ 12 *.tempban1m*
│ 13 *.tempban2m*
│
│  「Ações」
│
│ 14 *.banir* @
│ 15 *.promover* @
│ 16 *.rebaixar* @
│ 17 *.setftbot* 
│ 18 *.marcar* 
│ 19 *.marcar2* 
│ 20 *.marcar3* 
│ 21 *.limpar* 
│ 22 *.adc* 559999...
│ 23 *.sair* 
│ 24 *.entrar* [link gp]
│ 25 *.leveling* [on/off]
│ 26 *.level*
│ 27 *.hidetag* [msg]
│ 28 *.ftag* 
│
│  「Comandos de gp」
│
│ 29 *.gp* [abrir/fechar]
│ 30 *.setnome* [nome]
│ 31 *.setdesc* [texto]
│ 32 *.bemvindo* 1/0
│ 33 *.antifake* 1/0
│ 34 *.adms* 
│ 35 *.infogp* 
│ 36 *.setfotogp* 
│
│  「Imagens」
│
│ 37 *.anime* 
│ 38 *.dog* 
│ 39 *.coala* 
│ 40 *.gato* 
│ 41 *.gato2* 
│ 42 *.pássaro* 
│ 43 *.panda* 
│ 44 *.panda2* 
│ 45 *.khalifa* 
│
│  「Postar Status」
│
│ 46 *.sttstexto* 
│ 47 *.sttsimg*
│ 48 *.sttsvideo* 
│
│  「Jogo da velha」
│
│ 49 *.ttthelp* [aprender jg]
│ 50 *.tttme* 
│ 51 *.tttrank* 
│ 52 *.ttt normal* 
│
│  「Transformar」
│
│ 53 *.tomp4*
│ 54 *.toimg*
│ 55 *.tomp3*
│ 56 *.togif* 
│
│  「Consultar」
│
│ 57 *.igstalk*
│ 58 *.igstory*
│ 59 *.ins* 
│ 60 *.cep*
│ 61 *.ip*
│ 62 *.cnpj*
│
│  「Entretenimento」
│
│ 63 *.gay* @
│ 64 *.casal* 
│ 65 *.beijo* @
│ 66 *.rankgay* 
│ 67 *.wame* 
│ 68 *.metadinha* 
│ 69 *.lermais* 
│ 70 *.rankfeios* 
│ 71 *.rankcaco* 
│ 72 *.ranklindos* 
│ 73 *.ranknazista* 
│ 74 *.rankgostoso* 
│ 75 *.rankgado* 
│ 76 *.abraço*  @
│
│  「Musica」
│
│ 77 *.play* [nome msc]
│ 78 *.play2* [nome msc]
│ 79 *.video* [nome msc]
│ 80 *.ytsearch* 
│ 81 *.ytsearch2* 
│ 82 *.ytmp3* [link msc]
│
│  「Pesquisa」
│
│ 83 *.pinterest*
│ 84 *.playstore*
│ 85 *.imagem*
│ 86 *.gimage*
│
│  「Efeitos - Videos」
│
│ 87 *.reverter*
│ 88 *.fast*
│ 89 *.slow*
│
│  「Efeitos - Audios
│
│ 90 *.estourar*
│ 91 *.esquilo*
│ 92 *.grave*
│ 93 *.demonio*
│
│  「Efeitos - Fotos
│
│ 94 *.grey*
│ 95 *.gay1*
│ 96 *.rip*
│ 97 *.delete*
│ 98 *.btf*
│ 99 *.lixo*
│ 100 *.cadeia*
│
│  「AutoResponder」
│
│ 101 *.addrespon*
│ 102 *.listresp*
│ 103 *.delrespon*
│
│  「Ia」
│
│ 104 *.ia* [1/0]
│ 105 *.iaa* [msg]
│ 106 *.ia2* [msg] (Versão beta)
│
│  「Texto na imagem」
│
│ 107 *.plaquinha* [nome]
│ 108 *.light* [texto]
│ 108 *.devil* [texto]
│ 109 *.tec* [texto]
│ 110 *.luz* [texto]
│ 111 *.galaxia* [texto]
│ 112 *.neon* [texto]
│ 113 *.papel* [texto]
│ 114 *.doce* [texto]
│ 115 *.vela* [texto]
│ 116 *.magma* [texto]
│
│  「Interativo」
│
│ 117 *.morte* [nome]
│ 118 *.genero* [nome]
│ 119 *.traduzir* [texto]
│ 120 *.ttp* [texto]
│
│
╰────────────────
╭────────────────
│ Dono - "Dark"
│ Yt → Darkkk
│ Wpp → 17991134416
│ Info → .dono
│
╰──〘 Mia 🌵 〙──`
sayo = fs.readFileSync('./logos/menu.mp4') 
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Conta Verificada", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./logos/sticker/botlogo.webp')} } }, caption: dark })
break
					default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
					reply(muehe)
					} else {
						console.log(color('[MSG]','red'), 'COMANDO NÃO DETECTADO, IREI IGNORAR ESSA MSG', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
//apis internas by: dark
app.get('/api/textpro/magma/:feed', async (req, res) => {
thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
`${req.params.feed}`
).then(async (data) => { 
	  try { 
 console.log(data)
 res.send(`{"resultado":"${data}","by":"Dark"}`)
	 } catch(err) { 
console.log(err)
} 
  });
   })
app.listen(8080) //abrindo o server na porta 8080
starts()
