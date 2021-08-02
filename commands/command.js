module.exports = {
    name: 'command',
    description: 'Embeds',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#EA8621')
        .setTitle('Convoy | August 9, 2021')
        .setDescription('Have you noticed we havent done a convoy in a while? If so lets get those engines going.')
        .setThumbnail('https://imgur.com/0IP7rzQ.png')
        .addFields(
            {name: '⏰ Time:', value: '14:00'},
            {name: '🚚 Starting Location:', value: 'Glasgow'},
            {name:'🚚 End Location:', value: 'Dover'},
            {name:'🌐 Server:', value: 'Simulation 1'}
        )
        .setImage('https://imgur.com/eW4HyJ0.png')
        .setTimestamp()
        .setFooter('Posted By Jack.B');
        

        message.channel.send(newEmbed)
    }
}