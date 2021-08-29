const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, nascimento, civil, genero, endereco, bairro, cidade, cep, tel1, tel2, cel, contato, email, identidade, cpf, veiculo, cnh } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.nascimento = nascimento;
        newCandidate.civil = civil;
        newCandidate.genero = genero;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.cep = cep;
        newCandidate.tel1 = tel1;
        newCandidate.tel2 = tel2;
        newCandidate.cel = cel;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('iti malia deu probleminha!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};