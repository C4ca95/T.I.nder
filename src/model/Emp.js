const { Schema, model } = require("mongoose");

const EmpSchema = new Schema({
    id:{
        type:int
    },
    cidade:{
        type:String,
        require: true
    },
    estado:{
        type:String,
        require:true
    },
    senha:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    nome: {
        type: String,
        require: true,
    },
    avatar:{
        type:String
    },
    cnpj:{
        type:String,
        require:true
    },
    telefone:{
        type:String,
        require:true
    }
}, {
    timestamps: true,
});

module.exports = model('Emp', EmpSchema);