const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: false },
    nascimento: { type: String, unique: false, required: true },
    civil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: false },
    tel1: { type: String, unique: false, required: false },
    tel2: { type: String, unique: false, required: false },
    cel: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: false },
    identidade: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    cnh: { type: String, unique: false, required: false },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);