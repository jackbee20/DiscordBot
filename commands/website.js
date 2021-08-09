module.exports = {
    name: 'website',
    description: "sends the website link",
    execute(message, args){
        message.channel.send('https://imptransportvtc.wixsite.com/my-site');
    }
}