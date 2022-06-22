import fs from 'fs'
let handler = async (m) => {
let stc = pick("https://telegra.ph/file/fa2bbea0f7de2575cf027.png")
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*NANI*', 'status@broadcast')
}
handler.customPrefix = /Cih/i
handler.command = new RegExp

export default handler
