client.on("message", message => {
  if(message.content.startsWith("1embed")) {
    message.channel.send( message.member + '`1`').then( (m) =>{
              m.edit('Please Send Channel ID')
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var channel = m1.content;
                 
                  message.channel.send(message.member + '`2`').then( (m) =>{
                      m.edit('**The Embed Title**')
                      
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var title = m2.content;
                         
                          message.channel.send( message.member + '`3`').then( (m) =>{
                            m.edit('**The Embed Description**' )
                            setTimeout(() => {
                             
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var des = m3.content;
                                      
                                            
                      message.channel.send('**Data is being sent**').then( (mtime)=>{
                         let embed = new Discord.RichEmbed()
      .setTitle(title)
.setDescription(des)
.setThumbnail(`https://cdn.discordapp.com/attachments/757231024655695964/757236302184710175/a_4f03840bd3374ec735a9a9c7051c9e2c.gif`)
.setColor("#fa2a2a")
.setFooter(`جمعية موكي الخيرية`,`https://cdn.discordapp.com/attachments/757231024655695964/757236302184710175/a_4f03840bd3374ec735a9a9c7051c9e2c.gif`)

                          
                        client.channels.get(channel).send(embed).catch( () => {message.channel.send('err')})

                  })
                })
                })
              })
            })
          })
        })
        })
              
  }
}
          ) 
