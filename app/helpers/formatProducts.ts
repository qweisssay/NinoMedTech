import { iCard, iProduct } from "../types/Product";


export function formatProducts(products:iProduct[]):iCard[] {
    return products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description
        }))}