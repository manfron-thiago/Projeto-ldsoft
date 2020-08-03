export class Carro {

    constructor(key: String, nome: String, dataNascimento: Date) {
        this.key = key;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    key: String;
    nome: String;
    dataNascimento:Date;
}