const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    userThoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
    ],
    userFriends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
{
toJSON: { virtuals: true },
id: false
}
);

userSchema.virtual('friendCount').get(function() {
    return this.userFriends.length
});

const User = model("User", userSchema);

module.exports = User;

