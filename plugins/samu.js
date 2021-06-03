let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /S\  /m\  /3\  /3\  /0\ 
<___><___><___><___><___>

COMO CREAR ESTE BOT:

luego

𝙈𝙮 𝘾𝙝𝙖𝙣𝙚𝙡:

https://youtube.com/channel/UCnJsyIe2XksWO3jVHGXYMhw
                                        
`.trim()) 
handler.help = ['darkze']
handler.tags = ['info']
handler.command = /^darkze$/i

module.exports = handler
