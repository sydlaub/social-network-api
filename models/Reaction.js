const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const formatDate = require("../utils/date");
const moment = require('moment')

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
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

module.exports = reactionSchema