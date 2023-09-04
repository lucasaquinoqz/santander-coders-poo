produtos = []

class Catalogo {
    constructor(){}
    static imprimir() {
        const lista = produtos.reduce((acc, val) => {
            return acc + `
            <div class="item" id="item${val.id}">
                <div class="img">
                    <div class="remover">
                        <button id="remover" class="btn-remover" onclick='Catalogo.remover(${val.id})'><img src="src/x_106506.png" alt="img-remover"></button>
                    </div>
                </div>
                <div class="descricao-geral">
                    <div class="descricao">
                        <div class="nome-vinho">${val.nome}</div>
                        <div class="preco">${val.preco}</div>
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
    
    static adicionar(nome, preco) {
        produtos.push(new Vinho(nome, preco))
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
        Catalogo.imprimir()
    }

    static editar(indice) {
        let index = produtos.map(e => e.id).indexOf(indice)
        let item = document.querySelector(`#item${indice}`)
        
        item.innerHTML = `
        <div class="item" id="item${produtos[index].id}">
                <div class="img">
                    <div class="remover">
                        <button id="remover" onclick='Catalogo.remover(${produtos[index].id})'>Remover</button>
                    </div>
                </div>
                <div class="descricao-geral">
                    <div class="descricao">
                        <div class="nome-vinho"><input type="text" name="novoNome" id="novoNome" value="${produtos[index].nome}"></div>
                        <div class="preco"><input type="text" name="novoPreco" id="novoPreco" value="${produtos[index].preco}"></div>
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
class Vinho {
    constructor(nome, preco) {
        this.id = id++
        this.nome = nome
        this.preco = preco
    }  
}

const cadastra = document.querySelector('#cadastra')
const inputNome = document.querySelector('#nome')
const inputPreco = document.querySelector('#preco')

cadastra.addEventListener('click', function(){
    Catalogo.adicionar(inputNome.value, inputPreco.value)
})


Catalogo.adicionar('Vinho Chileno', '50')
Catalogo.adicionar('Vinho Americano', '30')
Catalogo.adicionar('Vinho Brasileiro', '40')
Catalogo.adicionar('Vinho Paraguaio', '60')

Catalogo.imprimir()