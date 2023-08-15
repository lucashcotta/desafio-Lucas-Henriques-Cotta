import { CaixaDaLanchonete } from './caixa-da-lanchonete.js';

function main() {
    const caixa = new CaixaDaLanchonete();
    
    caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
   
}

main();