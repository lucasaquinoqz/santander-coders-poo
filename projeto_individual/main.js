class Bebida {
    static id = 1
    constructor(nome, preco, quantidade, imagem) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        this.imagem = imagem
    }
    divisor = 12
}

class Vinho extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = Bebida.id++
    }
    divisor = 6
}

class Cachaca extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = Bebida.id++
    }
    divisor = 8
}

class Vodka extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = Bebida.id++
    }
    divisor = 10
}

class Cerveja extends Bebida {
    constructor(nome, preco, quantidade, imagem) {
        super(nome, preco, quantidade, imagem)
        this.id = Bebida.id++
    }
    divisor = 24
}

Bebida.prototype.armazenamentoCaixa = function () {
    let totalCaixas = this.quantidade / this.divisor
    return Math.ceil(totalCaixas)
}

Vinho.prototype.armazenamentoCaixa = function () {
    let totalCaixas = this.quantidade / this.divisor
    return Math.ceil(totalCaixas)
}

Cachaca.prototype.armazenamentoCaixa = function () {
    let totalCaixas = this.quantidade / this.divisor
    return Math.ceil(totalCaixas)
}

Vodka.prototype.armazenamentoCaixa = function () {
    let totalCaixas = this.quantidade / this.divisor
    return Math.ceil(totalCaixas)
}

Cerveja.prototype.armazenamentoCaixa = function () {
    let totalCaixas = this.quantidade / this.divisor
    return Math.ceil(totalCaixas)
}

const produtos = []

class Catalogo {
    #nome = document.querySelector('#nome')
    #preco = document.querySelector('#preco')
    #quantidade = document.querySelector('#quantidade')
    #tipo = document.querySelector('#tipo')

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
                        <button id="remover" class="btn-remover" onclick='Catalogo.remover(${val.id})'><img src="src/x_106506.png" alt="img-remover"></button>
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
                Catalogo.limparCampos()
                break;

            case "cachaça":
                imagem = "src/cachaca.png"
                produtos.push(new Cachaca(nome, preco, quantidade, imagem))
                Catalogo.limparCampos()
                break;

            case "vodka":
                imagem = "src/vodka.png"
                produtos.push(new Vodka(nome, preco, quantidade, imagem))
                Catalogo.limparCampos()
                break;

            case "cerveja":
                imagem = "src/cerveja.png"
                produtos.push(new Cerveja(nome, preco, quantidade, imagem))
                Catalogo.limparCampos()
                break;

            default:
                break;
        }
        Catalogo.imprimir()
    }

    static limparCampos() {
        nome.value = ""
        preco.value = ""
        quantidade.value = ""
        tipo.value = ""
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
        Catalogo.limparCampos()
        Catalogo.imprimir()
    }

    static cancelaEdicao() {
        Catalogo.limparCampos()
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
                        <button id="remover" class="btn-remover" onclick='Catalogo.remover(${produtos[index].id})'><img src="src/x_106506.png" alt="img-remover"></button>
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
                        <button id="editarConcluir" onclick='Catalogo.finalizaEdicao(${index})'>Concluir</button>
                        <button id="editarCancelar" onclick='Catalogo.cancelaEdicao()'>Cancelar</button>
                    </div>
                </div>
            </div>
        `
    }
}

Catalogo.adicionar('Vinho Pergola', '50', '12', 'vinho')
Catalogo.adicionar('Cachaça Matuta', '30', '15', 'cachaça')
Catalogo.adicionar('Vodka Smirnoff ', '40', '10', 'vodka')
Catalogo.adicionar('Cerveja Eisenbahn', '60', '50', 'cerveja')

Catalogo.init()
Catalogo.imprimir()