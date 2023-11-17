 const { Schema, model } = require("mongoose");

const DevSchema = new Schema({
    id:{
        type:int
    },
    name: {
        type: String,
        require: true,
    },
    cidade:{
        type:String,
        require:true
    },
    senha:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        require:true
    },
    user: {
        type: String,
        require: true,
    },
    bio: String,
    avatar: {
        type: String,
        require: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    matchs: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    deslikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);