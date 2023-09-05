import { iCategory } from "../types/Product";
export async function getCategoryById (id:number):Promise<{item:iCategory} | null> { 
    try {
        const res = await fetch(`http://localhost:3000/api/categories/${id}`,{next: {
            revalidate: 60
        }});
        return res.json()
      } catch (error) {
          console.log(error)
          return null
      } 
}
export async function getCategories ():Promise<{categories:iCategory[]}> { 
    try {
        const res = await fetch(`http://localhost:3000/api/categories`,{next: {
            revalidate: 60
        }});
        
        return res.json()
      } catch (error) {
          
          return {categories:[]}
      } 
}