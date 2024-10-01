import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {

//------------------------------------------------

global.FakeChannel = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '', newsletterName: "『✯  』", serverMessageId: -1 }
}}, { quoted: m }

//-----------------------------------------------

global.Fakechannel = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '', newsletterName: "『✯  』", serverMessageId: -1 }, forwardingScore: 999, externalAdReply: { title: gt, body: wm, thumbnailUrl: fantasyImg.getRandom(), sourceUrl: md, mediaType: 1, renderLargerThumbnail: false
}}}, { quoted: m }

//--------------------------------------------------
var canal = [
{ link: canalofc, id: "", name: "『✯  』" }]
var channelsLPD = canal

global.channelWa = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelsLPD.id, serverMessageId: '', newsletterName: channelsLPD.name }, externalAdReply: { title: wm, body: gt, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: fantasyImg.getRandom(), thumbnail: imagen1, sourceUrl: canalofc }}}, { quoted: m }

}
export default handler