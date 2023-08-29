// const agenda = {
//     contatos: [
//         {
//             nome:'Contato 1',
//             telefone:'8494643401',
//             email:'contato1@gmail.com',
//         }
//     ],
//     adicionar: function(contato) {
//         this.contatos.push(contato)
//     }
// }

// const a = agenda
// a.adicionar({nome: 'Contato 2', telefone: '8494648956', email: 'contato2@gmail.com'})
// console.log(a.contatos)

class Agenda {
    #contatos = []
    constructor() {}
    set contatos(contato) {
        if(this.#validarContato(contato)){
            this.#contatos.push(contato)
        }
    }
    get contatos() {
        return this.#contatos
    }

    #validarContato(contato) {
        return contato.nome.trim() != ""
    }

    // adicionarContato(contato) {
    //     // this.contatos = contato
    //     if(contato.nome.trim() === ""){return}
    //     this.#contatos.push(contato)
    // }
}

class Contato {
    #nome
    #telefone
    #email
    constructor(nome, telefone, email){
        this.#nome = nome
        this.#telefone = telefone
        this.#email = email
    }

    get nome() {
        return this.#nome
    }

    get telefone() {
        return this.#telefone
    }

    get email() {
        return this.#email
    }
}

const ag = new Agenda()
ag.contatos = {nome: 'Contato 3', telefone: '8494645823', email: 'contato3@gmail.com'}
ag.contatos = {nome: 'Contato 4', telefone: '8494644187', email: 'contato4@gmail.com'}
ag.contatos = {nome: 'Contato 5', telefone: '8494645269', email: 'contato5@gmail.com'}
ag.contatos = {nome: 'Contato 6', telefone: '8494648574', email: 'contato6@gmail.com'}
// const c = new Contato('Contato 7', '8494645696', 'contato7@gmail.com')
ag.contatos = new Contato('Contato 7', '8494645696', 'contato7@gmail.com')
console.log(ag.contatos)
// console.log(c)