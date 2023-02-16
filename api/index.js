
import axios from 'axios';
// const axios = require('axios')
const api = 'https://api1.binance.com/api/v3/exchangeInfo';

const config = {
    timeout: 10000,
}

let ax = axios.create(config)

async function main() {
    try {
        const retorno = await ax.get(api)
            .then(ret => ret.data)
            .catch(err => console.log(err))
            
        // const retorno = await axios.get(api).then(ret => ret.data).catch(err => console.log(err))

        const retornoFIltrado = retorno.symbols.filter(item => item.symbol.includes('BRL'))

        const retonoNomes = retornoFIltrado.map(element => {
            return {
                quoteAsset: element.quoteAsset,
                baseAsset: element.baseAsset,
                status: element.status,
            }
        });
        let retonoNomes2 = []
        retornoFIltrado.forEach(element => {
            retonoNomes2.push({
                quoteAsset: element.quoteAsset,
                baseAsset: element.baseAsset,
                status: element.status,
            })
        });
        console.log(retonoNomes)
        console.log(retonoNomes2)
    } catch (err) {
        console.log(err)
    }
}

main()


