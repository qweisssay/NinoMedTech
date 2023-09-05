
import { iBrand } from "../types/Product";
export type getBrandsData = { 
    brands: iBrand[]
}
export async function getBrandById (id:number):Promise<{item:iBrand} | null> { 
  try {
      const res = await fetch(`http://localhost:3000/api/brands/${id}`,{next: {
          revalidate: 60
      }});
      return res.json()
    } catch (error) {
        console.log(error)
        return null
    } 
}
export async function getBrands ():Promise<getBrandsData> { 
    try {
      const res = await fetch(`http://localhost:3000/api/brands`,{
        next: {
            revalidate: 60
        }
      });
      return res.json()
    } catch (error) {
        console.log(error)
        return {brands:[]}
    } 
}