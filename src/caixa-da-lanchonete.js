

const menu = [
    {
       codigo: 'cafe',
       descrição: 'Café',
       valor: 3.00
    },
    {
        codigo: 'chantily',
        descrição: 'Chantily (extra do Café)',
        valor: 1.50
     },
     {
        codigo: 'suco',
        descrição: 'Suco Natural',
        valor: 6.20
     },
     {
        codigo: 'sanduiche',
        descrição: 'Sanduíche',
        valor: 6.50
     },
     {
        codigo: 'queijo',
        descrição: 'Queijo (extra do Sanduíche)',
        valor: 2.00
     },
     {
        codigo: 'salgado',
        descrição: 'Salgado',
        valor: 7.25
     },
     {
        codigo: 'combo1',
        descrição: '1 Suco e 1 Sanduíche',
        valor: 9.50
     },
     {
        codigo: 'combo2',
        descrição: '1 Café e 1 Sanduíche',
        valor: 7.50
     },   
];

class CaixaDaLanchonete {

    constructor(menu){
        this.menu=menu;
    }
    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0.00;
        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
            
        }

        for(const item of itens){
            const [codigo, quantidade] = item.split(',');
            const menuItem = menu.find(menuItem => menuItem.codigo === codigo);  
            if (!menuItem) {
                return "Item inválido!";
                
            }else if(quantidade <= 0) {
                return "Quantidade inválida!";
                
            }
    
            
            
            if (menuItem.codigo === 'queijo') {
                const sanduicheNoCarrinho = itens.some(item => item.includes('sanduiche'));
                if (!sanduicheNoCarrinho) {
                    return "Item extra não pode ser pedido sem o principal";
                    
                }
            } else if (menuItem.codigo === 'chantily') {
                const cafeNoCarrinho = itens.some(item => item.includes('cafe'));
                if (!cafeNoCarrinho) {
                    return "Item extra não pode ser pedido sem o principal";
                    
                }
            }
            total += menuItem.valor * parseInt(quantidade);  
        }
        
        switch(metodoDePagamento){
            case 'debito':
                total
                break;
            case 'credito':
                total *= 1.03
                break;
            case 'dinheiro':
                total *= 0.95
                break;
            default:
                return "Forma de pagamento inválida!";
                   
                
        }
        return `R$ ${total.toFixed(2).replace('.', ',')}`

       
        
    }


}

export { CaixaDaLanchonete };
