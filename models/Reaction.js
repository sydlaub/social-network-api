const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formatDate = require("../utils/helpers");

const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        get: timestamp => formatDate(timestamp)
    }
},
    {
        toJSON: {
            getters: true
        },
    }
);

module.exports = reactionSchema