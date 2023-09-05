'use client'



export function ProductTest () { 
    const tester = ()=> fetch('http://localhost:3000/api/products').then(res=>res.json()).then(result=>console.log(result))
    return (
        <button onClick={tester}>
                ПРОДУКТЫ
        </button>
    )
}