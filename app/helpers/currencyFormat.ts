export function currencyFormat (number:number):string {
    const price = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number).split(',')
    
    return `${price[0].concat(` ${price[1].split('')[3]}`)}` 
}