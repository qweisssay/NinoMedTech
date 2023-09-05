import prisma from "@/utils/prisma";


export async function getProductData (id:number) { 
    try {
        const product = await prisma.products.findUnique({where:{id}})
        
        return product
        
    }
    catch (e) { 
        console.log(e)
        return null
    }
}
export async function getBrandData(id:number | null | undefined) {
    if (id != null && id != undefined) {
        const brand = await prisma.brands.findUnique({where:{id}})
        return brand
    }
    return null
}
export async function getCategoryData(id:number | null | undefined) {
    if (id != null && id != undefined) {
        const category = await prisma.categories.findUnique({where:{id}})
        return category
    }
    return null
}