/*
    pedir para que o usuário informe a sigla de uma criptomoeda,
    a aplicação deve validar se existe algum par para negociação, 
    caso não exista informar que não existe e perguntar novamente ou sair.
    caso exista deverá pedir qual par de ativos o usuario deseja pegar as informações de compra e venda no momento
    o preco de compra(bids) ou o preco de venda(asks)
    endpoint que possui os pares negociaveis
    https://api1.binance.com/api/v3/exchangeInfo
    endpoint para pegar as ofertas
    requisição get 
    https://api1.binance.com/api/v3/depth
    parametro {
        symbol: symbolinformado,
        limit: quantidade de ofertas (no caso coloca 1)
    }
*/

import readline from 'readline'
import Binance from './binance.service.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// função que aguarda o cara responder a pergunta
const pergunta = (pergunta) => new Promise(resolve => rl.question(`${pergunta}\n`, resolve))

async function init() {
    // popula a const pares com os valores retornados da api 
    const pares = await Binance.buscarPares();

    // faz uma pergunta
    const moeda = await pergunta("Informe a moeda que deseja negociar?")

    // atribui os valores filtrados para a const
    const paresFiltrados = pares
        // estrutura de filtro de um array
        .filter(symbol => symbol.symbol.includes(moeda.toUpperCase()))
        // percorre a lista filtrada e pega apenas o atributo symbol
        .map(symbol => symbol.symbol);

    if (paresFiltrados.length > 0) {
        console.log(paresFiltrados)

        const moeda2 = await pergunta("Escolha um par e digite o symbol?")
        const res = await Binance.livroDeOrdem(moeda2.toUpperCase());

        if (res) {
            if (res.asks.length > 0 && res.bids.length > 0) {
                console.log(`O preço para venda é: ${Number(res.asks[0][0]).toFixed(2)}`)
                console.log(`O preço para compra é: ${Number(res.bids[0][0]).toFixed(2)}`)
            } else {
                console.log('Não há orderm de compra nem venda')
            }
        } else {
            console.log('Nenhum resultado encontrado!')
        }
    } else {
        console.log('Nenhum resultado encontrado!')
    }
}

init()