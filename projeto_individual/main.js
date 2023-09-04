produtos = []

class Catalogo {
    #nome = document.querySelector('#nome')
    #preco = document.querySelector('#preco')
    #quantidade = document.querySelector('#quantidade')
    #tipo = document.querySelector('#tipo')
    #imagem = document.querySelector('#imagem')

    constructor() { }
    static imprimir() {
        const lista = produtos.reduce((acc, val) => {
            return acc + `
            <div class="item" id="item${val.id}">
                <div class="img">
                    <div class="img-produto">
                        <img src=${val.imagem} alt="imagem_${val.nome}">
                    </div>
                    <div class="remover">
                        <button id="remover" onclick='Catalogo.remover(${val.id})'>Remover</button>
                    </div>
                </div>
                <div class="descricao-geral">
                    <div class="descricao">
                        <div class="nome-vinho">${val.nome}</div>
                        <div class="preco">R$ ${val.preco}</div>
                        <div class="quantidade">Quantidade: ${val.quantidade}</div>
                        <div class="totalCaixas">Total de caixas: ${val.armazenamentoCaixa()}</div>
                    </div>
                    <div class="comprar">
                        <button id="editar" onclick='Catalogo.editar(${val.id})'>Editar</button>
                    </div>
                </div>
            </div>
            `
        }, "")
        document.querySelector('main .conteiner').innerHTML = lista

    }

    static init() {
        // this.nome = document.querySelector('#nome')
        // this.preco = document.querySelector('#preco')
        this.cadastra = document.querySelector('#cadastra')
        this.cadastra.addEventListener('click', function () {
            Catalogo.adicionar(nome.value, preco.value, quantidade.value, tipo.value)
        })
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get preco() {
        return this.#preco
    }

    set preco(preco) {
        this.#preco = preco
    }

    get quantidade() {
        return this.#quantidade
    }

    set quantidade(quantidade) {
        this.#quantidade = quantidade
    }

    get tipo() {
        return this.#tipo
    }

    set tipo(tipo) {
        this.#tipo = tipo
    }

    static adicionar(nome, preco, quantidade, tipo) {
        let imagem
        switch (tipo) {
            case "vinho":
                imagem = "src/vinho.png"
                produtos.push(new Vinho(nome, preco, quantidade, imagem))
                break;

            case "cachaça":
                imagem = "src/cachaca.png"
                produtos.push(new Cachaca(nome, preco, quantidade, imagem))
                break;

            case "vodka":
                imagem = "src/vodka.png"
                produtos.push(new Vodka(nome, preco, quantidade, imagem))
                break;

            case "cerveja":
                imagem = "src/cerveja.png"
                produtos.push(new Cerveja(nome, preco, quantidade, imagem))
                break;

            default:
                break;
        }
        Catalogo.imprimir()
    }

    static remover(indice) {
        let index = produtos.map(e => e.id).indexOf(indice)
        produtos.splice(index, 1);
        Catalogo.imprimir()
    }

    static finalizaEdicao(index) {
        produtos[index].nome = novoNome.value
        produtos[index].preco = novoPreco.value
        produtos[index].quantidade = novaQuantidade.value
        Catalogo.imprimir()
    }

    static editar(indice) {
        let index = produtos.map(e => e.id).indexOf(indice)
        let item = document.querySelector(`#item${indice}`)

        item.innerHTML = `
        <div id="item${produtos[index].id}">
                <div class="img">
                    <div class="img-produto">
                        <img src=${produtos[index].imagem} alt="imagem_${produtos[index].nome}">
                    </div>
                    <div class="remover">
                        <button id="remover" onclick='Catalogo.remover(${produtos[index].id})'>Remover</button>
                    </div>
                </div>
                <div class="descricao-geral">
                    <div class="descricao">
                        <div class="nome-vinho"><input type="text" name="novoNome" id="novoNome" value="${produtos[index].nome}"></div>
                        <div class="preco"><input type="text" name="novoPreco" id="novoPreco" value="${produtos[index].preco}"></div>
                        <div class="preco"><input type="text" name="novaQuantidade" id="novaQuantidade" value="${produtos[index].quantidade}"></div>
                        <div class="totalCaixas">Total de caixas: ${produtos[index].armazenamentoCaixa()}</div>
                    </div>
                    <div class="comprar">
                        <button id="editar" onclick='Catalogo.finalizaEdicao(${index})'>Concluir</button>
                    </div>
                </div>
            </div>
        `
    }
}


let id = 1

class Bebida {
    constructor(nome, preco, quantidade, imagem) {
        this.id = id++
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        this.imagem = imagem
    }

    armazenamentoCaixa() {
        let totalCaixas = this.quantidade / 12
        return Math.ceil(totalCaixas)
    }

}

class Vinho extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = id++
    }

    armazenamentoCaixa() {
        let totalCaixas = this.quantidade / 6
        return Math.ceil(totalCaixas)
    }
}

class Cachaca extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = id++
    }

    armazenamentoCaixa() {
        let totalCaixas = this.quantidade / 10
        return Math.ceil(totalCaixas)
    }
}

class Vodka extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = id++
    }

    armazenamentoCaixa() {
        let totalCaixas = this.quantidade / 8
        return Math.ceil(totalCaixas)
    }
}

class Cerveja extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = id++
    }

    armazenamentoCaixa() {
        let totalCaixas = this.quantidade / 24
        return Math.ceil(totalCaixas)
    }
}

// const cadastra = document.querySelector('#cadastra')
// const inputNome = document.querySelector('#nome')
// const inputPreco = document.querySelector('#preco')

// cadastra.addEventListener('click', function(){
//     Catalogo.adicionar(inputNome.value, inputPreco.value)
// })


Catalogo.adicionar('Vinho Chileno', '50', '5', 'vinho')
Catalogo.adicionar('Vinho Americano', '30', '5', 'vinho')
Catalogo.adicionar('Vinho Brasileiro', '40', '10', 'vinho')
Catalogo.adicionar('Vinho Paraguaio', '60', '10', 'vinho')

Catalogo.init()
Catalogo.imprimir()