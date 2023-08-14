const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String, 
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: usableDate,
        }
    },
    {
        toJSON: {
            getters: true,
        },
    },
);

function usableDate(createdAt) {
    //if (getDate(now) === getDate(createdAt)) {
    //    return createdAt.toTimeString();
    //} else {
        return createdAt.toDateString();
    //}
};

module.exports = reactionSchema;