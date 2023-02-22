import axios from 'axios'

const config = {
    timeout: 10000,
    url: 'https://api1.binance.com/api/v3'
}

const api = axios.create(config)

class Binance {
    async buscarPares() {
        try {
            const data = await axios.get('https://api1.binance.com/api/v3/exchangeInfo').then(res => res.data.symbols);
            return data;
        } catch (err) {
            throw err
        }
    }
    async livroDeOrdem(par) {
        try {
            return await axios.get('https://api1.binance.com/api/v3/depth', {
                params: {
                    symbol: par,
                    limit: 1
                }
            }).then(res => res.data);
        } catch (err) {
            throw err
        }
    }
}
const binance = new Binance();
export default binance;