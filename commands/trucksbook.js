module.exports = {
    name: 'trucksbook',
    description: "sends the trucksbook link",
    execute(message, args){
        message.channel.send('https://trucksbook.eu/company/120830');
    }
}