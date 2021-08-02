module.exports = {
    name: 'instagram',
    description: "sends the instagram link",
    execute(message, args){
        message.channel.send('https://instagram.com/imp.transport.vtc?utm_medium=copy_link');
    }
}