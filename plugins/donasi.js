let handler = async m => m.reply(`
╭─〘 DarkZE 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 (De samu) [paypal.me/samu330]
│ • Pero con que te suscribas a mi canal basta:)
│ https://youtube.com/channel/UCnJsyIe2XksWO3jVHGXYMhw
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
