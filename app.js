const { Client } = require('klasa');
const { token } = require('./token.json');
const { config } = require('./config.json');

new Client({
    fetchAllMembers: false,
    prefix: "+",
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login(token);