let handler  = async (m, { conn, text }) => {
  let delay = time => new Promise(res => setTimeout(res, time))
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://telegra.ph/file/b2ae8a0e437e4252d5124.png'
       await delay(1500)
       await conn.send2Button(id, text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', fakes, { contextInfo: {
      externalAdReply :{
      showAdAttribution: true,
      }}})
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler