import readline from 'readline'
import axios from 'axios'
import { exit } from 'process';

const api = 'https://api1.binance.com/api/v3/exchangeInfo';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var testeInput;

//while(!testeInput) {
rl.question('Você deseja comprar qual moeda? ', (moeda) => {
    if (moeda != "") {
        testeInput = true;
        try {
            axios.get(api).then(exchange_info => {
                // Filtra os pares de negociação que envolvem a moeda digitada
                const moeda_pairs = exchange_info.data.symbols
                    .filter(symbol => symbol.symbol.includes(moeda.toUpperCase()))
                    .map(symbol => symbol.symbol);

                if (moeda_pairs.length === 0) {
                    console.log(`Essa moeda '${moeda}' não existe!`);
                    //testeInput = false;
                } else {
                    console.log(moeda_pairs);
                    rl.question('Qual das possibilidades de trades deseja verficar? ', (combinacao) => {

                        if (!moeda_pairs.includes(combinacao.toUpperCase())) {
                            console.log(`Combinação inválida: ${combinacao} não é uma combinação válida para esta negociação!`);
                            exit(1);
                        }

                        axios.get(`https://api1.binance.com/api/v3/depth`,
                            {
                                params: {
                                    limit: 1,
                                    symbol: combinacao
                                }
                            }).then(info => {
                                console.log(info.data);
                            })

                    })

                }
            });
        } catch {
            console.log(`Essa moeda '${moeda}' não existe!`);
        }
    } else {
        console.log('Informe a moeda correta dentro desta lista:');
    }
});
//}
