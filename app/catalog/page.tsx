
import style from './catalog.module.css'
import { Card } from '../components/Card/Card'
import { getByParams,getBrands,getCategories } from '../helpers/apiHandlers'
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs'

import { CardList } from './CardList/CardList'
import { Search } from '../components/Search/Search'

import { CatalogSettings } from '../components/CatalogSettings/CataogSettings'
import { getCategoryData } from '@/utils/getProductData'
export default async function Catalog({searchParams}:{searchParams:{[key: string]: string | string[] | undefined}}) {
    
    const crumbs = [{href:'/catalog',text:'Каталог'}] 

    const fetchedCategories = await getCategories()
    const categories = fetchedCategories.categories
    const fetchedBrands = await getBrands()
    const brands = fetchedBrands.brands
    const searchCategory = Number(searchParams['category'])
    const search = searchParams['search'] ? String(searchParams['search']): null 
    const brand = searchParams['brands'] ? String(searchParams['brands'])  : null 
    const orderedBy = searchParams['orderedBy'] ? String(searchParams['orderedBy']) : null
    const categoryId = searchParams['category'] ? Number(searchParams['category']) : null
    const category =  isNaN(searchCategory) != true ? await getCategoryData(searchCategory) : null 

    const res = await getByParams({skip:0,size:12,category:category?.id,search:search,brand:brand,orderedBy:orderedBy})
    const CARDS = res.products ? res.products : [] 
    return (
        
                
           <>
             <BreadCrumbs crumbs={ category ? [...crumbs, {href:`/catalog?c=${category.id}`,text:category.name}] :crumbs}></BreadCrumbs>   
            
             <Search></Search>
            <div className={style.content}>
            <CatalogSettings brands={brands} categories={categories}></CatalogSettings>
            {CARDS.length > 0 ? (<ul className={style.list}>
                        {CARDS.map(item=>(
                            <Card key={item.id} name={item.name} id={item.id} price={item.price} image={item.image}/>
                        ))}
                        <CardList brand={brand} category={category?.id} orderedBy={orderedBy} search={search} />
            </ul>):(
                <p>Ничего не нашлось</p>
            )}
            </div>
           </>
            
    )
}