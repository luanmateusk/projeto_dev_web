import readline from 'readline'

const api = 'https://api1.binance.com/api/v3/exchangeInfo';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu nome? ', (name) => {
  console.log(`Olá, ${name}!`);
});