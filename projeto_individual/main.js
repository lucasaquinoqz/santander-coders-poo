const inputNome = document.querySelector('#nome')
const inputPreco = document.querySelector('#preco')
const cadastra = document.querySelector('#cadastra')
const itens = document.querySelector('main .conteiner')

class Menu {
    #lista = []
    constructor() { }

    // set lista(vinho) {
    //     this.#lista.push(vinho)
    // }

    get lista() {
        return this.#lista
    }

    adicionar(nome, preco) {
        this.lista.push(new Vinho(nome, preco))
    }

    ler() {
        itens.innerHTML = ''

        this.#lista.forEach((value) => {
            itens.innerHTML += `
            <div class="item">
                <div class="img"></div>
                <div class="descricao-geral">
                    <div class="descricao">
                        <div class="nome-vinho">${value.nome}</div>
                        <div class="preco">${value.preco}</div>
                    </div>
                    <div class="comprar"></div>
                </div>
            </div>
            `})
    }

    editar(vinho) {

    }

    apagar(id) {
        let indice = this.#lista.map(e => e.id).indexOf(id)
        this.#lista.splice(indice, 1);
    }
}


let id = 1
class Vinho {
    constructor(nome, preco) {
        this.id = id++
        this.nome = nome
        this.preco = preco
    }  
}

const menu = new Menu()


menu.adicionar('Vinho Chileno', '50') 
menu.adicionar('Vinho Americano', '30')
menu.adicionar('Vinho Brasileiro', '40')
menu.adicionar('Vinho Paraguaio', '60')

menu.ler()


cadastra.addEventListener('click', function(inputNome, inputPreco) {
    console.log(inputNome.va)
    
})



