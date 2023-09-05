


interface iSendMessage { 
    email:string,
    name?:string,
    products:string[],
    message:string
}


export function sendMessage({email,name,products,message}:iSendMessage) {
    const data = {
        subject: `Заказ ${email}`,
        text: `Товары: ${products.join(', ')}'\n'Имя: ${name}\n Сообщение клиента: ${message}`,
    }
    fetch('http://localhost:3000/api/message',{method:'POST',headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),body:JSON.stringify(data)}).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
}
