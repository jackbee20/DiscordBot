module.exports = {
    name: 'facebook',
    description: "sends the facebook link",
    execute(message, args){
        message.channel.send('https://www.facebook.com/imptransvtc');
    }
}