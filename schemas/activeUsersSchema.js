const { Schema, model } = require('mongoose');

const activeUsersSchema = new Schema({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    lastActivity: { type: Date, default: Date.now },
});

module.exports = model('ActiveUsers', activeUsersSchema);
